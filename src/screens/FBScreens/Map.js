import MapView from 'react-native-maps';
import { Button, View, Text, FlatList, StatusBar, SafeAreaView, StyleSheet,
  Image, TouchableOpacity, Linking, Dimensions,  TextInput, TextField, Touchable, ActivityIndicator} from 'react-native';
  import * as React from 'react';


function MapScreen() {

return (
    <View style={localstyle.container}>
    <MapView style={localstyle.map} />
  </View>
  );

}

export default MapScreen;



const localstyle = StyleSheet.create({
   container: {
      flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
    //justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    },
map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

})
