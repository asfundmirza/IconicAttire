import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProductCard = ({ data }) => {
  return (
    // <section className="text-gray-600 body-font">
    //   <div className="container px-5 py-24 mx-auto">
    //     <div className="flex flex-wrap -m-4">
    //       <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
    //         <Link
    //           href={`/product/${p.slug}`}
    //           className="block relative h-48 rounded overflow-hidden"
    //         >
    <>
      <Image
        width={600}
        height={600}
        alt={data.attributes.name}
        // className="object-cover object-center w-full h-full block"
        src={data?.attributes?.thumbnail?.data?.attributes?.url}
      />
    </>

    //           <div className="mt-4">
    //             <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
    //               CATEGORY
    //             </h3>
    //             <h2 className="text-gray-900 title-font text-lg font-medium">
    //               The Catalyzer
    //             </h2>
    //             <p className="mt-1">$16.00</p>
    //           </div>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    // <Link
    //   href={`/product/${p.slug}`}
    //   className="transform overflow-hidden bg-white object-fill duration-200 hover:scale-105 cursor-pointer"
    // >
    //   <Image
    //     width={500}
    //     height={500}
    //     src={p.thumbnail.data.attributes.url}
    //     alt={p.name}
    //   />
    //   <div className="p-4 text-black/[0.9]">
    //     <h2 className="text-lg font-medium">{p.name}</h2>
    //     <div className="flex items-center text-black/[0.5]">
    //       <p className="mr-2 text-lg font-semibold">&#8377;{p.price}</p>

    /* {p.original_price && (
            <>
              <p className="text-base  font-medium line-through">
                &#8377;{p.original_price}
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                {getDiscountedPricePercentage(p.original_price, p.price)}% off
              </p>
            </>
          )} */
    //     </div>
    //   </div>
    // </Link>
  );
};

export default ProductCard;
