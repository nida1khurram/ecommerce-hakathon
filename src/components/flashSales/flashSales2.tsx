import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";

import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
export default function FlashSales2() {
  return (
    <div className='w-full md:w-[1308px] h-auto md:h-[350px] mt-10 grid md:grid-cols-4 gap-10   '>
       {/* 1 */}
        <div className=' max-w-[270px] max-h-[350px] relative '>
           {/* 40% */}
            <div className='max-w-[55px] max-h-[26px] bg-redcolor rounded-md px-2 py-2 mt-3 ml-3 absolute '>
                <p className={`${poppins.className}  text-[#fff] mt-[-5px] `}>-40% </p>
            </div>

            {/* heart */}
            <div className='w-[34px] h-[34px] bg-white absolute ml-[220px] mt-4 rounded-full '>
            <FaRegHeart className='w-6 h-6 mt-2 mx-auto'/> 
            </div>
            {/* eye */}
            <div className='w-[34px] h-[34px] absolute  bg-white ml-[220px] mt-14 rounded-full'>
            <MdOutlineRemoveRedEye className='w-6 h-6 mx-auto mt-1'/>
            </div>
            
            {/* img */}
            {/* hovercard */}
            <HoverCard>
            <HoverCardTrigger>
            <div className='w-[270px] h-[250px] bg-lightgray   '>
           <Image 
           width={172} height={152} alt="w1" src={'/assets/flashSale/p1.png'}
            className="  absolute mt-10 ml-8"/>
            </div>
            </HoverCardTrigger>
             <HoverCardContent  className={` bg-black text-[#fff] text-center mt-[-45px] ml-[-140px] absolute`}>
                          Add To Cart        
             </HoverCardContent>
            </HoverCard>
            {/* hovercard */}
        {/* text */}
            <div className='w-[201px] h-[84px] ml-5 mt-4 leading-loose'>
            <h3  className={`${poppins.className} text-[16px] `}>HAVIT HV-G92 Gamepad</h3>
            <div className='flex '>
            <p className={`${poppins.className} text-[16px] text-redcolor `}>$120 
            </p>
            <p className={`${poppins.className} text-textgray relative inline-block ml-3`}>
            <span className="absolute inset-0 border-b-2 border-textgray transform -translate-y-1/2"></span> $160</p>
            </div>
           <div className='flex space-x-1 mt-1'>
           <FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/>
           <p className='text-textgray mt-[-8px] ml-2'>(88)</p>
        
           </div>
            </div>

        </div>
       
        {/* 2 */}
        <div className=' max-w-[270px] max-h-[350px] relative '>
           {/* 40% */}
            <div className='max-w-[55px] max-h-[26px] bg-redcolor rounded-md px-2 py-2 mt-3 ml-3 absolute '>
                <p className={`${poppins.className}  text-[#fff] mt-[-5px] `}>-35% </p>
            </div>

            {/* heart */}
            <div className='w-[34px] h-[34px] bg-white absolute ml-[220px] mt-4 rounded-full '>
            <FaRegHeart className='w-6 h-6 mt-2 mx-auto'/> 
            </div>
            {/* eye */}
            <div className='w-[34px] h-[34px] absolute  bg-white ml-[220px] mt-14 rounded-full'>
            <MdOutlineRemoveRedEye className='w-6 h-6 mx-auto mt-1'/>
            </div>
            {/* img */}
             {/* hovercard */}
             <HoverCard>
            <HoverCardTrigger>
            <div className='w-[270px] h-[250px] bg-lightgray '>
           <Image 
           width={172} height={152} alt="w1" src={'/assets/flashSale/p2.png'}
            className="  absolute mt-10 ml-8"/>
            </div>
            </HoverCardTrigger>
             <HoverCardContent  className={` bg-black text-[#fff] text-center mt-[-45px] ml-[-140px] absolute`}>
                          Add To Cart        
             </HoverCardContent>
            </HoverCard>
            {/* hovercard */}
        {/* text */}
            <div className='w-[201px] h-[84px] ml-5 mt-4 leading-loose'>
            <h3  className={`${poppins.className} text-[16px] `}>AK-900 Wired Keyboard</h3>
            <div className='flex'>
            <p className={`${poppins.className} text-[16px] text-redcolor `}>$960 
            </p>
            <p className={`${poppins.className} text-textgray relative inline-block ml-3`}>
            <span className="absolute inset-0 border-b-2 border-textgray transform -translate-y-1/2"></span> $1160</p>
            </div>
           <div className='flex space-x-1 mt-1'>
           <FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/>
           <FaStar className='text-[#d1d1d1] '/>
           <p className='text-textgray mt-[-8px] ml-2'>(75)</p>
        
           </div>
            </div>

        </div>
        {/* 3 */}
        <div className=' max-w-[270px] max-h-[350px] relative '>
           {/* 40% */}
            <div className='max-w-[55px] max-h-[26px] bg-redcolor rounded-md px-2 py-2 mt-3 ml-3 absolute '>
                <p className={`${poppins.className}  text-[#fff] mt-[-5px] `}>-30% </p>
            </div>

            {/* heart */}
            <div className='w-[34px] h-[34px] bg-white absolute ml-[220px] mt-4 rounded-full '>
            <FaRegHeart className='w-6 h-6 mt-2 mx-auto'/> 
            </div>
            {/* eye */}
            <div className='w-[34px] h-[34px] absolute  bg-white ml-[220px] mt-14 rounded-full'>
            <MdOutlineRemoveRedEye className='w-6 h-6 mx-auto mt-1'/>
            </div>
            {/* img */}
             {/* hovercard */}
             <HoverCard>
            <HoverCardTrigger>
            <div className='w-[270px] h-[250px] bg-lightgray '>
           <Image 
           width={172} height={152} alt="w1" src={'/assets/flashSale/p3.png'}
            className="  absolute mt-10 ml-8"/>
            </div>
            </HoverCardTrigger>
             <HoverCardContent  className={` bg-black text-[#fff] text-center mt-[-45px] ml-[-140px] absolute`}>
                          Add To Cart        
             </HoverCardContent>
            </HoverCard>
            {/* hovercard */}
        {/* text */}
            <div className='w-[201px] h-[84px] ml-5 mt-4 leading-loose'>
            <h3  className={`${poppins.className} text-[16px] `}>IPS LCD Gaming Monitor</h3>
            <div className='flex'>
            <p className={`${poppins.className} text-[16px] text-redcolor `}>$370 
            </p>
            <p className={`${poppins.className} text-textgray relative inline-block ml-3`}>
            <span className="absolute inset-0 border-b-2 border-textgray transform -translate-y-1/2"></span> $400</p>
            </div>
           <div className='flex space-x-1 mt-1'>
           <FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/>
           <p className='text-textgray mt-[-8px] ml-2'>(99)</p>
        
           </div>
            </div>

        </div>
        {/* 4 */}
        <div className=' max-w-[270px] max-h-[350px] relative '>
           {/* 40% */}
            <div className='max-w-[55px] max-h-[26px] bg-redcolor rounded-md px-2 py-2 mt-3 ml-3 absolute '>
                <p className={`${poppins.className}  text-[#fff] mt-[-5px] `}>-25% </p>
            </div>

            {/* heart */}
            <div className='w-[34px] h-[34px] bg-white absolute ml-[220px] mt-4 rounded-full '>
            <FaRegHeart className='w-6 h-6 mt-2 mx-auto'/> 
            </div>
            {/* eye */}
            <div className='w-[34px] h-[34px] absolute  bg-white ml-[220px] mt-14 rounded-full'>
            <MdOutlineRemoveRedEye className='w-6 h-6 mx-auto mt-1'/>
            </div>
            {/* img */}
             {/* hovercard */}
             <HoverCard>
            <HoverCardTrigger>
            <div className='w-[270px] h-[250px] bg-lightgray '>
           <Image 
           width={172} height={152} alt="w1" src={'/assets/flashSale/p4.png'}
            className="  absolute mt-10 ml-8"/>
            </div>
            </HoverCardTrigger>
             <HoverCardContent  className={` bg-black text-[#fff] text-center mt-[-45px] ml-[-140px] absolute`}>
                          Add To Cart        
             </HoverCardContent>
            </HoverCard>
            {/* hovercard */}
        {/* text */}
            <div className='w-[201px] h-[84px] ml-5 mt-4 leading-loose'>
            <h3  className={`${poppins.className} text-[16px] `}>S-Series Comfort Chair</h3>
            <div className='flex'>
            <p className={`${poppins.className} text-[16px] text-redcolor `}>$375 
            </p>
            <p className={`${poppins.className} text-textgray relative inline-block ml-3`}>
            <span className="absolute inset-0 border-b-2 border-textgray transform -translate-y-1/2"></span> $400</p>
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
           
           <p className='text-textgray mt-[-8px] ml-3'>(99)</p>
        
           </div>
            </div>

        </div>

      
    </div>
  )
}
