import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full  h-fit sm:h-screen bg-gradient-to-b from-blue-500 to-blue-900 text-white">
              <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-200">
            About
          </p>
        </div>
        <p className="text-0.5xl sm:text-xl mt-5">
        Driven by a deep passion for Information Technology, I am a dedicated computer engineer eager to make my mark in the industry. With a solid foundation in HTML, CSS, and JavaScript, along with practical experience in React, I thrive on building interactive and visually appealing user interfaces. Proficient in version control using Git and GitHub, I am adept at collaborating with teams to deliver high-quality projects.As an IT intern, I got to learn about AD, VLAN and other networking stuffs.
        </p>

        <br />

        <p className="text-0.5xl sm:text-xl">
        Beyond coding, I find joy in adventurous travel to explore new places, immersing myself in captivating web series and anime, and indulging in friendly matches of cricket and table tennis. My multicultural background has endowed me with fluency in English, Nepali, Maithili, and Hindi, facilitating effective communication and collaboration.
        </p>
        <div className='my-10'>
          <a href="/SATYAM KUMAR SINGH.pdf" className="text-white w-fit px-6 py-3 my-2 rounded-md bg-orange-500 cursor-pointer" download="SATYAM KUMAR SINGH" >Download CV</a>
        </div>
      </div>

    </div>
  )
}

export default About