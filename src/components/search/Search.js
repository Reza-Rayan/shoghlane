import React from 'react'
import './Search.css'
//adding icons
import job from '../../assets/icons/job.png'
import location from '../../assets/icons/loc.png'

const Search = () => {
    return (
        <form className='py-4 search'>
            <div className='px-2 py-3 bg-white rounded-full border-gray-500 border text-sm inline-block mx-2 w-56 text-start'>
                <img src={job} className=' inline-block h-5 w-5' alt='icon' />
                <input type='text' name='job-title' placeholder=' عنوان شغلی شما ...' className='px-1 ' />
            </div>
            <div className='px-2 py-3 bg-white rounded-full border-gray-500 border text-sm inline-block mx-1 w-56 text-start'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <input type='text' name='job-title' placeholder=' دسته بندی ' className='px-3' />
            </div>
            <div className='px-2 py-3 bg-white rounded-full border-gray-500 border text-sm inline-block mx-2 w-56 text-start'>
                <img src={location} className='inline-block w-4 h-5' alt='icon' />
                <input type='text' name='job-title' placeholder=' استان مورد نظر ... ' className='px-3' />
            </div>
            <div className='px-8 py-3 main-bg-hover  bg-white rounded-full second-bg text-white text-sm inline-block mx-4 w-68 text-start'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>


                <button type='submit' className='mx-1 '>جستجو</button>
            </div>
        </form>
    )
}

export default Search