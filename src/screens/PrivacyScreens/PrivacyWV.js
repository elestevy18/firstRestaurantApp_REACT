import React from "react";
import { View , Text, StyleSheet, Button, SafeAreaView, Image, TouchableOpacity, StatusBar } from "react-native";

import WebView from 'react-native-webview';

const API_ENDPOINT = `https://randomuser.me/api/?seed=1&page=1&results=20`;


const PrivacyWVScreen =  props => {
return <WebView source={{ uri: 'https://blog.jscrambler.com' }} style={{ marginTop: 20 }} />

}

export default PrivacyWVScreen;
