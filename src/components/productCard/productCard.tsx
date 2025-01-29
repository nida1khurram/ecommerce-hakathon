
import React from 'react';
import Image from 'next/image';
import { FaRegHeart, FaStar } from 'react-icons/fa';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

const ProductCard = ({ product } :any) => {
  return (
    <div className='max-w-[270px] max-h-[350px] relative'>
      {/* Discount */}
      <div className='max-w-[55px] max-h-[26px] bg-redcolor rounded-md px-2 py-2 mt-3 ml-3 absolute'>
        <p className={`${poppins.className} text-[#fff] mt-[-5px]`}>{product.discount}</p>
      </div>

      {/* Heart Icon */}
      <div className='w-[34px] h-[34px] bg-white absolute ml-[220px] mt-4 rounded-full'>
        <FaRegHeart className='w-6 h-6 mt-2 mx-auto' />
      </div>

      {/* Eye Icon */}
      <div className='w-[34px] h-[34px] bg-white absolute ml-[220px] mt-14 rounded-full'>
        <MdOutlineRemoveRedEye className='w-6 h-6 mx-auto mt-1' />
      </div>

      {/* Image and Hover Card */}
      <HoverCard>
        <HoverCardTrigger>
          <div className='w-[270px] h-[250px] bg-lightgray'>
            <Image
              width={172}
              height={152}
              alt={product.title}
              src={product.imageUrl}
              className='absolute mt-10 ml-8'
            />
          </div>
        </HoverCardTrigger>
        <HoverCardContent className='bg-black text-[#fff] text-center mt-[-45px] ml-[-140px] absolute'>
          Add To Cart
        </HoverCardContent>
      </HoverCard>

      {/* Text Content */}
      <div className='w-[201px] h-[84px] ml-5 mt-4 leading-loose'>
        <h3 className={`${poppins.className} text-[16px]`}>{product.title}</h3>
        <div className='flex'>
          <p className={`${poppins.className} text-[16px] text-redcolor`}>{product.price}</p>
          <p className={`${poppins.className} text-textgray relative inline-block ml-3`}>
            <span className='absolute inset-0 border-b-2 border-textgray transform -translate-y-1/2'></span>
            {product.originalPrice}
          </p>
        </div>
        <div className='flex space-x-1 mt-1'>
          {[...Array(product.rating)].map((_, i) => (
            // <FaStar key={i} className='text-yellowstar' />
            <FaStar key={i} className={i < 4 ? 'text-yellowstar' : 'text-gray-400'} />
          ))}
          <p className='text-textgray mt-[-8px] ml-2'>({product.reviews})</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
