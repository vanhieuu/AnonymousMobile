import {RouteProp, useRoute} from '@react-navigation/core';
import React from 'react';
import {Animated, Dimensions, StyleSheet} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {RootStackParamList} from '../../nav/RootStack';
import {Text, View, Colors, Assets, Image, Avatar} from 'react-native-ui-lib';
import Banner from './components/Banner';
import HeaderDetail from './components/HeaderDetail';
import ProductInfo from './components/ProductInfo';
import * as Icon from 'react-native-iconly';
import dayjs from 'dayjs';
import {getDayTime} from '../../ultils/handleString';
const scrollY = React.useRef(new Animated.Value(0)).current;
const widthBanner = Dimensions.get('window').width;
const heightBanner = (widthBanner / 1600) * 1000;

const DetailItems = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'DetailItems'>>();
  const product = route.params.item;
  const imgBack = product.listphotos;

  return (
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
        <Image
          // source={{
          //   uri: product.listphotos.find(element => element !== undefined),
          // }}
          source={imgBack[product.quantity % 10]}
          style={{
            height: heightBanner,
            width: widthBanner,
          }}
          overlayType={Image.overlayTypes.BOTTOM}
        />
      </View>

      <Text h28 marginH-16 marginV-12>
        {product.name}
      </Text>
      <View row centerV marginH-16 paddingV-4>
        <Icon.Chat color={Colors.grey10} />
      </View>
      <View row centerV marginH-16 paddingV-4>
        <Icon.Calendar color={Colors.grey10} />
        <Text marginL-12>
          Ngày tạo: {dayjs(product.created_at).format('MM/DD/YYYY')}
        </Text>
      </View>
      <View row centerV marginH-16 paddingV-4 marginB-12>
        <Icon.Ticket color={Colors.grey10} />
        <Text marginL-12>{product.discountPrice}</Text>
      </View>

      <Avatar size={40} />
    </Animated.ScrollView>
  );
};

export default DetailItems;

const styles = StyleSheet.create({});
