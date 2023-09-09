import { RootStackParamList } from '../../routes/drawer';
import { DrawerScreenProps } from '@react-navigation/drawer';

export interface HeaderProps
  extends Omit<DrawerScreenProps<RootStackParamList, 'Home'>, 'route'> {
  title: string;
}
