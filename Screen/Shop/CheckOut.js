import React from 'react';
import { View, Text, Button,StyleSheet,ScrollView,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';


import { Popular } from '../Home/Popular';
import { Details} from '../Categories/Details';

export const CheckOut = () => {  
  const navigation = useNavigation();
  const route = useRoute();

  const firstRandom = Math.floor(Math.random() * 76);
  const secondRandom = Math.floor(Math.random() * 76);
  const thirdRandom = Math.floor(Math.random() * 76);
  const fourthRandom = Math.floor(Math.random() * 76);
    
  
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.fixed}>
        <Ionicons name="arrow-back" marginLeft={10} size={25} color="#000" onPress={handleBackPress}/>
        <Text style={styles.titleText}>Check Out</Text>
      </View>
      <ScrollView style={styles.info} showsVerticalScrollIndicator={false}>
        <View style={styles.textLabel}>
            <Text style={styles.leftText}>Your Address</Text>
            <Text style={styles.address} onPress={()=>navigation.navigate('Address')}>Edit Address</Text>
        </View>
            <Text style={styles.address}>{route.params.fname} {route.params.lname}</Text>
            <Text style={styles.address}>{route.params.floor},{route.params.region},{route.params.locality}</Text>
            <Text style={styles.address}>+233{route.params.phone}</Text>
        <View style={styles.textLabel}>
            <Text style={styles.leftText}>Shipping Options</Text>
            <Text style={styles.address} onPress={()=>navigation.navigate('Address')}>Choose Service</Text>
        </View>
        <View style={styles.shipping}>
            <Ionicons name="gift" size={40} style={styles.delivery}/>
            <View marginLeft={15} marginTop={15}>
                <Text style={styles.estimate}>GHS 0.00 (Estimate)</Text>
                <Text style={styles.address}>Expected delivery on Thu, 31st Aug</Text>
            </View>
        </View>
        <View style={styles.textLabel}>
            <Text style={styles.leftText}>Payment Methods</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.imageContainer}>
            <Image  source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/375px-Visa_2021.svg.png'}} style={styles.image}/>
            </View>
            <View style={styles.imageContainer}>
            <Image  source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/375px-Mastercard_2019_logo.svg.png'}} style={styles.image}/>
            </View>
            <View style={styles.imageContainer}>
            <Image  source={{uri:'https://play-lh.googleusercontent.com/dhCF7DNax5n9y1Twn2fJi5w5e2hntmpy4savqt8IcjTv5TAQYHLobv_3N3wgKvmAon0=w240-h480-rw'}} style={styles.image}/>
            </View>
            <View style={styles.imageContainer}>
            <Image  source={{uri:'https://www.backend.myjoyonline.com/wp-content/uploads/2020/06/Vodafone-Cash.png'}} style={styles.image}/>
            </View>
            <View style={styles.imageContainer}>
            <Image  source={{uri:'https://newsghana.com.gh/wp-content/uploads/2019/04/airteltigo-money-logo-1068x1068.png'}} style={styles.image}/>
            </View>
        </ScrollView>
        <Text style={styles.payNow}>Pay Now</Text>
        <View style={styles.textLabel}>
            <Text style={styles.leftText}>Popular Items</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Popular imageSource={Details[firstRandom].imageSource}
                price={Details[firstRandom].title}  minititle={Details[firstRandom].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[firstRandom].title,
                    minititle:Details[firstRandom].minititle,
                    imageSource:Details[firstRandom].imageSource,
                })}/>
                <Popular imageSource={Details[secondRandom].imageSource}
                price={Details[secondRandom].title}  minititle={Details[secondRandom].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[secondRandom].title,
                    minititle:Details[secondRandom].minititle,
                    imageSource:Details[secondRandom].imageSource,
                })}/>
                <Popular imageSource={Details[thirdRandom].imageSource}
                price={Details[thirdRandom].title}  minititle={Details[thirdRandom].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[thirdRandom].title,
                    minititle:Details[thirdRandom].minititle,
                    imageSource:Details[thirdRandom].imageSource,
                })}/>
                <Popular imageSource={Details[fourthRandom].imageSource}
                price={Details[fourthRandom].title}  minititle={Details[fourthRandom].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[fourthRandom].title,
                    minititle:Details[fourthRandom].minititle,
                    imageSource:Details[fourthRandom].imageSource,
                })}/>
            </ScrollView>
      </ScrollView>
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
    marginLeft: 60,
    color: 'grey',
  },
  info: {
      marginTop:55,
    //   backgroundColor: '#f8f8f8',
      marginHorizontal: 25,
  },
  textLabel:{
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginHorizontal: 20,
        marginBottom: 12,
  },
  leftText:{
        fontSize: 20,
        fontWeight: 500,
  },
  address:{
        fontSize: 17,
        marginTop: 5,
  },
  shipping:{
        flexDirection: 'row',
  },
  delivery:{
        marginTop: 10,
        backgroundColor: '#f2f2f2',
        height: 70,
        padding: 10,
        width: 58,
        borderRadius: 15,
  },
  estimate:{
        fontSize: 17,
        marginTop: 5,
        color: 'blue',
  },
  imageContainer:{
    height: 50,
    width: 80,        
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginRight: 15,
  },
  image:{
        marginTop: 5,
        marginLeft: 5,
        height: 40,
        width: 70,
        resizeMode: 'contain',
  },
  payNow:{
        backgroundColor: '#0077ff',
        color: '#fff',
        marginTop: 30,
        textAlign: 'center',
        alignSelf: 'center',
        padding: 15,
        width: 200,
        fontSize: 25,
        borderRadius: 20,
  },
});