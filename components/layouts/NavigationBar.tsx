"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa"; // Use Bars instead of Hamburger for standard UI
import { ModeToggle } from "../ModeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { name: "home", link: "/" },
    { name: "about", link: "#about" },
    { name: "projects", link: "#projects" },
    { name: "contact", link: "#contact" },
  ];

  return (
    <header className="sticky top-5 z-50 mx-auto w-[90%] md:w-fit">
      {/* Desktop & Mobile Toggle Bar */}
      <nav className="flex items-center justify-between gap-8 bg-primary rounded-full px-6 md:px-12 py-3 shadow-md text-white">
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {items.map((item) => (
            <Link key={item.name} href={item.link} className="capitalize hover:underline">
              {item.name}
            </Link>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <ModeToggle />
          
          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden text-2xl" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-primary rounded-2xl p-6 flex flex-col gap-4 shadow-xl md:hidden text-white"
          >
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => setIsOpen(false)} // Close menu on click
                className="text-lg capitalize border-b border-white/10 pb-2"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}