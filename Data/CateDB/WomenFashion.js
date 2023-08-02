import { ScrollView,StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const WomenFashion = () => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
        <ScrollView>
          <Image source={{uri:'https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=400'}} style={styles.image}/>
          <View style={styles.contents}>
          <View style={styles.opacity}></View>
            <Text style={styles.title}>Women Fashion</Text>
            <Text style={styles.minititle}>Shop Tudu Fashion including clothing, shoes, jewellery, watches, bags, and more</Text>
          </View>
          <View style={styles.icon}>
            <Ionicons name="chevron-back" marginLeft={-30} size={30} color="#fff" onPress={handleBackPress}/>
            <Ionicons name="heart" right={-90} marginLeft={10} size={30} color="#fff" onPress={()=>navigation.navigate('Favorites')}/>
            <Ionicons name="cart" right={-30} marginLeft={10} size={30} color="#fff" onPress={()=>navigation.navigate('CartPage')}/>
          </View>
        </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    tabBarVisible: false,
    hideNavigation: "none",
  },
  opacity:{
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 150,
    width: "100%",
    alignSelf: 'flex-end',
    bottom: 0,
  },
  image:{
    width: "100%",
    height: 450,
  },
  icon:{
    position: 'absolute',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
    padding: 5,
    left: 0,
    right: 0,
  },
  contents:{
    flexDirection: 'row',
    width: "100%",
    height: 450,
    position: 'absolute',
  },
  title:{
      alignSelf: 'flex-end',
      bottom: 80,
      color: '#fff',
      left: 20,
      fontSize: 30,
  },
  minititle:{
    fontSize: 15,
    alignSelf: 'flex-end',
    // right: 0,
    left: -195,
    width: "90%",
    bottom: 30,
    color: '#fff',
    fontWeight: 500,
  },
});