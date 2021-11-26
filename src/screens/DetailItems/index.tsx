import {RouteProp, useRoute} from '@react-navigation/core';
import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, View, Card, Image, Carousel, Colors} from 'react-native-ui-lib';
import {RootStackParamList} from '../../nav/RootStack';
const widthScreen = Dimensions.get('window').width;
const widthCarousel = widthScreen - 32;
const heightCarousel = (widthCarousel / 344) * 242;

const ItemBanner = ({image}: {image: string}) => {
  return (
    <View flex centerV>
      <Image
        overlayType={Image.overlayTypes.BOTTOM}
        style={{flex: 1}}
        source={{uri: image}}
      />
    </View>
  );
};

const DetailItems = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'DetailItems'>>();
  const product = route.params.item;
  return (
    <View style={styles.container}>
      <Carousel
        autoplay={false}
        pageWidth={widthCarousel}
        containerStyle={{height: heightCarousel}}
        loop
        pageControlProps={{
          size: 8,
          containerStyle: styles.loopCarousel,
          color: Colors.primary,
          inactiveColor: Colors.white,
        }}
        pageControlPosition={Carousel.pageControlPositions.OVER}>
        {product.listphotos.map((image, i) => {
          return <ItemBanner key={i} image={image} />;
        })}
      </Carousel>
      <View flex center style={{justifyContent: 'flex-end'}}>
        <Text h17 black>
          {product.listedPrice}
        </Text>
        <Text h17 black>
          {product.quantity}
        </Text>
        <Text h17 black>
          {product.tags}
        </Text>
      </View>
      <View height={1} bg-dark80 marginT-12 />
      <View marginH-24 marginB-32>
        {product.description}
      </View>
    </View>
  );
};

export default DetailItems;

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: heightCarousel / 2 - 32,
    width: widthCarousel,
    height: heightCarousel,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  loopCarousel: {
    position: 'absolute',
    bottom: 15,
    left: 10,
  },
});
