import { GestureResponderEvent } from 'react-native';

export interface FlatButtonProps {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  text: string;
}
