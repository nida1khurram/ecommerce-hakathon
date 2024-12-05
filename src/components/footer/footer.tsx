import React from 'react'
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
    <div className={`${poppins.className} w-full md:w-[1170px] h-auto md:h-[236px] bg-[#000] grid md:grid-cols-5 mx-auto items-center border-2 border-white `} >
 {/* 1 */}
    <div className='md:w-[217px] md:h-[188px]'>
        <h1  className={`${inter.className} text-2xl font-bold `}>Exclusive</h1>
        <p className={`text-xl`}>Subscribe</p>
        <p className={`text-[#fafafa]`}>Get 10% off your first order</p>
        <div className='w-[217px] h-[48px] border-2 border-[#fafafa] rounded-sm flex'>
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
                className="w-6 h-6 mt-2 ml-6"
              /> 
        </div>
    </div>
    {/* 2 */}
  
    <div className='md:w-[175px] md:h-[180px]'>
        <h1  className={` text-xl font-bold `}>Support</h1>
        <p className={`text-[16px] text-[#fafafa]`}>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh</p>
        <Link href={"/"}>
        <p className={`text-[16px] text-[#fafafa]`}>exclusive@gmail.com</p>
              </Link>
        <Link href={"/"}>
        <p className={`text-[16px] text-[#fafafa]`}>+88015-88888-9999</p>
        </Link> 
        </div>
    
    {/* 3 */}
    <div className='md:w-[123px] md:h-[236px]'>
    <h1  className={` text-xl font-bold `}>Account</h1>
    <Link href={"/"}><p className={`text-[16px] text-[#fafafa]`}>My Account</p></Link> 
    <Link href={"/"}><p className={`text-[16px] text-[#fafafa]`}>Login / Register</p></Link> 
    <Link href={"/"}><p className={`text-[16px] text-[#fafafa]`}>Cart</p></Link> 
    <Link href={"/"}><p className={`text-[16px] text-[#fafafa]`}>Wishlist</p></Link> 
    <Link href={"/"}><p className={`text-[16px] text-[#fafafa]`}>Shop</p></Link> 
    </div>
    {/* 4 */}
    <div className='md:w-[109px] md:h-[196px]'>
    <h1  className={` text-xl font-bold `}> Quick Link</h1>
    <Link href={"/"}><p className={`text-[16px] text-[#fafafa]`}>Privacy Policy</p></Link> 
    <Link href={"/"}><p className={`text-[16px] text-[#fafafa]`}>Terms Of Use</p></Link> 
    <Link href={"/"}><p className={`text-[16px] text-[#fafafa]`}>FAQ</p></Link> 
    <Link href={"/"}><p className={`text-[16px] text-[#fafafa]`}>Contact</p></Link> 
    </div>
    {/* 5 */}
    <div className='w-[198px] h-[210px]'>
    <h1  className={` text-xl font-bold `}>Download App</h1>
    <Link href={"/"}><p className={`text-[12px] text-[#fafafa]`}>Save $3 with App New User Only</p></Link> 
    {/* pic div */}
    <div className='flex'>
    <Image 
         width={80}
          height={80}
         alt="hero"
         src={"/assets/footer/qr.png"}
         className="w-20 h-20"
        />
        <div className='mt-4 ml-3'>
        <div className='w-[104px] h-[30px] border-2 border-white rounded-sm'>
        <Image 
         width={20}
          height={20}
         alt="hero"
         src={"/assets/footer/google.png"}
         className=""
        />
        </div>
        <div className='w-[104px] h-[30px] border-2 border-white rounded-sm'>
        <Image 
         width={20}
          height={20}
         alt="hero"
         src={"/assets/hero/apple.png"}
         className=""
        />
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
   











   </div>
   
   
   
   
   
   </>
  )
}
