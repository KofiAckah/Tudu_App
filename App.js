import React,{useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView,Platform,StatusBar } from 'react-native';
import {HomeScreen} from './Screen/Home/HomeScreen';

const App = () => {
  const [focusSubject, setFocusSubject] = useState(null)
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#f0f',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
})