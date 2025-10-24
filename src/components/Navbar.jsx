import React from 'react'
import { NavLink } from 'react-router-dom'

export function Navbar() {
    return(
        <nav className='navbar'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/design'>Design</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </nav>
    )
}

export default Navbar