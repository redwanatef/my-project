import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity , Pressable  } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/home';
import PersonalInfo from './screens/PersonalInfo';
import FinalNumber from './screens/finalNumber';

export default function App() {
  const Tab = createBottomTabNavigator();
  

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="personal info" component={PersonalInfo} />
        <Tab.Screen name="Dashboard" component={FinalNumber} />

      </Tab.Navigator>
    </NavigationContainer>
  ) 
}

