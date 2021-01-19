import React from 'react';
import { View , Text, StyleSheet,
   TouchableOpacity, StatusBar } from "react-native";
import {  useNavigation } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
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

    // console.log(orderMethod + ' ' + contactBool + ' ' +  calories + ' ' +  price + ' ' + 
    //       burgerName + ' ' +  date + ' ' +  quantity + ' ' + bowlBool + ' ' + 
    //       wrapBool + ' ' + lettuceBool + ' ' + mayoBool + ' ' + ketchupBool + ' ' + 
    //       mustardBool + ' ' + picklesBool + ' ' + ATWBool + ' ' + address + ' ' +
    //       ' ' + apt + ' ' +' ' + city + ' ' +' ' + zip + ' ' +' ' + instructions + ' '  )

 

 
  const onPressHamburger = (price, burgername, calories) => {
   
    //try {
      type =  burgername.toString()

      props.navigation.navigate("FriesQuant",
       {orderMethod: orderMethod,
          contactBool: contactBool, calories: calories,
         price: price, type: type, 
         date: date, address: address,
        apt: apt, city: city, zip: zip, 
        instructions: instructions})
      //console.log('pass data success HB Menu' + orderMethod + burgername )

     //} catch (e) {
     // props.navigation.navigate("OrderQuant")
     //}
    // props.navigation.navigate("OrderQuant",
    //  {price: {price}, burgerName: {burgername}})

  }
 

   const navigation = useNavigation() 


  return (
   
    <SafeAreaProvider style ={{backgroundColor: '#ffffff'}}>
    <View>
       
        <TouchableOpacity
        onPress = {() => onPressFountainDrink('2.59', 'Regular Drink', '0-360')}
        >
            <View style={localstyle.Row}>
            <Text tyle={localstyle.Bigtext}> 
            Regular Drink</Text>
             <Text tyle={localstyle.smalltext}>
             $2.59  0-360 Calories
             </Text>
            </View>
        </TouchableOpacity>

       

 <TouchableOpacity
        onPress = {() => onPressFountainDrink('2.99', 'Large Drink', '0-520')}>
            <View style={localstyle.Row}>
            <Text tyle={localstyle.Bigtext}> 
            Large Drink</Text>
             <Text tyle={localstyle.smalltext}>
             $2.99  0-520 Calories
             </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress = {() => onPressHamburger('2.29', 'Bottled Water', '0')}>
            <View style={localstyle.Row}>
            <Text tyle={localstyle.Bigtext}> 
            Bottled Water</Text>
             <Text tyle={localstyle.smalltext}>
             $2.29  0 Calories
             </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress = {() => onPressHamburger('2.99', 'Honest Tea Bottle', '70')}>
            <View style={localstyle.Row}>
            <Text tyle={localstyle.Bigtext}> 
            Honest Tea Bottle</Text>
             <Text tyle={localstyle.smalltext}>
             $2.99 70 Calories
             </Text>
            </View>
        </TouchableOpacity>

       

        <TouchableOpacity
        onPress = {() => onPressHamburger('2.99', 'Coke Bottle', '240')}>
            <View style={localstyle.Row}>
            <Text tyle={localstyle.Bigtext}> 
            Coke Bottle</Text>
             <Text tyle={localstyle.smalltext}>
             $2.99  240 Calories
             </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress = {() => onPressHamburger('2.99', 'Diet Coke', '0')}>
            <View style={localstyle.Row}>
            <Text tyle={localstyle.Bigtext}> 
            Diet Coke</Text>
             <Text tyle={localstyle.smalltext}>
             $2.99  0 Calories
             </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress = {() => onPressHamburger('2.99', 'Sprite Bottle', '240')}>
            <View style={localstyle.Row}>
            <Text tyle={localstyle.Bigtext}> 
            Sprite Bottle</Text>
             <Text tyle={localstyle.smalltext}>
             $2.99  240 Calories
             </Text>
            </View>
        </TouchableOpacity>

      

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
      fontSize: 24,
      justifyContent: 'center',
      alignItems: 'center',
      color: '#000000',
      fontWeight: 'bold',
      borderColor: '#d3d3d3',
      borderWidth: .5,
      paddingBottom: 20,
      paddingTop: 20,
      },
      Smalltext: {
        backgroundColor: '#fff',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000000',
        borderColor: '#d3d3d3',
        borderWidth: .5,
        paddingBottom: 20,
        paddingTop: 20,
        },
      Row: {
        backgroundColor: '#fff',
        fontSize: 24,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
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
  
