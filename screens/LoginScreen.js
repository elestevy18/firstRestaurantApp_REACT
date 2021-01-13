import { Button, View, Text, SafeAreaView, StyleSheet,
     TextInput } from 'react-native';
    import * as React from 'react';



    const App = props => {
  return (
    <SafeAreaView style={localstyle.centeredcontainer}>

      <Text
      style={localstyle.redtext}>Login</Text>
      <TextInput
      style={localstyle.borders}>Username
      </TextInput>
      
      <TextInput
      style={localstyle.borders}>Password
      </TextInput>
      
      <Button title = "Login"
      color= "#FF0000"
      onPress = {()=> props.navigation.navigate("Home")}>Login</Button>
      
      
          </SafeAreaView>
  
  );

};

export default App;


  const localstyle = StyleSheet.create({
    centeredcontainer: {
      flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
    //justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    },
    borders: {
    width: '70%' ,
    height: 40,
    borderRadius: 20, 
    backgroundColor: '#fff',
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    borderWidth: 1 ,
    },
    redtext: {
    
      backgroundColor: '#fff',
      fontSize: 24,
     marginTop: 200,
      justifyContent: 'center',
      alignItems: 'center',
      color: '#FF0000',
      fontWeight: 'bold',
  
      },
  })
  