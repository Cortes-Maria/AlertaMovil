import React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";

import LandingScreen from "./screens/LandingScreen";
import HomeScreen from "./screens/HomeScreen";
import ExampleScreen from "./screens/ExampleScreen"; // 2 paso

import AlertsScreen from "./screens/AlertsScreen";

import LogIn from "./screens/LogIn";
import SignUp from "./screens/SignUp";

import { createDrawerNavigator, DrawerContent } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const LandingStack = createStackNavigator();
const HomeStack = createStackNavigator();
const AlertsStack = createStackNavigator();
const LogInStack = createStackNavigator();
const SignUpStack = createStackNavigator();
const ExampleStack = createStackNavigator();

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

  const HomeStackScreen = ({ navigation }) => {
    return (
      <HomeStack.Navigator>
        {isAuthenticated ? (
          <HomeStack.Screen
            name="Alertas"
            component={AlertsScreen}
            options={{
              headerStyle: {
                backgroundColor: "#31F0AB",
              },
              headerTintColor: "white",
              headerLeft: () => (
                <Icon
                  style={{ marginLeft: 10 }}
                  name="navicon"
                  size={30}
                  color="white"
                  onPress={() => navigation.openDrawer()}
                />
              ),
              headerRight: () => (
                <Icon
                  style={{ marginRight: 10 }}
                  name="home"
                  size={30}
                  color="white"
                />
              ),
            }}
          />
        ) : (
          <>
            <HomeStack.Screen
              name="Landing"
              component={LandingScreen}
              options={{
                animationTypeForReplace: "pop",
              }}
            />

            <HomeStack.Screen
              name="LogIn"
              options={{
                headerStyle: {
                  backgroundColor: "#31F0AB",
                },
                headerTintColor: "white",
                headerLeft: () => <></>,
              }}
            >
              {(props) => <LogIn {...props} onLogIn={handleLogIn} />}
            </HomeStack.Screen>
            <HomeStack.Screen
              name="SignUp"
              options={{
                headerStyle: {
                  backgroundColor: "#31F0AB",
                },
                headerTintColor: "white",
              }}
            >
              {(props) => <SignUp {...props} onSignUp={handleSignUp} />}
            </HomeStack.Screen>
          </>
        )}
        <HomeStack.Screen
          name="Example"
          component={ExampleScreen}
          options={{
            headerStyle: {
              backgroundColor: "#31F0AB",
            },
            headerTintColor: "white",
            headerLeft: () => (
              <Icon
                style={{ marginLeft: 10 }}
                name="navicon"
                size={30}
                color="white"
                onPress={handleSignOut}
              />
            ),
            headerRight: () => (
              <Icon
                style={{ marginRight: 10 }}
                name="home"
                size={30}
                color="white"
              />
            ),
          }}
        />

        <HomeStack.Screen name="Home" component={HomeScreen} />
      </HomeStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{ backgroundColor: "#C2D1D9", width: 240 }}
        drawerContentOptions={{
          labelStyle: { color: "black" },
          activeBackgroundColor: "#10d88f",
          inactiveBackgroundColor: "#10d88f",
        }}
      >
        <Drawer.Screen name="Zonas de interés" component={HomeStackScreen} />
        <Drawer.Screen name="Cerrar sesión" component={HomeStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
