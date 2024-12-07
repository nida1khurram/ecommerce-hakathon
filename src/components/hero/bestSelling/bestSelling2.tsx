import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";


import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";

import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
export default function BestSelling2() {
  return (
    <div className='w-full md:w-[1308px] h-auto md:h-[350px] mt-10 grid md:grid-cols-4 gap-10 ml-2  '>
       {/* 1 */}
        <div className='max-w-[270px] max-h-[350px] relative '>
                    {/* heart */}
            <div className='w-[34px] h-[34px] bg-white absolute ml-[220px] mt-4 rounded-full '>
            <FaRegHeart className='w-6 h-6 mt-2 mx-auto'/> 
            </div>
            {/* eye */}
            <div className='w-[34px] h-[34px] absolute  bg-white ml-[220px] mt-14 rounded-full'>
            <MdOutlineRemoveRedEye className='w-6 h-6 mx-auto mt-1'/>
            </div>
            {/* img */}
            <div className='w-[270px] h-[250px] bg-lightgray rounded-md'>
                {/* <div className='w-[190px] h-[180px] border-2 border-black mx-auto '> */}
                <Image 
           width={140} height={146} alt="w1" src={'/assets/bestSelling/p1.png'}
            className="  absolute mt-14 ml-14 "/>
                {/* <div> */}
          
            </div>
        {/* text */} 
            <div className='w-[201px] h-[84px] ml-5 mt-4 leading-loose'>
            <h3  className={`${poppins.className} text-[16px] `}>The north coat</h3>
            <div className='flex '>
            <p className={`${poppins.className} text-[16px] text-redcolor `}>$260
            </p>
            <p className={`${poppins.className} text-textgray relative inline-block ml-3`}>
            <span className="absolute inset-0 border-b-2 border-textgray transform -translate-y-1/2"></span> $360</p>
            </div>
           <div className='flex space-x-1 mt-1'>
           <FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/>
           <p className='text-textgray mt-[-8px] ml-2'>(65)</p>
        
           </div>
            </div>

        </div>
       
        {/* 2 */}
        <div className=' max-w-[270px] max-h-[350px] relative '>
                    {/* heart */}
            <div className='w-[34px] h-[34px] bg-white absolute ml-[220px] mt-4 rounded-full '>
            <FaRegHeart className='w-6 h-6 mt-2 mx-auto'/> 
            </div>
            {/* eye */}
            <div className='w-[34px] h-[34px] absolute  bg-white ml-[220px] mt-14 rounded-full'>
            <MdOutlineRemoveRedEye className='w-6 h-6 mx-auto mt-1'/>
            </div>
            {/* img */}
            <div className='w-[270px] h-[250px] bg-lightgray rounded-md'>
                {/* <div className='w-[190px] h-[180px] border-2 border-black mx-auto '> */}
                <Image 
           width={140} height={146} alt="w1" src={'/assets/bestSelling/p2.png'}
            className="  absolute mt-14 ml-14 "/>
                {/* <div> */}
          
            </div>
        {/* text */} 
            <div className='w-[201px] h-[84px] ml-5 mt-4 leading-loose'>
            <h3  className={`${poppins.className} text-[16px] `}>Gucci duffle bag</h3>
            <div className='flex '>
            <p className={`${poppins.className} text-[16px] text-redcolor `}>$960
            </p>
            <p className={`${poppins.className} text-textgray relative inline-block ml-3`}>
            <span className="absolute inset-0 border-b-2 border-textgray transform -translate-y-1/2"></span> $1160</p>
            </div>
           <div className='flex space-x-1 mt-1'>
           <FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/>
                      {/* star half yellow half white */}
<div className="w-[10px] h-[10px] flex items-center justify-center ">
      <div className="relative inline-block">
        {/* Gray star (background) */}
        <FaStar className="text-lg text-[#d1d1d1]  mt-1 " />
        {/* Colored star (foreground) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
          <FaStar className="text-lg text-yellowstar mt-1 " />
        </div>
      </div>
    </div>
{/* star half yellow half white */}
           <p className='text-textgray mt-[-8px] ml-2'>(65)</p>
        
           </div>
            </div>

        </div>
        {/* 3 */}
        <div className=' max-w-[270px] max-h-[350px] relative '>
                    {/* heart */}
            <div className='w-[34px] h-[34px] bg-white absolute ml-[220px] mt-4 rounded-full '>
            <FaRegHeart className='w-6 h-6 mt-2 mx-auto'/> 
            </div>
            {/* eye */}
            <div className='w-[34px] h-[34px] absolute  bg-white ml-[220px] mt-14 rounded-full'>
            <MdOutlineRemoveRedEye className='w-6 h-6 mx-auto mt-1'/>
            </div>
            {/* img */}
            <div className='w-[270px] h-[250px] bg-lightgray rounded-md'>
                {/* <div className='w-[190px] h-[180px] border-2 border-black mx-auto '> */}
                <Image 
           width={140} height={146} alt="w1" src={'/assets/bestSelling/p3.png'}
            className="  absolute mt-14 ml-14 "/>
                {/* <div> */}
          
            </div>
        {/* text */} 
            <div className='w-[201px] h-[84px] ml-5 mt-4 leading-loose'>
            <h3  className={`${poppins.className} text-[16px] `}>RGB liquid CPU Cooler</h3>
            <div className='flex '>
            <p className={`${poppins.className} text-[16px] text-redcolor `}>$160
            </p>
            <p className={`${poppins.className} text-textgray relative inline-block ml-3`}>
            <span className="absolute inset-0 border-b-2 border-textgray transform -translate-y-1/2"></span> $170</p>
            </div>
           <div className='flex space-x-1 mt-1'>
           <FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/>
                                 {/* star half yellow half white */}
<div className="w-[10px] h-[10px] flex items-center justify-center ">
      <div className="relative inline-block">
        {/* Gray star (background) */}
        <FaStar className="text-lg text-[#d1d1d1]  mt-1 " />
        {/* Colored star (foreground) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
          <FaStar className="text-lg text-yellowstar mt-1 " />
        </div>
      </div>
    </div>
{/* star half yellow half white */}
           <p className='text-textgray mt-[-8px] ml-2'>(65)</p>
        
           </div>
            </div>

        </div>
        {/* 4 */}
        <div className=' max-w-[270px] max-h-[350px] relative '>
                    {/* heart */}
            <div className='w-[34px] h-[34px] bg-white absolute ml-[220px] mt-4 rounded-full '>
            <FaRegHeart className='w-6 h-6 mt-2 mx-auto'/> 
            </div>
            {/* eye */}
            <div className='w-[34px] h-[34px] absolute  bg-white ml-[220px] mt-14 rounded-full'>
            <MdOutlineRemoveRedEye className='w-6 h-6 mx-auto mt-1'/>
            </div>
            {/* img */}
            <div className='w-[270px] h-[250px] bg-lightgray rounded-md'>
                {/* <div className='w-[190px] h-[180px] border-2 border-black mx-auto '> */}
                <Image 
           width={140} height={146} alt="w1" src={'/assets/bestSelling/p4.png'}
            className="  absolute mt-14 ml-14 "/>
                {/* <div> */}
          
            </div>
        {/* text */} 
            <div className='w-[201px] h-[84px] ml-5 mt-4 leading-loose'>
            <h3  className={`${poppins.className} text-[16px] `}>Small BookSelf</h3>
            <div className='flex '>
            <p className={`${poppins.className} text-[16px] text-redcolor `}>$360
            </p>
           
            </div>
           <div className='flex space-x-1 mt-1'>
           <FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/>
           <p className='text-textgray mt-[-8px] ml-2'>(65)</p>
        
           </div>
            </div>

        </div>

      
    </div>
  )
}
