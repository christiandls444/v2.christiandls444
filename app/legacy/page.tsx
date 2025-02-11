"use client";

import Navbar from "../components/Navbar";
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  { year: "June 2023 - Present", title: "Data Eng Mgmt & Governance Analyst", company: "Accenture", description: "Developed and optimized chatbot conversation flows and backend components for Generative AI projects using Dialogflow CX, NestJS, and Google Cloud. Built APIs and database integrations with BigQuery and Cloud SQL, ensuring smooth data retrieval and deployment. Collaborated in an Agile environment, conducting testing and refining functionalities for optimal performance." },
  { year: "January 2023 - March 2024", title: "Jr. Machine Learning Engineer", company: "Omdena", description: "Developed Python scripts for data collection, preprocessing, and analysis in NLP and ML projects. Worked with global teams to drive innovation and project success." },
  { year: "September 2022 - May 2023", title: "Data Analyst", company: "ReClaim Healthcare Administrative Services", description: "Developed machine learning models to improve classification and analysis while reviewing research papers for accuracy and clarity. Contributed to an IEEE publication, ensuring high academic standards." },
  { year: "April - July 2022", title: "UI/UX Designer Intern", company: "Kabootek PH", description: "Conducted user research, designed user flows, wireframes, and UI prototypes in an iterative process. Worked closely with the CEO and developers in a fast-paced tech environment to refine and deliver high-quality solutions using Figma." },
];

const Legacy = () => {
  return (
    <div className="relative w-full min-h-screen px-6 sm:px-10 md:px-20 lg:px-52 py-16">
      <Navbar />
      <h2 className="text-7xl mb-6 text-left text-amber-300">Legacy</h2>
      <div className="relative w-full flex flex-col items-center">
        
        {/* Vertical Timeline Line */}
        <div className="absolute w-1 bg-amber-200 h-full left-1/2 transform -translate-x-1/2 hidden md:block"></div>
        
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row items-center w-full md:w-3/4 mb-12 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Card */}
            <div className="relative border-4 border-amber-200 p-6 md:w-1/2 hover:bg-amber-200 transition">
              <h3 className="text-3xl font-semibold">{exp.title}</h3>
              <p className="italic text-2xl">{exp.company}</p>
              <p className="italic text-xl">{exp.year}</p>
              <p className="mt-2 text-xl">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Legacy;
