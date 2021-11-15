import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
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
  const [product, setProduct] = React.useState<IProduct[]>([]);
  return (
    <FlatList
      data={product}
      renderItem={({item}) => {
        return <ItemProduct item={item} />;
      }}
      keyExtractor={(item, index) => item.id.toString()}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

export default ListProduct;

const styles = StyleSheet.create({});
