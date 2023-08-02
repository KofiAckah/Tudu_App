// Ads component for home screen
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const IMAGES = [
  { id: 1, source: {uri:'https://images.pexels.com/photos/4389666/pexels-photo-4389666.jpeg?auto=compress&cs=tinysrgb&w=400'} },
  { id: 2, source: {uri:'https://adexchanger.com/wp-content/uploads/2019/12/CheezIt_Teaser1_Still.png'} },
  { id: 3, source: {uri:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/premium-burger-ads-design-template-7559bd58cfc8ff20e3d89ef50d5209c8_screen.jpg?ts=1651048364'} },
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
    <View style={styles.container}>
      <Image source={IMAGES[currentImageIndex].source} style={styles.image} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    width: '85%',
    marginHorizontal: 30,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
});