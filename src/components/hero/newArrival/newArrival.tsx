import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

import { Inter } from "next/font/google";
import NewArrival2 from './newArrival2';

const inter = Inter({ subsets: ["latin"], weight: ["400"] });
export default function NewArrival() {
  return (
    <div className='w-full md:w-[1170px] h-auto md:h-[768px]  mt-10 ml-2 mb-10  '>
        {/*  main */}
        <div className='w-full md:w-[1170px] h-auto md:h-[103px] flex md:flex-row flex-col justify-between  '>
    {/*  main left-side */}
        <div className='w-full md:w-[600px] h-auto md:h-[103px] grid md:grid-cols-2'>
            {/*  */}
            <div>
            <div className='w-full md:w-[110px] h-[40px] flex'>
                <div className='w-[20px] h-[40px] bg-redcolor rounded-sm'></div>
                <p className={`${poppins.className} text-[1rem] font-semibold mt-3 ml-3 text-redcolor`}>Featured</p>
            </div>
            <div className='w-[398px] h-[48px] '>
                <p className={`${inter.className} text-2xl md:text-[36px] font-semibold text-black mt-6`}>New Arrival</p>
            </div>
        </div>       
        </div>  
 {/*  main end*/}
        </div>

<NewArrival2 />



    </div>
  )
} 
