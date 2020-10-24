import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C2D1D9",
  },
});

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 225, height: 219 }}
        source={require("../assets/CNE-logo2.png")}
      />
      <Button
        title="Ingresar a la aplicación"
        title="Ingresar"
        onPress={() => navigation.navigate("LogIn")}
      />
    </View>
  );
};

export default LandingScreen;
