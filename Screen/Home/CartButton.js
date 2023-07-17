// Cart button on the top right corner of the home screen
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const CartButton = ({ onPress, cartItemCount }) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Ionicons name="cart" size={24} color="#555" style={styles.icon}/>
      {/* {cartItemCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{cartItemCount}</Text>
        </View>
      )} */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    padding: 10,
    borderRadius: 20,
    marginLeft: "10%",
    marginRight: "-10%",
    backgroundColor: '#F5F5F5',
  },
  icon:{
    justifyContent:'center',
    alignItems:'center',
  }
//   badge: {
//     backgroundColor: 'red',
//     borderRadius: 10,
//     marginRight: 70,
//     paddingHorizontal: 6,
//     paddingVertical: 2,
//   },
//   badgeText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 12,
//   },
});