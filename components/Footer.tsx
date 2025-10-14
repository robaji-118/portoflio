"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      role="contentinfo"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-muted/60 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {/* Logo + short description */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex items-start gap-2">
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Rojabby
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Building modern web experiences with clean design, performance,
              and delightful details.
            </p>
          </div>

          {/* Quick links */}
          <nav
            aria-label="Quick links"
            className="flex justify-center md:justify-center"
          >
            <ul className="grid grid-cols-2 gap-3 text-sm font-medium md:grid-cols-1">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 rounded-md px-3 py-2 text-foreground/90 transition-colors hover:text-foreground"
                  >
                    <span className="relative">
                      <span className="absolute -left-3 top-1/2 hidden h-px w-2 -translate-y-1/2 bg-foreground/20 transition-all group-hover:block group-hover:w-3" />
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center gap-3">
              {[
                {
                  label: "Instagram",
                  href: "https://instagram.com/yourhandle",
                  Icon: FaInstagram,
                  
                },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/yourhandle",
                  Icon: FaLinkedin,
                  
                },
                {
                  label: "GitHub",
                  href: "https://github.com/yourhandle",
                  Icon: FaGithub,
                  
                },
                {
                  label: "WhatsApp",
                  href: "https://wa.me/1234567890",
                  Icon: FaWhatsapp,
                  
                },
              ].map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md p-2 ring-1 ring-transparent transition-all hover:bg-background/50 hover:ring-foreground/15 hover:shadow-lg hover:shadow-foreground/5"
                >
                  <Icon
                    className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground font-mono">
              let’s build something great
            </p>
          </div>
        </div>

        {/* Bottom line: email + copyright */}
        <div className="mt-10 flex flex-col items-center gap-3 border-t border-border/60 pt-6 md:flex-row md:justify-between">
          <a
            href="mailto:abirojabi8@gmail.com"
            className="text-sm text-foreground/90 underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            abirojabi8@gmail.com
          </a>
          <p className="text-xs text-muted-foreground">
            © {year} Rojabby. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
