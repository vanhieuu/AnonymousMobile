import {NavigationProp, RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, View, Card, Image, Carousel, Colors} from 'react-native-ui-lib';
import {RootStackParamList} from '../../../nav/RootStack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MainTabParamList } from '../../../nav/MainTab';
const widthScreen = Dimensions.get('window').width;
const widthCarousel = widthScreen - 32;
const heightCarousel = (widthCarousel / 344) * 242;

const ItemBanner = ({image}: {image: string}) => {
  return (
    <View flex centerV backgroundColor={Colors.black}>
      <Image
        overlayType={Image.overlayTypes.BOTTOM}
        style={{flex: 1}}
        source={{uri: image}}
      />
    </View>
  );
};

const Banner = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'DetailItems'>>();
  const product = route.params.item;
  const navigation = useNavigation<NavigationProp<MainTabParamList>>()
  const onPressGoBack = React.useCallback(()=>{
        navigation.navigate('News')
    // console.log(navigation.navigate)
  },[])
  return (
    <View style={styles.container}>
      <Icon
            name='long-arrow-left'
            size={20}
            color={Colors.black}
            onPress={onPressGoBack}
          />
      <Carousel
        autoplay={false}
        pageWidth={widthCarousel}
        containerStyle={{height: heightCarousel}}
        loop
        pageControlProps={{
          size: 10,
          containerStyle: styles.loopCarousel,
          color: Colors.primary,
          inactiveColor: Colors.white,
      
        }}
        pageControlPosition={Carousel.pageControlPositions.OVER}>
        {product.listphotos.map((image, i) => {
          return <ItemBanner key={i.toString()} image={image} />;
        })}
      </Carousel>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
    // marginTop: heightCarousel / 2 - 32,
    width: widthCarousel,
    height: heightCarousel,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  loopCarousel: {
    position: 'absolute',
    bottom: 20,
    left: 10,
  },
});
