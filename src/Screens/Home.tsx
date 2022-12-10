import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component,useState,useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAP_KEY } from '../constants/googleMapKeys'; 
import imagePath from '../constants/imagePath';
import { Dimensions } from 'react-native';

const {width,height} = Dimensions.get('window');

const ASPECT_RATIO = width/height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
 



const Home = ({navigation}) => {
  const [state, setState] = useState({
    pickUpCords: {
      latitude: 23.8282,
      longitude: 90.3890,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
    dropLocationCords: {
      latitude: 23.8311,
      longitude: 90.4243,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
  });
  const mapRef = useRef();
  const {pickUpCords, dropLocationCords} = state;

  const onPressLocation=()=>{
    navigation.navigate('LocationScreen',{getCordinates:fetchValues})
  }

  const fetchValues=(data)=>{
      setState({
        pickUpCords:{
          latitude:data.pickUpCords.latitude,
          longitude:data.pickUpCords.longitude

        },
        dropLocationCords:{
          latitude:data.destinationCords.latitude,
          longitude:data.destinationCords.longitude

        }
      })
      console.log("Data from home ",data);
  }


  return (
  
    <View style={styles.container}>
      <View style={{flex:1}}>
      <MapView 
      ref = {mapRef}
      style={StyleSheet.absoluteFill} 
      initialRegion={pickUpCords}>
        <Marker 
        coordinate={pickUpCords}
        image={imagePath.currentLocation}
        />
        <Marker 
        coordinate={dropLocationCords}
        image={imagePath.greenMarker}
        />
        <MapViewDirections
          origin={pickUpCords}
          destination={dropLocationCords}
          apikey={GOOGLE_MAP_KEY}
          strokeWidth={5}
          strokeColor="red"
          optimizeWaypoints={true}
          onReady={result=>{
            mapRef.current.fitToCoordinates(result.coordinates,{
              edgePadding:{
                right:30,
                bottom:300,
                left:30,
                top:100
              }
            })
          }}
        />
      </MapView>
      </View>  
      <View style={styles.bottomCard}>
        <Text>Where are you going..?</Text>
        <TouchableOpacity 
        style={styles.inputStyle}
        onPress={onPressLocation}
        >
          <Text>Choose Your Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomCard:{
    backgroundColor:'white',
    width:'100%',
    padding:20,
    borderTopEndRadius:24,
    borderTopStartRadius:24

  },
  inputStyle:{
    backgroundColor:'white',
    botrderRadius:4,
    borderWidth:1,
    alignItems:'center',
    height:48,
    justifyContent:'center',
    marginTop:16

  }
});
