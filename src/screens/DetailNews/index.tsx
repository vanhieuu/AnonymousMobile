import {NavigationProp, RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  UIManager,
  useWindowDimensions,
} from 'react-native';
import {RootStackParamList} from '../../nav/RootStack';
import { Text, View} from 'react-native-ui-lib';
import {Header} from 'react-native-elements';
import RenderHTML from 'react-native-render-html';


if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const DetailNews = () => {
  const {goBack} = useNavigation()

  const {width} = useWindowDimensions();
  const route = useRoute<RouteProp<RootStackParamList, 'DetailNews'>>();
  console.log(route.name)
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
        leftComponent={{icon: 'back', onPress: () => goBack()}}
      />
      <View>
        <View style={{justifyContent: 'space-between', left: 1, padding: 20}}>
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
