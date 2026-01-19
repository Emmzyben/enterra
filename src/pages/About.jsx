import React from 'react';
import { Shield, Users, Zap, Heart, CheckCircle, ArrowRight, Star, Lock, Music, Camera, Play, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div style={{ paddingTop: '5rem', minHeight: '100vh', background: 'var(--bg-color)' }}>
            {/* Hero Section */}
            <section style={{
                padding: '8rem 0 6rem',
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                backgroundImage: 'url("https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=75")',
                backgroundBlendMode: 'overlay',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Building the Future of <br />
                        <span className="text-gradient" style={{ color: '#a5b4fc' }}>Event Trust</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', color: '#e2e8f0' }}>
                        Enterra is Nigeria's first escrow-based marketplace dedicated to connecting event hosts with world-class entertainment professionals.
                    </p>
                </div>
            </section>

            {/* Our Mission */}
            <section className="section-padding">
                <div className="container">
                    <div className="hero-grid" style={{ alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Mission</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                                For too long, the event industry has been plagued by "no-shows," late arrivals, and payment disputes.
                                Hosts lived in fear of their big day being ruined, while vendors struggled with clients who refused to pay for hard work.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: '1.8' }}>
                                <strong>Enterra was born to fix this.</strong> We created a platform where trust is built into the system.
                                By holding payments in a secure escrow vault, we ensure that hosts get the service they paid for,
                                and vendors get the payment they earned.
                            </p>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <img
                                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=75"
                                alt="Event Planning"
                                style={{ width: '100%', borderRadius: '2.5rem', boxShadow: 'var(--shadow-lg)' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* How it Works for Everyone */}
            <section className="section-padding" style={{ background: '#f8fafc' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>How Enterra Works</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>A seamless experience for both clients and professionals.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
                        {/* Clients Column */}
                        <div style={{ background: 'white', padding: '3rem', borderRadius: '2.5rem', border: '1px solid var(--border-color)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                <div style={{ background: 'var(--primary)', color: 'white', padding: '12px', borderRadius: '12px' }}>
                                    <Users size={24} />
                                </div>
                                <h3 style={{ fontSize: '1.5rem' }}>For Clients</h3>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <StepInfo
                                    number="1"
                                    title="Discover Verified Talent"
                                    desc="Browse through thousands of portfolios, read real reviews, and check vendor social media handles directly."
                                />
                                <StepInfo
                                    number="2"
                                    title="Secure Your Date"
                                    desc="Book instantly or request a quote. Our system prevents double-booking, so your date is locked in."
                                />
                                <StepInfo
                                    number="3"
                                    title="Funds Held in Escrow"
                                    desc="Pay into our secure wallet. The vendor sees the payment is secured but cannot access it until the job is done."
                                />
                                <StepInfo
                                    number="4"
                                    title="Release & Review"
                                    desc="Once the event is over and you're happy, release the funds and leave a review for the community."
                                />
                            </div>
                        </div>

                        {/* Vendors Column */}
                        <div style={{ background: 'white', padding: '3rem', borderRadius: '2.5rem', border: '1px solid var(--border-color)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                <div style={{ background: 'var(--secondary)', color: 'white', padding: '12px', borderRadius: '12px' }}>
                                    <Zap size={24} />
                                </div>
                                <h3 style={{ fontSize: '1.5rem' }}>For Vendors</h3>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <StepInfo
                                    number="1"
                                    title="Get Globally Verified"
                                    desc="Complete our rigorous verification process to earn your badge and build instant trust with hosts."
                                />
                                <StepInfo
                                    number="2"
                                    title="Manage Your Bookings"
                                    desc="A professional dashboard to manage your calendar, set your availability, and chat with clients."
                                />
                                <StepInfo
                                    number="3"
                                    title="Guaranteed Payments"
                                    desc="No more chasing clients for balance. We ensure you have your total fee secured before you step out for a gig."
                                />
                                <StepInfo
                                    number="4"
                                    title="Build Your Reputation"
                                    desc="Collect verified reviews that move with you, helping you land larger events and higher-paying clients."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Core Values</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>Everything we do is built on these principles.</p>
                    </div>
                    <div className="grid-3">
                        <ValueCard
                            icon={<Shield color="var(--primary)" />}
                            title="Uncompromising Security"
                            desc="We protect every naira. Our escrow system is bank-grade and secure."
                        />
                        <ValueCard
                            icon={<Users color="var(--primary)" />}
                            title="Radical Transparency"
                            desc="No hidden fees. No fake reviews. Everything is out in the open."
                        />
                        <ValueCard
                            icon={<Heart color="var(--primary)" />}
                            title="Community First"
                            desc="We win only when our vendors and hosts win. We are a family."
                        />
                    </div>
                </div>
            </section>

            {/* Eligible Vendors Section */}
            <section className="section-padding" style={{ background: '#f8fafc' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Who Can Join?</h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                            We welcome all professionals in the event and entertainment ecosystem. If you provide a service for events, you belong on Enterra.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gap: '2rem'
                    }}>
                        <VendorType icon={<Music size={20} />} title="DJs & Live Bands" />
                        <VendorType icon={<Camera size={20} />} title="Photographers" />
                        <VendorType icon={<Play size={20} />} title="Videographers" />
                        <VendorType icon={<Zap size={20} />} title="MC / Hosts / Comedians" />
                        <VendorType icon={<Palette size={20} />} title="Makeup Artists" />
                        <VendorType icon={<Star size={20} />} title="Influencers / Guest Stars" />
                        <VendorType icon={<Shield size={20} />} title="Bouncers & Security" />
                        <VendorType icon={<Users size={20} />} title="Ushers & Protocol" />
                        <VendorType icon={<Lock size={20} />} title="Sound & Light Engineers" />
                        <VendorType icon={<CheckCircle size={20} />} title="Caterers & Mixologists" />
                        <VendorType icon={<Heart size={20} />} title="Event Planners / Decorators" />
                        <VendorType icon={<ArrowRight size={20} />} title="Equipment Rentals" />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: '8rem 0', background: '#0f172a', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Join the Enterra Revolution</h2>
                    <p style={{ color: '#94a3b8', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                        Ready to book your next vendor or start getting secured bookings?
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                        <Link to="/vendors" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>I'm a Host</Link>
                        <Link to="/register" className="btn btn-secondary" style={{ padding: '1rem 3rem', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>I'm a Vendor</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

const StepInfo = ({ number, title, desc }) => (
    <div style={{ display: 'flex', gap: '1.5rem' }}>
        <div style={{
            minWidth: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'var(--surface-hover)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '0.9rem',
            color: 'var(--primary)'
        }}>
            {number}
        </div>
        <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{title}</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>{desc}</p>
        </div>
    </div>
);

const ValueCard = ({ icon, title, desc }) => (
    <div className="card" style={{ textAlign: 'center' }}>
        <div style={{
            width: '64px',
            height: '64px',
            background: 'var(--surface-hover)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem'
        }}>
            {icon}
        </div>
        <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)' }}>{desc}</p>
    </div>
);

const VendorType = ({ icon, title }) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '1.5rem',
        background: 'white',
        borderRadius: '1rem',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-sm)'
    }}>
        <div style={{ color: 'var(--primary)' }}>{icon}</div>
        <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{title}</div>
    </div>
);

export default About;
