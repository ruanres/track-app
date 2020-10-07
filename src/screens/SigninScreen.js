import React, { useState } from 'react';
import { Text, Input, Button } from 'react-native-elements';
import Container from '../components/Container';

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Text h3>Signin</Text>
      <Input
        label="E-mail"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      <Button onPress={() => navigation.navigate('Signup')} title="Signin" />
    </Container>
  );
};

SigninScreen.navigationOptions = () => ({
  headerShown: false,
});

export default SigninScreen;
