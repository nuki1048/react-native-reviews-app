import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles } from '../../styles/global';
import Card from '../../shared/card/card';
import { ReviewDetailsProps } from './reviewDetails.props';

export default function ReviewDetails({
  route,
}: ReviewDetailsProps): JSX.Element {
  const { params } = route;
  const { body, rating, title } = params;
  const ratingArray = [...Array(rating).keys()];

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text style={globalStyles.titleText}>{body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <View style={styles.ratingList}>
            {ratingArray.map((item: number) => (
              <Image source={require('../../assets/rating-1.png')} key={item} />
            ))}
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  ratingList: { flexDirection: 'row', gap: 2 },
});
