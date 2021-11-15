
export interface IShortItem {
    name:string,
    price:string,
    type:string,
}

export interface IProductItem {
  id: number;
  product_id: number;
  item_id: number;
  created_at: string;
  updated_at: string;
  category: string;
  item: {
    id: number;
    name: string;
    type: string;
    img:string,
    listedPrice: string;
    discountPrice: string;
    is_hot: boolean;
    supplier: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    
  };
}

export interface IProduct {
  id: number;
  product_id: number;
  name: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  price: number;
  type: string;
  item:IShortItem[]
  product_item:IProductItem[]
}
