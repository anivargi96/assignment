import React from "react";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import Features from "./component/Features";
import FAQ from "./component/FAQ";
import Footer from "./component/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
