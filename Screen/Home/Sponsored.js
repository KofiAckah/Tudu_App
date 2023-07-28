// Used for: Displaying the sponsored products on the home screen
import { View, TouchableOpacity,TouchableWithoutFeedback ,Image, Text, StyleSheet,ScrollView } from 'react-native';
import React from 'react';

export const Sponsored = ({ onPress, imageSource}) => {
  return (
    <TouchableWithoutFeedback style={styles.view} >
      <View style={styles.view}>
        <View style={styles.button}>
            <Image source={imageSource} style={styles.image} resizeMode="contain" />
            <Text style={styles.shopNow} onPress={onPress}>Shop Now</Text>
            <Text style={styles.sponsored}>Sponsored</Text>            
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    view:{
        paddingBottom: 50,
        marginRight: 10,
    },
    button: {
      backgroundColor: '#F5F5F5',
      marginTop: 20,
      marginLeft: 20,
      borderRadius: 10,
      flexDirection: 'row',
      borderRadius: 30,
      justifyContent: 'center', // 'flex-end', 'center', 'space-between', 'space-around
      alignItems: 'center', // 'flex-start', 'flex-end', 'center', 'stretch
      width: 300,
      height: 450,
    },
    image: {
        width: 300,
        height: 450,
        borderRadius: 30,
    },
    sponsored: {
      position: 'absolute',
      fontSize: 15,
      color: 'black',
      fontWeight: 600,
      alignSelf:"flex-start",
      left: 0,
      padding: 10,
      borderTopLeftRadius: 30,
      backgroundColor: 'blue',
    },
    shopNow: {
      position: 'absolute',
      fontSize: 15,
      color: '#f0f',
      fontWeight: 600,
      alignSelf:"flex-end",
      right: 20,
      borderWidth: 2,
      bottom: 20,
      padding: 10,
      borderRadius: 30,
      borderColor: '#f0f',
    }
    });
  