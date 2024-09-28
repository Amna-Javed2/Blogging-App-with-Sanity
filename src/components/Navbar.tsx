import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <nav className="flex py-4 justify-evenly p-10 bg-gradient-to-r from-gray-900 to-blue-800">
      <p className="mr-20 ml-5 font-bold text-[20px] cursor-pointer text-white">
        Amna Javed
      </p>
      <div className="ml-20">
        <Link href="/" className="mr-7 text-black">
          Home
        </Link>
        <Link href="/About" className="mr-7 text-black">
          About
        </Link>
        <Link href="/Works" className="mr-7 text-black">
          Works
        </Link>
        <Link href="/Service" className="mr-7 text-black">
          Service
        </Link>
        <Link href="/Contact" className="mr-7 text-black">
          Contact
        </Link>
      </div>
      <div>
        <Button variant="link">Login</Button>
        <Button className="bg-black text-white">
          <Link href="/login">SignUp</Link>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
