import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const IMAGES = [
  { id: 1, source: require('../../assets/icon.png') },
  { id: 2, source: require('../../assets/ads.jpg') },
  { id: 3, source: require('../../assets/favicon.png') },
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