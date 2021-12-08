import {NavigationProp, useNavigation} from '@react-navigation/core';
import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {View, Card, Text, Image} from 'react-native-ui-lib';
import { numberFormat } from '../../../../config/formatCurrency';
import {RootStackParamList} from '../../../../nav/RootStack';
import {IProduct} from '../../../../types/IProduct';

const widthScreen = Dimensions.get('window').width;



const ItemProduct = ({item}: {item: IProduct}) => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const onPressItem = React.useCallback(() => {
    navigate('DetailItems', {
      item,
    });
  }, []);
  return (
    <View
      backgroundColor="#Fff"
      style={{justifyContent: 'space-between'}}
      marginH-12
      marginR-4>
      <TouchableOpacity onPress={onPressItem}>
        <Card style={styles.container}>
          <View style={styles.contentItem}>
            <Image
              style={{
                height: 100,
                width: 150,
                justifyContent: 'center',
                alignSelf: 'center',
                marginRight: 15,
              }}
              source={{
                uri: item.listphotos.find(element => element !== undefined),
              }}
              resizeMode="contain"
            />
          </View>
          <View>
            <View>
              <View marginB-8 marginH-20>
                <Text m13 marginT-10 numberOfLines={2} color={'#6f6f6f'}>
                  {item.name}
                </Text>
                <Text b13 color={'#7e7d7d'}>
                  {/* {item.listedPrice.toLocaleString('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                  })} */}
                  {numberFormat.format(item.listedPrice)}
                </Text>
              </View>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

export default ItemProduct;

const styles = StyleSheet.create({
  container: {
    width: widthScreen - 210,
    height: widthScreen - 210,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginBottom: 12,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  contentItem: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    height: 100,
    width: 200,
  },
  imgStyle: {
    height: 150,
    width: 150,
    justifyContent: 'center',
  },
});
