import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cartitem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* Image start */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px">
        <img src="product-1.webp" />
      </div>
      {/* Image start */}
      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Product title */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            Jordan Retro 6 G
          </div>
          {/* Product subtitle */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            Men&apos;s Golf Shopes
          </div>
          {/* Product Price*/}
          <div className="text-sm md:text-md font-medium text-black/[0.5] mt-2">
            MRP : * 19 695,00
          </div>
        </div>
        {/* Product subtitle */}
        <div className="text-sm md:text-md font-medium text-black/[0.5] md:block hidden">
          Men&apos;s Golf Shopes
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select className="hover:text-black">
                <option value={"1"}>UK 6</option>
                <option value={"1"}>UK 4</option>
                <option value={"1"}>UK 7</option>
                <option value={"1"}>UK 2</option>
                <option value={"1"}>UK 3</option>
                <option value={"1"}>UK 1</option>
                <option value={"1"}>UK 8</option>
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select className="hover:text-black">
                <option value={"1"}>UK 6</option>
                <option value={"2"}>UK 4</option>
                <option value={"3"}>UK 7</option>
                <option value={"4"}>UK 2</option>
                <option value={"5"}>UK 3</option>
                <option value={"6"}>UK 1</option>
                <option value={"7"}>UK 8</option>
              </select>
            </div>
          </div>
          <RiDeleteBin6Line className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
