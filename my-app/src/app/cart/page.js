"use client";
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../CartContext";
import { fetchDataFromUrl } from "../utils/api";
import Wrapper from "../components/Wrapper";
import Link from "next/link";
import Image from "next/image";
import CartItem from "../components/CartItem";
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
    <div className="w-full md:py-20">
      <Wrapper>
        {productsInCart.length > 0 && (
          <>
            {/* HEADING AND PARAGRAPH START */}
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Shopping Cart
              </div>
            </div>
            {/* HEADING AND PARAGRAPH END */}

            {/* CART CONTENT START */}
            <div className="flex flex-col lg:flex-row gap-12 py-10">
              {/* CART ITEMS START */}
              <div className="flex-[2]">
                <div className="text-lg font-bold">Cart Items</div>
                {productsInCart?.map((item) => (
                  <CartItem key={item?.product?.id} data={item} />
                ))}
              </div>
              {/* CART ITEMS END */}

              {/* SUMMARY START */}
              <div className="flex-[1]">
                <div className="text-lg font-bold">Summary</div>

                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                  <div className="flex justify-between">
                    <div className="uppercase text-md md:text-lg font-medium text-black">
                      Subtotal
                    </div>
                    <div className="text-md md:text-lg font-medium text-black">
                      {/* &#8377;{subTotal} */}
                    </div>
                  </div>
                  <div className="flex justify-between border-t mt-5">
                    <div className="uppercase text-md md:text-lg mt-5 font-medium text-black">
                      Shipping
                    </div>
                    <div className="text-md md:text-lg font-medium text-black">
                      {/* &#8377;{subTotal} */}
                    </div>
                  </div>
                  <div className="flex justify-between py-5 border-t mt-5">
                    <div className="uppercase text-md md:text-lg font-medium text-black">
                      Total
                    </div>
                    <div className="text-md md:text-lg font-medium text-black">
                      {/* &#8377;{subTotal} */}
                    </div>
                  </div>
                </div>

                {/* BUTTON START */}
                <button
                  className="w-full py-4 rounded-full bg-primary-color text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                  // onClick={handlePayment}
                >
                  Checkout
                  {/* {loading && <img src="/spinner.svg" />} */}
                </button>
                {/* BUTTON END */}
              </div>
              {/* SUMMARY END */}
            </div>
            {/* CART CONTENT END */}
          </>
        )}

        {/* This is empty screen */}
        {productsInCart.length < 1 && (
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
            <Image
              src="/empty-cart.jpg"
              width={300}
              height={300}
              className="w-[300px] md:w-[400px]"
            />
            <span className="text-xl font-bold">Your cart is empty</span>
            <span className="text-center mt-4">
              Looks like you have not added anything in your cart.
              <br />
              Go ahead and explore top categories.
            </span>
            <Link
              href="/"
              className="py-4 px-8 rounded-full bg-primary-color text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </Wrapper>
    </div>

    // <div className="flex flex-col md:flex-row w-full h-auto pt-0 m-0 ">
    //   {/* white section */}

    //   <div className="flex flex-1 h-full w-auto justify-center md:justify-start px-0 ">
    //     <div className="flex flex-col flex-1  md:pl-7 mt-2 md:mt-[100px] justify-evenly items-center md:items-start md:justify-start">
    //       <h1 className="font-bold font-heading tracking-[0.2rem] text-3xl md:text-4xl md:mb-5">
    //         Shopping Cart
    //       </h1>

    //       {productsInCart.every((qty) => qty === 0) ? (
    //         <div className="flex  w-full justify-center">
    //           <div className="flex font-semibold md:mt-[150px] text-3xl font-body ">
    //             Your cart is Empty!
    //           </div>
    //         </div>
    //       ) : (
    //         productsInCart.map((item, index) => {
    //           return (
    //             <div
    //               key={item?.product?.id}
    //               className="flex  w-full flex-row justify-between px-6 md:px-0 md:justify-center md:gap-1 "
    //             >
    //               <div className=" flex gap-9">
    //                 <div className="flex justify-center">
    //                   <img
    //                     src={
    //                       item?.product?.attributes?.thumbnail?.data?.attributes
    //                         ?.url
    //                     }
    //                     alt={item?.product?.attributes?.slug}
    //                     width={70}
    //                     height={70}
    //                     className="md:w-[150px] md:h-[150px]"
    //                   />
    //                 </div>
    //                 {/* title and price for mobile */}

    //                 <div className="md:hidden flex flex-col justify-center items-center gap-0">
    //                   <p className="md:text-xl text-xl font-semibold">
    //                     {item?.product?.attributes?.name}
    //                   </p>
    //                   <p className="md:text-xl text-lg">
    //                     ${item?.product?.attributes?.price * item.quantity}
    //                   </p>
    //                 </div>
    //               </div>

    //               <div className="flex  md:mt-0 justify-between md:items-center md:flex-auto gap-3 md:gap-1">
    //                 {/* title and price for web */}

    //                 <div className="hidden md:block  flex-col justify-center items-center gap-3">
    //                   <p className=" font-semibold md:text-xl text-lg">
    //                     Product
    //                   </p>
    //                   <p className="md:text-xl text-lg">
    //                     {item?.product?.attributes?.name}
    //                   </p>
    //                 </div>

    //                 <div className="hidden md:block  flex-col justify-center items-center gap-3">
    //                   <p className=" font-semibold md:text-xl text-lg">
    //                     Sub-Total
    //                   </p>
    //                   <p className="md:text-xl text-lg">
    //                     ${item?.product?.attributes?.price * item.quantity}
    //                   </p>
    //                 </div>
    //                 <div className="hidden md:block  flex-col justify-center items-center gap-3">
    //                   <p className=" font-semibold md:text-xl text-lg">Size</p>
    //                   <p className="md:text-xl text-lg">{item.size}</p>
    //                 </div>

    //                 <div className="flex flex-row justify-center items-center gap-3">
    //                   <button
    //                     onClick={() =>
    //                       cart.removeOneFromCart(item?.product?.id, item?.size)
    //                     }
    //                     className="bg-black w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-600 text-white"
    //                   >
    //                     -
    //                   </button>
    //                   <p>{item.quantity}</p>
    //                   <button
    //                     onClick={() =>
    //                       cart.addOneToCart(
    //                         item?.product?.id,
    //                         item?.size,
    //                         item?.quantity
    //                       )
    //                     }
    //                     className="bg-black w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-600 text-white"
    //                   >
    //                     +
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>
    //           );
    //         })
    //       )}
    //     </div>
    //   </div>

    //   {/* blue section */}
    //   <div className="flex flex-[0.4] h-screen w-auto px-10  bg-primary-color">
    //     <div className="flex flex-col flex-auto md:mt-5 md:mb-2 justify-evenly items-center">
    //       <h1 className="font-bold font-heading tracking-[0.2rem] text-3xl text-white md:text-4xl">
    //         Cart Total
    //       </h1>
    //       <div className="flex justify-between w-full px-5 ">
    //         <h1 className="font-semibold font-body text-white md:text-xl text-lg">
    //           Sub Total
    //         </h1>
    //         <h1 className="md:text-xl text-lg font-body">
    //           {/* ${cart.getTotalCost()} */}
    //         </h1>
    //       </div>
    //       <div className="flex justify-between w-full px-5 ">
    //         <h1 className="font-semibold font-body text-white md:text-xl text-lg">
    //           Shipping
    //         </h1>
    //         <h1 className="md:text-xl text-lg font-body">
    //           {/* {cart.getTotalCost() > 0 ? "$100" : "$0"} */}
    //         </h1>
    //       </div>
    //       <div className="flex justify-between w-full px-5 ">
    //         <h1 className="font-semibold font-body text-white md:text-xl text-lg">
    //           Total
    //         </h1>
    //         <h1 className="md:text-xl text-lg font-body">
    //           {/* ${cart.getTotalCost() > 0 ? cart.getTotalCost() + 100 : "0"} */}
    //         </h1>
    //       </div>
    //       <div className="flex w-full justify-center  px-5">
    //         <button
    //           // onClick={checkoutHandler}
    //           className="bg-secondary-color text-black px-8  text-center text-lg rounded-[4px]  py-2 font-body"
    //         >
    //           Proceed to checkout
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Cart;
