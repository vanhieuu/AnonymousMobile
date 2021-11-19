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
} from '../redux/authSlice';

import DetailItems from '../screens/DetailItems';
import ForgetPassword from '../screens/ResetPassword';
import {  INewsData } from '../redux/newSlice';
import DetailNews from '../screens/DetailNews';

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
  DetailNews:{
    item:INewsData
  }
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const statusAuth = useSelector<RootState, EStatusAuth>(
    state => state.auth.statusAuth,
  );
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        {/* {statusAuth === EStatusAuth.unauth ? ( */}

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

        {/* ) : ( */}

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
         <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailNews"
          component={DetailNews}
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

        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
