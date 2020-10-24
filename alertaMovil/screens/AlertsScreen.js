import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet , TouchableOpacity, ImagePropTypes} from 'react-native';
import { Card, Header} from 'react-native-elements'
import HomeScreen from '../screens/HomeScreen'

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
    cardContent: {
        fontSize: 20
    },
  });
const AlertsScreen = ({navigation}) => {
    
    const [alerts,setAlerts] = useState([]);
    const [error,setError] = useState(null);
    const [isLoaded,setLoaded] = useState(false);



    var userZones = [{
        "name": "Parrita",
        "isInterested": true
      },
      {
        "name": "Chepe",
        "isInterested": true
      },
      {
        "name": "Alajuela",
        "isInterested": true
    }]

    function checkUserZones(zoneStr) {
        var i;
        for (i=0; i<userZones.length; i++){
            if(userZones[i].name == zoneStr && userZones[i].isInterested){
                return true
            }
        }
        return false;
    }

    const loadAlerts = () => {
        fetch("https://my-json-server.typicode.com/cortes-maria/Alerts/alerts")
            .then(res => res.json())
            .then(
            (result) => {
                setLoaded(true);
                setAlerts(result);
            },
            (error) => {
                setLoaded(true);
                setError(error);
            }
            ) 
    }
    const loadUsers = () => {
        fetch("https://my-json-server.typicode.com/cortes-maria/Users/users")
            .then(res => res.json())
            .then(
            (result) => {
                setLoadedUser(true);
                setUsers(result);
            },
            (error) => {
                setLoadedUser(true);
                setErrorUser(error);
            }
            ) 
    }
    
    useEffect(()=>{
        loadAlerts();
        loadUsers();
    },[])

  return (
    error ?
    <Text>Error: {error.message}</Text>
    :
    !isLoaded ?
    <Text>Loading...</Text>
    : 
    <View style={styles.container}>     
        <Text style={{fontSize: 30, textAlign: 'left', alignSelf: 'stretch', paddingTop: 10, paddingLeft: 10}}>Alertas recientes</Text>
        {
            alerts.map((u,i)=>{	
                return(
				checkUserZones(u.place) ?
                <TouchableOpacity key={i} onPress={() => navigation.navigate('History', {zone: u.place})}>
                    <Card containerStyle={{width: 300}}>
                        <Card.Title style={{textAlign: 'left', fontSize:25}}>{u.disaster}</Card.Title>
                        <Card.Divider/>
                        { 
                            <View key={i} style={styles.user}>
                                <Text style={styles.cardContent}>{u.place}</Text>
                                <Text style={styles.cardContent}>{u.time}</Text>
                                <Text style={styles.cardContent}>{u.date}</Text>
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
