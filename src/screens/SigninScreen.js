import React from 'react';
import {
  View, StyleSheet, Text, Button,
} from 'react-native';

const SigninScreen = ({ navigation }) => (
  <View>
    <Text style={styles.text}>Signin</Text>
    <Button onPress={() => navigation.navigate('Signup')} title="Go to Signup" />
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
});

export default SigninScreen;
