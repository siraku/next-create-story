import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="px-10 md:px-24 lg:px-44 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-[70px] text-primary font-extrabold py-10">
            create great stories for children
          </h2>
          <p className="text-2xl text-primary">
            {" "}
            it't greate idea to create story for children by AI.
          </p>
          <Button size="lg" color="primary">
            Create Story
          </Button>
        </div>
        <Image src={"/hero.jpg"} alt="hero" width={700} height={400}></Image>
      </div>
    </div>
  );
}

export default Hero;
