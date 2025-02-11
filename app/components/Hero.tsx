"use client";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const titles = [
    "Data Engineer",
    "UI/UX Designer",
    "Natural Language Processing",
  ];
  const [currentTitle, setCurrentTitle] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const delayBetweenWords = 1000;

    const handleTyping = () => {
      setCurrentTitle((prev) => {
        if (!isDeleting) {
          if (prev.length < titles[index].length) {
            return titles[index].substring(0, prev.length + 1);
          } else {
            setTimeout(() => setIsDeleting(true), delayBetweenWords);
            return prev;
          }
        } else {
          if (prev.length > 0) {
            return titles[index].substring(0, prev.length - 1);
          } else {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % titles.length);
            return "";
          }
        }
      });
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [currentTitle, isDeleting, index, titles]);

  return (
    <section className="flex items-center justify-start h-screen px-6 sm:px-10 md:px-20 lg:px-52">
      <div className="w-full lg:max-w-[1200px] md:max-w-[600px] text-left">
        <h1 className="xl:text-11xl lg:text-9xl md:text-8xl text-6xl mb-4">
          Christian M. <span className="bg-amber-200">De L</span>os Santos
        </h1>
        {/* Keep a fixed height to prevent shifting */}
        <p className="lg:text-7xl md:text-5xl text-3xl italic min-h-[50px]">
          {currentTitle}
          <span className="animate-blink">|</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
