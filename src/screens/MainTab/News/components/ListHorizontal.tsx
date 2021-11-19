import React from 'react';
import {
  FlatList,
  LayoutAnimation,
  Platform,
  StyleSheet,
  TouchableOpacity,
  UIManager,
} from 'react-native';
import {View, Text, Colors, Card} from 'react-native-ui-lib';

import URL from '../../../../config/Api';
import {INewsData} from '../../../../redux/newSlice';
import {RootState} from '../../../../redux/store';
import {IResNews} from '../../../../types/IProduct';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const ItemList = ({item}: {item: INewsData}) => {
  return (
    <Card style={styles.containerItem} onPress={() => console.log('onPress')}>
      <View paddingL-16 paddingR-6 marginB-11>
        <Text m15 marginT-10 numberOfLines={1} color={Colors.primary}>
          {item.title}
        </Text>
        <Text b13 color={Colors.dark70}>
          {item.title}
        </Text>
      </View>
      <View absT bg-white marginT-10 marginL-10 br100 paddingH-8 paddingV-2>
        <Text h8 color={'blue'}>
          {item.creator}
        </Text>
      </View>
    </Card>
  );
};

const ListHorizontal = () => {
  const [news, setNews] = React.useState<INewsData[]>();
  const [loading, setLoading] = React.useState(true);
  // const pageNumber = useSelector<RootState, number>(state => state.news.page);
  const [pageNumber,setPageNumber] = React.useState(1)
  React.useEffect(() => {
    fetch(URL.News(pageNumber), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((json: IResNews) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        setNews(json.data);
        setLoading(false);
        // console.log(json.news);
        return json;
      })
      .catch(error => {
        console.error(error);
      });
  }, [pageNumber]);
  return (
    <View paddingV-20 backgroundColor={Colors.white}>
      <View paddingH-16 centerV>
        <Text h26>News</Text>
      </View>
      {loading ? (
        <View paddingH-16 paddingV-12>
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
          showsHorizontalScrollIndicator={true}
          data={news}
          contentContainerStyle={{paddingHorizontal: 16, paddingVertical: 12}}
          renderItem={({item}) => {
            return <ItemList item={item} />;
          }}
        />
        
      )}
      <View style={{alignSelf:'flex-end',marginRight:10}}>
        <TouchableOpacity onPress={() =>{setPageNumber(pageNumber+1)}}>
          <Text h16>Next Page</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default ListHorizontal;

const styles = StyleSheet.create({
  containerItem: {
    width: '100%',
    marginRight: 12,
    backgroundColor: 'white',
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
});
