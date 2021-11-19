import { NavigationProp, useNavigation } from '@react-navigation/core';
import React from 'react';
import {Alert, Dimensions, FlatList, LayoutAnimation, StyleSheet} from 'react-native';

import {View, Image} from 'react-native-ui-lib';
import URL from '../../../config/Api';
import { RootStackParamList } from '../../../nav/RootStack';
import { IResProduct } from '../../../redux/authSlice';
import { IProduct } from '../../../types/IProduct';
import Banner from './components/Banner';
import ItemProduct from './components/ItemProduct';
import ListProduct from './components/ListProduct';

const widthScreen = Dimensions.get('window').width;
const widthImg = widthScreen;
const heightImg = (widthImg / 375) * 256;
const Home = () => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>()
  const [loading, setLoading] = React.useState(true);
  const [product, setProduct] = React.useState<IProduct[]>([]);
  
  fetch(URL.Products, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then((json: IResProduct) => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      setProduct(json.product);
      console.log(product)
      setLoading(false);
      return json;
    })
    .catch(error => {
      console.error(error);
    });
    
    const renderItem = React.useCallback((
      {item}:{item:IProduct})=>{
          return(
            <View>
              {/* <ItemProduct listphotos={item.listphotos} onPress={()=>{navigate('Home')}}/> */}
            </View>
          )
    },[])
  return (
    <View flex bg-white>
      <Image
        assetGroup="imgNewScreen"
        assetName="ic_bg"
        width={widthImg}
        height={heightImg}
        style={{position: 'absolute'}}
      />
      {/* <ListProduct
        ListHeaderComponent={
          <>
            <Banner />
          </>
        }
      /> */}
      <Banner/>
      <FlatList
        data={product}
        renderItem={renderItem}
        keyExtractor={item => item.name.toString()}
        contentContainerStyle={{paddingHorizontal: 16, paddingVertical: 12}}

      />
      <View>
        
        
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
