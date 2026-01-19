import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Phone, Eye, EyeOff, ArrowRight, ShieldCheck, Zap, Chrome } from 'lucide-react';

const Register = () => {
    const [userType, setUserType] = useState('client'); // 'client' or 'vendor'
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registration attempt:', { ...formData, userType });
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            background: 'var(--bg-color)',
            paddingTop: '6rem',
            paddingBottom: '4rem'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '500px',
                background: 'white',
                padding: '3rem',
                borderRadius: '2.5rem',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border-color)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>Create Account</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Join Nigeria's safest event marketplace</p>
                </div>

                {/* User Type Selection */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    marginBottom: '2rem',
                    background: 'var(--surface-hover)',
                    padding: '0.5rem',
                    borderRadius: '16px'
                }}>
                    <button
                        type="button"
                        onClick={() => setUserType('client')}
                        style={{
                            padding: '0.75rem',
                            borderRadius: '12px',
                            border: 'none',
                            background: userType === 'client' ? 'white' : 'transparent',
                            color: userType === 'client' ? 'var(--primary)' : 'var(--text-secondary)',
                            fontWeight: '600',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            boxShadow: userType === 'client' ? 'var(--shadow-sm)' : 'none',
                            transition: 'all 0.2s'
                        }}
                    >
                        <User size={18} /> I'm a Host
                    </button>
                    <button
                        type="button"
                        onClick={() => setUserType('vendor')}
                        style={{
                            padding: '0.75rem',
                            borderRadius: '12px',
                            border: 'none',
                            background: userType === 'vendor' ? 'white' : 'transparent',
                            color: userType === 'vendor' ? 'var(--primary)' : 'var(--text-secondary)',
                            fontWeight: '600',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            boxShadow: userType === 'vendor' ? 'var(--shadow-sm)' : 'none',
                            transition: 'all 0.2s'
                        }}
                    >
                        <Zap size={18} /> I'm a Vendor
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>Full Name</label>
                        <div style={{ position: 'relative' }}>
                            <User size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                            <input
                                type="text"
                                placeholder="John Doe"
                                style={{
                                    width: '100%',
                                    padding: '1rem 1rem 1rem 3rem',
                                    borderRadius: '12px',
                                    border: '1px solid var(--border-color)',
                                    background: 'var(--surface-hover)',
                                    outline: 'none',
                                    fontSize: '1rem'
                                }}
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>Email Address</label>
                        <div style={{ position: 'relative' }}>
                            <Mail size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                            <input
                                type="email"
                                placeholder="name@example.com"
                                style={{
                                    width: '100%',
                                    padding: '1rem 1rem 1rem 3rem',
                                    borderRadius: '12px',
                                    border: '1px solid var(--border-color)',
                                    background: 'var(--surface-hover)',
                                    outline: 'none',
                                    fontSize: '1rem'
                                }}
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>Phone Number</label>
                        <div style={{ position: 'relative' }}>
                            <Phone size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                            <input
                                type="tel"
                                placeholder="+234..."
                                style={{
                                    width: '100%',
                                    padding: '1rem 1rem 1rem 3rem',
                                    borderRadius: '12px',
                                    border: '1px solid var(--border-color)',
                                    background: 'var(--surface-hover)',
                                    outline: 'none',
                                    fontSize: '1rem'
                                }}
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>Password</label>
                        <div style={{ position: 'relative' }}>
                            <Lock size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="••••••••"
                                style={{
                                    width: '100%',
                                    padding: '1rem 3rem',
                                    borderRadius: '12px',
                                    border: '1px solid var(--border-color)',
                                    background: 'var(--surface-hover)',
                                    outline: 'none',
                                    fontSize: '1rem'
                                }}
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    position: 'absolute',
                                    right: '1rem',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--text-muted)',
                                    cursor: 'pointer'
                                }}
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <div style={{ background: '#f0fdf4', padding: '1rem', borderRadius: '12px', marginBottom: '2rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <ShieldCheck size={20} color="var(--success)" style={{ marginTop: '2px' }} />
                        <p style={{ fontSize: '0.85rem', color: '#166534', lineHeight: '1.4' }}>
                            By signing up, you agree to Enterra's <strong>Escrow Protection Policy</strong> and <strong>Terms of Service</strong>.
                        </p>
                    </div>

                    <button className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginBottom: '2rem' }}>
                        Create Account <ArrowRight size={18} />
                    </button>

                    <div style={{ position: 'relative', textAlign: 'center', marginBottom: '2rem' }}>
                        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'var(--border-color)', zIndex: 0 }}></div>
                        <span style={{ position: 'relative', background: 'white', padding: '0 1rem', color: 'var(--text-muted)', fontSize: '0.85rem', zIndex: 1 }}>Or join with</span>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <button type="button" className="btn btn-secondary" style={{ width: '100%', padding: '0.75rem', fontSize: '0.9rem' }}>
                            <Chrome size={18} /> Continue with Google
                        </button>
                    </div>

                    <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                        Already have an account? <Link to="/login" style={{ color: 'var(--primary)', fontWeight: '700' }}>Log In</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
