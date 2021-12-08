import {RouteProp, useRoute} from '@react-navigation/core';
import React from 'react';
import {
  Animated,
  Dimensions, 
  StyleSheet,
} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {RootStackParamList} from '../../nav/RootStack';
import {Text, View, Colors, Image, Carousel} from 'react-native-ui-lib';
import * as Icon from 'react-native-iconly';
import dayjs from 'dayjs';
import {numberFormat} from '../../config/formatCurrency';
import HeaderDetail from './components/HeaderDetail';

const widthBanner = Dimensions.get('window').width;
const heightBanner = (widthBanner / 1600) * 1000;

const ItemBanner = ({image}: {image: string}) => {
  return (
    <View flex centerV backgroundColor={Colors.black}>
      <Image
        overlayType={Image.overlayTypes.BOTTOM}
        style={{
          width: widthBanner,
          height: heightBanner,
        }}
        source={{uri: image}}
      />
    </View>
  );
};

const DetailItems = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'DetailItems'>>();
  const product = route.params.item;
  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <HeaderDetail scrollY={scrollY} title={product.name} />

      <Animated.ScrollView
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          {
            useNativeDriver: true,
          },
        )}
        contentContainerStyle={{
          paddingBottom: getBottomSpace(),
        }}>
        <View
          style={{
            height: heightBanner,
            width: widthBanner,
          }}>
          <Carousel
            autoplay={false}
            pageWidth={widthBanner}
            containerStyle={{height: '100%'}}
            loop
            pageControlProps={{
              size: 10,
              color: Colors.primary,
              inactiveColor: Colors.white,
            }}
            pageControlPosition={Carousel.pageControlPositions.OVER}>
            {product.listphotos.map((image, i) => {
              return <ItemBanner key={i.toString()} image={image} />;
            })}
          </Carousel>
        </View>

        <Text h28 marginH-16 marginV-5>
          {product.name}
        </Text>
        <View row centerV marginH-16 paddingV-4>
          <Icon.Calendar color={Colors.grey10} />
          <Text marginL-12>
            Hết hạn: {dayjs(product.deleted_at).format('DD/MM/YYYY')}
          </Text>
        </View>
        <View row centerV marginH-16 paddingV-3 marginB-5>
          <Icon.Discount color={Colors.grey10} />
          <Text marginL-12 color={Colors.primary}>
            Giá ưu đãi: {numberFormat.format(product.discountPrice)}
          </Text>
        </View>
        <View row centerV marginH-16 paddingV-4 marginB-5>
          <Icon.Ticket color={Colors.grey10} />
          <Text marginL-12>Giá gốc:</Text>
          <Text style={{textDecorationLine: 'line-through'}} marginL-12>
            {numberFormat.format(product.listedPrice)}
          </Text>
        </View>
        <View row centerV marginH-16 paddingV-4 marginB-5>
          <Icon.Ticket color={Colors.grey10} />
          <Text marginL-12>Số lượng: {product.quantity}</Text>
        </View>
        <View row centerV marginH-16 paddingV-6 marginB-5>
          <Icon.Filter color={Colors.grey10} />
          <Text marginL-12>Hashtag: {product.tags}</Text>
        </View>
        <View height={1} bg-dark80 marginT-12 />
        <View row centerV marginH-16 paddingV-6 marginB-5>
          <Icon.Chat color={Colors.grey10} />
          <Text marginL-12>Mô tả: {product.description}</Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default DetailItems;

const styles = StyleSheet.create({});
