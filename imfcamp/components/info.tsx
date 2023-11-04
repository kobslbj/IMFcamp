import { Image, Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
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
    <div className="flex items-center justify-center  w-full mt-[6rem] relative ">
      <div className="">
        <Image
          width={350}
          height={300}
          alt="pig picture"
          src="/IMG_1191.PNG"
          classNames={{
            wrapper: "absolute left-[8%] top-[20%] z-0",
          }}
        />
      </div>
      <div className=" ">
        <Image
          width={300}
          height={300}
          alt="pig picture"
          src="/IMG_1193.PNG"
          classNames={{
            wrapper: "absolute right-[8%]  top-[30%] z-0",
          }}
        />
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-row">
          <div className="flex flex-row gap-20 ">
            <Card>
              <CardHeader className="flex gap-3 pl-5">
                <p className="text-[2rem] font-bold text-fluorescent">
                  {" "}
                  報名時間
                </p>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="text-[1.5rem] font-bold">
                  11/7 (二) ~ 12/18 (一) 23:59
                </p>
              </CardBody>
            </Card>
            <Card>
              <CardHeader className="flex gap-3 pl-5">
                <p className="text-[2rem] font-bold text-fluorescent">
                  {" "}
                  營隊日期
                </p>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="text-[1.5rem] font-bold">
                  2024 年 1/26(五) ~ 1/30(二)
                </p>
              </CardBody>
            </Card>
            <Card>
              <CardHeader className="flex gap-3 pl-5">
                <p className="text-[2rem] font-bold text-fluorescent">
                  {" "}
                  營隊地點
                </p>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="text-[1.5rem] font-bold">陽明交通大學 光復校區</p>
              </CardBody>
            </Card>
          </div>
        </div>

        <p className="mb-[5rem] text-4xl font-bold  flex justify-center text-fluorescent mt-[6rem]">
          距離報名截止還剩!
        </p>

        <div className="flex flex-row justify-around w-[80%] ">
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
