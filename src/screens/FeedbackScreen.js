import React from "react";
import { View , Text, StyleSheet, Button,  Image, TouchableOpacity, StatusBar } from "react-native";
import { CommonActions, useNavigation } from '@react-navigation/native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';






const FeedbackScreen =  props => {
 
  const onPressApp = () => props.navigation.navigate("Type", {from: "App"})
  const onPressFood = () => props.navigation.navigate("Type", {from: "Food"})
  const onPressService = () => props.navigation.navigate("Type", {from: "Service"})
  const onPressOther = () => props.navigation.navigate("Type", {from: "Other"})
  const navigation = useNavigation() // <-- add this line
  
  return (
   
    <SafeAreaProvider style ={{backgroundColor: '#ffffff'}}>
    <View>

        <Text style={localstyle.redtextsmall}>What is this about?</Text>
       
        <TouchableOpacity
       
        onPress = {onPressApp}
        >
        
          <Text style={localstyle.Bigtext}>  App</Text>
         
        </TouchableOpacity>
        

        <TouchableOpacity
        style={localstyle.button}
        onPress = {onPressFood}>
          <Text style={localstyle.Bigtext}>  Food</Text>
        </TouchableOpacity>


        <TouchableOpacity
        style={localstyle.button}
        onPress = {onPressService}>
          <Text style={localstyle.Bigtext}>  Service</Text>
        </TouchableOpacity>


        <TouchableOpacity
        style={localstyle.button}
        onPress = {onPressOther}>
          <Text style={localstyle.Bigtext}>  Other</Text>
        </TouchableOpacity>


      

      <StatusBar style="auto" />

      </View>
    </SafeAreaProvider>
   

    

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
  
