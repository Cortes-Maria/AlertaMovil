import React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
 
import LandingScreen from './screens/LandingScreen';
import HomeScreen from './screens/HomeScreen';
import ExampleScreen from './screens/ExampleScreen'; // 2 paso

import AlertsScreen from './screens/AlertsScreen';
import HistoryScreen from './screens/HistoryScreen';

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
		<>
          <RootStack.Screen 
            name="Alerts" 
            component={AlertsScreen} 
            options={{
			  headerStyle: {
				backgroundColor: '#31F0AB'
			  },
			  headerTintColor: 'white',
              headerLeft: () => (
				<Icon style={{marginLeft: 10}} name="navicon" size={30} color="white" onPress={handleSignOut}/>
              ),
			  headerRight: () => (
                <Icon style={{marginRight: 10}} name="home" size={30} color="white"/>
              ) 
            }}
          />
		  <RootStack.Screen name="History" component={HistoryScreen} 
		  options={{
			
			headerStyle: {
			  backgroundColor: '#31F0AB'
			  },
			  headerTintColor: 'white',
			  headerRight: () => (
                <Icon style={{marginRight: 10}} name="home" size={30} color="white"/>
              ) 
            }}
		  />
		  </>
          ) : (
            <>
              <RootStack.Screen 
                name="Landing" 
                component={LandingScreen} 
                options={{
                  animationTypeForReplace: 'pop',
                }}
              />
              <RootStack.Screen 
			    name="LogIn"
			    options={{
				  headerStyle: {
				    backgroundColor: '#31F0AB'
			      },
				  headerTintColor: 'white',
                  headerLeft: () => (
				    <></>
                  )
                }}
			  >
                {(props) => (
                  <LogIn {...props} onLogIn={handleLogIn}/>
                )}
              </RootStack.Screen>
              <RootStack.Screen 
			    name="SignUp"
			    options={{
			      headerStyle: {
				    backgroundColor: '#31F0AB'
			      },
			      headerTintColor: 'white'
                }}
			  >
                {(props) => (
                  <SignUp {...props} onSignUp={handleSignUp}/>
                )}
              </RootStack.Screen>
            </>
          )}
        <RootStack.Screen name="Example" component={ExampleScreen} 
		  options={{
			headerStyle: {
			backgroundColor: '#31F0AB'
			},
			headerTintColor: 'white',
            headerLeft: () => (
			  <Icon style={{marginLeft: 10}} name="navicon" size={30} color="white" onPress={handleSignOut}/>
            ),
			headerRight: () => (
              <Icon style={{marginRight: 10}} name="home" size={30} color="white"/>
            ) 
          }}
		/>
        <RootStack.Screen name="Home" component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
 
export default App;