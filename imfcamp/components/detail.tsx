"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export const Detail = () => {
  return (
    <>
      <div className="flex xl:flex-row flex-col  gap-5 mb-[1.25rem]">
        <Card>
          <CardHeader className="flex gap-3 pl-5">
            <p className="xl:text-[2rem] text-[1.5rem] font-bold text-fluorescent">
              {" "}
              報名時間
            </p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="xl:text-[2rem] text-[1rem] font-bold">
              11/7 (二) ~ 12/18 (一) 23:59
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader className="flex gap-3 pl-5">
            <p className="xl:text-[2rem] text-[1.5rem]  font-bold text-fluorescent">
              {" "}
              營隊日期
            </p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="xl:text-[2rem] text-[1rem] font-bold">
              2024 年 1/26(五) ~ 1/30(二)
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader className="flex gap-3 pl-5">
            <p className="xl:text-[2rem] text-[1.5rem]  font-bold text-fluorescent">
              {" "}
              營隊地點
            </p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="xl:text-[2rem] text-[1rem] font-bold">
              陽明交通大學 光復校區
            </p>
          </CardBody>
        </Card>
      </div>
      <div className="flex flex-row gap-5 mb-[1.25rem]">
        <Card className="w-[50%] ">
          <CardHeader className="flex gap-3 pl-5 ">
            <p className="xl:text-[2rem] text-[1.5rem]  font-bold text-fluorescent ">
              {" "}
              個人報名
            </p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="xl:text-[2rem] text-[1rem] font-bold">6,800元/人</p>
          </CardBody>
        </Card>
        <Card className="w-[50%] ">
          <CardHeader className="flex gap-3 pl-5 xl:flex-row flex-col">
            <p className="xl:text-[2rem] text-[1.5rem] font-bold text-fluorescent ">
              {" "}
              團體報名{" "}
            </p>
            <p className="xl:text-[2rem] text-[1rem] font-bold text-white">
              {" "}
              3人(含)以上
            </p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="xl:text-[2rem] text-[1rem]  font-bold">6,500元/人 </p>
          </CardBody>
        </Card>
      </div>
      <div className="flex flex-row gap-5 relative">
        <Card className="w-full">
          <Image
            width={350}
            height={300}
            alt="pig picture"
            src="/IMG_1230.PNG"
            classNames={{
              wrapper: "absolute xl:right-[3rem] xl:bottom-[1px] hidden",
            }}
          />
          <CardHeader className="flex gap-3 pl-5 ">
            <p className="xl:text-[2rem] text-[1.5rem] font-bold text-fluorescent">
              {" "}
              早鳥優惠
            </p>
          </CardHeader>
          <Divider />
          <CardBody className="relative">
            <p className="xl:text-[2rem] text-[1rem]  font-bold">
              11/28(二)以前報名 即享300元折扣優惠
            </p>
            <p className="xl:text-[2rem] text-[1rem]  font-bold">ex:</p>
            <p className="xl:text-[2rem] text-[1rem]  font-bold">
              個人報名 6,800元/人 ={">"} 6,500元/人
            </p>
            <p className="xl:text-[2rem] text-[1rem]  font-bold">
              團體報名 6,500元/人 ={">"} 6,200元/人
            </p>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
