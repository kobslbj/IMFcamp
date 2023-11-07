"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";
import experiences from "../data/experience.json";

export const Experience = () => {
  return (
    <div className="flex xl:flex-row flex-col gap-8">
      {experiences.map((experience, index) => (
        <Card key={index} className="max-w-[340px] my-2">
          <CardHeader className="justify-between">
            <div className="flex gap-3">
              <Avatar
                isBordered
                radius="full"
                size="lg"
                src={experience.imageSrc}
              />
              <div className="flex gap-[7rem] mt-5">
                <h2 className="text-lg font-semibold leading-none ml-1">
                  {experience.name}
                </h2>
                <h3 className="text-sm font-medium">{experience.school}</h3>
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-5 py-2 text-small ">
            <p>{experience.content}</p>
          </CardBody>
          <CardFooter className="gap-3"></CardFooter>
        </Card>
      ))}
    </div>
  );
};
