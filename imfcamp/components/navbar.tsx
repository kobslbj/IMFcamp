"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "營隊介紹",
    "課程活動",
    "營隊照片",
    "學員回饋",
    "報名資訊",
  ];

  return (
    <Navbar
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">第十七屆陽明交大資財營</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4">
        <NavbarBrand>
          <p className="font-bold text-2xl">第十七屆陽明交大資財營</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#camp-intro">
            營隊介紹
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#course-activities">
            課程活動
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#camp-photos">
            營隊照片
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="">
            報名資訊
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button color="primary" variant="shadow">
            我要報名
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" color={"foreground"} href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
