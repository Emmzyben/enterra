import React from 'react';
import { Link } from 'react-router-dom';
import {
    Shield, Star, Calendar, Search, CheckCircle, ArrowRight,
    UserCheck, Lock, Camera, Music, Palette, Play, Zap, ChevronRight, MapPin
} from 'lucide-react';

const Typewriter = ({ text, delay = 100, start = true, onComplete }) => {
    const [currentText, setCurrentText] = React.useState('');
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        if (start && currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);
            return () => clearTimeout(timeout);
        } else if (currentIndex === text.length && onComplete) {
            onComplete();
        }
    }, [currentIndex, delay, text, start, onComplete]);

    return (
        <span>
            {currentText}
            {start && currentIndex < text.length && <span className="typing-cursor">|</span>}
        </span>
    );
};

const useReveal = () => {
    React.useEffect(() => {
        const observerOptions = {
            threshold: 0,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        // Function to observe elements
        const observeElements = () => {
            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
        };

        // Run initially
        observeElements();

        // Also run after a short delay for any late-mounting components
        const timeoutId = setTimeout(observeElements, 500);

        return () => {
            observer.disconnect();
            clearTimeout(timeoutId);
        };
    }, []);
};

const Landing = () => {
    const [startSecondLine, setStartSecondLine] = React.useState(false);
    useReveal();

    return (
        <div className="landing-page">
            {/* Background Blobs for Landing */}
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>

            {/* Hero Section */}
            <section className="hero">
                <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="hero-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h1 className="fade-in-up">
                            <Typewriter
                                text="Event Booking,"
                                delay={100}
                                onComplete={() => setStartSecondLine(true)}
                            />
                            <br />
                            <span className="text-gradient">
                                <Typewriter
                                    text="Fully Secured."
                                    delay={100}
                                    start={startSecondLine}
                                />
                            </span>
                        </h1>
                        <p className="fade-in-up" style={{ margin: '0 auto 2.5rem', color: 'rgba(255,255,255,0.9)', animationDelay: '400ms' }}>
                            The first marketplace where payments are held in escrow until the job is done.
                            Book DJs, photographers, and makeup artists with zero risk.
                        </p>

                        <div className="search-container fade-in-up" style={{ margin: '0 auto 3rem', animationDelay: '800ms' }}>
                            <div className="search-input-group">
                                <Search size={20} color="#94a3b8" />
                                <input type="text" placeholder="DJ, Photographer, etc..." />
                            </div>
                            <div style={{ borderLeft: '1px solid #e2e8f0', padding: '0 1rem', height: '24px', display: 'flex', alignItems: 'center' }}>
                                <span style={{ color: '#64748b', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>Lagos, NG</span>
                            </div>
                            <Link to="/vendors" className="search-btn">
                                <ArrowRight size={20} />
                            </Link>
                        </div>

                        <div className="stats-bar fade-in-up" style={{ justifyContent: 'center', gap: '4rem', animationDelay: '1000ms' }}>
                            <div className="stat-item">
                                <h4 style={{ color: 'white' }}>500+</h4>
                                <p style={{ color: 'rgba(255,255,255,0.7)' }}>Verified Vendors</p>
                            </div>
                            <div className="stat-item">
                                <h4 style={{ color: 'white' }}>100%</h4>
                                <p style={{ color: 'rgba(255,255,255,0.7)' }}>Escrow Protection</p>
                            </div>
                            <div className="stat-item">
                                <h4 style={{ color: 'white' }}>4.9</h4>
                                <p style={{ color: 'rgba(255,255,255,0.7)' }}>Average Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="section-padding bg-white" id="categories">
                <div className="container">
                    <div className="section-header" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Explore Top Categories</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>Curated professionals for every aspect of your event</p>
                    </div>

                    <div className="grid-3">
                        <CategoryCard
                            title="DJs & Bands"
                            desc="From Afrobeat to Jazz, find the perfect sound."
                            image="/dj.jpg"
                            delay="100"
                        />
                        <CategoryCard
                            title="Photography"
                            desc="Capture timeless moments with verified pros."
                            image="/photography.avif"
                            delay="200"
                        />
                        <CategoryCard
                            title="Makeup Artists"
                            desc="glam looks for weddings and parties."
                            image="/makeup.jpg"
                            delay="300"
                        />
                        <CategoryCard
                            title="MC / Hosts"
                            desc="Engage your audience with professional hosts."
                            image="/mc.webp"
                            delay="100"
                        />
                        <CategoryCard
                            title="Videography"
                            desc="Cinematic event coverage and editing."
                            image="/videogrpahy.jpg"
                            delay="200"
                        />
                        <CategoryCard
                            title="Influencers"
                            desc="Promote your event with top personalities."
                            image="/influencers.jpg"
                            delay="300"
                        />
                    </div>
                </div>
            </section>

            {/* Featured Vendors */}
            <section className="section-padding bg-soft">
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Featured Professionals</h2>
                            <p style={{ color: 'var(--text-secondary)' }}>Hand-picked, top-rated vendors with guaranteed quality</p>
                        </div>
                        <Link to="/vendors" className="btn btn-secondary hover-lift" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            View All Vendors <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="grid-3">
                        <VendorCard
                            name="DJ Spiky"
                            category="Wedding DJ"
                            rating="4.9"
                            reviews="142"
                            price="₦250,000"
                            location="Lagos"
                            image="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=75"
                            className="reveal"
                        />
                        <VendorCard
                            name="Kemi's Lens"
                            category="Photography"
                            rating="5.0"
                            reviews="89"
                            price="₦400,000"
                            location="Abuja"
                            image="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=75"
                            className="reveal delay-100"
                        />
                        <VendorCard
                            name="Glam by Tobi"
                            category="Makeup Artist"
                            rating="4.8"
                            reviews="210"
                            price="₦85,000"
                            location="Lagos"
                            image="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=75"
                            className="reveal delay-200"
                        />
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="section-padding bg-dark" id="how-it-works">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>How It Works</h2>
                        <p style={{ color: '#94a3b8' }}>Four simple steps to your perfect event</p>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        gap: '1rem'
                    }}>
                        <WorkStep
                            number="1"
                            icon={<Search />}
                            title="Search"
                            desc="Browse verified portfolios and read real reviews from past clients."
                            className="reveal"
                        />
                        <StepArrow />
                        <WorkStep
                            number="2"
                            icon={<Calendar />}
                            title="Book"
                            desc="Select your date and package. We prevent double-booking automatically."
                            className="reveal delay-100"
                        />
                        <StepArrow />
                        <WorkStep
                            number="3"
                            icon={<Shield />}
                            title="Secure Pay"
                            desc="Pay a deposit into Escrow. The vendor sees the funds but can't touch them."
                            className="reveal delay-200"
                        />
                        <StepArrow />
                        <WorkStep
                            number="4"
                            icon={<Star />}
                            title="Release"
                            desc="After the party, approve the job to release funds to the vendor."
                            className="reveal delay-300"
                        />
                    </div>
                </div>
            </section>

            {/* Trust & Safety Section (Features) */}
            <section className="section-padding bg-soft-primary" id="features">
                <div className="container">
                    <div className="hero-grid">
                        <div style={{ position: 'relative' }}>
                            <div style={{
                                background: 'var(--surface-hover)',
                                borderRadius: '2rem',
                                padding: '2rem',
                                border: '1px solid var(--glass-border)',
                                height: '100%',
                                minHeight: '400px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                gap: '1.5rem'
                            }}>
                                <TrustStep
                                    icon={<UserCheck size={24} />}
                                    title="1. Verified Vendors"
                                    text="Every vendor submits government ID and portfolio evidence."
                                />
                                <div style={{ height: '30px', borderLeft: '2px dashed #334155', marginLeft: '1.5rem' }}></div>
                                <TrustStep
                                    icon={<Lock size={24} />}
                                    title="2. Escrow Protection"
                                    text="Your money is held in a neutral vault. It's safe."
                                />
                                <div style={{ height: '30px', borderLeft: '2px dashed #334155', marginLeft: '1.5rem' }}></div>
                                <TrustStep
                                    icon={<CheckCircle size={24} />}
                                    title="3. Satisfaction Guarantee"
                                    text="Funds move only when you are happy with the service."
                                />
                            </div>
                        </div>

                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                                Trust is our <span className="text-gradient">Currency</span>
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                                The entertainment industry has a trust problem. We fixed it.
                                Vendor no-shows and client non-payments are a thing of the past.
                            </p>
                            <button className="btn btn-secondary">Read our Safety Policy</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-soft">
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '4rem',
                        alignItems: 'center',
                        textAlign: 'left',
                        background: 'white',
                        borderRadius: '2.5rem',
                        padding: '3rem',
                        boxShadow: 'var(--shadow-lg)',
                        border: '1px solid var(--border-color)',
                        overflow: 'hidden'
                    }}>
                        <div style={{ order: 1 }}>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: 'rgba(79, 70, 229, 0.1)',
                                padding: '8px 16px',
                                borderRadius: '100px',
                                color: 'var(--primary)',
                                fontWeight: '600',
                                fontSize: '0.85rem',
                                marginBottom: '1.5rem'
                            }}>
                                <CheckCircle size={16} /> 10,000+ Events Planned
                            </div>
                            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                                Ready to make your <br />
                                <span className="text-gradient">next event</span> legendary?
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.15rem' }}>
                                "Enterra made our wedding planning so much easier. We found a DJ and photographer
                                in 20 minutes, and knowing our money was safe in escrow took all the stress away."
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                                <img
                                    src="/woman.jpg"
                                    style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
                                    alt="Client"
                                />
                                <div>
                                    <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Sarah Adeleke</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Wedding Couple, Lagos</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <Link to="/register" className="btn btn-primary hover-lift">Find Your Vendor</Link>
                            </div>
                        </div>

                        <div style={{
                            order: window.innerWidth > 768 ? 2 : 0,
                            position: 'relative',
                            height: '450px',
                            borderRadius: '1.5rem',
                            overflow: 'hidden'
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=75"
                                alt="Happy Event"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Sub-components
const CategoryCard = ({ title, desc, image, delay }) => (
    <div className={`card group hover-lift reveal delay-${delay}`} style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ height: '200px', width: '100%', overflow: 'hidden', position: 'relative' }}>
            <img
                src={image}
                alt={title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                className="category-image"
            />
        </div>
        <div style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', margin: '0 0 0.5rem', color: 'var(--text-primary)' }}>{title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{desc}</p>
        </div>
    </div>
);

const TrustStep = ({ icon, title, text }) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <div style={{
            background: 'var(--surface-hover)',
            padding: '12px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary-light)'
        }}>
            {icon}
        </div>
        <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>{title}</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{text}</p>
        </div>
    </div>
);

const WorkStep = ({ number, icon, title, desc, className }) => (
    <div className={`work-step ${className}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div style={{
            width: '64px',
            height: '64px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary-light)',
            marginBottom: '1.5rem',
            position: 'relative'
        }}>
            {React.cloneElement(icon, { size: 32 })}
            <div style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                width: '28px',
                height: '28px',
                background: 'var(--primary)',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                border: '3px solid #0f172a'
            }}>
                {number}
            </div>
        </div>
        <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ color: '#94a3b8', maxWidth: '250px' }}>{desc}</p>
    </div>
);

const StepArrow = () => (
    <div className="step-arrow" style={{
        display: 'flex',
        alignItems: 'center',
        height: '64px',
        color: 'rgba(255,255,255,0.15)',
        paddingTop: '0'
    }}>
        <ChevronRight size={32} />
    </div>
);

const VendorCard = ({ name, category, rating, reviews, price, location, image, className }) => (
    <div className={`card group hover-lift ${className}`} style={{ padding: '0', overflow: 'hidden' }}>
        <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
            <img src={image} alt={name} className="category-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'white', padding: '0.25rem 0.75rem', borderRadius: '100px', fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary)', boxShadow: 'var(--shadow-sm)' }}>
                {price}
            </div>
        </div>
        <div style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>{name}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{category}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#fbbf24' }}>
                    <Star size={16} fill="#fbbf24" />
                    <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{rating}</span>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    <MapPin size={16} /> {location}
                </div>
                <Link to="/vendors" style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    View Profile <ArrowRight size={14} />
                </Link>
            </div>
        </div>
    </div>
);

export default Landing;
