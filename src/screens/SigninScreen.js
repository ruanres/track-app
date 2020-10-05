import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

const SigninScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text h3>Signin</Text>
    <Input label="E-mail" />
    <Input label="Password" />
    <Button onPress={() => navigation.navigate('Signup')} title="Signin" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 200,
  },
});

SigninScreen.navigationOptions = () => ({
  headerShown: false,
});

export default SigninScreen;
