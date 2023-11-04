"use client";

import { Image } from "@nextui-org/react";
export default function Footer() {
  return (
    <div className="bg-black w-full h-[115px] flex flex-row  border-t-1 border-[#15151e] justify-center items-center">
      <div className=" flex-shrink-0 flex flex-col gap-2 ">
        <div className="  text-gray-100 font-bold  ">聯繫我們</div>
        <div className="  text-gray-100 font-normal  ">
          總召：王子儀 0927382377
        </div>
        <div className="  text-gray-100 font-normal ">
          副召：何宜霓 0988882689
        </div>
      </div>
      <div className="flex flex-row  flex-shrink-0 gap-[1.88rem] ml-[30rem]">
        <Image src="/instagram.png" alt="image" width={30} height={30} />
        <Image src="/facebook.png" alt="image" width={30} height={30} />
        <Image src="/gmail.png" alt="image" width={30} height={30} />
      </div>
      <p className="w-custom text-center text-gray-500 text-xs font-normal leading-normal ml-[1.88rem] ">
        © 2023. All rights reserved
      </p>
    </div>
  );
}
