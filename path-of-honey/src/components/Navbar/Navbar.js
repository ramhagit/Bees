import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar-header">Navbar
        <div className="links">
            <Link className="link" to="/" >Blog</Link>
        </div>
        </header>
    )
}

export default Navbar;