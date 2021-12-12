import React, { useState, useEffect} from 'react';
import { render } from 'react-dom';
import { SafeAreaView, View, FlatList,Text,Linking, Platform } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';
//import { PickerItem } from 'react-native/Libraries/Components/Picker/Picker';
 
const NewsWebView = ({ navigation }) => {
  const url = navigation.state.params && navigation.state.params.url;
  //const title = navigation.state.params && navigation.state.params.title;
  //const urlApi = `https://newsapi.org/v2/everything?language=tr&q=technology&apiKey=ce90cc126ec74bda89692dbd0b1c88bf`;


  return(
      <TouchableHighlight onPress={() => { navigation.navigate ('News', {url: item.url, title: item.title})}, Linking.openURL(url)}/>
  );

};

NewsWebView.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params && navigation.state.params.title,
  url:navigation.state.params && navigation.state.params.url
  
});
 
export default NewsWebView;