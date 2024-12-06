import React from 'react'
import Image from 'next/image'
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: ["400"] });
export default function Hero5() {
  return (
    <div className='w-full md:w-[1170px] h-full md:h-[500px] mx-auto grid md:grid-cols-2 bg-black mb-20 md:mb-20 '>
       {/* reverse */}
       {/* <div className="flex flex-col-reverse md:flex-row"> */}
        {/* left side */}
        <div className='ml-4 md:mx-auto mt-14  '>
            <p className={`${poppins.className} text-[16px] text-mygreen font-semibold`}>Categories</p>
            <h1 className={`${inter.className} w-[100px] md:w-[443px] md:h-[120px] text-2xl md:text-[48px] text-[#fafafa] font-semibold my-6 leading-tight`}>Enhance Your Music Experience</h1>
            {/* time */}
            <div className={`${inter.className} w-[320px] h-[62px] text-[48px] flex font-semibold gap-1 md:gap-4`} >
                        <div className='w-[62px] h-[62px] rounded-full bg-[#fafafa]'>
                             <p className=' text-[16px] font-semibold mx-auto ml-5 mt-2'>23</p>
                    <p className=' text-[11px] mx-auto ml-4 '>Hours</p>
                        </div>
                        <div className='w-[62px] h-[62px] rounded-full bg-[#fafafa]'>
                             <p className=' text-[16px] font-semibold mx-auto ml-5 mt-2'>05</p>
                    <p className=' text-[11px] mx-auto ml-4 '>Days</p>
                        </div>
                        <div className='w-[62px] h-[62px] rounded-full bg-[#fafafa]'>
                             <p className=' text-[16px] font-semibold mx-auto ml-5 mt-2'>59</p>
                    <p className=' text-[11px] mx-auto ml-2 '>Minutes</p>
                        </div>
                        <div className='w-[62px] h-[62px] rounded-full bg-[#fafafa]'>
                             <p className=' text-[16px] font-semibold mx-auto ml-5 mt-2'>35</p>
                    <p className=' text-[11px] mx-auto ml-2 '>Seconds</p>
                        </div>
            </div>
            {/* time end */}
                 {/* btn */}
                 <div className='w-[150px] md:w-[171px] h-[40px] md:h-[56px] bg-mygreen rounded-md relative mt-12'>
          <p  className={`${poppins.className}  text-[16px] text-white text-center absolute ml-9 mt-2 md:mt-4 md:ml-14 `}>Buy Now!</p>
        </div>
              {/* btn */}
        </div>
        {/* right side */}
        <div className='w-[300px] md:w-[600px] h-auto md:h-[420px] mx-auto relative '>
        <Image 
           width={568} height={330} alt="w1" src={'/assets/hero5/p1.png'}
            className="w-[200px] md:w-[568px] md:h-[330px] absolute mt-20 ml-[-30px] z-10"/>
        <div className=' w-[300px]  h-[200px] md:w-[500px] md:h-[350px] rounded-full bg-white/50 blur-2xl mx-auto absolute md:mt-20 '>
        </div>




        </div>




        {/* </div> */}
    </div>
  )
}
