import React from 'react'
import Image from 'next/image'
import { CiMobile3 } from "react-icons/ci";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";

import { CiHeadphones } from "react-icons/ci";

import { LuGamepad } from "react-icons/lu";



import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
export default function Categories2() {
  return (
    <div className='w-full md:w-[1170px] h-auto md:h-[145px] mt-10 grid md:grid-cols-6 gap-10 mx-auto  '>
       {/* 1 */}
        <div className='w-[200px] mx-auto md:w-[170px] h-auto md:h-[145px] border-2 border-[#d1d1d1] rounded-lg hover:bg-redcolor hover:text-white'>
        <CiMobile3 className='w-[56px] h-[56px] mx-auto mt-8'/>
        <p className={`${poppins.className} text-[16px] mt-3  ml-16 md:ml-12`}>Phones</p>
        </div>

        {/* 2 */}
        <div className='w-[200px] mx-auto  md:w-[170px] h-auto md:h-[145px] border-2 border-[#d1d1d1] rounded-lg hover:bg-redcolor hover:text-white '>
        <HiOutlineDesktopComputer className='w-[56px] h-[56px] mx-auto mt-8'/>
        <p className={`${poppins.className} text-[16px] mt-3 ml-10`}>Computers</p>
        </div>
        {/* 3 */}
        <div className='w-[200px] mx-auto  md:w-[170px] h-auto md:h-[145px] border-2 border-[#d1d1d1] rounded-lg hover:bg-redcolor hover:text-white '>
        <BsSmartwatch className='w-[56px] h-[56px] mx-auto mt-8'/>
        <p className={`${poppins.className} text-[16px] mt-3 ml-8`}>SmartWatch</p>
        </div>
        {/* 4 */}
        <div className='w-[200px] mx-auto  md:w-[170px] h-auto md:h-[145px] border-2 border-[#d1d1d1] rounded-lg hover:bg-redcolor hover:text-white '>
        <CiCamera className='w-[56px] h-[56px] mx-auto mt-8'/>
        <p className={`${poppins.className} text-[16px] mt-3 ml-11`}>Camera</p>
        </div>
      {/* 5 */}
      <div className='w-[200px] mx-auto  md:w-[170px] h-auto md:h-[145px] border-2 border-[#d1d1d1] rounded-lg hover:bg-redcolor hover:text-white '>
        <CiHeadphones className='w-[56px] h-[56px] mx-auto mt-8'/>
        <p className={`${poppins.className} text-[16px] mt-3 ml-8`}>HeadPhones</p>
        </div>
        {/* 6 */}
        <div className='w-[200px] mx-auto  md:w-[170px] h-auto md:h-[145px] border-2 border-[#d1d1d1] rounded-lg hover:bg-redcolor hover:text-white '>
        <LuGamepad className='w-[56px] h-[56px] mx-auto mt-8'/>
        <p className={`${poppins.className} text-[16px] mt-3 ml-11`}>Gaming</p>
        </div>
       
    </div>
  )
}
