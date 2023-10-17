import React from "react";
import Image from "next/image";

const Contact = () => {
  return <div>


    <div className="Main px-4 md:px-[4rem] py-[4rem]">

      {/* section1 */}


      <div className="section1 w-full flex flex-col justify-between mb-4 px-0 md:px-[6rem]">
        
        
        <div className="flex justify-center">
          <h1 className="text-3xl md:text-4xl font-bold md:font-semibold">Contact us</h1>
          </div>

          <div className="w-full flex flex-row justify-between py-[6rem]">




            {/* Adress */}

<div className="Adress flex flex-col justify-center items-center space-y-2">

{/* icon */}
{/* <Image src={Pinicon} alt="Pin icon"/> */}

<h2 className="text-lg md:text-2xl font-bold md:font-semibold">Address</h2>

<p className="text-md md:text-lg">Lorem ipsum</p>
</div>

{/* Phone Number */}

<div className="Phone No flex flex-col space-y-2 justify-center items-center">

{/* icon */}
{/* <Image src={Pinicon} alt="Pin icon"/> */}

<h2 className="text-lg md:text-2xl font-bold md:font-semibold">Phone No</h2>

<p className="text-md md:text-lg">Lorem ipsum</p>
</div>

{/* Email */}

<div className="Adress flex flex-col space-y-2 justify-center items-center">

{/* icon */}
{/* <Image src={Pinicon} alt="Pin icon"/> */}

<h2 className="text-lg md:text-2xl font-bold md:font-semibold">Email</h2>

<p className="text-md md:text-lg">Lorem ipsum</p>
</div>

          </div>

        


      </div>




      {/* Form Section */}
     
     <div className="section2 flex flex-col py-[3rem]">

      {/* heading  */}
      <div className="flex justify-center">
          <h1 className="text-3xl md:text-4xl font-bold md:font-semibold">Get in touch with us</h1>
          </div>
     </div>

     {/* Form */}
     
     <div className="flex flex-col">




     </div>


    </div>

  </div>;
};

export default Contact;
