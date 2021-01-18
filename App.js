import React from 'react';
import {  StyleSheet,
    Dimensions, } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import WebView from 'react-native-webview';;
import StackNavigator from './stacks/StackNavigator'
import PrivacyStack from './stacks/PrivacyStack';
import HomeStack from './stacks/HomeStack';
import MLScreen from './src/screens/FBScreens/MLScreen'
import LoginScreen from './screens/LoginScreen'

// constructor 
// will Mount
// didmount calll apis
// unmount
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Email',
    body: 'info@gmail.com',

  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Phone',
    body: '(123) 654 467 376',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Message',
    body: 'Is there any way to be awarded much for the project?',
  },
];


function AboutScreen({ navigation }) {

    return <WebView source={{ uri: 'https://blog.jscrambler.com' }} style={{ marginTop: 20 }} />
}
// UNCOMMENT FOR A CONTACT US IN DRAWER


// function ContactScreen({ navigation }) {

//   const renderItem = ({ item }) => (
//     <Item title={item.title} />
//   );
//   return (


//     <SafeAreaView style={localstyle.container}>
//       <View>
       
//         <View style={{ justifyContent: 'flex-start', alignContent: 'flex-start', flexDirection: 'row'}}>
//         <Image style ={ localstyle.image}
//         source={{uri: 'https://i.postimg.cc/zfyYZR1Z/Screen-Shot-2021-01-08-at-10-05-59-AM.png'}}></Image> 
//         <View style={{ justifyContent: 'center'}}>
//           <Text style={localstyle.text}>  Email</Text>
//           <Text style={localstyle.text}> info@gmail.com</Text>
//           </View>
//         </View>

//         <View style={{ justifyContent: 'flex-start', alignContent: 'flex-start', flexDirection: 'row'}}>
//         <TouchableOpacity
//         style={styles.button}
//         onPress={onPress}
//       >
//         <Image style ={ localstyle.image}
//         source={{uri: 'https://i.postimg.cc/wj09dpyJ/Screen-Shot-2021-01-08-at-10-06-36-AM.png'}}></Image> 
//         </TouchableOpacity>
//         <View style={{ justifyContent: 'center'}}>
        
//           <Text style={localstyle.text}>  Phone</Text>
          
//           <Text style={localstyle.text}> (323) 888-6767</Text>
//           </View>
//         </View>

//         <View style={{ justifyContent: 'flex-start', alignContent: 'flex-start', flexDirection: 'row'}}>
//         <Image style ={ localstyle.image}
//         source={{uri: 'https://i.postimg.cc/C5c3d9Xt/Screen-Shot-2021-01-08-at-10-07-06-AM.png'}}></Image> 
//         <View style={{ justifyContent: 'center'}}>
//           <Text style={localstyle.text}>  Message</Text>
//           <Text style={localstyle.text}> Is there any way to be awarded much for the project?</Text>
//           </View>
//         </View>

//         <Button title = 'SEND'/>


//       </View>
//     </SafeAreaView>

    
//   );
// }S



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Find a Restaurant" component={MLScreen} />
      <Drawer.Screen name="Feedback" component={StackNavigator} />
      <Drawer.Screen name="Privacy and Agreements" 
        component={PrivacyStack} />
      <Drawer.Screen name="About" component={AboutScreen} />

          {/* <Drawer.Screen name="Restaurants" component={Flatlist} /> */}
          {/* <Drawer.Screen name="Contact Us" component={ContactScreen} /> */}
          {/* <Drawer.Screen name="Details" component={Details} /> */}


      </Drawer.Navigator>
    </NavigationContainer>
  );
}


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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
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
