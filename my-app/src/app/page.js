
import Image from "next/image";
import modelimage from "../../public/images/modelnew.svg"
export default function Home() {
  return (
    <div>
      <div className="w-full " >
      <div className="w-full h-screen justify-center align-middle flex flex-col md:flex-row bg-[#EAECFD]">
      <div className="w-full md:h-full flex items-center md:items-start justify-center flex-col md:space-y-6 px-5">
        <div className="flex flex-col">
        <h1 className=" font-custom-font text-5xl md:text-7xl text-black font-bold uppercase ">Dresses to</h1>
        <h1 className=" font-custom-font text-5xl md:text-7xl text-black font-bold uppercase ">be Noticed</h1>
        </div>
        <div className="flex flex-col items-center md:items-start md:pl-3">
          <p className="text-lg md:text-xl font-custom-font ">Fashion is part of the daily air and it changes</p>
          <p className="text-lg md:text-xl font-custom-font ">all the time,with all the events</p>
        </div>



      </div>
      <div className="flex md:h-full items-center justify-center px-5">
        <Image className="w-[60%] md:w-[85%]" src={modelimage} alt="Model Profile"/>

      </div>


      </div>

      {/* Lattest products */}
      <div className="w-full ">

       <div className="w-full flex ">
      
       </div>

      </div>





      </div>
    </div>
  );
}
