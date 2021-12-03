import {RouteProp, useRoute} from '@react-navigation/core';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View, Colors, Image} from 'react-native-ui-lib';
import {RootStackParamList} from '../../nav/RootStack';
import Banner from './components/Banner';
import ProductInfo from './components/ProductInfo';

const DetailItems = () => {
  // const route = useRoute<RouteProp<RootStackParamList, 'DetailItems'>>();
  // const product = route.params.item;
  return (
    <View backgroundColor={'#ff7961'}>
      <Banner />
      <ProductInfo />
    </View>
  );
};

export default DetailItems;

const styles = StyleSheet.create({});
