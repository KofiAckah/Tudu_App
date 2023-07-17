// Types of Categories
import { StyleSheet, Text, View,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Typeofcat = ({onPress,title}) => {
  return (
    <View>
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.contianer}>
                <Text style={styles.title}>{title}</Text>
                <Ionicons name="chevron-forward" marginLeft={10} size={25} color="#000"/>
            </View>
        </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
    contianer:{
        flexDirection: 'row',
        // marginTop: 20,
        // backgroundColor: '#f0f',
        padding: 15,
        justifyContent: 'space-between',
        marginLeft: 20,
    },
    title:{
        fontSize: 18,
        color: '#000',
    },
})