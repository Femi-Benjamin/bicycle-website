import React from 'react'

export default function Body(props) {
  return (
    <div className='card'>
        <h1 className='Product' >{props.Product}</h1>
        <h1 className='Amount' >{props.Amount}</h1>
        <p className='Afford'>{props.Affordable}</p>
        <p className='Info'>{props.Speedometer}</p>
        <p className='Info' >{props.Usage}</p>
    </div>
  )
}
