import React from 'react'
import Hero from '../components/Hero/Hero'
import AboutMe from '../components/AboutMe/AboutMe'
import Roadmap from '../components/Roadmap/Roadmap'
import ProjectSection from '../components/ProjectSection/ProjectSection'
import Cta from '../components/Cta/Cta'
import { useRef } from 'react'

const Home = () => {

  const AboutMeRef = useRef(null);
  const MyPortfolioRef = useRef(null);

  const scrollToAboutMe = () => {
    AboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToMyPortfolio = () => {
    MyPortfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='flex flex-col'>
      <Hero scrollToAboutMe={scrollToAboutMe} scrollToMyPortfolio={scrollToMyPortfolio}/>
      <section ref={AboutMeRef}>
        <AboutMe/>
      </section>
      
      <Roadmap/>
      <section ref={MyPortfolioRef}>
        <ProjectSection/>
      </section>
      
      <Cta/>
    </div>
  )
}

export default Home
