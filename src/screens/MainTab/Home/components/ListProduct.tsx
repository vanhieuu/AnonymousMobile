import React from 'react';
import {
  Alert,
  FlatList,
  LayoutAnimation,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import RNGestureHandlerButton from 'react-native-gesture-handler/lib/typescript/components/GestureHandlerButton';
import {useSelector} from 'react-redux';
import URL from '../../../../config/Api';
import { IResProduct } from '../../../../redux/authProductSlice';

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

const ListProduct = ({ListHeaderComponent}: Props) => {
  const token = useSelector<RootState, string>(state => state.auth.accessToken);
  const productID = useSelector<RootState, string>(state =>state.auth.accessToken)
  const [loading, setLoading] = React.useState(true);
  const [product, setProduct] = React.useState<IProduct[]>();
  React.useEffect(() => {
    if (!token ) return;

    fetch(URL.Products, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((json: IResProduct) => {
        // const success = json.success;
        // if (!success) {
        //   Alert.alert('Thông báo', json.message);
        //   setLoading(false);
        //   return;
        // }
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        setProduct(json.product);
        setLoading(false);
        return json;
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <FlatList
      data={product}
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
