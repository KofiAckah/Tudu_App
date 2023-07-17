import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Details } from '../Categories/Details';
import { Sales } from '../Home/Sales';

export const PhoneCases = () => {
    const navigation = useNavigation();
    const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View>
        <View style={styles.fixed}>
            <Ionicons name="arrow-back" marginLeft={10} size={25} color="#000" onPress={handleBackPress}/>
            <Text style={styles.titleText}>Phone Cases and Cover</Text>
        </View>
        <ScrollView>
        <View style={styles.sales}>
            <Sales imageSource={Details[40].imageSource}
                price={Details[40].title}  minititle={Details[40].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[40].title,
                    minititle:Details[40].minititle,
                    imageSource:Details[40].imageSource,
                })}/>
            <Sales imageSource={Details[41].imageSource} price={Details[41].title}  minititle={Details[41].minititle}  onPress={() => navigation.navigate('Card',{
                    title:Details[41].title,
                    minititle:Details[41].minititle,
                    imageSource:Details[41].imageSource,
                })}/>
                <Sales imageSource={Details[42].imageSource} price={Details[42].title}  minititle={Details[42].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[42].title,
                    minititle:Details[42].minititle,
                    imageSource:Details[42].imageSource,
                })}/>
                <Sales imageSource={Details[43].imageSource}
                price={Details[43].title}  minititle={Details[43].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[43].title,
                    minititle:Details[43].minititle,
                    imageSource:Details[43].imageSource,
                })}/>
                <Sales imageSource={Details[44].imageSource} price={Details[44].title}  minititle={Details[44].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[44].title,
                    minititle:Details[44].minititle,
                    imageSource:Details[44].imageSource,
                })}/>
                <Sales imageSource={Details[45].imageSource}
                price={Details[45].title}  minititle={Details[45].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[45].title,
                    minititle:Details[45].minititle,
                    imageSource:Details[45].imageSource,
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