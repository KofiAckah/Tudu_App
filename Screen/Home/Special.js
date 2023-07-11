import { View, TouchableOpacity, Image, Text, StyleSheet,ScrollView } from 'react-native';
import React from 'react';

export const Special = () => {
  return (
    <View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  style={styles.cateBtn}>
      <TouchableOpacity style={styles.button} onPress={() => alert("You selected Mobiles")}>
        <Image source={require('../../assets/icon.png')} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>Mobiles</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => alert("You selected Groceries")}>
        <Image source={require('../../assets/icon.png')} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>Groceries</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => alert("You selected Netflix")}>
        <Image source={require('../../assets/icon.png')} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>Netflix</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => alert("You selected 😁😁")}>
        <Image source={require('../../assets/icon.png')} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>😁😁</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => alert("You selected Tudu")}>
        <Image source={require('../../assets/icon.png')} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>Tudu</Text>
      </TouchableOpacity>
    </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
    cateBtn: {
      alignContent: 'center',
    },
    button: {
      // backgroundColor: 'white',
      marginTop: 20,
      marginLeft: 20,
      borderRadius: 10,
      flexDirection: 'row',
      borderRadius: 10,
      justifyContent: 'center', // 'flex-end', 'center', 'space-between', 'space-around
      alignItems: 'flex-start', // 'flex-start', 'flex-end', 'center', 'stretch
      width: 70,
      height: 90,
    },
    image: {
      width: 70,
      height: 70,
      marginRight: 10,
      borderRadius: 10,
    },
    title: {
      position: 'absolute',
      fontSize: 15,
      color: 'black',
      fontWeight: 300,
      top: 70,
      left: 10,
    },
    });
  