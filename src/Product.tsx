import { ChangeEvent, useState } from "react";

import { ProductI } from "./types";
import { useAppDispatch } from "./hooks";
import { addToCart } from "./cartSlice";
import Carousel from "./components/Carousel";

interface ProductProps {
  product: ProductI;
}

const Product = ({ product }: ProductProps) => {
  const dispatch = useAppDispatch();
  const [itemsCount, setItemsCount] = useState(0);
  const handleItemsCountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setItemsCount(Number(e.target.value));
  };
  const addOne = () => setItemsCount((prevState) => prevState + 1);
  const removeOne = () =>
    setItemsCount((prevState) => {
      if (prevState > 0) return prevState - 1;
      return prevState;
    });
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const showLightbox = () => setLightboxVisible(true);
  const hideLightbox = () => setLightboxVisible(false);

  return (
    <div className="grid place-items-center sm:grid-cols-1 sm:px-10 sm:py-20 md:grid-cols-2">
      <Carousel images={product.images} showLightbox={showLightbox} />

      {lightboxVisible && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-[rgba(0,0,0,0.7)]">
          <div className="flex flex-col">
            <button className="mb-5 self-end" onClick={hideLightbox}>
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="white"
                  fillRule="evenodd"
                />
              </svg>
            </button>
            <Carousel images={product.images} arrows />
          </div>
        </div>
      )}

      <div className="p-4">
        <small className="text-lg font-semibold text-orange">
          {product.company}
        </small>
        <h2 className="mb-5 text-3xl font-semibold md:text-6xl">
          {product.productName}
        </h2>
        <p className="text-dark-grayish-blue md:text-2xl">
          {product.productDescription}
        </p>

        <div className="flex items-center justify-between py-5 sm:block">
          <div className="flex items-center gap-4 text-3xl font-bold">
            {`$${((product.price * product.discount) / 100).toFixed(2)}`}{" "}
            <span className="rounded bg-pale-orange p-1 text-lg font-semibold text-orange">{`${product.discount}%`}</span>
          </div>
          <div className="text-md text-grayish-blue line-through">{`$${product.price.toFixed(
            2,
          )}`}</div>
        </div>

        <div className="flex flex-col items-center gap-5 md:flex-row">
          <div className="flex w-full items-center justify-between rounded-md bg-light-grayish-blue px-6 py-4 sm:max-w-[200px]">
            <button className="p-2" onClick={removeOne}>
              <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                  id="a"
                  fill="#FF7E1B"
                  fillRule="nonzero"
                />
              </svg>
            </button>
            <input
              className="w-full bg-light-grayish-blue text-center sm:w-10"
              type="text"
              value={itemsCount}
              onChange={handleItemsCountChange}
            />
            <button className="p-2" onClick={addOne}>
              <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                  id="b"
                  fill="#FF7E1B"
                  fillRule="nonzero"
                />
              </svg>
            </button>
          </div>

          <button
            className="flex w-full flex-wrap items-center justify-center gap-2 rounded-lg bg-orange px-8 py-4 text-lg font-semibold text-white"
            onClick={() =>
              dispatch(
                addToCart({
                  productImage: product.images[0],
                  price: product.price,
                  quantity: itemsCount,
                  id: product.id,
                  productName: product.productName,
                }),
              )
            }
          >
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="white"
                fillRule="nonzero"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
