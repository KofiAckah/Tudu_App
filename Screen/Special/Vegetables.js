import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Details } from '../Categories/Details';
import { Sales } from '../Home/Sales';

export const Vegetables = () => {
    const navigation = useNavigation();
    const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View>
        <View style={styles.fixed}>
            <Ionicons name="arrow-back" marginLeft={10} size={25} color="#000" onPress={handleBackPress}/>
            <Text style={styles.titleText}>Vegetables</Text>
        </View>
        <ScrollView>
        <View style={styles.sales}>
            <Sales imageSource={Details[59].imageSource}
                price={Details[59].title}  minititle={Details[59].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[59].title,
                    minititle:Details[59].minititle,
                    imageSource:Details[59].imageSource,
                })}/>
            <Sales imageSource={Details[60].imageSource} price={Details[60].title}  minititle={Details[60].minititle}  onPress={() => navigation.navigate('Card',{
                    title:Details[60].title,
                    minititle:Details[60].minititle,
                    imageSource:Details[60].imageSource,
                })}/>
                <Sales imageSource={Details[61].imageSource} price={Details[61].title}  minititle={Details[61].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[61].title,
                    minititle:Details[61].minititle,
                    imageSource:Details[61].imageSource,
                })}/>
            
            <Sales imageSource={Details[62].imageSource}
                price={Details[62].title}  minititle={Details[62].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[62].title,
                    minititle:Details[62].minititle,
                    imageSource:Details[62].imageSource,
                })}/>
            <Sales imageSource={Details[63].imageSource} price={Details[63].title}  minititle={Details[63].minititle}  onPress={() => navigation.navigate('Card',{
                    title:Details[63].title,
                    minititle:Details[63].minititle,
                    imageSource:Details[63].imageSource,
                })}/>
                <Sales imageSource={Details[64].imageSource} price={Details[64].title}  minititle={Details[64].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[64].title,
                    minititle:Details[64].minititle,
                    imageSource:Details[64].imageSource,
                })}/>
                <Sales imageSource={Details[65].imageSource} price={Details[65].title}  minititle={Details[65].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[65].title,
                    minititle:Details[65].minititle,
                    imageSource:Details[65].imageSource,
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