import React from 'react'
import './Header.css'
//adding components
import NavItem from '../../components/nav-item/NavItem'
import Logo from '../../components/logo/Logo'
import MbHeader from './mbHeader'

const Header = () => {
    return (
        <header >
            <div className='header main-bg w-full text-white mb-3'>
                <div className='container mx-auto flex justify-between py-3'>
                    {/* first column */}
                    <div className='flex-1'>
                        <ul>
                            <NavItem navItem='خانه' link='/' />
                            <NavItem navItem='فرصت های شغلی' link='/' />
                            <NavItem navItem='رزومه ساز(CV)' link='/' />
                            <NavItem navItem='آگهی رایگان بذار' link='/' />
                        </ul>
                    </div>

                    {/* second column */}
                    <div className='flex-1  text-end'>
                        <button className='login-Btn inline-block border second-bg-hover hover:border-transparent hover:shadow-lg transition-all border-white px-4 py-2 rounded-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-block mx-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>

                            ورود / ثبت نام</button>
                        <Logo />
                    </div>
                </div>
            </div>
            <MbHeader />
        </header>
    )
}

export default Header