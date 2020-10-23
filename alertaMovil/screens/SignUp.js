import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
const SignUpScreen = ({ onSignUp, navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
      <Input
          placeholder='Email'
      />
      <Input 
          placeholder="Password" 
          secureTextEntry={true} 
      />
       <Input 
          placeholder="Password" 
          secureTextEntry={true} 
      />
      <Button title="Submit" onPress={onSignUp} />
    </View>
  );
};
 
export default SignUpScreen;