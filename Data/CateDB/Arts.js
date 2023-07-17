import { ScrollView,StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Arts = ({imageSource, title,minititle }) => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.navigate('Cat');
  };
  return (
    <View style={styles.container}>
        <ScrollView>
          <Image source={{uri:'https://cdn.pixabay.com/photo/2016/01/13/22/48/pottery-1139047_640.jpg'}} style={styles.image}/>
          <View style={styles.contents}>
          <View style={styles.opacity}></View>
            <Text style={styles.title}>Arts & Craft</Text>
            <Text style={styles.minititle}>Shop art supplies including painting, drawing, crafting, fabric and jewellery making</Text>
          </View>
          <View style={styles.icon}>
            <Ionicons name="chevron-back" marginLeft={-30} size={30} color="#fff" onPress={handleBackPress}/>
            <Ionicons name="heart" right={-90} marginLeft={10} size={30} color="#fff"/>
            <Ionicons name="cart" right={-30} marginLeft={10} size={30} color="#fff"/>
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
    left: -140,
    width: "90%",
    bottom: 30,
    color: '#fff',
    fontWeight: 500,
  },
});