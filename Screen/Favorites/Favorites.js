import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Favorites = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text>Favorites Screen</Text>
      <Button title="Go back to Home" onPress={handleBackPress} />
    </View>
  );
};





// import { TouchableOpacity,StyleSheet, Text, View } from 'react-native';
// import React from 'react';

// export const Favorites = () => {
//   return (
//     <View>
//       <Text>Favorites Page</Text>
//     </View>
//   )
// }