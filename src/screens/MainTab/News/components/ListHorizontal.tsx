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
import { useSelector } from 'react-redux';

import URL from '../../../../config/Api';

import {INewsData} from '../../../../redux/newSlice';
import { RootState } from '../../../../redux/store';

import ItemCard from './ItemCard';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const ListHorizontal = () => {
  const [news, setNews] = React.useState<INewsData[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [pageNumber, setPageNumber] = React.useState(1);
  const token = useSelector<RootState, string>(state => state.auth.accessToken);
  const onEndReached = React.useCallback(() => {
    setPageNumber(pageNumber + 1);
  }, [pageNumber]);

  const loadingNews = React.useCallback(async () => {
  
    await fetch(URL.News(pageNumber), {
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
        setNews([...news, ...json.data]);
        setLoading(false);
        // console.log(json.news);

        return json;
      })
      .catch(error => {
        console.error(error);
      });
  }, [pageNumber]);

  React.useEffect(() => {
    loadingNews();
  }, []);

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
