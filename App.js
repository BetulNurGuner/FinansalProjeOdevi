import React from 'react';
import { Text,StyleSheet,Button,View, FlatList, ImageBackground, Dimensions, TouchableHighlight,TouchableOpacity, Platform, StatusBar } from 'react-native';
 import { auth } from './firebase';
 import { useNavigation } from '@react-navigation/core';
import { render } from 'react-dom';


const App = ({ navigation }) => {

  const handleSignOut=()=>{
    auth
      .signOut()
      .then(()=>{
        navigation.replace("Login")
      })
      .catch(error=>alert(error.message))
  }


  const numColumns = 3;
  const tileWidth = Dimensions.get('window').width / numColumns;
  const imageBaseUrl = "https://images.unsplash.com/photo-";
  const imageParameters = "?auto=format&fit=crop&w=375&q=80";
  const dataSource = [
    { category: 'Teknoloji', imageId: '1478358161113-b0e11994a36b' },
    { category: 'Spor', imageId: '1521412644187-c49fa049e84d' },
    { category: 'Sağlık', imageId: '1526256262350-7da7584cf5eb' },
    { category: 'Ekonomi', imageId: '1542222024-c39e2281f121' },
    { category: 'Eğitim', imageId: '1503676260728-1c00da094a0b' },
    { category: 'Müzik', imageId: '1511671782779-c97d3d27a1d4' },
    { category: 'Tiyatro', imageId: '1507924538820-ede94a04019d' },
    { category: 'Sinema', imageId: '1478720568477-152d9b164e26' },
    { category: 'Hava', imageId: '1530908295418-a12e326966ba' },
    { category: 'Seyahat', imageId: '1473625247510-8ceb1760943f' },
    { category: 'Astroloji', imageId: '1532968961962-8a0cb3a2d4f5' },
    { category: 'Otomobil', imageId: '1537041373298-55dbb337e651' },
    { category: 'Galeri', imageId: '1500051638674-ff996a0ec29e' },
    { category: 'Video', imageId: '1524253482453-3fed8d2fe12b' },
  ];
 
  const renderItem = ({ item }) => {
    return (
      
      <TouchableHighlight onPress={() => navigation.navigate('Headlines', { category: item.category })}>
        <ImageBackground source={{ uri: imageBaseUrl + item.imageId + imageParameters }}
          style={{
            width: tileWidth,
            height: tileWidth,
            justifyContent: 'center'
          }}>
          <Text style={{
            textAlign: 'center',
            color: '#fff',
            fontSize: 15
          }}>{item.category}</Text>
        </ImageBackground>

      </TouchableHighlight>
      
      
      
      
      /*
      <Button
      onPress={handleSignOut}
      style={styles.button}
      accessibilityLabel="ÇIKIŞ"
      />
      */
      /*
<TouchableOpacity
      onPress={handleSignOut}
      style={styles.button}
      >
      <Text style={styles.buttonText}>ÇIKIŞ</Text>
    </TouchableOpacity>
      */
      
    );

          
  }


  
  return (
    <FlatList
      data={dataSource}
      renderItem={renderItem}
      keyExtractor={(item) => item.category}
      numColumns={numColumns}

      
    />
    
    
  );

};
App.navigationOptions = ({ navigation }) => ({
  title: 'Haber Kategorileri',
  headerStyle: {
    backgroundColor: '#2196F3',
  },
  headerTintColor: '#FFF',
  headerTitleStyle: {
    fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
  },


});
 
StatusBar.setBarStyle('light-content', true);
 
export default App;

const styles= StyleSheet.create({
  button:{
    backgroundColor: '#0782F9',
    width: '60%',
    padding:15,
    borderRadius:10,
    alignItems: 'flex-end',
    marginTop:40,

},
buttonText:{
    color: 'white',
    fontWeight: '700',
    fontSize:16,
},
})