import {RouteProp, useRoute} from '@react-navigation/core';
import React from 'react';
import {StyleSheet} from 'react-native';
import {RootStackParamList} from '../../../nav/RootStack';
import {Colors, Text, View, Image} from 'react-native-ui-lib';

interface Props {
  ListHeaderComponent:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
}

const ProductInfo = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'DetailItems'>>();
  const itemInfo = route.params.item;
  return (
    <View bg-white marginT-20>
      <View row style={{justifyContent: 'space-between'}} marginL-12 marginT-10>
        <View>
          <Text h17 color={Colors.primary}>
            {itemInfo.name}
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
        {itemInfo.discountPrice}
      </Text>
      <Text
        h13
        color={'#e0e0e0'}
        marginL-12
        style={{textDecorationLine: 'line-through'}}>
        {itemInfo.listedPrice}
      </Text>
      <Text h17 black marginL-12>
        {itemInfo.quantity}
      </Text>
      <Text h17 black>
        {itemInfo.tags}
      </Text>
      <View height={1} bg-dark80 marginT-12 />
      <View marginH-12 marginB-12>
        {itemInfo.description}
      </View>
    </View>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({});
