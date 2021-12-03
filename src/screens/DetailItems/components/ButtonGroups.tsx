import React, {Component} from 'react';
import {Button, StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text, Colors, Image} from 'react-native-ui-lib';
import useBoolean from '../../../hook/useBoolean';
const ButtonGroups = () => {
  const [showModal, onShowModal, onHideModal] = useBoolean();
  return (
    <View
      marginB-20
      style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          // marginTop: 150,
          bottom: 0,
        }}
        onPress={onShowModal}>
        <View
          style={{
            backgroundColor: Colors.primary,
            width: 100,
            height: 100,
            alignItems: 'center',
          }}>
          <Text>Add To Card</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          // marginTop: 150,
          bottom: 0,
        }}>
        <View
          style={{
            backgroundColor: Colors.primary,
            width: 100,
            height: 100,
            alignItems: 'center',
          }}>
          <Text>Add To Card</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          // marginTop: 150,
          bottom: 0,
        }}>
        <View
          style={{
            backgroundColor: Colors.primary,
            width: 100,
            height: 100,
            alignItems: 'center',
          }}>
          <Text>Add To Card</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default ButtonGroups;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
});
