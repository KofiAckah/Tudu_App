import React,{useState} from 'react';
import { View, Text, Button,StyleSheet,ScrollView,TextInput,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const SignIn = () => {  
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleBackPress = () => {
        navigation.navigate('Profile');
    };
    return (
      <View style={styles.container}>
        <View style={styles.fixed}>
          <Ionicons name="arrow-back" marginLeft={10} size={25} color="#000" onPress={handleBackPress}/>
          <Text style={styles.titleText}>Sign In</Text>
        </View>
        <View style={styles.context}>
        <Text style={styles.welcome}>Welcome Back</Text>
        <Text style={styles.topText}>Sign in with your email and password</Text>
            <TextInput  style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                type='email'
            />
            <Ionicons name="mail-outline" size={38} style={styles.icon}/>
            <TextInput style={styles.input} placeholder="Enter your password" 
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
            />
            <Ionicons name="lock-closed-outline" size={38} style={styles.icon}/>
            <Text onPress={() => navigation.navigate('Home')} style={styles.signIn}>Sign In</Text>
            <View flexDirection='row' justifyContent= 'center'>
                <Text style={styles.text}>Don't have an account?</Text>
                <Text style={styles.signUp}>Sign Up</Text>
            </View>
            <Text style={styles.guest} onPress={() => navigation.navigate('Home')}>Continue as Guest &gt;&gt;&gt;</Text>
        </View>
        <Text style={styles.bottomText}>By Continuing you confirm that you agree with our Terms and Conditions</Text>
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
    },
    titleText: {
      fontSize: 20,
      marginLeft: 50,
      color: 'grey',
    },
    context: {
      marginTop: 50,
    },
    welcome: {
        marginTop: 20,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '600',
    },
    topText: {
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 60,
    },
    input: {
      marginHorizontal: 40,
      marginVertical: 10,
      height: 70,
      borderWidth: 1,
      padding: 10,
      borderColor: 'grey',
      borderRadius: 40,
      paddingLeft: 30,
      fontSize: 20,
      marginTop: -25,
    },
    icon: {
        alignSelf: 'flex-end',
        top: -65,
        right: 60,
    },
    signIn: {
        textAlign: 'center',
        alignSelf: 'center',
        textAlignVertical: 'center',
        height: 70,
        width: 300,
        borderRadius: 40,
        fontSize: 25,
        backgroundColor: '#22aaff',
        color: '#fff',
    },
    text: {
        marginTop:40,
        fontSize: 20,
    },
    signUp: {
        marginTop:40,
        fontSize: 20,
        color: '#22aaff',
    },
    guest: {
        marginTop:10,
        fontSize: 20,
        color: '#22aaff',
        textAlign: 'center',
    },
    bottomText: {
        position: 'absolute',        
        marginHorizontal: 50,
        textAlign: 'center',
        bottom: 25,
    },
  });