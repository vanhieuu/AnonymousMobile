import {RouteProp, useRoute} from '@react-navigation/core';
import React from 'react';
import {
  FlatList,
  LayoutAnimation,
  Platform,
  StyleSheet,
  UIManager,
} from 'react-native';
import {Colors, Card, Text, View} from 'react-native-ui-lib';
import {useSelector} from 'react-redux';
import URL from '../../../../config/Api';
import {RootStackParamList} from '../../../../nav/RootStack';
import {RootState} from '../../../../redux/store';

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
        imageSource={{
          uri: item.listphotos.find(element => element !== undefined),
        }}
        imageStyle={{height: 190, width: 190}}
      />
      <View paddingL-16 paddingR-6 marginB-11>
        <Text m15 marginT-10 numberOfLines={1}>
          {item.name}
        </Text>
        <Text b13 color={Colors.Pro}>
          Price:{item.listedPrice} vnđ
        </Text>
      </View>
    </Card>
  );
};

const ListHorizontal = () => {
  const [products, setProducts] = React.useState<IProduct[]>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const token = useSelector<RootState, string>(state => state.auth.accessToken);
  const [didMount, setDidMount] = React.useState<boolean>(false);
  React.useEffect(() => {
    setLoading(true);
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
        setProducts(json);
        setLoading(false);
        return json;
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <View paddingV-10 backgroundColor="#fff">
      <View row spread paddingH-16 centerV>
        <Text h24>Sản phẩm nổi bật</Text>
        <Text h15 color={Colors.dark70}>
          Xem thêm
        </Text>
      </View>
      {loading ? (
        <View row paddingH-11 paddingV-12>
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
          keyExtractor={item => item._id.toString()}
          contentContainerStyle={{paddingHorizontal: 16, paddingVertical: 312}}
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
    elevation: 2,
  },
});
