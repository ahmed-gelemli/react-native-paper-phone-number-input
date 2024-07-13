import { useTheme } from 'react-native-paper';
import type { MD2Theme, MD3Theme } from 'react-native-paper';
import type { InternalTheme, ThemeProp } from 'react-native-paper/lib/typescript/types';
import { defaultFlagsFont, isWeb } from './constants';
import type { $DeepPartial } from './types';

export default function useThemeWithFlagsFont(themeOverrides?: ThemeProp) {
  const theme = useTheme<InternalTheme>(themeOverrides);

  if (isWeb) {
    if (theme.isV3) {
      if ((themeOverrides as $DeepPartial<MD3Theme>)?.fonts?.bodyLarge?.fontFamily === undefined) {
        theme.fonts.bodyLarge.fontFamily = `${defaultFlagsFont}, ${theme.fonts.bodyLarge.fontFamily}`;
      }
      if ((themeOverrides as $DeepPartial<MD3Theme>)?.fonts?.default?.fontFamily === undefined) {
        theme.fonts.default.fontFamily = `${defaultFlagsFont}, ${theme.fonts.default.fontFamily}`;
      }
    } else {
      if ((themeOverrides as $DeepPartial<MD2Theme>)?.fonts?.regular?.fontFamily === undefined) {
        theme.fonts.regular.fontFamily = `${defaultFlagsFont}, ${theme.fonts.regular.fontFamily}`;
      }
    }
  }

  return theme;
}
