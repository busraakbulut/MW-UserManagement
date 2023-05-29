import React from "react";
import Image from "next/image";
import styles from "@/components/HomePage/home.module.css";
import Header from "./Header/Header";
import BackgroundImage from "./bgImg/Background";
import HomeContent from "./HomeContent/HomeContent";

function Home() {
  return (
    <div>
      <BackgroundImage>
        <Header />
        <HomeContent />
      </BackgroundImage>
    </div>
  );
}

export default Home;
