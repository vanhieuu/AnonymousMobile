import {RouteProp, useRoute} from '@react-navigation/core';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View, Colors, Image} from 'react-native-ui-lib';
import {RootStackParamList} from '../../nav/RootStack';
import Banner from './components/Banner';

const DetailItems = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'DetailItems'>>();
  const product = route.params.item;
  return (
    <View  backgroundColor={'#ff7961'}>
      <Banner />
      <View bg-white marginT-20>
        <View
          row
          style={{justifyContent: 'space-between'}}
          marginL-12
          marginT-10>
          <View>
            <Text h17 color={Colors.primary}>
              {product.name}
            </Text>
          </View>
          <View>
          <Text marginR-12>aaaa</Text>
            <Image
              assetGroup="icons"
              assetName="ic_ticket"
              style={{height: 40, width: 40}}
              
            />
            
          </View>
        </View>
        <Text h17 black marginL-12>
          {product.discountPrice}
        </Text>
        <Text
          h13
          color={'#e0e0e0'}
          marginL-12
          style={{textDecorationLine: 'line-through'}}>
          {product.listedPrice}
        </Text>
        <Text h17 black marginL-12>
          {product.quantity}
        </Text>
        <Text h17 black>
          {product.tags}
        </Text>
        <View height={1} bg-dark80 marginT-12 />
        <View marginH-12 marginB-12>
          {product.description}
        </View>
      </View>
    </View>
  );
};

export default DetailItems;

const styles = StyleSheet.create({});
