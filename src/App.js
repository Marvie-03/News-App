import Alert from "./components/Alert";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Jumbotron from "./components/Jumbotron";
import Newsgrid from "./components/Newsgrid";
import Navbar from "./components/navbar";

// import { useState, useEffect, useRef } from "react";
import { ApiContext } from "./utils/ApiContext";

function App() {
  const url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=6fbacd5c457045bdbc49e7938c417f4e'
  return (
    <div className="app bg-[#F1F2F3]">
    <ApiContext.Provider value={url}>
      <Navbar />
      <Hero url={url}/>
      <Alert />
      <Newsgrid />
      <Jumbotron />
      <Footer />
      </ApiContext.Provider>
    </div>
  );
}

export default App;
