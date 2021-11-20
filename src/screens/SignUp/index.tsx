import {NavigationProp, RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {Input} from 'react-native-elements';
import {View, Text, Image, Button, Colors} from 'react-native-ui-lib';
import {FONTS} from '../../config/Typo';
import {RootStackParamList} from '../../nav/RootStack';
import Inputs from '../SignIn/components/Inputs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  IAuthRegister,
  onRegister,
  saveAuthAsync,
} from '../../redux/authRegisterSlice';
import URL from '../../config/Api';
import {useDispatch} from 'react-redux';
const width = Dimensions.get('window').width;

const SignUp = () => {
  const [isFocus, setIsFocus] = React.useState<boolean>(false);
  const onFocusChange = React.useCallback(() => {
    setIsFocus(true);
  }, [isFocus]);
  const dispatch = useDispatch();
  const [username, setUserName] = useState('');
  const [email, setUserEmail] = useState('');
  const [password, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);
  const emailInputRef = React.useRef();
  const ageInputRef = React.useRef();
  const passwordInputRef = React.useRef();
  const [infoRegister, setInfoRegister] = React.useState({
    username: '',
    email: '',
    password: '',
  });
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList,'SignIn'>()
  const navigation = useNavigation<RootStackParamList>();
  const onPress = React.useCallback(() => {
    navigation.Home;
  }, []);
  const handleSubmitButton = () => {
    setErrorText('');
    if (!username) {
      Alert.alert('Please fill Name');
      return;
    }
    if (!email) {
      Alert.alert('Please fill Email');
      return;
    }
    if (!password) {
      Alert.alert('Please fill Password');
      return;
    }
    setLoading(true);
    var dataToSend = {
      username: username,
      email: email,
      password: password,
    };
    var formBody = [];
    formBody.push(dataToSend);
    fetch(URL.Register, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then(response => response.json())
      .then((json: IAuthRegister) => {
        console.log(json);
        // Register fail
        if (!json.accessToken) {
          Alert.alert('Register fail', json.message);
          console.log(json);
          setLoading(false);
          return;
        }
        //register Success
        dispatch(onRegister(json));
        setLoading(false);
        setIsRegistrationSuccess(true);
        console.log('Success', json.accessToken);
        saveAuthAsync(json);
      })
      .catch(error => {
        console.error(error);
      });
  };
  if (isRegistrationSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#307ecc',
          justifyContent: 'center',
        }}>
        <Text style={styles.successTextStyle}>Registration Successful</Text>
        <TouchableOpacity
          style={styles.btnLogin}
          activeOpacity={0.5}
          onPress={onPress}>
          <Text style={styles.btnLogin}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
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
            onChangeText={username => setUserName(username)}
            onSubmitEditing={() => emailInputRef.current}
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
            onChangeText={(email: string) => setUserEmail(email)}
            onSubmitEditing={() => passwordInputRef.current}
            leftIcon={
              <Icon
                name="envelope"
                size={20}
                color={isFocus ? '#E9707D' : 'grey'}
              />
            }
          />
        </View>
        {/* <View
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
        </View> */}
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
            onChangeText={(password: string) => setUserPassword(password)}
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
            // onChangeText={(confirmPassword: string) => {
            //       if(confirmPassword !== password){
            //         return Alert.alert('Password incorrect')
            //       }else{
            //         setUserPassword(confirmPassword)
            //       }
            // }}
            leftIcon={
              <Icon
                name="lock"
                size={20}
                color={isFocus ? '#E9707D' : 'grey'}
              />
            }
          />
        </View>
        <TouchableOpacity
            style={styles.btnLogin}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text h16>REGISTER</Text>
          </TouchableOpacity>
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
  btnLogin: {
    backgroundColor: Colors.Primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 99,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});
