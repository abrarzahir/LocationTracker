import {StyleSheet, Text, View} from 'react-native';
import React, {Component,useState,useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const Demo = () => {
  const [state, setState] = useState({
    pickUpCords: {
      latitude: 23.8282,
      longitude: 90.3890,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    dropLocationCords: {
      latitude: 23.8311,
      longitude: 90.4243,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });
  const mapRef = useRef();
  const {pickUpCords, dropLocationCords} = state;
  return (
  
    <View style={styles.container}>
      <MapView style={StyleSheet.absoluteFill} initialRegion={pickUpCords}>
        <Marker coordinate={pickUpCords}/>
        <Marker coordinate={dropLocationCords}/>
        <MapViewDirections
          origin={pickUpCords}
          destination={dropLocationCords}
          apikey={'AIzaSyCX106cSDRLVXnUAqT58DyKlvtThNwKKtw'}
          strokeWidth={5}
          strokeColor="hotpink"
          optimizeWaypoints={true}
        />
      </MapView>
    </View>
  );
};

export default Demo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
