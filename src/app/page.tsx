'use client'
import Image from "next/image";
import { BackgroundBeams } from "./components/ui/background-beams";
import Card from "./auth/page";

export default function Home() {
  return (
    <div className="h-screen w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
    <BackgroundBeams />
    <Card/>
  </div>
  );
}
