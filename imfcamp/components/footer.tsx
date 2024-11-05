"use client";

import { Image } from "@nextui-org/react";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="bg-background-secondary w-full h-[120px] flex flex-row border-t-1 border-brand-secondary justify-center items-center">
      <div className=" flex-shrink-0 flex flex-col gap-2 mt-[2rem]">
        <div className="text-text-heading font-normal xl:text-[15px] lg:text-[15px] md:text-[12px] text-[10px]">
          總召：孔勝立 0905600747
        </div>
        <div className="text-text-heading font-normal xl:text-[15px] lg:text-[15px] md:text-[12px] text-[10px]">
          公關：王子儀 0927382377
        </div>
        <div className="text-text-heading font-normal xl:text-[15px] lg:text-[15px] md:text-[12px] text-[10px] mb-4">
          Gmail：ifmcamp@gmail.com
        </div>
      </div>
      <div className="xl:ml-[30rem] lg:ml-[20rem] md:ml-[15rem] flex flex-col  ">
        <div className="flex flex-row ml-[5rem]   gap-[1.88rem]  ">
          <Link href="https://www.instagram.com/nycuimf_camp_2025?igsh=MW02Y21kdHI2N202Zw==">
            <Image src="/instagram.png" alt="image" width={30} height={30} />
          </Link>
          <Link href="https://www.facebook.com/imfcamp/">
            <Image src="/facebook.png" alt="image" width={30} height={30} />
          </Link>
        </div>
        <p className="text-center text-[#6E6E96] text-[xs] font-normal leading-normal ml-[1.88rem] relative top-[1rem] text-xs">
          © 2024. All rights reserved
        </p>
      </div>
    </div>
  );
}
