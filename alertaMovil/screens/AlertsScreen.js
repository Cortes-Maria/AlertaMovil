import React from 'react';
import { View, Text, Button, StyleSheet , TouchableOpacity} from 'react-native';
import { Card, Header} from 'react-native-elements'

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

var userZones = [
	{
		name: 'Parrita',
		isInterested: true
	},
	{
		name: 'Chepe',
		isInterested: false
	},
	{
		name: 'Alajuela',
		isInterested: true
	}
]

function checkUserZones(zoneStr) {
	var i;
	for (i=0; i<userZones.length; i++){
		if(userZones[i].name == zoneStr && userZones[i].isInterested){
			return true
		}
	}
	return false;
}

const AlertsScreen = ({navigation}) => {
  return (
    
    <View style={styles.container}>
        
        <Text style={{fontSize: 30, textAlign: 'left', alignSelf: 'stretch', paddingTop: 10, paddingLeft: 10}}>Alertas recientes</Text>
        {
            alerts.map((u,i)=>{
				
                return(
				checkUserZones(u.place) ?
                <TouchableOpacity key={i} onPress={() => navigation.navigate('Home')}>
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
                </TouchableOpacity>
				: <Text> </Text>
                );
                
            })
        }
        
    </View>
  );
};
 
export default AlertsScreen;
