"use client";

import { useState } from "react";
import Link from "next/link";
import { FiBarChart2, FiHome, FiPenTool, FiVolumeX } from "react-icons/fi";
import { RiHome3Line } from "react-icons/ri";
import { PiNotePencilLight } from "react-icons/pi";
type Props = {
  children: any;
};
const Sidebar = (props: Props) => {

  return (
    <div className="flex">      {/* Desktop Sidebar */}
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
      <div className="flex-1 md:ml-64">
        {props.children}
      </div>
    </div>
  );
};

export default Sidebar;
