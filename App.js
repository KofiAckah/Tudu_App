// The main file of the app
import * as React from 'react';
import Main from './Screen/Main';
import {SafeAreaView, StyleSheet,Platform,StatusBar } from 'react-native';


function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
})
export default App;