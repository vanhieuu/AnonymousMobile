import React from 'react';
import {ActivityIndicator, Alert, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import OnboardingScreen from '../screens/Onboarding';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import MainTab from './MainTab';
import {IProduct} from '../types/IProduct';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {
  EStatusAuth,
  getAuthAsync,
  IAuth,
  onLogin,
  updateStatusAuth,
} from '../redux/authSlice';
import URL from '../config/Api';
import {Colors, View} from 'react-native-ui-lib';
import DetailItems from '../screens/DetailItems';

export type RootStackParamList = {
  Onboarding: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ForgetPassword: undefined;
  MainTab: undefined;
  Home: undefined;
  DetailItems: {
    item: IProduct;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const statusAuth = useSelector<RootState, EStatusAuth>(
    state => state.auth.statusAuth,
  );
  const dispatch = useDispatch();
  const checkLogin = React.useCallback(async () => {
    const auth: IAuth | null = await getAuthAsync();
    if (auth) {
      //call api validated auth
      fetch(URL.ValidateToken, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: auth.accessToken,
        }),
      })
        .then(response => response.json())
        .then((json: {success: boolean; message: string}) => {
          const success = json.success;
          //token fail
          if (!success) {
            Alert.alert('Thông báo', json.message);
            dispatch(updateStatusAuth({statusAuth: EStatusAuth.unauth}));
            return;
          }
          //token success
          dispatch(onLogin(auth));
          return json;
        });
    } else {
      dispatch(updateStatusAuth({statusAuth: EStatusAuth.unauth}));
    }
  }, []);
  React.useEffect(() => {
    checkLogin();
  }, []);

  if (statusAuth === EStatusAuth.check) {
    return (
      <View flex center>
        <ActivityIndicator color={Colors.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        {statusAuth === EStatusAuth.unauth ? (
          <>
            <Stack.Screen
              name="Onboarding"
              component={OnboardingScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="MainTab"
              component={MainTab}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="DetailItems"
              component={DetailItems}
              options={{headerShown: false}}
            />
            {/* <Stack.Screen
            name="PlayExercise"
            component={PlayExercise}
            options={{
              headerStyle: {
                backgroundColor: Colors.dark10,
              },
              headerTintColor: '#FFF',
              title: '',
              headerBackTitleVisible: false,
            }}
          /> */}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
