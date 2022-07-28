import React from 'react'

export default function Body(props) {
  return (
    <div className={`card  not-italics font-Raleway text-white w-[360px] h-[250px] text-center p-[40px] gap-10`}>
        <h1 className='Product text-[28px] font-[700] leading-[33px] mb-[20px]'>{props.Product}</h1>
        <h1 className='Amount text-xl font-bold m-[10px]'>{props.Amount}</h1>
        <p className='Afford text-xl'>{props.Affordable}</p>
        <p className='Info text-xl'>{props.Speedometer}</p>
        <p className='Info text-xl' >{props.Usage}</p>
    </div>
  )
}
