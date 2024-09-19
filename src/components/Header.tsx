"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { Button } from "@nextui-org/button";

function Header() {
  const menuList = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Create Story",
      path: "/create-story",
    },
    {
      name: "Explore Stories",
      path: "/explor",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close" : "Open"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src={"/logo.svg"} alt="logo" width={40} height={40}></Image>
          <h2 className="font-bold text-2xl text-primary ml-2">Story HaHa</h2>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center" className="hidden sm:flex">
        {menuList.map((menu, index) => (
          <NavbarItem
            key={index}
            className="text-primary  font-bold hover:underline mx-2"
          >
            <Link href={menu.path}>{menu.name}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <Button color="primary"> Get Start</Button>
      </NavbarContent>
      <NavbarMenu>
        {menuList.map((menu, index) => (
          <NavbarMenuItem
            key={index}
            className="text-primary  hover:underline mx-2"
          >
            <Link href={menu.path}>{menu.name}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;
