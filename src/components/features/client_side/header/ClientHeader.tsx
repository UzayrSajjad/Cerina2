"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLHeadElement>(null);
  const lastScrollY = useRef(0);
  const [mounted, setMounted] = useState(false);
  const mblRef = useRef<HTMLDivElement>(null);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!headerRef.current || !mblRef.current) return;

      // Header always visible, no hide/show on scroll

      if (!isOpen) {
        if (currentScrollY > 100) {
          mblRef.current.style.top = "0px";
          mblRef.current.style.backgroundColor = "red";
        } else {
          mblRef.current.style.top = "0";
          mblRef.current.style.backgroundColor = "transparent";
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      {/* Mobile Menu Button -*/}
      <button
        className={`fixed top-8 right-4 z-[99999] p-2 md:hidden bg-white/80 rounded-full shadow-lg backdrop-blur-md transition-opacity duration-300 ${
          mounted ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <header
        ref={headerRef}
        className="z-50 will-change-transform transition-transform duration-300 ease-in-out fixed top-[33px] left-1/2 transform -translate-x-1/2 w-[calc(100vw-202px)] max-w-[1452px] h-[88px] rounded-[1010px] shadow-[0px_17px_45.2px_0px_#0000000D] backdrop-blur-[50px] bg-white/70"
      >
        <div className="relative max-w-[1240px] mx-auto px-4 h-[88px] flex justify-between items-center">
          {/* Logo */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <Link href="/">
              <img
                src="/logo.svg"
                alt="Promesse Logo"
                style={{ maxWidth: "80%" }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 ml-auto text-gray-800 font-normal text-[0.875rem] leading-[1.25rem]">
           
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("about");
              }}
            >
              About us
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("features");
              }}
              className="flex items-center gap-1"
            >
             Who We Serve
             <img src="/arrow_down.svg" alt="arrow" className="w-4 h-4" />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("research");
              }}
              className="flex items-center gap-1"
            >
             Our Products
             <img src="/arrow_down.svg" alt="arrow" className="w-4 h-4" />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("research");
              }}
            >
             Research
            </a>
            
            <a href="/blogs">Blogs</a>
            <Link
              href="/waitlist"
              className="ml-4 h-[60px] px-[35px] py-[18px] rounded-[16px] bg-[#DDAC7C33] border-2 border-[#DDAC7C] text-[#18161A] font-semibold flex items-center gap-[10px]"
            >
              <img src="/arrow_right.svg" alt="arrow" className="w-4 h-4" />
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide Menu */}
      <div
        ref={mblRef}
        className={`fixed top-0 right-0 w-full h-[100vh] z-[999] md:hidden transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          bg-white bg-gradient-to-r from-[#B7CEED] to-[#DDB9DF] border-l border-white/20`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 text-gray-800 overflow-hidden">
          <a
            href="/"
            className="text-[1.125rem] font-medium hover:text-[#5E005E] transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("home");
              setIsOpen(false);
            }}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-[1.125rem] font-medium hover:text-[#5E005E] transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("about");
              setIsOpen(false);
            }}
          >
            About us
          </a>
          <a
            href="#features"
            className="text-[1.125rem] font-medium hover:text-[#5E005E] transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("features");
              setIsOpen(false);
            }}
          >
            Features
          </a>
          <a
            href="/blogs"
            className="text-[1.125rem] font-medium hover:text-[#5E005E] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </a>
          <Link
            href="/waitlist"
            className="px-[1.5rem] py-[0.75rem] rounded-md bg-[#5E005E] text-white font-semibold hover:bg-[#4A004A] transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Join our waitlist
          </Link>
        </div>
      </div>
    </>
  );
}
