import React from 'react';
import { Text } from 'react-native-elements';
import { StyleSheet } from 'react-native';

const Error = ({ message }) => (
  message ? <Text style={styles.message}>{message}</Text> : null
);

const styles = StyleSheet.create({
  message: {
    fontSize: 15,
    color: 'red',
    marginBottom: 15,
  },
});

export default Error;
