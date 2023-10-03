"use client";
import Sponsor from "@/components/sponsor/Sponsor";
import Conferance from "@/components/conference/Conferance";
import HeroSection from "@/components/heroSection/HeroSection";
import { useRef, useState } from "react";
import ContactUs from "@/components/contactUs/ContactUs";
import {
  BiSolidMessageDetail,
  BiLogoWhatsappSquare,
  BiLogoMessenger,
} from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";

export default function Home() {
  // Message button for facebook & whatsapp messenger
  const [isOpen, setIsOpen] = useState(false);
  // Scroll to conference Section
  const conferenceSectionRef = useRef(null);

  return (
    <main className="w-full relative">
      <HeroSection conferenceSectionRef={conferenceSectionRef}></HeroSection>
      <Conferance conferenceSectionRef={conferenceSectionRef}></Conferance>
      <Sponsor></Sponsor>
      <ContactUs></ContactUs>
      {/* Message Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" text-4xl lg:text-6xl  fixed bottom-2 right-2 p-4 "
      >
        {isOpen ? (
          <>
            <a target="_blank" rel="noopener" href="https://wa.me/01683021551">
              <BiLogoWhatsappSquare className="text-green-700"></BiLogoWhatsappSquare>
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://m.me/107977795134357"
            >
              <BiLogoMessenger className="text-sky-600"></BiLogoMessenger>
            </a>
            <GrFormClose></GrFormClose>
          </>
        ) : (
          <BiSolidMessageDetail className="text-[#FFC93E]"></BiSolidMessageDetail>
        )}
      </button>
    </main>
  );
}
