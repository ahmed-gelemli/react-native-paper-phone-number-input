import { useTheme } from 'react-native-paper';
import type { InternalTheme, ThemeProp } from 'react-native-paper/lib/typescript/types';
import { defaultFlagsFont, isWeb } from './constants';

export default function useThemeWithFlagsFont(themeOverrides?: ThemeProp) {
  const theme = useTheme<InternalTheme>(themeOverrides);

  if (isWeb) {
    if (theme.isV3) {
      theme.fonts.bodyLarge.fontFamily = `${defaultFlagsFont}, ${theme.fonts.bodyLarge.fontFamily}`;
      theme.fonts.default.fontFamily = `${defaultFlagsFont}, ${theme.fonts.default.fontFamily}`;
    } else {
      theme.fonts.regular.fontFamily = `${defaultFlagsFont}, ${theme.fonts.regular.fontFamily}`;
    }
  }

  return theme;
}
