import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Card} from 'react-native-elements'

//estos son los estilos como el css por decirlo asi
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const alerts = [
    {
        place: 'Parrita', 
        disaster: 'Inundacion',
        time: '10:00 pm'           
    },
    {
        place: 'Alajuela', 
        disaster: 'Temblor',
        time: '10:00 pm'           
    },
    {
        place: 'Chepe', 
        disaster: 'Chepe',
        time: '10:00 pm'           
    }
]
const AlertsScreen = ({navigation}) => {
  return (

    <View style={styles.container}>
        <Text style={styles.Title}>Alertas recientes</Text>
        {
            alerts.map((u,i)=>{
                return(
                <Card>
                    <Card.Title>Alerta</Card.Title>
                    <Card.Divider/>
                    { 
                        <View key={i} style={styles.user}>
                            <Text style={styles.name}>{u.place}</Text>
                            <Text style={styles.name}>{u.disaster}</Text>
                            <Text style={styles.name}>{u.time}</Text>
                        </View>  
                    }
                </Card>
                );
                
            })
        }
        
    </View>
  );
};
 
export default AlertsScreen;
