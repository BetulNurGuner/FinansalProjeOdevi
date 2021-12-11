import React from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
 
const NewsWebView = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: 'http://devnot.com' }} />
    </SafeAreaView>
  );
};
 
export default NewsWebView;