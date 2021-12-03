import {RouteProp, useRoute} from '@react-navigation/core';
import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {RootStackParamList} from '../../../nav/RootStack';
import {Colors, Text, View, Image, Button} from 'react-native-ui-lib';
import {Rating, AirbnbRating} from 'react-native-ratings';
import useBoolean from '../../../hook/useBoolean';
import ButtonGroups from './ButtonGroups';
import ShowModal from './ShowModal';
interface Props {
  ListHeaderComponent:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
}

const ProductInfo = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'DetailItems'>>();
  const itemInfo = route.params.item;
  const [showModal, onShowModal, onHideModal] = useBoolean();
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  return (
    <View bg-white marginT-15>
      <View row style={{justifyContent: 'space-between'}} marginL-12 marginT-10>
        <View>
          <Text style={{fontSize: 20}} marginV-12 color={'#f57c00'}>
            {itemInfo.name}
          </Text>
        </View>
        <View>
          <View backgroundColor={'#ffff'} br100 marginT-15>
            <Text h17>
              10%{' '}
              {
                <Text color={Colors.primary}>
                  Giảm
                  {
                    <Image
                      assetGroup="icons"
                      assetName="ic_ticket"
                      style={{height: 30, width: 30}}
                    />
                  }
                </Text>
              }
            </Text>
          </View>
        </View>
      </View>
      <Text h17 black marginL-12>
        {itemInfo.discountPrice}
      </Text>
      <Text
        h13
        color={'#9e9e9e'}
        marginL-12
        style={{textDecorationLine: 'line-through'}}>
        {itemInfo.listedPrice}
      </Text>

      <Text h17 black marginL-12 marginT-12 marginH-10>
        {itemInfo.quantity}
      </Text>
      <View marginR-260>
        <AirbnbRating
          count={5}
          defaultRating={5}
          size={20}
          reviewSize={10}
          showRating={false}
        />
      </View>

      <Text h17 black>
        {itemInfo.tags}
      </Text>
      <View height={1} bg-dark80 marginT-12 />
      <View marginH-12 marginB-12>
        {itemInfo.description}
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 100
        }}>
        <ShowModal />
        <ShowModal />
        <ShowModal />
      </View>
    </View>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
