import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Button } from "@nextui-org/button";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#cad3ff]">
      <Header />
      <Hero />
    </div>
  );
}
