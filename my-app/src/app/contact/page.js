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
     
     <div className="section2 flex flex-col py-[3rem] ">

      {/* heading  */}
      <div className="flex justify-center">
          <h1 className="text-3xl md:text-4xl font-bold md:font-semibold">Get in touch with us</h1>
          </div>
     </div>

     {/* Form */}
     
     <div className="flex flex-col w-full bg-[#44608C] px-8 py-8 rounded-lg">



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


    </div>

  </div>;
};

export default Contact;
