import {NavigationProp, RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {Card, Colors, Text, View} from 'react-native-ui-lib';
import {RootStackParamList} from '../../../../nav/RootStack';
import {INewsData} from '../../../../redux/newSlice';
import RenderHTML from 'react-native-render-html';
const widthScreen = Dimensions.get('window').width;

const ItemCard = ({item}: {item: INewsData}) => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const {width} = useWindowDimensions();
  const route = useRoute<RouteProp<RootStackParamList>>()
  console.log(route.name,route.key)
  const onPressItem = React.useCallback(() => {
    navigate('DetailNews', {
      item,
    });
  }, []);
  const sourceTitle = {
    html: `<p style="text-Color:'#000';">${item.creator}</p>`,
  };

  const tagsStyles = {
    body: {
      color: '#000',
    },
    a: {
      color: 'green',
    },
  };

  return (
    <View backgroundColor="#ffff">
      <TouchableOpacity onPress={onPressItem} style={{flexDirection: 'column'}}>
        <Card style={styles.container}>
          <View style={styles.contentItem}>
            <Text h10 black marginT-10 marginL-10 paddingV-2 paddingH-8>
              {item.creator}
            </Text>
            <Text>{item.created_at}</Text>
          </View>
          <View>
            <View row>
              <View br100 marginT-10 marginL-10 paddingV-2 paddingH-8 backgroundColor={Colors.black}>
                <Text h8 color={Colors.white}>
                  {item.title}
                </Text>
              </View>
            </View>
            <View paddingL-16 paddingR-6 marginB-15>
              <RenderHTML source={sourceTitle} contentWidth={width} tagsStyles={tagsStyles} />
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    width: widthScreen - 198,
    backgroundColor: '#ffff',
    elevation: 2,
    alignSelf: 'center',
    marginBottom: 10,
    flexDirection: 'column',
  },
  contentItem: {
    overflow: 'hidden',
    backgroundColor: 'white',
    height: 30,
    width: 70,
  },
});
