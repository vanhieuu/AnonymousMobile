import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProduct {
  _id: string;
  name: string;
  listedPrice:number;
  discountPrice:number;
  is_hot:boolean;
  listphotos:[];
  created_at: string;
  updated_at: string;
  deleted_at: string;
  quantity:number;
  tags: [];
  description:[]

}

export enum EStatusAuth {
  check = 1,
  unauth = 2,
  auth = 3,
}


export interface IAuth {
  productId: string;
  message: string;
  statusAuth: EStatusAuth;
}




export interface IResProduct {
    success: boolean;
    message: string;
    product: IProduct[];
  }

const initValue:IAuth = {
  productId:'',
  message:'',
  statusAuth:EStatusAuth.check,
}
export const productSlice = createSlice({
  name: 'product',
  initialState: initValue,
  reducers: {
    onGetProduct: (state, action: PayloadAction<IAuth>) => {
      state.productId = action.payload.productId;
      state.message = action.payload.message;
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
export const {onGetProduct, updateStatusAuth} = productSlice.actions;
export default productSlice.reducer;