import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Details } from '../Categories/Details';
import { Sales } from '../Home/Sales';

export const ComputerAss = () => {
    const navigation = useNavigation();
    const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View>
        <View style={styles.fixed}>
            <Ionicons name="arrow-back" marginLeft={10} size={25} color="#000" onPress={handleBackPress}/>
            <Text style={styles.titleText}>Computer Accessories</Text>
        </View>
        <ScrollView>
        <View style={styles.sales}>
            <Sales imageSource={Details[66].imageSource}
                price={Details[66].title}  minititle={Details[66].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[66].title,
                    minititle:Details[66].minititle,
                    imageSource:Details[66].imageSource,
                })}/>
            <Sales imageSource={Details[67].imageSource} price={Details[67].title}  minititle={Details[67].minititle}  onPress={() => navigation.navigate('Card',{
                    title:Details[67].title,
                    minititle:Details[67].minititle,
                    imageSource:Details[67].imageSource,
                })}/>
                <Sales imageSource={Details[68].imageSource} price={Details[68].title}  minititle={Details[68].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[68].title,
                    minititle:Details[68].minititle,
                    imageSource:Details[68].imageSource,
                })}/>
            
            <Sales imageSource={Details[69].imageSource}
                price={Details[69].title}  minititle={Details[69].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[69].title,
                    minititle:Details[69].minititle,
                    imageSource:Details[69].imageSource,
                })}/>
            <Sales imageSource={Details[70].imageSource} price={Details[70].title}  minititle={Details[70].minititle}  onPress={() => navigation.navigate('Card',{
                    title:Details[70].title,
                    minititle:Details[70].minititle,
                    imageSource:Details[70].imageSource,
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