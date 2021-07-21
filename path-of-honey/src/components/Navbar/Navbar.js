import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar-header">
            <Link className="home-link" to="/">Navbar</Link>
        <div className="links">
            <Link className="link" to="/blog/" >Blog</Link>
        </div>
        </header>
    )
}

export default Navbar;