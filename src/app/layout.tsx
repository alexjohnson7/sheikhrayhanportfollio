import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sheikh Rayhan | Cyber Security Expert & Python Developer",
  description:
    "Cyber Security Expert, Python Developer & Content Creator. Specializing in Browser Automation (Selenium), Advanced Scripting, and Security Auditing.",
  keywords: [
    "Sheikh Rayhan",
    "Cyber Security",
    "Python Developer",
    "Hacking",
    "Termux",
    "Selenium",
    "PenTesting",
    "Network Security",
    "Linux",
    "Tor",
  ],
  authors: [{ name: "Sheikh Rayhan" }],
  openGraph: {
    title: "Sheikh Rayhan | Cyber Security Expert & Python Developer",
    description:
      "Cyber Security Expert, Python Developer & Content Creator. Specializing in Browser Automation, Advanced Scripting, and Security Auditing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark-bg text-dark-text`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}