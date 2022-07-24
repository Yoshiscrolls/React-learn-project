import React from 'react';
import {Link} from "react-router-dom";
import '../../../App.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar__links">
                <Link className='navbar__login' to="/login">Login</Link>
                <Link className='navbar__link' to="/about">About</Link>
                <Link className='navbar__link' to="/posts">Posts</Link>
            </div>
        </div>
    );
};

export default Navbar;