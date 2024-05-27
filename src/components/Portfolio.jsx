import React from "react";
import AIdetector from "../assets/portfolio/AI_Detector.png";
import flipkart from "../assets/portfolio/flipkart clone.png";
import newsWebApp from "../assets/portfolio/News_website.png";
import PersonalWebapp from "../assets/portfolio/Personal website.png";
import weatherApp from "../assets/portfolio/Weather app.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: AIdetector,
      href:"https://github.com/satyamkumarsingh23/DetectAI",
      name: "AI Content Detector"
    },
    {
      id: 2,
      src: flipkart,
      href: "https://github.com/satyamkumarsingh23?tab=repositories",
      name: "Flipkart Clone"
    },
    {
      id: 3,
      src: newsWebApp,
      href: "https://github.com/satyamkumarsingh23/dhaakad-news",
      name: "API Based News Webapp"
    },
    {
      id: 4,
      src: PersonalWebapp,
      href: "https://github.com/satyamkumarsingh23/satyamkumarsingh23",
      name: "Portfolio Webapp"
    },
    {
      id: 5,
      src: weatherApp,
      href: "https://github.com/satyamkumarsingh23/Weather-webapp",
      name:"Weather Webapp"
    }
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-blue-900 to-blue-500 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-200">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, name }) => (
            <div key={id} className=" shadow-md shadow-gray-200 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-110"
              />
              <div className="flex items-center justify-center">
                <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-110">
                  <a href={href}>{name}</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
