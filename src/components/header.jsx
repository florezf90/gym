'use context';
import "./components.css";

import Link from "next/link"; 
 
 export default function Header() {
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
        <div className="text-xl flex justify-between font-bold tracking-tight mt-2    ">
          <div>
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
          <div>
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
      </header>
    );
}