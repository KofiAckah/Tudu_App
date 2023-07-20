// Home Screen Code:
import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import { NavigationContainer, useNavigation, CommonActions } from '@react-navigation/native';


// Tools & Components
import { Search } from './Search';
import { CartButton } from './CartButton';
import { HomeCategories } from './HomeCategories';
import { ShopsButton } from './ShopsButton';
import { Ads } from './Ads';
import { Special } from './Special';
import { Popular } from './Popular';
import { Sponsored } from './Sponsored';
import { Sales } from './Sales';

import { Details } from '../Categories/Details';
import { ShopInfo } from '../Shop/ShopInfo';

export const HomeScreen = () => {
    const navigation = useNavigation();

  const handleSeeMore = () => {
    navigation.navigate('Cat');
  };
  const handlesMoreShops = () => {
    navigation.navigate('Shop');
  };
  const handlesTry2 = () => {
    navigation.navigate('Try2');
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
                <HomeCategories  
                imageSource={{uri:'https://media.istockphoto.com/id/505364949/de/vektor/ethnische-muster-set.jpg?s=612x612&w=0&k=20&c=McMHrFq7CHnnPCd4JioITHMg93Gdu--uQbHmUeGXbkE='}}
                title="Afrocentric" onPress={() => navigation.navigate('Card1')}/>
                <HomeCategories  
                imageSource={{uri:'https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324_640.jpg'}}
                title="Mobiles" onPress={() => navigation.navigate('Mobiles')}/>
                <HomeCategories  
                imageSource={{uri:'https://media.istockphoto.com/id/1449333655/de/foto/s%C3%BC%C3%9Fes-kleines-baby-das-l%C3%A4tzchen-tr%C3%A4gt-w%C3%A4hrend-es-auf-gelbem-hintergrund-isst.jpg?s=612x612&w=0&k=20&c=OylWfj_jQOd6BNBUw0YzjTaq-Uura2bQX4NUy-DM_No='}}
                title="Baby" onPress={() => navigation.navigate('Baby')}/>
                <HomeCategories  
                imageSource={{uri:'https://media.istockphoto.com/id/521811679/de/foto/nahaufnahme-des-vollen-einkaufswagens-im-lebensmittelgesch%C3%A4ft.jpg?s=612x612&w=0&k=20&c=5_U199mbRBd8wFFhSg6BnK31JAvQIv4LD-Nwh2lcRUw='}}
                title="Groceries" onPress={()=> navigation.navigate('Groceries')}/>
                <HomeCategories  
                imageSource={{uri:'https://media.istockphoto.com/id/1394988455/photo/laptop-with-a-blank-screen-on-a-white-background.jpg?b=1&s=170667a&w=0&k=20&c=ExhLI0wl0S3Zak66uSK8oubQLnC9kC0wlcgTr9ePIXc='}}
                title="Computer" onPress={()=>navigation.navigate('Computer')}/>
            </ScrollView>
            {/* Featured Shops View */}
            <View style={styles.textLabel}>
                <Text style={styles.leftText}>Featured Shops</Text>
                <Text onPress={handlesMoreShops}>More shops</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <ShopsButton  imageSource={ShopInfo[7].imageSource}
                onPress={() => navigation.navigate('ShopDetail',{
                    shopName:ShopInfo[7].shopName,
                    shopLocation:ShopInfo[7].shopLocation,
                    imageSource:ShopInfo[7].imageSource,
                    region:ShopInfo[7].region,
                })}/>
                <ShopsButton  imageSource={ShopInfo[6].imageSource}
                onPress={() => navigation.navigate('ShopDetail',{
                    shopName:ShopInfo[6].shopName,
                    shopLocation:ShopInfo[6].shopLocation,
                    imageSource:ShopInfo[6].imageSource,
                    region:ShopInfo[6].region,
                })}/>
                <ShopsButton  imageSource={ShopInfo[3].imageSource}
                onPress={() => navigation.navigate('ShopDetail',{
                    shopName:ShopInfo[3].shopName,
                    shopLocation:ShopInfo[3].shopLocation,
                    imageSource:ShopInfo[3].imageSource,
                    region:ShopInfo[3].region,
                })}/>
                <ShopsButton  imageSource={ShopInfo[1].imageSource}
                onPress={() => navigation.navigate('ShopDetail',{
                    shopName:ShopInfo[1].shopName,
                    shopLocation:ShopInfo[1].shopLocation,
                    imageSource:ShopInfo[1].imageSource,
                    region:ShopInfo[1].region,
                })}/>
            </ScrollView>
            <Ads/>
            {/* Special for you View */}
            <View style={styles.textLabel}>
                <Text style={styles.leftText}>Special for you</Text>
                <Text onPress={handleSeeMore}>See more</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Special imageSource={{uri:'https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=400'}}
                title="Smart Phone"  minititle="7 brands" onPress={()=> navigation.navigate('Smartphones')}/>
                <Special imageSource={{uri:'https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&w=400'}}
                title="Clothings" minititle="Clothings" onPress={()=> navigation.navigate('Womencloth')}/>
            </ScrollView>
              {/* Popular Products View */}
            <View style={styles.textLabel}>
                <Text style={styles.leftText}>Popular Products</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Popular imageSource={Details[1].imageSource}
                price={Details[1].title}  minititle={Details[1].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[1].title,
                    minititle:Details[1].minititle,
                    imageSource:Details[1].imageSource,
                })}/>
                <Popular imageSource={Details[0].imageSource}
                price={Details[0].title}  minititle={Details[0].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[0].title,
                    minititle:Details[0].minititle,
                    imageSource:Details[0].imageSource,
                })}/>
                <Popular imageSource={Details[2].imageSource}
                price={Details[2].title}  minititle={Details[2].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[2].title,
                    minititle:Details[2].minititle,
                    imageSource:Details[2].imageSource,
                })}/>
                <Popular imageSource={Details[3].imageSource}
                price={Details[3].title}  minititle={Details[3].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[3].title,
                    minititle:Details[3].minititle,
                    imageSource:Details[3].imageSource,
                })}/>
                <Popular imageSource={Details[4].imageSource}
                price={Details[4].title}  minititle={Details[4].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[4].title,
                    minititle:Details[4].minititle,
                    imageSource:Details[4].imageSource,
                })}/>
            </ScrollView>
            {/* Sponsored View */}
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Sponsored imageSource={ShopInfo[2].imageSource}
                onPress={() => navigation.navigate('ShopDetail',{
                    shopName:ShopInfo[2].shopName,
                    shopLocation:ShopInfo[2].shopLocation,
                    imageSource:ShopInfo[2].imageSource,
                    region:ShopInfo[2].region,
                })}/>
                <Sponsored imageSource={Details[10].imageSource}
                onPress={() => navigation.navigate('ShopDetail',{
                    shopName:ShopInfo[2].shopName,
                    shopLocation:ShopInfo[2].shopLocation,
                    imageSource:ShopInfo[2].imageSource,
                    region:ShopInfo[2].region,
                })}/>
            </ScrollView>
            {/* Sales */}
            {/* Made in Ghana */}
            <View style={styles.textLabel}>
                <Text style={styles.leftText}>Made in Ghana 🎌</Text>
            </View>
            <View style={styles.sales}>
                <Sales imageSource={{uri:'https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=400'}}
                price={Details[5].title}  minititle={Details[5].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[5].title,
                    minititle:Details[5].minititle,
                    imageSource:Details[5].imageSource,
                })}/>
                <Sales imageSource={{uri:'https://m.media-amazon.com/images/I/61IOnavsiGL._AC_UY500_.jpg'}}
                price={Details[6].title}  minititle={Details[6].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[6].title,
                    minititle:Details[6].minititle,
                    imageSource:Details[6].imageSource,
                })}/>
                <Sales imageSource={{uri:'https://cdn.pixabay.com/photo/2016/01/25/12/58/buddhism-1160610_640.jpg'}}
                price={Details[7].title}  minititle={Details[7].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[7].title,
                    minititle:Details[7].minititle,
                    imageSource:Details[7].imageSource,
                })}/>
                <Sales imageSource={{uri:'https://media.istockphoto.com/id/483232645/photo/african-fabrics-from-ghana-west-africa.webp?b=1&s=612x612&w=0&k=20&c=K0ugWdGz3wCRPczyL_MsH2SlDgBTO1ntUl2tmRbQUS4='}}
                price={Details[8].title}  minititle={Details[8].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[8].title,
                    minititle:Details[8].minititle,
                    imageSource:Details[8].imageSource,
                })}/>
            </View>
            {/* Flash Sales 🔥*/}
            <View style={styles.textLabel}>
                <Text style={styles.leftText}>Flash Sales 🔥</Text>
            </View>
            <View style={styles.sales}>
            <Sales imageSource={{uri:'https://e7.pngegg.com/pngimages/708/315/png-clipart-black-pullover-hoodie-illustration-t-shirt-hoodie-top-neckline-hoodie-hat-black-thumbnail.png'}}
                price={Details[9].title}  minititle={Details[9].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[9].title,
                    minititle:Details[9].minititle,
                    imageSource:Details[9].imageSource,
                })}/>
                <Sales imageSource={{uri:'https://images.pexels.com/photos/7763201/pexels-photo-7763201.jpeg?auto=compress&cs=tinysrgb&w=400'}}
                price={Details[10].title}  minititle={Details[10].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[10].title,
                    minititle:Details[10].minititle,
                    imageSource:Details[10].imageSource,
                })}/>
                <Sales imageSource={{uri:'https://e7.pngegg.com/pngimages/528/973/png-clipart-white-pullover-hoodie-illustration-mexico-hoodie-bluza-clothing-mercadolibre-hoodie-white-sweatshirt-thumbnail.png'}}
                price={Details[11].title}  minititle={Details[11].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[11].title,
                    minititle:Details[11].minititle,
                    imageSource:Details[11].imageSource,
                })}/>
                <Sales imageSource={{uri:'https://cdn.pixabay.com/photo/2016/03/27/18/49/man-1283576_640.jpg'}}
                price={Details[12].title}  minititle={Details[12].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[12].title,
                    minititle:Details[12].minititle,
                    imageSource:Details[12].imageSource,
                })}/>
            </View>
            {/* For Kids 👦🏾*/}
            <View style={styles.textLabel}>
                <Text style={styles.leftText}>For Kids 👦🏾</Text>
            </View>
            <View style={styles.sales}>
            <Sales imageSource={{uri:'https://media.istockphoto.com/id/473707118/photo/weve-got-the-moves-likes-jagger.jpg?b=1&s=612x612&w=0&k=20&c=1xotdNr9Ue8T9T_n1f_AP750HxpbO5CDgh7IWJ7uGdM='}}
                price={Details[13].title}  minititle={Details[13].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[13].title,
                    minititle:Details[13].minititle,
                    imageSource:Details[13].imageSource,
                })}/>
                <Sales imageSource={{uri:'https://m.media-amazon.com/images/I/51RfZ8DJZVL._UY500_.jpg'}}
                price={Details[14].title}  minititle={Details[14].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[14].title,
                    minititle:Details[14].minititle,
                    imageSource:Details[14].imageSource,
                })}/>
                <Sales imageSource={{uri:'https://images.pexels.com/photos/5693005/pexels-photo-5693005.jpeg?auto=compress&cs=tinysrgb&w=400'}}
                price={Details[15].title}  minititle={Details[15].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[15].title,
                    minititle:Details[15].minititle,
                    imageSource:Details[15].imageSource,
                })}/>
                <Sales imageSource={{uri:'https://m.media-amazon.com/images/I/81lsY3GAzqL._AC_UY500_.jpg'}}
                price={Details[16].title}  minititle={Details[16].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[16].title,
                    minititle:Details[16].minititle,
                    imageSource:Details[16].imageSource,
                })}/>
            </View>
            {/* Home Appliances 🖥️*/}
            <View style={styles.textLabel}>
                <Text style={styles.leftText}>Home Appliances 🖥️</Text>
            </View>
            <View style={styles.sales}>
            <Sales imageSource={{uri:'https://e7.pngegg.com/pngimages/315/744/png-clipart-rice-cookers-cooking-slow-cookers-rice-rice-cooker-cooking-thumbnail.png'}}
                price={Details[17].title}  minititle={Details[17].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[17].title,
                    minititle:Details[17].minititle,
                    imageSource:Details[17].imageSource,
                })}/>
                <Sales imageSource={{uri:'https://media.istockphoto.com/id/1279154436/photo/selective-focus-of-ripe-fruits-near-blender-on-kitchen-table.jpg?b=1&s=612x612&w=0&k=20&c=ZgyaCMJuOufJI17bXW0QqDKlqMQWSto1Gbq42S0nG2M='}}
                price={Details[18].title}  minititle={Details[18].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[18].title,
                    minititle:Details[18].minititle,
                    imageSource:Details[18].imageSource,
                })}/>
                <Sales imageSource={{uri:'https://media.istockphoto.com/id/1395191574/photo/black-led-tv-television-screen-blank-isolated.jpg?b=1&s=170667a&w=0&k=20&c=rT4t6CuNap53Qu78fbFGMy5IEji46IqQDILCrfAcHtg='}}
                price={Details[19].title}  minititle={Details[19].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[19].title,
                    minititle:Details[19].minititle,
                    imageSource:Details[19].imageSource,
                })}/>
                <Sales imageSource={{uri:'https://images.pexels.com/photos/4108671/pexels-photo-4108671.jpeg?auto=compress&cs=tinysrgb&w=400'}}
                price={Details[20].title}  minititle={Details[20].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[20].title,
                    minititle:Details[20].minititle,
                    imageSource:Details[20].imageSource,
                })}/>
            </View>
            {/* Urban Wear*/}
            <View style={styles.textLabel}>
                <Text style={styles.leftText}>Urban Wear</Text>
            </View>
            <View style={styles.sales}>
            <Sales imageSource={{uri:'https://store.detailking.com/cdn-cgi/image/width%3D300%2Cquality%3D100/assets/images/flex_bag.jpg'}}
                price={Details[21].title}  minititle={Details[21].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[21].title,
                    minititle:Details[21].minititle,
                    imageSource:Details[21].imageSource,
                })}/>
                <Sales imageSource={{uri:'https://e7.pngegg.com/pngimages/536/298/png-clipart-hoodie-green-bluza-zipper-hoodie-active-shirt-adidas-thumbnail.png'}}
                price={Details[22].title}  minititle={Details[22].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[22].title,
                    minititle:Details[22].minititle,
                    imageSource:Details[22].imageSource,
                })}/>
                <Sales imageSource={{uri:'https://flex-bags.com/cdn/shop/products/flex-sets-compact-crossbody-bag-orange-cuban-chain-strap-side_600x.jpg?v=1655401340'}}
                price={Details[23].title}  minititle={Details[23].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[23].title,
                    minititle:Details[23].minititle,
                    imageSource:Details[23].imageSource,
                })}/>
                <Sales imageSource={{uri:'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=400'}}
                price={Details[24].title}  minititle={Details[24].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[24].title,
                    minititle:Details[24].minititle,
                    imageSource:Details[24].imageSource,
                })}/>
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