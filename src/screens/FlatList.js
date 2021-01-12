import React from "react";
import { View , Text, StyleSheet, Button } from "react-native";

const FlatList =  props => {
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
                      <TouchableOpacity onPress={onListClick}
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
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default FlatList;




