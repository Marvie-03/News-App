import Alert from "./components/Alert";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Jumbotron from "./components/Jumbotron";
import Newsgrid from "./components/Newsgrid";
import Navbar from "./components/navbar";
import axios from 'axios'
import { useState, useEffect, useRef } from "react";
import { ApiContext } from "./utils/ApiContext";

function App() {
  const [data, setData] =useState([])
  const [isLoading, setIsLoading] = useState([])
  const url ='https://newsapi.org/v2/top-headlines?country=ng&apiKey=6fbacd5c457045bdbc49e7938c417f4e'
  const isFetching = useRef(false)

  useEffect(() =>{
    if (isFetching.current) {
      return;
    }

    isFetching.current = true;
    setIsLoading(true);
    
    
    axios.get(url)
    .then(function (response) {
      // handle success
        let news = response?.data?.articles
        
        setData(news);
        isFetching.current = false;
      
      // console.log(response);
      // console.log(data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
      setIsLoading(false)
    });
     
  
}, [isFetching])
  

  return (
    <div className="app bg-[#F1F2F3]">
    <ApiContext.Provider value={data}>
      <Navbar />
      <Hero data={data}/>
      <Alert />
      <Newsgrid />
      <Jumbotron />
      <Footer />
      </ApiContext.Provider>
    </div>
  );
}

export default App;
