import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
const SignInScreen = () => {
  return (
    <View style={styles.container}>
        <Input
            placeholder='Email'
            //leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
            onChangeText={email => this.state({email})}
        />
        <Input 
            placeholder="Password" 
            secureTextEntry={true} 
            onChangeText={password => this.state({password})}
        />
        {this.renderButtonOrLoading()}
    </View>
  );
};
 
export default SignInScreen;