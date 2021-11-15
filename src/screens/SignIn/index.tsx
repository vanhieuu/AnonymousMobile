import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Button, Text, View, Colors} from 'react-native-ui-lib';
import {FONTS} from '../../config/Typo';
import BtnLogin from './components/BtnLogin';
const SignIn = () => {
  const [infoLogin, setInfoLogin] = React.useState({
    email: 'heroku271120@gmail.com',
    password: '123',
  });
  return (
    <View flex bg-white>
      <Text h26 onBoard3 margin-24 marginB-16>
        Connect email address
      </Text>
      <Text marginL-24 marginR-20 b16>
        It's recommended to connect your email {`\n`} address for us to better
        protect your {`\n`} information
      </Text>
      <View flex centerV>
        <View marginH-24 marginB-32>
          <Text b17 dark80 marginB-16>
            Your Email
          </Text>
          <TextInput
            placeholder="Enter Email"
            style={styles.textInput}
            onChangeText={(email: string) => {
              setInfoLogin(prev => {
                return {
                  ...prev,
                  email,
                };
              });
            }}
          />
          <View height={1} bg-dark80 marginT-12 />
        </View>
        <View marginH-24 marginB-32>
          <Text b17 dark80 marginB-16>
            Set Password
          </Text>
          <TextInput
            placeholder="Enter password"
            secureTextEntry
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
      <View flex marginH-24>
          <BtnLogin/>
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
