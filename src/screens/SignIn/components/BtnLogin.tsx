import {NavigationProp, useNavigation} from '@react-navigation/core';
import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors, Text, View} from 'react-native-ui-lib';
import {RootStackParamList} from '../../../nav/RootStack';

interface Props {
  infoLogin: {
    email: string;
    password: string;
  };
}

const BtnLogin = () => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
//   const [loading, setLoading] = React.useState<boolean>(true);
const onPressLogin = React.useCallback(() => {
    navigate('Onboarding')
},[])
  return (
    <TouchableOpacity
      style={styles.btnLogin}
      onPress={onPressLogin}
      >
      <Text h16 >
        SignIn
      </Text>
    </TouchableOpacity>
  );
};

export default BtnLogin;

const styles = StyleSheet.create({
  btnLogin: {
    backgroundColor: Colors.onBoard1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 99,
  },
});
