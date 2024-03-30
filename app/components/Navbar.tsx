"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingLogo } from "./ui/floating-logo";
import Image from "next/image";
import Logo from "../../public/assets/Logo.png";
import { Floatingbtn } from "./ui/floationg-Loginbtn";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Projects",
      link: "/projects",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <>
      <FloatingNav navItems={navItems} />
      <FloatingLogo logo={<Image src={Logo} width={40} height={40} alt="Logo" />} text="DevXClub" />
      <Floatingbtn text="Register Now" />
    </>
  );
}
