import React from "react";
import { View , Text, StyleSheet, Button, 
     Image, TouchableOpacity, StatusBar, Alert } from "react-native";
import { CommonActions, useNavigation } from '@react-navigation/native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { format } from "date-fns";



export default MenuCateg =  props => {

  var date = ''
  var formattedDate = ''
  var orderMethod = ''
  var contactBool = ''
  var instructions = ''
  var zip = ''
  var city = ''
  var apt = ''
  var address = ''

  try{
     date = props.navigation.state.params.date
     formattedDate = format(date, "MMMM do, yyyy H:mma");
     orderMethod = props.navigation.state.params.orderMethod
     contactBool = props.navigation.state.params.contactBool
     instructions = props.navigation.state.params.instructions
     zip = props.navigation.state.params.from
     city = props.navigation.state.params.city
     apt = props.navigation.state.params.apt
     address = props.navigation.state.params.address
    
  } catch (e){
  //nothing to see here
  }
 
  //const  = () => props.navigation.navigate("BurgerMenu")
 
  
//   const toGiftCard = props => props.navigation.navigate("GiftCard")

//   const toGiftCard = props => props.navigation.navigate("NewCard")


 



  return (
   
    <SafeAreaProvider style ={{backgroundColor: '#ffffff'}}>
    <View>

  

        <Text style={localstyle.boldtextsmall}>
         {orderMethod}  {formattedDate}</Text>
       
        <TouchableOpacity
       
        onPress = {() => props.navigation.navigate("NewCard")}
        >
        
          <Text style={localstyle.Bigtext}>  New Credit Card</Text>
         
        </TouchableOpacity>
        

        <TouchableOpacity
        style={localstyle.button}
        onPress = {() => props.navigation.navigate("GiftCard")}>
          <Text style={localstyle.Bigtext}>  Five Guys Gift Card</Text>
        </TouchableOpacity>




        <Button title = "Contine"
   color= "#FF0000"
   style = {localstyle.margin}  
    onPress = {()=> {
    if (//place condition
        1==1){
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

      

      <StatusBar style="auto" />

      </View>
    </SafeAreaProvider>
   

    

);
};




const localstyle = StyleSheet.create({
    centeredcontainer: {
      flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
    //justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
      borderColor: '#bebebe',
      backgroundColor: '#ececec',
      },
   
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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
      borderWidth: .5,
      
      paddingBottom: 20,
      paddingTop: 20,
  
      },

      redtextsmall: {
  
        backgroundColor: '#fff',
        fontSize: 12,
       marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000000',
        //fontWeight: 'bold',
        marginBottom:8
        
    
        },

  })
  
