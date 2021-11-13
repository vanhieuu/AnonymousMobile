import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {View, Text, Image, Button} from 'react-native-ui-lib';

import Colors from '../../config/Colors';

const width = Dimensions.get('window').width;

const SignUp = () => {
  return (
    <View style={{width: width, height: '100%', backgroundColor: Colors.white}}>
      <Image
        assetGroup="illustrations"
        style={{
          width: width,
          height: (width * 301) / 300,
        }}
      />
      <View flex bottom centerH>
        <Text CreateAccountScreenTittle marginB-6>
          Change starts here
        </Text>
        <Text CreateAccountText marginB-49>
          Save your progress to access your personal trainning program!
        </Text>
        {/* <TouchableOpacity style={{backgroundColor: Colors.primary}}>
          <Image assetGroup='icon'
                  assetName='email'
          />
          <Text>EMAIL</Text>
        </TouchableOpacity> */}
        <Button
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
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
