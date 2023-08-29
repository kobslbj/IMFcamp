"use client";

import { Image } from "@nextui-org/react";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { Schedule } from "../components/schedule";
import { CourseCard } from "../components/coursecard";
import { ImageSlide } from "../components/Imageslide";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // 您可以自行設定其他選項
    });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center mt-20">
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
            陽明交通大學
            <br />
            光復校區
          </div>
        </div>
        <Image width={1000} alt="Cover picture" src="/all1.JPG" />
      </div>
      <div data-aos="fade-up" id="camp-intro">
        <div className="text-4xl font-bold text-cyan-600  pt-6 rounded-lg shadow-lg flex justify-center mt-20">
          營隊介紹
        </div>
        <Card className="max-w-screen-lg mt-4">
          <CardHeader className="flex gap-3 justify-center">
            <div className="flex flex-col  ">
              <p className="font-bold text-3xl">
                資訊與財金的結合，讓你成為有競爭力的π型人才!
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="font-bold text-2xl">
              資訊科技的快速發展帶來了金融服務領域的革新，不斷涌現出全新的金融服務。我們的營隊旨在讓學員們與資訊技術和金融科技時代接軌，並迎接不斷變化的行業需求。透過參加我們的營隊，學生們將獲得寶貴的知識和實踐經驗，並能夠在未來的職業生涯中融合資訊科技和金融領域的專業知識，認識未來FinTech領域。
              無論您對資訊科技、金融或是二者的結合有興趣，陽明交通大學資財營將為您提供一個豐富而具有挑戰性的學習環境。我們期待您的參與，一同探索金融科技的未來！
            </p>
          </CardBody>
        </Card>
      </div>
      <div className="bg-black" data-aos="fade-right" id="course-activities">
        <div className="text-4xl font-bold text-cyan-600  pt-6 rounded-lg shadow-lg flex justify-center mt-20">
          課程活動
        </div>
        <Schedule />
      </div>
      <div data-aos="fade-up" data-aos-duration="3000" id="course-intro">
        <div className="text-4xl font-bold text-cyan-600  pt-6 rounded-lg shadow-lg flex justify-center mt-20">
          課程介紹
        </div>
        <CourseCard />
      </div>
      <div data-aos="fade-right " id="camp-photos">
        <div className="text-4xl font-bold text-cyan-600  pt-6 rounded-lg shadow-lg flex justify-center mt-20">
          營隊照片
        </div>
        <ImageSlide />
      </div>
    </section>
  );
}
