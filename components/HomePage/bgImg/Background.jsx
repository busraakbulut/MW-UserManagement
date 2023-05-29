import React from "react";
import bgimg from "@/public/assets/bg.png";
import Image from "next/image";
import styles from "@/components/HomePage/bgImg/bg.module.css";

function BackgroundImage() {
  return (
    <div className={styles.section}>
      <div className="relative h-screen w-screen">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={bgimg}
            alt="bg"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}

export default BackgroundImage;
