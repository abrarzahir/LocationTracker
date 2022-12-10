//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AddressPickUp from '../components/AddressPickUp';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

// create a component
const ChooseLocation = (props) => {
  const navigation = useNavigation();

 const [state,setState] = useState({
    pickUpCords:{},
    destinationCords:{}
 });

 const {pickUpCords,destinationCords} = state;

  const onDone = () => {
    props.route.params.getCordinates({
        pickUpCords,
        destinationCords
    })
    navigation.goBack();
  };

  const fetchAddressCords=(lat,lng)=>{
        // console.log("run");
        console.log("Latitude",lat);
        console.log("Longitude",lng);
        setState({...state,pickUpCords:{
            latitude:lat,
            longitude:lng
        }})
  }

  const fetchDestinationCords=(lat,lng)=>{
    // console.log("run");
    // console.log("Latitude",lat);
    // console.log("Longitude",lng);
    setState({...state,destinationCords:{
        latitude:lat,
        longitude: lng
    }})
}

console.log("Props Value ",props);

console.log("PickUpCords=======>",pickUpCords);
console.log("DestinationCords========>",destinationCords);


  return (
    <View style={styles.container}>
     <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{backgroundColor: 'white', flex: 1, padding: 24}}>
        <AddressPickUp 
        placeholderText="Enter Pickup Location" 
        fetchAddress = {fetchAddressCords}
        />
        <View style={{marginTop: 16}}></View>
        <AddressPickUp 
        placeholderText="Enter Destination Location" 
        fetchAddress={fetchDestinationCords}
        />
        <CustomButton
          btnText="Done"
          btnStyle={{marginTop: 24, borderWidth: 1}}
          onPressButton={onDone}
        />
      </ScrollView>
        
    
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default ChooseLocation;
