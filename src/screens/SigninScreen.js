import React, { useContext } from 'react';
import { NavigationEvents } from 'react-navigation';
import Container from '../components/Container';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
  const {
    state, signin, clearErrorMessage,
  } = useContext(AuthContext);

  return (
    <Container>
      <NavigationEvents onWillFocus={clearErrorMessage} />

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
