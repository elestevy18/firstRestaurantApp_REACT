import React, { useState, useEffect } from 'react';
import { View , Text, StyleSheet, Button,  Image,
   TouchableOpacity, StatusBar,   } from "react-native";
   import AsyncStorage from '@react-native-community/async-storage'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import CheckboxFormX from 'react-native-checkbox-form';
import { format } from "date-fns";


const mockData = [
  {
      label: '',
      RNchecked: false
  },
];


export default MenuCateg =  props => {

  
  var date = ''
  var formattedDate = ''
  var orderMethod = ''
  var burgerName = ''
  var price = ''
  var calories = ''
  var contactBool = ''



  var instructions = ''
  var zip = ''
  var city = ''
  var apt = ''
  var address = ''

  
     date = props.navigation.state.params.date
     ////console.log(date )
     formattedDate = format(date, "MMMM do, yyyy H:mma");
     ////console.log(formattedDate )
     orderMethod = props.navigation.state.params.orderMethod
     console.log(orderMethod )
     contactBool = props.navigation.state.params.contactBool
     ////console.log(contactBool )
     price = props.navigation.state.params.price
     ////console.log(price )
     calories = props.navigation.state.params.calories
     ////console.log(calories )
     burgerName = props.navigation.state.params.type
     console.log("burgerDownload" + burgerName )

     try{
     instructions = props.navigation.state.params.instructions
     ////console.log(instructions )
     zip = props.navigation.state.params.from
     ////console.log(zip )
     city = props.navigation.state.params.city
     ////console.log(city )
     apt = props.navigation.state.params.apt
     ////console.log(apt )
     address = props.navigation.state.params.address
     ////console.log(address )


    
  } catch (e){
  //nothing to see here
  ////console.log('falt to download' )

  }

   // create a function that saves your data asyncronously
   _storeData = async () => {
    try {
        await AsyncStorage.setItem('name', 'John');
        console.log("jon saved")
    } catch (error) {
        // Error saving data
    }
}
  

   
    const [count, setCount] = useState(1);
    const [bowlBool, toggleBowlBool] = useState(false);
    const [wrapBool, toggleWrapBool] = useState(false);
    const [lettuceBool, toggleLettuceBool] = useState(false);
    const [mayoBool, toggleMayoBool] = useState(false);
    const [ketchupBool, toggleKetchupBool] = useState(false);
    const [mustardBool, toggleMustardBool] = useState(false);
    const [picklesBool, togglePicklesBool] = useState(false);
    const [ATWBool, toggleATWBool] = useState(false);
    
    const addToBasket =  (orderMethod, quantity,   bowlBool, wrapBool, lettuceBool,
       mayoBool, ketchupBool, mustardBool, picklesBool, ATWBool) => {

        _storeData

       // bowlBool ? localStorage.setItem('bowl', true) :  localStorage.setItem('bowl', false)
      
        //try {
          // console.log("Order Quant:" + orderMethod + ' ' + burgerName + ' ' +  calories + ' ' +  price + ' ' + 
          //  burgerName + ' ' +  date + ' ' +  quantity + ' ' + bowlBool + ' ' + 
          // wrapBool + ' ' + lettuceBool + ' ' + mayoBool + ' ' + ketchupBool + ' ' + 
          // mustardBool + ' ' + picklesBool + ' ' + ATWBool + ' ' + address + ' ' +
          // ' ' + apt + ' ' +' ' + city + ' ' +' ' + zip + ' ' +' ' + instructions + ' '  )
          console.log("BErguer pass" + burgerName)
          props.navigation.navigate("BasketReview",
           {orderMethod: orderMethod,
              contactBool: contactBool, calories: calories,
             price: price, burgerName: burgerName, 
             date: date, quantity: quantity, bowlBool: bowlBool, wrapBool: wrapBool,
             lettuceBool: lettuceBool, mayoBool: mayoBool,
             ketchupBool: ketchupBool, mustardBool: mustardBool,
             picklesBool: picklesBool, ATWBool:ATWBool, 

             address: address,
            apt: apt, city: city, zip: zip, 
            instructions: instructions})
          //console.log('burger namae' + burgerName + price)
    
        //  } catch (e) {
        //    //console.log('nodatapassed')
        //   props.navigation.navigate("BasketReview")
        //  }
        // props.navigation.navigate("OrderQuant",
        //  {price: {price}, burgerName: {burgername}})
        
       }





  var boxcolor = "#ffffff"
 

   const navigation = useNavigation() 


  return (
   
    <SafeAreaProvider style ={{backgroundColor: '#ffffff'}}>
    <View>

        <Text
        style = {{
          fontSize: 22,
          marginBottom: 8,
          marginTop: 8
        }}>
           {burgerName} ${price} {calories} calories
        </Text>

    <Text style={localstyle.boldtextsmall}>
        Quantity</Text>

        <View style={localstyle.counter}>
          <Button
          onPress={() => setCount(count-1)}
          title="-"
          color="red"/>

          <Text>
          {count}
          </Text>

          <Button
          onPress={() => setCount(count+1)}
          title="+"
          color="red"
          />
       
            </View>

            <Button onPress={()=>addToBasket(orderMethod, count, bowlBool, wrapBool, lettuceBool,
       mayoBool, ketchupBool, mustardBool, picklesBool, ATWBool)}
            title="Add to Basket"
            style={{width: '90%',
            backgroundColor: 'red'
          }}
          color= "red"
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
    counter: {
    //flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
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
      paddingTop: 20,
      marginLeft: 8,
      marginRight: 20,
      //marginTop: 4,
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
        flexDirection: 'row',
        fontSize: 24,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        color: '#000000',
        fontWeight: 'bold',
        //width: '100%',
        borderColor: '#d3d3d3',
        borderWidth: .5,
        paddingBottom: 4,
        paddingTop: 4,
        paddingLeft: 8,
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
  
