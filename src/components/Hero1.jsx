import React from 'react'
import "./Hero1.css"
import bicycle  from "../bicycle/emojione_bicycle.png"
import boundingBoxfolder from "../boundingBoxfolder/arrow_forward.png"
import boundingBoxfolder2 from "../boundingBoxfolder2/arrow_forward.png"
import circle from "../circle/Ellipse 3.png"
import circle2 from "../circle2/Ellipse 2.png"
import ride2geder from "../ride2geder/Bicycle ride together.png"

 function Hero1() {
  return (
    <React.Fragment>
    <div className='parentDiv'>
        <div>
            <div className='logo absolute'><img src={bicycle} alt="ridebicycle" /></div>
            <div className='cycleband absolute font-Raleway not-italic '><h1>Cycle Band</h1></div>
            <div className='button1 absolute flex'>
            <button>
              Get started now 
            </button>
            <img className='arrow' src={boundingBoxfolder} alt="arrow" />
            </div>
        </div>

      <div className='circle1 absolute'>
        <img src={circle} alt="circle1" />
      </div>

      <div className='flex'>
        <div>
          <h1 className='welcome absolute leading-9  font-Raleway not-italic font-bold   text-3xl'>Welcome to Cycle Band</h1>
          <p className='buyandsell absolute leading-7 font-Raleway not-italic font-medium text-2xl '>Buy, Sell Repair and talk to other bicycle owners </p>
        </div>

        <div className='bicycleride absolute '>
          <img src={ride2geder} alt="together" />
        </div>

        <div className='button2 flex absolute rounded-md justify-center flex-row font-Raleway not-italic'>
          <button >Get started now</button>
          <img className='arrow2' src={boundingBoxfolder2} alt="" />
        </div>

        <div className='circle2  absolute'>
          <img src={circle2} alt="circle2" />
        </div>
      </div>
        
    </div>
    </React.Fragment>
  )
}
export default Hero1
