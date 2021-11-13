import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Onboarding from '../screens/Onboarding';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

export type RootStackParamList = {
    Onboarding:undefined,
    SignIn:undefined,
    SignUp:undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Onboarding">
                    <Stack.Screen name="Onboarding" component={Onboarding}  options={{headerShown:false}}  />
                    <Stack.Screen name="SignIn" component={SignIn}  options={{headerShown:false}}  />
                    <Stack.Screen name="SignUp" component={SignUp}  options={{headerShown:false}}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack

const styles = StyleSheet.create({})
