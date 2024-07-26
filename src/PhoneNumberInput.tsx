import React, { forwardRef, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { FlatList, Platform, StyleSheet, View } from 'react-native';
import {
  DataTable,
  IconButton,
  Modal,
  Portal,
  Searchbar,
  Text,
  TextInput,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { countries } from './data/countries';
import type { PhoneNumberInputProps, PhoneNumberInputRef, RNPaperTextInputRef } from './types';
import { useDebouncedValue } from './use-debounced-value';
import { getCountryByCode } from './utils';

const isIOS = Platform.OS === 'ios';

export const PhoneNumberInput = forwardRef<PhoneNumberInputRef, PhoneNumberInputProps>(
  (
    {
      code = '##',
      setCode,
      phoneNumber = '',
      setPhoneNumber,
      showFirstOnList,
      onlyCountries = [], // Add the new prop
      // Props from TextInput that needs special handling
      disabled,
      editable = true,
      keyboardType,
      modalStyle,
      modalContainerStyle,
      // rest of the props
      ...rest
    },
    ref
  ) => {
    const insets = useSafeAreaInsets();
    const theme = useTheme();

    // States for the modal
    const [visible, setVisible] = useState(false);

    // States for the searchbar
    const [searchQuery, setSearchQuery] = useState('');
    const debouncedSearchQuery = useDebouncedValue(searchQuery, 300);

    const country = getCountryByCode(code);

    const textInputRef = useRef<RNPaperTextInputRef>(null);
    const searchbarRef = useRef<RNPaperTextInputRef>(null);

    const onChangePhoneNumber = (text: string) => {
      const value = text.split(' ')[2];
      setPhoneNumber(value);
    };

    const openModal = () => {
      setVisible(true);
      setTimeout(() => {
        searchbarRef.current?.focus();
      }, 100);
    };

    useImperativeHandle(ref, () => ({
      focus: () => textInputRef.current?.focus(),
      clear: () => textInputRef.current?.clear(),
      blur: () => textInputRef.current?.blur(),
      isFocused: () => textInputRef.current?.isFocused() ?? false,
      setNativeProps: (props) => textInputRef.current?.setNativeProps(props),
      openCountryPicker: openModal,
      closeCountryPicker: () => setVisible(false),
    }));

    const countriesList = useMemo(() => {
      let filteredCountries = countries;
      if (onlyCountries.length > 0) {
        filteredCountries = countries.filter((country) => onlyCountries.includes(country.code));
      }

      if (!showFirstOnList?.length) {
        return filteredCountries;
      }

      const countriesToShowOnTop = showFirstOnList.map((code) => ({
        ...getCountryByCode(code),
        code,
      }));

      return [
        ...countriesToShowOnTop,
        ...filteredCountries.filter(
          (country) => !countriesToShowOnTop.some((c) => c.code === country.code)
        ),
      ];
    }, [showFirstOnList, onlyCountries]);

    const searchResult = useMemo(() => {
      if (!debouncedSearchQuery) {
        return countriesList;
      }

      return countriesList.filter((country) => {
        return (
          (debouncedSearchQuery.length < 3 &&
            country.code.toLocaleLowerCase().includes(debouncedSearchQuery.toLocaleLowerCase())) ||
          (debouncedSearchQuery.length < 6 &&
            Number.isInteger(Number(debouncedSearchQuery)) &&
            country.dialCode.includes(debouncedSearchQuery)) ||
          country.name.toLocaleLowerCase().includes(debouncedSearchQuery.toLocaleLowerCase())
        );
      });
    }, [debouncedSearchQuery, countriesList]);

    let width = 62;
    let baselineLength = 8;

    switch (country.dialCode.length) {
      case 1:
      case 2:
        width = 62;
        baselineLength = 8;
        break;
      case 3:
        width = 71;
        baselineLength = 9;
        break;
      case 4:
        width = 80;
        baselineLength = 10;
        break;
      case 5:
        width = 89;
        baselineLength = 11;
        break;
      default:
        width = 98;
        baselineLength = 12;
        break;
    }

    return (
      <View>
        <TextInput
          // @ts-ignore -- This type is wrong, it does not forward all the ref methods from native text input.
          ref={textInputRef}
          {...rest}
          disabled={disabled}
          editable={editable}
          onChangeText={onChangePhoneNumber}
          value={`${country.flag} ${country.dialCode} ${phoneNumber}`}
          keyboardType={keyboardType || 'phone-pad'}
          maxLength={baselineLength + country.length}
        />
        <TouchableRipple
          disabled={disabled || !editable}
          style={[styles.ripple, { width }]}
          onPress={openModal}
        >
          <Text> </Text>
        </TouchableRipple>
        <Portal>
          <Modal
            style={[
              styles.modal,
              {
                backgroundColor: theme.colors.background,
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
              },
              modalStyle,
            ]}
            contentContainerStyle={[styles.countries, modalContainerStyle]}
            visible={visible}
            onDismiss={() => setVisible(false)}
          >
            <View style={styles.searchbox}>
              <IconButton icon="arrow-left" onPress={() => setVisible(false)} />
              <Searchbar
                style={styles.searchbar}
                placeholder="Search"
                onChangeText={setSearchQuery}
                value={searchQuery}
                ref={searchbarRef}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === 'Escape') {
                    setVisible(false);
                  }
                }}
              />
            </View>
            <DataTable style={styles.flex1}>
              <DataTable.Header>
                <DataTable.Title>Country</DataTable.Title>
                <DataTable.Title numeric>Dial Code</DataTable.Title>
              </DataTable.Header>
              <FlatList
                data={searchResult}
                keyExtractor={(item) => item.code}
                renderItem={({ item }) => (
                  <DataTable.Row
                    onPress={() => {
                      setCode(item.code);
                      setVisible(false);
                    }}
                  >
                    <DataTable.Cell>{`${item.flag}     ${item.name}`}</DataTable.Cell>
                    <DataTable.Cell numeric>{item.dialCode}</DataTable.Cell>
                  </DataTable.Row>
                )}
              />
            </DataTable>
          </Modal>
        </Portal>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  ripple: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
  },
  flex1: {
    flex: isIOS ? undefined : 1,
  },
  modal: {
    marginTop: undefined,
    marginBottom: undefined,
    justifyContent: undefined,
  },
  countries: {
    padding: 16,
    flex: isIOS ? undefined : 1,
    marginBottom: isIOS ? 270 : undefined,
    justifyContent: undefined,
  },
  searchbox: {
    flexDirection: 'row',
  },
  searchbar: {
    flex: 1,
    alignItems: 'center',
  },
});
