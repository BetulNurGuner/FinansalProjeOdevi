import React, { useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList,Text,Linking } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';

const NewsWebView = ({ navigation }) => {
    const url = navigation.state.params && navigation.state.params.url;

    

};

NewsWebView.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params && navigation.state.params.title,
    
    
  });
   
  export default News;