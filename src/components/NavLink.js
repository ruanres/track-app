import React from 'react';
import { Text } from 'react-native-elements';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, navigateTo }) => (
  <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}>
    <Text style={styles.link}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  link: {
    marginTop: 20,
    fontSize: 15,
    color: 'blue',
  },
});

export default withNavigation(NavLink);
