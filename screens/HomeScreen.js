import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, Modal, Animated } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../firebase'
import Headlines from './Headlines'
import Category from './Category'

const HomeScreen = ({navigation}) => {

    // const navigation = useNavigation()
  
    const handleSignOut = () => {
      auth
        .signOut()
        .then(() => {
          navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }
  
    return (
      <View style={styles.container}>
        
        {Category(navigation)} 
        {/* //Başlıklar sayfasından veri alırken. Farklı sayfa içeriğini gösterme!! */}
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity
          onPress={handleSignOut}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    )
  }
  
  export default HomeScreen
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
     button: {
      backgroundColor: '#0782F9',
      width: '60%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 40,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
})