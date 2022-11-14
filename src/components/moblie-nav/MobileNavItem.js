import React from 'react'
import { Link } from 'react-router-dom'

const MobileNavItem = ({ navItem, link, icon }) => {
    return (
        <li className='mobile-nav-item block  mx-3 mt-8cls border-b-2 py-3 second-color-hover transition-all hover:translate-x-1'>
            <i className='inline-block mx-2'>{icon}</i>
            <Link to={link}>
                {navItem}
            </Link>
        </li>
    )
}

export default MobileNavItem