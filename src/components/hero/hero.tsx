// import React from 'react'
// import Image from 'next/image'
// import { FaArrowRightLong } from "react-icons/fa6";

// import {Poppins} from "next/font/google"
// const poppins = Poppins({subsets:['latin'],weight: ['400'],})
// import {Inter} from "next/font/google"
// const inter = Inter({subsets:['latin'],weight: ['400'],})
// import { IoIosArrowForward } from "react-icons/io";

// export default function Hero() {
//   return (
//     <div className=' md:w-[73.125rem ] h-[21.5rem] grid md:grid-cols-2 gap-5  mt-10'>
//         {/* left sec */}
//         <div className='w-[13.5625rem] gap-[1rem] leading-10 border-2 border-r-gray-500 ml-24
//         absolute'>
//         <p className={`${poppins.className}  text-[1rem] flex `}>Woman’s Fashion
//         <span className='ml-5 mt-1'><IoIosArrowForward /></span>
//         </p>
//         <p className={`${poppins.className}  text-[1rem] flex`}>Men’s Fashion
        
//         <span className='ml-5 mt-1'><IoIosArrowForward /></span>
//         </p>
//         <p className={`${poppins.className}  text-[1rem] flex`}>Electronics</p>
//         <p>Home & Lifestyle</p>
//         <p>Medicine</p>
//         <p>Sports & Outdoor</p>
//         <p>Baby’s & Toys</p>
//         <p>Groceries & Pets</p>
//         <p>Health & Beauty</p>
      
//         </div>
//         {/* right sec */}
//         <div className='w-[55.75rem]  bg-black  ml-[21.875rem] '>
//           <div className='md:w-[24.75rem] grid md:grid-cols-2 gap-5'>
//                        {/* text 1*/}
//                        <div className='ml-14 mt-20'>
//                     <div className='w-[11.875rem] h-[3.0625rem] flex'>
//                     <Image 
//                 width={40} height={49} alt="hero" src={'/assets/hero/apple.png'} 
//                 className=" w-[2.5rem] h-[3.0625rem]  "/>
//                     <p className={`${poppins.className}  text-[.875rem] text-white mx-auto mt-4 ml-7`}>iPhone 14 Series</p>
//                     </div>
//                               <h1 className={`${inter.className} w-[18.375rem] md:h-[7.5rem]  text-[3rem] font-semibold text-white mx-auto title-font sm:text-4xl text-3xl mb-4 mt-4`}>
//                               Up to 10%
//                                 <br className="hidden lg:inline-block" />
//                                 off Voucher
//                               </h1>
//                               <span className={`${poppins.className} mt-[-20px] text-[16px] text-[#fafafa] underline underline-offset-1 flex `}>Shop Now
//                               <FaArrowRightLong className='mt-1 ml-3 w-6 h-6'/>
//                               </span>
//                     {/* <p className={`${poppins.className} w-[18.375rem] h-[7.5rem]  text-[3rem] font-semibold text-white mx-auto `}>Up to 10% off Voucher</p> */}
//                     </div>
                    
//                         {/* img 2*/}
//                         <div className=' w-[31rem] h-[22rem]'>
//                         <Image 
//                     width={496} height={352} alt="hero" src={'/assets/hero/hero-img.png'} 
//                     className="  ml-44 mt-5"/>
//                         </div>
//             </div>  
      
//         </div>


//     </div>
//   )
// }
import React from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";


import { IoIosArrowForward } from "react-icons/io";
import { Poppins } from "next/font/google";
import Hero2 from "./hero2";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: ["400"] });

export default function Hero() {
  return (
    <>
    <div className="grid md:grid-cols-2 gap-5 mt-10 w-full h-auto md:h-[21.5rem]">
      {/* Left Section */}
      <div className="relative md:w-[13.5625rem] w-full bg-gray-100 md:border-r-2 md:border-r-gray-500 md:pl-10 pl-5 md:absolute">
        <p className={`${poppins.className} text-[1rem] flex py-2`}>
          Woman’s Fashion
          <span className="ml-5 mt-1">
            <IoIosArrowForward />
          </span>
        </p>
        <p className={`${poppins.className} text-[1rem] flex py-2`}>
          Men’s Fashion
          <span className="ml-5 mt-1">
            <IoIosArrowForward />
          </span>
        </p>
        <p className={`${poppins.className} text-[1rem] flex py-2`}>Electronics</p>
        <p className="py-2">Home & Lifestyle</p>
        <p className="py-2">Medicine</p>
        <p className="py-2">Sports & Outdoor</p>
        <p className="py-2">Baby’s & Toys</p>
        <p className="py-2">Groceries & Pets</p>
        <p className="py-2">Health & Beauty</p>
      </div>

      {/* Right Section */}
      <div className="md:w-[55.75rem] w-full bg-black md:ml-[21.875rem] h-full flex flex-col md:flex-row">
        <div className="md:w-[24.75rem] w-full flex flex-col md:flex-row items-start justify-start gap-5">
          {/* Text Section */}
          <div className="ml-5 md:ml-14 mt-10 md:mt-20">
            <div className="flex items-center w-[11.875rem] h-[3.0625rem]">
              <Image
                width={40}
                height={49}
                alt="hero"
                src={"/assets/hero/apple.png"}
                className="w-[2.5rem] h-[3.0625rem]"
              />
              <p
                className={`${poppins.className} text-[.875rem] text-white ml-5`}
              >
                iPhone 14 Series
              </p>
            </div>
            <h1
              className={`${inter.className} w-full md:w-[18.375rem] text-[2rem] md:text-[3rem] font-semibold text-white mt-4`}
            >
              Up to 10%
              <br />
              off Voucher
            </h1>
            <span
              className={`${poppins.className} mt-2 md:mt-[-20px] text-[16px] text-[#fafafa] underline underline-offset-1 flex items-center`}
            >
              Shop Now
              <FaArrowRightLong className="ml-3 w-6 h-6" />
            </span>
          </div>

          {/* Image Section */}
          <div className="md:w-[31rem] w-full h-auto flex items-center justify-center">
            <Image
              width={496}
              height={352}
              alt="hero"
              src={"/assets/hero/hero-img.png"}
              className="w-[31rem] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
<Hero2 />




</>
  );
}
