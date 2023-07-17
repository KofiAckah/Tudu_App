import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Details } from '../Categories/Details';
import { Sales } from '../Home/Sales';

export const Bags = () => {
    const navigation = useNavigation();
    const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View>
        <View style={styles.fixed}>
            <Ionicons name="arrow-back" marginLeft={10} size={25} color="#000" onPress={handleBackPress}/>
            <Text style={styles.titleText}>Bags & Luggage</Text>
        </View>
        <ScrollView>
        <View style={styles.sales}>
            <Sales imageSource={Details[37].imageSource}
                price={Details[37].title}  minititle={Details[37].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[37].title,
                    minititle:Details[37].minititle,
                    imageSource:Details[37].imageSource,
                })}/>
            <Sales imageSource={Details[5].imageSource} price={Details[5].title}  minititle={Details[5].minititle}  onPress={() => navigation.navigate('Card',{
                    title:Details[5].title,
                    minititle:Details[5].minititle,
                    imageSource:Details[5].imageSource,
                })}/>
                <Sales imageSource={Details[38].imageSource} price={Details[38].title}  minititle={Details[38].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[38].title,
                    minititle:Details[38].minititle,
                    imageSource:Details[38].imageSource,
                })}/>
                <Sales imageSource={Details[39].imageSource}
                price={Details[39].title}  minititle={Details[39].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[39].title,
                    minititle:Details[39].minititle,
                    imageSource:Details[39].imageSource,
                })}/>
                </View>
        </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    fixed: {
        flexDirection: 'row',
        top: 0,
        left: 0,
        right: 0,
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
      },
    titleText: {
        fontSize: 20,
        marginLeft: 25,
        color: 'grey',
      },
      sales:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 10,
        marginBottom: 75,
    },
})