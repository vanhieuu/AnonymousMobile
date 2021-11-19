import { NavigationProp, useNavigation } from '@react-navigation/core';
import React from 'react';
import {ActivityIndicator, Alert, StyleSheet,TouchableOpacity} from 'react-native';
import {Colors, Text} from 'react-native-ui-lib';
import {useDispatch} from 'react-redux';
import URL from '../../../config/Api';
import { RootStackParamList } from '../../../nav/RootStack';

import {IAuth, onLogin, saveAuthAsync} from '../../../redux/authSlice';

interface Props {
  infoLogin: {
    username: string;
    password: string;
  };
}

const BtnLogin = ({infoLogin}: Props) => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>()
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState<boolean>(false);
  const onPressLogin = React.useCallback(() => {
    setLoading(true);
    fetch(URL.Login, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: infoLogin.username,
        password: infoLogin.password,
      }),
    })
      .then(response => response.json())
      .then(json => {
        // const success = json.success;
        //login fail
        if (!infoLogin.password) {
          Alert.alert( 'wrong information');
          console.log('login fail');
          setLoading(false);
          return ;
        }
        //login Success
        dispatch(onLogin(json));
        setLoading(false);
        console.log('Success');
        saveAuthAsync(json);
        navigate('MainTab');
      })
      .catch(error => {
        console.error(error);
      });
  }, [infoLogin]);
  return (
    <TouchableOpacity style={styles.btnLogin} onPress={onPressLogin}>
      <Text b24 white>
        Login
      </Text>
    </TouchableOpacity>
  );
};

export default BtnLogin;

const styles = StyleSheet.create({
  btnLogin: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 10,
    width: '90%',
    marginVertical:10,
    borderWidth:0,
  },
});
