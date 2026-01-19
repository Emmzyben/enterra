import React, { useState } from 'react';
import { Search, MapPin, Filter, Star, CheckCircle, ChevronDown, SlidersHorizontal, Heart } from 'lucide-react';

const MOCK_VENDORS = [
    {
        id: 1,
        name: "DJ K-Wise",
        category: "DJ",
        location: "Lekki, Lagos",
        price: "₦350,000",
        rating: 4.9,
        reviews: 124,
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=75",
        verified: true,
        tags: ["Afrobeats", "Wedding", "Club"]
    },
    {
        id: 2,
        name: "Pixel Perfect Photography",
        category: "Photographer",
        location: "Ikeja, Lagos",
        price: "₦250,000",
        rating: 4.8,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=75",
        verified: true,
        tags: ["Portrait", "Events", "Corporate"]
    },
    {
        id: 3,
        name: "Glam by Titi",
        category: "Makeup Artist",
        location: "Wuse 2, Abuja",
        price: "₦80,000",
        rating: 4.7,
        reviews: 215,
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=75",
        verified: true,
        tags: ["Bridal", "Party", "Editorial"]
    },
    {
        id: 4,
        name: "The Event Masters",
        category: "Planner",
        location: "Victoria Island, Lagos",
        price: "₦500,000",
        rating: 5.0,
        reviews: 42,
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=75",
        verified: true,
        tags: ["Full Service", "Coordination"]
    },
    {
        id: 5,
        name: "SoundWave Band",
        category: "Live Band",
        location: "Gwarinpa, Abuja",
        price: "₦750,000",
        rating: 4.6,
        reviews: 56,
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=75",
        verified: false,
        tags: ["Highlife", "Jazz", "Pop"]
    },
    {
        id: 6,
        name: "Chef Amara",
        category: "Catering",
        location: "Yaba, Lagos",
        price: "₦4,500/plate",
        rating: 4.8,
        reviews: 103,
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=75",
        verified: true,
        tags: ["Continental", "Local", "Buffet"]
    }
];

const Vendors = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredVendors = MOCK_VENDORS.filter(vendor => {
        const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            vendor.category.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All" || vendor.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div style={{ paddingTop: '5rem', minHeight: '100vh', background: 'var(--bg-color)' }}>
            {/* Search Header */}
            <div style={{ background: 'var(--surface-color)', borderBottom: '1px solid var(--border-color)', padding: '2rem 0' }}>
                <div className="container">
                    <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Find Event Professionals</h1>

                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        flexWrap: 'wrap',
                        maxWidth: '900px'
                    }}>
                        <div className="search-container" style={{ flex: 2, minWidth: '300px', margin: 0, boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-color)' }}>
                            <div className="search-input-group">
                                <Search size={20} color="var(--text-muted)" />
                                <input
                                    type="text"
                                    placeholder="What are you looking for?"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    style={{ background: 'transparent' }}
                                />
                            </div>
                        </div>

                        <div className="search-container" style={{ flex: 1, minWidth: '200px', margin: 0, boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-color)' }}>
                            <div className="search-input-group" style={{ borderRight: 'none' }}>
                                <MapPin size={20} color="var(--text-muted)" />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    defaultValue="Lagos, Nigeria"
                                    style={{ background: 'transparent' }}
                                />
                            </div>
                        </div>

                        <button className="btn btn-primary" style={{ padding: '0 2rem' }}>
                            Search
                        </button>
                    </div>

                    {/* Filters Bar */}
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                        {['All', 'DJ', 'Photographer', 'Makeup Artist', 'Catering', 'Planner'].map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                style={{
                                    padding: '0.5rem 1rem',
                                    borderRadius: '20px',
                                    border: selectedCategory === cat ? 'none' : '1px solid var(--border-color)',
                                    background: selectedCategory === cat ? 'var(--primary)' : 'var(--surface-color)',
                                    color: selectedCategory === cat ? 'white' : 'var(--text-secondary)',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    whiteSpace: 'nowrap',
                                    transition: 'all 0.2s'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                        <button style={{
                            marginLeft: 'auto',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'none',
                            border: '1px solid var(--border-color)',
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            color: 'var(--text-primary)',
                            cursor: 'pointer'
                        }}>
                            <SlidersHorizontal size={16} /> Filters
                        </button>
                    </div>
                </div>
            </div>

            {/* Results Grid */}
            <div className="container" style={{ padding: '3rem 1.5rem' }}>
                <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                    Showing {filteredVendors.length} results
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {filteredVendors.map(vendor => (
                        <VendorCard key={vendor.id} vendor={vendor} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const VendorCard = ({ vendor }) => (
    <div className="card" style={{ padding: 0, overflow: 'hidden', cursor: 'pointer', border: '1px solid var(--border-color)' }}>
        <div style={{ position: 'relative', height: '200px' }}>
            <img
                src={vendor.image}
                alt={vendor.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <button style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'rgba(255,255,255,0.9)',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
            }}>
                <Heart size={18} color="var(--text-secondary)" />
            </button>
            {vendor.verified && (
                <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                    background: 'rgba(255,255,255,0.9)',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: 'var(--success)'
                }}>
                    <CheckCircle size={12} /> Verified
                </div>
            )}
        </div>

        <div style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <div>
                    <span style={{
                        fontSize: '0.8rem',
                        color: 'var(--primary)',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                    }}>
                        {vendor.category}
                    </span>
                    <h3 style={{ fontSize: '1.1rem', margin: '0.25rem 0 0', color: 'var(--text-primary)' }}>{vendor.name}</h3>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'var(--surface-hover)', padding: '4px 6px', borderRadius: '4px' }}>
                    <Star size={14} fill="#fbbf24" color="#fbbf24" />
                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)' }}>{vendor.rating}</span>
                </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={14} /> {vendor.location}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                {vendor.tags.map(tag => (
                    <span key={tag} style={{
                        fontSize: '0.75rem',
                        background: 'var(--surface-hover)',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        color: 'var(--text-secondary)'
                    }}>
                        {tag}
                    </span>
                ))}
            </div>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Starting from</span>
                    <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>{vendor.price}</span>
                </div>
                <button style={{
                    background: 'none',
                    border: '1px solid var(--primary)',
                    color: 'var(--primary)',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontSize: '0.9rem'
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--primary)';
                        e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'none';
                        e.currentTarget.style.color = 'var(--primary)';
                    }}
                >
                    View Profile
                </button>
            </div>
        </div>
    </div>
);

export default Vendors;
