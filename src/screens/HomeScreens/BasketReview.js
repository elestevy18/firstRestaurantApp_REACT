import React from "react";
import { View , Text, StyleSheet, Button,  Image, TouchableOpacity, StatusBar } from "react-native";
import { CommonActions, useNavigation } from '@react-navigation/native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';






export default BasketReview =  props => {

  var date = ''
  var formattedDate = ''
  var orderMethod = ''
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

  try{
     date = props.navigation.state.params.date
     formattedDate = format(date, "MMMM do, yyyy H:mma");
     orderMethod = props.navigation.state.params.orderMethod
     contactBool = props.navigation.state.params.contactBool
     price = props.navigation.state.params.price
     calories = props.navigation.state.params.calories
     burgerName = props.navigation.state.param.burgerName

     quantity = props.navigation.state.param.quantity
     wrapBool = props.navigation.state.param.wrapBool
     bowlBool = props.navigation.state.param.bowlBool

     lettuceBool = props.navigation.state.param.lettuceBool
     ketchupBool = props.navigation.state.param.ketchupBool
     mustardBool = props.navigation.state.param.mustardBool
     mayoBool = props.navigation.state.param.mayoBool

     picklesBool = props.navigation.state.param.picklesBool
     ATWBool = props.navigation.state.param.ATWBool

     instructions = props.navigation.state.params.instructions
     zip = props.navigation.state.params.from
     city = props.navigation.state.params.city
     apt = props.navigation.state.params.apt
     address = props.navigation.state.params.address


    
  } catch (e){
  //nothing to see here
  //console.log('falt to download' )

  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
  }

  console.log(orderMethod + ' ' + contactBool + ' ' +  calories + ' ' +  price + ' ' + 
  burgerName + ' ' +  date + ' ' +  quantity + ' ' + bowlBool + ' ' + 
  wrapBool + ' ' + lettuceBool + ' ' + mayoBool + ' ' + ketchupBool + ' ' + 
  mustardBool + ' ' + picklesBool + ' ' + ATWBool + ' ' + address + ' ' +
  ' ' + apt + ' ' +' ' + city + ' ' +' ' + zip + ' ' +' ' + instructions + ' '  )
  console.log(burgerName + "burg3r name")
  
 
  const onPressBurger = () => props.navigation.navigate("BurgerMenu")
  
  const backToMenuCateg = () => props.navigation.navigate("MenuCateg")

  const basketReview = () => props.navigation("BasketReview")

 
  
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
          
          <Text style={localstyle.redtextsmall}>
          In store pickup {formattedDate}  </Text>

         
          <Text style={localstyle.text}>
          {quantity} </Text>
          <Text style={localstyle.text}>
          Hamburger </Text>
          <Text style={localstyle.text}>
          $6.49 </Text>
          <Text style={localstyle.text}>
          820 calories </Text>
        

        
        

      

        <Button
        onPress={()=> basketReview}
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
  
