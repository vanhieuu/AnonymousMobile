import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {View, Image} from 'react-native-ui-lib';
import Banner from './components/Banner';
import ListHorizontal from './components/ListHorizontal';
import ListProduct from './components/ListProduct';
const widthScreen = Dimensions.get('window').width;
const widthImg = widthScreen;
const heightImg = (widthImg / 375) * 256;
const Home = () => {
  return (
    <View flex bg-white marginT-16>
      <Image
        assetGroup="imgNewScreen"
        assetName="ic_bg"
        width={widthImg}
        height={heightImg}
        style={{position: 'absolute'}}
      />
      <ListProduct
        ListHeaderComponent={
          <>
            <Banner />
            <ListHorizontal />
          </>
        }
      />

      <View></View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
