import React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import LandingScreen from './screens/LandingScreen';
import HomeScreen from './screens/HomeScreen';
import ExampleScreen from './screens/ExampleScreen'; // 2 paso
import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';


const RootStack = createStackNavigator();
 
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

 
  const handleLogIn = () => {
    // TODO implement real sign in mechanism

    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    // TODO implement real sign out mechanism
 
    setIsAuthenticated(false);
  };

  const handleSignUp = () => {
    // TODO implement real sign out mechanism

    setIsAuthenticated(true);
  };


  return (
    <NavigationContainer>
      <RootStack.Navigator>
      {isAuthenticated ? (
        <RootStack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerRight: () => (
              <Button onPress={handleSignOut} title="Log Out" />
            ),
          }}
        />
        ) : (
          <>
            <RootStack.Screen 
              name="Landing" 
              component={LandingScreen} 
              options={{
                animationTypeForReplace: 'pop',
              }}
            />
            <RootStack.Screen name="LogIn">
              {(props) => (
                <LogIn {...props} onLogIn={handleLogIn}/>
              )}
            </RootStack.Screen>
            <RootStack.Screen name="SignUp">
              {(props) => (
                <SignUp {...props} onSignUp={handleSignUp}/>
              )}
            </RootStack.Screen>
          </>
        )}
        <RootStack.Screen name="Example" component={ExampleScreen} />
        

      </RootStack.Navigator>
    </NavigationContainer>
  );
};
 
export default App;