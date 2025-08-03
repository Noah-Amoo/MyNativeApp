// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SymbolWeight } from 'expo-symbols';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

// type IconMapping = Record<SymbolViewProps['name'], ComponentProps<typeof MaterialIcons>['name']>;
// type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  'house.fill':        { name: 'home', library: 'MaterialIcons' },
  'paperplane.fill':   { name: 'send', library: 'MaterialIcons' },
  'chevron.left.forwardslash.chevron.right': { name: 'code', library: 'MaterialIcons' },
  'chevron.right':     { name: 'chevron-right', library: 'MaterialIcons' },
  'contacts':     { name: 'contacts', library: 'MaterialIcons' },
  'people-circle':     { name: 'people-circle', library: 'Ionicons' }, // Ionicons icon
} as const;

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: keyof typeof MAPPING;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  const icon = MAPPING[name];
  if (!icon) return null;
  if (icon.library === 'Ionicons') {
    return <Ionicons color={color} size={size} name={icon.name} style={style} />;
  }
  return <MaterialIcons color={color} size={size} name={icon.name} style={style} />;
}
