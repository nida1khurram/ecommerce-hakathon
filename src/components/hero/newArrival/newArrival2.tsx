import React from 'react'
import Image from 'next/image'
export default function NewArrival2() {
  return (
    <div className='w-full md:w-[1170px] h-auto md:h-[600px] grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 ml-2 mb-10  '>
                 {/* 1 main*/}
           
       <div className="w-full md:w-[570px]  md:row-span-2 ">
                    <Image
                        src={'/assets/newArrival/p1.png'}
                        alt="chef holding plate"
                        width={511}
                        height={511}
                        className=" "
                    />
       </div>
        {/* 2 main */}
       <div className="w-full md:w-[570px] h-auto md:h-[284px]md:row-span-2 ">
                    <Image
                        src={'/assets/newArrival/p2.png'}
                        alt="chef holding plate"
                        width={432}
                        height={286}
                        className=""
                    />
                    {/* sub main */}
                     <div className="w-full md:w-[570px] h-auto md:h-[284px]md:row-span-2  md:row-span-2 flex flex-col md:flex-row items-center mt-20 md:mr-32">
                      
                         <Image
                        src={'/assets/newArrival/p3.png'}
                        alt="curry"
                        width={210}
                        height={222}
                        className="mt-8 md:mt-0 "
                    />
                     
                         <Image
                        src={'/assets/newArrival/p4.png'}
                        alt="curry"
                        width={210}
                        height={222}
                        className=" mt-8 md:mt-0 "
                    />
                      
                </div>
       </div>
               

                
            </div>
     

    //  <div className='w-[300px] md:w-[600px] h-auto md:h-[420px] mx-auto relative '>
    //  <Image 
    //     width={568} height={330} alt="w1" src={'/assets/music/p1.png'}
    //      className="w-[200px] md:w-[568px] md:h-[330px] absolute mt-20 ml-[-30px] z-10"/>
    //  <div className=' w-[300px]  h-[200px] md:w-[500px] md:h-[350px] rounded-full bg-white/50 blur-2xl mx-auto absolute md:mt-20 '>
    //  </div>




   
  )
}
