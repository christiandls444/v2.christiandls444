// app/components/Projects.tsx
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-8" data-aos="fade-up">
      <h2 className="text-3xl text-center font-bold">Projects</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Example Project Card */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-semibold">Project Title</h3>
          <p className="text-gray-600 mt-2">Short project description...</p>
          <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">See More</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
