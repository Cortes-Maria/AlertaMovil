import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements'
 
//estos son los estilos como el css por decirlo asi
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#C2D1D9'
  },
  cardContent: {
	  fontSize: 20
  },
  title: {
	  fontSize: 30, 
	  textAlign: 'left', 
	  alignSelf: 'stretch', 
	  paddingTop: 10, 
	  paddingLeft: 10
  }

});
 
var alerts = [
    {
        place: 'Parrita', 
        disaster: 'Inundacion',
        date: '20/10/20',
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
 
const HistoryScreen = ({route, navigation}) => {
  return (
    <View style={styles.container}>
	  {navigation.setOptions({title: route.params.zone})}
	  <Text style={styles.title}>Historial de Alertas</Text>
	  {
	  alerts.map((u,i)=>{
                return(
				u.place == route.params.zone ?
                    <Card containerStyle={{width: 300}}>
                        <Card.Title style={{textAlign: 'left', fontSize:25}}>{u.disaster}</Card.Title>
                        <Card.Divider/>
                        { 
                            <View key={i} style={styles.user}>
                                <Text style={styles.cardContent}>{u.place}</Text>
                                <Text style={styles.cardContent}>{u.time}</Text>
                            </View>  
                        }
                    </Card>
				: <Text> </Text>
                );
                
            })
	  }
    </View>
  );
};
 
export default HistoryScreen;