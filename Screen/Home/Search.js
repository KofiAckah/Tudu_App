// search bar for home screen
import { StyleSheet, Text, View,TextInput } from 'react-native'
import React,{useState} from 'react'
import { Ionicons } from '@expo/vector-icons';

export const Search = () => {
    const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Perform search with the searchText
    console.log(`Searching for ${searchText}`);
  };
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color="blue" style={styles.icon} />
      <TextInput
        style={styles.input}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
        value={searchText}
        placeholder="Search Products"
        placeholderTextColor="#A9A9A9"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    // marginVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    height: 40,
    color: '#000',
    width: '70%',
  },
});