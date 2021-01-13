import React from "react";
import { View , Text, StyleSheet, Button, SafeAreaView, Image, TouchableOpacity, StatusBar } from "react-native";
import { CommonActions, useNavigation } from '@react-navigation/native'





const FeedbackScreen =  props => {
 
  const onPress = () => navigation.navigate("Privacy")
  
  const navigation = useNavigation() // <-- add this line
  
  return (
   
      <SafeAreaView style ={{backgroundColor: '#ffffff'}}>

        <Text style={localstyle.redtextsmall}>What is this about?</Text>
       
        <TouchableOpacity
       
        onPress = {()=> props.navigation.navigate("Privacy")}
        >
        
          <Text style={localstyle.Bigtext}>  App</Text>
         
        </TouchableOpacity>
        

        <TouchableOpacity
        style={localstyle.button}
        onPress = {onPress}>
          <Text style={localstyle.Bigtext}>  Food</Text>
        </TouchableOpacity>


        <TouchableOpacity
        style={localstyle.button}
        onPress = {onPress}>
          <Text style={localstyle.Bigtext}>  Service</Text>
        </TouchableOpacity>


        <TouchableOpacity
        style={localstyle.button}
        onPress = {onPress}>
          <Text style={localstyle.Bigtext}>  Other</Text>
        </TouchableOpacity>


      

      <StatusBar style="auto" />

      </SafeAreaView>
   

    

);
};

export default FeedbackScreen;


const localstyle = StyleSheet.create({
    centeredcontainer: {
      flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
    //justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
     marginTop: 0,
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
        fontSize: 18,
       marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FF0000',
        fontWeight: 'bold',
        marginBottom:20
        
    
        },

  })
  
