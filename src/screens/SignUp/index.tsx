import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {View, Text, Image, Button} from 'react-native-ui-lib';

import Colors from '../../config/Colors';
import {FONTS} from '../../config/Typo';
import BtnRegister from './component/BtnRegister';

const width = Dimensions.get('window').width;

const SignUp = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // const submitData = () =>{
  //   fetch()
  // }

  return (
    <View flex bg-onBoard2>
      <View flex center>
        <Image
          assetGroup="signUp"
          style={{
            width: width,
            height: (width * 301) / 300,
          }}
        />
      </View>
      <View flex centerV>
        <View marginH-24 marginB-32>
          <Text b17 dark80 marginB-16>
            Your Name
          </Text>
          <TextInput
            placeholder="Enter Name"
            style={styles.textInput}
            onChangeText={text => setName(text)}
          />
          <View height={1} bg-dark80 marginT-12 />
        </View>
        <View marginH-24 marginB-32>
          <Text b17 dark80 marginB-16>
            Your Email
          </Text>
          <TextInput
            placeholder="Enter Email"
            style={styles.textInput}
            onChangeText={text => setEmail(text)}
          />
          <View height={1} bg-dark80 marginT-12 />
        </View>
        <View marginH-24 marginB-32>
          <Text b17 dark80 marginB-16>
            Your Password
          </Text>
          <TextInput
            placeholder="Enter Password"
            style={styles.textInput}
            secureTextEntry
            onChangeText={text => setPassword(text)}
          />
          <View height={1} bg-dark80 marginT-12 />
        </View>

        {/* <Button
          label="EMAIL"
          color={Colors.primary}
          marginB-24
          onPress={() => {}}
        />
        <Button
          label="FACEBOOK"
          color="#576DFF"
          marginB-24
          onPress={() => {}}
        />
        <Button
          label="Google"
          color={Colors.white}
          marginB-24
          onPress={() => {}}
        /> */}
      </View>
      <View flex marginH-24>
        <BtnRegister />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  textInput: {
    fontSize: 17,
    fontFamily: FONTS.Book,
    color: Colors.primary,
  },
});
