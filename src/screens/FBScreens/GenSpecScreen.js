import React from "react";
import { View , Text, StyleSheet, Button, SafeAreaView, Image, TouchableOpacity, StatusBar } from "react-native";
import { CommonActions, useNavigation } from '@react-navigation/native'





const GenSpecScreen =  props => {

  const from = props.navigation.state.params.from
  const type = props.navigation.state.params.type
  console.log("From" + from + " type " + type )

 
  const onPress = () => props.navigation.navigate
  ("Input", {type: type, from: from, genspec: "General"})
  const onPress2 = () => props.navigation.navigate
  ("maplist", {type: type, from: from, genspec: "Specific"})

  
  const navigation = useNavigation() // <-- add this line
  
  return (
   
      <SafeAreaView style ={{backgroundColor: '#ffffff'}}>

        <Text style={localstyle.redtextsmall}>Is this about a specific location??</Text>
       
        <TouchableOpacity
       
        onPress = {onPress}
        >
        
          <Text style={localstyle.Bigtext}>  General Feedback</Text>
         
        </TouchableOpacity>
        

        <TouchableOpacity
        style={localstyle.button}
        onPress = {onPress2}>
          <Text style={localstyle.Bigtext}>  Specific Location </Text>
        </TouchableOpacity>


        
      

      <StatusBar style="auto" />

      </SafeAreaView>
   

    

);
};

export default GenSpecScreen;


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
  
