import React from 'react';
import { Link } from 'react-router-dom';
import '../navbar/Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className='ho__navbar'>
                <nav className='ho__links'>
                    <Link to="/">Home</Link>
                </nav>
                <nav className='ho__links'>
                    <Link to="tours">Tours</Link>
                </nav>
                <nav className='ho__links'>
                    <Link to="/footer">Footer</Link>
                </nav>
            </div>
        </>
    )
}

export default Navbar
