import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';

// Tools
import { Search } from './Search';
import { CartButton } from './CartButton';
import { HomeCategories } from './HomeCategories';
import { ShopsButton } from './ShopsButton';
import { Ads } from './Ads';
import { Special } from './Special';
import { Popular } from './Popular';
import { Sponsored } from './Sponsored';
import { Sales } from './Sales';



export const HomeScreen = () => {
    const navigation = useNavigation();

  const handleSeeMore = () => {
    navigation.navigate('Cat');
  };
  const handlesMoreShops = () => {
    navigation.navigate('Shop');
  };
  return (
    <View style={styles.container}>
        <ScrollView>
            {/* Search and Cart View */}
            <View style={styles.searchCart}>
                <Search />
                <CartButton/>
            </View>
            {/* Categories View */}
            <View style={styles.textLabel}>
                <Text style={styles.leftText}>Categories</Text>
                <Text onPress={handleSeeMore}>See more</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <HomeCategories  imageSource={require('../../assets/icon.png')}
                title="Smart Phone" onPress={()=>{alert('Selected Phone')}}/>
                <HomeCategories  imageSource={require('../../assets/icon.png')}
                title="Netflix" onPress={()=>{alert('Selected Netflix')}}/>
                <HomeCategories  imageSource={require('../../assets/icon.png')}
                title="Netflix" onPress={()=>{alert('Selected Netflix')}}/>
                <HomeCategories  imageSource={require('../../assets/icon.png')}
                title="Netflix" onPress={()=>{alert('Selected Netflix')}}/>
                <HomeCategories  imageSource={require('../../assets/icon.png')}
                title="Netflix" onPress={()=>{alert('Selected Netflix')}}/>
            </ScrollView>
            {/* Featured Shops View */}
            <View style={styles.textLabel}>
                <Text style={styles.leftText}>Featured Shops</Text>
                <Text onPress={handlesMoreShops}>More shops</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <ShopsButton  imageSource={require('../../assets/icon.png')}
                onPress={()=>{alert('Image would appear soon')}}/>
                <ShopsButton  imageSource={require('../../assets/icon.png')}
                onPress={()=>{alert('Image would appear soon')}}/>
                <ShopsButton  imageSource={require('../../assets/icon.png')}
                onPress={()=>{alert('Image would appear soon')}}/>
                <ShopsButton  imageSource={require('../../assets/icon.png')}
                onPress={()=>{alert('Image would appear soon')}}/>
                <ShopsButton  imageSource={require('../../assets/icon.png')}
                onPress={()=>{alert('Image would appear soon')}}/>
            </ScrollView>
            <Ads/>
            {/* Special for you View */}
            <View style={styles.textLabel}>
                <Text style={styles.leftText}>Special for you</Text>
                <Text onPress={handleSeeMore}>See more</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Special imageSource={require('../../assets/icon.png')}
                title="Smart Phone"  minititle="Smart Phone" onPress={()=>{alert('Selected Phone')}}/>
                <Special imageSource={require('../../assets/icon.png')}
                title="Clothings" minititle="Clothings" onPress={()=>{alert('Selected Clothings')}}/>
            </ScrollView>
              {/* Popular Products View */}
            <View style={styles.textLabel}>
                <Text style={styles.leftText}>Popular Products</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Popular imageSource={require('../../assets/icon.png')}
                price="GHS 370.00"  minititle="Mifi" onPress={()=>{alert('Selected Mifi')}}/>
                <Popular imageSource={require('../../assets/icon.png')}
                price="GHS 90.00" minititle="Beard Oil" onPress={()=>{alert('Selected Beard Oil')}}/>
                <Popular imageSource={require('../../assets/icon.png')}
                price="GHS 150.00" minititle="Nike stuzzy(black)" onPress={()=>{alert('Selected Beard Oil')}}/>
            </ScrollView>
            {/* Sponsored View */}
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Sponsored imageSource={require('../../assets/icon.png')}
                onPress={()=>{alert('Selected Beard Oil')}}/>
                <Sponsored imageSource={require('../../assets/icon.png')}
                onPress={()=>{alert('Selected Beard Oil')}}/>
            </ScrollView>
            {/* Sales */}
            {/* Made in Ghana */}
            <View style={styles.textLabel}>
                <Text style={styles.leftText}>Made in Ghana 🎌</Text>
            </View>
            <View style={styles.sales}>
                <Sales imageSource={require('../../assets/icon.png')}
                price="GHS 370.00"  minititle="Mifi" onPress={()=>{alert('Selected Mifi')}}/>
                <Sales imageSource={require('../../assets/icon.png')}
                price="GHS 90.00" minititle="Beard Oil" onPress={()=>{alert('Selected Beard Oil')}}/>
                <Sales imageSource={require('../../assets/icon.png')}
                price="GHS 150.00" minititle="Nike stuzzy(black)" onPress={()=>{alert('Selected Beard Oil')}}/>
                <Sales imageSource={require('../../assets/icon.png')}
                price="GHS 370.00"  minititle="Mifi" onPress={()=>{alert('Selected Mifi')}}/>
            </View>
            {/* Flash Sales 🔥*/}
            <View style={styles.textLabel}>
                <Text style={styles.leftText}>Flash Sales 🔥</Text>
            </View>
            <View style={styles.sales}>
                <Sales imageSource={require('../../assets/icon.png')}
                price="GHS 370.00"  minititle="Mifi" onPress={()=>{alert('Selected Mifi')}}/>
                <Sales imageSource={require('../../assets/icon.png')}
                price="GHS 90.00" minititle="Beard Oil" onPress={()=>{alert('Selected Beard Oil')}}/>
                <Sales imageSource={require('../../assets/icon.png')}
                price="GHS 150.00" minititle="Nike stuzzy(black)" onPress={()=>{alert('Selected Beard Oil')}}/>
                <Sales imageSource={require('../../assets/icon.png')}
                price="GHS 370.00"  minititle="Mifi" onPress={()=>{alert('Selected Mifi')}}/>
            </View>
            {/* For Kids 👦🏾*/}
            <View style={styles.textLabel}>
                <Text style={styles.leftText}>For Kids 👦🏾</Text>
            </View>
            <View style={styles.sales}>
                <Sales imageSource={require('../../assets/icon.png')}
                price="GHS 370.00"  minititle="Mifi" onPress={()=>{alert('Selected Mifi')}}/>
                <Sales imageSource={require('../../assets/icon.png')}
                price="GHS 90.00" minititle="Beard Oil" onPress={()=>{alert('Selected Beard Oil')}}/>
                <Sales imageSource={require('../../assets/icon.png')}
                price="GHS 150.00" minititle="Nike stuzzy(black)" onPress={()=>{alert('Selected Beard Oil')}}/>
                <Sales imageSource={require('../../assets/icon.png')}
                price="GHS 370.00"  minititle="Mifi" onPress={()=>{alert('Selected Mifi')}}/>
            </View>
            {/* Home Appliances 🖥️*/}
            <View style={styles.textLabel}>
                <Text style={styles.leftText}>Home Appliances 🖥️</Text>
            </View>
            <View style={styles.sales}>
                <Sales imageSource={require('../../assets/icon.png')}
                price="GHS 370.00"  minititle="Mifi" onPress={()=>{alert('Selected Mifi')}}/>
                <Sales imageSource={require('../../assets/icon.png')}
                price="GHS 90.00" minititle="Beard Oil" onPress={()=>{alert('Selected Beard Oil')}}/>
                <Sales imageSource={require('../../assets/icon.png')}
                price="GHS 150.00" minititle="Nike stuzzy(black)" onPress={()=>{alert('Selected Beard Oil')}}/>
                <Sales imageSource={require('../../assets/icon.png')}
                price="GHS 370.00"  minititle="Mifi" onPress={()=>{alert('Selected Mifi')}}/>
            </View>
            {/* Urban Wear*/}
            <View style={styles.textLabel}>
                <Text style={styles.leftText}>Urban Wear</Text>
            </View>
            <View style={styles.sales}>
                <Sales imageSource={require('../../assets/icon.png')}
                price="GHS 370.00"  minititle="Mifi" onPress={()=>{alert('Selected Mifi')}}/>
                <Sales imageSource={require('../../assets/icon.png')}
                price="GHS 90.00" minititle="Beard Oil" onPress={()=>{alert('Selected Beard Oil')}}/>
                <Sales imageSource={require('../../assets/icon.png')}
                price="GHS 150.00" minititle="Nike stuzzy(black)" onPress={()=>{alert('Selected Beard Oil')}}/>
                <Sales imageSource={require('../../assets/icon.png')}
                price="GHS 370.00"  minititle="Mifi" onPress={()=>{alert('Selected Mifi')}}/>
            </View>
                {/* The ending part */}
                <View style={styles.empty}>
                </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    searchCart: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    textLabel:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    leftText:{
        fontSize: 17,
        fontWeight: 500,
    },
    sales:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        padding : 10,
    },
    empty:{
        height: 200,
        width: "100%",
        backgroundColor: '#fff',
    }
})