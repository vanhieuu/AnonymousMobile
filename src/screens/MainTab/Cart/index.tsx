import {NavigationProp, useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {Header} from 'react-native-elements';

import {Button, Colors, Text, View} from 'react-native-ui-lib';
import {RootStackParamList} from '../../../nav/RootStack';
import CartCard from './components/CartCard';

const Cart = () => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      <Header
        placement="center"
        centerComponent={{
          text: 'Shopping',
          style: {color: Colors.primary, fontSize: 20},
        }}
        containerStyle={{
          backgroundColor: 'white',
          justifyContent: 'space-around',
        }}
        barStyle="light-content"
        statusBarProps={{barStyle: 'light-content'}}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <CartCard title={'title'} subtitle={'subtitle'} price={'price'} />
        <CartCard title={'title'} subtitle={'subtitle'} price={'price'} />
        <View style={styles.totalSection}>
          <Text h28 black>
            {' '}
            Totals
          </Text>
          <View row center style={{justifyContent: 'space-between'}}>
            <Text h24 color={Colors.primary}>
              Sub Total
            </Text>
            <View style={styles.divider} />
            <Text h18 color={Colors.black}>
              {' '}
              20.000
            </Text>
          </View>
          <View row center style={{justifyContent: 'space-between'}}>
            <Text h24 color={Colors.primary}>
              Service Fee
            </Text>
            <View style={styles.divider} />
            <Text h18 black>
              {' '}
              0
            </Text>
          </View>
          <View flex marginH-24 marginV-20>
            <Button label={'CheckOut'} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    marginHorizontal: 29,
    paddingBottom: 32,
  },
  totalSection: {
    marginTop: 32,
  },
  divider: {
    height: 1,
    borderColor: '#fdd',
    borderWidth: StyleSheet.hairlineWidth,
    flex: 1,
    borderStyle: 'solid',
    marginHorizontal: 16,
    marginTop: 5,
  },
});
