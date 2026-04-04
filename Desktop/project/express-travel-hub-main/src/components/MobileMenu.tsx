import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MobileMenu.css'; // Optional: Include CSS for styling

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mobile-menu">
            <button className="hamburger" onClick={toggleMenu}>
                {isOpen ? '✖' : '☰'}
            </button>
            {isOpen && (
                <nav className="menu">
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            )}
        </div>
    );
};

export default MobileMenu;
