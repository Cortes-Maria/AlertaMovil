import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import LandingScreen from './screens/LandingScreen';
import HomeScreen from './screens/HomeScreen';
import ExampleScreen from './screens/ExampleScreen'; // 2 paso
import AlertsScreen from './screens/AlertsScreen';

const RootStack = createStackNavigator();
 
const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Landing" component={LandingScreen} />
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Example" component={ExampleScreen} /> 
        <RootStack.Screen name="Alerts" component={AlertsScreen} /> 
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
 
export default App;