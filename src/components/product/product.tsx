import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

import { Inter } from "next/font/google";
import Product2 from './product2';
import Product3 from './product3';
const inter = Inter({ subsets: ["latin"], weight: ["400"] });
export default function Products() {
  return (
    <div className='w-full md:w-[1170px] h-auto md:h-[1016px]  mt-10 ml-2 mb-10  '>
        {/*  main */}
        <div className='w-full md:w-[1170px] h-auto md:h-[103px] flex md:flex-row flex-col justify-between  '>
    {/*  main left-side */}
        <div className='w-full md:w-[600px] h-auto md:h-[103px] grid md:grid-cols-2'>
            {/*  right */}
            <div>
            <div className='w-full md:w-[142px] h-[40px] flex'>
                <div className='w-[20px] h-[40px] bg-redcolor rounded-sm'></div>
                <p className={`${poppins.className} text-[1rem] font-semibold mt-3 ml-3 text-redcolor`}>Our Products</p>
            </div>
            <div className='w-[398px] h-[48px] '>
                <p className={`${inter.className} text-2xl md:text-[36px] font-semibold text-black mt-6`}>Explore Our Products</p>
            </div>
        </div>
        {/* flash right end*/}
       
        </div>
        {/* arrow right-side*/}
        <div className='flex mt-4 md:mt-12' >
            <div className='w-[46px] h-[46px] rounded-full bg-lightgray'>
            <FaArrowLeftLong className='w-[24px] mt-4 ml-3' /></div>
            <div className='w-[46px] h-[46px] rounded-full bg-lightgray'>
             <FaArrowRightLong className='w-[24px] mt-4 ml-3' /></div>
        </div>
 {/* Todays main end*/}
        </div>

{/* product2 */}
<Product2 />
<Product3 />
{/* view product btn */}
<div className='w-[180px] md:w-[234px] h-[40px] md:h-[56px] bg-redcolor mt-10 ml-10 md:ml-[500px] rounded-sm relative'>
          <p  className={`${poppins.className}  text-[16px] text-white text-center absolute mt-4 ml-12`}>View All Products</p>
        </div>
    </div>
  )
} 
