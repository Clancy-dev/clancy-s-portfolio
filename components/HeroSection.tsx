import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";


const HeroSection = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgroundImages = ["/hero.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 20000); // Change background every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImages[backgroundIndex]}
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="transition-opacity duration-1000 ease-in-out opacity-100"
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white h-20">
            Clancy Ssekisambu
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-200 mb-6">Full Stack Developer</h2>
          <p className="text-lg text-gray-300 mb-8">
            Specializing in building high-performance websites, web applications, and systems.
          </p>
          <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            Get in Touch
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-80 h-80 md:w-96 md:h-96"> {/* Increased size */}
            <Image
              src="/profile.png"
              alt="Clancy Ssekisambu"
              layout="fill"
              objectFit="cover"
              className="rounded-[20px] border-t-0 profile-box-shadow border-[2px] border-[rgb(244,239,202)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
