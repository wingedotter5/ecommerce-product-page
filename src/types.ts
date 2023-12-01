export interface CartItemI {
  id: string;
  productName: string;
  quantity: number;
  price: number;
  productImage: string;
}

export interface ProductI {
  company: string;
  productName: string;
  productDescription: string;
  price: number;
  discount: number;
  images: string[];
  id: string;
}
