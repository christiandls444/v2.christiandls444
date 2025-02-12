"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Haven", href: "/" },
  { name: "Creations", href: "/creations" },
  { name: "Legacy", href: "/legacy" },
  { name: "Accolades", href: "/accolades" },
  { name: "Mastery", href: "/mastery" },
  { name: "Academia", href: "/academia" },
  { name: "Persona", href: "/persona" },
  { name: "Reach Me", href: "/reachme" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="text-right hidden md:flex fixed top-0 right-0 h-full items-center md:px-10 z-50">
        <ul className="flex flex-col space-y-6">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              // initial={{ opacity: 0, y: 100}}
              // animate={{ opacity: 1, y: 0 }}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
            >
              <a
                href={item.href}
                className="inline-block transition-transform duration-300 ease-in-out transform origin-left hover:scale-125 hover:bg-amber-200"
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 right-4 z-20">
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 text-lg font-normal z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0, ease: "easeOut" }}
        >
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4">
            <X size={30} />
          </button>
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-600"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3, ease: "easeOut" }}
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
