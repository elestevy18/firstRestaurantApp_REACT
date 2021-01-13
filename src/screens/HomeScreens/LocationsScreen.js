

  import React, { useState, useEffect } from 'react';
  import {  View, Text, FlatList,  StyleSheet,
     Image,  TextInput,  ActivityIndicator} from 'react-native';
  import filter from 'lodash.filter';

  const API_ENDPOINT = `https://randomuser.me/api/?seed=1&page=1&results=20`;




  const contains = ({ name, email }, query) => {
    const { first, last } = name;
  
    if (first.includes(query) || last.includes(query) || email.includes(query)) {
      return true;
    }
  
    return false;
  };

const LocationsScreen =  props => {
 
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

export default LocationsScreen;


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
  
