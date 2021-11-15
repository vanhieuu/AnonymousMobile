import {NavigationProp, useNavigation} from '@react-navigation/core';
import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {View, Card, Text, Colors, Image} from 'react-native-ui-lib';
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
    <View backgroundColor="#fff">
      <TouchableOpacity onPress={onPressItem}>
        <Card style={styles.container} row>
          <View style={styles.contentItem}>
            <Image
              style={styles.imgStyle}
              source={{
                uri: item.product_item[0]?.item.img,
              }}
              resizeMode="contain"
            />
          </View>
          <View>
            <View row>
              <View
                backgroundColor={'#f7b500'}
                br100
                marginT-10
                marginL-10
                paddingV-2
                paddingH-8>
                <Text h8 color={Colors.white}>
                  Limited
                </Text>
              </View>
            </View>

            <View paddingL-16 paddingR-6 marginB-11>
              <Text h16 marginT-10 numberOfLines={1} color={'#6f6f6f'}>
                {item.name}
              </Text>
              <Text b13 color={'#7E7D7D'}>
                Price:{item.price}
              </Text>
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
    width: widthScreen - 32,
    backgroundColor: Colors.blue80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    alignSelf: 'center',
    marginBottom: 12,
  },
  contentItem: {
    overflow: 'hidden',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: 'red',
    height: 150,
    width: 150,
  },
  imgStyle: {
    height: 150,
    width: 150,
  },
});
