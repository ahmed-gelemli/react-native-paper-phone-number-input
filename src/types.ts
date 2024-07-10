import type { TextInput as NativeTextInput, StyleProp, ViewStyle } from 'react-native';
import type { TextInputProps } from 'react-native-paper';

export type RNPaperTextInputRef = Pick<
  NativeTextInput,
  'focus' | 'clear' | 'blur' | 'isFocused' | 'setNativeProps'
>;

export interface PhoneNumberInputRef extends RNPaperTextInputRef {
  openCountryPicker: () => void;
  closeCountryPicker: () => void;
}

export interface PhoneNumberInputProps extends Omit<TextInputProps, 'value' | 'onChangeText'> {
  code?: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  phoneNumber?: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string | undefined>>;
  showFirstOnList?: string[];
  modalStyle?: StyleProp<ViewStyle>;
  modalContainerStyle?: StyleProp<ViewStyle>;
}

export interface CountryPickerRef {
  openCountryPicker: () => void;
  closeCountryPicker: () => void;
}

export interface CountryPickerProps extends Omit<TextInputProps, 'value' | 'onChangeText'> {
  country?: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  showFirstOnList?: string[];
  modalStyle?: StyleProp<ViewStyle>;
  modalContainerStyle?: StyleProp<ViewStyle>;
}
