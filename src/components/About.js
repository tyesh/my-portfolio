import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import MyExperience from "./sections/MyExperience";
import MySkills from "./sections/MySkills";
import AboutMe from "./sections/AboutMe";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
        <MyExperience />
        <MySkills />
      </main>
      <Footer />
    </>
  );
};

export default About;
