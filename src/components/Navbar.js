"use client";
import React, { useState } from "react";
import Logo from "./svgs/Logo";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  // useState for burger button
  const [open, setOpen] = useState(false);
  //add logo style
  const style = {
    width: "117",
    height: "32",
    color: "#111D5E",
  };

  return (
    <div className="w-full flex justify-center items-center  ">
      <div className="w-full lg:w-[1320px] px-5 flex justify-between py-10 lg:py-12  ">
        <Link href="/">
          <Logo style={style}></Logo>
        </Link>
        <div className="hidden lg:flex lg:min-w-[40rem] justify-between text-lg font-medium">
          <Link href="/">About us</Link>
          <Link href="/">What We do</Link>
          <Link href="/">Our work</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Say hi</Link>
        </div>
        <Image
          className="hidden lg:block"
          src="/hamburger.svg"
          alt="responsive menu"
          width={24}
          height={24}
        />
        {/* In mobile screen size */}
        <Image
          className="lg:hidden"
          src="/hamburger.svg"
          onClick={() => setOpen(!open)}
          alt="responsive menu"
          width={24}
          height={24}
        />
      </div>
      {/* In Mobile screen size */}
      {open && (
        <div className="bg-white text-black lg:hidden w-full border  h-[350px] grid grid-row-5 divide-y  gap-2 py-2  text-2xl font-medium absolute z-10 top-[100px]">
          <Link className="w-full text-center " href="/">
            About us
          </Link>
          <Link className="w-full  text-center" href="/">
            What We do
          </Link>
          <Link className="w-full  text-center" href="/">
            Our work
          </Link>
          <Link className="w-full  text-center" href="/">
            Blog
          </Link>
          <Link className="w-full  text-center" href="/">
            Say hi
          </Link>
        </div>
      )}
    </div>
  );
}
