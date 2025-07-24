import Link from 'next/link';
import React from 'react';
import { primaryFont } from '@/app/fonts';

const AddToCartButton = () => {
  return (
    <div
      className={`flex flex-row items-center justify-center p-3 md:p-1 bg-white max-w-4xl mx-auto mt-2 md:mt-3 w-full ${primaryFont.className}`}
    >
      <div className="w-[50%] sm:w-[38%]">
        <Link
          href="#targetselection"
          className="w-full block text-center bg-[#6bf557] hover:text-black text-black py-3 sm:py-5 px-3 sm:px-4 rounded-full text-2xl sm:text-4xl font-medium font-jawbreak whitespace-nowrap"
        >
          ADD TO CART
        </Link>
      </div>
      <div className="w-[50%] sm:w-[32%] text-center">
        <span className="text-2xl sm:text-3xl font-medium tracking-wide font-jawbreak leading-tight sm:leading-[1.2] block">
          BOGO
        </span>
        <div className="mt-1 sm:mt-2">
          <span className="pr-3 font-medium text-[22px] sm:text-3xl">$79.00</span>
          <span className="text-[#ff0000] line-through text-[22px] sm:text-3xl">$159.00</span>
        </div>
      </div>
    </div>
  );
};

export default AddToCartButton;
