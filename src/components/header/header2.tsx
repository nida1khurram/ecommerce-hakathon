import { Sheet, SheetContent, SheetTrigger,  SheetDescription, } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import {Inter} from "next/font/google"
const inter = Inter({subsets:['latin'],weight: ['400', '700'],})
import {Taviraj} from "next/font/google"
const taviraj = Taviraj({subsets:['latin'],weight: ['400', '700'],})

export default function Header2() {
    let navItems = [
        {
          name:"Home",
          link:"/",
        },
        {
          name:"Contact",
          link:"#",
        },
        {
          name:"About",
          link:"#",
        },
        {
          name:"Sign Up",
          link:"#",
        },
      ]
  return (
    <>
    <div className="mt-10 w-full md:w-[1170px] md:h-[38px]  mx-auto flex p-5 justify-between items-center mb-5">
 {/* left section */}
 <div className="w-full md:w-[675px] h-auto md:h-[24px] flex">
 <p className={`${inter.className}  text-xl md:text-[24px] font-bold mt-[-50px] md:mt-0 `}>Exclusive</p> 

 <nav className="hidden  md:block  mx-auto items-center text-base">
          <ul className=" flex  ml-40 text-base  hover:text-black space-x-9 ">
          {
            navItems.map((item, i)=>(
              <li key={i} className={`${taviraj.className} text-[16px]  hover:border-b-4 hover:border-myYellow`}>
                <Link href={'/'}>{item.name}</Link></li>
            ))
           }
          </ul>
          </nav>    

    </div>

     {/* right section */}
     <div className="w-full md:w-[395px] flex flex-col md:flex-row justify-between   md:ml-44">
{/* search start */}
<div className="relative w-full md:w-[243px] md:h-[38px] bg-[#f5f5f5] ">
        {/* Input Field */}
        <input
          type="text"
          placeholder="What are you looking for?"
          className="md:w-[211px] h-[24px] text-black bg-[#f5f5f5] placeholder-gray-500 text-sm  focus:outline-none focus:ring-2 focus:ring-myYellow 
          mt-4 md:mt-2 md:ml-2 mr-6"
        />
        {/* Search Icon */}
        <button className="absolute right-6 top-2 text-gray-500 hover:text-black ">
          <FiSearch className="w-6 h-6" />
        </button>
      </div>
 
            {/* search end */}
         
            <div className="hidden w-9 h-9 md:w-[80px] md:h-[32px] md:flex justify-end ">
            <FaRegHeart className="w-6 h-6 md:w-[32px] md:h-[32px] mr-3"/>
            <MdOutlineShoppingCart className="w-6 h-6 md:w-[32px] md:h-[32px] "/>   
            </div>
               
        </div>
         {/* sheet */}
         <Sheet>
          <SheetTrigger className="text-[20px] font-bold  md:mr-[30px] mt-[-90px] md:hidden ">
            <Menu />
          </SheetTrigger>
          <SheetContent >
          
          <ul className="block  ">
          {
            navItems.map((item, i)=>(
              <li key={i} className={`${taviraj.className} text-[22px] `}>
                <Link href={'/'}>{item.name}</Link></li>
            ))
           }
          </ul>
          <div className="block w-[100px] h-[32px] mt-4 ">
            <span className="flex">
            <FaRegHeart className="w-8 h-8 md:w-[32px] md:h-[32px] mr-3 "/>
            <MdOutlineShoppingCart className="w-6 h-6 md:w-[32px] md:h-[32px] "/>  
            </span> 
            </div>

          </SheetContent>
        </Sheet>
        <hr />
    </div>
    <hr />
    </>
  )
}
