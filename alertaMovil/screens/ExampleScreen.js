import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
 
//estos son los estilos como el css por decirlo asi
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
const ExampleScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Pantalla de ejemplo</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}//como pasar de una pantalla a otra
      />
    </View>
  );
};
 
export default ExampleScreen;
