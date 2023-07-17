import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Details } from '../Categories/Details';
import { Sales } from '../Home/Sales';

export const Smartphones = () => {
    const navigation = useNavigation();
    const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View>
        <View style={styles.fixed}>
            <Ionicons name="arrow-back" marginLeft={10} size={25} color="#000" onPress={handleBackPress}/>
            <Text style={styles.titleText}>Smartphones</Text>
        </View>
        <ScrollView>
        <View style={styles.sales}>
            <Sales imageSource={{uri:'https://www.gadgetmaya.com/wp-content/uploads/2023/02/Tecno-Spark-Go-2023.jpg'}}
                price={Details[25].title}  minititle={Details[25].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[25].title,
                    minititle:Details[25].minititle,
                    imageSource:Details[25].imageSource,
                })}/>
                <Sales imageSource={{uri:'https://images.samsung.com/is/image/samsung/p6pim/de/2202/gallery/de-galaxy-s22-s901-sm-s901biddeub-530796744?$730_584_PNG$'}}
                price={Details[26].title}  minititle={Details[26].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[26].title,
                    minititle:Details[26].minititle,
                    imageSource:Details[26].imageSource,
                })}/>
                <Sales imageSource={{uri:'https://images.samsung.com/is/image/samsung/p6pim/de/2202/gallery/de-galaxy-s22-s901-sm-s901bzkdeub-530796820?$730_584_PNG$'}}
                price={Details[27].title}  minititle={Details[27].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[27].title,
                    minititle:Details[27].minititle,
                    imageSource:Details[27].imageSource,
                })}/>
                <Sales imageSource={{uri:'https://images.samsung.com/is/image/samsung/p6pim/de/sm-s901blvdeub/gallery/de-galaxy-s22-s901-410307-sm-s901blvdeub-533231192?$684_547_PNG$'}}
                price={Details[28].title}  minititle={Details[28].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[28].title,
                    minititle:Details[28].minititle,
                    imageSource:Details[28].imageSource,
                })}/>
                <Sales imageSource={{uri:'https://image-us.samsung.com/us/smartphones/galaxy-s23/configurator/D1_D2-Combo-KV-Configurator-DT-800x600.jpg?$product-details-jpg$'}}
                price={Details[29].title}  minititle={Details[29].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[29].title,
                    minititle:Details[29].minititle,
                    imageSource:Details[29].imageSource,
                })}/>
                <Sales imageSource={{uri:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-13-pro-max-graphite-2023?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1679072989055'}}
                price={Details[30].title}  minititle={Details[30].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[30].title,
                    minititle:Details[30].minititle,
                    imageSource:Details[30].imageSource,
                })}/>
                <Sales imageSource={{uri:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-13-pro-max-gold-2023?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1679072988850'}}
                price={Details[31].title}  minititle={Details[31].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[31].title,
                    minititle:Details[31].minititle,
                    imageSource:Details[31].imageSource,
                })}/>
                <Sales imageSource={{uri:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-model-unselect-gallery-2-202303_GEO_EMEA?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1676930655577'}}
                price={Details[32].title}  minititle={Details[32].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[32].title,
                    minititle:Details[32].minititle,
                    imageSource:Details[32].imageSource,
                })}/>
                <Sales imageSource={{uri:'https://www.gadgetmaya.com/wp-content/uploads/2023/06/Huawei-Nova-11.jpg'}}
                price={Details[33].title}  minititle={Details[33].minititle} onPress={() => navigation.navigate('Card',{
                    title:Details[33].title,
                    minititle:Details[33].minititle,
                    imageSource:Details[33].imageSource,
                })}/>
                </View>
        </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    fixed: {
        flexDirection: 'row',
        top: 0,
        left: 0,
        right: 0,
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
      },
    titleText: {
        fontSize: 20,
        marginLeft: 25,
        color: 'grey',
      },
      sales:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 10,
        marginBottom: 75,
    },
})