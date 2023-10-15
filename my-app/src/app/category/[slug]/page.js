"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "@/app/components/Wrapper";
import { fetchDataFromUrl } from "@/app/utils/api";
import ProductCard from "@/app/components/ProductCard";
import Slider from "@mui/material/Slider";

const Category = ({ params }) => {
  const [apiCatData, setApiCatData] = useState(null);
  const [apiProdData, setApiProdData] = useState(null);
  const [inputValue, setinputValue] = useState("");
  const [searchFilterData, setSearchFilterData] = useState(null);
  const [priceFilterData, setPriceFilterData] = useState(null);

  const [value, setValue] = useState([1500, 3500]);

  const fetchData = async () => {
    const category = await fetchDataFromUrl(
      `/api/categories?filters[slug][$eq]=${params.slug}`
    );
    const products = await fetchDataFromUrl(
      `/api/products?populate=*&[filters][categories][slug][$eq]=${params.slug}`
    );
    const searchFilteredData = await fetchDataFromUrl(
      `/api/products?populate=*&[filters][categories][slug][$eq]=${params.slug}&[filters][slug][$contains]=${inputValue}`
    );
    const priceFilteredData = await fetchDataFromUrl(
      `/api/products?populate=*&[filters][categories][slug][$eq]=${params.slug}&[filters][price][$in]=${value[0]}`
    );
    setApiCatData(category);
    setApiProdData(products);
    setSearchFilterData(searchFilteredData);
    setPriceFilterData(priceFilteredData);
  };
  useEffect(() => {
    fetchData();
  }, [inputValue, value]);

  const valuetext = (value) => {
    return value;
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Wrapper>
        <div className="text-center max-w-[700px] mx-auto mt-8 md:mt-5">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            {apiCatData?.data?.[0]?.attributes?.name}
          </div>
        </div>
        {/* products grid start */}
        <div className="flex justify-center ">
          <div className="hidden md:flex flex-col gap-8 my-14 mr-8">
            {/* input search field */}
            <div className="flex flex-col gap-3 ">
              <p className="text-xl font-custom-font text-gray-600 font-semibold">
                Search
              </p>
              <div
                style={{
                  borderTop: "4px solid",
                  width: "50px",
                  color: "lightgray",
                }}
              ></div>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setinputValue(e.target.value)}
                className="bg-slate-100 border-primary-color p-2 rounded-md w-80 "
              />
            </div>
            {/* filter by price */}
            <div className="flex flex-col gap-3 ">
              <p className="text-xl font-custom-font text-gray-600 font-semibold">
                Filter By Price
              </p>
              <div
                style={{
                  borderTop: "4px solid",
                  width: "50px",
                  color: "lightgray",
                }}
              ></div>
              <div style={{ width: 300 }}>
                <Slider
                  getAriaLabel={() => "Price range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  min={1000}
                  max={5000}
                  step={500}
                  marks
                  disableSwap
                  sx={{ color: "#011B43" }}
                />
              </div>
              <p className="flex justify-end">
                Price : {value[0]}-{value[1]}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0 ">
            {/* {searchFilterData
              ? searchFilterData.data?.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))
              : !searchFilterData */}
            {/* priceFilterData?
               priceFilterData?.data?.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))
              {/* : !searchFilterData && !priceFilterData */}
            {/* : apiProdData?.data.map((product) => (
                  <ProductCard key={product.id} data={product} />
                )) */}

            {priceFilterData
              ? priceFilterData?.data?.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))
              : apiProdData?.data.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;

// {searchFilterData
//   ? searchFilterData.data?.map((product) => (
//       <ProductCard key={product.id} data={product} />
//     ))
//   : !searchFilterData
//   ? priceFilterData?.data?.map((product) => (
//       <ProductCard key={product.id} data={product} />
//     ))
//   : !searchFilterData && !priceFilterData
//   ? apiProdData?.data.map((product) => (
//       <ProductCard key={product.id} data={product} />
//     ))
//   : ""}
