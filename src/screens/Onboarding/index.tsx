import { NavigationProp, useNavigation } from '@react-navigation/core';
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

import { RootStackParamList } from '../../nav/RootStack';

const OnboardingScreen = () => {
    const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <Onboarding
        onSkip={() =>navigate("SignIn")}
        onDone={() =>navigate("SignUp")}
    pages={[
    {
      backgroundColor: '#a6e4d0',
      image: <Image source={require('../../assets/onboarding-img1.png')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
        backgroundColor: '#fdeb93',
        image: <Image source={require('../../assets/onboarding-img2.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#e9bcbe',
        image: <Image source={require('../../assets/onboarding-img3.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
  ]}
/>

            
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({})
