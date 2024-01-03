// components/HamburgerMenu.js
"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'; // Import the Image component

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <nav className="border-white-200 :border-white-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-hamburger"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="https://static-00.iconduck.com/assets.00/party-popper-emoji-503x512-0vkq9zgo.png"
            alt="Let's Party!"
            width={48} // Adjust the width as needed
            height={48} // Adjust the height as needed
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            HOUSE of GAMES 2024
          </span>
        </a>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="navbar-hamburger"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <ul className="flex flex-col font-medium mt-4 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <li>
                  <a
                    href="/menu"
                    className="block py-2 px-3 text-white"
                    aria-current="page"
                  >
                    Game Menu
                  </a>
                </li>
                <li>
                  <a
                    href="/menu/scoring"
                    className="block py-2 px-3 text-white"
                    aria-current="page"
                  >
                    Scoreboard
                  </a>
                </li>
                <li>
                  <a
                    href="https://buzzer.reeceadamsstone.co.uk"
                    className="block py-2 px-3 text-white"
                    aria-current="page"
                  >
                    Buzzer
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default HamburgerMenu;
