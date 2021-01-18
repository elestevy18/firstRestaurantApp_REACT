import React from "react";
import { View , Text, StyleSheet, Button, SafeAreaView, Image, TouchableOpacity, StatusBar } from "react-native";
import { CommonActions, useNavigation } from '@react-navigation/native'





const FBListScreen =  props => {

  const from = props.navigation.state.params.from

  console.log("From " + from )

 
  const onPressCompliment = () => props.navigation.navigate
  ("Location", {from: from, type: 'Compliment'})
  const onPressIssue = () => props.navigation.navigate
  ("Location", {from: from, type: 'Issue'})
  const onPressQuestion = () => props.navigation.navigate
  ("Location", {from: from, type: 'Question'})
  const onPressSuggestion = () => props.navigation.navigate
  ("Location", {from: from, type: 'Suggestion'})
  
  const navigation = useNavigation() // <-- add this line
  
  return (
   
      <SafeAreaView style ={{backgroundColor: '#ffffff'}}>

        <Text style={localstyle.redtextsmall}>What's on your mind?</Text>
       
        <TouchableOpacity
       
        onPress = {onPressCompliment}
        >
        
          <Text style={localstyle.Bigtext}>  Compliment</Text>
         
        </TouchableOpacity>
        

        <TouchableOpacity
        style={localstyle.button}
        onPress = {onPressIssue}>
          <Text style={localstyle.Bigtext}>  Issue</Text>
        </TouchableOpacity>


        <TouchableOpacity
        style={localstyle.button}
        onPress = {onPressQuestion}>
          <Text style={localstyle.Bigtext}>  Question</Text>
        </TouchableOpacity>


        <TouchableOpacity
        style={localstyle.button}
        onPress = {onPressSuggestion}>
          <Text style={localstyle.Bigtext}>  Suggestion</Text>
        </TouchableOpacity>


      

      <StatusBar style="auto" />

      </SafeAreaView>
   

    

);
};

export default FBListScreen;


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
  
