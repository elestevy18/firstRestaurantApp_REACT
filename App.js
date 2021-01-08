import * as React from 'react';
import { Button, View, Text, FlatList, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import styles from './styles';
import {useState} from "react";
import Manager from './Manager/Manager';
import RowLayout from './RowLayout';

//Declare variable
//const [counter, setCounter]  = useState(0); //hooks




function HomeScreen({ navigation }) {


  const [result , setResults]  = useState([]);

const getPost = async () => {
    const response = await Manager.get('/posts');
    setResults(response.data);
    console.log("data:" +result.data)
    console.log("result:" +result)
};
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      
    <Text style={{alignSelf: 'center', fontSize: 18, fontWeight: 'bold'}}>
      We have found : {result.length } results</Text>
    
  
    <Button title="Retrieve POST"
    onPress={()=>{
      getPost();
    }}/>

<FlatList 
            data={result}
            renderItem = { ({item}) => {
                return <View style = {localstyle.container}>
                <RowLayout id = {item.id} title ={item.title} body = {item.body}/>
                {/* <RowLayout id = 'Elijah' description = 'second'/> */}
              </View>
              }}/>
              
              <StatusBar style="auto" />
               </View>
               </SafeAreaView>
  );
}

function ContactScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Call us at (323)555-7676</Text>
      <Button 
      onPress={() => navigation.goBack()} 
      title="Go back home"
      style ={styles.Button} />
    </View>
    
  );
}

function LocationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>These are our locations.</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="About">
        <Drawer.Screen name="About" component={HomeScreen} />
        <Drawer.Screen name="Contact Us" component={ContactScreen} />
        <Drawer.Screen name="Locations" component={LocationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const localstyle = StyleSheet.create({
  container: {
    flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  marginTop: 8,
  justifyContent: 'center',
  }})