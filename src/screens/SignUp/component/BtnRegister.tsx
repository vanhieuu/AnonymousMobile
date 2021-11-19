import {NavigationProp, useNavigation} from '@react-navigation/core';
import React from 'react';
import {ActivityIndicator, Alert, StyleSheet,TouchableOpacity} from 'react-native';

import {Colors, Text, View} from 'react-native-ui-lib';
import { useDispatch } from 'react-redux';
import URL from '../../../config/Api';
import {RootStackParamList} from '../../../nav/RootStack';
import { onRegister } from '../../../redux/authRegisterSlice';
import { saveAuthAsync } from '../../../redux/authSlice';

interface Props {
  infoRegister: {
    email: string;
    username:string;
    password: string;
  };
}

const BtnSignUp = ({infoRegister}:Props) => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const [loading, setLoading] = React.useState<boolean>(true);
  const dispatch = useDispatch();
const onPressRegister = React.useCallback(() => {
  setLoading(true);
  fetch(URL.Register, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: infoRegister.email,
      username: infoRegister.username,
      password: infoRegister.password,
    }),
  })
    .then(response => response.json())
    .then(json => {
      const success = json.success;
      //login fail
      if (!success) {
        Alert.alert( 'wrong information',json.message);

        console.log(json)
        setLoading(false);
        return ;
      }
      //login Success
      dispatch(onRegister(json));
      setLoading(false);
      console.log('Success',json);
      saveAuthAsync(json);
      // navigate('SignUp');
    })
    .catch(error => {
      console.error(error);
    });
}, [infoRegister]);
  return (
    <TouchableOpacity
      style={styles.btnLogin}
      onPress={onPressRegister}>
      <Text h16>
        SignUp
      </Text>
    </TouchableOpacity>
  );
};

export default BtnSignUp;

const styles = StyleSheet.create({
  btnLogin: {
    backgroundColor: Colors.Primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 99,
  },
});
