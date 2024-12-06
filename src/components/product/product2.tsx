import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";


import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";

import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
export default function Product2() {
  return (
    <div className='w-full md:w-[1170px] h-auto md:h-[322px] mt-10 grid md:grid-cols-4 gap-10 ml-2 mb-10  '>
       {/* 1 */}
        <div className='max-w-[270px] max-h-[322px] relative '>
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
           width={115} height={180} alt="w1" src={'/assets/product/p1.png'}
            className="  absolute mt-9 ml-16 "/>
                {/* <div> */}
          
            </div>
        {/* text */} 

            <div className='w-[185px] h-[56px] ml-5 mt-4 leading-loose'>
            <h3  className={`${poppins.className} text-[16px] `}>Breed Dry Dog Food</h3>
            <div className='flex '>
            <p className={`${poppins.className} text-[16px] text-redcolor `}>$100
            </p>
            <div className='flex space-x-1 mt-1 ml-3'>
           <FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-[#d1d1d1] '/><FaStar className='text-[#d1d1d1] '/>
           <p className='text-textgray mt-[-8px] ml-2'>(35)</p>
           </div>
            </div>
           
            </div>

        </div>
       
        {/* 2 */}
        <div className=' max-w-[270px] max-h-[322px] relative '>
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
            <div className='w-[270px] h-[250px] bg-lightgray rounded-md'>
                {/* <div className='w-[190px] h-[180px] border-2 border-black mx-auto '> */}
                <Image 
           width={146} height={143} alt="w1" src={'/assets/product/p2.png'}
            className="  absolute mt-6 ml-14 "/>
                {/* <div> */}
          
            </div>
        {/* text */} 
            <div className='w-[208px] h-[56px] ml-5 mt-4 leading-loose'>
            <h3  className={`${poppins.className} text-[16px] `}>CANON EOS DSLR Camera</h3>
            <div className='flex '>
            <p className={`${poppins.className} text-[16px] text-redcolor `}>$360
            </p>
            <div className='flex space-x-1 mt-1 ml-3'>
           <FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-[#d1d1d1] '/><FaStar className='text-[#d1d1d1] '/>
           <p className='text-textgray mt-[-8px] ml-2'>(95)</p>
           </div>
            </div>
            </div>
        </div>
        {/* 3 */}
        <div className=' max-w-[270px] max-h-[322px] relative '>
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
                <Image 
           width={172} height={180} alt="w1" src={'/assets/product/p3.png'}
            className="  absolute mt-10 ml-12 "/>
            </div>
        {/* text */} 
            <div className='w-[206px] h-[56px] ml-5 mt-4 leading-loose'>
            <h3  className={`${poppins.className} text-[16px] `}>ASUS FHD Gaming Laptop</h3>
            <div className='flex '>
            <p className={`${poppins.className} text-[16px] text-redcolor `}>$700
            </p>
            <div className='flex space-x-1 mt-1 ml-3'>
           <FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/>
           <FaStar className='text-yellowstar '/>
           <p className='text-textgray mt-[-8px] ml-2'>(325)</p></div>
            </div>           
            </div>

        </div>
        {/* 4 */}
        <div className=' max-w-[270px] max-h-[322px] relative '>
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
           width={172} height={159} alt="w1" src={'/assets/product/p4.png'}
            className="  absolute mt-14 ml-14 "/>
                {/* <div> */}
          
            </div>
        {/* text */} 
            <div className='w-[198px] h-[56px] ml-5 mt-4 leading-loose'>
            <h3  className={`${poppins.className} text-[16px] `}>Curology Product Set </h3>
            <div className='flex '>
            <p className={`${poppins.className} text-[16px] text-redcolor `}>$500
            </p>
            <div className='flex space-x-1 mt-1 ml-2'>
           <FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/><FaStar className='text-yellowstar '/>
           <p className='text-textgray mt-[-8px] ml-2'>(145)</p>
           </div>
            </div>
           
            </div>

        </div>

      
    </div>
  )
}
