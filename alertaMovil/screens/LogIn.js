import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C2D1D9'
  },
});
 
const SignInScreen = ({ onLogIn, navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Inicie sesión</Text>
      <Input
          placeholder='Email'
      />
      <Input 
          placeholder="Password" 
          secureTextEntry={true} 
      />
      <Button title="Log In" onPress={onLogIn} />
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
};
 
export default SignInScreen;