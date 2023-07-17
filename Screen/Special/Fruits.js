import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Details } from '../Categories/Details';
import { Sales } from '../Home/Sales';

export const Fruits = () => {
    const navigation = useNavigation();
    const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View>
        <View style={styles.fixed}>
            <Ionicons name="arrow-back" marginLeft={10} size={25} color="#000" onPress={handleBackPress}/>
            <Text style={styles.titleText}>Fruits</Text>
        </View>
        <ScrollView>
        <View style={styles.sales}>
            <Sales imageSource={Details[52].imageSource}
                price={Details[52].title}  minititle={Details[52].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[52].title,
                    minititle:Details[52].minititle,
                    imageSource:Details[52].imageSource,
                })}/>
            <Sales imageSource={Details[53].imageSource} price={Details[53].title}  minititle={Details[53].minititle}  onPress={() => navigation.navigate('Card',{
                    title:Details[53].title,
                    minititle:Details[53].minititle,
                    imageSource:Details[53].imageSource,
                })}/>
                <Sales imageSource={Details[54].imageSource} price={Details[54].title}  minititle={Details[54].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[54].title,
                    minititle:Details[54].minititle,
                    imageSource:Details[54].imageSource,
                })}/>
            
            <Sales imageSource={Details[55].imageSource}
                price={Details[55].title}  minititle={Details[55].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[55].title,
                    minititle:Details[55].minititle,
                    imageSource:Details[55].imageSource,
                })}/>
            <Sales imageSource={Details[56].imageSource} price={Details[56].title}  minititle={Details[56].minititle}  onPress={() => navigation.navigate('Card',{
                    title:Details[56].title,
                    minititle:Details[56].minititle,
                    imageSource:Details[56].imageSource,
                })}/>
                <Sales imageSource={Details[57].imageSource} price={Details[57].title}  minititle={Details[57].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[57].title,
                    minititle:Details[57].minititle,
                    imageSource:Details[57].imageSource,
                })}/>
                <Sales imageSource={Details[58].imageSource} price={Details[58].title}  minititle={Details[58].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[58].title,
                    minititle:Details[58].minititle,
                    imageSource:Details[58].imageSource,
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