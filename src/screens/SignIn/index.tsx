import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Text, Colors, Image, View} from 'react-native-ui-lib';
import {FONTS} from '../../config/Typo';

import BtnLogin from './components/BtnLogin';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import Inputs from './components/Inputs';
import Account from './components/Account';
import {RootStackParamList} from '../../nav/RootStack';
import {NavigationProp, useNavigation} from '@react-navigation/core';
const SignIn = () => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const [isFocus, setIsFocus] = React.useState<boolean>(false);
  const onFocusChange = React.useCallback(() => {
    setIsFocus(true);
  }, [isFocus]);
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
        <View
          style={[
            styles.containerInput,
            {borderColor: isFocus ? '#E9707D' : '#eee'},
          ]}>
          <Input
            placeholder="userName"
            onFocus={onFocusChange}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.inputText}
            secureTextEntry={false}
            onChangeText={(username: string) => {
              setInfoLogin(infoLogin => {
                console.log(infoLogin)
                return {...infoLogin, username};
              });
            }}
            leftIcon={
              <Icon
                name="user"
                size={20}
                color={isFocus ? '#E9707D' : 'grey'}
              />
            }
          />
        </View>
            {/* <Inputs username='UserName' isPassword={false} iconName='user' value={infoLogin.username}/> */}
        <View
          style={[
            styles.containerInput,
            {borderColor: isFocus ? '#E9707D' : '#eee'},
          ]}>
          <Input
            placeholder="password"
            onFocus={onFocusChange}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.inputText}
            secureTextEntry
            onChangeText={(password: string) =>
              setInfoLogin(infoLogin => {
                return {
                  ...infoLogin,
                  password,
                };
              })
            }
            leftIcon={
              <Icon
                name="lock"
                size={20}
                color={isFocus ? '#E9707D' : 'grey'}
              />
            }
          />
        </View>
        <View style={{width: '90%'}}>
          <Text
            b13
            black
            style={{alignSelf: 'flex-end', color: Colors.blue}}
            onPress={() => navigate('ForgetPassword')}>
            {' '}
            Forgot your password?
          </Text>
        </View>
        <BtnLogin infoLogin={infoLogin} />
        <Text b13 black>
          Or connect using{' '}
        </Text>
        <View row>
          <Account icon="facebook" color="#3b5c8f" title="Facebook" />
          <Account icon="google" color="#ec482f" title="Google" />
        </View>
        <View row>
          <Text b13 black center>
            {' '}
            Don't Have An Account
          </Text>
          <Text
            b13
            style={{color: Colors.primary}}
            centerH
            onPress={() => {
              navigate('SignUp');
            }}>
            SignUp
          </Text>
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
  containerInput: {
    width: '90%',
    height: 50,
    borderRadius: 100,
    marginVertical: 10,
    borderWidth: 3.5,
  },
  inputText: {
    color: '#0779e4',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  inputContainer: {
    borderBottomWidth: 0,
  },
});
