import React from 'react'
import "./Hero1.css"
import bicycle from "../bicycle/emojione_bicycle.png"
//import boundingBoxfolder from "../boundingBoxfolder/arrow_forward.png"
import boundingBoxfolder2 from "../boundingBoxfolder2/arrow_forward.png"
//import circle from "../circle/Ellipse 3.png"
//import circle2 from "../circle2/Ellipse 2.png"
import ride2geder from "../ride2geder/Bicycle ride together.png"


function Hero1() {
  return (
    <React.Fragment>
      <div className={`bg-[#11012C] w-[1440px] h-[1024px] l-[0px] top-[0px]`}>
        <div>
          <div className={`absolute w-[50px] h-[50px] left-[60px] top-[60px]`}><img src={bicycle} alt="ridebicycle" /></div>
          <div className={`cycleband absolute font-Raleway not-italic W-[153px] h-[33px] left-[154px] top-[77px]  text-[#E4D5FF]`}><h1>Cycle Band</h1></div>

          <button className={`button1 absolute flex w-[212px] h-[49px] left-[1168px] top-[66px] text-[#E4D5FF] bg-[#2A0072] `}>Get started now </button>
          {/* <img className="forward" src={boundingBoxfolder} alt="arrow" /> */}
        </div>

        {/* <div className='circle1 absolute'>
        <img src={circle} alt="circle1" />
      </div>  */}

        <div>
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

          {/* <div className='circle2  absolute'>
          <img src={circle2} alt="circle2" />
        </div> */}
        </div>

      </div>
    </React.Fragment>
  )
}
export default Hero1
