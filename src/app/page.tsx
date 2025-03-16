"use client"
import { CardContent } from "@mui/material";

import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { Input } from "@heroui/input";




export default function Home() {


  return (
    <div>

      <Input
        labelPlacement="outside"
        placeholder="you@example.com"
        startContent={
          <HiMiniMagnifyingGlass className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        type="email"
      />


    </div>
  );
}
