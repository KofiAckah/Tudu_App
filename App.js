import * as React from 'react';
import Main from './Screen/Main';
import {View, StyleSheet,Platform,StatusBar } from 'react-native';


function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
})
export default App;