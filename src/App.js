import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>HI. I'M CARLOS</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
