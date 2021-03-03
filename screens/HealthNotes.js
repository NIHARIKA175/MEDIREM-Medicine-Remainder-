import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,useWindowDimensions,FlatList,TouchableOpacity} from 'react-native';
import { useIsFocused } from '@react-navigation/native'
import firebase from './Firebase'
import { AntDesign } from '@expo/vector-icons';
import {Header} from 'react-native-elements';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';
import { TextInput,KeyboardAvoidingView,Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'






function HealthHome({navigation})
{
  const isFocused = useIsFocused()
    const [loading,setLoading]=useState(false)
    const [notes, setNotes] = useState("")
    const [val,setVal]=useState(1)

    const ref=firebase.firestore().collection("notes"); 

  
  
  function getNotes(){
    
    setLoading(true);

   
    ref.get().then((snapshot)=>{
      const items=[];
      snapshot.forEach((doc)=>{
        items.push(doc.data());

      });
      setNotes(items);
      setLoading(false);
    });
  }

  function notesHandler(navigation){
    navigation.navigate("AddNotes")
  
    

  }



  useEffect(()=>{
    getNotes();
  },[isFocused,val]);

  if(loading){
    return <Text style={styles.loading}>...Loading</Text>
  }



  // var db=firebase.firestore();
//       db.collection("remainders").get().then((snapshot)=>{
//           snapshot.docs.forEach(doc=>{
//               remainders.push(doc.data())
//               console.log("harsha")
//               console.log(remainders)
//     })
//   });



  const deleteHandler=(item)=>{
    Alert.alert(
      'Are You Sure Want To Delete?',
      item.doc,
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Yes', onPress: ()=>delItem(item)}
      ],
      {cancelable: false}
      );
    

      
  function delItem(item){
    var jobskill_query = ref.where('id','==',item.id);
      jobskill_query.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          doc.ref.delete();
        });
        setVal((prevVal)=>prevVal+1)
      });
      
      setVal((prevVal)=>prevVal-1)
      
      setLoading(true)
      if(loading){
        return <Text style={styles.loading}>....Loading</Text>
      }
      setLoading(false)

      setVal((prevVal)=>prevVal+1)
    
  }
}

  function pressHandler(item){
    Alert.alert(
      'Notes',
      (item.details),
      [
          { text: 'OK' }
      ],
      );
  }

  

  
    
    return (
        <View style={{flex:1,backgroundColor:"white"}}>
        <View style={{flex:1}}>
            <FlatList 
              keyExtractor={(item)=>item.id}
              data={notes}
              horizontal={false}
              renderItem={({item})=>(
                <SafeAreaView>
                <View style={{flexDirection:"row"}}>
                <TouchableOpacity onPress={()=>pressHandler(item)} style={{marginHorizontal:10,borderWidth:1.5,margin:10,width:270,height:90,backgroundColor:"lightblue"}} activeOpacity={0.8} >
                <Text style={styles.item}>Doctor:{item.doc}{'\n'}Date:{item.appdate}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:-10,marginTop:30}}>
                <AntDesign name="delete" size={30} color="red" style={styles.delete} onPress={()=>deleteHandler(item)}  />
                </TouchableOpacity>
                </View>
                </SafeAreaView>
                
              )}
              
              />
          </View>
          <TouchableOpacity onPress={()=>notesHandler(navigation)}>
        <AntDesign name="pluscircle" size={35} color="black"  style={styles.plus} />
        </TouchableOpacity>
        </View>
         )

}

function AddNotes({navigation}){
  const [doc, setDoc] = useState("")
  const [date, setDate] = useState("")
  const [details, setDetails] = useState("")


  
 


  function addHealth(){
    firebase.firestore().collection("notes").add({
      doc:doc,
      appdate:date,
      details:details,
      id:(Math.floor(Math.random()*1000000)+1).toString(),

      

  })
  console.log("dffgf",doc)
  return true;

  }



  return(
  <SafeAreaView>
  <KeyboardAwareScrollView>
     <View>
      <Text style={{fontSize:20,fontWeight:'500',paddingVertical:15,paddingHorizontal:10}}>Doctor Name</Text>
      <TextInput
                style={{padding:10,fontSize:17}}
                placeholder="Enter Doctor Name"
                onChangeText={text => setDoc(text)}
                clearButtonMode='always'
                value={doc}
                
                />
      <Text style={{fontSize:20,fontWeight:'500',paddingVertical:15,paddingHorizontal:10}}>Appointment Date</Text>
      <TextInput
                style={{padding:10,fontSize:17}}
                placeholder="Enter Appointment Date"
                onChangeText={text => setDate(text)}
                clearButtonMode='always'
                value={date}
                
                />


      <Text style={{fontSize:20 ,fontWeight:'500',paddingVertical:15,paddingHorizontal:10}}>Enter Details</Text>

                <TextInput
                style={{padding:10,fontSize:17}}
                placeholder="Enter Details"
                onChangeText={text => setDetails(text)}
                clearButtonMode='always'
                value={details}
                multiline
                
                />

      <Button
                title="Done"
                style={{paddingVertical:20}}
                onPress={() => {
                    if(addHealth()){
                /* 1. Navigate to the Home route with params */
                navigation.goBack('HealthHome')}
                
                Alert.alert(
                'Notes Added',
                );
                                }}
            />
        
      </View>
      </KeyboardAwareScrollView>
  </SafeAreaView>
  )
  
}

const Stack = createStackNavigator();


function HealthNotes(){
  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="HealthHome">
        <Stack.Screen name="HealthHome" component={HealthHome} />
        <Stack.Screen name="AddNotes" component={AddNotes } />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

const styles=StyleSheet.create({
    plus:{
        alignItems:"center",
        justifyContent:"center",
        marginLeft:155,

    },
    container:{
      flex:1,
      backgroundColor:"white",
      marginHorizontal:5,
      padding:20
      
      
    },
    list:{
      flex:1,
      backgroundColor:"white",
      marginHorizontal:-10
    },
    item:{
      padding:5,
      fontFamily:"nunito-bold",
      fontSize:20,
      borderStyle:"solid",
      width:250,
      height:150,
      
    },
    delete:{
      marginLeft:5,
      marginTop:20
    },
    loading:{
      fontFamily:"nunito-bold",
      fontSize:30,


    }


})

export default HealthNotes
