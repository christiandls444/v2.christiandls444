"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import Navbar from "../components/Navbar";

import leveraging_llms_to from "./imgs/leveraging_llms_to.png";
import prompt_engineering_masterclass from "./imgs/prompt_engineering_masterclass.png";
import building_a_chatbot from "./imgs/building_a_chatbot.png";
import mastering_sentiment_analysis from "./imgs/mastering_sentiment_analysis.png";
import google_data_analytics from "./imgs/google_data_analytics.png";
import data_science_virtual from "./imgs/data_science_virtual.png";
import detecting_hateful_and from "./imgs/detecting_hateful_and.png";
import pycon_ph_2023 from "./imgs/pycon_ph_2023.png";
import aia_lifehackers_2022 from "./imgs/aia_lifehackers_2022.png";
import tara_ml_challenge from "./imgs/tara_ml_challenge.png";
import shopee_ultimate_case from "./imgs/shopee_ultimate_case.png";
import data_science_development from "./imgs/data_science_development.png";
import data_scientist from "./imgs/data_scientist.png";
import intermediate_artificial_intelligence from "./imgs/intermediate_artificial_intelligence.png"
import shopee_code_league from "./imgs/shopee_code_league.jpg"
import artificial_intelligence_101 from "./imgs/artificial_intelligence_101.png"
import microsoft_digital_literacy from "./imgs/microsoft_digital_literacy.png"
import data_science_with from "./imgs/data_science_with.png"
import uxplus_conference_2023 from "./imgs/uxplus_conference_2023.png"
import the_4th_international from "./imgs/the_4th_international.png"




const certificates = [
  { title: "Leveraging LLMs to Understand Global Mental Health Well-being & Fomo", year: 2024, image: leveraging_llms_to },
  { title: "Prompt Engineering", year: 2024, image: prompt_engineering_masterclass },
  { title: "Building a Chatbot for Interview Preparation using NLP", year: 2024, image: building_a_chatbot },
  { title: "Mastering Sentiment Analysis: Building a Powerful Web Application", year: 2023, image: mastering_sentiment_analysis },
  { title: "Google Data Analytics", year: 2023, image: google_data_analytics },
  { title: "Data Science Virtual Experience Programme", year: 2023, image: data_science_virtual },
  { title: "Detecting Hateful and Offensive Language using NLP", year: 2023, image: detecting_hateful_and },
  { title: "PyCon PH 2023", year: 2023, image: pycon_ph_2023 },
  { title: "AIA Lifehackers 2022: Hackventure", year: 2023, image: aia_lifehackers_2022 },
  { title: "Top 5 Tara ML Challenge", year: 2022, image: tara_ml_challenge },
  { title: "Shopee Ultimate Case Challenge 2022", year: 2022, image: shopee_ultimate_case },
  { title: "Data Science Development Program", year: 2022, image: data_science_development },
  { title: "Data Scientist DTI PET Project", year: 2022, image: data_scientist },
  { title: "Intermediate Artificial Intelligence", year: 2022, image: intermediate_artificial_intelligence },
  { title: "Shopee Code League 2022", year: 2022, image: shopee_code_league },
  { title: "Artificial Intelligence 101", year: 2022, image: artificial_intelligence_101 },
  { title: "Microsoft Digital Literacy", year: 2021, image: microsoft_digital_literacy },
  { title: "Data Science with Python", year: 2020, image: data_science_with },
  { title: "UX+ Conference 2023", year: 2023, image: uxplus_conference_2023 },
  { title: "2022 The 4th International Conference on Computer Communication and the Internet (ICCCI)", year: 2022, image: the_4th_international },

];


const years = [...new Set(certificates.map((cert) => cert.year))].sort((a, b) => b - a);

const Accolades = () => {
  const [selectedYear, setSelectedYear] = useState<number | "All">("All");
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);


  return (
    <div>
      <Navbar />
      <section id="education" className="px-6 sm:px-10 md:px-20 lg:px-52 py-16">
        <h2 className="text-7xl mb-6 text-left text-amber-300">Accolades</h2>


   
        {/* px-4 py-2 border hover:bg-amber-200 border-amber-200 transition text-lg */}


        {/* Dropdown Filter */}
        <div className="w-36 cursor-pointer">
          <div className="hover:bg-amber-200 bg-white flex text-lg transition border-amber-200 border">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value === "All" ? "All" : parseInt(e.target.value))}
              className="bg-transparent outline-none appearance-none cursor-pointer w-full h-full px-4 py-2 text-center transition"
            >
              <option value="All">All Years</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>




      {/* Certificates */}
      {years.map((year) => (
        (selectedYear === "All" || selectedYear === year) && (
          <div key={year}>
            <h2 className="text-5xl font-semibold mt-6 mb-3">{year}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
              {certificates
                .filter((cert) => cert.year === year)
                .map(({ title, image }, index) => (
                  <div key={index} className="group relative overflow-hidden">
                    
                    <div className="text-xl bg-amber-200 font-semibold italic mt-4 mb-4 text-center p-6">{title}</div>

                    {/* Clickable Certificate Image */}
                    <button
                      onClick={() => setSelectedImage(image)}
                      className="relative w-full h-64 block focus:outline-none"
                    >
                      {image ? (
                        <Image 
                          src={image} 
                          alt={title} 
                          width={500} 
                          height={300} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-90"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500">No Image</span>
                        </div>
                      )}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        )
      ))}

      {/* Modal for Full Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-white px-3 py-1 shadow hover:bg-amber-200"
            >
              ✕
            </button>
            <Image
              src={selectedImage}
              alt="Full Size Image"
              width={1000} 
              height={800} 
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}


      </section>
    </div>
  );
};

export default Accolades;
