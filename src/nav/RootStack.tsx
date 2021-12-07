import React from 'react';
import {Alert} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import OnboardingScreen from '../screens/Onboarding';
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
import DetailItems from '../screens/DetailItems';

import {INewsData} from '../redux/newSlice';
import DetailNews from '../screens/DetailNews';
import SignIn from '../screens/SignIn';
import URL from '../config/Api';
import Search from '../screens/Search';
export type RootStackParamList = {
  Onboarding: undefined;
  SignIn: undefined;
  SignUp: undefined;
  MainTab: undefined;
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
  const [didMount, setDidMount] = React.useState<boolean>(false);
  const statusAuth = useSelector<RootState, EStatusAuth>(
    state => state.auth.statusAuth,
  );

  const token = useSelector<RootState, string>(state => state.auth.accessToken);
  const registerToken = useSelector<RootState, string>(
    state => state.register.accessToken,
  );
  const dispatch = useDispatch();
  const checkLogin = React.useCallback(async () => {
    const auth: IAuth | null = await getAuthAsync();
    console.log(getAuthAsync());
    if (auth) {
      fetch(URL.ValidateToken, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token || registerToken}`,
        },
      })
        .then(response => response.json())
        .then((json: {error: string}) => {
          const error = json.error;
          //token fail
          if (error) {
            Alert.alert('Đã hết phiên đăng nhập', 'vui lòng đăng nhập lại ');
            dispatch(updateStatusAuth({statusAuth: EStatusAuth.unauth}));
            console.log(EStatusAuth);
            console.log(json);
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

  // React.useEffect(() => {
  //   setDidMount(true);
  //   checkLogin();
  //   setDidMount(false);
  // }, []);
  // if (!didMount) {
  //   return null;
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: true,
          }}
        />

        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="DetailItems"
          component={DetailItems}
          options={{
            headerShown: true,
          }}
        />

        <Stack.Screen
          name="DetailNews"
          component={DetailNews}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
