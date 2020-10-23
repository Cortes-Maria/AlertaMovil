import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
const LandingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Public Landing Screen</Text>
      <Button

        title="Go to Home"
        title="Enter"
        onPress={() => navigation.navigate('Alerts')}
      />
    </View>
  );
};
 
export default LandingScreen;
