import React,{useState,useEffect} from 'react'
import {Text,View,StyleSheet, TextInput,ScrollView,TouchableOpacity,Alert,Platform,TouchableWithoutFeedback,Keyboard} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Icon,Button} from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Moment from 'react-moment';
import 'moment-timezone';
import moment from 'moment'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home} from "./Home";
import firebase from './Firebase'
import { State } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native'




function AddRemainder({navigation}){
    const [med,setMed]=useState("")
    const [times,setTimes]=useState("")
    const [dates,setDates]=useState("")
    const [medname, setMedname] = useState("")
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [ud, setUd] = useState("")
    const [ut, setUt] = useState("")
    const [clr1,setClr1]=useState("black")
    const [clr2,setClr2]=useState("black")
    const [clr3,setClr3]=useState("black")
    const [clr4,setClr4]=useState("black")
    const [clr5,setClr5]=useState("black")
    const [clr6,setClr6]=useState("black")
    const [clr7,setClr7]=useState("black")
    const [clr8,setClr8]=useState("black")
    const[locked,setLocked]=useState(false)
    const[sc,setSc]=useState(0)
    
    const isFocused = useIsFocused()

 




    const changeHandler=(val)=>{
        return setMedname(val)
    }

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
     
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
     
      const handleConfirmD = (date) => {
        console.warn("A date has been picked:",moment(date).format("MMM Do YYYY"));
        setDates(moment(date).format("MMM Do YYYY"))
        hideDatePicker();
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };
     
      const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };
     
      const handleConfirmT = (time) => {
        console.warn("A Time has been picked:",moment(time).format("hh:mm"));
        setTimes(moment(time).format("hh:mm a"))
        hideTimePicker();
    };

    function addRem(){
        firebase.firestore().collection("remainders").add({
            name:medname,
            date:dates,
            time:times,
            sc:sc,
            id:(Math.floor(Math.random()*1000000)+1).toString(),
            

        })
    }

    function colourHandler1(){
        if(locked==false){
            setClr1("green")
            setLocked(true)
        }
        else if(locked==true){
            setClr1("black")
            setLocked(false)
        }
        


    }
    function colourHandler2(){
        if(locked==false){
            setClr2("green")
            setLocked(true)
            }
            else if(locked==true){
                setClr2("black")
                setLocked(false)
            }
            getColor();

    }
    function colourHandler3(){
        if(locked==false){
            setClr3("green")
            setLocked(true)
            }
            else if(locked==true){
                setClr3("black")
                setLocked(false)
            }
            getColor();
    }
    function colourHandler4(){
        if(locked==false){
            setClr4("green")
            setLocked(true)
            }
            else if(locked==true){
                setClr4("black")
                setLocked(false)
            }
            getColor();
    }
    function colourHandler5(){
        if(locked==false){
            setClr5("green")
            setLocked(true)
            }
            else if(locked==true){
                setClr5("black")
                setLocked(false)
            }
            getColor();   
    }
    function colourHandler6(){
        if(locked==false){
            setClr6("green")
            setLocked(true)
            }
            else if(locked==true){
                setClr6("black")
                setLocked(false)
            }
            getColor();
    }
    function colourHandler7(){
        if(locked==false){
            setClr7("green")
            setLocked(true)
            }
            else if(locked==true){
                setClr7("black")
                setLocked(false)
            }
            getColor();
    }
    function colourHandler8(){
        if(locked==false){
            setClr8("green")
            setLocked(true)
            }
            else if(locked==true){
                setClr8("black")
                setLocked(false)
            }
        getColor();
    }

    function getColor(){
        if(clr1=="green"){
            setSc(1);
        }
        else if(clr2=="green"){
            setSc(2);
        }
        else if(clr3=="green"){
            setSc(3);
        }
        else if(clr4=="green"){
            setSc(4);
        }
        else if(clr5=="green"){
            setSc(5);
        }
        else if(clr6=="green"){
            setSc(6);
        }
        else if(clr7=="green"){
            setSc(7);
        }
        else if(clr8=="green"){
            setSc(8);
        }
    }


    function emptyColor(){
        setClr1("black");
        setClr2("black");
        setClr3("black");
        setClr4("black");
        setClr5("black");
        setClr6("black");
        setClr7("black");
        setClr8("black");
        setLocked(false)
        
    }
    useEffect(()=>{
        emptyColor();
    },[isFocused])
    useEffect(()=>{
        getColor();
    },[clr1,clr2,clr3,clr4,clr5,clr6,clr7,clr8])


    

   
    
    

    return (
        <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}  >
        <View style={styles.main}>
            <View style={styles.row1}>
                <Text style={{fontSize:17,fontWeight:'500',paddingBottom:5}}>Medicine Name</Text>
                <TextInput
                style={{paddingTop:10,fontSize:17}}
                placeholder="Enter Medicine Name"
                onChangeText={text => setMedname(text)}
                clearButtonMode='always'
                value={medname}
                
                />
                </View>
            <View style={styles.row2}>
                <Text style={{fontSize:17,fontWeight:'500'}}>Select Medicine Icon</Text>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity  activeOpacity='0' key={1} onPress={colourHandler1} >
                        <FontAwesome5 name="capsules" size={40} color={clr1} style={{paddingTop:20} } />
                    </TouchableOpacity>
                    <TouchableOpacity  activeOpacity='0' onPress={colourHandler2} key={2}  >
                        <Fontisto name="tablets" size={40} color={clr2} style={{paddingTop:20,paddingLeft:40}}/>
                    </TouchableOpacity>
                    <TouchableOpacity  activeOpacity='0' onPress={colourHandler3} key={3} >
                        <Fontisto name="drug-pack" size={40} color={clr3} style={{paddingTop:20,paddingLeft:40}}/>
                    </TouchableOpacity>
                    <TouchableOpacity  activeOpacity='0' onPress={colourHandler4} key={4} >
                        <Fontisto name="injection-syringe" size={40} color={clr4} style={{paddingTop:20,paddingLeft:40}}/>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity  activeOpacity='0' onPress={colourHandler5} key={5}  >
                        <FontAwesome5 name="pills" size={40} color={clr5} style={{paddingTop:20}} />
                    </TouchableOpacity>
                    <TouchableOpacity  activeOpacity='0' onPress={colourHandler6} key={6} >
                        <Fontisto name="pills" size={40} color={clr6} style={{paddingTop:20,paddingLeft:40}}/>
                    </TouchableOpacity>
                    <TouchableOpacity  activeOpacity='0' onPress={colourHandler7} key={7} >
                        <MaterialCommunityIcons name="pill" size={40} color={clr7} style={{paddingTop:20,paddingLeft:40}}/>
                    </TouchableOpacity>
                    <TouchableOpacity  activeOpacity='0' onPress={colourHandler8} key={8} >
                        <FontAwesome name="medkit" size={40} color={clr8} style={{paddingTop:20,paddingLeft:40}}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:1,paddingTop:20}}>
                <Text style={{fontSize:17,fontWeight:'500',padding:10,paddingTop:20}}>Select Date and Time</Text>
                <View style={{paddingBottom:20,paddingTop:10}}>
                    <Button title="Show Date Picker" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirmD}
                        onCancel={hideDatePicker}
                    />
                </View>
                <View>
                    <Button title="Show Time Picker" onPress={showTimePicker} />
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={handleConfirmT}
                        onCancel={hideTimePicker}
                    />
                </View>
            </View>
            <View style={{paddingTop:100}}>
            <Button
                title="Done"
                onPress={() => {
                    setMed(medname);
                    addRem(medname);
                /* 1. Navigate to the Home route with params */
                navigation.navigate('Home')
                
                Alert.alert(
                'Medicine Added',
                medname,
                [
                    { text: 'OK', onPress: () => setMedname("") }
                ],
                );
                                }}
            />
                            
            </View>
            
        </View>
        
    
    </TouchableWithoutFeedback>
    </ScrollView>
    )
};

const styles=StyleSheet.create({
    main:{
        flex:1,
        paddingTop:50,
        paddingLeft:10
    },
    row1:{
        padding:10,
        borderBottomColor:'black',
    },
    row2:{
        justifyContent:'center',
        paddingTop:20,
        paddingLeft:10
    },

});

export default AddRemainder
