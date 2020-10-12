import React, { useContext, useEffect } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Container from '../components/Container';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);

  useEffect(() => {
    if (state.isSignedIn) {
      navigation.navigate('TrackList');
    }
  }, [state.isSignedIn]);

  return (
    <Container>
      <AuthForm
        headerText="Sign in for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={({ email, password }) => signin(email, password)}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.link}>Do not have an account? Register now!</Text>
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

SigninScreen.navigationOptions = () => ({
  headerShown: false,
});

export default SigninScreen;
