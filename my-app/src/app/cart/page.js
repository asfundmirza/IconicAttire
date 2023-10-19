"use client";
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../CartContext";
import { fetchDataFromUrl } from "../utils/api";
const Cart = () => {
  const [productsData, setProductsData] = useState(null);

  const cart = useContext(CartContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const products = await fetchDataFromUrl("/api/products?populate=*");

      setProductsData(products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const productsInCart = [];

  cart?.items?.forEach((cartItem) => {
    const product = productsData?.data?.find(
      (product) => product.id === cartItem.id
    );

    if (product) {
      productsInCart.push({
        product,
        size: cartItem.size,
        quantity: cartItem.quantity,
      });
    }
  });

  // const productName = productsInCart[0]?.product?.attributes?.name;
  // console.log(productsInCart);

  return (
    <div className="flex flex-col md:flex-row w-screen h-[100vh] pt-12 m-0 ">
      {/* white section */}

      <div className="flex flex-1 h-full w-auto justify-center md:justify-start px-0 ">
        <div className="flex flex-col flex-1  md:pl-7 mt-2 md:mt-[100px] justify-evenly items-center md:items-start md:justify-start">
          <h1 className="font-bold font-heading tracking-[0.2rem] text-3xl md:text-4xl md:mb-5">
            Shopping Cart
          </h1>

          {productsInCart.every((qty) => qty === 0) ? (
            <div className="flex  w-full justify-center">
              <div className="flex font-semibold md:mt-[150px] text-3xl font-body ">
                Your cart is Empty!
              </div>
            </div>
          ) : (
            productsInCart.map((item, index) => {
              return (
                <div
                  key={item?.product?.id}
                  className="flex  w-full flex-row justify-between px-6 md:px-0 md:justify-center md:gap-1 "
                >
                  <div className=" flex gap-9">
                    <div className="flex justify-center">
                      <img
                        src={
                          item?.product?.attributes?.thumbnail?.data?.attributes
                            ?.url
                        }
                        alt={item?.product?.attributes?.slug}
                        width={70}
                        height={70}
                        className="md:w-[150px] md:h-[150px]"
                      />
                    </div>
                    {/* title and price for mobile */}

                    <div className="md:hidden flex flex-col justify-center items-center gap-0">
                      <p className="md:text-xl text-xl font-semibold">
                        {item?.product?.attributes?.name}
                      </p>
                      <p className="md:text-xl text-lg">
                        ${item?.product?.attributes?.price * item.quantity}
                      </p>
                    </div>
                  </div>

                  <div className="flex  md:mt-0 justify-evenly md:items-center md:flex-auto gap-3 md:gap-1">
                    {/* title and price for web */}

                    <div className="hidden md:block  flex-col justify-center items-center gap-3">
                      <p className=" font-semibold md:text-xl text-lg">Model</p>
                      <p className="md:text-xl text-lg">
                        {item?.product?.attributes?.name}
                      </p>
                    </div>

                    <div className="hidden md:block  flex-col justify-center items-center gap-3">
                      <p className=" font-semibold md:text-xl text-lg">
                        Sub-Total
                      </p>
                      <p className="md:text-xl text-lg">
                        ${item?.product?.attributes?.price * item.quantity}
                      </p>
                    </div>

                    <div className="flex flex-row justify-center items-center gap-3">
                      <button
                        // onClick={() => cart.removeOneFromCart(product.id)}
                        className="bg-black w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-600 text-white"
                      >
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        // onClick={() => cart.addOneToCart(product.id)}
                        className="bg-black w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-600 text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* green section */}
      <div className="flex flex-[0.6] h-full w-auto px-10  bg-primary-color">
        <div className="flex flex-col flex-auto md:mt-5 md:mb-2 justify-evenly items-center">
          <h1 className="font-bold font-heading tracking-[0.2rem] text-3xl md:text-4xl">
            Cart Total
          </h1>
          <div className="flex justify-between w-full px-5 ">
            <h1 className="font-semibold font-body md:text-xl text-lg">
              Sub Total
            </h1>
            <h1 className="md:text-xl text-lg font-body">
              {/* ${cart.getTotalCost()} */}
            </h1>
          </div>
          <div className="flex justify-between w-full px-5 ">
            <h1 className="font-semibold font-body md:text-xl text-lg">
              Shipping
            </h1>
            <h1 className="md:text-xl text-lg font-body">
              {/* {cart.getTotalCost() > 0 ? "$100" : "$0"} */}
            </h1>
          </div>
          <div className="flex justify-between w-full px-5 ">
            <h1 className="font-semibold font-body md:text-xl text-lg">
              Total
            </h1>
            <h1 className="md:text-xl text-lg font-body">
              {/* ${cart.getTotalCost() > 0 ? cart.getTotalCost() + 100 : "0"} */}
            </h1>
          </div>
          <div className="flex w-full justify-center  px-5">
            <button
              // onClick={checkoutHandler}
              className="bg-black text-white px-8  text-center text-lg rounded-[4px]  py-2 font-body"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
