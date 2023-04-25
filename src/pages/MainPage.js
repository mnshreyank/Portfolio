import React from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";

const MainPage = () => {
  return (
    <div>
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainPage;
