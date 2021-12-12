import React, { useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList,Text,Linking } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';
 
const NewsWebView = ({ navigation }) => {
  const url = navigation.state.params && navigation.state.params.url;
  const title = navigation.state.params && navigation.state.params.title;
  const urlApi = `https://newsapi.org/v2/everything?language=tr&q=technology&apiKey=ce90cc126ec74bda89692dbd0b1c88bf`;
  const [contents, setContents] = useState({});

  useEffect(() => {
    fetchData();
  }, []);
 
  async function fetchData() {
    (await fetch(urlApi))
      .json()
      .then(res => setContents(res))
      
  }
  
  function renderItem({ item }) {
    return (  
        
      <TouchableHighlight  onPress={() => { navigation.navigate('News', { url: item.url, title: item.title })}, Linking.openURL(url)}/>
      
        


    );
      
  }
 
  return (
    <FlatList
    data={contents && contents.articles}
    renderItem={renderItem}
    keyExtractor={(item) => item.title} />
  );

    
  

};

NewsWebView.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params && navigation.state.params.title,
  url:navigation.state.params && navigation.state.params.url
  
});
 
export default NewsWebView;