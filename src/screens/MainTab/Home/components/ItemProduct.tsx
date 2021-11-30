import {NavigationProp, useNavigation} from '@react-navigation/core';
import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {View, Card, Text, Colors, Image} from 'react-native-ui-lib';
import {RootStackParamList} from '../../../../nav/RootStack';
import {IProduct} from '../../../../types/IProduct';

const widthScreen = Dimensions.get('window').width;
const ItemProduct = ({item}: {item: IProduct}) => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  // let firstItem = item.listphotos.find(element=>element!==undefined);
  
  const onPressItem = React.useCallback(() => {
    navigate('DetailItems', {
      item,
    });
  }, []);
  return (
    <View backgroundColor="#Fff">
      <TouchableOpacity onPress={onPressItem}>
        <Card style={styles.container} row>
          <View style={styles.contentItem}>
            <Image
              style={{height: 100, width: 100}}
              source={{uri:item.listphotos.find(element=>element!==undefined)}}
              resizeMode="contain"
            />
          </View>

          <View>
            <View row>
              <View marginB-11 marginH-60>
                <Text h24 marginT-10 numberOfLines={1} color={'#6f6f6f'}>
                  {item.name}
                </Text>
                <Text b13 color={'#7e7d7d'}>
                  {item.listedPrice}
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
    width: widthScreen - 32,
    backgroundColor: '#ffcdd2',
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
    height: 100,
    width: 100,
  },
  imgStyle: {
    height: 150,
    width: 150,
  },
});
