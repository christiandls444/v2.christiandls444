import Navbar from "../components/Navbar";

export default function Persona() {
  return (
    <div>
      <Navbar />

      <section className="px-6 sm:px-10 md:px-20 lg:px-52 py-16">
        <h2 className="text-7xl mb-6 text-left text-amber-300">Persona</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="w-full h-full">

            <img 
              src="/imgs/picture_1.jpg" 
              alt="Your Name" 
              className="object-cover"
            /><span>Not serious, but hilarious. If it were, I'd hack the world.</span>


          </div>


          <div>
            <p className="text-2xl leading-loose lg:leading-loose lg:text-3xl mr-5">
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
