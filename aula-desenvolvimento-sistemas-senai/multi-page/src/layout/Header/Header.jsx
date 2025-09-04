import React from 'react'
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div>
        <nav className='flex gap-5' >
      <NavLink to="/" end>
        Home
      </NavLink>
      <p></p>
      <NavLink to="/sobre" end>
        sobre
      </NavLink>
      <p></p>
      <NavLink to="/iniciar" end>
        iniciar
      </NavLink>

    </nav>
    </div>
  )
}

export default Header
