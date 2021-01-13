import React, {Component} from 'react';
import {  DrawerActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import FeedbackScreen1 from '../src/screens/FeedbackScreen';
import FBListScreen from '../src/screens/FBScreens/FBListScreen'
import GenSpecScreen from '../src/screens/FBScreens/GenSpecScreen'


const MyStackNavigator = createStackNavigator(
  {    
    //Feedback: {screen: HomeScreen},
   
    Feedback: FeedbackScreen1,
    FBList: FBListScreen,
    GenSpec: GenSpecScreen,
  },
  {
    initialRouteName: 'Feedback',
    defaultNavigationOptions: {  
      headerStyle: {  backgroundColor: '#ff0000', marginTop: 0 },
      //headerTintColor: '#fff',
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