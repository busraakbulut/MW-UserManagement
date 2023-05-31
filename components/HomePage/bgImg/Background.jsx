"use client";
import React from "react";
import { useRouter } from "next/navigation";
import bgimg from "@/public/assets/bg.png";
import Image from "next/image";

function BackgroundImage({ children }) {
  const router = useRouter();

  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={bgimg}
          alt="bg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      {children}
    </div>
  );
}

export default BackgroundImage;
