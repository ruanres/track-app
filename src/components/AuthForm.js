import React, { useState } from 'react';
import { Text, Input, Button } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import Error from './Error';

const AuthForm = ({
  onSubmit, errorMessage, headerText, submitButtonText,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.form}>
      <Text h3 style={styles.title}>{headerText}</Text>
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
      <Error message={errorMessage} />
      <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    marginBottom: 20,
  },
  link: {
    marginTop: 20,
    fontSize: 15,
    color: 'blue',
  },
});

AuthForm.navigationOptions = () => ({
  headerShown: false,
});

export default AuthForm;
