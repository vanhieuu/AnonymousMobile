import React from 'react';
import {StyleSheet, Animated, Easing} from 'react-native';
import {View, TouchableOpacity} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import * as Icon from 'react-native-iconly';
import {Colors, Text} from 'react-native-ui-lib';
import {useNavigation} from '@react-navigation/core';

interface Props {
  scrollY: Animated.Value;
  title: string;
}

const HeaderDetail = ({scrollY, title}: Props) => {
  const opacity = scrollY.interpolate({
    inputRange: [0, 120],
    outputRange: [0, 1],
  });

  const {goBack} = useNavigation();

  return (
    <View
      style={{
        paddingTop: getStatusBarHeight(true),
        paddingBottom: 12,
        flexDirection: 'row',
        position: 'absolute',
        zIndex: 1,
        width: '100%',
      }}>
      <TouchableOpacity
        style={{
          marginLeft: 12,
        }}
        onPress={goBack}>
        <Icon.ArrowLeft size={32} color="#000" />
      </TouchableOpacity>
      <Animated.View
        style={{
          backgroundColor: '#FFF',
          ...StyleSheet.absoluteFillObject,
          zIndex: -1,
          opacity: opacity,
          borderBottomWidth: 1,
          borderBottomColor: Colors.grey60,
          paddingTop: getStatusBarHeight(true),
          paddingBottom: 12,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text h17>{title}</Text>
      </Animated.View>
    </View>
  );
};

export default HeaderDetail;

const styles = StyleSheet.create({});
