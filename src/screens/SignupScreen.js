import React, { useContext } from 'react';
import Container from '../components/Container';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = () => {
  const { state, signup } = useContext(AuthContext);

  return (
    <Container>
      <AuthForm
        headerText="Sign up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={({ email, password }) => signup(email, password)}
      />
      <NavLink text="Already have an account? Sign in instead!" navigateTo="Signin" />

    </Container>
  );
};

SignupScreen.navigationOptions = () => ({
  headerShown: false,
});

export default SignupScreen;
