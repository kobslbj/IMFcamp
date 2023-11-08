"use client";


import { Image } from "@nextui-org/react";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { Schedule } from "../components/schedule";
import { CourseCard } from "../components/coursecard";
import { Info } from "../components/info";
import { Experience } from "../components/experience";
import { Question } from "../components/question";
import { Detail } from "../components/detail";
import Footer from "../components/footer";
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
    <>

      <section className="flex flex-col items-center justify-center font-serif mb-[5rem]">
        <div>
          <Image width={1000} alt="Cover picture" src="/cover.png" />
        </div>
        <Info />
        <div data-aos="fade-up" id="camp-intro">
          <div className="xl:text-4xl text-3xl font-bold text-fluorescent  pt-6  flex justify-center mt-20 mb-10">
            營隊介紹
          </div>
          <Card className="max-w-screen-lg mt-4 mb-20">
            <CardHeader className="flex gap-3 justify-center">
              <div className="flex flex-col  ">
                <p className="font-bold xl:text-3xl text-2xl text-center">
                  資訊與財金的結合，讓你成為有競爭力的π型人才!
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="xl:p-10 p-6">
              <p className="font-bold xl:text-[1.2rem] ">
                資訊科技的快速發展帶來了金融服務領域的革新，不斷涌現出全新的金融服務。我們的營隊旨在讓學員們與資訊技術和金融科技時代接軌，並迎接不斷變化的行業需求。透過參加我們的營隊，學生們將獲得寶貴的知識和實踐經驗，並能夠在未來的職業生涯中融合資訊科技和金融領域的專業知識，認識未來FinTech領域。
                無論您對資訊科技、金融或是二者的結合有興趣，陽明交通大學資財營將為您提供一個豐富而具有挑戰性的學習環境。我們期待您的參與，一同探索金融科技的未來！
              </p>
            </CardBody>
          </Card>
        </div>
        {/* <div data-aos="fade-right" id="course-activities">
          <div className="xl:text-4xl text-3xl font-bold text-fluorescent  pt-6  flex justify-center mt-20 mb-10">
            課程活動
          </div>
          <Schedule />
        </div> */}
        <div data-aos="fade-up" data-aos-duration="3000" id="course-intro">
          <div className="xl:text-4xl text-3xl font-bold text-fluorescent  pt-6  flex justify-center mt-20 mb-10">
            課程介紹
          </div>
          <CourseCard />
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" id="course-intro">
          <div className="xl:text-4xl text-3xl font-bold text-fluorescent  pt-6  flex justify-center mt-20 mb-10">
            學員回饋
          </div>
          <Experience />
        </div>
        <div data-aos="fade-right " id="camp-photos">
          <div className="xl:text-4xl text-3xl font-bold text-fluorescent  pt-6  flex justify-center mt-20 mb-10">
            營隊照片
          </div>
          <Image isBlurred width={1000} src="/all.JPG" alt="picture" />
        </div>
        <div data-aos="fade-right " id="camp-info">
          <div className="xl:text-4xl text-3xl font-bold text-fluorescent  pt-6  flex justify-center mt-20 mb-10">
            報名資訊
          </div>
          <Detail />
        </div>
        <div data-aos="fade-right " id="camp-qa">
          <div className="xl:text-4xl text-3xl font-bold text-fluorescent  pt-6  flex justify-center mt-20 mb-10">
            報名Q&A
          </div>
          <Question />
        </div>
      </section>
      <Footer />
    </>
  );
}
