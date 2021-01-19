import React, {Component} from 'react';
import {  DrawerActions, SafeAreaView } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../src/screens/HomeScreens/HomeScreen';
import OrderScreen from '../src/screens/HomeScreens/OrderScreen';
import LocationsScreen from '../src/screens/FBScreens/MLScreen';
import MenuCategScreen from '../src/screens/HomeScreens/MenuCateg';
import ListScreen from '../src/screens/FBScreens/List';
import BurgerMenuScreen from '../src/screens/HomeScreens/BurgerMenu';
import OrderQuantScreen from '../src/screens/HomeScreens/OrderQuant';
import BasketReviewScreen from '../src/screens/HomeScreens/BasketReview';
import HotDogMenuScreen from '../src/screens/HomeScreens/HotDogMenu';
import SandwichMenuScreen from '../src/screens/HomeScreens/SandwichMenu';
import FriesMenuScreen from '../src/screens/HomeScreens/FriesMenu';
import DrinksMenuScreen from '../src/screens/HomeScreens/DrinksMenu';
import ShakesMenuScreen from '../src/screens/HomeScreens/ShakesMenu';
import CheckoutScreen from '../src/screens/HomeScreens/CheckoutScreen';
import DrinksScreen from '../src/screens/HomeScreens/DrinkQuant';
import FriesQuantScreen from '../src/screens/HomeScreens/FriesQuant';
import PaymentScreen from '../src/screens/HomeScreens/Payment';
import NewCardScreen from '../src/screens/HomeScreens/NewCard';
import GiftCardSCreen from '../src/screens/HomeScreens/GiftCard';



const MyStackNavigator = createStackNavigator(
  {    
    //Feedback: {screen: HomeScreen},
    Home: HomeScreen,
    Order: OrderScreen,
    Search: ListScreen,
    MenuCateg: MenuCategScreen,
    BurgerMenu: BurgerMenuScreen,
    OrderQuant: OrderQuantScreen,
    BasketReview: BasketReviewScreen,
    HotDogMenu: HotDogMenuScreen,
    SandwichMenu: SandwichMenuScreen,
    FriesMenu: FriesMenuScreen,
    DrinksMenu: DrinksMenuScreen,
    ShakesMenu: ShakesMenuScreen,
    Checkout: CheckoutScreen,
    DrinkQuant: DrinksScreen,
    FriesQuant: FriesQuantScreen,
    Payment: PaymentScreen,
    NewCard: NewCardScreen,
    GiftCard: GiftCardSCreen,
   

    
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