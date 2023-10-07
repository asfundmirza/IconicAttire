import React from "react";
import Wrapper from "@/app/components/Wrapper";

const Category = ({ params }) => {
  return (
    <div>
      <Wrapper className="text-6xl">Category:{params.slug}</Wrapper>
    </div>
  );
};

export default Category;
