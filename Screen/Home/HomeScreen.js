import { StyleSheet, Text, View,ScrollView } from 'react-native';
import React,{useState} from 'react';
import { Search } from './Search';
import { CartButton } from './CartButton';
import { HomeCategories } from './HomeCategories';
import { ShopsButton } from './ShopsButton';
import { Ads } from './Ads';
import { Special } from './Special';


export const HomeScreen = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
        <View style={styles.searchCart}>
            <Search />
            <CartButton/>
        </View>
        <View style={styles.textLabel}>
            <Text style={styles.leftText}>Categories</Text>
            <Text>See more</Text>
        </View>
        <HomeCategories />
        <View style={styles.textLabel}>
            <Text style={styles.leftText}>Featured Shops</Text>
            <Text>See more</Text>
        </View>
        <ShopsButton />
        <Ads/>
        <View style={styles.textLabel}>
            <Text style={styles.leftText}>Special for you</Text>
            <Text>See more</Text>
        </View>
        <Special/>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
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
    }
})