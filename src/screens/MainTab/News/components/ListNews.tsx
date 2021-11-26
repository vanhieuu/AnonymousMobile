import React from 'react';
import {
  Alert,
  FlatList,
  LayoutAnimation,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import URL from '../../../../config/Api';
import {INewsData} from '../../../../redux/newSlice';
import {RootState} from '../../../../redux/store';
import {IResNews} from '../../../../types/IProduct';
import ItemCard from './ItemCard';

interface Props {
  ListHeaderComponent:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
}

const ListNews = ({ListHeaderComponent}: Props) => {
  const [news, setNews] = React.useState<INewsData[]>([]);
  const [loading, setLoading] = React.useState(true);
  const pageNumber = useSelector<RootState, number>(state => state.news.page);

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
       
        // console.log(json);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        setNews(json.data);
        setLoading(false);
        console.log(json);
        return json;
      });
  }, []);

  return (
    <FlatList
      data={news}
      renderItem={({item}) => {
        return <ItemCard item={item} />;
      }}
      keyExtractor={(item, index) => item._id.toString()}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

export default ListNews;

const styles = StyleSheet.create({});
