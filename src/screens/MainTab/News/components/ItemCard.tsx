import {NavigationProp, useNavigation} from '@react-navigation/core';
import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, Colors, Text, View} from 'react-native-ui-lib';
import {RootStackParamList} from '../../../../nav/RootStack';
import {INewsData} from '../../../../redux/newSlice';
const widthScreen = Dimensions.get('window').width;
const ItemCard = ({item}: {item: INewsData}) => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const onPressItem = React.useCallback(() => {
    navigate('DetailNews', {
      item,
    });
  }, []);

  return (
    <View backgroundColor="#ffcdd2">
      <TouchableOpacity onPress={onPressItem}>
        <Card style={styles.container} row>
          <View style={styles.contentItem}>
            <Text h10 black marginT-10 marginL-10 paddingV-2 paddingH-8>
              {item.creator}
            </Text>
            <Text>{item.created_at}</Text>
          </View>
          <View>
            <View row>
              <View
                backgroundColor={'red'}
                br100
                marginT-10
                marginL-10
                paddingV-2
                paddingH-8>
                <Text h8 color={Colors.white}>
                  {item.title}
                </Text>
              </View>
            </View>
            <View paddingL-16 paddingR-6 marginB-15>
              <Text h16 marginT-10 numberOfLines={2} color={'#6f6f6f'}>
                {item.content}
              </Text>
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
    width: widthScreen - 32,
    backgroundColor: '#ffff',
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    alignSelf: 'center',
    marginBottom: 10,
  },
  contentItem: {
    overflow: 'hidden',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: 'white',
    height: 30,
    width: 70,
  },
});
