import React from 'react'
import { RevealOnScroll } from '../RevealOnScroll'

const About = () => {

  const frontendSkills = [
    "React",
    "NextJS",
    "Typescript",
    "TailwindCSS",
    "VueJS",
    "Javascript",
    "Svelte"
  ]
  const backendSkills = [
    "Node",
    "PHP",
    "ExpressJS",
    "GraphQL",
    "NestJS"
  ]

  return (
    <section
      id='about'
      className='min-h-screen flex items-center justify-center py-20'
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa nihil, quod blanditiis cum earum eum possimus repudiandae praesentium.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {
                    frontendSkills.map((tech, key) => (
                      <span
                        key={key} 
                        className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition'
                      >
                        {tech}
                      </span>
                    ))
                  }
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {
                    backendSkills.map((tech, key) => (
                      <span
                        key={key} 
                        className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition'
                      >
                        {tech}
                      </span>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong>Cyber Security</strong> - Unip Nagoya (2020-2022).
                  </li>
                  <li>
                    Formacao FullStack JS: Desenvolvimento Web, MERN stack.
                  </li>
                  <li>
                    Udemy: Front-End course, Flutter, React Native.
                  </li>
                  <li>
                    Curso em Video: Algoritmo, Javascript, PHP, MySQL, Linux.
                  </li>
                </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                  Projects <h4 className='font-semibold'>Software eNGINEER AT abc MARC Corp. (2022 - present)</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa neque quas dolore?
                    </p>
                  </div>

                  <div>
                    <h4 className='font-semibold'>Freelance Engineer AT Fiverr Corp. (2023)</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa neque quas dolore? Lorem, ipsum dolor.
                    </p>
                  </div>
                </div>
            </div>

            {/* <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Testimonials</h3>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Projects Done</h3>
            </div> */}
          </div>

        </div>
      </RevealOnScroll>
    </section>
  )
}

export default About
