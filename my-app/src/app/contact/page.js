import React from "react";
import Image from "next/image";
import { MdLocationOn , MdEmail} from "react-icons/md";
import {HiPhone} from "react-icons/hi"

const Contact = () => {
  return <div>


    <div className="Main px-[1rem] md:px-[4rem] py-[4rem]">

      {/* section1 */}


      <div className="section1 w-full flex flex-col justify-between mb-4 px-0">
        
        
        <div className="flex justify-center">
          <h1 className="text-3xl md:text-4xl font-bold md:font-semibold">Contact us</h1>
          </div>

          <div className="w-full flex flex-row justify-between px-[0.4rem] md:px-[2rem] py-[6rem] ">




            {/* Adress */}

<div className="Adress flex flex-col justify-center items-center space-y-2">

{/* icon */}
{/* <Image src={Pinicon} alt="Pin icon"/> */}
<div className="flex flex-row items-center justify-center space-x-2">
<MdLocationOn className="text-[18px] md:text-[24px]"/>

<h1 className="text-md md:text-2xl font-bold md:font-semibold">Address</h1>

</div>
<div className="flex flex-row text-center justify-center">
<p className="text-sm md:text-">Lorem ipsum</p>

</div>



</div>

{/* Phone Number */}

<div className="Phone No flex flex-col space-y-2 justify-center items-center">

  <div className="flex flex-row items-center justify-center space-x-2">
    <HiPhone className="text-[18px] md:text-[24px]"/>
    {/* icon */}
{/* <Image src={Pinicon} alt="Pin icon"/> */}

<h1 className="text-md md:text-2xl font-bold md:font-semibold">Phone No</h1>

  </div>

  <div className="flex flex-row text-center justify-center">
<p className="text-sm md:text-">Lorem ipsum</p>

</div>
</div>

{/* Email */}


<div className="Adress flex flex-col space-y-2 justify-center items-center">

{/* icon */}
{/* <Image src={Pinicon} alt="Pin icon"/> */}
<div className="flex flex-row items-center justify-center space-x-2">
  <MdEmail className="text-[18px] md:text-[24px]"/>
  <h1 className="text-md md:text-2xl font-bold md:font-semibold">Email</h1>

</div>

<div className="flex flex-row text-center justify-center">
<p className="text-sm md:text-">Lorem ipsum</p>

</div>
</div>

          </div>

        


      </div>




      {/* Form Section */}
     
     <div className="section2 flex flex-col py-[3rem] ">

      {/* heading  */}
      <div className="flex justify-center">
          <h1 className="text-3xl md:text-4xl font-bold md:font-semibold">Get in touch with us</h1>
          </div>
     </div>

     {/* Form */}
     
     <div className="flex flex-col w-full bg-[#44608C] px-4 md:px-8 py-8 rounded-lg">



      {/* Form */}
      <div className="form w-full  md:w-1/2 space-y-6 mb-4">
            {/* Name */}

            <div className="mb-2">
              <label
                htmlFor="website-admin"
                className="block mb-2 text-sm font-medium text-secondary-color"
              >
                Name
              </label>

              <input
                type="text"
                className="rounded-md  bg-slate-100 border-gray-300 text-slate-800 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="User Name"
              ></input>
            </div>

            {/* Email */}

            <div className="mb-2">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-secondary-color"
              >
                Email
              </label>
              <input
                type="email"
                className="  border border-gray-300  text-slate-800 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-slate-100  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="name@.com"
                required
              ></input>
            </div>

            {/* Message */}

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-secondary-color "
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-slate-800 bg-slate-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-black bg-secondary-color hover:bg-btnhover-color focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   dark:focus:ring-blue-800"
            >
              Send
            </button>
          </div>




     </div>

     <div className="section3 w-full  flex flex-col md:flex-row py-[2rem] space-y-[2rem]">

     {/* form */}
      <div className="w-full md:w-[60%] py-[4rem]  rounded-[12px_0_0_12px] px-[3rem]">
        <div className="flex flex-col ">

          {/* heading */}
          <div className="flex flex-row justify-center py-[2rem]">
          <h2 className="text-lg md:text-2xl font-custom-font font-medium text-black">Get in touch</h2>
        </div>

          {/* form details */}
          <div className="flex flex-col space-y-4">

          <div className="mb-2 ">
              <label
                htmlFor="website-admin"
                className="block mb-2 text-sm md:text-md font-custom-font font-medium text-slate-800 "
              >
                Username
              </label>

              <input
                type="text"
                className="rounded-md w-full md:w-[50%] bg-fieldscustom-color border border-gray-300 text-white focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0  text-sm p-2.5   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="User Name"
              ></input>
            </div>

            {/* Email */}

            <div className="mb-2">
              <label
                htmlFor="email"
                className="block mb-2 text-sm md:text-md font-custom-font font-medium text-slate-800"
              >
                Your email
              </label>
              <input
                type="email"
                className="  border w-full md:w-[50%] border-gray-300 text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 bg-fieldscustom-color  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="name@.com"
                required
              ></input>
            </div>

            {/* Message */}

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block mb-2 text-sm md:text-md font-custom-font font-medium text-slate-800"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block w-full md:w-[90%] p-2.5  text-sm text-white bg-fieldscustom-color rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-black w-full md:w-[20%] bg-secondary-color hover:bg-btnhover-color focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center   dark:focus:ring-blue-800"
            >
              Send
            </button>



          </div>
        </div>



      </div>

      {/* Details */}
      
      <div className="w-full md:w-[40%] flex flex-col  bg-primary-color rounded-[12px] md:rounded-[0_12px_12px_0]   ">
        <div className="flex flex-row justify-center py-[4rem]">
          <h2 className="text-lg md:text-2xl font-custom-font font-medium text-white">Reach us here</h2>
        </div>


        {/* icons with details */}
        <div className="flex flex-row md:flex-col py-[2rem] space-y-4 md:space-y-[3rem]">

        <div className="w-full flex flex-row px-0 md:px-[4rem]  items-center space-x-4">
          <div className="icon"> 
          <MdLocationOn className="text-xl text-white"/>

          </div>
          <div className="w-full flex flex-col items-start justify-center">
            <h2 className="text-md md:text-lg text-white font-medium font-custom-font">Address</h2>
            <h3 className="text-sm md:text-md text-white font-normal font-custom-font">Lorem ipsum</h3>
          </div>
        </div>

        <div className="w-full flex flex-row px-[4rem]  items-center space-x-4">
          <div className="icon"> 
          <MdLocationOn className="text-xl text-white"/>

          </div>
          <div className="w-full flex flex-col items-start justify-center ">
            <h2 className="text-md md:text-lg text-white font-medium font-custom-font">Phone No</h2>
            <h3 className="text-md md:text-lg text-white font-normal font-custom-font">Lorem ipsum</h3>
          </div>
        </div>


        <div className="w-full flex flex-row px-[4rem]  items-center space-x-4">
          <div className="icon"> 
          <MdEmail className="text-2xl text-white"/>

          </div>
          <div className="w-full flex flex-col justify-center items-start">
            <h2 className="text-md md:text-lg text-white font-medium font-custom-font">Email</h2>
            <h3 className="text-md md:text-lg text-white font-normal font-custom-font">Lorem ipsum</h3>
          </div>
        </div>
        </div>
      </div>
     </div>


    </div>

  </div>;
};

export default Contact;
