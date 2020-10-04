import React from 'react';
import {
  View, StyleSheet, Text, Button,
} from 'react-native';

const TrackListScreen = ({ navigation }) => (
  <View>
    <Text style={styles.text}>Text</Text>
    <Button onPress={() => navigation.navigate('TrackDetail')} title="Go to Track Details" />
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
});

export default TrackListScreen;
