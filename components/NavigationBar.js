'use client'
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="border-b-3 border-[#d8d8d8] px-16 md:px-16 lg:px-44 py-4 bg-[#FFFFFF] flex justify-between items-center fixed w-full top-0 z-50">
      <div>
        <div className="text-2xl font-bold">ConvertZee</div>
      </div>
      <button
        className="md:hidden text-gray-700"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div className="hidden md:flex gap-10 text-lg font-medium">
        <div>Convert</div>
        <div>Compress</div>
        <div>API</div>
        <div>Prices</div>
      </div>
      <div className="hidden md:flex gap-4">
        <button className="border-2 p-1 w-20 rounded-lg">
          <Link href="/authentication/login">Log in</Link>
        </button>
        <button className="border-2 p-1 w-20 rounded-lg">
          <Link href="/authentication/signup">Sign Up</Link>
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t-2 border-gray-200 flex flex-col items-center md:hidden">
          <div className="py-4 w-full text-center border-b-2 border-gray-200">Convert</div>
          <div className="py-4 w-full text-center border-b-2 border-gray-200">Compress</div>
          <div className="py-4 w-full text-center border-b-2 border-gray-200">API</div>
          <div className="py-4 w-full text-center border-b-2 border-gray-200">Prices</div>
          <div className="py-4 w-full text-center border-b-2 border-gray-200">
            <Link href="/authentication/login">Log in</Link>
          </div>
          <div className="py-4 w-full text-center border-b-2 border-gray-200">
            <Link href="/authentication/signup">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
