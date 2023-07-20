import React from 'react';
import { View, Text, Button,StyleSheet,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';

export const Try7 = () => {  
  const navigation = useNavigation();
  const route = useRoute();
  
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.fixed}>
        <Ionicons name="arrow-back" marginLeft={10} size={25} color="#000" onPress={handleBackPress}/>
        <Text style={styles.titleText}>Try7</Text>
      </View>
      <ScrollView style={styles.info}>
        <Text>{route.params.fname}</Text>
        <Text>{route.params.lname}</Text>
        <Text>{route.params.floor}</Text>
        <Text>{route.params.info}</Text>
        <Text>{route.params.region}</Text>
        <Text>{route.params.locality}</Text>
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
    marginLeft: 50,
    color: 'grey',
  },
    info: {
        marginTop: 50,
        backgroundColor: '#f8f8f8',
    }
});