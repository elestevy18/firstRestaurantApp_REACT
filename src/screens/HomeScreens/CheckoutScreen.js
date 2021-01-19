import { Button, View, Text, SafeAreaView, StyleSheet,
  TextInput, Alert } from 'react-native';
  import React, { useState} from 'react';




 const App = props => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [emailAdd, setEmail] = useState("");

  const checkEmptyFields = () => { 
    if (username == "" || password == ""){
   Alert.alert(
    "Missing Information",
    "Please provide username and password.",
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
    props.navigation.navigate("Payment")
    
  }
}
return (
 <SafeAreaView style={localstyle.centeredcontainer}>

 
  <TextInput 
    style = {localstyle.textinput}
      placeholder = 'username'
      onChangeText={text => setUsername(text)}
      defaultValue={username}
    placeholderTextColor= '#000000'></TextInput>


<TextInput 
    style = {localstyle.textinput}
      placeholder = 'password'
      onChangeText={text => setPassword(text)}
      defaultValue={password}
    placeholderTextColor= '#000000'></TextInput>
   
 
   
   <Button title = "Login"
   color= "#FF0000"
   style = {localstyle.margin}  
    onPress = {()=> {
    if (username == "" || password == ""){
      Alert.alert(
       "Missing Information",
       "Please provide username and password.",
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
       props.navigation.navigate("Payment")
       
     }
   }}></Button>

<Text style={localstyle.boldtextsmall}>
        Guest Checkout</Text>

        <TextInput 
    style = {localstyle.textinput}
      placeholder = 'First Name'
      onChangeText={text => setFirstName(text)}
      defaultValue={firstName}
    placeholderTextColor= '#000000'></TextInput>

<TextInput 
    style = {localstyle.textinput}
      placeholder = 'Last Name'
      onChangeText={text => setLastName(text)}
      defaultValue={LastName}
    placeholderTextColor= '#000000'></TextInput>

<TextInput 
    style = {localstyle.textinput}
      placeholder = 'Email Address'
      onChangeText={text => setEmail(text)}
      defaultValue={emailAdd}
    placeholderTextColor= '#000000'></TextInput>

<Button title = "Guest Checkout"
   color= "#FF0000"
   style = {localstyle.margin}  
    onPress = {()=> {
    if (firstName == "" || LastName == "" || emailAdd == ""){
      Alert.alert(
       "Missing Information",
       "Please provide first name, last name and password.",
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
       props.navigation.navigate("Payment")
       
     }
   }}></Button>
   
   
       </SafeAreaView>

);

};

export default App;


const localstyle = StyleSheet.create({
 centeredcontainer: {
   flex: 1,
 backgroundColor: '#fff',
 marginTop: 30,
 //justifyContent: 'center',
 alignItems: 'center',
 width: '100%',
 },
 borders: {
 width: '70%' ,
 height: 40,
 borderRadius: 20, 
 backgroundColor: '#fff',
 marginTop: 8,
 justifyContent: 'center',
 alignItems: 'center',
 alignSelf: 'center',
 textAlign: 'center',
 borderWidth: 1 ,
 },
 redtext: {
   backgroundColor: '#fff',
   fontSize: 24,
  marginTop: 200,
   justifyContent: 'center',
   alignItems: 'center',
   color: '#FF0000',
   fontWeight: 'bold',

   },
   margin: {
    marginBottom: 20,
    marginTop: 8,
    },
   textinput: {
    borderBottomColor: 'black',
    //bottomborder: .5,
   width: '95%' ,
   height: 40, 
   backgroundColor: '#fff',
   marginTop: 8,
   justifyContent: 'center',
   alignItems: 'center',
   alignSelf: 'center',
   textAlign: 'center',
   borderBottomWidth: 1,
   marginBottom: 8,
   },
   boldtextsmall: {
    fontSize: 14,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    fontWeight: 'bold',
    borderWidth: .5,
    marginBottom:10,
    marginTop: 10,
    borderColor: '#bebebe',
    backgroundColor: '#ececec',
    width: '100%',
    },
})
