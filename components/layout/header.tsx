"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoLink from "../logo";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import { Kalam } from "next/font/google";

const kalam = Kalam({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const baseClasses = " text-xl text-[#333333] md:text-3xl hover:text-blue-600"; // removed font-kalam here
  const activeClasses = "underline text-blue-600";

  const toggleMobileMenu = () => setMobileMenuOpen((open) => !open);

  const NavLinks = (
    <>
      <Link
        href="/services"
        className={`${baseClasses} ${
          isActive("/services") ? activeClasses : ""
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        Services
      </Link>

      <Link
        href="/gallery"
        className={`${baseClasses} ${
          isActive("/gallery") ? activeClasses : ""
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        Gallery
      </Link>

      <ScrollLink
        to="contact"
        smooth={true}
        duration={800}
        offset={-80}
        spy={true}
        activeClass={activeClasses}
        className={`${baseClasses} cursor-pointer`}
        onClick={() => setMobileMenuOpen(false)}
      >
        Contact
      </ScrollLink>
    </>
  );

  return (
    <header className="bg-[#EAE1D6]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-14 h-[65px] md:h-[120px]">
        {/* Logo */}
        <LogoLink />

        {/* Desktop nav */}
        <nav className={`hidden space-x-12 md:flex ${kalam.className}`}>
          {NavLinks}
        </nav>

        {/* Mobile hamburger menu button */}
        <button
          className="text-gray-800 md:hidden hover:text-blue-600"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <nav
          className={`md:hidden  bg-[#EAE1D6] px-6 pb-6 space-y-6 flex flex-col items-center text-center ${kalam.className}`}
        >
          {NavLinks}
        </nav>
      )}
    </header>
  );
}
