import {RouteProp, useRoute} from '@react-navigation/core';
import React from 'react';
import {FlatList, LayoutAnimation, StyleSheet} from 'react-native';
import { View } from 'react-native-ui-lib';

import {useSelector} from 'react-redux';
import URL from '../../../../config/Api';
import {RootStackParamList} from '../../../../nav/RootStack';
import {IUser} from '../../../../redux/authSlice';

import {RootState} from '../../../../redux/store';
import {IProduct} from '../../../../types/IProduct';
import ItemProduct from './ItemProduct';

interface Props {
  ListHeaderComponent:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
}

const ListProduct = ({ListHeaderComponent}:Props) => {
  // const token = useSelector<RootState, string>(state => state.auth.accessToken);
  const productID = useSelector<RootState, string>(
    state => state.product.productId,
  );

  const [loading, setLoading] = React.useState(false);
  const [product, setProduct] = React.useState<IProduct[]>();
  const token = useSelector<RootState, string>(state => state.auth.accessToken);

  React.useEffect(() => {
  
    fetch(URL.Products, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(json => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        setProduct(json);
        setLoading(false);
        return json;
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <FlatList
      style={{alignContent: 'space-between'}}
      data={product}
      numColumns={2}
      key={2}
      renderItem={({item}) => {
        return <ItemProduct item={item} />;
      }}
      keyExtractor={(item, index) => item._id.toString()}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

export default ListProduct;

const styles = StyleSheet.create({});
