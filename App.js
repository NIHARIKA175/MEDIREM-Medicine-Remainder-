import React from 'react';
import { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font'

import { createAppContainer, createSwitchNavigator } from 'react-navigation-latest';
import AuthNavigator from './screens/AuthNavigator';
import HomeScreen from './screens/HomeScreen.js';
import { View } from 'react-native';
import { Text } from 'react-native';


import * as firebase from 'firebase';
import 'firebase/firestore'



export const firebaseConfig = {
  apiKey: "AIzaSyA-wqHawpX2QfwFDkL58d57n9i6M6BB_-E",
  authDomain: "medirem-5931a.firebaseapp.com",
  databaseURL: "https://medirem-5931a-default-rtdb.firebaseio.com",
  projectId: "medirem-5931a",
  storageBucket: "medirem-5931a.appspot.com",
  messagingSenderId: "251646931282",
  appId: "1:251646931282:web:2a746cbf1b9729dfd4ca8b",
  measurementId: "G-8JD7T6WJD1"
};

firebase.initializeApp(firebaseConfig);





const getFonts=()=>Font.loadAsync({
  'nunito-regular':require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold':require('./assets/fonts/Nunito-Bold.ttf')
});


const AppNavigator = createSwitchNavigator({
      Auth: AuthNavigator,
      App: HomeScreen,  
});

AppContainer = createAppContainer(AppNavigator);








export default function App(){
  const [fontsLoaded, setFontsLoaded] = useState(false)


  if(fontsLoaded){
    return <AppContainer/>
  }
  else{
    
    return (
      <AppLoading
      startAsync={getFonts}
      onFinish={()=>setFontsLoaded(true)}/>
  )

  }
  
}

