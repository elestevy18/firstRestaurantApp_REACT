import { Button,  Text, SafeAreaView, StyleSheet,
    TextInput, Alert } from 'react-native';
    import React, { useState} from 'react';
  
  
  
  
   const App = props => {
  
    const [cardNumber, setcardNumber] = useState("");
    const [CVV, setCVV] = useState("");
    const [zip, setzip] = useState("");
    const [expMonth, setexpMonth] = useState("");
    const [expiryYearAdd, setexpiryYear] = useState("");
  
    const checkEmptyFields = () => { 
      if (cardNumber == "" || CVV == ""){
     Alert.alert(
      "Missing Information",
      "Please provide cardNumber and CVV.",
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
  
  <Text style={localstyle.boldtextsmall}>
          New Credit Card</Text>

    <TextInput 
      style = {localstyle.textinput}
        placeholder = 'Card #'
        onChangeText={text => setcardNumber(text)}
        defaultValue={cardNumber}
      placeholderTextColor= '#000000'></TextInput>
  
  
  <TextInput 
      style = {localstyle.textinput}
        placeholder = 'CVV'
        onChangeText={text => setCVV(text)}
        defaultValue={CVV}
      placeholderTextColor= '#000000'></TextInput>
     
   
     
  
  
  
          <TextInput 
      style = {localstyle.textinput}
        placeholder = 'Zip'
        onChangeText={text => setzip(text)}
        defaultValue={zip}
      placeholderTextColor= '#000000'></TextInput>
  
  <TextInput 
      style = {localstyle.textinput}
        placeholder = 'Expiry Month'
        onChangeText={text => setexpMonth(text)}
        defaultValue={expMonth}
      placeholderTextColor= '#000000'></TextInput>
  
  <TextInput 
      style = {localstyle.textinput}
        placeholder = 'Expiry Year'
        onChangeText={text => setexpiryYear(text)}
        defaultValue={expiryYearAdd}
      placeholderTextColor= '#000000'></TextInput>
  
  <Button title = "Guest Checkout"
     color= "#FF0000"
     style = {localstyle.margin}  
      onPress = {()=> {
      if (cardNumber == "" ||CVV == "" ||zip == "" || expMonth == "" || expiryYearAdd == ""){
        Alert.alert(
         "Missing Information",
         "Please provide first name, last name and CVV.",
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
  