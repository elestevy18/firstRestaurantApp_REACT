import React, {Component} from 'react';
import {  DrawerActions, SafeAreaView } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../src/screens/HomeScreens/HomeScreen';
import OrderScreen from '../src/screens/HomeScreens/OrderScreen';
import LocationsScreen from '../src/screens/HomeScreens/LocationsScreen';



const MyStackNavigator = createStackNavigator(
  {    
    //Feedback: {screen: HomeScreen},
    Home: HomeScreen,
    Order: OrderScreen,
    Search: LocationsScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {  
      headerStyle: {  backgroundColor: '#ff0000',  },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold', color: '#fff', 
      alignSelf: 'center', paddingBottom: 20, textAlign: 'center', fontSize: 20 },
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 500,
      },
      screenInterpolator: sceneProps => {
      const { position, layout, scene } = sceneProps;
      const index = scene.index;
      const width = layout.initWidth;

      const slideFromRight = { 
        opacity: position.interpolate({
              inputRange: [ index, index + 1],
              inputRange: [ index, index + 1],
              outputRange: [1, 1], 
            }),
        transform: [{ 
          translateX: position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [width, 0, -20],
            })
      }] };
        return slideFromRight;
      },
    }),
  }
);

const AppContainer = createAppContainer(MyStackNavigator);

export default class StackNavigator extends Component {
  render() {
    return<SafeAreaView style={{flex: 1, backgroundColor: '#ff0000'}}>
      <AppContainer screenProps={{ openDraw: () => 
        this.props.navigation.dispatch(DrawerActions.openDrawer()) }} />
        </SafeAreaView> ;
  }
}