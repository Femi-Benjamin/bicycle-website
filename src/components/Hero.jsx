import React from 'react'
import "./Hero.css"
import bicycle  from "../bicycle/emojione_bicycle.png"
import boundingBoxfolder from "../boundingBoxfolder/arrow_forward.png"


function Hero() {
  return (
   <React.Fragment>
    <div className='HeroDiv'>
      <div className='logo1 absolute'><img src={bicycle} alt="ridebicycle" /></div>
      <div className='cycleband1 absolute font-Raleway not-italic '><h1>Cycle Band</h1></div>
    
    <div className='info absolute'>
      <h1 className='welcome2 absolute font-Raleway not-italic'>Welcome to Cycle Band</h1>
      <p className='buyandsell2 absolute  font-Raleway not-italic'>Buy, sell, repair and talk to other bicycle owners</p>
      
      <div className='infobutton absolute'>
        <button>
        <p className='butntext font-Raleway not-italic'>Get started now</p>
        <img className='infoarrow' src={boundingBoxfolder} alt="arrow" />
        </button>
      </div>
    </div>

  

    </div>

   
  </React.Fragment>
  )
}
export default Hero;
