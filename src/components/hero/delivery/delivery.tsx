// import React from 'react'
// import Image from 'next/image';
// import { TbTruckDelivery } from "react-icons/tb";
// import { SiTicktick } from "react-icons/si";
// import { CiHeadphones } from "react-icons/ci";
// import { Poppins } from "next/font/google";
// const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

// export default function Hero8() {
//   return (
//     <div className='w-full md:w-[943px] h-auto md:h-[161px] mx-auto grid md:grid-cols-3 border-2 border-red mb-10'>
//         {/* 1 */}
//         <div className='w-full md:w-[249px] h-auto md:h-[161px] mx-auto'>
//                 {/* icon */}
//                 <div className='w-full md:w-[80px] h-auto md:h-[80px] mx-auto bg-[#d1d1d1] rounded-full relative'>
//                 <div className='w-full md:w-[58px] h-auto md:h-[58px] mx-auto bg-[#000] rounded-full absolute ml-3 mt-3  '>
//                 <TbTruckDelivery className='w-full md:w-[40px] h-auto md:h-[40px] mx-auto text-white mt-2'/>
//                 </div>
//                 </div>
//                 {/* icon */}
//                 {/* text */}
//                 <div className='w-full md:w-[249px] h-auto md:h-[57px] mx-auto'>
//                     <p className={`${poppins.className} text-[20px] font-semibold mt-3 ml-3 `}>FREE AND FAST DELIVERY</p>
//                     <p className={`${poppins.className} text-[14px]  mt-3 ml-3 `}>
//                     Free delivery for all orders over $140
//                     </p> 
//                 </div>
//         </div>
//         {/* 2 */}
//         <div className='w-full md:w-[249px] h-auto md:h-[161px] mx-auto'>
//                 {/* icon */}
//                 <div className='w-full md:w-[80px] h-auto md:h-[80px] mx-auto bg-[#d1d1d1] rounded-full relative'>
//                 <div className='w-full md:w-[58px] h-auto md:h-[58px] mx-auto bg-[#000] rounded-full absolute ml-3 mt-3  '>
//                 <CiHeadphones className='w-full md:w-[40px] h-auto md:h-[40px] mx-auto text-white mt-2'/>
//                 </div>  
//                 </div>
//                 {/* icon */}
//                 {/* text */}
//                 <div className='w-full md:w-[247px] h-auto md:h-[57px] mx-auto'>
//                     <p className={`${poppins.className} text-[20px] font-semibold mt-3 ml-3 `}>24/7 CUSTOMER SERVICE</p>
//                     <p className={`${poppins.className} text-[14px]  mt-3 ml-3 `}>
//                     Friendly 24/7 customer support
//                     </p> 
//                 </div>
//         </div>
//         {/* 3 */}
//         <div className='w-full md:w-[249px] h-auto md:h-[161px] mx-auto'>
//                 {/* icon */}
//                 <div className='w-full md:w-[80px] h-auto md:h-[80px] mx-auto bg-[#d1d1d1] rounded-full relative'>
//                 <div className='w-full md:w-[58px] h-auto md:h-[58px] mx-auto bg-[#000] rounded-full absolute ml-3 mt-3  '>
//                 <SiTicktick className='w-full md:w-[40px] h-auto md:h-[40px] mx-auto text-white mt-2'/>
//                 </div>
//                 </div>
//                 {/* icon */}
//                 {/* text */}
//                 <div className='w-full md:w-[256px] h-auto md:h-[57px] mx-auto'>
//                     <p className={`${poppins.className} text-[20px] font-semibold mt-3 ml-3 `}>MONEY BACK GUARANTEE</p>
//                     <p className={`${poppins.className} text-[14px]  mt-3 ml-3 `}>
//                     We reurn money within 30 days
//                     </p> 
//                 </div>
//         </div>

//     </div>
//   )
// }

import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { SiTicktick } from "react-icons/si";
import { CiHeadphones } from "react-icons/ci";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function Delivery() {
  return (
    
    <div className='w-full md:w-[943px] h-auto mx-auto grid grid-cols-1 md:grid-cols-3 gap-4  mb-10 p-4'>
        {/* 1 */}
        <div className='flex flex-col items-center justify-center  '>
            {/* icon */}
            <div className='w-[80px] h-[80px] bg-[#d1d1d1] rounded-full flex items-center justify-center'>
                <div className='w-[58px] h-[58px] bg-[#000] rounded-full flex items-center justify-center'>
                    <TbTruckDelivery className='w-[40px] h-[40px] text-white' />
                </div>
            </div>
            {/* text */}
            <div className='mt-3'>
                <p className={`${poppins.className} text-[20px] font-semibold`}>FREE AND FAST DELIVERY</p>
                <p className={`${poppins.className} text-[14px] mt-2`}>Free delivery for all orders over $140</p>
            </div>
        </div>
        {/* 2 */}
        <div className='flex flex-col items-center justify-center'>
            {/* icon */}
            <div className='w-[80px] h-[80px] bg-[#d1d1d1] rounded-full flex items-center justify-center'>
                <div className='w-[58px] h-[58px] bg-[#000] rounded-full flex items-center justify-center'>
                    <CiHeadphones className='w-[40px] h-[40px] text-white' />
                </div>
            </div>
            {/* text */}
            <div className='mt-3'>
                <p className={`${poppins.className} text-[20px] font-semibold`}>24/7 CUSTOMER SERVICE</p>
                <p className={`${poppins.className} text-[14px] mt-2`}>Friendly 24/7 customer support</p>
            </div>
        </div>
        {/* 3 */}
        <div className='flex flex-col items-center justify-center'>
            {/* icon */}
            <div className='w-[80px] h-[80px] bg-[#d1d1d1] rounded-full flex items-center justify-center'>
                <div className='w-[58px] h-[58px] bg-[#000] rounded-full flex items-center justify-center'>
                    <SiTicktick className='w-[40px] h-[40px] text-white' />
                </div>
            </div>
            {/* text */}
            <div className='mt-3'>
                <p className={`${poppins.className} text-[20px] font-semibold`}>MONEY BACK GUARANTEE</p>
                <p className={`${poppins.className} text-[14px] mt-2`}>We return money within 30 days</p>
            </div>
        </div>
    </div>
  )
}
