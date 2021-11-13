import React from 'react';
import { StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import OnboardingScreen from '../screens/Onboarding';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import AsyncStorage from '@react-native-community/async-storage';

export type RootStackParamList = {
  Onboarding: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {

    const [isFirstLaunch,setIsFirstLaunch] = React.useState<boolean>()

    // React.useEffect(() =>{
    //   AsyncStorage.getItem('alreadyLaunched').then(value =>{
    //     if(value = null){
    //       AsyncStorage.setItem('alreadyLaunched', 'true');
    //         setIsFirstLaunch(true);
    //     }else{
    //       setIsFirstLaunch(false);
    //     }
    //   })
    // },[])
    //   if(isFirstLaunch === null){
    //     return null;
    //   }else if(isFirstLaunch === true){
    //     return (
    //       <NavigationContainer>
    //         <Stack.Navigator >
    //           <Stack.Screen
    //             name="Onboarding"
    //             component={OnboardingScreen}
    //             options={{headerShown: false}}
    //           />
    //           <Stack.Screen
    //             name="SignIn"
    //             component={SignIn}
    //             options={{headerShown: false}}
    //           />
    //         </Stack.Navigator>
    //       </NavigationContainer>
    //     );
    //   }else{
    //     <SignIn/>
    //   }
      
  return (
    <NavigationContainer>
      <Stack.Navigator >
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
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
