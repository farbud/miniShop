import { StaticImageData } from "next/image";

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string | StaticImageData;
}

export interface CartItem extends Product {
  quantity: number;
}
