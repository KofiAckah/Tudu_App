import React,{useState} from 'react';
import { View, Text, StyleSheet,ScrollView,TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const SignUp = () => {  
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
          <Text style={styles.titleText}>Register</Text>
        </View>
        <ScrollView style={styles.context}>
            <Text style={styles.welcome}>Register Account</Text>
            <Text style={styles.topText}>Complete your details to sign up with Tudu</Text>
            <TextInput style={styles.input} placeholder="First Name"/>
            <TextInput style={styles.input} placeholder="Last Name"/>
            <TextInput  style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                type='email'
            />
            <TextInput style={styles.input} placeholder="Country"/>
            <TextInput style={styles.input} placeholder="Password" 
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            />
            <TextInput style={styles.input} placeholder="Confirm Password" 
            secureTextEntry={true}
            />
            <Text onPress={() => navigation.navigate('Home')} style={styles.signUp}>Sign Up</Text>
            <View flexDirection='row' justifyContent= 'center'>
                <Text style={styles.text}>Already have an account?</Text>
                <Text style={styles.signIn} onPress={() => navigation.navigate('SignIn')}>Sign In</Text>
            </View>
            <Text style={styles.bottomText}>By Continuing you confirm that you agree with our Terms and Conditions</Text>
        </ScrollView>
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
        marginBottom: 20,
        marginHorizontal: 100,
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
    },
    icon: {
        alignSelf: 'flex-end',
        top: -65,
        right: 60,
    },
    signUp: {
        marginTop: 15,
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
        marginTop:15,
        fontSize: 20,
    },
    signIn: {
        marginTop:15,
        fontSize: 20,
        color: '#22aaff',
    },
    bottomText: {
        marginTop: 10,
        marginHorizontal: 50,
        textAlign: 'center',
        marginBottom: 20,
    },
  });