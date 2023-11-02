import { Image } from "@nextui-org/react";
import { useState, useEffect } from "react";

export const Info = () => {
  const countDownDate = new Date("December 18, 2023 00:00:00").getTime();

  // Initialize state with the countdown values
  const [countDown, setCountDown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Update the countdown every second
    const interval = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update state
      setCountDown({ days, hours, minutes, seconds });

      // If the count down is finished, clear the interval
      if (distance < 0) {
        clearInterval(interval);
        setCountDown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center justify-center  w-full mt-[10rem]">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-row">
          <div className="mr-[20rem] mb-[5rem] flex flex-row relative">
            <Image
              width={350}
              height={300}
              alt="pig picture"
              src="/IMG_1191.PNG"
              classNames={{
                wrapper: "absolute top-[30%] ",
              }}
              data-aos="fade-up-right"
              data-aos-duration="3000"
            />
            <div className=" text-4xl font-bold w-[7rem] h-[7rem] flex-shrink bg-[#F5F5F5] rounded-full flex flex-col items-center justify-center text-black leading-normal">
              地點
            </div>
            <div className="flex flex-col mt-[3.3rem]">
              <div className="w-[20rem] h-[0.3rem]  bg-[#F5F5F5] rounded-lg " />
              <p className="ml-[3rem] mt-[1.5rem] text-4xl text-white">
                陽明交通大學光復校區
              </p>
            </div>
          </div>
          <div className="flex flex-row relative ">
            <Image
              width={300}
              height={300}
              alt="pig picture"
              src="/IMG_1193.PNG"
              classNames={{
                wrapper: "absolute right-[8%]  top-[68%] ",
              }}
              data-aos="fade-up-left"
              data-aos-duration="1500"
            />
            <div className=" text-4xl font-bold w-[7rem] h-[7rem] flex-shrink bg-[#F5F5F5] rounded-full flex flex-col items-center justify-center text-black leading-normal">
              時間
            </div>
            <div className="flex flex-col  mt-[3.3rem] ">
              <div className="w-[20rem] h-[0.3rem]  bg-[#F5F5F5] rounded-lg " />
              <p className="ml-[3rem] mt-[1.5rem] text-4xl text-white">
                2024 1/26(五) ~ 1/30(二)
              </p>
            </div>
          </div>
        </div>
        <p className="mb-[5rem] text-4xl font-bold  flex justify-center text-fluorescent">
          距離報名截止還剩!
        </p>
        <div className="flex flex-row justify-around w-[80%]">
          <div className="w-[10rem] h-[10rem] flex-shrink rounded-full flex flex-col items-center justify-center border-4 border-white">
            <p className="text-fluorescent  text-5xl font-bold leading-normal">
              {countDown.days}
            </p>
            <p className="text-white  text-2xl font-bold leading-normal">
              Days
            </p>
          </div>
          <div className="w-[10rem] h-[10rem] flex-shrink rounded-full flex flex-col items-center justify-center border-4 border-white ">
            <p className="text-fluorescent text-5xl font-bold leading-normal">
              {countDown.hours}
            </p>
            <p className="text-white  text-2xl font-bold leading-normal">
              Hours
            </p>
          </div>
          <div className="w-[10rem] h-[10rem] flex-shrink rounded-full flex flex-col items-center justify-center border-4 border-white">
            <p className="text-fluorescent text-5xl font-bold leading-normal">
              {countDown.minutes}
            </p>
            <p className="text-white  text-2xl font-bold leading-normal">
              Mins
            </p>
          </div>
          <div className="w-[10rem] h-[10rem] flex-shrink rounded-full flex flex-col items-center justify-center bg-black border-4 border-white z-30">
            <p className="text-fluorescent  text-5xl leading-normal font-bold">
              {countDown.seconds}
            </p>
            <p className="text-white  text-2xl font-bold leading-normal">
              seconds
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
