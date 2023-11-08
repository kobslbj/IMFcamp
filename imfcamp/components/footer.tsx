"use client";

import { Image } from "@nextui-org/react";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="bg-black w-full h-[120px] flex flex-row  border-t-1 border-[#15151e] justify-center items-center">
      <div className=" flex-shrink-0 flex flex-col gap-2 mt-[2rem]">
        <div className="  text-gray-100 font-normal  xl:text-[15px] text-[10px] ">
          總召：王子儀 0927382377
        </div>
        <div className="  text-gray-100 font-normal  xl:text-[15px] text-[10px]">
          副召：何宜霓 0988882689
        </div>
        <div className="  text-gray-100 font-normal  xl:text-[15px] text-[10px] mb-4">
          Gmail：ifmcamp@gmail.com
        </div>
      </div>
      <div className="xl:ml-[30rem]  flex flex-col  ">
        <div className="flex flex-row ml-[5rem]   gap-[1.88rem]  ">
          <Link href="https://instagram.com/nycuimf_camp_2024?igshid=YTQwZjQ0NmI0OA==">
            <Image src="/instagram.png" alt="image" width={30} height={30} />
          </Link>
          <Link href="https://www.facebook.com/imfcamp/">
            <Image src="/facebook.png" alt="image" width={30} height={30} />
          </Link>
        </div>
        <p className=" text-center text-gray-500 text-[xs] font-normal leading-normal ml-[1.88rem] relative top-[1.5rem]">
          © 2023. All rights reserved
        </p>
      </div>
    </div>
  );
}
