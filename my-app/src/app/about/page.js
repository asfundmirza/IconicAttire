import React from "react";
import Image from "next/image";
import Aboutimage from "../../../public/images/About.jpg"
const About = () => {
  return <div>

    <div className="main">

      <div className="section1 w-full flex flex-col md:flex-row px-8 py-[3rem]">

        <div className="w-full md:w-[40%]">

          <Image src={Aboutimage} alt="About image" className="rounded-md"/>

        </div>


        <div className="w-full md:w-[60%] flex flex-col space-y-6 py-8 justify-center items-center">

          <div className="flex justify-center items-center">
            <h2 className="text-3xl font-custom-font font-bold md:font-semibold md:text-5xl">About us</h2>
          </div>

          <div className="w-full md:w-[85%] flex flex-col items-center justify-center space-y-3 ">
            <p className="text-md md:text-[1.15rem] font-custom-font font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper auctor enim vel vestibulum. Praesent vulputate eros sed venenatis facilisis. Curabitur at urna vitae tortor vestibulum venenatis. Etiam lobortis ornare lorem non ultricies. Fusce nec nisl ultricies, auctor sem nec, viverra leo. Duis molestie leo in nulla tincidunt posuere. Fusce nec elit consectetur, aliquam leo et, consequat urna. Nullam vestibulum scelerisque tempor. Nam eget vehicula leo. Donec nibh leo, posuere id facilisis quis, eleifend at arcu.


    
            </p>
            <p className="text-md md:text-[1.15rem] font-custom-font font-medium">Maecenas ut dui nec quam hendrerit porttitor. Pellentesque consectetur tellus vel nulla blandit, eget placerat tellus lobortis. Proin vitae enim ornare, scelerisque lorem eleifend, rutrum augue. Morbi pellentesque rutrum nibh, ut molestie lectus. Praesent aliquam consequat commodo. Vivamus a finibus justo. Curabitur faucibus turpis et urna porttitor condimentum. Nullam porttitor porttitor dolor sed consectetur. Donec nec sollicitudin odio.</p>
          </div>
        </div>
      </div>


      <div className="section2 w-full flex px-8 py-[2rem]"></div>















    </div>






  </div>;
};

export default About;
