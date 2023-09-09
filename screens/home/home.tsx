import React, { useState } from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../../styles/global';
import { FlatList } from 'react-native';
import ReviewForm from '../reviewForm/reviewForm';
import ReviewItem from '../../shared/reviewItem/reviewItem';
import { HomeProps } from './home.props';

export interface Review {
  title: string;
  rating: number;
  body: string;
  key: string;
}

export default function Home({ navigation }: HomeProps): JSX.Element {
  const [reviews, setReviews] = useState<Review[]>([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Gotta Catch Them All(again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: 'lorem ipsum',
      key: '3',
    },
  ]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const pressHandler = (item: Review): void => {
    navigation.navigate('ReviewDetails', item);
  };

  const onOpenModal = (): void => {
    setModalOpen(true);
  };

  const onCloseModal = (): void => {
    setModalOpen(false);
  };

  const onSubmitModalForm = (newReview: Review): void => {
    setReviews((prevState) => [newReview, ...prevState]);

    onCloseModal();
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.modalContent}>
          <MaterialIcons
            name='close'
            size={24}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={onCloseModal}
          />
          <ReviewForm onSubmit={onSubmitModalForm} />
        </View>
      </Modal>
      <MaterialIcons
        name='add'
        size={24}
        style={styles.modalToggle}
        onPress={onOpenModal}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <ReviewItem {...item} onPress={pressHandler} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2e9e9',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
