import React,{useState} from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Favorites = () => {
  const navigation = useNavigation();

  const [isText1Selected, setIsText1Selected] = useState(true);
  const [isText2Selected, setIsText2Selected] = useState(false);

  const handleText1Press = () => {
    setIsText1Selected(true);
    setIsText2Selected(false);
  };

  const handleText2Press = () => {
    setIsText1Selected(false);
    setIsText2Selected(true);
  };

  const handleBackPress = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <View style={styles.fixed}>
        <Ionicons name="arrow-back" marginLeft={10} size={25} color="#000" onPress={handleBackPress}/>
        <Text style={styles.titleText}>Favorites</Text>
      </View>
      <View style={styles.btn}>
        <Text style={[styles.text, isText1Selected && styles.selectedText]} onPress={handleText1Press}>Whilist</Text>
        <Text style={[styles.text, isText2Selected && styles.selectedText]} onPress={handleText2Press}>Stores</Text>
      </View>
      <Ionicons style={styles.icon} name="thunderstorm-outline" marginLeft={10} size={90} color="#000"/>
      <Text style={styles.info}>
        {isText1Selected ? 'Sorry no whilist yet ' : 'Sorry no stores yet'}
      </Text>
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
  btn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    height: 40,
    width: "50%",
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  selectedText: {
    color: '#22ddff',
    borderBottomColor: '#22ddff',
    borderBottomWidth: 2.5,
  },
  icon:{
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 250,
    color: '#22ddff',
  },
  info: {
    position: 'absolute',
    alignSelf: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    marginTop: 380,
  },
});