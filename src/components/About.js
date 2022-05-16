import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import MyExperience from "./sections/MyExperience";
import AboutMe from "./sections/AboutMe";
import MyCertificates from "./sections/MyCertificates";
import MyReferences from "./sections/MyReferences";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
        <MyExperience />
        <MyCertificates />
        <MyReferences />
      </main>
      <Footer />
    </>
  );
};

export default About;
