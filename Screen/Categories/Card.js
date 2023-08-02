import { ScrollView,StyleSheet, Text, View,Image,Button } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';

export const Card = ({route}) => {
  const title = route.params;
  const minititle = route.params;
  const imageSource = route.params;
  const navigation = useNavigation();
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count < 8) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Text style={styles.details}>Details</Text>
        <Ionicons name="search" right={-30} marginLeft={10} size={30} color="#fff"/>
        <Ionicons name="cart" right={-10} marginLeft={10} size={30} color="#fff"/>
      </View>
        <View style={styles.back}>
        <Ionicons name="arrow-back" size={30} color="#fff" onPress={handleBackPress}/>
        </View>
      <ScrollView>
        <Image source={imageSource.imageSource} style={styles.image}/>
          <Text style={styles.minititle}>{minititle.minititle}</Text>
      </ScrollView>
        <View style={styles.bottom}>
          <Text style={styles.title}>{title.title}</Text>
          <Text onPress={decrementCount} style={styles.button} marginLeft={50}>-</Text>
          <Text style={styles.title}>0{count}</Text>
          <Text onPress={incrementCount} style={styles.button} marginLeft={30}>+</Text>
          <Ionicons name="heart" size={25} style={styles.heart} onPress={()=>navigation.navigate('Favorites')}/>
          <Ionicons name="cart-outline" size={25} style={styles.cart} onPress={()=>navigation.navigate('CartPage')}/>
          <Text style={styles.buyNow} onPress={() =>navigation.navigate('Address')}>Buy Now</Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  icon:{
    flexDirection: 'row',
    backgroundColor: '#00f',
    justifyContent: 'space-around',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 10,
  },
  details:{
    alignSelf:"center",
    color: '#fff',
    fontSize: 23,
    marginLeft: 50,
  },
  back:{
    top: 10,
    left: 10,
    marginBottom: 20,
  },
  image:{
    width: "100%",
    height: 450,
  },
  minititle:{
    fontSize: 22,
    marginLeft: 20,
  },
  bottom:{
    backgroundColor: '#fff',
    height: 100,
    width: "100%",
    borderTopRightRadius: 35, 
    borderTopLeftRadius: 35, 
    flexDirection: 'row',
    paddingBottom: 10,
  },
  title:{
      fontSize: 20,
      marginLeft: 20,
      marginTop: 10,
      fontWeight: 'bold',
  },
  button:{
    // marginTop: 10,
    top: -20,
    fontSize: 25,
    width: 35,
    height: 30,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.5)',
    textAlign: 'center',
    fontWeight: 'bold',
    alignSelf: 'center',
    // paddingBottom: 5,
  },
  heart:{
    color: '#fff',
    backgroundColor: 'red',
    height: 35,
    padding: 3,
    marginLeft: 15,
    marginTop: 10,
    width: 35,
    textAlign: 'center',
    borderRadius: 20,
  },
  cart:{
    color: 'blue',
    borderWidth: 1,
    right: "370%",
    height: 40,
    width: 50,
    borderRadius: 20,
    borderColor: 'blue',
    marginTop: 47,
    textAlign: 'center',
    paddingTop: 5,
  },
  buyNow:{
    color: '#fff',
    borderWidth: 1,
    right: "300%",
    height: 40,
    width: "50%",
    backgroundColor: 'blue',
    borderColor: 'blue',
    borderRadius: 20,
    marginTop: 47,
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 20,
    fontWeight: '500',
  },
});
