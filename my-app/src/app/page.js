"use client";
import Image from "next/image";
import modelimage from "../../public/model.svg";
import WhiteShirt from "../../public/long-shirt_white_FRONT.png";
import BlackJacket from "../../public/black_FRONT.png";
import NavyPant from "../../public/pants_navy_FRONT.png";
import profile from "../../public/images/profile.jpg";
import winter from "../../public/winter.jpg";
import upcoming from "../../public/upcoming.jpg";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import { fetchDataFromUrl } from "./utils/api";
import RelatedProducts from "./components/RelatedProducts";
import Wrapper from "./components/Wrapper";
import Link from "next/link";
export default function Home() {
  const [apiProductsData, setApiProductsData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const products = await fetchDataFromUrl(`/api/products?populate=*`);

    setApiProductsData(products);
  };
  return (
    <div>
      <div className="w-full ">
        <div className="w-full h-screen relative flex flex-col md:flex-row bg-gradient-radial from-[#F3F9FF] to-[#DAECFF] ">
          <div className="flex items-center flex-col justify-center mt-9 md:mt-0 md:py-5  px-4    flex-1 md:flex-[0.9]">
            {/* Left side content  */}
            <div className="flex flex-col">
              <h3 className="text-sm md:text-xl font-bold md:font-semibold mb-3 md:mb-3">
                Trendy Collections
              </h3>
              <h1 className="font-custom-font font-bold md:font-semibold text-5xl custom-homeTextWidth-sm:text-6xl  custom-homeTextWidth-lg:text-8xl custom-homeTextWidth-md:text-7xl tracking-[0.2rem] md:tracking-[0.35rem] text-black uppercase mb-1 md:mb-3">
                Dresses to
              </h1>
              <h1 className="font-custom-font font-bold md:font-semibold text-5xl custom-homeTextWidth-sm:text-6xl  custom-homeTextWidth-lg:text-8xl custom-homeTextWidth-md:text-7xl  tracking-[0.2rem] md:tracking-[0.35rem] text-black uppercase">
                be Noticed
              </h1>
            </div>
            <div className="flex   text-center ">
              <p className="md:text-lg text-sm  font-custom-font">
                Fashion is part of the daily air and it changes <br /> all the
                time, with all the events
              </p>
            </div>
          </div>
          {/*  Right side content */}
          <div className="flex flex-1 md:flex-[0.6]  mb-4 md:mb-0 md:mt-0   w-full h-fit md:h-auto ">
            <div className="flex flex-1 md:px-4 px-8  items-center justify-center absolute bottom-0 object-fill">
              <Image
                src={modelimage}
                alt="cycle "
                className=" w-[600px] md:h-[600px] h-[400px]"
              />
            </div>
          </div>
        </div>

        <Wrapper className="max-w-[1300px]  ">
          {apiProductsData ? (
            <RelatedProducts
              products={apiProductsData}
              ParentClassName="md:mt-0 md:mb-[100px] md:mx-[100px]"
              innerParentClassName="justify-center mb-8"
              innerClassName="md:text-4xl mb-12 px-4 py-2 font-semibold bg-primary-color text-white w-fit rounded-lg  "
              text="Our Products"
            />
          ) : (
            <div className="flex max-w-[1300px] h-[400px] justify-center items-center">
              <CircularProgress />
            </div>
          )}
        </Wrapper>

        {/* off banner */}

        <div className="w-full bg-[#EBD96B] py-[2rem] md:py-[5rem]  px-[2rem] flex flex-col space-y-6 justify-center items-center">
          <div className="w-full flex flex-col items-center justify-center ">
            <h1 className="text-xl md:text-4xl font-bold font-custom-font">
              Upto 70% off-All T-Shirts
            </h1>
          </div>
          <div className="w-full flex flex-row justify-center pt-[0.2rem] md:pt-[2rem]">
            <Link href={"/category/shirts"}>
              <button className="flex flex-row justify-center text-white font-semibold bg-slate-900 hover:bg-slate-800 border-0 py-[0.4rem] md:py-2 px-4 md:px-8 focus:outline-none  rounded-md ">
                <h1 className="text-sm md:text-lg">Explore More</h1>
              </button>
            </Link>
          </div>
        </div>

        <Wrapper>
          {/* upcoming */}

          <div className="w-full flex flex-col md:flex-row py-[6rem]  space-x-0 space-y-4 md:space-y-0 md:space-x-10">
            <div className="winter w-full bg-slate-900 flex justify-center items-center ">
              <div className=" absolute z-10 ">
                <h3 className="text-white text-xl md:text-4xl"> Winter Sale</h3>
              </div>
              <Image src={winter} className="w-[800px] md:w-[1200px] rounded-md md:rounded-lg" />

             
            </div>
            <div className="upcoming w-full">
              <Image
                src={upcoming}
                className="w-[800px]  rounded-md"
              />
            </div>
          </div>
          {/* Stats */}
          {/* <section className="text-gray-300 body-font ">
            <div className="container px-5 py-13 mx-auto"> */}
          {/* <div className="text-center text-5xl text-black mb-9 ">STATS</div> */}
          {/* <div className="flex flex-wrap bg-primary-color rounded-lg -m-4 py-6 text-center">
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                    2.7K
                  </h2>
                  <p className="leading-relaxed">Users</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                    1.8K
                  </h2>
                  <p className="leading-relaxed">Subscribes</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                    3.5K
                  </h2>
                  <p className="leading-relaxed">Purchase</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                    15
                  </h2>
                  <p className="leading-relaxed">Products</p>
                </div>
              </div>
            </div>
          </section> */}

          {/* pics description */}

          {/* <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <Link href={"/category/shirts"}>
                <button className="flex mx-auto mb-20 text-black font-semibold bg-secondary-color border-0 py-2 px-8 focus:outline-none  rounded text-lg">
                  Explore More
                </button>
              </Link>
              <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="h-[300px] w-[300px] md:h-[500px] md:w-[500px] sm:mr-10 inline-flex items-center justify-center rounded-md bg-slate-50  flex-shrink-0">
                  <Image
                    src={WhiteShirt}
                    alt="whiteshirt"
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    White Shirt - Long sleeves
                  </h2>
                  <p className="leading-relaxed text-base">
                    Introducing the ultimate long sleeve shirt that’s bound to
                    steal hearts and turn heads. Impeccable craftsmanship, clean
                    design, and a touch of color. This shirt is not just
                    fashion; it’s an instant outfit upgrade. Elevate your style
                    effortlessly, whether it’s a casual brunch or a night out on
                    the town. Available in different sizes and colors.
                  </p>
                </div>
              </div>
              <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    Navy Pants
                  </h2>
                  <p className="leading-relaxed text-base">
                    Impeccably crafted and available in a stunning array of
                    colors, these pants are designed to make you stand out.
                    Experience the perfect blend of quality and fashion, all in
                    one pair of pants. Pairs perfectly with the GEN Jacket.
                  </p>
                </div>
                <div className="h-[300px] w-[300px] md:h-[500px] md:w-[500px] sm:order-none order-first  sm:ml-10 inline-flex items-center justify-center rounded-md bg-slate-50  flex-shrink-0">
                  <Image
                    src={NavyPant}
                    alt="whiteshirt"
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex items-center lg:w-4/5 mx-auto sm:flex-row flex-col">
                <div className="h-[300px] w-[300px] md:h-[500px] md:w-[500px] sm:mr-10 inline-flex items-center justify-center rounded-md bg-slate-50  flex-shrink-0">
                  <Image
                    src={BlackJacket}
                    alt="whiteshirt"
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    Black Jacket
                  </h2>
                  <p className="leading-relaxed text-base">
                    Impeccably crafted and available in a stunning array of
                    colors, these jackets are designed as a statement of your
                    outfit. Perfectly paired with the GEN pants but also
                    beautiful with any other bottom item and T-shirts or shirt.
                    Experience the perfect blend of quality and fashion and
                    enjoy mixture between an elegant and casual look filled with
                    class.
                  </p>
                </div>
              </div>
            </div>
          </section> */}

          {/* testimonial */}
          <section className="text-gray-600 body-font">
            <div className="container px-5 pb-24 mx-auto">
              <button className="flex hover:cursor-default mx-auto mb-20 text-black font-semibold  border-0 py-2 px-8 focus:outline-none  rounded md:text-4xl text-xl">
                What our customers says
              </button>

              <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                  <div className="h-full text-center">
                    <Image
                      alt="testimonial"
                      className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block  border-gray-200 "
                      src={profile}
                    />
                    <p className="leading-relaxed">
                      Shopping at this clothing store has been an absolute
                      delight! Their collection offers a perfect blend of style,
                      quality, and comfort. I've never felt more confident and
                      fashionable in their outfits. I am loving their products.
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-[#0474C6] mt-6 mb-4"></span>
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                      HOLDEN CAULFIELD
                    </h2>
                  </div>
                </div>
                <div className="hidden md:block lg:w-1/3 lg:mb-0 mb-6 p-4">
                  <div className="h-full text-center">
                    <Image
                      alt="testimonial"
                      className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block  border-gray-200 "
                      src={profile}
                    />
                    <p className="leading-relaxed">
                      I can't praise this clothing brand enough. The attention
                      to detail in their designs is remarkable. Whether it's
                      casual wear or formal attire, their clothing range is a
                      reflection of elegance and sophistication.
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-[#0474C6] mt-6 mb-4"></span>
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                      ALPER KAMU
                    </h2>
                  </div>
                </div>
                <div className="hidden md:block lg:w-1/3 lg:mb-0 p-4">
                  <div className="h-full text-center">
                    <Image
                      alt="testimonial"
                      className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block  border-gray-200 "
                      src={profile}
                    />
                    <p className="leading-relaxed">
                      I've been a loyal customer for years, and I must say that
                      the quality of clothing and the level of service are
                      top-notch. Each piece I've purchased is a testament to
                      their commitment to delivering trendy, fashionable
                      clothing.
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-[#0474C6] mt-6 mb-4"></span>
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                      HENRY LETHAM
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Wrapper>
      </div>
    </div>
  );
}
