import { Text, TouchableOpacity } from 'react-native';
import Card from '../card/card';
import { globalStyles } from '../../styles/global';
import { ReviewItemProps } from './reviewItem.props';

const ReviewItem = (props: ReviewItemProps): JSX.Element => (
  <TouchableOpacity onPress={() => props.onPress(props)}>
    <Card>
      <Text style={globalStyles.titleText}>{props.title}</Text>
    </Card>
  </TouchableOpacity>
);
export default ReviewItem;
