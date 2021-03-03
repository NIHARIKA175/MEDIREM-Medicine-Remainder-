import React,{useEffect} from 'react';
import {  SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements'
import firebase from './Firebase';
import { StyleSheet, Text, View,ScrollView, TouchableWithoutFeedback,Keyboard} from 'react-native';
import Navigation from './Navigation'






var unsubscribe;

class HomeScreen extends React.Component {
  state = { user: {},EMAIL:"" };
  componentDidMount() {
    unsubscribe=firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        this.setState({user: user});
      }
      firebase.firestore().collection("users").doc(user.email).set({email:user.email})
    })


  }
  componentWillUnmount() {
    unsubscribe();
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={{color:"blue",fontFamily:"nunito-bold",fontSize:20,marginLeft:0,marginTop:30}}>{this.state.user.email}</Text>
          <Button title="Log Off" buttonStyle={{marginLeft:5,marginTop:25}}  onPress={() => {
            firebase.auth().signOut();
          }}/>
          </View>
          <View style={{flex:1}}>
          <Navigation  />
          </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    borderStyle:"solid",
    marginTop:-15

 
  }
});
export default HomeScreen;