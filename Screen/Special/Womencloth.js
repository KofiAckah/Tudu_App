import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Details } from '../Categories/Details';
import { Sales } from '../Home/Sales';

export const Womencloth = () => {
    const navigation = useNavigation();
    const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View>
        <View style={styles.fixed}>
            <Ionicons name="arrow-back" marginLeft={10} size={25} color="#000" onPress={handleBackPress}/>
            <Text style={styles.titleText}>Clothings</Text>
        </View>
        <ScrollView>
        <View style={styles.sales}>
            <Sales imageSource={Details[34].imageSource}
                price={Details[34].title}  minititle={Details[34].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[34].title,
                    minititle:Details[34].minititle,
                    imageSource:Details[34].imageSource,
                })}/>
            <Sales imageSource={Details[5].imageSource} price={Details[5].title}  minititle={Details[5].minititle}  onPress={() => navigation.navigate('Card',{
                    title:Details[5].title,
                    minititle:Details[5].minititle,
                    imageSource:Details[5].imageSource,
                })}/>
                <Sales imageSource={Details[6].imageSource} price={Details[6].title}  minititle={Details[6].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[6].title,
                    minititle:Details[6].minititle,
                    imageSource:Details[6].imageSource,
                })}/>
                <Sales imageSource={Details[7].imageSource}
                price={Details[7].title}  minititle={Details[7].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[7].title,
                    minititle:Details[7].minititle,
                    imageSource:Details[7].imageSource,
                })}/>
                <Sales imageSource={Details[8].imageSource}
                price={Details[8].title}  minititle={Details[8].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[8].title,
                    minititle:Details[8].minititle,
                    imageSource:Details[8].imageSource,
                })}/>
                <Sales imageSource={Details[35].imageSource}
                price={Details[35].title}  minititle={Details[35].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[35].title,
                    minititle:Details[35].minititle,
                    imageSource:Details[35].imageSource,
                })}/>
                <Sales imageSource={Details[36].imageSource}
                price={Details[36].title}  minititle={Details[36].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[36].title,
                    minititle:Details[36].minititle,
                    imageSource:Details[36].imageSource,
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