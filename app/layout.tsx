import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Clock from "@/components/clock/Clock";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portofolio",
  description: "portofolio by rojabby",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground transition-colors duration-500">
        <Clock></Clock>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
