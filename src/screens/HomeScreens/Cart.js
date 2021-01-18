import React from "react";
import { View , Text, StyleSheet, Button,  Image, TouchableOpacity, StatusBar } from "react-native";
import { CommonActions, useNavigation } from '@react-navigation/native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { format } from "date-fns";



export default MenuCateg =  props => {

  var date = ''
  var formattedDate = ''
  var orderMethod = ''
  var contactBool = ''
  var intructions = ''
  var zip = ''
  var city = ''
  var apt = ''
  var address = ''

  try{
     date = props.navigation.state.params.date
     formattedDate = format(date, "MMMM do, yyyy H:mma");
     orderMethod = props.navigation.state.params.orderMethod
     contactBool = props.navigation.state.params.contactBool
     intructions = props.navigation.state.params.intructions
     zip = props.navigation.state.params.from
     city = props.navigation.state.params.city
     apt = props.navigation.state.params.apt
     address = props.navigation.state.params.address
    
  } catch (e){
  //nothing to see here
  }
 
  const onPressBurger = () => props.navigation.navigate("BurgerMenu")
  const onPressHotDog = () => props.navigation.navigate("HotDogMenu")
  const onPressSandwich = () => props.navigation.navigate("SandwichMenu")
  const onPressFries = () => props.navigation.navigate("FriesMenu")
  const onPressDrinks = () => props.navigation.navigate("DrinksMenu")
  const onPressShakes = () => props.navigation.navigate("ShakesMenu")
  
  const basketReview = () => {
    console.log("basket pressed")
    props.navigation.navigate("BasketReview")} 
  const navigation = useNavigation()

  

  return (
   
    <SafeAreaProvider style ={{backgroundColor: '#ffffff'}}>
    <View>

  

        <Text style={localstyle.boldtextsmall}>
         {orderMethod}  {formattedDate}</Text>
       
        <TouchableOpacity
       
        onPress = {onPressBurger}
        >
        
          <Text style={localstyle.Bigtext}>  Burgers</Text>
         
        </TouchableOpacity>
        

        <TouchableOpacity
        style={localstyle.button}
        onPress = {onPressHotDog}>
          <Text style={localstyle.Bigtext}>  Hot Dogs</Text>
        </TouchableOpacity>


        <TouchableOpacity
        style={localstyle.button}
        onPress = {onPressSandwich}>
          <Text style={localstyle.Bigtext}>  Sandwiches</Text>
        </TouchableOpacity>


        <TouchableOpacity
        style={localstyle.button}
        onPress = {onPressFries}>
          <Text style={localstyle.Bigtext}>  Fries</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={localstyle.button}
        onPress = {onPressDrinks}>
          <Text style={localstyle.Bigtext}>  Drinks</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={localstyle.button}
        onPress = {onPressShakes}>
          <Text style={localstyle.Bigtext}>  Shakes</Text>
        </TouchableOpacity>

        <Button
        onPress={basketReview}
        title='Review Basket'
        color='red'
        style={{marginTop: 8}}
        />

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
  
