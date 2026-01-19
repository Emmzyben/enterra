import { Link } from 'react-router-dom';
import { Zap, Twitter, Instagram, Linkedin, Facebook, ArrowRight } from 'lucide-react';

const SocialIcon = ({ icon }) => (
    <a href="#" style={{
        width: '40px',
        height: '40px',
        borderRadius: '12px',
        background: 'rgba(255,255,255,0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#94a3b8',
        transition: 'all 0.2s',
        border: '1px solid rgba(255,255,255,0.1)'
    }}
        onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--primary)';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'translateY(-3px)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
            e.currentTarget.style.color = '#94a3b8';
            e.currentTarget.style.transform = 'translateY(0)';
        }}
    >
        {icon}
    </a>
);

const Footer = () => {
    return (
        <footer style={{
            borderTop: '1px solid var(--border-color)',
            padding: '5rem 0 2rem',
            background: '#020617',
            color: '#94a3b8'
        }}>
            <div className="container">
                <div className="footer-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '4rem',
                    marginBottom: '4rem'
                }}>

                    {/* Brand Column */}
                    <div style={{ gridColumn: 'span 2' }}>
                        <div className="logo" style={{ marginBottom: '1.5rem' }}>
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
                            <span style={{ marginLeft: '0.5rem', color: 'white' }}>Enterra</span>
                        </div>
                        <p style={{ maxWidth: '300px', marginBottom: '2rem' }}>
                            The safest way to book event professionals in Nigeria.
                            Secure escrow payments, verified vendors, and peace of mind.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <SocialIcon icon={<Twitter size={20} />} />
                            <SocialIcon icon={<Instagram size={20} />} />
                            <SocialIcon icon={<Linkedin size={20} />} />
                            <SocialIcon icon={<Facebook size={20} />} />
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Platform</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li><a href="#" className="hover-text">Browse Vendors</a></li>
                            <li><a href="#" className="hover-text">How it Works</a></li>
                            <li><a href="#" className="hover-text">Pricing</a></li>
                            <li><a href="#" className="hover-text">Trust & Safety</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Company</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li><Link to="/about" className="hover-text">About Us</Link></li>
                            <li><Link to="/careers" className="hover-text">Careers</Link></li>
                            <li><Link to="/blog" className="hover-text">Blog</Link></li>
                            <li><Link to="/contact" className="hover-text">Contact Support</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Stay Updated</h4>
                        <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>Get the latest tips on event planning.</p>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid #334155',
                                    padding: '0.75rem',
                                    borderRadius: '8px',
                                    color: 'white',
                                    width: '100%',
                                    outline: 'none'
                                }}
                            />
                            <button style={{
                                background: 'var(--primary)',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '0 1rem',
                                color: 'white',
                                cursor: 'pointer'
                            }}>
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <div style={{ fontSize: '0.9rem' }}>© 2026 Enterra Inc. All rights reserved.</div>
                    <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem' }}>
                        <a href="#" className="hover-text">Privacy Policy</a>
                        <a href="#" className="hover-text">Terms of Service</a>
                        <a href="#" className="hover-text">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
