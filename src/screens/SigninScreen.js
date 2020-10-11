import React, { useState, useContext } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Container from '../components/Container';
import { Context as AuthContext } from '../context/AuthContext';
import Error from '../components/Error';

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Text h3 style={styles.title}>Login</Text>
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
      <Error message={state.errorMessage} />
      <Button title="Send" onPress={() => signin(email, password)} />
      <TouchableOpacity style={styles.loginLink} onPress={() => navigation.navigate('Signup')}>
        <Text>Do not have an account? Register now!</Text>
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
  },
  loginLink: {
    marginTop: 20,
  },
});

SigninScreen.navigationOptions = () => ({
  headerShown: false,
});

export default SigninScreen;
