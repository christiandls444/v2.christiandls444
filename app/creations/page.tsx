"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

import Image from "next/image";


import cybercrime_detection_ml from "./imgs/cybercrime_detection_ml.jpg";
import student_online_class from "./imgs/student_online_class.jpg";
import detecting_hateful_and from "./imgs/detecting_hateful_and.jpg";


const projects = [
  
  {
    title: "A Cybercrime Predictive Model and Simulation Twitter Tweets using Natural Language Processing and Machine Learning",
    category: "Data Science",
    description: "Developed a cybercrime predictive model using NLP and machine learning to analyze Twitter data, detect threats, and classify cybercrime patterns.",
    link: "#",
    live: "#",
    image: cybercrime_detection_ml ,
    techStack: ["Python", "Scikit-learn", "NLTK", "TF-IDF", ],
  },
  {
    title: "Student Learning Experience in Synchronous Online Class using Sentiment Analysis",
    category: "Data Science",
    description: "Analyzed students' sentiment in synchronous online classes using machine learning and NLP to assess engagement and learning experiences.",
    link: "#",
    live: "#",
    image: student_online_class,
    techStack: ["Python", "Scikit-learn", "NLTK", "VADER", "TextBlob"],
  },
  
  {
    title: "Detecting Hateful and Offensive Language using NLP ",
    category: "Data Science",
    description: "Developed an NLP model to detect hateful and offensive language in text, leveraging machine learning and linguistic analysis for improved moderation.",
    link: "#",
    live: "#",
    image: detecting_hateful_and,
    techStack: ["Python", "Scikit-learn", "NLTK", "VADER", "TextBlob", "Streamlit"],
  },
  

  // {
  //   title: "E-Commerce UI Kit",
  //   category: "UI/UX Design",
  //   description: "Minimalist e-commerce UI components.",
  //   link: "#",
  //   live: "https://ecommerce-ui.com",
  //   image: "/images/ecommerce-ui.jpg",
  //   techStack: ["Figma", "Tailwind CSS", "React"],
  // },
  // {
  //   title: "Predictive Analytics Tool",
  //   category: "Data Science",
  //   description: "Forecasting trends with ML models.",
  //   link: "#",
  //   live: "https://predictive-analytics.com",
  //   image: "/images/predictive-analytics.jpg",
  //   techStack: ["Python", "Scikit-learn", "Django"],
  // },
  // {
  //   title: "Portfolio Website",
  //   category: "Software Web App",
  //   description: "Modern and elegant portfolio design.",
  //   link: "#",
  //   live: "https://portfolio.com",
  //   image: "/images/portfolio.jpg",
  //   techStack: ["Next.js", "Tailwind CSS", "Vercel"],
  // },
  // {
  //   title: "Task Manager App",
  //   category: "Software Web App",
  //   description: "A simple yet powerful task manager.",
  //   link: "#",
  //   live: "https://task-manager.com",
  //   image: "/images/task-manager.jpg",
  //   techStack: ["React", "Node.js", "MongoDB"],
  // },
  // {
  //   title: "Mobile Banking UI",
  //   category: "UI/UX Design",
  //   description: "User-friendly fintech application.",
  //   link: "#",
  //   live: "https://mobile-banking-ui.com",
  //   image: "/images/mobile-banking.jpg",
  //   techStack: ["Flutter", "Firebase", "Dart"],
  // },
];

const categories = ["All", "UI/UX Design", "Data Science", "Software Web App"];

export default function Creations() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) =>
    (selectedCategory === "All" || project.category === selectedCategory) &&
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="px-6 sm:px-10 md:px-20 lg:px-52 py-16">
      <Navbar />
      <h2 className="text-7xl mb-6 text-left text-amber-300">Creations</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-10 items-center">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 border hover:bg-amber-200 border-amber-200 transition text-lg ${
              selectedCategory === category ? "bg-amber-200 text-black" : " text-gray-700"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-amber-200 text-lg outline-none transition w-64"
        />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="block transition hover:scale-105 overflow-hidden"
          >
            <Image src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-3">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="px-2 py-1 text-sm bg-amber-50 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              {/* <div className="flex justify-between">
                <a href={project.link} className="text-blue-500 hover:underline">
                  Details
                </a>
                <a href={project.live} className="text-green-500 hover:underline">
                  Live Demo
                </a>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {/* No results found message */}
      {filteredProjects.length === 0 && (
        <p className="text-gray-500 text-center mt-6">No projects found.</p>
      )}
    </div>
  );
}
