import {NavigationProp, useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Dimensions, ScrollView} from 'react-native';
import {View, Text, Image, Button} from 'react-native-ui-lib';

import Colors from '../../config/Colors';
import {FONTS} from '../../config/Typo';
import {RootStackParamList} from '../../nav/RootStack';
import Inputs from '../SignIn/components/Inputs';
import BtnRegister from './component/BtnRegister';

const width = Dimensions.get('window').width;

const SignUp = () => {
  const [infoRegister,setInfoRegister] = React.useState({
      username:'DevTest',
      email:"devtest@gmail.com",
      password:'vanhieuu99',
      phone: '12345678',
      confirmPassword:'vanhieuu99'
  })
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  // const submitData = () =>{
  //   fetch()
  // }

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View flex style={styles.container}>
        <Image
          assetGroup="signUp"
          assetName="CreatAccount"
          resizeMode="center"
          style={styles.img}
        />
        <Text style={styles.txtTitle}>
          Let's Get Started
        </Text>
        <Inputs username="Username" iconName="user" isPassword={false} />
        <Inputs username="Email" iconName="envelope" isPassword={false} />
        <Inputs username="Phone" iconName="phone" isPassword={false} />
        <Inputs username="Password" iconName="lock" isPassword={true} />
        <Inputs username="Confirm Password" iconName="lock" isPassword={true} />
        <BtnRegister infoRegister={infoRegister}/>
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
});
