"use client";
import { BackgroundGradient } from "./ui/background-gradient";

const Experience = () => {
  return (
    <div className="flex flex-col h-90vh w-[80%] md:w-full mx-auto ml-20 md:ml-0">
      <div className="text-slate-300 text-lg mb-8 flex flex-col place-items-center mdLg:place-items-start mdLg:flex-row mdLg:justify-between mt-[5rem] font-regular flex-grow">
        <div>
          <h2 className="text-slate-100 text-3xl mb-16">Experience</h2>
        </div>
        <div className="flex mdLg:w-[73%] leading-10 tracking-wider flex-col huge:w-[40%]">
          <section className="mb-12">
            <h2 className="font-extrabold text-2xl mb-4">
              Education and Training
            </h2>
            <div className="font-bold mb-4">2023-2024 DCI COURSE</div>
            <p className="mb-4">
              During this period, I have been enrolled in the comprehensive{" "}
              <span className="text-xl">WEB Development</span> course offered by{" "}
              <span className="text-xl">DCI</span>. This rigorous program has
              provided me with a strong foundation in both front-end and
              back-end development, covering essential technologies. In addition
              to my formal education, I have pursued numerous certifications on
              Udemy. These courses have allowed me to delve deeper into specific
              areas of interest, further enhancing my skills and keeping me
              abreast of the latest trends and tools in web development.
            </p>
            <p>
              My portfolio is a testament to my growth and capabilities as a web
              developer. It showcases a variety of projects that highlight my
              ability to build responsive, user-friendly websites and
              applications. Each project reflects the practical application of
              the skills I have acquired and demonstrates my commitment to
              creating high-quality digital experiences.
            </p>
          </section>
          <section>
            <h2 className="font-extrabold text-2xl mb-4">
              Skills and Proficiencies
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Frontend Development (HTML, CSS, JavaScript)</li>
              <li>React.js, Vue.js, Angular</li>
              <li>Backend Development (Node.js, Express)</li>
              <li>Database Management (MongoDB, MySQL)</li>
              <li>Responsive Web Design</li>
              <li>Version Control (Git, GitHub)</li>
            </ul>
            <p>
              I am proficient in a wide array of technologies and frameworks,
              enabling me to develop robust and scalable web applications. My
              continuous learning and adaptation to new technologies allow me to
              stay ahead in the rapidly evolving field of web development.
            </p>
          </section>
        </div>
      </div>
      <div className="flex-grow"></div>
    </div>
  );
};

export default Experience;
