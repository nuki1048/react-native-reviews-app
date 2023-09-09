import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootStackParamList } from '../../routes/drawer';

export default interface AboutProps
  extends DrawerScreenProps<RootStackParamList, 'About'> {}
