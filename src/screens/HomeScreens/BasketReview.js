import React from "react";
import { View , Text, StyleSheet, Button,  Image, TouchableOpacity, StatusBar } from "react-native";
import { CommonActions, useNavigation } from '@react-navigation/native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { format } from "date-fns";

export default BasketReview =  props => {

  var date = ''
  var formattedDate = ''
  var orderMethod = 'fff'
  var burgerName = ''
  var price = ''
  var calories = ''
  var contactBool = ''
  var quantity = '1'
  var wrapBool = 'false'
  var bowlBool ='false'
  var lettuceBool = 'false'
  var ketchupBool = 'false'
  var mustardBool = 'false'
  var mayoBool = 'false'
  var picklesBool = 'false'
  var ATWBool = 'false'
  

  var instructions = ''
  var zip = ''
  var city = ''
  var apt = ''
  var address = ''

     date = props.navigation.state.params.date
     formattedDate = format(date, "MMMM do, yyyy H:mma");
     orderMethod = props.navigation.state.params.orderMethod
     console.log("Order Method" + orderMethod)

     contactBool = props.navigation.state.params.contactBool
     quantity = props.navigation.state.params.quantity
     price = props.navigation.state.params.price
     price = parseFloat(quantity) * parseFloat(price)
     calories = props.navigation.state.params.calories

     burgerName = props.navigation.state.params.burgerName
     wrapBool = props.navigation.state.params.wrapBool
     bowlBool = props.navigation.state.params.bowlBool

     lettuceBool = props.navigation.state.params.lettuceBool
     ketchupBool = props.navigation.state.params.ketchupBool
     mustardBool = props.navigation.state.params.mustardBool
     mayoBool = props.navigation.state.params.mayoBool

     picklesBool = props.navigation.state.params.picklesBool
     ATWBool = props.navigation.state.params.ATWBool

     instructions = props.navigation.state.params.instructions
     zip = props.navigation.state.params.from
     city = props.navigation.state.params.city
     apt = props.navigation.state.params.apt
     address = props.navigation.state.params.address


     var wrapTxt = ''
     if(wrapBool == 'true'){
       wrapTxt = "Wrapped in lettuce"
     } else



  console.log("Basket REview" + orderMethod + ' ' + contactBool + ' ' +  calories + ' ' +  price + ' ' + 
  burgerName + ' ' +  date + ' ' +  quantity + ' ' + bowlBool + ' ' + 
  wrapBool + ' ' + lettuceBool + ' ' + mayoBool + ' ' + ketchupBool + ' ' + 
  mustardBool + ' ' + picklesBool + ' ' + ATWBool + ' ' + address + ' ' +
  ' ' + apt + ' ' +' ' + city + ' ' +' ' + zip + ' ' +' ' + instructions + ' '  )

  
 
  const onPressBurger = () => props.navigation.navigate("BurgerMenu")
  
  const backToMenuCateg = () => props.navigation.navigate("MenuCateg")

   

 
  
  const navigation = useNavigation() // <-- add this lin
  return (
   
    <SafeAreaProvider style ={{backgroundColor: '#ffffff'}}>
    <View>

    {/* <Text style={localstyle.redtextsmall}>
          Location placeholder</Text> */}
          <Button
          onPress={backToMenuCateg}
          title="Add Items"
          color="red"
          />
          
          <Text style={localstyle.boldtextsmall}>
         {orderMethod} {formattedDate}  </Text>

         
          <Text style={localstyle.Bigtext}>
          {quantity} {burgerName} {price}</Text>


          <Text style={localstyle.text}>
          {wrapTxt} {burgerName} {price}</Text>
          
         

        
        

      

        <Button
        onPress={() => props.navigation.navigate("Checkout")}
        title='Checkout'
        color='red'/>

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
   
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
   

      Bigtext: {
        backgroundColor: '#fff',
        fontSize: 22,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000000',
        width: '103%',
        borderColor: '#d3d3d3',
        borderWidth: .5,
        paddingBottom: 8,
        paddingTop: 8,
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

  })
  
