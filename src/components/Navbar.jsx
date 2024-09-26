import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <div>
            <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-darkBackground text-white'>
                <div className='flex item-center'>
                    <Link to='/' smooth={true}>
                        <h1 className='font-semibold text-xl cursor-pointer' >TripByZen</h1>
                    </Link>
                </div>
                <nav className='hidden md:flex flex-row items-center gap-6'>
                    <Link
                        to='home'
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='hover:text-brightColor transition-all cursor-pointer'
                    >Home
                    </Link>
                </nav>

            </div>
        </div>
    )
}

export default Navbar