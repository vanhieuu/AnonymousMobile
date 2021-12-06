import React from 'react';
import {ActivityIndicator, Alert} from 'react-native';
import {createNativeStackNavigator, NativeStackHeaderProps} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import OnboardingScreen from '../screens/Onboarding';
import SignUp from '../screens/SignUp';
import MainTab, { MainTabParamList } from './MainTab';
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
import {NavigationProp, useNavigation} from '@react-navigation/core';
import DetailItems from '../screens/DetailItems';
import ForgetPassword from '../screens/ResetPassword';
import {INewsData} from '../redux/newSlice';
import DetailNews from '../screens/DetailNews';
import SignIn from '../screens/SignIn';
import URL from '../config/Api';
import {Assets, Button, Colors, View} from 'react-native-ui-lib';
import Search from '../screens/Search';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {Header} from '@react-navigation/elements';
import {FONTS} from '../config/Typo';
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
  DetailNews: {
    item: INewsData;
  };
  Search: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList | MainTabParamList>>();
  const statusAuth = useSelector<RootState, EStatusAuth>(
    state => state.auth.statusAuth,
  );
  const token = useSelector<RootState, string>(state => state.auth.accessToken);
  const dispatch = useDispatch();
  const checkLogin = React.useCallback(async () => {
    const auth: IAuth | null = await getAuthAsync();
    if (auth) {
      fetch(URL.ValidateToken, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
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
    // checkLogin();
  }, []);

  // if (statusAuth === EStatusAuth.check) {
  //   return (
  //     <View flex center>
  //       <ActivityIndicator color={Colors.primary} />
  //     </View>
  //   );
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
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

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            header: (props:NativeStackHeaderProps) => (
              <Header
                title="Tin Tức"
                headerTitleStyle={{
                  fontSize: 27,
                  fontFamily: FONTS.Heavy,
                }}
                headerTitleAlign="left"
                headerRight={({tintColor}) => {
                  return (
                    <View row>
                      <Button
                        iconSource={Assets.icons.ic_back}
                        style={{width: 44, height: 44}}
                        link
                        color={tintColor}
                        onPress={() => navigate('Home')}
                      />
                    </View>
                  );
                }}
                headerStyle={{
                  backgroundColor: Colors.transparent,
                }}
                headerTintColor={Colors.white}
              />
            ),
          }}
        />

        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailItems"
          component={DetailItems}
          options={{
            header: (props:NativeStackHeaderProps) => (
              <Header
                title="Tin Tức"
                headerTitleStyle={{
                  fontSize: 27,
                  fontFamily: FONTS.Heavy,
                }}
                headerTitleAlign="left"
                headerRight={({tintColor}) => {
                  return (
                    <View row>
                      <Button
                        iconSource={Assets.icons.ic_back}
                        style={{width: 44, height: 44}}
                        link
                        color={tintColor}
                        onPress={() => navigate('Home')}
                      />
                    </View>
                  );
                }}
                headerStyle={{
                  backgroundColor: Colors.transparent,
                }}
                headerTintColor={Colors.white}
              />
            ),
          }}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailNews"
          component={DetailNews}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
