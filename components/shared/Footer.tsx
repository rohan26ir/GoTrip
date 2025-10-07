"use client";

import React from "react";
// import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";

interface FooterLink {
  id: number;
  name: string;
  href: string;
}

const Footer: React.FC = () => {
  const footerPages: FooterLink[] = [
    { id: 1, name: "Privacy Policy", href: "/privacy" },
    { id: 2, name: "Terms & Conditions", href: "/terms" },
    { id: 3, name: "Cookie Policy", href: "/cookies" },
  ];

  const social = [
    { id: 1, name: "Facebook", icon: <FaFacebookF />, href: "https://facebook.com" },
    { id: 2, name: "Twitter", icon: <FaTwitter />, href: "https://twitter.com" },
    { id: 3, name: "YouTube", icon: <FaYoutube />, href: "https://youtube.com" },
    { id: 4, name: "LinkedIn", icon: <FaLinkedinIn />, href: "https://linkedin.com" },
    { id: 5, name: "Instagram", icon: <FaInstagram />, href: "https://instagram.com" },
  ];

  const Tours: FooterLink[] = [
    { id: 1, name: "All Tours", href: "/tours" },
    { id: 2, name: "Popular Tours", href: "/tours/popular" },
    { id: 3, name: "Custom Packages", href: "/tours/custom" },
    { id: 4, name: "Booking", href: "/booking" },
    { id: 5, name: "Destinations", href: "/destinations" },
  ];

  const Company: FooterLink[] = [
    { id: 1, name: "About Us", href: "/about" },
    { id: 2, name: "Blog", href: "/blog" },
    { id: 3, name: "How it Works", href: "/how-it-works" },
    { id: 4, name: "Careers", href: "/careers" },
    { id: 5, name: "Pricing", href: "/pricing" },
  ];

  const Support: FooterLink[] = [
    { id: 1, name: "Help Center", href: "/help" },
    { id: 2, name: "FAQs", href: "/faqs" },
    { id: 3, name: "Contact Support", href: "/support" },
    { id: 4, name: "Community", href: "/community" },
    { id: 5, name: "Feedback", href: "/feedback" },
  ];

  return (
    <div className="">
      <div className="w-full mx-auto pt-10 px-10 rounded-2xl bg-white border">
        <div className="flex flex-col lg:flex-row justify-between gap-5 md:gap-20">
          {/* Logo + description + social icons */}
          <div className="w-auto">
            <div className="flex flex-col gap-3 w-auto">
              {/* <Image
                src="https://your-tour-logo-url.com/logo.svg"
                width={150}
                height={150}
                alt="Tour Logo"
              /> */}
              <p>
                Explore the world with our guided tours and travel packages.
                Book your next adventure with ease!
              </p>

              {/* Social icons */}
              <div className="flex justify-between items-center w-60 gap-2">
                {social.map((item) => (
                  <Link key={item.id} href={item.href} target="_blank">
                    <div className="bg-gray-300/20 hover:bg-white/25 w-16 h-16 flex justify-center items-center rounded-2xl transition-all">
                      <div className="text-blue-700 text-2xl">{item.icon}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Pages */}
          <div className="w-full flex flex-col md:flex-row justify-between gap-5 md:gap-20">
            <div className="flex flex-col gap-1 w-[85%]">
              <h2 className="text-3xl font-bold">Tours</h2>
              {Tours.map((page) => (
                <Link key={page.id} href={page.href}>
                  {page.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-1 w-[85%]">
              <h2 className="text-3xl font-bold">Company</h2>
              {Company.map((page) => (
                <Link key={page.id} href={page.href}>
                  {page.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-1 w-[85%]">
              <h2 className="text-3xl font-bold">Support</h2>
              {Support.map((page) => (
                <Link key={page.id} href={page.href}>
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Go to Top Button */}
        {/* <div className="flex justify-end items-center py-5">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="relative flex items-center justify-center h-10 w-10 bg-white rounded-full overflow-hidden"
          >
            <FaArrowUp />
            <div className="absolute h-20 w-20 rounded-full bg-black/20 animate-pulse" />
          </button>
        </div> */}

        {/* Bottom Section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-5 mb-10 pt-14">
          <div>Copyright © 2025 | All Rights Reserved</div>
          <div className="flex gap-3">
            {footerPages.map((item) => (
              <Link key={item.id} href={item.href}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
