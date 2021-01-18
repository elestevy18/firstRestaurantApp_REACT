import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MapScreen from './Map';
import ListScreen from './List';

import 'react-native-gesture-handler';

const BottomTab = createBottomTabNavigator();

function App() {

 
    const test =  AsyncStorage.getItem('@storage_Key')
    

  
  console.log(test)

  return (
    //'BottomTab' can be interchanged with 'Stack' or 'Drawer' to display the other Navigator types if desired
  
      <BottomTab.Navigator initialRouteName="List"
>
        <BottomTab.Screen name="List" component={ListScreen} />
        <BottomTab.Screen name="Map" component={MapScreen} />
      </BottomTab.Navigator>
   
  );
}

export default App;