"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/about/About";
import ProjectCard from "@/components/ProjectCard";
import ContactSection from "@/components/Contact";
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
        <ProjectCard />
        <ContactSection />
        <SiteFooter></SiteFooter>
      </SmoothScrollProvider>
    </main>
  );
};

export default Page;
