import Image from "next/image";
import modelimage from "../../public/images/modelnew.svg";
import clothimage from "../../public/black_Front.png"
import profileimage from "../../public/images/profile.jpg"
export default function Home() {
  return (
    <div>
      <div className="w-full ">
        <div className="w-full h-screen justify-center align-middle flex flex-col md:flex-row bg-[#EAECFD] space-y-[4rem]">
          <div className="w-full md:w-[60%] md:h-full flex items-center md:items-start justify-center flex-col md:space-y-6 px-[5rem]">
            <div className="flex flex-col">
              <h3 className="text-sm md:text-xl font-semibold mb-1 md:mb-3">Trendy Collections</h3>
              <h1 className=" font-custom-font font-semibold text-5xl md:text-8xl tracking-[0.2rem] md:tracking-[0.35rem] text-black uppercase ">
                Dresses to
              </h1>
              <h1 className=" font-custom-font font-semibold text-5xl md:text-8xl tracking-[0.2rem] md:tracking-[0.35rem] text-black uppercase ">
                be Noticed
              </h1>
            </div>
            <div className="flex flex-col items-center md:items-start md:pl-3">
              <p className="text-lg md:text-2xl font-custom-font  ">
                Fashion is part of the daily air and it changes
              </p>
              <p className="text-lg md:text-2xl font-custom-font  ">
                all the time,with all the events
              </p>
            </div>
            
          </div>
          <div className="w-full md:w-[40%] flex md:h-full items-center justify-center px-5">
            <Image
              className="w-[40%] md:w-[65%]"
              src={modelimage}
              alt="Model Profile"
            />
          </div>
        </div>




        {/* Lattest products */}
        <div className="w-full py-[6rem] px-8 space-y-[6rem]">
          <div>
            <h2 className="text-2xl font-semibold font-custom-font">Lattest Product</h2>
          </div>
          <div className="w-full flex ">
            <div className="w-full flex flex-col md:flex-row space-x-[6rem] space-y-[4rem]  ">

              <div className="w-1/2 card flex flex-col ">
                <Image src={clothimage} className="w-[250px] h-[250px]" alt="cloth image1"/>

                {/* price */}

                <div className="w-1/2 flex flex-row justify-between">
                  <h2>Black Jacket</h2>
                  <h2>$450</h2>


                </div>

                

              </div>

              
  

            </div>


          </div>
        </div>






        {/* Reviews */}

        <div className="w-full bg-blue-400 flex flex-col md:flex-row px-8 py-[4rem] md:py-[6rem] space-y-6">

          <div className="w-full md:w-[60%] flex flex-col justify-center items-center space-y-[4rem] px-8 py-[3rem] md:py-[6rem] bg-slate-200 rounded-lg">

            <h2 className="text-3xl font-custom-font font-semibold">What our customer says</h2>

            <div className="w-full md:w-[80%] flex flex-col space-y-[0.7rem] justify-center items-center md:items-start ">

              {/* profile */}
              <Image src={profileimage} className="w-[5rem] h-[5rem]" alt="profile image"/>


              <h2 className="text-2xl font-semibold">Anonymous</h2>

              <p className="text-lg font-medium font-custom-font">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            </div>

          </div>

          <div className="w-full md:w-[40%] flex justify-center items-center"> 

          <Image src={clothimage} className="w-[410px] h-[410px]" alt="cloth image" />

          </div>
        </div>
      </div>
    </div>
  );
}
