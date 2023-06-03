import React from "react";
import Header from "@/components/Header/Header";
import BackgroundImage from "./bgImg/Background";
import HomeContent from "./HomeContent/HomeContent";

function Home() {
  return (
    <div>
      <BackgroundImage>
        <>
          <Header />
          <HomeContent />
        </>
      </BackgroundImage>
    </div>
  );
}

export default Home;
