import { INewsData } from "../redux/newSlice";

export interface IShortItem {
    name:string,
    price:string,
    type:string,
}

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
  img:string;
  tags: [];
  description:[]
  sold:number;
  vote:number;

}
export interface IResNews {
  success:boolean;
  message:string;
  data:INewsData[]
}
export interface IResProduct{
  data:IProduct[]
}