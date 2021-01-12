import React, { useState, useEffect } from 'react';
import { Button, View, Text, FlatList, StatusBar, SafeAreaView, StyleSheet,
   Image, TouchableOpacity, Linking, Dimensions,  TextInput, TextField, Touchable, ActivityIndicator} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import styles from './styles';
import WebView from 'react-native-webview';
import MapView from 'react-native-maps';
import ApiManager from './api/ApiManager';
import RowLayout from './RowLayout';
import filter from 'lodash.filter';

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

const Item = ({ title, body }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={localstyle.container}>{body}</Text>
  </View>
);

 const onListClick = ()=>{
  Linking.openURL('https://github.com/elestevy18');}

const onPress = () => {
	const url = 'telprompt:5551231234';
	Linking.canOpenURL(url)
		.then((supported) => {
			if (supported) {
				return Linking.openURL(url)
					.catch(() => null);
			}
		});
}


const API_ENDPOINT = `https://randomuser.me/api/?seed=1&page=1&results=20`;




const contains = ({ name, email }, query) => {
  const { first, last } = name;

  if (first.includes(query) || last.includes(query) || email.includes(query)) {
    return true;
  }

  return false;
};





function HomeScreen({ navigation }) {

    return <WebView source={{ uri: 'https://blog.jscrambler.com' }} style={{ marginTop: 20 }} />
}

function ContactScreen({ navigation }) {

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  return (


    <SafeAreaView style={localstyle.container}>
      <View>
       
        <View style={{ justifyContent: 'flex-start', alignContent: 'flex-start', flexDirection: 'row'}}>
        <Image style ={ localstyle.image}
        source={{uri: 'https://i.postimg.cc/zfyYZR1Z/Screen-Shot-2021-01-08-at-10-05-59-AM.png'}}></Image> 
        <View style={{ justifyContent: 'center'}}>
          <Text style={localstyle.text}>  Email</Text>
          <Text style={localstyle.text}> info@gmail.com</Text>
          </View>
        </View>

        <View style={{ justifyContent: 'flex-start', alignContent: 'flex-start', flexDirection: 'row'}}>
        <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Image style ={ localstyle.image}
        source={{uri: 'https://i.postimg.cc/wj09dpyJ/Screen-Shot-2021-01-08-at-10-06-36-AM.png'}}></Image> 
        </TouchableOpacity>
        <View style={{ justifyContent: 'center'}}>
        
          <Text style={localstyle.text}>  Phone</Text>
          
          <Text style={localstyle.text}> (323) 888-6767</Text>
          </View>
        </View>

        <View style={{ justifyContent: 'flex-start', alignContent: 'flex-start', flexDirection: 'row'}}>
        <Image style ={ localstyle.image}
        source={{uri: 'https://i.postimg.cc/C5c3d9Xt/Screen-Shot-2021-01-08-at-10-07-06-AM.png'}}></Image> 
        <View style={{ justifyContent: 'center'}}>
          <Text style={localstyle.text}>  Message</Text>
          <Text style={localstyle.text}> Is there any way to be awarded much for the project?</Text>
          </View>
        </View>

        <Button title = 'SEND'/>


      </View>
    </SafeAreaView>

    
  );
}

function LocationsScreen({ navigation }) {
  return (
    <View style={localstyle.container}>
    <MapView style={localstyle.map} />
  </View>
  );
}

function LoginScreen1({ navigation }) {
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
color= "#FF0000">Login</Button>

    </SafeAreaView>
  
  );
}

function Flatlist({ navigation }) {
  

  const [result , setResults]  = useState([]);

  const getPost = async () => {
      const response = await ApiManager.get('/posts');
      setResults(response.data);
      console.log("data:" +result.data)
      console.log("result:" +result)
  };

  return (
    <SafeAreaView style={localstyle.centeredcontainer}>
   <View style={localstyle.centeredcontainer}>
      
      <Text>we have found : {result.length} results</Text>
      
    
      <Button title="Retrieve POST"
      onPress={()=>{
        getPost();
      }}/>

<FlatList 
              data={result}
              renderItem = { ({item}) => {
                  return <View
                  style = {localstyle.centeredcontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Details')}
                    style={localstyle.centeredcontainer}>
                  <RowLayout 
                  id = {item.id}
                  title ={item.title}
                  body = {item.body}/>
                  </TouchableOpacity>
                </View>
                }}/>
                
                <StatusBar style="auto" />
                 </View>


    </SafeAreaView>
  
  );
}

function Details({ navigation }) {
  return (
    <SafeAreaView style={localstyle.centeredcontainer}>

<Text
style={localstyle.redtext}>Details</Text>

    </SafeAreaView>
  
  );
}

function SearchScreen({ navigation }) {


  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
const [fullData, setFullData] = useState([]);

  const handleSearch = text => {
  
  
  
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(fullData, user => {
      return contains(user, formattedQuery);
    });
    setData(filteredData);
    setQuery(text);
  };



  useEffect(() => {
    setIsLoading(true);
  
    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(response => {
        setData(response.results);
  
        // ADD THIS
        setFullData(response.results);
  
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18}}>
          Error fetching data... Check your network connection!
        </Text>
      </View>
    );
  }

  return (
    <View style={localstyle.container2}>
      <Text style={localstyle.text2}>Favorite Contacts</Text>
      <FlatList
       ListHeaderComponent={renderHeader}
        data={data}
        keyExtractor={item => item.first}
        renderItem={({ item }) => (
          <View style={localstyle.listItem}>
            <Image
              source={{ uri: item.picture.thumbnail }}
              style={localstyle.coverImage}
            />
            <View style={localstyle.metaInfo}>
              <Text style={localstyle.title}>{`${item.name.first} ${
                item.name.last
              }`}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );


  function renderHeader() {

    return (
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          marginVertical: 10,
          borderRadius: 20
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
          placeholder="Search"
          style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
        />
      </View>
    );
  }

}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="About">
        <Drawer.Screen name="About" component={HomeScreen} />
        <Drawer.Screen name="Contact Us" component={ContactScreen} />
        <Drawer.Screen name="Locations" component={LocationsScreen} />
        <Drawer.Screen name="Login" component={LoginScreen1} />
        <Drawer.Screen name="Flatlist" component={Flatlist} />
        <Drawer.Screen name="Details" component={Details} />
        <Drawer.Screen name="SearchScreen" component={SearchScreen} />


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
  }
})
