// Popuplar component for home screen
import { View, TouchableOpacity,TouchableWithoutFeedback ,Image, Text, StyleSheet,ScrollView } from 'react-native';
import React from 'react';

export const Popular = ({ onPress, imageSource, price,minititle }) => {
  return (
    <TouchableWithoutFeedback style={styles.view} onPress={onPress}>
      <View style={styles.view}>
        <View style={styles.button}>
            <Image source={imageSource} style={styles.image} resizeMode="contain" />
            <Text style={styles.minititle}>{minititle}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    view:{
        paddingBottom: 50,
    },
    button: {
      backgroundColor: '#F5F5F5',
      marginTop: 20,
      marginLeft: 20,
      borderRadius: 10,
      flexDirection: 'row',
      borderRadius: 10,
      justifyContent: 'center', // 'flex-end', 'center', 'space-between', 'space-around
      alignItems: 'center', // 'flex-start', 'flex-end', 'center', 'stretch
      width: 150,
      height: 130,
    },
    image: {
      width: 90,
      height: 90,
    },
    price: {
      position: 'absolute',
      fontSize: 15,
      color: 'black',
      fontWeight: 600,
      alignSelf:"flex-end",
      bottom: -40,
      left: 0,
    },
    minititle: {
      position: 'absolute',
      fontSize: 12,
      color: 'black',
      fontWeight: 300,
      alignSelf:"flex-end",
      bottom: -20,
      left: 0,
    }
    });
  