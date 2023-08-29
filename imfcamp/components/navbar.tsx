"use client";

import { Navbar as NextUINavbar } from "@nextui-org/navbar";
import { Tabs, Tab } from "@nextui-org/react";
import NextLink from "next/link";

export const Navbar = () => {
  return (
    <NextUINavbar
      maxWidth="xl"
      className="bg-black z-50 w-full fixed top-0 border-b border-gray-100"
    >
      <p className="font-bold text-slate-50 text-2xl">第十七屆陽明交大資財營</p>
      <div className="flex flex-wrap gap-6 bg-black">
        <Tabs size="lg" aria-label="Tabs sizes">
          <Tab key="tag1" title="營隊介紹">
            <NextLink href="/dashboard#camp-intro">營隊介紹</NextLink>
          </Tab>
          <Tab key="tag2" title="課程活動">
            <NextLink href="/dashboard#course-activities">課程活動</NextLink>
          </Tab>
          <Tab key="tag3" title="營隊照片">
            <NextLink href="/dashboard#camp-photos">營隊照片</NextLink>
          </Tab>
          <Tab key="tag4" title="學員回饋" />
          <Tab key="tag5" title="報名資訊" />
        </Tabs>
      </div>
    </NextUINavbar>
  );
};
