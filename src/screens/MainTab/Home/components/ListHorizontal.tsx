import React from 'react';
import {
  Alert,
  FlatList,
  LayoutAnimation,
  Platform,
  StyleSheet,
  UIManager,
} from 'react-native';
import {Colors, Card, Text, View} from 'react-native-ui-lib';
import URL from '../../../../config/Api';
import { IResProduct } from '../../../../redux/authProductSlice';

import {IProduct} from '../../../../types/IProduct';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const ItemList = ({item}: {item: IProduct}) => {
  return (
    <Card style={styles.containerItem} onPress={() => console.log('PressItem')}>
      <Card.Section
        imageSource={{uri: item.listphotos.shift()}}
        imageStyle={{height: 190, width: 190}}
      />
      {item.is_hot === true ? (
        <>
          <View paddingL-16 paddingR-6 marginB-11>
            <Text m15 marginT-10 numberOfLines={1}>
              {item.name}
            </Text>
            <Text b13 color={Colors.Pro}>
              Price:{item.listedPrice} vnđ
            </Text>
          </View>
        </>
      ) : (
        <>
          <View paddingL-16 paddingR-6 marginB-11>
            <Text m15 marginT-10 numberOfLines={1}>
              {item.name}
            </Text>
            <Text b13 color={Colors.Pro}>
              Price:{item.listedPrice} vnđ
            </Text>
          </View>
        </>
      )}
    </Card>
  );
};

const ListHorizontal = () => {
  const [products, setProducts] = React.useState<IProduct[]>();
  const [loading, setLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
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
        //   console.log(json.product)
        //   setLoading(false);
        //   return;
        // }
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        setProducts(json.product);
        console.log(json.product);
        setLoading(false);
        return json;
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  return (
    <View paddingV-12 backgroundColor="#fff">
      <View row spread paddingH-16 centerV>
        <Text h24>Hot Item </Text>
        <Text h15 color={Colors.dark70}>
          More
        </Text>
      </View>
      {loading ? (
        <View row paddingH-16 paddingV-12>
          <Card
            style={[
              styles.containerItem,
              {height: 251, backgroundColor: Colors.dark40},
            ]}
          />
          <Card
            style={[
              styles.containerItem,
              {height: 251, backgroundColor: Colors.dark40},
            ]}
          />
          <Card
            style={[
              styles.containerItem,
              {height: 251, backgroundColor: Colors.dark40},
            ]}
          />
        </View>
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={true}
          data={products}
          keyExtractor={item => item.tags.toString()}
          contentContainerStyle={{paddingHorizontal: 16, paddingVertical: 12}}
          renderItem={({item}) => {
            return <ItemList item={item} />;
          }}
        />
      )}
      <View paddingH-16 centerV>
        <Text h24> Product</Text>
      </View>
    </View>
  );
};

export default ListHorizontal;

const styles = StyleSheet.create({
  containerItem: {
    width: 190,
    marginRight: 12,
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
