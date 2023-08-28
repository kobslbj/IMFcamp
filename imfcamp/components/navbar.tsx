"use client";

import { Navbar as NextUINavbar } from "@nextui-org/navbar";
import { Tabs, Tab } from "@nextui-org/react";
import NextLink from "next/link";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl"top-0 className="bg-black z-50 w-full fixed">
        <p className="font-bold text-slate-50 text-2xl">
          第十七屆陽明交大資財營
        </p>
      <div className="flex flex-wrap gap-6 bg-black">
        <Tabs size="lg" aria-label="Tabs sizes" >
          <Tab key="tag1" title="營隊介紹" />
          <Tab key="tag2" title="課程活動" />
          <Tab key="tag3" title="營隊照片" />
          <Tab key="tag4" title="學員回饋" />
          <Tab key="tag5" title="報名資訊" />
        </Tabs>
      </div>
    </NextUINavbar>
  );
};
