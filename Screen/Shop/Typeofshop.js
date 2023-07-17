// Types of Shops
import { View, TouchableWithoutFeedback, Image, Text, StyleSheet } from 'react-native';
import React from 'react';

export const Typeofshop = ({ onPress, imageSource, shopName,shopLocation }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.button}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.opacity}></View>
      <Text style={styles.title}>{shopName}</Text>
      <Text style={styles.minititle}>{shopLocation}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#fff',
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 10,
      flexDirection: 'row',
      borderRadius: 10,
      justifyContent: 'flex-start', // 'flex-end', 'center', 'space-between', 'space-around
      alignItems: 'flex-start', // 'flex-start', 'flex-end', 'center', 'stretch
      width: "90%",
      height: 170,
    },
    image: {
      width: "100%",
      height: 170,
      borderRadius: 10,
    },
    opacity:{
      position: 'absolute',
      backgroundColor: 'rgba(0,0,0,0.5)',
      height: 60,
      width: "100%",
      alignSelf: 'flex-end',
      bottom: 0,
      borderRadius: 10,
    },
    title: {
      marginTop: 10,  
      position: 'absolute',
      fontSize: 17,
      color: '#fff',
      fontWeight: 600,
      alignSelf:"flex-end",
      marginLeft: 10,
      bottom: 30,  
    },
    minititle: {
      position: 'absolute',
      fontSize: 14,
      color: '#fff',
      alignSelf:"flex-end",
      marginTop: 30,
      marginLeft: 10,
      bottom: 13,  
    }
    });
  