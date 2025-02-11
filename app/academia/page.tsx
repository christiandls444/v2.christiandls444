import Navbar from "../components/Navbar";  

export default function Academia() {

  return (
    <div>
      <Navbar />
      <section id="education" className="px-6 sm:px-10 md:px-20 lg:px-52 py-16">
      <h2 className="text-7xl mb-6 text-left text-amber-300">Academia</h2>


      <div className="grid grid-cols-1 md:grid-cols-1">


    <div className="relative p-6 transition-all duration-300 group">
  {/* Background Highlight on Hover */}
  <div className="absolute inset-0 bg-amber-200 scale-x-0 group-hover:-scale-x-100 origin-left transition-transform duration-300"></div>

  {/* Text Content */}
  <div className="relative z-10">
    <h3 className="lg:text-4xl md:text-3xl text-3xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
    <p className="text-2xl md:text-2xl mb-2 italic">
      Eulogio "Amang" Rodriguez Institute of Science and Technology (EARIST), Manila | June 2018 - August 2022
    </p>
    <ul className="text-xl lg:text-2xl list-disc pl-12">
      <li>Outstanding Student Researcher, 55th Student Recognition Program</li>
      <li>Outstanding Leadership and Dedicated Service, 49th CAS Foundation Anniversary</li>
      <li>Academic Achiever of the 2021-2022 academic year</li>
      <li>Thesis: A Cybercrime Predictive Model and Simulation on Twitter Tweets using Natural Language Processing and Machine Learning</li>
      <li>Grade 1.75</li>
    </ul>
  </div>
</div>
<div className="relative p-6 transition-all duration-300 group">
  {/* Background Highlight on Hover */}
  <div className="absolute inset-0 bg-amber-200 scale-x-0 group-hover:-scale-x-100 origin-left transition-transform duration-300"></div>

  {/* Text Content */}
  <div className="relative z-10">
    <h3 className="lg:text-4xl md:text-3xl text-3xl font-semibold mb-2">Technical-Vocational-Livelihood Information and Communications Technology</h3>
    <p className="text-2xl md:text-2xl mb-2 italic">
      Polytechnic University of the Philippines (PUP), Manila | June 2016 - Mar 2018
    </p>
    <ul className="text-xl lg:text-2xl list-disc pl-12">
      <li>Final Project: eLoan Management System</li>
      <li>Grade 89</li>
    </ul>
  </div>
</div>
<div className="relative p-6 transition-all duration-300 group">
  {/* Background Highlight on Hover */}
  <div className="absolute inset-0 bg-amber-200 scale-x-0 group-hover:-scale-x-100 origin-left transition-transform duration-300"></div>

  {/* Text Content */}
  <div className="relative z-10">
    <h3 className="lg:text-4xl md:text-3xl text-3xl font-semibold mb-2">High School</h3>
    <p className="text-2xl md:text-2xl mb-2 italic">
      Carlos L. Albert High School (CLAHS), Quezon City | June 2012 - Mar 2016
    </p>
    <ul className="text-xl lg:text-2xl list-disc pl-12">
      <li>Consistent Model Boy Award</li>
      <li>Grade 89</li>
    </ul>
  </div>
</div>


  </div>


      </section>

    </div>
  );
}