// Sales component for home screen
import { View,TouchableWithoutFeedback ,Image, Text, StyleSheet,ScrollView } from 'react-native';
import React from 'react';

export const Sales = ({ onPress, imageSource, price,minititle }) => {
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
        backgroundColor: '#FFF',
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 10,
        shadowColor: '#f00',
    },
    button: {
      marginTop: 10,
      backgroundColor: '#FfF',
      borderRadius: 10,
      flexDirection: 'row',
      borderRadius: 10,
      justifyContent: 'center', // 'flex-end', 'center', 'space-between', 'space-around
      alignItems: 'center', // 'flex-start', 'flex-end', 'center', 'stretch
      width: "50%",
      height: 190,
      
    },
    image: {
      marginLeft: 10,
      borderRadius: 10,
      width: 130,
      height: 160,
      left: 35,
      // marginHorizontal: 35,
    },
    price: {
      position: 'absolute',
      fontSize: 15,
      color: 'black',
      fontWeight: 600,
      alignSelf:"flex-end",
      bottom: -42,
      left: 10,
    },
    minititle: {
      position: 'absolute',
      fontSize: 13,
      color: 'grey',
      fontWeight: 600,
      alignSelf:"flex-end",
      width: 100,
      bottom: -20,
      left: 10,
    }
    });
  