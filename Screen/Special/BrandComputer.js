import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Details } from '../Categories/Details';
import { Sales } from '../Home/Sales';

export const BrandComputer = () => {
    const navigation = useNavigation();
    const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View>
        <View style={styles.fixed}>
            <Ionicons name="arrow-back" marginLeft={10} size={25} color="#000" onPress={handleBackPress}/>
            <Text style={styles.titleText}>Computer Brands</Text>
        </View>
        <ScrollView>
        <View style={styles.sales}>
            <Sales imageSource={Details[71].imageSource}
                price={Details[71].title}  minititle={Details[71].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[71].title,
                    minititle:Details[71].minititle,
                    imageSource:Details[71].imageSource,
                })}/>
            <Sales imageSource={Details[72].imageSource} price={Details[72].title}  minititle={Details[72].minititle}  onPress={() => navigation.navigate('Card',{
                    title:Details[72].title,
                    minititle:Details[72].minititle,
                    imageSource:Details[72].imageSource,
                })}/>
                <Sales imageSource={Details[73].imageSource} price={Details[73].title}  minititle={Details[73].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[73].title,
                    minititle:Details[73].minititle,
                    imageSource:Details[73].imageSource,
                })}/>
            
            <Sales imageSource={Details[74].imageSource}
                price={Details[74].title}  minititle={Details[74].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[74].title,
                    minititle:Details[74].minititle,
                    imageSource:Details[74].imageSource,
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