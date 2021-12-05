import React,{useEffect, useState} from 'react';
import { SafeAreaView, Text } from 'react-native';
 


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

  return (
  <SafeAreaView>
      <Text>BAŞLIKLAR SAYFASIIIIIIIIIIIIIIIIIII</Text>
    <Text>{JSON.stringify(headlines)}</Text>
  </SafeAreaView>
);
};
 
export default Headlines;