import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
import { Inter } from "next/font/google";
import Hero3Part2 from './categories2';
import Categories2 from './categories2';

const inter = Inter({ subsets: ["latin"], weight: ["400"] });
export default function Categories() {
  return (
    <div className='w-full md:w-[1170px] h-auto md:h-[313px]  mt-32 ml-2 mb-20'>
        {/* categories top */}
        <div className='w-full md:w-[1170px] h-auto md:h-[108px] flex md:flex-row flex-col justify-between  '>
    {/* flash main left-side */}
        <div className='w-full md:w-[600px] h-auto md:h-[103px] grid md:grid-cols-2'>
            {/* top right */}
            <div>
            <div className='w-full md:w-[120px] h-[40px] flex'>
                <div className='w-[20px] h-[40px] bg-redcolor rounded-sm'></div>
                <p className={`${poppins.className} text-[1rem] font-semibold mt-3 ml-3 text-redcolor`}>
                Categories
                    </p>
            </div>
            <div className='w-[379px] h-[48px] '>
                <p className={`${inter.className} text-2xl md:text-[36px] font-semibold text-textgray mt-6`}>
                Browse By Category</p>
            </div>
        </div>
        
        </div>
        {/* arrow right-side*/}
        <div className='flex mt-4 md:mt-12' >
            <div className='w-[46px] h-[46px] rounded-full bg-lightgray'>
            <FaArrowLeftLong className='w-[24px] mt-4 ml-3' /></div>
            <div className='w-[46px] h-[46px] rounded-full bg-lightgray'>
             <FaArrowRightLong className='w-[24px] mt-4 ml-3' /></div>
        </div>
 {/* categories top end*/}
        </div>
{/* hero section 2 */}
<Categories2 />
<hr className='mt-12'/>
    </div>
  )
}
