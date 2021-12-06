
import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native-ui-lib';

import Banner from './components/Banner';
import ProductInfo from './components/ProductInfo';

const DetailItems = () => {

  return (
    <View backgroundColor={'#ff7961'}>
      <Banner />
      <ProductInfo />
    </View>
  );
};

export default DetailItems;

const styles = StyleSheet.create({});
