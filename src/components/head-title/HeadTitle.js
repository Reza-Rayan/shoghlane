import React from 'react'
import './HeadTitle.css'

const HeadTitle = ({title , titleSvg}) => {
  return (
    <div className='head-title block  shadow-lg py-3 px-12 rounded-lg pt-2 mx-auto'>
        <img src={titleSvg} className='inline-block  ' width={22} />
        <h2 className='inline-block text-md mx-3 pt-1 text-gray-600'>{title}</h2>
    </div>
  )
}

export default HeadTitle