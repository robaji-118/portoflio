"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/about/About";
import ProjectCard from "@/components/ProjectCard";
import ContactSection from "@/components/Contact";
import ExperienceSection from "@/components/Experience";
import SiteFooter from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SmoothScrollProvider from "@/provider/SmoothScrolling";


const Page = () => {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <SmoothScrollProvider>
        <CustomCursor />
        <Hero />
        <About />
        <ExperienceSection></ExperienceSection>
        <ProjectCard />
        <ContactSection />
        <SiteFooter></SiteFooter>
      </SmoothScrollProvider>
    </main>
  );
};

export default Page;
