import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/core';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, useWindowDimensions} from 'react-native';
import {RootStackParamList} from '../../nav/RootStack';
import {Colors, Text, View} from 'react-native-ui-lib';
import {Header} from 'react-native-elements';
import RenderHTML from 'react-native-render-html';
import {MainTabParamList} from '../../nav/MainTab';

const DetailNews = () => {
  const {width} = useWindowDimensions();
  const route = useRoute<RouteProp<RootStackParamList, 'DetailNews'>>();
  const {goBack, navigate} = useNavigation<NavigationProp<MainTabParamList>>();
  const detailNews = route.params?.item;
  const source = {
    html: `
    <p>${detailNews.content}</p>`,
  };
  return (
    <ScrollView>
      <Header
        placement="center"
        containerStyle={{
          backgroundColor: '#ffcdd2',
          justifyContent: 'space-around',
        }}
        barStyle="light-content"
        statusBarProps={{barStyle: 'light-content'}}
      />
      <View>
        <View style={{justifyContent: 'space-between', left: 1,padding:20}}>
          <RenderHTML source={source} contentWidth={width} />
          <Text>{detailNews?.creator}</Text>
        </View>

        <View height={2} bg-dark80 marginT-20 />
      </View>
    </ScrollView>
  );
};

export default DetailNews;

const styles = StyleSheet.create({});
