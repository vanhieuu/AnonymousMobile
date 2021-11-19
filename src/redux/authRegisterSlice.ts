import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EGender, IAdress } from "./authSlice";






export interface IDataRegister{
    username:string;
    email:string;
    displayName:string;
    gender:EGender;
    phone:string;
    address:IAdress
    
  }
  export interface IRegister{
    username: IDataRegister;
    createdAt: string;
    accessToken: string;
  }
  const initValue:IRegister = {
        username: {
            username:'',
            email:'',
            phone:"",
            displayName:"",
            gender:1,
            address:{
                city:'',
                district:'',
                ward:"",
                detail:""
            },
        },
        createdAt:"",
        accessToken:""
  }

  export const authRegisterSlice = createSlice({
    name:"register",
    initialState: initValue,
    reducers:{
      onRegister:(state,action:PayloadAction<IRegister>)=>{
        state.username = action.payload.username;
        state.accessToken= action.payload.accessToken;
        state.createdAt= action.payload.createdAt;
      }
    }
  })
  export const {onRegister} = authRegisterSlice.actions
  export default authRegisterSlice.reducer