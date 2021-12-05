import React,{useEffect, useState} from 'react';
import { SafeAreaView, Text, FlatList, View, Image } from 'react-native';
 
import prettyTime from './PrettyTime';

const Headlines = () => {

    const [headlines, setHeadlines] = useState({});

    const category = 'technology';
  const country = 'tr';
  const API_KEY = '8cebe3d023eb468d857c862fd93938f5';
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;
 
  useEffect(() => {
    fetchData();
  }, []);
 
  async function fetchData() {
    (await fetch(url))
      .json()
      .then(res => setHeadlines(res))
  }

  function renderItem({ item }) {
    return (
      <View style={{ flex: 1, flexDirection: 'row', padding: 10, borderBottom: 1, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
        <Image style={{ width: 100, height: 100 }} source={{ uri: item.urlToImage }} />
        <View style={{ flex: 1, paddingLeft: 10 }}>
          <Text style={{ flexWrap: 'wrap' }}>{item.title}</Text>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <Text>{item.source.name}</Text>
            <Text>{item.publishedAt}</Text>
            <Text>{prettyTime(item.publishedAt)}</Text>
          </View>
        </View>
      </View>);
  }
   

  return (
  <SafeAreaView>
      <Text>BAŞLIKLAR SAYFASI!</Text>
      <FlatList
      data={headlines.articles}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
    />
  </SafeAreaView>
);

  };
 
export default Headlines;