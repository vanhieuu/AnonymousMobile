import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Text, Colors, Image,View} from 'react-native-ui-lib';
import {FONTS} from '../../config/Typo';

import BtnLogin from './components/BtnLogin';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import Inputs from './components/Inputs';
import Account from './components/Account';
import { RootStackParamList } from '../../nav/RootStack';
import { NavigationProp, useNavigation } from '@react-navigation/core';
const SignIn = () => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>()
  const [infoLogin, setInfoLogin] = React.useState({
    username: 'VoucherAdmin123',
    password: 'vanhieuu99',
  });
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Image
          assetGroup="signUp"
          assetName="Login"
          resizeMode="center"
          style={styles.image}
        />
        <Text style={styles.textTitle}> Welcome Back</Text>
        <Inputs username="username" iconName="user" isPassword={false} />
        <Inputs username="password" iconName="lock" isPassword={true} />
        <View style={{width: '90%'}}>
          <Text b13 black style={{alignSelf: 'flex-end',color:Colors.blue}} onPress={() => navigate('ForgetPassword')}>
            {' '}
            Forgot your password?
          </Text>
        </View>
        <BtnLogin infoLogin={infoLogin} />
        <Text b13 black>Or connect using </Text>
          <View row>
              <Account icon='facebook' color='#3b5c8f' title='Facebook'/>
              <Account icon='google' color='#ec482f' title='Google'/>
          </View>
          <View row>
            <Text b13 black center> Don't Have An Account</Text>
            <Text b13 style={{color:Colors.primary}} centerH onPress={() =>{navigate('SignUp')}}>SignUp</Text>
          </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  textInput: {
    fontSize: 17,
    fontFamily: FONTS.Book,
    color: Colors.dark30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 130,
    marginVertical: 5,
    // backgroundColor:Colors.primary
  },
  textTitle: {
    fontFamily: FONTS.Heavy,
    fontSize: 40,
  },
});
