import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import AboutProps from './about.props';

export default function About(props: AboutProps): JSX.Element {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>About</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
