import React from 'react';
import RootStack, { RootStackParamList } from './src/nav/RootStack';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<RootStackParamList>;
const App = () => {
  return (
    <Provider store={store}>
      <RootStack  />
    </Provider>
  );
};

export default App;
