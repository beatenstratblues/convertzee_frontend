"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b-3 border-[#d8d8d8] px-44 py-4 bg-[#FFFFFF] flex justify-between items-center">
      <div>
        <div className="text-2xl font-bold">ConvertZee</div>
      </div>
      <div className="flex gap-10 text-lg font-medium">
        <div>
          <Link href="/Convert" className="">
            Convert
          </Link>
        </div>
        <div>
          <Link href="/Compress" className="">
            Compress
          </Link>
        </div>
        <div>
          <Link href="/API" className="">
            API
          </Link>
        </div>
        <div>
          <Link href="/Prices" className="">
            Prices
          </Link>
        </div>
      </div>
      <div className="flex gap-4">
        <button>Log in</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
