import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IProduct} from '../types/IProduct';

export enum EGender {
  male = 1,
  female = 2,
}

export interface IAdress {
  city: string;
  district: string;
  ward: string;
  detail: string;
}
export interface IUser {
  userName: string;
  email: string;
  phone: string;
  photoURL: string;
  displayName: string;
  gender: EGender;
  dob: string;
  address: IAdress;
}
export interface IAuth {
  user: IUser;
  createdAt: string;
  accessToken: string;
  message: string;
  statusAuth: EStatusAuth;
}

export enum EStatusAuth {
  check = 1,
  unauth = 2,
  auth = 3,
}

const initValue: IAuth = {
  user: {
    userName: '',
    email: '',
    phone: '',
    photoURL: '',
    displayName: '',
    gender: 1,
    dob: '',
    address: {
      city: '',
      district: '',
      ward: '',
      detail: '',
    },
  },
  createdAt: '',
  accessToken: '',

  message: '',

  statusAuth: EStatusAuth.check,
};


export const authSlice = createSlice({
  name: 'auth',
  initialState: initValue,
  reducers: {
    onLogin: (state, action: PayloadAction<IAuth>) => {
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.accessToken = action.payload.accessToken;
      state.statusAuth = EStatusAuth.auth;
    },
    updateStatusAuth: (
      state,
      action: PayloadAction<{statusAuth: EStatusAuth}>,
    ) => {
      state.statusAuth = action.payload.statusAuth;
    },
  },
});

export const {onLogin, updateStatusAuth} = authSlice.actions;

export const saveAuthAsync = (auth: IAuth) => {
  try {
    AsyncStorage.setItem('VoucherHunterAuth', JSON.stringify(auth));
  } catch (e) {
    // saving error
  }
};

export const getAuthAsync = async () => {
  try {
    const auth = await AsyncStorage.getItem('VoucherHunterAuth');
    if (auth) {
      return JSON.parse(auth);
    }
    return null;
  } catch (e) {
    // error reading value
    return null;
  }
};

export default authSlice.reducer;
