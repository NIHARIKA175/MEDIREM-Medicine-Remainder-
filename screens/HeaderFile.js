import React from 'react'
import * as Font from 'expo-font'
import { useState } from 'react';
import { AppLoading } from 'expo';
import { View,Text,ImageBackground} from 'react-native';
import { StyleSheet } from 'react-native';
import styles from './GlobalStyles'
import {Header} from 'react-native-elements';






function HeaderFile() {
    

    
        return(
            <View style={styles.container}>
                <Header
                        backgroundImage={require('../assets/medicon4.jpg')}
                        statusBarProps={{ barStyle: 'light-content' }}
                        barStyle="light-content" // or directly
                        centerComponent={{ text: 'MEDIREM', style: { marginLeft:25,marginBottom:14,color: 'black',fontFamily:'nunito-bold',fontSize:30 } }}
                        containerStyle={{
                            borderColor:"red",
                            marginLeft:5,
                            marginRight:5,
                            marginTop:5

                        }}
                        
                        
                />
            </View>
        )
    
    
    
}



export default HeaderFile



