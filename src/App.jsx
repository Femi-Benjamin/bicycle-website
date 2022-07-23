import React from 'react'
import Hero1 from "./components/Hero1"
import Bicycle from "./components/Bicycle"
import Body from './components/Body'
// import Hero from "./components/Hero"

export default function App() {
  return (
    <div>
    <Hero1/>
    <Bicycle/>

    <div className='flex absolute top-[1550px]'>
    <div className={`bg-[#2A0072] not-italics font-Raleway text-white w-[360px] h-[250px] text-center p-[60px] gap-10`}>
    <Body
      Product="Road Bikes"
      Amount="$800 - $3,000"
      Affordable="Cheap"
      Speedometer="Speed"
      Usage="Ergonomical"
    />
    </div>
    <div className={`bg-red-500 not-italics font-Raleway text-white w-[360px] h-[250px] text-center p-[60px] gap-10`}>
    <Body
      Product="Road Bikes"
      Amount="$800 - $3,000"
      Affordable="Cheap"
      Speedometer="Speed"
      Usage="Ergonomical"
    />
    </div>
    <div className={`bg-green-500 not-italics font-Raleway text-white w-[360px] h-[250px] text-center p-[60px] gap-10`}>
    <Body
      Product="Road Bikes"
      Amount="$800 - $3,000"
      Affordable="Cheap"
      Speedometer="Speed"
      Usage="Ergonomical"
    />
    </div>
    <div className={`bg-yellow-500 not-italics font-Raleway text-white w-[360px] h-[250px] text-center p-[60px] gap-10`}>
    <Body
      Product="Road Bikes"
      Amount="$800 - $3,000"
      Affordable="Cheap"
      Speedometer="Speed"
      Usage="Ergonomical"
    />
    </div>
    </div>
    {/* <Hero/> */}
    </div>
  )
}

