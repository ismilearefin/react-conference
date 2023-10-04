"use client";
import Link from "next/link";
import React from "react";
import Confetti from "react-confetti";

export default function page() {
  return (
    <div className="w-full min-h-screen grid justify-center items-center text-center ">
        {/* Add Confetti in success page */}
      <Confetti width={1920} height={1920}></Confetti>
      <div className="mb-8">
      <h1 className="text-3xl font-bold mb-4">Successfully send your email</h1>
      <Link href="/" className=" pointer">
        Go back
      </Link>
      </div>
    </div>
  );
}
