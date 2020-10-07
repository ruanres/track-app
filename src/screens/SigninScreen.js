import React from 'react';
import { Text, Input, Button } from 'react-native-elements';
import Container from '../components/Container';

const SigninScreen = ({ navigation }) => (
  <Container>
    <Text h3>Signin</Text>
    <Input label="E-mail" />
    <Input label="Password" />
    <Button onPress={() => navigation.navigate('Signup')} title="Signin" />
  </Container>
);

SigninScreen.navigationOptions = () => ({
  headerShown: false,
});

export default SigninScreen;
