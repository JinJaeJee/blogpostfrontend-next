"use client"
import Image from "next/image";

export default function LoginPage() {
    return (
        <div className="flex h-screen bg-[#243831]">
            {/* Left Section (Form) */}
            <div className="w-full md:w-3/5 flex flex-col items-center justify-center">
                <div className="w-full h-2/5 bg-[#2B5F44] flex items-center justify-center rounded-b-[36px] md:hidden">
                    <div className="text-center">
                        <Image src="/icons/note-pen.svg" alt="Board" width={300} height={230} />
                        <p className="text-white italic">a Board</p>
                    </div>
                </div>
                <div className="h-3/5  flex flex-col items-center justify-center md:w-3/5 md:flex md:flex-col md:items-center md:justify-center">
                    <h2 className="text-white text-2xl font-semibold mb-6">Sign in</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-80 p-3 rounded-md border border-gray-300 bg-white focus:outline-none"
                    />
                    <button className="w-80 mt-4 p-3 bg-[#49A569] text-white rounded-md hover:bg-green-700 cursor-pointer">
                        Sign In
                    </button>
                </div>
            </div>


            {/* Right Section */}
            <div className="hidden md:flex w-2/5 bg-[#2B5F44] items-center justify-center rounded-l-[36px]">
                <div className="text-center">
                    <Image src="/icons/note-pen.svg" alt="Board" width={300} height={230} />
                    <p className="text-white italic">a Board</p>
                </div>
            </div>
        </div>
    );
}