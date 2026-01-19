import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Chrome } from 'lucide-react';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', formData);
        // Add authentication logic here
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            background: 'var(--bg-color)',
            paddingTop: '6rem'
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
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>Welcome Back</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Log in to your Enterra account</p>
                </div>

                <form onSubmit={handleSubmit}>
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

                    <div style={{ marginBottom: '1rem' }}>
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

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                            <input type="checkbox" style={{ accentColor: 'var(--primary)' }} /> Keep me logged in
                        </label>
                        <Link to="#" style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '600' }}>Forgot password?</Link>
                    </div>

                    <button className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginBottom: '2rem' }}>
                        Log In <ArrowRight size={18} />
                    </button>

                    <div style={{ position: 'relative', textAlign: 'center', marginBottom: '2rem' }}>
                        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'var(--border-color)', zIndex: 0 }}></div>
                        <span style={{ position: 'relative', background: 'white', padding: '0 1rem', color: 'var(--text-muted)', fontSize: '0.85rem', zIndex: 1 }}>Or continue with</span>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <button type="button" className="btn btn-secondary" style={{ width: '100%', padding: '0.75rem', fontSize: '0.9rem' }}>
                            <Chrome size={18} /> Continue with Google
                        </button>
                    </div>

                    <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                        Don't have an account? <Link to="/register" style={{ color: 'var(--primary)', fontWeight: '700' }}>Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
