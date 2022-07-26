import React from 'react' 

export default function Footer() {
  return (
    <div>
        <footer className='absolute bg-[#08091A] w-screen top-[1795px]'>
        <div className='not-italics font-Raleway text-white text-[28px] font-[700] leading-[53px] text-center m-[60px]'>
            <h1>Cycle Band</h1>
            <p>Copy Right Ⓒ {new Date().getFullYear()}</p>
        </div>
        </footer>
    </div>
  )
}
