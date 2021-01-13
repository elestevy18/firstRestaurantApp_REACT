import React from "react";
import { View , Text, StyleSheet, Button, SafeAreaView, Image,
   TouchableOpacity, StatusBar, TextInput } from "react-native";
import { CommonActions, useNavigation } from '@react-navigation/native'





const GenSpecScreen =  props => {
  return (
    <SafeAreaView style={localstyle.container}>

<Text style={{marginLeft: 8}}
>What      App</Text>

<Text style={{marginLeft: 8}}>Why       Compliment</Text>
<TextInput
style={localstyle.borders}>Full Name
</TextInput>

<TextInput
style={localstyle.borders}>Email
</TextInput>

<Text style = {localstyle.redtextsmall}>
  Feedback
</Text>

<TextInput
style={localstyle.borders}>What's on your mind?
</TextInput>




<View style={{height: 500}}></View>


<View style={localstyle.submitButton}
>
  <Text style={{color: '#fff', marginTop: 16,
  fontSize: 18, fontWeight:"bold"}}>Submit Feedback</Text>
</View>

    </SafeAreaView>
  
  );

};

export default GenSpecScreen;


const localstyle = StyleSheet.create({
  submitButton: {
    width: "100%",
    height: 90,
    backgroundColor: "red",
   // justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'baseline',

    },
  borders: {
  width: '95%' ,
  height: 40,
  //borderRadius: 20, 
  backgroundColor: '#fff',
  marginTop: 8,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  textAlign: 'center',
  // borderWidth: 1 ,
  borderBottomWidth: 1,
 

  },
  container: {
    flex: 1,
  backgroundColor: '#fff',
  marginTop: 8,
  },
  image: {
    width:60,
    height:60,
  backgroundColor: '#fff',
  alignItems: 'flex-start',
  marginTop: 8,
  justifyContent: 'flex-start',
  },
  text: {
  
  backgroundColor: '#fff',
  marginTop: 4,
  marginLeft: 8,
  justifyContent: 'center',
  alignItems: 'center',
  color: '#000000'
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
  
  fields: {
    marginBottom: 8,
  },
  container2: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center'
  },
  text2: {
    fontSize: 20,
    color: '#101010',
    marginTop: 60,
    fontWeight: '700'
  },
  listItem: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  coverImage: {
    width: 100,
    height: 100,
    borderRadius: 8
  },
  metaInfo: {
    marginLeft: 10
  },
  title: {
    fontSize: 18,
    width: 200,
    padding: 10
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
  
