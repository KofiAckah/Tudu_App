import React,{useState} from 'react';
import { View, Text, Button,StyleSheet,ScrollView,TextInput,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Address = () => {  
  const navigation = useNavigation();

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [floor, setFloor] = useState('');
  const [info, setInfo] = useState('');
  const [region, setRegion] = useState('');
  const [locality, setLocality] = useState('');
  const [phone, setPhone] = useState('');
  const [altphone, setAltphone] = useState('');

  const handleSave = () => {
    navigation.navigate('CheckOut', {fname: fname, lname: lname, floor: floor, info: info, region: region, locality: locality, phone: phone, altphone: altphone});
  }

  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.fixed}>
        <Ionicons name="arrow-back" marginLeft={10} size={25} color="#000" onPress={handleBackPress}/>
        <Text style={styles.titleText}>Add Address</Text>
      </View>
      <ScrollView style={styles.address}>
        <Ionicons name="location" marginLeft={120} size={150} color="#f00"/>
        <TextInput  style={styles.input}
          placeholder="Enter First Name"
          value={fname}
          onChangeText={(text) => setFname(text)}
          />
        <TextInput style={styles.input} placeholder="Last Name" 
          value={lname}
          onChangeText={(text) => setLname(text)}
        />
        <TextInput style={styles.input} placeholder="Apt./office/floor" 
          value={floor}
          onChangeText={(text) => setFloor(text)}
        />
        <TextInput style={styles.input} placeholder="Additional Info" 
          value={info}
          onChangeText={(text) => setInfo(text)}
        />
        <TextInput style={styles.input} placeholder="Region/State" 
          value={region}
          onChangeText={(text) => setRegion(text)}
        />
        <TextInput style={styles.input} placeholder="Locality" 
          value={locality}
          onChangeText={(text) => setLocality(text)}
        />
        <View style={styles.numberContainer}>
          <Text style={styles.numberLabel}>🇬🇭 +233</Text>
          <TextInput style={styles.numberInput} placeholder="Enter phone number" 
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberLabel}>🇬🇭 +233</Text>
          <TextInput style={styles.numberInput} placeholder="Alternate phone number" 
          value={altphone}
          onChangeText={(text) => setAltphone(text)}
        />
        </View>
        <Button title="Save" style={styles.btn} onPress={handleSave}/>
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
  address: {
    marginTop: 50,
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
  numberContainer: {
    flexDirection: 'row',
  },
  numberLabel: {
    marginTop: 30,
    marginLeft: 30,
    fontSize: 25,
  },
  numberInput: {
    marginHorizontal: 10,
    marginVertical: 10,
    height: 70,
    borderWidth: 1,
    padding: 10,
    borderColor: 'grey',
    borderRadius: 40,
    paddingLeft: 30,
    fontSize: 20,
    width: "60%",
  },
});