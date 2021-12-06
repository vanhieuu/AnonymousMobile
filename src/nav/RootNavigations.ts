import {NavigationContainerRef} from '@react-navigation/core';
import * as React from 'react';
import {RootStackParamList} from './RootStack';

export const navigationRef =
  React.useRef<NavigationContainerRef<RootStackParamList>>(null);
export function navigate(screen: keyof RootStackParamList, params: undefined) {
  navigationRef.current?.navigate(screen, params);
}
