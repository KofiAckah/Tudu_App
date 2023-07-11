import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet,FlatList, ScrollView } from 'react-native';

const IMAGES = [
  { id: 1, source: require('../../assets/icon.png') },
  { id: 2, source: require('../../assets/splash.png') },
  { id: 3, source: require('../../assets/adaptive-icon.png') },
];

export const Ads = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % IMAGES.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    // <View style={styles.container}>
    //   <Image source={IMAGES[currentImageIndex].source} style={styles.image} resizeMode="cover" />
    // </View>

 <FlatList
  data={pic}
  horizontal
  renderItem={({ item }) => (
    
    <View style={styles.container}>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  style={styles.cateBtn}>
      <Image source={item.uri}  style={styles.image} resizeMode="cover" />
      </ScrollView>
    </View>
   
  )}
/> 




  
  );
};




const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    width: '85%',
    borderRadius: 20,
    // backgroundColor: '#ff0',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
});