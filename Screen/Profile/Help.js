import React from 'react';
import { View, Text, TextInput,StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Help = () => {  
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.navigate('Profile');
  };
  return (
    <View style={styles.container}>
      <View style={styles.fixed}>
        <Ionicons name="arrow-back" marginLeft={10} size={25} color="#000" onPress={handleBackPress}/>
        <Text style={styles.titleText}>Help Center</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.question}>How may we help you today ?</Text>
        <TextInput style={styles.input} placeholder='Text your message here'/>
        <TouchableOpacity>
            <Text style={styles.send}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    fixed: {
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: 10,
        // backgroundColor: '#ff0',
    },
    titleText: {
        fontSize: 20,
        marginLeft: 50,
        color: 'grey',
    },
    main:{
        marginTop:200,
        justifyContent:'center'
    },
    question: {
        fontSize: 20,
        textAlign: 'center',
    },
    input: {
        marginTop: 50,
        borderWidth: 0.5,
        height: 150,
        width: 300,
        alignSelf: 'center',
        textAlign:'left',
        textAlignVertical: 'top',
        padding: 5,
        borderRadius: 15,
    },
    send:{
        marginTop: 20,
        textAlign: 'center',
        backgroundColor: '#22ddff',
        height: 60,
        width: 120,
        alignSelf:'center',
        textAlignVertical: 'center',
        fontSize: 25,
        borderRadius: 10,
        color: '#fff'
    }
});