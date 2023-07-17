// Category Component for Home Screen
import { View,TouchableWithoutFeedback ,Image, Text, StyleSheet } from 'react-native';
import React from 'react';

export const HomeCategories = ({ onPress, imageSource, title }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.view}>
        <View style={styles.button}>
            <Image source={imageSource} style={styles.image} resizeMode="contain" />
            <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    view:{
        paddingBottom: 20,
    },
    button: {
      backgroundColor: '#F5F5F5',
      marginTop: 20,
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 10,
      flexDirection: 'row',
      borderRadius: 10,
      justifyContent: 'center', // 'flex-end', 'center', 'space-between', 'space-around
      alignItems: 'center', // 'flex-start', 'flex-end', 'center', 'stretch
      width: 70,
      height: 70,
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 10,
    },
    title: {
      position: 'absolute',
      fontSize: 13,
      color: 'black',
      fontWeight: 400,
      alignSelf:"flex-end",
      bottom: -20,
      // left: 0,
    },
    });
  