import React from 'react'
import Link from 'next/link';
import { FaChevronDown } from "react-icons/fa";
import {Poppins} from "next/font/google"
const poppins = Poppins({subsets:['latin'],weight: ['400'],})
export default function HeaderTop() {
  return (
  <>
  <div className='w-full h-auto md:h-[3rem] bg-[#000] '>
    <div className='md:w[53.6875rem] h-auto md:h-[1.5rem] flex md:items-center  md:justify-between pl-0 pr-0 md:pl-52 md:pr-20'>
    <div className='w-full md:w-[34.375rem] md:h-[1.5rem] gap-2 flex '>
    <p className={`${poppins.className} ml-3 md:ml-0 mt-3 w-[9.375rem] md:w-[34.375rem] md:h-[1.5rem] text-[14px] text-[#fafafa] md:text-balance text-justify`}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
    <span className={`${poppins.className} mt-3 text-[14px] text-[#fafafa] underline underline-offset-1  `}>ShopNow</span>
    </div>
    {/* Language Selector */}
    <div className="w-full md:w-[78px] flex items-center gap-1 cursor-pointer text-[#fafafa] md:mt-3 mr-5">
        <span className=''>English</span>
        <FaChevronDown className="text-xs" /> 
      </div>
    </div>
  </div>
   </>
  )}