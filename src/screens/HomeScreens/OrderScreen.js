
import { View , Text, StyleSheet,
    Image, TouchableOpacity, StatusBar, Picker } from "react-native";
import {  useNavigation } from '@react-navigation/native'
import { SafeAreaProvider} from 'react-native-safe-area-context';
//import {Picker} from '@react-native-picker/picker';
import React, { useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';





const FeedbackScreen =  props => {

  
 
  const onPress = () => props.navigation.navigate("Search")
  
  const navigation = useNavigation() 
  state = {
    language: 'java',
  };
  const [selectedValue, setSelectedValue] = useState("inStore");

  const [selectedValue2, setSelectedValue2] = useState("asap");


state = {
  country: 'usa'
}

state2 = {
  time: 'asap'
}
  
  return (
   
    <SafeAreaProvider style ={{backgroundColor: '#ffffff'}}>


    <View>

    
      

        <Text style={localstyle.redtextsmall}>How do you want to order?</Text>
       
       <View style={{flexDirection: 'row', width: '50%'}}>
       
          <Text style={localstyle.Bigtext}>  Order Type</Text>
      

        {/* <Picker
        selectedValue={selectedValue}
        style={{ height: 10, width: 200, position: 'absolute', left: 100, top: 50  }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="In Store Pickup" value="inStore" />
        <Picker.Item label="Mobile Drive Up" value="MDU" />
        <Picker.Item label="Curbside" value="curb" />
        <Picker.Item label="Delivery" value="delivery" />
      </Picker>
      */}
      </View> 


<DropDownPicker
    items={[
        {label: 'In Store Pickup', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, hidden: true},
        {label: 'Mobile Drive Up', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" />},
        {label: 'Curbside', value: 'curbside', icon: () => <Icon name="flag" size={18} color="#900" />},
        {label: 'Delivery', value: 'delivery', icon: () => <Icon name="flag" size={18} color="#900" />},

    ]}
    defaultValue={state.country}
    containerStyle={{height: 40}}
    style={{backgroundColor: '#fafafa'}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item => setState({
        country: item.value
    })}
/>

       
        

     
          <Text style={localstyle.Bigtextmargin}>  When</Text>

          {/* <Picker
        selectedValue={selectedValue2}
        style={{ height: 10, width: 200, position: 'absolute', left: 100, top: 240  }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}
      >
        
        <Picker.Item label="Asap" value="asap" />
        <Picker.Item label="Later" value="later" />
      </Picker> */}

<DropDownPicker
    items={[
        {label: 'ASAP', value: 'asap', icon: () => <Icon name="flag" size={18} color="#900" />, hidden: true},
        {label: 'Later', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" />},
      
    ]}
    defaultValue={state2.time}
    containerStyle={{height: 40}}
    style={{backgroundColor: '#fafafa'}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item => setState({
        time: item.value
    })}
/>
       

<TouchableOpacity
onPress={onPress}>
<View style={localstyle.submitButton}
>
  <Text style={{color: '#fff', marginTop: 16,
  fontSize: 18, fontWeight:"bold"}}>Search for Locations</Text>
</View>
</TouchableOpacity>

      <StatusBar style="auto" />

      </View>

      
      
    </SafeAreaProvider>
    
   

    

);
};

export default FeedbackScreen;


const localstyle = StyleSheet.create({
    submitButton: {
        width: "100%",
        height: 90,
        backgroundColor: "red",
       // justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'baseline',
      marginTop: 470,
    
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
      //borderWidth: .5,
      
      paddingBottom: 20,
      paddingTop: 20,
  
      },
      Bigtextmargin: {
  
        backgroundColor: '#fff',
        fontSize: 24,
    
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000000',
        fontWeight: 'bold',
        width: '103%',
        borderColor: '#d3d3d3',
        //borderWidth: .5,
        
        paddingBottom: 8,
        paddingTop: 8,
        marginTop: 8,
        marginBottom: 8,
    
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

        row: {

        }

  })
  
