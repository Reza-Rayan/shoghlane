import React from 'react'
import { Link } from 'react-router-dom'
import './CoCard.css'

const CoCard = ({ image }) => {
    return (
        <Link to='/' className='cocard-container  flex justify-center align-middle py-6 border rounded-lg hover:shadow-md transition-all '>
            <img src={image} className='co-card mx-auto' />
        </Link>
    )
}

export default CoCard