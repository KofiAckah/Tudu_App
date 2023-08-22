import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Details } from '../Categories/Details';
import { Sales } from '../Home/Sales';

export const Painting = () => {
    const navigation = useNavigation();
    const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View>
        <View style={styles.fixed}>
            <Ionicons name="arrow-back" marginLeft={10} size={25} color="#000" onPress={handleBackPress}/>
            <Text style={styles.titleText}>Painting</Text>
        </View>
        <ScrollView>
        <View style={styles.sales}>
            <Sales imageSource={Details[78].imageSource}
                price={Details[78].title}  minititle={Details[78].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[78].title,
                    minititle:Details[78].minititle,
                    imageSource:Details[78].imageSource,
                })}/>
            <Sales imageSource={Details[79].imageSource} price={Details[79].title}  minititle={Details[79].minititle}  onPress={() => navigation.navigate('Card',{
                    title:Details[79].title,
                    minititle:Details[79].minititle,
                    imageSource:Details[79].imageSource,
                })}/>
            <Sales imageSource={Details[80].imageSource}
                price={Details[80].title}  minititle={Details[80].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[80].title,
                    minititle:Details[80].minititle,
                    imageSource:Details[80].imageSource,
                })}/>
            <Sales imageSource={Details[81].imageSource}
                price={Details[81].title}  minititle={Details[81].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[81].title,
                    minititle:Details[81].minititle,
                    imageSource:Details[81].imageSource,
                })}/>
            <Sales imageSource={Details[82].imageSource}
                price={Details[82].title}  minititle={Details[82].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[82].title,
                    minititle:Details[82].minititle,
                    imageSource:Details[82].imageSource,
                })}/>
            <Sales imageSource={Details[83].imageSource}
                price={Details[83].title}  minititle={Details[83].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[83].title,
                    minititle:Details[83].minititle,
                    imageSource:Details[83].imageSource,
                })}/>
            <Sales imageSource={Details[84].imageSource}
                price={Details[84].title}  minititle={Details[84].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[84].title,
                    minititle:Details[84].minititle,
                    imageSource:Details[84].imageSource,
                })}/>
            <Sales imageSource={Details[85].imageSource}
                price={Details[85].title}  minititle={Details[85].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[85].title,
                    minititle:Details[85].minititle,
                    imageSource:Details[85].imageSource,
                })}/>
            <Sales imageSource={Details[86].imageSource}
                price={Details[86].title}  minititle={Details[86].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[86].title,
                    minititle:Details[86].minititle,
                    imageSource:Details[86].imageSource,
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