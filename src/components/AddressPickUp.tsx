import {StyleSheet, Text, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import React from 'react';
import {GOOGLE_MAP_KEY} from '../constants/googleMapKeys';

const AddressPickUp = ({
    placeholderText = '',
    fetchAddress = ''
}) => {

const onPressAddress =(data,details)=>{
        console.log("Details => ",data);
        // fetchAddress();
        const latitude = details.geometry.location.lat;
        const longitude = details.geometry.location.lng;
        fetchAddress(latitude,longitude);
}

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder={placeholderText}
        onPress={onPressAddress}
        fetchDetails={true}
        query={{
          key: GOOGLE_MAP_KEY,
          language: 'en',
        }}
        styles={{
          textInputContainer: styles.containerStyle,
          textInput: styles.textInputStyle,
        }}
      />
    </View>
  );
};

export default AddressPickUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerStyle: {
    backgroundColor: 'white',
  },
  textInputStyle: {
    height: 48,
    color: 'black',
    fontSize: 16,
    backgroundColor: '#F3F3F3',
  },
});
