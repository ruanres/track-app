import React from 'react';
import {
  View, StyleSheet, Text, Button,
} from 'react-native';

const SignupScreen = ({ navigation }) => (
  <View>
    <Text style={styles.text}>Signup</Text>
    <Button onPress={() => navigation.navigate('Signin')} title="Go to Signin" />
    <Button onPress={() => navigation.navigate('mainFlow')} title="Go to mainFlow" />
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
});

export default SignupScreen;
