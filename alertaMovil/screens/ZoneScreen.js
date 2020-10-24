
import React from 'react';

import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Card, Header} from 'react-native-elements' 
 
//estos son los estilos como el css por decirlo asi
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#C2D1D9'
  },
});

function changeState(state){
	if(state)
		return false;
	else
		return true;
}



function updateZones(zoneStr){
	var i;
	for(i=0; i<zones.length; i++){
		if(zones[i].name == zoneStr){
			zones[i].isInterested = changeState(zones[i].isInterested);
		}
	}
}
 var zones = [{
        "name": "Parrita",
        "isInterested": false
      },
      {
        "name": "Chepe",
        "isInterested": false
      },
      {
        "name": "Alajuela",
        "isInterested": false
    }]
 
const ZoneScreen = ({route, navigation}) => {
  const [dummyState, setDummyState] = React.useState(false)
  const [isPressed, setPressed] = React.useState(false)
   
  
  /**function update(){
	setDummyState(dummyState);
  }*/
  
  const update = () => {
    // TODO implement real sign out mechanism
    setDummyState(true);
	this.forceUpdate();
  };
	
  return (
    <View style={styles.container}>
      <Text>Zonas de Interes</Text>
      <ScrollView>
	  {
            zones.map((u,i)=>{	
                return(
				
				u.isInterested == true ?
                <TouchableOpacity key={i} onPress={() => {updateZones(u.name); update; setPressed(changeState(isPressed))}}>
                    <Card containerStyle={{width: 300, backgroundColor:'#57c244'}}>
                        <Card.Title style={{textAlign: 'left', fontSize:25}}>{u.name}</Card.Title>
                        <Card.Divider/>
                        { 
                            <View key={i} style={styles.user}>
                                <Text style={styles.cardContent}>{u.place}</Text>
                            </View>  
                        }
                    </Card>
                </TouchableOpacity>
				        : <Text> </Text>
                );
            })
			
        }
        </ScrollView>
		<Text>Otras zonas</Text>
        <ScrollView>
		{
            zones.map((u,i)=>{	
                return(
				
				u.isInterested == false ?
                <TouchableOpacity key={i} onPress={() => {updateZones(u.name); update; setPressed(changeState(isPressed))}}>
                    <Card containerStyle={{width: 300}}>
                        <Card.Title style={{textAlign: 'left', fontSize:25}}>{u.name}</Card.Title>
                        <Card.Divider/>
                        { 
                            <View key={i} style={styles.user}>
                                <Text style={styles.cardContent}>{u.place}</Text>
                            </View>  
                        }
                    </Card>
                </TouchableOpacity>
				        : 
                <Text></Text>
                );
            })
			
        }
		<Button
          title="Confirmar"
          onPress={() => navigation.navigate('Alertas', {userZones: zones})}//como pasar de una pantalla a otra
        />
        </ScrollView>
		
	  
    </View>
  );
};
 
export default ZoneScreen;
