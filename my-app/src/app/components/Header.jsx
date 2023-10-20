"use client";
import React, { useState, useEffect, useContext } from "react";
import Wrapper from "./Wrapper";

import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import Sitelogo from "../../../public/images/logo.svg";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { fetchDataFromUrl } from "../utils/api";
import { CartContext } from "../../../CartContext";
import CartItem from "./CartItem";
import CartMenu from "./CartMenu";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(null);
  const [categoryData, setCategoryData] = useState(null);
  const [productsData, setProductsData] = useState(null);
  const [isCartHovered, setCartHovered] = useState(false);

  const cart = useContext(CartContext);
  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    try {
      const res = await fetchDataFromUrl("/api/categories?populate=*", {
        cache: "force-cache",
      });
      const products = await fetchDataFromUrl("/api/products?populate=*");
      setCategoryData(res);
      setProductsData(products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const productQuantity = productsData?.data?.map((product) => {
    const sizes = product.attributes?.size?.data || [];
    const cartItems = sizes.map((sizeItem) => {
      const cartItem = cart.getProductQuantity(product.id, sizeItem.size);
      return cartItem;
    });
    return cartItems;
  });

  const flattenedProductQuantity = productQuantity?.flat();
  const totalCartItems = flattenedProductQuantity?.reduce(
    (total, quantity) => total + quantity,
    0
  );

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

  return (
    <header className="w-full h-[50px] md:h-[80px] bg-primary-color  flex items-center shadow-lg justify-between top-0 z-50 sticky">
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <Image
            src={Sitelogo}
            alt="site logo"
            className="w-40px md:w-[140px]"
          />
          {/* <img src={Sitelogo} className="w-[40px] md:w-[60px]" /> */}
        </Link>

        <Menu
          showSubMenu={showSubMenu}
          setShowSubMenu={setShowSubMenu}
          categoryData={categoryData}
        />

        {mobileMenu && <MenuMobile />}

        <div className="flex items-center gap-2 text-white">
          {/* Icon start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              51
            </div>
          </div>
          {/* Icon end */}

          {/* Icon start */}

          <div
            onMouseEnter={() => setCartHovered(true)}
            onMouseLeave={() => setCartHovered(false)}
            className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center  cursor-pointer relative"
          >
            <Link href="/cart">
              <BsCart className="text-[15px] md:text-[20px]" />
            </Link>
            {isCartHovered && (
              <div className="absolute top-full right-0 bg-primary-color rounded-lg w-[300px] p-5 py-9 shadow-lg  ">
                {totalCartItems === 0
                  ? "No products available"
                  : productsInCart?.map((item) => {
                      return <CartMenu key={item?.product?.id} data={item} />;
                    })
                    <button>Hello</button>}
              </div>
            )}

            {totalCartItems > 0 ? (
              <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                {totalCartItems}
              </div>
            ) : null}
          </div>

          {/* Icon end */}

          {/* Mobile icon start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose className="text-[16px]" />
            ) : (
              <BiMenuAltRight className="text-[20px]" />
            )}
          </div>
          {/* Mobile icon end */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
