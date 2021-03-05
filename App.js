import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
//import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
//import{AppDrawerNavigator} from './components/AppDrawerNavigator'
export default function App() {
  return (
    <WelcomeScreen/>
  );

  }