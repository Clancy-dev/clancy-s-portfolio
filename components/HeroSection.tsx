'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgroundImages = ["/hero.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 20000); // Change background every 20 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="relative hero-container">
      {/* Background Image */}
      <div className="background-container">
        <Image
          src={backgroundImages[backgroundIndex]}
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          style={{objectFit: "cover"}}
          quality={100}
          className="transition-opacity duration-1000 ease-in-out"
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Hero Content */}
      <div className="top-container">
        <div className="inner-top-container-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Clancy Ssekisambu
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-200">Full Stack Developer</h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0">
            Specializing in building high-performance websites, web applications, and systems.
          </p>
          <Link href="/contact" className=" text-white font-bold">
          <button className=" bg-blue-500 dark:bg-white dark:text-black dark:hover:bg-gray-600 hover:bg-blue-600 px-4 py-2 rounded-[5px]">
          Get in Touch
          </button>  
          </Link>
        </div>
        <div className="inner-top-container-right">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <Image
              src="/profile.png"
              alt="Clancy Ssekisambu"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              style={{objectFit: "cover"}}
              className="rounded-[20px] border-t-0 profile-box-shadow border-[2px] border-[rgb(244,239,202)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

