import React, { useState, useEffect} from 'react';
import { View, SafeAreaView, Text , FlatList, Image, TouchableHighlight  } from 'react-native';
import prettyTime from './PrettyTime';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 
const Headlines = () => {
  const [headlines, setHeadlines] = useState({});
 
  const category = 'technology';
  const country = 'tr';
  //const API_KEY = "d9ee2b1c36644ef78c4410a48fc6a82c";
  const url = 'https://newsapi.org/v2/everything?q=${category}&apiKey=d9ee2b1c36644ef78c4410a48fc6a82c';
 
  useEffect(() => {
    fetchData();
  }, []);
 
  async function fetchData() {
    (await fetch(url))
      .json()
      .then(res => setHeadlines(res))
  }
  function removeSource(title){
    if(title == null || title.indexOf(' - ') < 0) return title;
    var parts = title.split(' - ');
    parts.pop();
    return parts.join(' - ');
  }
  function renderItem({ item }) {
    return (
      <TouchableHighlight onPress={() => { alert(item.title) }}>
        <View style={{ flex: 1, flexDirection: 'row', padding: 10, borderBottom: 1, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
          <Image style={{ width: 100, height: 100 }} source={{ uri: item.urlToImage }} />
          <View style={{ flex: 1, paddingLeft: 10 }}>
            <Text style={{ flexWrap: 'wrap' }}>{removeSource(item.title)}</Text>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="newspaper" size={15} style={{ paddingRight: 5 }} />
                <Text>{item.source.name}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="clock-outline" size={15} style={{ paddingRight: 5 }} />
                <Text>{prettyTime(item.publishedAt)}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>);
  }
 
  return (
    <SafeAreaView>
      <FlatList
        data={headlines.articles}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
};
 
export default Headlines;