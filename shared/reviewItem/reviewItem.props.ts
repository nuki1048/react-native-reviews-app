import { Review } from '../../screens/home/home';

export interface ReviewItemProps extends Review {
  onPress: (item: Review) => void;
}
