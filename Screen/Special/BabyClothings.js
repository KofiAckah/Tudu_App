import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Details } from '../Categories/Details';
import { Sales } from '../Home/Sales';

export const BabyClothings = () => {
    const navigation = useNavigation();
    const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View>
        <View style={styles.fixed}>
            <Ionicons name="arrow-back" marginLeft={10} size={25} color="#000" onPress={handleBackPress}/>
            <Text style={styles.titleText}>Baby Clothings</Text>
        </View>
        <ScrollView>
        <View style={styles.sales}>
            <Sales imageSource={Details[49].imageSource}
                price={Details[49].title}  minititle={Details[49].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[49].title,
                    minititle:Details[49].minititle,
                    imageSource:Details[49].imageSource,
                })}/>
            <Sales imageSource={Details[50].imageSource} price={Details[50].title}  minititle={Details[50].minititle}  onPress={() => navigation.navigate('Card',{
                    title:Details[50].title,
                    minititle:Details[50].minititle,
                    imageSource:Details[50].imageSource,
                })}/>
                <Sales imageSource={Details[51].imageSource} price={Details[51].title}  minititle={Details[51].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[51].title,
                    minititle:Details[51].minititle,
                    imageSource:Details[51].imageSource,
                })}/>
            
            <Sales imageSource={Details[46].imageSource}
                price={Details[46].title}  minititle={Details[46].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[46].title,
                    minititle:Details[46].minititle,
                    imageSource:Details[46].imageSource,
                })}/>
            <Sales imageSource={Details[47].imageSource} price={Details[47].title}  minititle={Details[47].minititle}  onPress={() => navigation.navigate('Card',{
                    title:Details[47].title,
                    minititle:Details[47].minititle,
                    imageSource:Details[47].imageSource,
                })}/>
                <Sales imageSource={Details[48].imageSource} price={Details[48].title}  minititle={Details[48].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[48].title,
                    minititle:Details[48].minititle,
                    imageSource:Details[48].imageSource,
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