import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const CartPage = () => {  
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <View style={styles.fixed}>
        <Ionicons name="arrow-back" marginLeft={10} size={25} color="#000" onPress={handleBackPress}/>
        <View flexDirection='column' marginLeft={20}>
            <Text style={styles.titleText}>My Cart</Text>
            <Text style={styles.items}>0 items</Text>
        </View>
      </View>
      <Ionicons name="cart" size={200} style={styles.icon}/>
      <Text style={styles.lastText}>No items selected yet</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    fixed: {
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: 10,
        // backgroundColor: '#ff0',
    },
    titleText: {
        fontSize: 20,
    },
    items: {
        fontSize: 15,
        color: 'grey',
        marginLeft: 10,
    },
    icon: {
        marginTop: 230,
        alignSelf: 'center',
        color: 'grey',
    },
    lastText: {
        alignSelf: 'center',
        fontSize: 17,
        fontWeight: '600',
    },
});