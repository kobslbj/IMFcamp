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
  const handleMenuItemClick = () => {
    setIsMenuOpen(false); 
  };
  const menuItems = [
    { text: "營隊介紹", href: "#camp-intro" },
    { text: "課程活動", href: "#course-activities" },
    { text: "課程介紹", href: "#course-intro" },
    { text: "報名資訊", href: "#camp-info" },
    { text: "報名Q&A", href: "#camp-qa" },
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
          <p className="font-bold text-inherit">第十八屆陽明交大資財營</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4">
        <NavbarBrand>
          <p className="font-bold text-2xl">第十八屆陽明交大資財營</p>
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
          <Link color="foreground" href="#course-intro">
            課程介紹
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#camp-info">
            報名資訊
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#camp-qa">
            報名Q&A
          </Link>
        </NavbarItem>
        <Link href="https://reurl.cc/E6xmg1">
          <NavbarItem>
            <Button color="primary" variant="shadow" className="text-white ">
              我要報名
            </Button>
          </NavbarItem>
        </Link>
      </NavbarContent>

      <NavbarMenu>
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item.text}-${index}`}>
          <Link className="w-full cursor-pointer" color={"foreground"} href={item.href} size="lg" onClick={handleMenuItemClick}>
            {item.text}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
    </Navbar>
  );
};
