import React, { useState, useContext } from 'react';
import { Text, Input, Button } from 'react-native-elements';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Container from '../components/Container';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, signup } = useContext(AuthContext);

  return (
    <Container>
      <Text h3 style={styles.title}>Register</Text>
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
      <Button title="Send" onPress={() => signup(email, password)} />
      <TouchableOpacity style={styles.signupLink} onPress={() => navigation.navigate('Signin')}>
        <Text>Already have an account? Then login!</Text>
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
  },
  signupLink: {
    marginTop: 20,
  },
});

SignupScreen.navigationOptions = () => ({
  headerShown: false,
});

export default SignupScreen;
