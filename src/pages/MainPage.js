import React, { useEffect, useState } from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MoveTop from "../components/MoveToTop/MoveTop";
import NavigationPane from "../components/NavigationPane/NavigationPane";
import Projects from "../components/Projects/Projects";

const MainPage = () => {
  return (
    <div>
      <Header />
      <NavigationPane />
      <About />
      <Experience />
      {/* <Projects /> */}
      <Contact />
      <Footer />
      <MoveTop />
    </div>
  );
};

export default MainPage;
