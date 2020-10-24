import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ImagePropTypes,
} from "react-native";
import { Card, Header } from "react-native-elements";
import HomeScreen from "../screens/HomeScreen";

//estos son los estilos como el css por decirlo asi
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#C2D1D9",
  },
  cardContent: {
    fontSize: 20,
  },
});

const ConfirmLogOutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          alignSelf: "stretch",
          paddingTop: 10,
          paddingLeft: 10,
        }}
      >
        Desea cerrar sesión?
      </Text>
      {}
    </View>
  );
};

export default ConfirmLogOutScreen;
