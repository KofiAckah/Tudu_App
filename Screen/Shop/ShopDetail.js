import { StyleSheet, Linking ,Text, View,TouchableOpacity,Image,ScrollView } from 'react-native';
import React,{useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export const ShopDetail = ({route}) => {
    const imageSource = route.params;
    const shopName = route.params;
    const shopLocation = route.params;
    const region = route.params;
    const navigation = useNavigation();
    const handleBackPress = () => {
        navigation.navigate('Shop');
    };
    const latitude = '37.7749'; // Replace these with the actual latitude and longitude
    const longitude = '-122.4194'; // of the location you want to open in Google Maps

    const handleMapPress = () => {
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`)
        .catch((error) => console.error('Error while opening Google Maps:', error));
    };
  return (
    <View style={styles.container}>
        <ScrollView>
            <Image source={imageSource.imageSource} style={styles.image} />
            <View style={styles.icon}>
                <TouchableOpacity>
                    <Ionicons name="chevron-back-outline" style={styles.back} size={30} onPress={handleBackPress}/> 
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.star}> 0.0 <Ionicons name="star" size={20} color="gold"/></Text>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <Text style={styles.title}>{shopName.shopName}</Text>
                <View flexDirection="row">
                    <View style={styles.items} backgroundColor="blue">
                        <Ionicons style={styles.connectIcon} name="call-outline" size={30} onPress={()=> Linking.openURL(`tel:${+233262092037}`)}/>
                        <Text style={styles.connect} onPress={()=> Linking.openURL(`tel:${+233262092037}`)}>Call</Text>
                    </View>
                    <View style={styles.items} backgroundColor="red">
                        <Ionicons style={styles.connectIcon} name="location-outline" size={30} onPress={handleMapPress}/>
                        <Text style={styles.connect} onPress={handleMapPress}>Location</Text>
                    </View>
                    <View style={styles.items} backgroundColor="#ee0">
                        <Ionicons style={styles.connectIcon} name="chatbubble-ellipses-outline" size={30}/>
                        <Text style={styles.connect}>Chat</Text>
                    </View>
                    <View style={styles.items} backgroundColor="#000">
                        <Image source={{uri:"https://cdn.pixabay.com/photo/2017/05/11/19/44/fresh-fruits-2305192_640.jpg"}} style={styles.gallery}/>
                        <Ionicons style={styles.connectIcon} name="images-outline" size={30}/>  
                        <Text style={styles.connect}>Gallery</Text>
                    </View>
                </View>
                <View style={styles.info}>
                    <View marginTop={10}>
                        <MaterialCommunityIcons name="store" size={32}/>
                    </View>
                    <View marginLeft={10}>
                        <Text style={styles.hours}>Working Hours</Text>
                        <Text style={styles.time}>7:00AM - 9:00PM</Text>
                    </View>
                </View>
                <View style={styles.info}>
                    <View marginTop={10}>
                        <Ionicons name="location-outline" size={32}/>
                    </View>
                    <View marginLeft={10}>
                        <Text style={styles.hours}>{region.region}</Text>
                        <Text style={styles.time}>{shopLocation.shopLocation}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
                <TouchableOpacity>
                    <Text style={styles.catalogue}>View Catalogue</Text>
                </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    icon:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginTop: 20,
        top: -400,
    },
    back:{
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 2,
    },
    star:{
        fontSize: 17,
        backgroundColor: '#fff',
        borderRadius: 10,
        color: 'blue',
        padding: 5,
    },
    image:{
        height: 400,
        width: "100%",
    },
    body:{
        top: -75,
        backgroundColor: '#fff',
        borderTopLeftRadius: 60,
    },
    title:{
        fontSize: 30,
        marginLeft: 30,
        marginTop: 20,
        color: '#595959',
    },
    items:{
        marginTop: 20,
        height: 80,
        width: 78,
        marginLeft: 15,
        borderRadius: 15,
    },
    connect:{
        height: 70,
        width: 78,
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
        top: -10,
        height: 70,
        width: 75,
    },
    connectIcon:{
        color: '#fff',
        left: 20,
        padding: 5,
        borderRadius: 50,
    },
    gallery:{
        position: 'absolute',
        height: 80,
        width: 78,
        borderRadius: 15,
        opacity: 0.6,
    },
    info:{
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 20,
    },
    hours:{
        fontSize: 19,
        fontWeight: 'bold',
    },
    time:{
        fontSize: 17,
    },
    catalogue:{
        marginBottom: 20,
        fontSize: 20,
        backgroundColor: 'blue',
        color: '#fff',
        width: 350,
        height: 50,
        textAlign: 'center',
        alignSelf: 'center',
        borderRadius: 30,
        paddingTop: 10,
    },
})