
import { View , Text, StyleSheet,
  Image, TouchableOpacity, StatusBar, ActionSheetIOS,
   Button, TextInput, Alert } from "react-native";
import {  useNavigation } from '@react-navigation/native'
import { SafeAreaProvider} from 'react-native-safe-area-context';
import React, { useState} from 'react';
import CheckboxFormX from 'react-native-checkbox-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import { add, color } from "react-native-reanimated";
import AsyncStorage from '@react-native-async-storage/async-storage';

const mockData = [
  {
      label: '',
      RNchecked: false
  },
];

const FeedbackScreen =  props => {

  //FOR DATE TIME PICKER

  
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('dTE');
    const [modeDate, setModeDate] = useState('date');
    const [show, setShow] = useState(false);
    const [contactBool, toggleBool] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setModeDate(currentMode);
    };

    const showModeDate = (currentMode) => {
      setShow(true);
      setModeDate(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('date');
    };

//SOME HOOKS FOR ASSIGNING TEXT AND VISIBILTY 

const [result, setResult] = useState("🔮");
const [orderMethod, setOrder] = useState("In Store Pickup");
const [time, setTime] = useState("ASAP");
const [isHiding, toggleVisibility] = useState(true);

const [addressTxt, setAddress] = useState("");
const [zipTxt, setZip] = useState("");
const [cityTxt, setCity] = useState("");
const [aptTxt, setApt] = useState("");
const [instructionsTxt, setInstructions] = useState("");

console.log(addressTxt)


  var provideTxt = ""
  var ContaclessTitleTxt = ""
  var ContaclessTxt = ""

  var addresspHTxt = ""
  var aptpHTxt = ""
  var citypHTxt = ""
  var zippHTxt = ""
  var instructionpHTxt = ""

  var contactBoolTxt = ""

  var background = '#ffffff'
  var border = '#ffffff'
  var bottomborder = '#ffffff'
  var borderwidth = 0
  var boxcolor = "#ffffff"

if (!isHiding){
  //provideTxt = "Provide a delivery address";
  ContaclessTitleTxt = "We now offer contactless delivery";
  ContaclessTxt = "Minimize contact by selecting 'I want contactless\ndelivery' at the bottom."
  addresspHTxt = "Street Address"
  aptpHTxt = "Building Name / Suite / Apt"
  citypHTxt = "City"
  zippHTxt = "Zip code"
  instructionpHTxt = "Delivery instructions (22 character limit)"
  contactBoolTxt = "I want contactless delivery"
  background = '#ececec'
  border = '#d3d3d3'
  bottomborder = '#000000'
  boxcolor = "#ff0000"
} 


//CLICK METHODS: SHOW DELIVERY METHOD A.S.
const onPress2 = () =>
  ActionSheetIOS.showActionSheetWithOptions(
    {
      options: ["Cancel", "In Store Pickup", "Delivery",
       "Curbside", "Mobile Drive Up Window"],
      destructiveButtonIndex: 2,
      cancelButtonIndex: 0,
      title: 'How would you like to get your order?',
      tintColor: 'red'
    },
    buttonIndex => {
      if (buttonIndex === 0) {
 

        // cancel action
      } else if (buttonIndex === 1) {
        //console.log("picked 1")
        setOrder("In Store Pickup")
        toggleVisibility(true)
      } else if (buttonIndex === 2) {
        //console.log("picked 2")
        setOrder("Delivery")
        toggleVisibility(false)
      } else if (buttonIndex === 3) {
        //console.log("picked 1")
        setOrder("Curbside")
        toggleVisibility(true)
      } else if (buttonIndex === 4) {
        //console.log("picked 2")
        setOrder("Mobile Drive Up \nWindow")
        toggleVisibility(false)
      }
    }
  );
  
  //TIME ACTION SHEET

  const onPress3 = () =>
  ActionSheetIOS.showActionSheetWithOptions(
    {
      options: ["Cancel", "ASAP", "Later"],
      destructiveButtonIndex: 2,
      cancelButtonIndex: 0,
      title: 'How would you like to get your order?',
      tintColor: 'red'
    },
    buttonIndex => {
      if (buttonIndex === 0) {
 

        // cancel action
      } else if (buttonIndex === 1) {
        //console.log("picked 1")
        setTime("ASAP")
        setShow(false)

      } else if (buttonIndex === 2) {
        //console.log("picked 2")
        showMode('date');
        showMode('date');
        setTime("Later")
        
      }
    }
  );


 

  const checkEmptyFields = () => { if ((addressTxt === "" ||
  cityTxt == ""|| zipTxt == "") && orderMethod == "Delivery"){//.TODO add delivery selected check
   //createTwoButtonAlert
   Alert.alert(
    "Missing Information",
    "Please provide address, zip, and city.",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );
  } else {
    //storeData(orderMethod, 'DATE PLACEHOLDER', "TIME PLACE HOLDER",
    //addressTxt, aptTxt, cityTxt, zipTxt, instructionsTxt, contactBool)
    //storeData("hello")

    props.navigation.navigate("Search", {orderMethod: orderMethod, date: date, address: addressTxt,
  apt: aptTxt, city: cityTxt, zip: zipTxt, intructions: instructionsTxt, contactBool: contactBool})
    
  }
}




const onPress = () => props.navigation.navigate("Search")

const navigation = useNavigation() 
state = {
  language: 'java',
};
const [selectedValue, setSelectedValue] = useState("inStore");
const [selectedValue2, setSelectedValue2] = useState("asap");


state = {
country: 'usa'
}

state2 = {
time: 'asap'
}

return (
 
  <SafeAreaProvider style ={{
    backgroundColor: '#ffffff',
    }}>

 
      <Text style={localstyle.boldtextsmall}>
        How do you want to order?</Text>
     
     <View style={{flexDirection: 'row',
      width: '60%',
      }}>

        <Text style={localstyle.BigtextNoMargin}>  Order Type</Text>
        <Button onPress={onPress2} 
      title={orderMethod} 
      color='red'
      style = {localstyle.buttonEnd}/>

    </View> 

    <View style={{flexDirection: 'row',
      width: '70%',
      }}>

        <Text style={localstyle.BigtextNoMargin}>  When</Text>
        <Button onPress={onPress3} 
      title={time} 
      color='red'
      style = {localstyle.buttonEnd}/>
      
    </View> 

    <Text 
      style={localstyle.boldtextsmall}
      style = 
      {{backgroundColor: background,
        marginBottom: 8,
        fontSize: 18,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 8,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000000',
        fontWeight: 'bold',
        borderWidth: borderwidth,
        marginBottom:20,
        borderColor: {border},
       
      }}
      >
      {provideTxt}
    </Text>

    <View
    >
       
    <Text style={localstyle.redtextsmall}>
    {ContaclessTitleTxt}</Text>
    <Text style={{textAlign: 'center'}}>{ContaclessTxt}</Text>
    </View>
    

    <TextInput 
    style = {{
      borderBottomColor: bottomborder,
      width: '95%' ,
      height: 40, 
      backgroundColor: '#fff',
      marginTop: 8,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      textAlign: 'center',
      borderBottomWidth: 1,}}
      placeholder= {addresspHTxt}
      onChangeText={text => setAddress(text)}
      defaultValue={addressTxt}
    placeholderTextColor= '#000000'></TextInput>
   

    <TextInput style={{
      borderBottomColor: bottomborder,
      width: '95%' ,
      height: 40, 
      backgroundColor: '#fff',
      marginTop: 8,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      textAlign: 'center',
      borderBottomWidth: 1,
    }}
    placeholder= {aptpHTxt}
    onChangeText={text => setApt(text)}

    placeholderTextColor= '#000000'></TextInput>


    <TextInput style={{
      borderBottomColor: bottomborder,
      width: '95%' ,
      height: 40, 
      backgroundColor: '#fff',
      marginTop: 8,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      textAlign: 'center',
      borderBottomWidth: 1,
    }}
    onChangeText={text => setCity(text)}
    placeholder= {citypHTxt}
    placeholderTextColor= '#000000'></TextInput>


    <TextInput style={{
      borderBottomColor: bottomborder,
      width: '95%' ,
      height: 40, 
      backgroundColor: '#fff',
      marginTop: 8,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      textAlign: 'center',
      borderBottomWidth: 1,
    }}
    placeholder= {zippHTxt}
    onChangeText={text => setZip(text)}
    placeholderTextColor= '#000000'></TextInput>


    <TextInput style ={{
      borderBottomColor: bottomborder,
      width: '95%' ,
      height: 40, 
      backgroundColor: '#fff',
      marginTop: 8,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      textAlign: 'center',
      borderBottomWidth: 1,
    }}
    // onPress={clearText}
    placeholder= {instructionpHTxt}
    onChangeText={text => setInstructions(text)}

    placeholderTextColor= '#000000'
    ></TextInput>

    {/* //Add check contactBoolTxt */}


<View style={{
  flexDirection: "row-reverse",
  marginTop: 16,
  alignItems: 'flex-start',
  width: '100%',
  marginRight: 50}}>
    <CheckboxFormX
                  style={{ width:5,
                  tintColor: 'red',
                iconColor: 'red',
                backgroundColor: 'red,'
          }}
                  dataSource={mockData}
                  itemShowKey="label"
                  itemCheckedKey="RNchecked"
                  iconSize={20}
                  formHorizontal={false}
                  labelHorizontal={false}
                  iconColor={boxcolor}
                  onChange={() => toggleBool(!contactBool)}
                  
                  //onChecked={(item) => this._onSelect(item)}
              />
    <Text>{contactBoolTxt}</Text>

    </View>

    {show && (
        <DateTimePicker
          testID="datePicker"
          value={date}
          mode={modeDate}
          is24Hour={true}
          display="default"
          onChange={onChange}
          style={{marginLeft: '42%',
        color: 'red'}}
        />
      )}

{show && (
        <DateTimePicker
          testID="TimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          style={{marginLeft: '42%',
        color: 'red'}}
        />
      )}



    <StatusBar style="auto" />

    
<Button
onPress={checkEmptyFields}
title='Search for Locations'
style={localstyle.submitButton}
color='red'>

</Button>

    
    
  </SafeAreaProvider>
  
 

  

);
};

export default FeedbackScreen;


const localstyle = StyleSheet.create({
  submitButton: {
      
      bottom: 0,
      left:0,
      width: "100%",
      height: 90,
      backgroundColor: "red",
      alignItems: 'center',
      
      },
 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredcontainer: {
   
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#bebebe',
  
    paddingBottom: 8,
    //height: 30,
  },
  Bigtext: {
    backgroundColor: '#fff',
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    fontWeight: 'bold',
    width: '103%',
    borderColor: '#d3d3d3',
    paddingBottom: 20,
    paddingTop: 20,
    },
    BigtextNoMargin: {

      backgroundColor: '#fff',
      fontSize: 24,
      color: '#000000',
      fontWeight: 'bold',
      width: '103%',
      borderColor: '#d3d3d3',
    },
    Bigtextmargin: {
      backgroundColor: '#fff',
      fontSize: 24,
      justifyContent: 'center',
      alignItems: 'center',
      color: '#000000',
      fontWeight: 'bold',
      width: '103%',
      borderColor: '#d3d3d3',
      marginTop: 90,
      marginBottom: 8,
      },
    redtextsmall: {
      //backgroundColor: '#fff',
      fontSize: 18,
      marginTop: 8,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      color: '#FF0000',
      fontWeight: 'bold',
      marginBottom:8
      },
      boldtextsmall: {
        fontSize: 18,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 8,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000000',
        fontWeight: 'bold',
        borderWidth: .5,
        marginBottom:20,
        borderColor: '#bebebe',
        backgroundColor: '#ececec',
        },
      buttonEnd: {
        color: 'red',
      },
      borders: {
        width: '95%' ,
        height: 40,
        //borderRadius: 20, 
        backgroundColor: '#fff',
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        // borderWidth: 1 ,
        borderBottomWidth: 1,
        },
})

