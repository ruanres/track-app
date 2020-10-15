import React, { useContext, useEffect } from 'react';
import Container from '../components/Container';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

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
      <NavLink text="Do not have an account? Register now!" navigateTo="Signup" />
    </Container>
  );
};

SigninScreen.navigationOptions = () => ({
  headerShown: false,
});

export default SigninScreen;
