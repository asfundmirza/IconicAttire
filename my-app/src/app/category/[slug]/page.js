"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "@/app/components/Wrapper";
import { fetchDataFromUrl } from "@/app/utils/api";
import ProductCard from "@/app/components/ProductCard";

const Category = ({ params }) => {
  const [apiCatData, setApiCatData] = useState(null);
  const [apiProdData, setApiProdData] = useState(null);

  const fetchData = async () => {
    const category = await fetchDataFromUrl(
      `/api/categories?filters[slug][$eq]=${params.slug}`
    );
    const products = await fetchDataFromUrl(
      `/api/products?populate=*&[filters][categories][slug][$eq]=${params.slug}`
    );
    setApiCatData(category);
    setApiProdData(products);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-5">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            {apiCatData?.data?.[0]?.attributes?.name}
          </div>
        </div>
        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {apiProdData?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
