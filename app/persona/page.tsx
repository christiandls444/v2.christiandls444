import Navbar from "../components/Navbar";
import Image from "next/image";
import picture_1 from "/public/imgs/picture_1.jpg"; 
export default function Persona() {
  return (
    <div>
      <Navbar />

      <section className="px-6 sm:px-10 md:px-20 lg:px-52 py-16">
        <h2 className="text-7xl mb-6 text-left text-amber-400">Persona</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="w-full h-full">

            <Image 
              src={picture_1} 
              alt="Your Name" 
              className="object-cover"
            /><span className="italic">Not serious, but hilarious. If it were, Id hack the world.</span>


          </div>


          <div>
            <p className="leading-loose lg:leading-loose lg:text-2xl mr-5">
            Call me <span className="italic hover:bg-yellow-200">Del</span>. I started learning <span className="italic hover:bg-yellow-200">Data Science</span> in 2020, building a sentiment detection model. 
            Over time, I focused on <span className="italic hover:bg-yellow-200">NLP</span>, then expanded into <span className="italic hover:bg-yellow-200">Data Engineering</span>, handling data processing, cleaning, and <span className="italic hover:bg-yellow-200">API development</span>.
            I also enjoy jogging and biking, always aiming for growth and consistency.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
