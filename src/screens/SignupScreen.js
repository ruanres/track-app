import React, { useContext } from 'react';
import { Text } from 'react-native-elements';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Container from '../components/Container';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <Container>
      <AuthForm
        headerText="Sign up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={({ email, password }) => signup(email, password)}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.link}>Already have an account? Sign in instead!</Text>
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
  },
  link: {
    marginTop: 20,
    fontSize: 15,
    color: 'blue',
  },
});

SignupScreen.navigationOptions = () => ({
  headerShown: false,
});

export default SignupScreen;
