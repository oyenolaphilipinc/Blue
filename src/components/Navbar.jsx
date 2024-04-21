import React from 'react'
import "../App.css"

const Navbar = () => {
  return (
    <div className="flex justify-center ">
       <ul className="flex gap-2 md:gap-4">
         <li className="text-md md:text-3xl"><a href="">Twitter</a></li>
         <li className="text-md md:text-3xl"><a href="">Telegram</a></li>
         <li className="text-md md:text-3xl"><a href="">Tokenomics</a></li>
         <li className="text-md md:text-3xl"><a href="">DexScreener</a></li>
       </ul>
    </div>
  )
}

export default Navbar