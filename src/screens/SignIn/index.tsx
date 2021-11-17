import {NavigationProp, useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet} from 'react-native';
import { Text, View, Colors} from 'react-native-ui-lib';
import {FONTS} from '../../config/Typo';
import {RootStackParamList} from '../../nav/RootStack';
import BtnLogin from './components/BtnLogin';
import {Input} from 'react-native-elements';
const SignIn = () => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const [infoLogin, setInfoLogin] = React.useState({
    username: 'VoucherAdmin123',
    password: 'vanhieuu99',
  });
  return (
    <View flex bg-white>
      <Text h26 primary margin-24 marginB-16>
        Đăng nhập để săn voucher ngay thôi !!!
      </Text>
      <Text marginL-24 marginR-20 b16>
        It's recommended to connect your email {`\n`} address for us to better
        protect your {`\n`} information
      </Text>
      <View flex centerV>
        <View marginH-24 marginB-32>
          <Text b17 dark80 marginB>
            Your Username
          </Text>
          <Input
            placeholder="Enter Username"
            leftIcon={{type: 'font-awesome', name: 'user'}}
            style={styles.textInput}
            onChangeText={(username: string) => {
              setInfoLogin(prev => {
                return {
                  ...prev,
                  username,
                };
              });
            }}
          />
          <View height={1} bg-dark80 marginT-12 />
        </View>
        <View marginH-24 marginB-32>
          <Text b17 dark80 marginB>
            Set Password
          </Text>
          <Input
            placeholder="Enter password"
            secureTextEntry
            leftIcon={{type: 'font-awesome', name: 'lock'}}
            style={styles.textInput}
            onChangeText={(password: string) =>
              setInfoLogin(prev => {
                return {
                  ...prev,
                  password,
                };
              })
            }
          />
          <View height={1} bg-dark80 marginT-12 />
        </View>
      </View>
      <View marginH-24 flex>
        <BtnLogin infoLogin={infoLogin} />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  textInput: {
    fontSize: 17,
    fontFamily: FONTS.Book,
    color: Colors.dark30,
  },
});
