import React from 'react'
import './NavItem.css'
import { Link } from 'react-router-dom'

const NavItem = ({ navItem, link }) => {
    return (
        <li className=' inline-block  nav-item mx-3 mt-2 hover:text-gray-300 transition-all hover:translate-x-1'>
            <Link to={link}>{navItem}</Link>
        </li>
    )
}

export default NavItem