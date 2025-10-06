import React from 'react';
import { NavLink } from 'react-router';
import './nav.css'

const Navbar = () => {

    const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>  
    <li><NavLink to='listedBook'>Listed Books</NavLink></li>
    <li><NavLink to='pagesToRead' >Pages to Read</NavLink></li> 
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="text-[#131313cc] text-lg menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a className="text-2xl font-bold ">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#131313cc] text-lg">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end lg:space-x-4 space-x-2">
                <a className="btn py-5 px-7 bg-[#23BE0A] hover:bg-[#1c9908] text-white  rounded-lg">Sign In</a>
                <a className="btn py-5 px-7 bg-[#59C6D2] hover:bg-[#43959e] text-white  rounded-lg">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;