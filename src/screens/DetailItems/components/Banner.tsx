import {RouteProp, useRoute} from '@react-navigation/core';
import React from 'react';
import {Dimensions, Platform, StyleSheet, UIManager} from 'react-native';
import {View, Image, Carousel, Colors} from 'react-native-ui-lib';
import {RootStackParamList} from '../../../nav/RootStack';



const widthScreen = Dimensions.get('window').width;
const widthCarousel = widthScreen - 32;
const heightCarousel = (widthCarousel / 344) * 242;
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
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

  return (
    <View style={styles.container}>
      <Carousel
        autoplay={false}
        pageWidth={widthCarousel}
        containerStyle={{height: '100%'}}
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
    marginTop: 10,
  },
  loopCarousel: {
    position: 'absolute',
    bottom: 20,
    left: 10,
  },
});
