//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const CustomButton = ({
    onPressButton =()=>{},
    btnStyle = {},
    btnText = ''


}) => {
    return (
       <TouchableOpacity
       onPress={onPressButton}
       style = {{...styles.btnStyle,...btnStyle}}
       >
        <Text>{btnText}</Text>

       </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
      
    },
    btnStyle:{
        height:48,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        paddingHorizontal:16,
        borderBottomWidth:1

    }
});

//make this component available to the app
export default CustomButton;
