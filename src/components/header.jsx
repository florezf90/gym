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
      <header className="bg-white shadow ">
        <div className=" flex  flex-wrap justify-between mx-auto  bg-red-500  px-4 py-6 sm:px-6 lg:px-8 divisor">
          <div className="text-3xl font-bold tracking-tight text-gray-900  p-4">
            florezf90 GYM
          </div>
          <div className="text-xl font-bold tracking-tight mt-2 text-gray-900  p-4">
            1-800-555-1234
          </div>
          <div className="text-xl font-bold tracking-tight mt-2 text-gray-900  p-4">
            Mon - Fri: 8:00AM - 7:00PM | Sat - Sun: Closed
          </div>
        </div>
        <div className="text-xl flex justify-between font-bold tracking-tight mt-2  ">
          <div className="hide">
            <Link href="/" className="m-5 text-2xl">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">
                Home
              </button>
            </Link>
            <Link href="/about" className="m-5 text-2xl">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">
                About
              </button>
            </Link>
          </div>
          <div className="hide">
            <Link href="/services" className="m-5 text-2xl">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">
                Services
              </button>
            </Link>
            <Link href="/contact" className="m-5 text-2xl">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
        {isSmallScreen && (
          <button
            onClick={toggleMenu}
            className=" ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ color: "white"}}
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
            <div className="bg-gray-200 p-4 sidebar" onClick={toggleMenu}>
              <Link href="/" className="m-5 text-2xl">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">
                  Home
                </button>
              </Link>
              <Link href="/about" className="m-5 text-2xl" onClick={toggleMenu}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">
                  About
                </button>
              </Link>
              <Link href="/services" className="m-5 text-2xl">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">
                  Services
                </button>
              </Link>
              <Link href="/contact" className="m-5 text-2xl">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>
        )}
      </header>
    );
}