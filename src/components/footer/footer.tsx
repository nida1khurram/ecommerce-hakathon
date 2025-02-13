import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: ["400"] });
export default function Footer() {
  return (
   <>
   <div className={`w-full  h-auto md:h-[440px] bg-[#000] text-white `}>
    {/* sub div */}
    <div className={`${poppins.className} w-full md:w-[1170px] h-auto md:h-[236px] bg-[#000] grid md:grid-cols-5 mx-auto items-center`} >
 {/* 1 */}
    <div className='md:w-[217px] md:h-[188px] mt-20 ml-5 md:ml-0'>
        <h1  className={`${inter.className} text-2xl font-bold mb-4`}>Exclusive</h1>
        <p className={`text-xl mb-4`}>Subscribe</p>
        <p className={`text-[#fafafa] mb-4`}>Get 10% off your first order</p>
        <div className='w-[217px] h-[48px] rounded-sm flex '>
            <input
          type="text"
          placeholder="Enter your email"
          className="md:w-[130px] h-[24px] bg-transparent text-black placeholder-gray-500 text-sm  focus:outline-none focus:ring-2 focus:ring-myYellow mt-2 ml-4 "
        />
         <Image
                width={24}
                height={24}
                alt="hero"
                src={"/assets/footer/icon.png"}
                className="w-6 h-6 mt-2 ml-2 md:ml-6"
              /> 
        </div>
    </div>
    {/* 2 */}
  
    <div className='w-[150px] md:w-[175px] md:h-[180px] mt-10 md:mt-16 ml-5 md:ml-0'>
        <h1  className={` text-xl font-bold  mb-4`}>Support</h1>
        <p className={`text-[1rem] text-[#fafafa] mb-4`}>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh</p>
        <Link href={"/"}>
        <p className={`text-[16px] text-[#fafafa] mb-4`}>exclusive@gmail.com</p>
              </Link>
        <Link href={"/"}>
        <p className={`text-[16px] text-[#fafafa]`}>+88015-88888-9999</p>
        </Link> 
        </div>
    
    {/* 3 */}
    <div className='md:w-[123px] md:h-[236px] mt-10 md:mt-28 ml-5 md:ml-0'>
    <h1  className={` text-xl font-bold mb-4 `}>Account</h1>
    <Link href={"/"}><p className={`text-[16px] text-[#fafafa] mb-4`}>My Account</p></Link> 
    <Link href={"/"}><p className={`text-[16px] text-[#fafafa] mb-4`}>Login / Register</p></Link> 
    <Link href={"/"}><p className={`text-[16px] text-[#fafafa] mb-4`}>Cart</p></Link> 
    <Link href={"/"}><p className={`text-[16px] text-[#fafafa] mb-4`}>Wishlist</p></Link> 
    <Link href={"/"}><p className={`text-[16px] text-[#fafafa] mb-4`}>Shop</p></Link> 
    </div>
    {/* 4 */}
    <div className='md:w-[109px] md:h-[196px] mt-10 md:mt-20 ml-5 md:ml-0'>
    <h1  className={` text-xl font-bold  mb-4`}> Quick Link</h1>
    <Link href={"/"}><p className={`text-[16px] text-[#fafafa] mb-4`}>Privacy Policy</p></Link> 
    <Link href={"/"}><p className={`text-[16px] text-[#fafafa] mb-4`}>Terms Of Use</p></Link> 
    <Link href={"/"}><p className={`text-[16px] text-[#fafafa] mb-4`}>FAQ</p></Link> 
    <Link href={"/"}><p className={`text-[16px] text-[#fafafa] mb-4`}>Contact</p></Link> 
    </div>
    {/* 5 */}
    <div className='w-[198px] h-[210px] mt-10 md:mt-20 ml-5 md:ml-0'>
    <h1  className={` text-xl font-bold mb-4`}>Download App</h1>
    <Link href={"/"}><p className={`text-[12px] text-[#fafafa] mb-2`}>Save $3 with App New User Only</p></Link> 
    {/* pic div */}
    <div className='flex'>
    <Image 
         width={80}
          height={80}
         alt="hero"
         src={"/assets/footer/qr.png"}
         className="w-20 h-20"
        />
        <div className=' ml-3'>
        <div className='w-[104px] h-[35px] border-2 border-white rounded-sm mb-2 flex'> 
        <Image 
         width={20}
          height={20}
         alt="hero"
         src={"/assets/footer/google.png"}
         className="w-5 h-5 mt-1 ml-1"
        />
        <div className='ml-1'>
        <p className='text-[8px]'>GET IT ON </p>
        <p className='text-[10px] font-bold '>GOOGLE PLAY</p>
        </div>
       

        </div>
        <div className='w-[104px] h-[35px] border-2 border-white rounded-sm flex'>
        <Image 
         width={20}
          height={20}
         alt="hero"
         src={"/assets/hero/apple.png"}
         className="w-5 h-5 mt-1 ml-1"
        />
         <div className='ml-1'>
        <p className='text-[8px]'>Download on the </p>
        <p className='text-[10px] font-bold '>APP STORE</p>
        </div>
            </div>
            </div>
        
    </div>
     {/* pic div */}
     {/* icon div */}
    <div className='flex gap-8 mt-6'>
    <Link href={"/"}><FaFacebookF className="text-white  w-[24] h-[24] rounded-full gap-1 hover:animate-spin" /></Link>
    <Link href={"/"}><CiTwitter className="text-white  w-[24] h-[24] rounded-full gap-1 hover:animate-spin" /></Link>
    <Link href={"/"}><FaInstagram className="text-white  w-[24] h-[24] rounded-full gap-1 hover:animate-spin" /></Link>
    <Link href={"/"}><FaLinkedinIn className="text-white  w-[24] h-[24] rounded-full gap-1 hover:animate-spin" /></Link>
    </div>
    
    </div>
    </div>
  <div className=' text-[#4b4a4a] md:pb-0 pb-5'>
  <hr  className='mt-10 md:mt-32 bg-[#4b4a4a]' />
  <FaRegCopyright className='ml-2 md:ml-[500px] mt-5'/>
  <p className='text-sm md:text-[16px] text-center mt-[-20px] md:ml-0 ml-[-40px]'>
   Copyright Rimel 2022. All right reserved
  </p>


 
  </div >

  
   </div>
   
  
   
   
   
   </>
  )
}
