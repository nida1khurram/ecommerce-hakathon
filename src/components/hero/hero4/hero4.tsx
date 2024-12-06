import React from 'react'

import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
import { Inter } from "next/font/google";
import Hero4Part2 from './hero4part2';


const inter = Inter({ subsets: ["latin"], weight: ["400"] });
export default function Hero4() {
  return (
    <div className='w-full md:w-[1170px] h-auto md:h-[518px] mt-10 ml-2 mb-20'>
        {/*  main */}
        <div className='w-full md:w-[1170px] h-auto md:h-[108px] flex md:flex-row flex-col justify-between  '>
    {/*  left-side */}
        <div className='w-full md:w-[600px] h-auto md:h-[103px] grid md:grid-cols-2'>
            
            <div>
            <div className='w-full md:w-[120px] h-[40px] flex'>
                <div className='w-[20px] h-[40px] bg-redcolor rounded-sm'></div>
                <p className={`${poppins.className} text-[1rem] font-semibold mt-3 ml-3 text-redcolor`}>This Month</p>
            </div>
            <div className='w-[400px] h-[48px] '>
                <p className={`${inter.className} text-2xl md:text-[36px] font-semibold text-textgray mt-6`}>Best Selling Products</p>
            </div>
        </div>
        {/* end*/}
       
        </div>
        {/* right-side*/}
        <div className='w-[100px] md:w-[159px] h-auto md:h-[56px] bg-redcolor rounded-md'>
            <p  className={`${poppins.className} text-[16px] text-white text-center mt-1 py-2 md:py-0 md:mt-4 `}>View All</p>
        </div>
 {/*  main end*/}
        </div>

<Hero4Part2 />

    </div>
  )
}
