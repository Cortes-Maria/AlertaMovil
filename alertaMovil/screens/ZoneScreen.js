import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
 
//estos son los estilos como el css por decirlo asi
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C2D1D9'
  },
});
 
const ZoneScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Zonas de Interes</Text>
    </View>
  );
};
 
export default ZoneScreen;
