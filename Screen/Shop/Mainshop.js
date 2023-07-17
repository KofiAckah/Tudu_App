import { ScrollView,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

// Tools & Components
import { Typeofshop } from './Typeofshop';

import { ShopInfo } from './ShopInfo';

export const Mainshop = () => {
  // Navigation to the home page
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.main}>
    {/* Navigation to the home page & the Tilte */}
      <View style={styles.fixed}>
        <Ionicons name="arrow-back" marginLeft={10} size={25} color="#000" onPress={handleBackPress}/>
        <Text style={styles.titleText}>Shops</Text>
        <Ionicons name="search" marginLeft={50} size={25} color="#000"/>
        <Ionicons name="location" size={25} color="#000"/>
      </View>
      <ScrollView style={styles.container}>
        <Typeofshop imageSource={ShopInfo[0].imageSource}
        shopName={ShopInfo[0].shopName}  shopLocation={ShopInfo[0].shopLocation} onPress={() => navigation.navigate('ShopDetail',{
                    shopName:ShopInfo[0].shopName,
                    shopLocation:ShopInfo[0].shopLocation,
                    imageSource:ShopInfo[0].imageSource,
                    region:ShopInfo[0].region,
                })}/>
        <Typeofshop imageSource={ShopInfo[1].imageSource}
        shopName={ShopInfo[1].shopName}  shopLocation={ShopInfo[1].shopLocation} onPress={() => navigation.navigate('ShopDetail',{
                    shopName:ShopInfo[1].shopName,
                    shopLocation:ShopInfo[1].shopLocation,
                    imageSource:ShopInfo[1].imageSource,
                    region:ShopInfo[1].region,
                })}/>
        <Typeofshop imageSource={ShopInfo[2].imageSource}
        shopName={ShopInfo[2].shopName}  shopLocation={ShopInfo[2].shopLocation} onPress={() => navigation.navigate('ShopDetail',{
                    shopName:ShopInfo[2].shopName,
                    shopLocation:ShopInfo[2].shopLocation,
                    imageSource:ShopInfo[2].imageSource,
                    region:ShopInfo[2].region,
                })}/>
        <Typeofshop imageSource={ShopInfo[3].imageSource}
        shopName={ShopInfo[3].shopName}  shopLocation={ShopInfo[3].shopLocation} onPress={() => navigation.navigate('ShopDetail',{
                    shopName:ShopInfo[3].shopName,
                    shopLocation:ShopInfo[3].shopLocation,
                    imageSource:ShopInfo[3].imageSource,
                    region:ShopInfo[3].region,
                })}/>
        <Typeofshop imageSource={ShopInfo[4].imageSource}
        shopName={ShopInfo[4].shopName}  shopLocation={ShopInfo[4].shopLocation} onPress={() => navigation.navigate('ShopDetail',{
                    shopName:ShopInfo[4].shopName,
                    shopLocation:ShopInfo[4].shopLocation,
                    imageSource:ShopInfo[4].imageSource,
                    region:ShopInfo[4].region,
                })}/>
        <Typeofshop imageSource={ShopInfo[5].imageSource}
        shopName={ShopInfo[5].shopName}  shopLocation={ShopInfo[5].shopLocation} onPress={() => navigation.navigate('ShopDetail',{
                    shopName:ShopInfo[5].shopName,
                    shopLocation:ShopInfo[5].shopLocation,
                    imageSource:ShopInfo[5].imageSource,
                    region:ShopInfo[5].region,
                })}/>
        <Typeofshop imageSource={ShopInfo[6].imageSource}
        shopName={ShopInfo[6].shopName}  shopLocation={ShopInfo[6].shopLocation} onPress={() => navigation.navigate('ShopDetail',{
                    shopName:ShopInfo[6].shopName,
                    shopLocation:ShopInfo[6].shopLocation,
                    imageSource:ShopInfo[6].imageSource,
                    region:ShopInfo[6].region,
                })}/>
        <Typeofshop imageSource={ShopInfo[7].imageSource}
        shopName={ShopInfo[7].shopName}  shopLocation={ShopInfo[7].shopLocation} onPress={() => navigation.navigate('ShopDetail',{
                    shopName:ShopInfo[7].shopName,
                    shopLocation:ShopInfo[7].shopLocation,
                    imageSource:ShopInfo[7].imageSource,
                    region:ShopInfo[7].region,
                })}/>
        </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  fixed: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 10,
    // backgroundColor: '#ff0',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 20,
    marginLeft: 50,
    color: 'grey',
  },
  container: {
    marginTop: 50,
  },
});