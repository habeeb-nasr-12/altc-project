
import AboutUS from "./Components/AboutUS";
import ClientsRecomendation from "./Components/ClientsRecomendation";
import Counter from "./Components/Counter";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Services from "./Components/Services";


import WhatWEDO from "./Components/WhatWEDO";



export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUS />
      
       <Counter/>
      <WhatWEDO />
      <ClientsRecomendation/>
      <Projects/>
      <Services/>
    </div>



  )
}
