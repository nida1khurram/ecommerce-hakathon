import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
import Hero2Part2 from './hero2Part2';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: ["400"] });
export default function Hero2() {
  return (
    <div className='w-full md:w-[1308px] h-auto md:h-[493px]  mt-32 ml-2 mb-40'>
        {/* Todays main */}
        <div className='w-full md:w-[1170px] h-auto md:h-[103px] flex md:flex-row flex-col justify-between  '>
    {/* flash main left-side */}
        <div className='w-full md:w-[600px] h-auto md:h-[103px] grid md:grid-cols-2'>
            {/* flash right */}
            <div>
            <div className='w-full md:w-[100px] h-[40px] flex'>
                <div className='w-[20px] h-[40px] bg-redcolor rounded-sm'></div>
                <p className={`${poppins.className} text-[1rem] font-semibold mt-3 ml-3 text-redcolor`}>Today’s</p>
            </div>
            <div className='w-[211px] h-[48px] '>
                <p className={`${inter.className} text-2xl md:text-[36px] font-semibold text-textgray mt-6`}>Flash Sales</p>
            </div>
        </div>
        {/* flash right end*/}
        {/* date left */}
        <div className={`${poppins.className} w-full md:w-[302px] h-auto md:h-[50px] flex `}>
        <div className='w-[46px] h-[50px]  ml-5 md:md:mt-10'><p className='text-[12px] text-textgray'>Days</p><p className='text-[32px] font-bold text-textgray'> 03 
            <span className='text-red2 ml-2'>:</span></p>  
        </div>
        <div className='w-[46px] h-[50px]  ml-5 md:mt-10'><p className='text-[12px] text-textgray'>Hours</p><p className='text-[32px] font-bold text-textgray'>23
            <span className='text-red2 ml-2'>:</span></p></div>
        <div className='w-[46px] h-[50px]  ml-5 md:mt-10'><p className='text-[12px] text-textgray'>Minutes</p><p className='text-[32px] font-bold text-textgray'>19
            <span className='text-red2 ml-2'>:</span></p></div>
        <div className='w-[46px] h-[50px]  ml-5 md:mt-10'><p className='text-[12px] text-textgray'>Seconds</p><p className='text-[32px] font-bold text-textgray'>56</p></div>
        </div>
        {/* date left end*/}
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

<Hero2Part2 />
{/* view product btn */}
<div className='w-[180px] md:w-[234px] h-[40px] md:h-[56px] bg-redcolor mt-10 ml-10 md:ml-[500px] rounded-sm relative'>
          <p  className={`${poppins.className}  text-[16px] text-white text-center absolute mt-4 ml-12`}>View All Products</p>
        </div>
       
        <hr className='mt-10'/>
    </div>
  )
} 
