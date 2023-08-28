"use client";
import { Image } from "@nextui-org/react";
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-row items-center gap-10">
        <div className="text-8xl font-bold text-cyan-600  rounded-lg shadow-lg">
          <div>2024</div>
          <div className="text-4xl font-bold text-cyan-600 pt-6 rounded-lg shadow-lg">
            日期
          </div>
          <div className="text-4xl font-bold text-white pt-6 rounded-lg shadow-lg">
            2/1(四)~2/5(二)
          </div>
          <div className="text-4xl font-bold text-cyan-600 pt-6 rounded-lg shadow-lg">
            地點
          </div>
		  <div className="text-4xl font-bold text-white pt-6 rounded-lg shadow-lg">
            陽明交通大學<br/>光復校區
          </div>
        </div>
        <Image width={1000} alt="Cover picture" src="/all1.JPG" />
      </div>
    </section>
  );
}
