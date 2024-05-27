import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/heroImage.JPG";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full pt-20 h-screen bg-gradient-to-b from-blue-900 to-blue-500"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full text-white">
          <h2 className="text-4xl sm:text-7xl font-bold">
            Hey there, I am Satyam Kumar Singh
          </h2>
          <p className="text-gray-200 py-4 max-w-md">
            I have recently appeared in final semester examination for Bachelor's degree in Computer Engineering
            from IOE Purwanchal Campus, Dharan. Currently, I'm focused on
            refining my skills in front-end development. I've completed
            numerous online courses in this field to enhance my expertise.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-orange-500  cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight className="ml-1" size={26}/>
              </span>
            </Link>
          </div>
        </div>
        <div >
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
