import { View, TouchableWithoutFeedback, Image, Text, StyleSheet } from 'react-native';
import React from 'react';

export const Special = ({ onPress, imageSource, title,minititle }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.button}>
      <Image source={imageSource} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.minititle}>{minititle}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: 'white',
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 10,
      flexDirection: 'row',
      borderRadius: 10,
      justifyContent: 'flex-start', // 'flex-end', 'center', 'space-between', 'space-around
      alignItems: 'flex-start', // 'flex-start', 'flex-end', 'center', 'stretch
      width: 250,
      height: 90,
    },
    image: {
      width: 250,
      height: 90,
      borderRadius: 10,
    },
    title: {
      marginTop: 10,  
      position: 'absolute',
      fontSize: 15,
      color: 'black',
      fontWeight: 600,
      alignSelf:"flex-start",
      marginLeft: 10,
    },
    minititle: {
      position: 'absolute',
      fontSize: 12,
      color: 'black',
      fontWeight: 300,
      alignSelf:"flex-start",
      marginTop: 30,
      marginLeft: 10,
    }
    });
  