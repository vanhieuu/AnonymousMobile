import {NavigationProp, useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Dimensions, ScrollView} from 'react-native';
import {Input} from 'react-native-elements';
import {View, Text, Image, Button, Colors} from 'react-native-ui-lib';
import {FONTS} from '../../config/Typo';
import {RootStackParamList} from '../../nav/RootStack';
import Inputs from '../SignIn/components/Inputs';
import BtnRegister from './component/BtnRegister';
import Icon from 'react-native-vector-icons/FontAwesome';
const width = Dimensions.get('window').width;

const SignUp = () => {
  const [isFocus, setIsFocus] = React.useState<boolean>(false);
  const onFocusChange = React.useCallback(() => {
    setIsFocus(true);
  }, [isFocus]);
  const [infoRegister, setInfoRegister] = React.useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    confirmPassword: '',
  });
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  const onPress = React.useCallback(() => {
    navigate('SignIn');
  }, []);

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View flex style={styles.container}>
        <Image
          assetGroup="signUp"
          assetName="CreatAccount"
          resizeMode="center"
          style={styles.img}
        />
        <Text style={styles.txtTitle}>Let's Get Started</Text>
        <View
          style={[
            styles.containerInput,
            {borderColor: isFocus ? '#E9707D' : '#eee'},
          ]}>
          <Input
            placeholder="UserName"
            onFocus={onFocusChange}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.inputText}
            secureTextEntry={false}
            onChangeText={(username: string) =>
              setInfoRegister(infoRegister => {
                console.log('');
                return {
                  ...infoRegister,
                  username,
                };
              })
            }
            leftIcon={
              <Icon
                name="user"
                size={20}
                color={isFocus ? '#E9707D' : 'grey'}
              />
            }
          />
        </View>
        <View
          style={[
            styles.containerInput,
            {borderColor: isFocus ? '#E9707D' : '#eee'},
          ]}>
          <Input
            placeholder="Email"
            onFocus={onFocusChange}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.inputText}
            secureTextEntry={false}
            onChangeText={(email: string) => {
              setInfoRegister(infoRegister => {
                console.log(infoRegister);
                return {...infoRegister, email};
              });
            }}
            leftIcon={
              <Icon
                name="envelope"
                size={20}
                color={isFocus ? '#E9707D' : 'grey'}
              />
            }
          />
        </View>
        <View
          style={[
            styles.containerInput,
            {borderColor: isFocus ? '#E9707D' : '#eee'},
          ]}>
          <Input
            placeholder="Phone"
            onFocus={onFocusChange}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.inputText}
            secureTextEntry={false}
            onChangeText={(phone: string) => {
              setInfoRegister(infoRegister => {
                console.log(infoRegister);
                return {...infoRegister, phone};
              });
            }}
            leftIcon={
              <Icon
                name="phone"
                size={20}
                color={isFocus ? '#E9707D' : 'grey'}
              />
            }
          />
        </View>
        {/* <Inputs
          username="Phone"
          iconName="phone"
          isPassword={false}
          value={infoRegister.phone}
        /> */}
       <View
          style={[
            styles.containerInput,
            {borderColor: isFocus ? '#E9707D' : '#eee'},
          ]}>
          <Input
            placeholder="Password"
            onFocus={onFocusChange}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.inputText}
            secureTextEntry={true}
            onChangeText={(password: string) => {
              setInfoRegister(infoRegister => {
                console.log(infoRegister);
                return {...infoRegister, password};
              });
            }}
            leftIcon={
              <Icon
                name="lock"
                size={20}
                color={isFocus ? '#E9707D' : 'grey'}
              />
            }
          />
        </View>
        {/* <Inputs
          username="Confirm Password"
          iconName="lock"
          isPassword={true}
          value={infoRegister.password}
        /> */}
        <View
          style={[
            styles.containerInput,
            {borderColor: isFocus ? '#E9707D' : '#eee'},
          ]}>
          <Input
            placeholder="Confirm Password"
            onFocus={onFocusChange}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.inputText}
            secureTextEntry={true}
            onChangeText={(confirmPassword: string) => {
              setInfoRegister(infoRegister => {
                console.log(infoRegister);
                return {...infoRegister, confirmPassword};
              });
            }}
            leftIcon={
              <Icon
                name="lock"
                size={20}
                color={isFocus ? '#E9707D' : 'grey'}
              />
            }
          />
        </View>
        <BtnRegister infoRegister={infoRegister} />
        <View style={{justifyContent: 'space-between'}}>
          <Text center>Already have an account</Text>
          <Text b13 style={{color: Colors.primary}} centerH onPress={onPress}>
            SignIn
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  textInput: {
    fontSize: 17,
    fontFamily: FONTS.Book,
    color: Colors.primary,
  },
  container: {
    alignItems: 'center',
  },
  img: {
    width: 300,
    height: 130,
    marginVertical: 5,
  },
  txtTitle: {
    fontSize: 40,
    fontFamily: FONTS.Heavy,
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
