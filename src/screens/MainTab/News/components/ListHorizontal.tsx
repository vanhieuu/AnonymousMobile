import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  LayoutAnimation,
  Platform,
  StyleSheet,
  UIManager,
} from 'react-native';
import {View, Text, Colors} from 'react-native-ui-lib';

import URL from '../../../../config/Api';

import {INewsData} from '../../../../redux/newSlice';

import ItemCard from './ItemCard';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const ListHorizontal = () => {
  const [news, setNews] = React.useState<INewsData[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState(1);
  const onEndReached = React.useCallback(() => {
    setPageNumber(pageNumber + 1);
  }, [pageNumber]);
  React.useEffect(() => {
    setLoading(true);
    fetch(URL.News(pageNumber), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(json => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        setNews([...news, ...json.data]);
        setLoading(false);
        // console.log(json.news);
        return json;
      })
      .catch(error => {
        console.error(error);
      });
  }, [pageNumber]);

  const RenderLoader = () => {
    return loading ? (
      <View>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    ) : null;
  };

  return (
    <View paddingV-20 backgroundColor={'#ffff'}>
      <View paddingH-16 centerV>
        <Text h26>News</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={true}
        data={news}
        renderItem={({item}) => {
          return <ItemCard item={item} />;
        }}
        numColumns={2}
        key={2}
        onEndReached={onEndReached}
        onEndReachedThreshold={0}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={RenderLoader}
      />
    </View>
  );
};

export default ListHorizontal;

const styles = StyleSheet.create({});
