import React from 'react'
import Hero1 from "./components/Hero1"
import Bicycle from "./components/Bicycle"
import Body from './components/Body'
import Footer from "./components/Footer"
// import Hero from "./components/Hero"

export default function App() {
  return (
    <div>
    <Hero1/>
    <Bicycle/>

    <div className='flex absolute top-[1545px]'>
    <div className={`bg-[#2A0072]`}>
    <Body
      Product="Racing Bikes"
      Amount="$800 - $3,000"
      Affordable="Cheap"
      Speedometer="Speed"
      Usage="Ergonomical"
    />
    </div>
    <div className={`bg-[#670DFF]`}>
    <Body
      Product="Hiking Bikes"
      Amount="$800 - $3,000"
      Affordable="Affordable"
      Speedometer="Slow"
      Usage="Non-Ergonomical"
    />
    </div>
    <div className={`bg-[#11012C] `}>
    <Body
      Product="Sport Bikes"
      Amount="$2000 - $6,000"
      Affordable="Expensive"
      Speedometer="High-speed"
      Usage="Very-Ergonomical"
    />
    </div>
    <div className={`bg-[#2A0072]`}>
    <Body
      Product="Gear Bikes"
      Amount="$1000 - $3,000"
      Affordable="Affordable"
      Speedometer="Speed"
      Usage="Ergonomical"
    />
    </div>
    </div>
    <Footer/>
    {/* <Hero/> */}
    </div>
  )
}

