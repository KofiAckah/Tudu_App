import { View, TouchableWithoutFeedback, Image, Text, StyleSheet } from 'react-native';
import React from 'react'

export const ShopsButton = ({onPress, imageSource}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.view}>
        <View style={styles.button}>
            <Image source={imageSource} style={styles.image} resizeMode="contain" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
  view: {
    
  },
  button: {
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 10,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'center', // 'flex-end', 'center', 'space-between', 'space-around
    alignItems: 'flex-start', // 'flex-start', 'flex-end', 'center', 'stretch
    width: 90,
    height: 90,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  });
