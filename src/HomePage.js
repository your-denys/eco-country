import React from 'react'
import Header from './Components/Header/Header'
import StartBlock from './Components/StartBlock/StartBlock'
import Footer from './Components/Footer/Footer'
import Services from './Components/Services/Services'
import Benefits from './Components/Benefits/Benefits'
import Contact from './Components/Contact/Contact'
import Examples from './Components/Examples/Examples'
import WhyUs from './Components/WhyUs/WhyUs'
import Steps from './Components/Steps/Steps'
import Faq from './Components/Faq/Faq'

const HomePage = () => {
  return (
    <div>
        <Header/>
        <StartBlock/>
        <Services/>
        <Benefits/>
        <Contact/>
        <Examples/>
        <WhyUs/>
        <Steps/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default HomePage