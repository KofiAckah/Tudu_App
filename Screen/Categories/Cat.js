// Categories Screen
import { ScrollView,StyleSheet, Text, View,Button } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

// Tools & Components
import { Typeofcat } from './Typeofcat';
import { Gaming } from '../../Data/CateDB/Gaming';


export const Cat = () => {
  // Navigation to the home page
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.navigate('Home');
  };
  const handlesTry1 = () => {
    navigation.navigate('Try1');
  };
  return (
    <View style={styles.main}>
      {/* Navigation to the home page & the Tilte */}
      <View style={styles.fixed}>
        <Ionicons name="arrow-back" marginLeft={10} size={25} color="#000" onPress={handleBackPress}/>
        <Text style={styles.titleText}>All Categories</Text>
      </View>
      <ScrollView style={styles.container}>
         <Typeofcat title="Afrocentric" onPress={() => navigation.navigate('Card1')}/>
         <Typeofcat title="Arts & Craft" onPress={()=> navigation.navigate('Arts')}/>
         <Typeofcat title="Baby" onPress={() => navigation.navigate('Baby')}/>
         <Typeofcat title="Beauty & Personal Care" onPress={()=>navigation.navigate('Beauty')}/>
         <Typeofcat title="Books" onPress={()=> navigation.navigate('Book')}/>
         <Typeofcat title="Computers" onPress={()=>navigation.navigate('Computer')}/>
         <Typeofcat title="Electronics" onPress={()=>navigation.navigate('Electronics')}/>
         <Typeofcat title="Gaming" onPress={()=> navigation.navigate('Gaming')}/>
         <Typeofcat title="Groceries" onPress={()=> navigation.navigate('Groceries')}/>
         <Typeofcat title="Women Fashion" onPress={()=> navigation.navigate('WomenFashion')}/>
         <Typeofcat title="Men Fashion" onPress={()=>navigation.navigate('MenFashion')}/>
         <Typeofcat title="Luggage" onPress={()=>navigation.navigate('Luggage')}/>
         <Typeofcat title="Mobiles" onPress={()=>navigation.navigate('Mobiles')}/>  
         <Typeofcat title="Sports & Outdoors" onPress={()=>navigation.navigate('Sports')}/>  
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
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
    marginLeft: 50,
    color: 'grey',
  },
  container: {
    marginTop: 50,
  },
});