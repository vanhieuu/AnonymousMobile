import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Assets, Colors, Image, View, Button} from 'react-native-ui-lib';
import Home from '../screens/MainTab/Home';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {Header} from '@react-navigation/elements';
import {FONTS} from '../config/Typo';
import News from '../screens/MainTab/News';
import Cart from '../screens/MainTab/Cart';
import Profile from '../screens/MainTab/Profile';

export type MainTabParamList = {
  Home: undefined;
  News: undefined;
  Cart: undefined;
  Profile: undefined;
};
const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.dark50,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Image assetGroup="iconTab" assetName="ic_home" tintColor={color} />
          ),
          tabBarLabel: 'Home',
          headerTransparent: true,
          header: (props: BottomTabHeaderProps) => (
            <Header
              title="Recommend for you"
              headerTitleStyle={{
                fontSize: 27,
                fontFamily: FONTS.Heavy,
              }}
              headerTitleAlign="left"
              headerRight={({tintColor}) => {
                return (
                  <View row>
                    <Button
                      iconSource={Assets.iconHeader.ic_search}
                      style={{width: 44, height: 44}}
                      link
                      color={tintColor}
                    />
                    <Button
                      iconSource={Assets.iconHeader.ic_option}
                      style={{width: 44, height: 44}}
                      link
                      color={tintColor}
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
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarIcon: ({color}) => (
            <Image assetGroup="iconTab" assetName="ic_new" tintColor={color} />
          ),
          tabBarLabel: 'News',
          headerShown: false,
          
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              assetGroup="iconTab"
              assetName="ic_shop"
              tintColor={color}
            />
          ),
          tabBarLabel: 'Shop',
          headerShown: false,
          tabBarBadge: 1
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              assetGroup="iconTab"
              assetName="ic_profile"
              tintColor={color}
            />
          ),
          tabBarLabel: 'Profile',
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;

const styles = StyleSheet.create({});
