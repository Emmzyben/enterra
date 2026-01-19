import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    return (
        <header>
            <div className="container">
                <nav>
                    <Link to="/" className="logo">
                        <div style={{
                            width: '32px',
                            height: '32px',
                            background: 'var(--primary)',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white'
                        }}>
                            <Zap size={20} fill="white" />
                        </div>
                        <span style={{ marginLeft: '0.5rem' }}>Enterra</span>
                    </Link>

                    <div className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
                        <Link to="/#features">Features</Link>
                        <Link to="/vendors">Vendors</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/#how-it-works">How it Works</Link>
                        <div className="auth-group">
                            <Link to="/login" className="btn btn-secondary btn-header">Log In</Link>
                            <Link to="/register" className="btn btn-primary btn-header" style={{ color: '#fff' }}>Sign Up</Link>
                        </div>
                    </div>

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{ background: 'none', border: 'none', color: 'var(--text-primary)' }}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
