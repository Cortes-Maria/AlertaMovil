import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Header } from "react-native-elements";

//estos son los estilos como el css por decirlo asi
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C2D1D9",
  },
});

const alerts = [
  {
    place: "Parrita",
    disaster: "Inundacion",
    date: "20/10/20",
    time: "10:00 pm",
  },
  {
    place: "Alajuela",
    disaster: "Temblor",
    time: "10:00 pm",
  },
  {
    place: "Chepe",
    disaster: "Chepe",
    time: "10:00 pm",
  },
];

const AlertsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.Title}
        style={{ fontSize: 20, textAlign: "left", alignSelf: "stretch" }}
      >
        Alertas recientes
      </Text>
      {alerts.map((u, i) => {
        return (
          <TouchableOpacity key={i} onPress={() => navigation.navigate("Home")}>
            <Card>
              <Card.Title>{u.disaster}</Card.Title>
              <Card.Divider />
              {
                <View key={i} style={styles.user}>
                  <Text style={styles.name}>{u.place}</Text>
                  <Text style={styles.name}>{u.time}</Text>
                </View>
              }
            </Card>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default AlertsScreen;
