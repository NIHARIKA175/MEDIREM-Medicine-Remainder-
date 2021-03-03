import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddRemainder from './AddRemainder';
import Home from './Home';
import HealthNotes from './HealthNotes'
import React,{useEffect} from 'react';
import {  SafeAreaView, Button } from 'react-native';
import firebase from './Firebase';
import { StyleSheet, Text, View,ScrollView, TouchableWithoutFeedback,Keyboard} from 'react-native';

const Tab=createBottomTabNavigator();


function Navigation(){
    return(
    <NavigationContainer >
          <Tab.Navigator tabBarOptions={{activeBackgroundColor:"coral",labelStyle:{fontSize:18,padding:10,color:"black"} }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Add" component={AddRemainder}/>
            <Tab.Screen name="Notes" component={HealthNotes}/>
          </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
