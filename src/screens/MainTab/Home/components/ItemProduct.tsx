import {NavigationProp, useNavigation} from '@react-navigation/core';
import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {View, Card, Text, Image,Colors} from 'react-native-ui-lib';

import {numberFormat} from '../../../../config/formatCurrency';
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
      backgroundColor='#fff'
      style={{justifyContent: 'space-between'}}
      marginH-12
      marginR-3
      
      >

      <TouchableOpacity onPress={onPressItem}>
        <Card style={styles.container}>
          <View style={styles.contentItem}>
            <Image
              style={{
                height: 100,
                width: 150,
                alignSelf: 'center',
              }}
              source={{
                uri: item.listphotos.find(element => element !== undefined),
              }}
              resizeMode="contain"
            />
          </View>
          <View>
            <View>
              <View paddingL-5 paddingR-20 marginB-11>
                <Text m17 marginT-10 numberOfLines={2} color={'#6f6f6f'}>
                  {item.name}
                </Text>
                <Text b13 color={'#7e7d7d'}>
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
    marginBottom: 12,
    alignItems:'center'
    
    
  },
  contentItem: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    height: 100,
    width: 200,
  },
  // imgStyle: {
  //   height: 150,
  //   width: 150,
  //   justifyContent: 'center',
  // },
});
