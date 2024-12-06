import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";


import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";

import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
export default function Product3() {
  return (
    <div className='w-full md:w-[1170px] h-auto md:h-[350px] grid md:grid-cols-4 gap-10 mt-20  '>
       {/* 1 */} 
        <div className=' max-w-[270px] max-h-[350px] relative '>
           {/* new */}
            <div className='max-w-[55px] max-h-[26px] bg-mygreen rounded-md px-2 py-2 mt-3 ml-3 absolute '>
                <p className={`${poppins.className}  text-[#fff] mt-[-5px] `}>New </p>
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
            <div className='w-[270px] h-[250px] bg-lightgray '>
           <Image 
           width={180} height={133} alt="w1" src={'/assets/product/p5.png'}
            className="  absolute mt-10 ml-8"/>
            </div>
        {/* text */}
            <div className='w-[190px] h-[84px] ml-5 mt-4 leading-loose'>
            <h3  className={`${poppins.className} text-[16px] `}>Kids Electric Car</h3>
            <div className='flex '>
            <p className={`${poppins.className} text-[16px] text-redcolor `}>$960 
            </p>
            {/* star     */}
            <div className='flex space-x-1 mt-1 ml-2'>
           <FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/>
           <p className='text-textgray mt-[-8px] ml-2'>(65)</p>
           </div>
            </div>
          {/* circle */}
            <div className='w-[48px] h-[20px] flex'>
                <div className='w-[20px] h-[20px] rounded-full border-2 border-black bg-white '>
                    <div className='mx-auto mt-[2px] w-[12px] h-[12px] rounded-full  bg-red '></div>
                </div>
                <div className='w-[20px] h-[20px] rounded-full  bg-redcolor ml-2'>
                    
                </div>
            </div>
            {/* circle */}
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
            {/* add to cart */}
              <div className='w-[270px] h-[41px] bg-black  absolute mt-52'>
                <p className={`${poppins.className}  text-[#fff] ml-20 mt-2`}>Add To Cart</p>
              </div>
            {/* img */}
            <div className='w-[270px] h-[250px] bg-lightgray '>
           <Image 
           width={186} height={164} alt="w1" src={'/assets/product/p6.png'}
            className="  absolute mt-10 ml-8"/>
            </div>
        {/* text */}
            <div className='w-[191px] h-[84px] ml-5 mt-4 leading-loose'>
            <h3  className={`${poppins.className} text-[16px] `}>Jr. Zoom Soccer Cleats</h3>
            <div className='flex'>
            <p className={`${poppins.className} text-[16px] text-redcolor `}>$1160 
            </p>
            <div className='flex space-x-1 mt-1'>
           <FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/>
           <FaStar className='text-yellowstar '/>
           <p className='text-textgray mt-[-8px] ml-2'>(35)</p>
        
           </div>
            </div>
            {/* circle */}
 <div className='w-[48px] h-[20px] flex'>
                <div className='w-[20px] h-[20px] rounded-full border-2 border-black bg-white '>
                    <div className='mx-auto mt-[2px] w-[12px] h-[12px] rounded-full  bg-yellowcircle '></div>
                </div>
                <div className='w-[20px] h-[20px] rounded-full  bg-redcolor ml-2'>
                    
                </div>
            </div>
            {/* circle */}
            </div>

        </div>
{/* 3 */}
        <div className=' max-w-[270px] max-h-[350px] relative '>
           {/* new */}
           <div className='max-w-[55px] max-h-[26px] bg-mygreen rounded-md px-2 py-2 mt-3 ml-3 absolute '>
                <p className={`${poppins.className}  text-[#fff] mt-[-5px] `}>New </p>
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
            <div className='w-[270px] h-[250px] bg-lightgray '>
           <Image 
           width={178} height={150} alt="w1" src={'/assets/product/p7.png'}
            className="  absolute mt-10 ml-8"/>
            </div>
        {/* text */}
            <div className='w-[221px] h-[84px] ml-5 mt-4 leading-loose'>
            <h3  className={`${poppins.className} text-[16px] `}>GP11 Shooter USB Gamepad</h3>
            <div className='flex'>
            <p className={`${poppins.className} text-[16px] text-redcolor `}>$660 
            </p>
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
           <p className='text-textgray mt-[-8px] ml-3'>(55)</p>
           </div>
            </div>
            {/* circle */}
 <div className='w-[48px] h-[20px] flex ml-4'>
                <div className='w-[20px] h-[20px] rounded-full border-2 border-black bg-white '>
                    <div className='mx-auto mt-[2px] w-[12px] h-[12px] rounded-full  bg-black '></div>
                </div>
                <div className='w-[20px] h-[20px] rounded-full  bg-redcolor ml-2'>
                    
                </div>
            </div>
            {/* circle */}
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
            <div className='w-[270px] h-[250px] bg-lightgray '>
           <Image 
           width={182} height={176} alt="w1" src={'/assets/product/p8.png'}
            className="  absolute mt-10 ml-8"/>
            </div>
        {/* text */}
            <div className='w-[190px] h-[84px] ml-5 mt-4 leading-loose'>
            <h3  className={`${poppins.className} text-[16px] `}>Quilted Satin Jacket</h3>
            <div className='flex'>
            <p className={`${poppins.className} text-[16px] text-redcolor `}>$660 
            </p>
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
           <p className='text-textgray mt-[-8px] ml-3'>(55)</p>
           </div>
           
            </div>
            {/* circle */}
 <div className='w-[48px] h-[20px] flex ml-4'>
                <div className='w-[20px] h-[20px] rounded-full border-2 border-black bg-white '>
                    <div className='mx-auto mt-[2px] w-[12px] h-[12px] rounded-full  bg-darkgreen '></div>
                </div>
                <div className='w-[20px] h-[20px] rounded-full  bg-redcolor ml-2'>
                    
                </div>
            </div>
            {/* circle */}
            </div>

        </div>

      
    </div>
  )
}
