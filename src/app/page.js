'use client'
import Sponsor from "@/components/sponsor/Sponsor";
import Conferance from "@/components/conference/Conferance";
import HeroSection from "@/components/heroSection/HeroSection";
import { useRef } from "react";
import ContactUs from "@/components/contactUs/ContactUs";


export default function Home() {
  // Scroll to conference Section
const conferenceSectionRef = useRef(null);
  
  return (
    <main className="w-full relative">
      <HeroSection conferenceSectionRef={conferenceSectionRef}></HeroSection>
      <Conferance conferenceSectionRef={conferenceSectionRef}></Conferance>
      <Sponsor></Sponsor>
      <ContactUs></ContactUs>
    </main>
  );
}
