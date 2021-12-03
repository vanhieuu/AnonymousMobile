import {NavigationProp, useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  LayoutAnimation,
  Platform,
  StyleSheet,
  TouchableOpacity,
  UIManager,
} from 'react-native';
import {View, Text, Colors, Card} from 'react-native-ui-lib';

import URL from '../../../../config/Api';
import {RootStackParamList} from '../../../../nav/RootStack';
import {INewsData} from '../../../../redux/newSlice';
import {RootState} from '../../../../redux/store';
import {IResNews} from '../../../../types/IProduct';
import ItemCard from './ItemCard';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const ItemList = ({item}: {item: INewsData}) => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  const onPressNews = React.useCallback(() => {
    navigate('DetailNews', {
      item,
    });
  }, []);

  return (
    <Card style={styles.containerItem} onPress={() => console.log('Press Me')}>
      <View paddingL-16 paddingR-6 marginB-11>
        <Text b13 color={Colors.red}>
          {item.title}
        </Text>
      </View>
      <View
        absT
        bg-white
        marginT-10
        marginL-10
        br100
        paddingH-8
        paddingV-2
        backgroundColor={Colors.red}>
        <Text h8 color={'blue'}>
          {item.creator}
        </Text>
      </View>
    </Card>
  );
};

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
        <ActivityIndicator size="large" color={Colors.blue} />
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
        numColumns={3}
        key={3}
        onEndReached={onEndReached}
        onEndReachedThreshold={0}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={RenderLoader}
      />
    </View>
  );
};

export default ListHorizontal;

const styles = StyleSheet.create({
  containerItem: {
    width: '100%',
    marginRight: 12,
    backgroundColor: 'blue',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 12,
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center',
  },
});
