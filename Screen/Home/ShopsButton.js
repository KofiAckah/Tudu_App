import { View, TouchableOpacity, Image, Text, StyleSheet,ScrollView } from 'react-native';
import React from 'react'

export const ShopsButton = (onPress, imageSource) => {
  return (
    <View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  style={styles.cateBtn}>
      <TouchableOpacity style={styles.button} onPress={() => alert("Image would appear soon")}>
        <Image source={require('../../assets/icon.png')} style={styles.image} resizeMode="contain" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => alert("Image would appear soon")}>
        <Image source={require('../../assets/icon.png')} style={styles.image} resizeMode="contain" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => alert("Image would appear soon")}>
        <Image source={require('../../assets/icon.png')} style={styles.image} resizeMode="contain" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => alert("Image would appear soon")}>
        <Image source={require('../../assets/icon.png')} style={styles.image} resizeMode="contain" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => alert("Image would appear soon")}>
        <Image source={require('../../assets/icon.png')} style={styles.image} resizeMode="contain" />
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
    width: 90,
    height: 90,
  },
  image: {
    width: 90,
    height: 90,
    marginRight: 10,
    borderRadius: 10,
  },
  });
