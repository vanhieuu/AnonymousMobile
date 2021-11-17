import {NavigationProp, useNavigation} from '@react-navigation/core';
import React from 'react';
import {ActivityIndicator, Alert, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors, Text} from 'react-native-ui-lib';
import {useDispatch} from 'react-redux';
import URL from '../../../config/Api';
import {RootStackParamList} from '../../../nav/RootStack';
import {IAuth, onLogin, saveAuthAsync} from '../../../redux/authSlice';

interface Props {
  infoLogin: {
    username: string;
    password: string;
  };
}

const BtnLogin = ({infoLogin}: Props) => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
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
        username: infoLogin.username,
        password: infoLogin.password,
      }),
    })
      .then(response => response.json())
      .then((json: IAuth) => {
        const success = json.success;
        //login fail
        if (!success) {
          Alert.alert('Thông báo', json.message);
          setLoading(false);
          return;
        }
        //login Success
        dispatch(onLogin(json));
        setLoading(false);
        saveAuthAsync(json);
        
        return;
      })
      .catch(error => {
        console.error(error);
      });
      navigate('MainTab');
  }, [infoLogin]);
  return (
    <TouchableOpacity
      style={styles.btnLogin}
      onPress={onPressLogin}
      disabled={!!loading}>
      {!!loading ? (
        <ActivityIndicator color={Colors.white} />
      ) : (
        <Text h16 white>Login</Text>
      )}
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
    borderRadius: 99,
  },
});
