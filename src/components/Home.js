import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import MyExperience from "./sections/MyExperience";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className="d-flex flex-row justify-content-center align-items-center hero-section">
          <h1>HI. I'M CARLOS.</h1>
        </section>
        <MyExperience />
      </main>
      <Footer />
    </>
  );
};

export default Home;