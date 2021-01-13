
import { View , Text, StyleSheet, Button, 
   Image, TouchableOpacity, StatusBar, Picker } from "react-native";
import { CommonActions, useNavigation } from '@react-navigation/native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
//mport {Picker} from '@react-native-picker/picker';
import React, { useState, useEffect, setState } from 'react';


export default FeedbackScreen  =  props => {
 
  const onPress = () => props.navigation.navigate("Order")
  
  const navigation = useNavigation() 


  
  return (
   
    <SafeAreaProvider style ={{backgroundColor: '#ffffff'}}>
    <View>

        <Image 
        style ={{marginLeft: -13}}
        source={require("../../../assets/GrillKing.png")}></Image>

        <TouchableOpacity
        style={localstyle.button}
        onPress = {onPress}>
          <Text style={localstyle.Bigtext}>  Start new order</Text>
        </TouchableOpacity>


       

      <StatusBar style="auto" />

      </View>
    </SafeAreaProvider>
   

    

);
};

//export default FeedbackScreen;


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
  
