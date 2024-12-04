import React from 'react'
import {Poppins} from "next/font/google"
const poppins = Poppins({subsets:['latin'],weight: ['400'],})
export default function HeaderTop() {
  return (
  <>
  <div className='md:w-[1440px] md:h-[48px] bg-[#000]'>
    <div className='md:w-[859px] md:h-[24px] '>
    <p className={`${poppins.className} text-[14px] text-[#fafafa]`}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
    <span className={`${poppins.className} text-[14px] text-[#fafafa] underline underline-offset-8  `}>ShopNow</span>
    </div>
  </div>
  
  
  
  
  </>
  )
}
