"use client";

import { useState } from "react";
import Link from "next/link";
import { FiBarChart2, FiHome, FiPenTool, FiVolumeX } from "react-icons/fi";
import { RiHome3Line } from "react-icons/ri";
import { PiNotePencilLight } from "react-icons/pi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 h-screen  text-black px-4 py-6 fixed">
        <nav className="mt-6 space-y-3">
          <Link href="/" className="flex items-center space-x-2 hover:text-green-700">
            <RiHome3Line size={20} />
            <span>Home</span>
          </Link>
          <Link href="/blog" className="flex items-center space-x-2 hover:text-green-700">
            <PiNotePencilLight size={20} />
            <span>Our Blog</span>
          </Link>
        </nav>
      </aside>


    </>
  );
};

export default Sidebar;
