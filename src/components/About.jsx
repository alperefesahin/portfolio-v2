import React from "react";
import home from "../Assets/home.svg";
import Particle from "./Particle";

export default function About() {
  return (
    <>
      <Particle />
      <section id="about">
        <div className="relative container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white flex mb-px">
              Hi there!
              <span
                className="animate-wave title-font sm:text-4xl text-3xl mb-4 font-medium "
                role="img"
              >
                👋🏻
              </span>
            </h1>
            <div className="flex">
              <h1 className="title-font sm:text-4xl text-3xl font-medium text-white">
                I'M{" "}
              </h1>
              &nbsp;&nbsp;
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-customPurple">
                Alper Efe Şahin
              </h1>
            </div>

            <p className="mb-8 leading-relaxed text-gray relative">
              I fell in love with programming and I have at least learnt
              something, I think 🤷‍♂️... I am fluent in classics like Java,
              Javascript, Flutter and Python. My field of Interest's are
              building new Web Technologies and Products and also in areas
              related to Deep Learning and Natural Launguage Processing.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="relative inline-flex text-white bg-purple-900 border-0 py-2 px-6 focus:outline-none hover:bg-purple-700 rounded text-lg"
              >
                Work With Me
              </a>
              <a
                href="#projects"
                className="relative ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                See My Projects
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="home"
              src={home}
            />
          </div>
        </div>
      </section>
    </>
  );
}
