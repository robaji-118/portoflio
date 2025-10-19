"use client";

import React from "react";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";

export default function ContactSection()   {
  return (
    <section id="contact"
      aria-labelledby="contact-heading"
      className="relative py-16 lg:py-24 overflow-hidden"
    >
      {/* Background soft glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-72 w-72 md:h-96 md:w-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative px-6 md:px-10 max-w-6xl mx-auto">
        <header className="max-w-2xl">
          <h2
            id="contact-heading"
            className="text-pretty text-xl md:text-2xl font-semibold"
          >
            Let’s Connect
          </h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">
            I'm always open to collaborations, freelance projects, or just a
            friendly chat. Reach out through any platform below.
          </p>
        </header>

        {/* Content Card */}
        <div className="mt-8 md:mt-10 rounded-2xl ring-1 ring-border bg-card/60 backdrop-blur p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <form
              className="rounded-xl ring-1 ring-border bg-background/50 p-5 md:p-6"
              aria-label="Contact form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-4">
                <FormField id="name" label="Name" placeholder="Your name" />
                <FormField
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="your email"
                />
                <FormField
                  id="message"
                  label="Message"
                  textarea
                  placeholder="Tell me about your project..."
                />

                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>

            {/* Social/contact links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ContactCard
                href="https://wa.me/6288801793512"
                label="WhatsApp"
                description="Chat with me directly"
                icon={<FaWhatsapp className="h-8 w-8" />}
              />
              <ContactCard
                href="https://instagram.com/rbyyyyx_."
                label="Instagram"
                description="@rbyyyyx_."
                icon={<FaInstagram className="h-8 w-8"/>}
              />
              <ContactCard
                href="abirojabi8@gmail.com"
                label="Email"
                description="abirojabi8@gmail.com"
                icon={<FaEnvelope className="h-8 w-8"/>}
              />
              <ContactCard
                href="https://linkedin.com/in/your_profile"
                label="LinkedIn"
                description="Connect professionally"
                icon={<FaLinkedin className="h-8 w-8" />}
              />
              <ContactCard
                href="https://github.com/your_github"
                label="GitHub"
                description="Check my repositories"
                icon={<FaGithub className="h-8 w-8" />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Sub Components ---------- */

function FormField({
  id,
  label,
  placeholder,
  type = "text",
  textarea = false,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <label
        htmlFor={id}
        className="text-sm font-medium text-foreground/80 tracking-tight"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          className="border border-border bg-transparent rounded-lg px-3 py-2 text-sm min-h-28 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          className="border border-border bg-transparent rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
        />
      )}
    </div>
  );
}

function ContactCard({
  href,
  label,
  description,
  icon,
}: {
  href: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl ring-1 ring-border bg-background/60 hover:bg-background transition-all p-4 md:p-5 outline-none focus-visible:ring-2 focus-visible:ring-primary hover:scale-[1.02]"
    >
      <div className="flex items-center gap-3">
        <div className="text-foreground/80 group-hover:text-primary transition-colors">
          {icon}
        </div>
        <div>
          <h3 className="text-sm md:text-base font-medium">{label}</h3>
          <p className="text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
