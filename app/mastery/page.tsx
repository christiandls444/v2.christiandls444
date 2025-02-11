import Navbar from "../components/Navbar";

export default function Mastery() {
  return (
    <div>
      <Navbar />

      <section className="px-6 sm:px-10 md:px-20 lg:px-52 py-16">
        <h2 className="text-7xl mb-6 text-left text-amber-300">Mastery</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Technical Skills */}

          <div className="p-6 group">
            <h3 className="text-3xl font-semibold mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-15px] after:w-0 after:h-2 after:bg-amber-200 after:transition-all after:duration-300 group-hover:after:w-10">
              Languages
            </h3>
            <ul className="space-y-3 text-xl leading-relaxed">
              <li>JavaScript</li>
              <li>Python</li>
              <li>SQL</li>
              <li>Bash</li>
              <li>JSON</li>
            </ul>
          </div>

          <div className="p-6 group">
            <h3 className="text-3xl font-semibold mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-15px] after:w-0 after:h-2 after:bg-amber-200 after:transition-all after:duration-300 group-hover:after:w-10">
              Data Science
            </h3>
            <ul className="space-y-3 text-xl leading-relaxed">
              <li>Data Wrangling & Processing</li>
              <li>Exploratory Data Analysis</li>
              <li>Supervised Learning</li>
              <li>Natural Language Processing</li>
            </ul>
          </div>

          <div className="p-6 group">
            <h3 className="text-3xl font-semibold mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-15px] after:w-0 after:h-2 after:bg-amber-200 after:transition-all after:duration-300 group-hover:after:w-10">
              Backend Development
            </h3>
            <ul className="space-y-3 text-xl leading-relaxed">
              <li>NestJS</li>
              <li>RESTful APIs</li>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>Docker</li>
              <li>Postman</li>
            </ul>
          </div>

          <div className="p-6 group">
            <h3 className="text-3xl font-semibold mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-15px] after:w-0 after:h-2 after:bg-amber-200 after:transition-all after:duration-300 group-hover:after:w-10">
              Google Cloud
            </h3>
            <ul className="space-y-3 text-xl leading-relaxed">
              <li>Cloud Run</li>
              <li>BigQuery</li>
              <li>Cloud SQL</li>
              <li>Dialogflow CX</li>
            </ul>
          </div>

          <div className="p-6 group">
            <h3 className="text-3xl font-semibold mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-15px] after:w-0 after:h-2 after:bg-amber-200 after:transition-all after:duration-300 group-hover:after:w-10">
              Project Management
            </h3>
            <ul className="space-y-3 text-xl leading-relaxed">
              <li>Agile</li>
              <li>Scrum</li>
              <li>Jira</li>
              <li>GitHub</li>
            </ul>
          </div>

          <div className="p-6 group">
            <h3 className="text-3xl font-semibold mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-15px] after:w-0 after:h-2 after:bg-amber-200 after:transition-all after:duration-300 group-hover:after:w-10">
              Productivity
            </h3>
            <ul className="space-y-3 text-xl leading-relaxed">
              <li>MacOS</li>
              <li>Windows</li>
              <li>Microsoft 365</li>
              <li>Google Workspace</li>
              <li>Figma</li>
            </ul>
          </div>

          <div className="p-6 group">
            <h3 className="text-3xl font-semibold mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-15px] after:w-0 after:h-2 after:bg-amber-200 after:transition-all after:duration-300 group-hover:after:w-10">
              Interpersonal Skills
            </h3>
            <ul className="space-y-3 text-xl leading-relaxed">
              <li>Active</li>
              <li>Productive</li>
              <li>Collaboration</li>
              <li>Focus</li>
              <li>Research</li>
              <li>Helping Others</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
