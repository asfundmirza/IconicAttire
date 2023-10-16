"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "@/app/components/Wrapper";
import { fetchDataFromUrl } from "@/app/utils/api";
import ProductCard from "@/app/components/ProductCard";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Category = ({ params }) => {
  const [apiCatData, setApiCatData] = useState(null);
  const [apiProdData, setApiProdData] = useState(null);
  const [inputValue, setinputValue] = useState("");

  const [value, setValue] = useState([1000, 5000]);
  const [anchorEl, setAnchorEl] = useState(null);

  const fetchData = async () => {
    const category = await fetchDataFromUrl(
      `/api/categories?filters[slug][$eq]=${params.slug}`
    );
    const products = await fetchDataFromUrl(
      `/api/products?populate=*&[filters][categories][slug][$eq]=${params.slug}&[filters][slug][$contains]=${inputValue}&[filters][price][$gte]=${value[0]}&[filters][price][$lte]=${value[1]}`
    );

    setApiCatData(category);
    setApiProdData(products);
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
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
                className="bg-slate-100 border-primary-color p-2 rounded-md w-60 "
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
              <div style={{ width: 230 }}>
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
            {/* sorting */}
            <div className="flex flex-col gap-3 ">
              <p className="text-xl font-custom-font text-gray-600 font-semibold">
                Sort By
              </p>
              <div
                style={{
                  borderTop: "4px solid",
                  width: "50px",
                  color: "lightgray",
                }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0 ">
            {apiProdData?.data?.map((product) => (
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

// api for the filtering and sorting
///api/products?populate=*&sort=publishedAt:asc&[filters][categories][slug][$eq]=shirts&[filters][slug][$contains]=n&[filters][price][$gte]=1500&[filters][price][$lte]=5000
