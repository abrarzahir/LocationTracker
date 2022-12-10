//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../locationTracker/src/Screens/Home'
import ChooseLocation from './src/Screens/ChooseLocation';
import Demo from './src/Screens/Demo';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

// create a component
const App = () => {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={Home} />
      <Stack.Screen name='LocationScreen' component={ChooseLocation}/>
    </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
    
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
