import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

interface Props {
  username: string;
  isPassword: boolean;
  iconName: string;
}

const Inputs = ({username, isPassword, iconName}: Props) => {
  const [isFocus, setIsFocus] = React.useState<boolean>(false);
  const onFocusChange = React.useCallback(() => {
    setIsFocus(true);
  }, [isFocus]);
  const [infoLogin, setInfoLogin] = React.useState({
    username: '',
    password: '',
  });
  return (
    <View
      style={[styles.container, {borderColor: isFocus ? '#E9707D' : '#eee'}]}>
      <Input
        placeholder={username}
        onFocus={onFocusChange}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputText}
        secureTextEntry={isPassword}
        onChangeText={(value:string) =>{
            setInfoLogin(prev =>{
                return{
                    ...prev,
                    value
                }
            })
        }}
        leftIcon={
          <Icon
            name={iconName}
            size={20}
            color={isFocus ? '#E9707D' : 'grey'}
          />
        }
      />
    </View>
  );
};

export default Inputs;

const styles = StyleSheet.create({
  container: {
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
