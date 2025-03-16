"use client"

import { RiHome3Line } from "react-icons/ri";
import { PiNotePencilLight } from "react-icons/pi";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import Drawer from '@mui/material/Drawer';
import { Button } from "@mui/material";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="bg-[#243831] text-white shadow-md">
            <div className=" ">
                <div className="px-3 flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="text-xl font-semibold italic">a Board</div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 items-center">

                        <button className="border px-4 py-1 rounded bg-[#49A569] cursor-pointer">Sign In</button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button  onClick={toggleDrawer} className="text-white">
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>

                        <Drawer open={isOpen} onClose={toggleDrawer} anchor="right"
                            sx={{
                                '& .MuiDrawer-paper': {
                                    borderRadius: '16px 0 0 16px',
                                }
                            }}>
                            <div className="bg-[#243831] text-white h-full w-[280px] p-8">

                                <FaArrowRightLong onClick={toggleDrawer} size={20} />
                                <div className="flex items-center gap-4 mt-10 mb-5">
                                    <RiHome3Line size={20} />
                                    <p>Home</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <PiNotePencilLight size={20}/>
                                    <p>Our Blog</p>
                                </div>
                            </div>
                        </Drawer>

                    </div>
                </div>


            </div>





        </div>
    );
};

export default Navbar;