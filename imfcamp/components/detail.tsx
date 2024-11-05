"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react";

export const Detail = () => {
  return (
    <>
      <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col  gap-5 mb-[1.25rem]">
        <Card>
          <CardHeader className="flex gap-3 pl-5 ">
            <p className="xl:text-[2rem] lg:text-[2rem]  text-[1.5rem] font-bold text-text-title">
              {" "}
              報名時間
            </p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="xl:text-[2rem] text-[1rem] font-bold">
              11/01 (五) ~ 12/20 (五) 23:59
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader className="flex gap-3 pl-5">
            <p className="xl:text-[2rem] text-[1.5rem]  font-bold text-text-title">
              {" "}
              營隊日期
            </p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="xl:text-[2rem] text-[1rem] font-bold">
              2025 年 02/05(三) ~ 02/09(日)
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader className="flex gap-3 pl-5">
            <p className="xl:text-[2rem] text-[1.5rem]  font-bold text-text-title">
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
            <p className="xl:text-[2rem] text-[1.5rem]  font-bold text-text-title ">
              個人報名
            </p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="xl:text-[2rem] text-[1rem] font-bold">7,300元/人</p>
          </CardBody>
        </Card>
        <Card className="w-[50%] ">
          <CardHeader className="flex gap-3 pl-5 ">
            <p className="xl:text-[2rem] text-[1.5rem] font-bold text-text-title ">
              團體報名
            </p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="xl:text-[2rem] text-[1rem]  font-bold">7,000元/人 </p>
            <p className="xl:text-[1.5rem] text-[0.8rem]  font-bold">
              3人(含)以上{" "}
            </p>
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
            <p className="xl:text-[2rem] text-[1.5rem] font-bold text-text-title">
              {" "}
              早鳥優惠
            </p>
          </CardHeader>
          <Divider />
          <CardBody className="relative">
            <p className="xl:text-[2rem] text-[1rem]  font-bold">
              11/28(四)以前報名 即享300元折扣優惠
            </p>
            <p className="xl:text-[2rem] text-[1rem]  font-bold">ex:</p>
            <p className="xl:text-[2rem] text-[1rem]  font-bold">
              個人報名 7,300元/人 ={">"} 7,000元/人
            </p>
            <p className="xl:text-[2rem] text-[1rem]  font-bold">
              團體報名 7,000元/人 ={">"} 6,700元/人
            </p>
          </CardBody>
        </Card>
      </div>
      <div className="w-full flex justify-center mt-5  ">
        <Link href="https://reurl.cc/E6xmg1">
          <Button
            color="primary"
            variant="shadow"
            className="text-black font-bold text-2xl bg-fluorescent w-[10rem] "
          >
            我要報名
          </Button>
        </Link>
      </div>
    </>
  );
};
