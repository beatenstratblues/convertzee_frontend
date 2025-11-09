"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import NavMenuButtons from "./NavMenuButtons";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#F9FCFE] drop-shadow-md px-10 md:px-16 lg:px-44 py-4 flex justify-between items-center fixed w-full top-0 z-50">
      <div className="text-2xl font-bold">
        <Link href="/">ConvertZee</Link>
      </div>

      <button
        className="md:hidden text-gray-700"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className="hidden md:flex relative gap-10 text-lg items-center font-bod">
        {[
          ["Convert", "/convert"],
          ["Compress", "/compress"],
          ["API", "/apis"],
          ["Prices", "/prices"],
        ].map((element) => {
          return (
            <NavMenuButtons
              key={element[0]}
              option={element[0]}
              link={element[1]}
            />
          );
        })}
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
          {["Convert", "Compress", "API", "Prices"].map((item) => (
            <div
              key={item}
              className="py-4 w-full text-center border-b-2 border-gray-200"
            >
              {item}
            </div>
          ))}
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
