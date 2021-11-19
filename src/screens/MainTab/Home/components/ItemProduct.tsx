import {NavigationProp, useNavigation} from '@react-navigation/core';
import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity,Animated} from 'react-native';
import {View, Card, Text, Colors, Image} from 'react-native-ui-lib';
import {RootStackParamList} from '../../../../nav/RootStack';
import {IProduct} from '../../../../types/IProduct';

const widthScreen = Dimensions.get('window').width;

interface Props extends IProduct{
  onPress:() =>void
}


const ItemProduct = ({listphotos,onPress}:Props) => {
  return (
          <View style={styles.container}>
              <TouchableOpacity onPress={onPress}>
                {listphotos.map((item,index) =>{
                  return(
                    <View>
                      <Animated.Image
                          source={item}
                      />
                    </View>
                  )
                })}
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
