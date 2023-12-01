import { nanoid } from "@reduxjs/toolkit";

import { ProductI } from "./types";
import Image1 from "./assets/images/image-product-1.jpg";
import Image2 from "./assets/images/image-product-2.jpg";
import Image3 from "./assets/images/image-product-3.jpg";
import Image4 from "./assets/images/image-product-4.jpg";

export const product: ProductI = {
  company: "SNEAKER COMPANY",
  productName: "Fall Limited Edition Sneakers",
  productDescription: `These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.`,
  price: 250,
  discount: 50,
  images: [Image1, Image2, Image3, Image4],
  id: nanoid(),
};
