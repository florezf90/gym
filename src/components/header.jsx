'use client'

import "./components.css";
import Link from "next/link"; 
import React, { useState, useEffect } from "react";

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    }

    useEffect (() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768 );
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
      <header className=" shadow  max-w-7xl mx-auto ">
        <div className=" flex  flex-wrap justify-between mx-auto    px-4 pt-7 pb-1 sm:px-6 lg:px-8 divisor">
          <div className="text-3xl font-bold tracking-tight text-white  p-4">
            florezf90 GYM
          </div>
          <div className="text-xl font-bold tracking-tight mt-2 text-white  p-4">
            1-800-555-1234
          </div>
          <div className="text-xl font-bold tracking-tight mt-2 text-white  p-4">
            Mon - Fri: 8:00AM - 7:00PM | Sat - Sun: Closed
          </div>
        </div>
        <div className="text-xl flex justify-between font-bold tracking-tight mt-2  ">
          <div className="hide">
            <Link href="/" className="m-5 text-xl">
              <button
                className="hover:text-gray-400 text-white font-bold py-2 px-4 rounded my-3"
                aria-label="Home"
              >
                Home
              </button>
            </Link>
            <Link href="/about" className="m-5 text-xl">
              <button
                className="hover:text-gray-400 text-white font-bold py-2 px-4 rounded my-3"
                aria-label="About"
              >
                About
              </button>
            </Link>
          </div>
          <div className="hide">
            <Link href="/services" className="m-5 text-xl">
              <button
                className="hover:text-gray-400 text-white font-bold py-2 px-4 rounded my-3"
                aria-label="Services"
              >
                Services
              </button>
            </Link>
            <Link href="/contact" className="m-5 text-xl">
              <button
                className="hover:text-gray-400 text-white font-bold py-2 px-4 rounded my-3"
                aria-label="Contact"
              >
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
        {isSmallScreen && (
          <button
            onClick={toggleMenu}
            className=" ml-4  text-white font-bold py-2 px-4 rounded my-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ color: "white" }}
              aria-label="Menu"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        )}

        {isMenuOpen && isSmallScreen && (
          <div className="bg-gray-400 sidebarBg" onClick={toggleMenu}>
            <div className="bg-black p-4 sidebar" onClick={toggleMenu}>
              <Link href="/" className="m-5 text-2xl">
                <button
                  className=" text-white font-bold py-2 px-4 rounded my-3"
                  aria-label="Home"
                >
                  Home
                </button>
              </Link>
              <Link href="/about" className="m-5 text-2xl" onClick={toggleMenu}>
                <button
                  className=" text-white font-bold py-2 px-4 rounded my-3"
                  aria-label="About"
                >
                  About
                </button>
              </Link>
              <Link href="/services" className="m-5 text-2xl">
                <button
                  className=" text-white font-bold py-2 px-4 rounded my-3"
                  aria-label="Services"
                >
                  Services
                </button>
              </Link>
              <Link href="/contact" className="m-5 text-2xl">
                <button
                  className=" text-white font-bold py-2 px-4 rounded my-3"
                  aria-label="Contact"
                >
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>
        )}
      </header>
    );
}