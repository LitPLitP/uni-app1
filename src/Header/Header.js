// File: src/Header/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ setIsShrunk, disableShrink, initialShrunk }) => {
    const [shrink, setShrink] = useState(initialShrunk);
    const location = useLocation();

    useEffect(() => {
        if (disableShrink) return; // Disable shrinking if the prop is set

        const handleScroll = () => {
            const isShrunk = window.pageYOffset > 100;
            setShrink(isShrunk);
            setIsShrunk(isShrunk);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [setIsShrunk, disableShrink]);

    const renderNavLinks = () => {
        switch (location.pathname) {
            case '/':
                return (
                    <>
                        <Link to="/about">About Me</Link>
                        <Link to="/achievements">Achievements</Link>
                    </>
                );
            case '/about':
                return (
                    <>
                        <Link to="/">Home</Link>
                        <Link to="/achievements">Achievements</Link>
                    </>
                );
            case '/achievements':
                return (
                    <>
                        <Link to="/">Home</Link>
                        <Link to="/about">About Me</Link>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <header className={shrink ? 'banner-header shrunk' : 'banner-header'}>
            {(shrink || location.pathname !== '/') && (
                <nav>
                    {renderNavLinks()}
                </nav>
            )}
            <h1>Uni-Application</h1>
        </header>
    );
}

export default Header;
