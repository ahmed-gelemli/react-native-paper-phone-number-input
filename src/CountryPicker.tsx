import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
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
import type { CountryPickerProps, CountryPickerRef, RNPaperTextInputRef } from './types';
import { useDebouncedValue } from './use-debounced-value';
import { getCountryByCode } from './utils';

const isIOS = Platform.OS === 'ios';

export const CountryPicker = forwardRef<CountryPickerRef, CountryPickerProps>(
  (
    {
      country,
      setCountry,
      showFirstOnList,
      // Prpos from TextInput that needs special handling
      disabled,
      editable = true,
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

    const [countryFlag, setCountryFlag] = useState('');

    // States for the searchbar
    const [searchQuery, setSearchQuery] = useState('');
    const debouncedSearchQuery = useDebouncedValue(searchQuery, 300);

    const searchbarRef = useRef<RNPaperTextInputRef>(null);

    const openModal = () => {
      setVisible(true);
      setTimeout(() => {
        searchbarRef.current?.focus();
      }, 100);
    };

    useImperativeHandle(ref, () => ({
      openCountryPicker: openModal,
      closeCountryPicker: () => setVisible(false),
    }));

    const countriesList = useMemo(() => {
      if (!showFirstOnList?.length) {
        return countries;
      }

      const countriesToShowOnTop = showFirstOnList.map((code) => ({
        ...getCountryByCode(code),
        code,
      }));

      return [
        ...countriesToShowOnTop,
        ...countries.filter(
          (country) => !countriesToShowOnTop.some((c) => c.code === country.code)
        ),
      ];
    }, [showFirstOnList]);

    const searchResult = useMemo(() => {
      if (!debouncedSearchQuery) {
        return countriesList;
      }

      return countriesList.filter((country) => {
        return (
          (debouncedSearchQuery.length < 3 &&
            country.code.toLocaleLowerCase().includes(debouncedSearchQuery.toLocaleLowerCase())) ||
          country.name.toLocaleLowerCase().includes(debouncedSearchQuery.toLocaleLowerCase())
        );
      });
    }, [debouncedSearchQuery, countriesList]);

    const value = useMemo(() => {
      if (country) {
        return `${countryFlag} ${country}`;
      }

      return 'Please select a country';
    }, [country, countryFlag]);

    useEffect(() => {
      if (country) {
        const matchedCountry = countries.find(
          (c) => c.name.toLocaleLowerCase() === country.toLocaleLowerCase()
        );

        if (matchedCountry) {
          setCountryFlag(matchedCountry.flag);
        }
      }
    }, []);

    return (
      <View>
        <TextInput
          right={<TextInput.Icon icon="chevron-down" />}
          {...rest}
          disabled={disabled}
          editable={editable}
          onChangeText={setCountry}
          value={value}
        />
        <TouchableRipple
          disabled={disabled || !editable}
          style={[styles.ripple]}
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
              <FlatList
                data={searchResult}
                keyExtractor={(item) => item.code}
                renderItem={({ item }) => (
                  <DataTable.Row
                    onPress={() => {
                      setCountry(item.name);
                      setCountryFlag(item.flag);
                      setVisible(false);
                    }}
                  >
                    <DataTable.Cell>{`${item.flag}     ${item.name}`}</DataTable.Cell>
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
    right: 0,
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
    marginBottom: isIOS ? 150 : undefined,
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
