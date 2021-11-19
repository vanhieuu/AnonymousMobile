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
    <View backgroundColor="#fff">
      <TouchableOpacity onPress={onPressItem}>
        <Card style={styles.container} row>
          <View style={styles.contentItem}>
            <Text h24 black>
              {item.title}
            </Text>
            <Text>{item.created_at}</Text>
          </View>
          <View>
            <View row>
              <View
                backgroundColor={'#F7B500'}
                br100
                marginT-10
                marginL-10
                paddingV-2
                paddingH-8>
                <Text h8 color={Colors.white}>
                  {item.creator}
                </Text>
              </View>
            </View>
            <View paddingL-16 paddingR-6 marginB-11>
              <Text h16 marginT-10 numberOfLines={1} color={'#6f6f6f'}>
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
    backgroundColor: Colors.blue80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    alignSelf: 'center',
    marginBottom: 12,
  },
  contentItem: {
    overflow: 'hidden',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: 'red',
    height: 150,
    width: 150,
  },
});
