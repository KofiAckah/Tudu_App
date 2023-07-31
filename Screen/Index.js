// Contain all Stack Navigator
// Link to the home page
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './Home/HomeScreen'; 

import { Try2 } from './Categories/Try2';
import { CheckOut } from './Shop/CheckOut';

// Importing Screen for each Categories
import { Card1 } from '../Data/CateDB/Card1';
import { Arts } from '../Data/CateDB/Arts';
import { Baby } from '../Data/CateDB/Baby';
import { Beauty } from '../Data/CateDB/Beauty';
import { Book } from '../Data/CateDB/Book';
import { Computer } from '../Data/CateDB/Computer';
import { Electronics } from '../Data/CateDB/Electronics';
import { Gaming } from '../Data/CateDB/Gaming';
import { Groceries } from '../Data/CateDB/Groceries';
import { Luggage } from '../Data/CateDB/Luggage';
import { Mobiles } from '../Data/CateDB/Mobiles';
import { MenFashion } from '../Data/CateDB/MenFashion';
import { WomenFashion } from '../Data/CateDB/WomenFashion';
import { Sports } from '../Data/CateDB/Sports';

// Importing Screen for each Special
import { Bags } from './Special/Bags';
import { BabyClothings } from './Special/BabyClothings';
import { BabyToys } from './Special/BabyToys';
import { BrandComputer } from './Special/BrandComputer';
import { ComputerAss } from './Special/ComputerAss';
import { Fruits } from './Special/Fruits';
import { PhoneCases } from './Special/PhoneCases';
import { Smartphones } from './Special/Smartphones';
import { Womencloth } from './Special/Womencloth';
import { Vegetables } from './Special/Vegetables';

// Importing Screen for Profile
import { Help } from './Profile/Help';
import { SignIn } from './Profile/SignIn';
import { SignUp } from './Profile/SignUp';

// Importing Sub Screen 
import { Card } from './Categories/Card';
import { CartPage } from './Home/CartPage';
import { ShopDetail } from './Shop/ShopDetail';
import { Address } from './Shop/Address';


const Stack = createStackNavigator();

export const Index = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* Screen for each Categories */}
      <Stack.Screen name="Card1" component={Card1} />
      <Stack.Screen name="Arts" component={Arts} />
      <Stack.Screen name="Baby" component={Baby} />
      <Stack.Screen name="Beauty" component={Beauty} />
      <Stack.Screen name="Book" component={Book} />
      <Stack.Screen name="Computer" component={Computer} />
      <Stack.Screen name="Electronics" component={Electronics} />
      <Stack.Screen name="Gaming" component={Gaming} />
      <Stack.Screen name="Groceries" component={Groceries} />
      <Stack.Screen name="Luggage" component={Luggage} />
      <Stack.Screen name="Mobiles" component={Mobiles} />
      <Stack.Screen name="MenFashion" component={MenFashion} />
      <Stack.Screen name="WomenFashion" component={WomenFashion} />
      <Stack.Screen name="Sports" component={Sports} />
      {/* Screen for each Special */}
      <Stack.Screen name="Bags" component={Bags} />
      <Stack.Screen name="BabyClothings" component={BabyClothings} />
      <Stack.Screen name="BabyToys" component={BabyToys} />
      <Stack.Screen name="BrandComputer" component={BrandComputer} />
      <Stack.Screen name="ComputerAss" component={ComputerAss} />
      <Stack.Screen name="Fruits" component={Fruits} />
      <Stack.Screen name="PhoneCases" component={PhoneCases} />
      <Stack.Screen name="Smartphones" component={Smartphones} />
      <Stack.Screen name="Womencloth" component={Womencloth} />
      <Stack.Screen name="Vegetables" component={Vegetables} />
      {/* Screen for each Profile */}
      <Stack.Screen name="Help" component={Help}/>
      <Stack.Screen name="SignIn" component={SignIn}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
      {/* Sub Screen */}
      <Stack.Screen name="Card" component={Card} />
      <Stack.Screen name="CartPage" component={CartPage} />
      <Stack.Screen name="ShopDetail" component={ShopDetail} />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="Try2" component={Try2} />
      <Stack.Screen name="CheckOut" component={CheckOut} />
    </Stack.Navigator>
  );
};


