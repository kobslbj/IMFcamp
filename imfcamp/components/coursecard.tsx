"use client";
import { Image } from "@nextui-org/react";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import courses from "../data/coursedata.json";
export const CourseCard = () => {
  return (
    <div className="mt-5">
      {courses.map((course) => (
        <Card
          key={course.title}
          isBlurred
          className="bg-white border rounded-lg overflow-hidden max-w-[610px] shadow-xl my-4 mx-auto mb-6"
          shadow="sm"
        >
          <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center ">
              <div className="relative col-span-6 md:col-span-4">
                <Image
                  alt="Album cover"
                  className="object-cover"
                  height={500}
                  shadow="md"
                  src={course.imageSrc}
                  width="100%"
                />
              </div>
              <div className="flex flex-col col-span-6 md:col-span-8">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-0">
                    <h3 className="text-4xl font-bold pl-2">{course.title}</h3>
                    <p className="text-1xl text-foreground/80 p-2">
                      {course.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
