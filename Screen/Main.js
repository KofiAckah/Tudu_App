import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import {HomeScreen} from './Home/HomeScreen';
import {Cat} from './Categories/Cat';
import {Mainshop} from './Shop/Mainshop';
import {Favorites} from './Favorites/Favorites';
import {Profile} from './Profile/Profile';

//Screen names
const homeName = "Home";
const catName = "Cat";
const shopName = "Shop";
const favName = "Favorites";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === catName) {
              iconName = focused ? 'list' : 'list-outline';
            }
            else if (rn === shopName) {
              iconName = focused ? 'card' : 'card';
            } else if (rn === favName) {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (rn === profileName) {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70},
          showLabel: false,
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={catName} component={Cat} />
        <Tab.Screen name={shopName} component={Mainshop} />
        <Tab.Screen name={favName} component={Favorites} />
        <Tab.Screen name={profileName} component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Main;