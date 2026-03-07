"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import "./business-sizes-section.css";

// Arrow Icon
const ArrowIcon = () => (
    <svg className="hds-icon hds-icon-hover-arrow" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M0.5 5.5h7" />
        <path d="M1.5 1.5l4 4-4 4" />
    </svg>
);

// Plus Icon
const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12">
        <path fill="currentColor" d="M6.87988 5.125H11.75v1.75H6.87988v4.875h-1.75V6.875H.25v-1.75h4.87988V.25h1.75z" />
    </svg>
);

// Left Arrow
const LeftArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
        <path d="M9.613 2.62 5.107 7.124h9.137v1.75H5.107l4.506 4.506-1.238 1.238-6-6L1.756 8l.619-.62 6-6 1.238 1.24Z" />
    </svg>
);

// Right Arrow
const RightArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
        <path d="m6.387 2.62 4.506 4.505H1.756v1.75h9.137l-4.506 4.506 1.238 1.238 6-6L14.245 8l-.618-.62-6-6-1.239 1.24Z" />
    </svg>
);

// Customer Story Data
const enterpriseCustomers = [
    {
        id: "residential",
        logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
                <rect width="40" height="40" fill="#16b364" rx="4" />
                <path fill="#fff" d="M20 10l8 6v12H12V16l8-6zm-5 16h10v-8l-5-3.75L15 18v8z" />
            </svg>
        ),
        title: "Smith family protects their home with regular septic maintenance.",
        description: "Regular pumping every 3 years has kept this family's system running perfectly for over a decade.",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
        stats: [
            { value: "10+", label: "years of service" },
            { value: "Zero", label: "emergency calls" },
            { value: "Services", label: "Pumping, Inspection, Maintenance" },
        ],
    },
    {
        id: "commercial",
        logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
                <rect width="40" height="40" fill="#3981FF" rx="4" />
                <path fill="#fff" d="M10 30V14h8v16h-8zm12-20v20h8V10h-8z" />
            </svg>
        ),
        title: "Mountain View Restaurant relies on WDT Crest for grease trap service.",
        description: "Monthly grease trap cleaning keeps this busy Asheville restaurant compliant and operational.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
        stats: [
            { value: "Monthly", label: "service schedule" },
            { value: "0", label: "health violations" },
            { value: "Services", label: "Grease Trap, Pumping, Emergency" },
        ],
    },
    {
        id: "construction",
        logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
                <rect width="40" height="40" fill="#FF930F" rx="4" />
                <path fill="#fff" d="M20 8l10 8v14H10V16l10-8zm0 4l-6 4.8V26h12V16.8L20 12z" />
            </svg>
        ),
        title: "Henderson Builders partners with WDT Crest on new construction.",
        description: "We've installed septic systems for 50+ new homes with 100% first-inspection pass rate.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
        stats: [
            { value: "50+", label: "systems installed" },
            { value: "100%", label: "inspection pass rate" },
            { value: "Services", label: "Installation, Permits, Design" },
        ],
    },
    {
        id: "property-mgmt",
        logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
                <rect width="40" height="40" fill="#7f56d9" rx="4" />
                <path fill="#fff" d="M8 32V12h10v20H8zm14-24v24h10V8H22z" />
            </svg>
        ),
        title: "Blue Ridge HOA manages 200+ units with our maintenance plans.",
        description: "Quarterly inspections and priority emergency response for their entire community.",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80",
        stats: [
            { value: "200+", label: "units maintained" },
            { value: "4hr", label: "priority response" },
            { value: "Services", label: "Maintenance Plan, Emergency, Inspections" },
        ],
    },
];

// Case Study Data
const caseStudies = [
    {
        title: "Emergency service saved our vacation rental during peak season.",
        logo: "Vacation Rentals",
        image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&q=80",
    },
    {
        title: "Real estate inspection helped negotiate $5,000 off the sale price.",
        logo: "Home Buyers",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    },
    {
        title: "Annual maintenance keeps our bed & breakfast running smoothly.",
        logo: "B&B Owners",
        image: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=600&q=80",
    },
    {
        title: "Drain field restoration extended our system life by 15+ years.",
        logo: "Property Owners",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    },
    {
        title: "New construction septic installation completed ahead of schedule.",
        logo: "Home Builders",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
    },
    {
        title: "Commercial grease trap service keeps our kitchen compliant.",
        logo: "Restaurant Owners",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    },
];

// Testimonials
const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "Homeowner, Asheville",
        quote: "WDT Crest has been maintaining our septic system for over 8 years. Their technicians are professional, punctual, and always explain everything clearly. We've never had an emergency because they catch issues early.",
    },
    {
        name: "James Robertson",
        role: "Property Manager, Blue Ridge HOA",
        quote: "Managing 200+ properties means I need a reliable partner. WDT Crest's maintenance plans and priority response have been invaluable. They make my job so much easier.",
    },
    {
        name: "Maria Chen",
        role: "Owner, Mountain Bistro",
        quote: "Our restaurant depends on regular grease trap service. WDT Crest works around our schedule, arriving early before we open. They've helped us maintain a perfect health inspection record.",
    },
    {
        name: "David Thompson",
        role: "General Contractor",
        quote: "We've partnered with WDT Crest on over 50 new construction projects. Their installations pass inspection the first time, every time. That reliability is invaluable in our business.",
    },
];

export const BusinessSizesSection = () => {
    const [openCustomer, setOpenCustomer] = useState(0);
    const carouselRef = useRef<HTMLUListElement>(null);

    const scrollCarousel = (direction: "left" | "right") => {
        if (carouselRef.current) {
            const scrollAmount = 348;
            carouselRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="hds-mode business-sizes-section section section--white hds-mode--light">
            <div className="section-container section-row section-row-gap" style={{ "--section-row-gap-mb": "var(--hds-space-core-500)", "--section-row-gap-tb": "var(--hds-space-core-600)", "--section-row-gap-dt": "var(--hds-space-core-800)" } as React.CSSProperties}>
                {/* Main Header */}
                <div className="section-header--lg-wide">
                    <h2 className="hds-heading business-sizes__title hds-heading--lg hds-heading--inline">Serving properties of all sizes.</h2>
                    <p className="hds-heading hds-heading--lg hds-heading--subdued hds-heading--inline"> Professional septic services that grow with your needs.</p>
                </div>
                <span className="section-header-divider" />

                <div className="section-row section-row-gap" style={{ "--section-row-gap-mb": "var(--hds-space-core-600)", "--section-row-gap-tb": "var(--hds-space-core-700)", "--section-row-gap-dt": "var(--hds-space-core-1000)" } as React.CSSProperties}>
                    {/* Enterprise/Residential Section */}
                    <section className="section-row section-row-gap" style={{ "--section-row-gap-mb": "var(--hds-space-core-300)", "--section-row-gap-tb": "var(--hds-space-core-400)", "--section-row-gap-dt": "var(--hds-space-core-600)" } as React.CSSProperties}>
                        <header className="subsection-header-grid">
                            <h3 className="hds-heading subsection-header-grid__title hds-heading--md">Trusted by homeowners and businesses across Western NC</h3>
                            <p className="hds-text subsection-header-grid__description hds-text--lg hds-text--soft">Over 5,000 customers rely on WDT Crest for routine maintenance, emergency repairs, and NC-certified inspections. 30+ years of experience serving the community.</p>
                            <div className="hds-button-group subsection-header-grid__cta">
                                <Link className="hds-button hds-button--primary" href="tel:8282541920">
                                    Call (828) 254-1920
                                    <ArrowIcon />
                                </Link>
                            </div>
                        </header>

                        {/* Customer Stories Accordion */}
                        <div className="customer-stories">
                            {enterpriseCustomers.map((customer, index) => (
                                <div key={customer.id} className="customer-stories__customer" id={`customer-${customer.id}`} style={{ "--idx": index } as React.CSSProperties}>
                                    <div className={`customer-stories__customer-summary ${openCustomer === index ? "customer-stories__customer-summary--open" : ""}`}>
                                        <div className="customer-stories__customer-summary-logo">{customer.logo}</div>
                                        <button
                                            type="button"
                                            className="customer-stories__customer-button"
                                            aria-expanded={openCustomer === index}
                                            onClick={() => setOpenCustomer(openCustomer === index ? -1 : index)}
                                        >
                                            <h3 className="hds-heading customer-stories__customer-summary-description hds-heading--sm">{customer.title}</h3>
                                        </button>
                                        <div className="customer-stories__customer-summary-action">
                                            <Link
                                                className={`hds-button customer-story-button ${openCustomer === index ? "customer-story-button--open" : ""} hds-button--secondary-on-quiet hds-button--compact`}
                                                href="tel:8282541920"
                                                style={{ width: openCustomer === index ? "140px" : "40px" }}
                                            >
                                                <div className="customer-story-button__container" style={{ width: openCustomer === index ? "140px" : "40px" }}>
                                                    <div className="customer-story-button__text" style={{ opacity: openCustomer === index ? 1 : 0 }}>
                                                        <div>Get a quote</div>
                                                        <ArrowIcon />
                                                    </div>
                                                    <div className="customer-story-button__icon" style={{ opacity: openCustomer === index ? 0 : 1 }}>
                                                        <PlusIcon />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div
                                        role="region"
                                        className="customer-stories__customer-content"
                                        style={{ "--max-height": openCustomer === index ? "625px" : "0px" } as React.CSSProperties}
                                    >
                                        <div className="customer-stories__customer-image">
                                            <img loading="lazy" width="1200" height="520" alt="" src={customer.image} />
                                        </div>
                                        <div className="customer-stories__customer-data">
                                            {customer.stats.map((stat, i) => (
                                                <div key={i} className="customer-stories__customer-data-stat">
                                                    <div className="hds-text hds-text--md hds-text--inline hds-text--soft">
                                                        <p className="hds-text hds-text--md hds-text--emphasized hds-text--inline">{stat.value}</p> {stat.label}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="customer-stories__customer-content--read">
                                            <Link className="hds-button hds-button--secondary" href="tel:8282541920">
                                                Schedule service
                                                <ArrowIcon />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Feature Detail Grid */}
                        <div className="section-row section-row-gap" style={{ "--section-row-gap-mb": "var(--hds-space-core-300)", "--section-row-gap-tb": "var(--hds-space-core-400)", "--section-row-gap-dt": "var(--hds-space-core-500)" } as React.CSSProperties}>
                            <span className="hds-heading enterprise-values-title hds-heading--md">Why customers choose WDT Crest</span>
                            <div className="feature-detail-grid">
                                <div className="feature-detail__item">
                                    <div className="homepage__icon">
                                        <svg className="homepage__icon-svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                            <path fill="url(#grad1)" d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.5 5.5l-4 4-2-2 1-1 1 1 3-3 1 1z" />
                                            <defs>
                                                <linearGradient id="grad1" x1="0" y1="0" x2="16" y2="16">
                                                    <stop stopColor="#11efa4" />
                                                    <stop offset="0.5" stopColor="#18b5c1" />
                                                    <stop offset="1" stopColor="#6772e5" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="feature-detail__content">
                                        <h4 className="hds-text hds-text--md hds-text--emphasized hds-text--inline">NC-certified professionals.</h4>
                                        <p className="hds-text hds-text--md hds-text--inline hds-text--soft"> Our technicians are fully licensed and certified for septic inspections and installations in North Carolina.</p>
                                    </div>
                                    <div className="feature-detail__footer">
                                        <Link className="hds-link hds-link--callout" href="/services">
                                            View certifications
                                            <span className="hds-nbsp">&nbsp;<ArrowIcon /></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="feature-detail__item">
                                    <div className="homepage__icon">
                                        <svg className="homepage__icon-svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                            <path fill="url(#grad2)" d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 14.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13zM8 3v5l3.5 2-.75 1.25L7 9V3h1z" />
                                            <defs>
                                                <linearGradient id="grad2" x1="0" y1="0" x2="16" y2="16">
                                                    <stop stopColor="#11efa4" />
                                                    <stop offset="0.5" stopColor="#18b5c1" />
                                                    <stop offset="1" stopColor="#6772e5" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="feature-detail__content">
                                        <h4 className="hds-text hds-text--md hds-text--emphasized hds-text--inline">24/7 emergency service.</h4>
                                        <p className="hds-text hds-text--md hds-text--inline hds-text--soft"> Septic emergencies don't wait for business hours. Our team is available around the clock for urgent situations.</p>
                                    </div>
                                    <div className="feature-detail__footer">
                                        <Link className="hds-link hds-link--callout" href="tel:8282541920">
                                            Call emergency line
                                            <span className="hds-nbsp">&nbsp;<ArrowIcon /></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="feature-detail__item">
                                    <div className="homepage__icon">
                                        <svg className="homepage__icon-svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                            <path fill="url(#grad3)" d="M8 0L0 3v5c0 4.4 3.4 8.5 8 9 4.6-.5 8-4.6 8-9V3L8 0zm0 14.9C4.1 14.4 1 10.8 1 7V3.8l7-2.6 7 2.6V7c0 3.8-3.1 7.4-7 7.9z" />
                                            <defs>
                                                <linearGradient id="grad3" x1="0" y1="0" x2="16" y2="16">
                                                    <stop stopColor="#11efa4" />
                                                    <stop offset="0.5" stopColor="#18b5c1" />
                                                    <stop offset="1" stopColor="#6772e5" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="feature-detail__content">
                                        <h4 className="hds-text hds-text--md hds-text--emphasized hds-text--inline">30+ years experience.</h4>
                                        <p className="hds-text hds-text--md hds-text--inline hds-text--soft"> Family-owned and operated since 1994. We know Western NC septic systems inside and out.</p>
                                    </div>
                                    <div className="feature-detail__footer">
                                        <Link className="hds-link hds-link--callout" href="/about">
                                            Learn about us
                                            <span className="hds-nbsp">&nbsp;<ArrowIcon /></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="divider-wrapper">
                        <div className="divider-container divider-container--is-canvas-active">
                            <div className="divider-line" />
                        </div>
                    </div>

                    {/* Startups/Small Business Section */}
                    <section className="section-row section-row-gap" style={{ "--section-row-gap-mb": "var(--hds-space-core-600)", "--section-row-gap-tb": "var(--hds-space-core-400)", "--section-row-gap-dt": "var(--hds-space-core-800)" } as React.CSSProperties}>
                        <header className="subsection-header-grid">
                            <h3 className="hds-heading subsection-header-grid__title hds-heading--md">Flexible solutions for every property type</h3>
                            <p className="hds-text subsection-header-grid__description hds-text--lg hds-text--soft">From vacation rentals to restaurants, new construction to established homes — we have the expertise and equipment to handle any septic challenge.</p>
                            <div className="hds-button-group subsection-header-grid__cta">
                                <Link className="hds-button hds-button--primary" href="/services">
                                    View all services
                                    <ArrowIcon />
                                </Link>
                            </div>
                        </header>

                        {/* Case Study Carousel */}
                        <section className="startups-carousel" aria-label="Customer stories">
                            <div className="carousel-nav startups-carousel__nav" role="group">
                                <button type="button" className="hds-ui-button hds-ui-button--quiet" aria-label="Previous" onClick={() => scrollCarousel("left")}>
                                    <LeftArrow />
                                </button>
                                <button type="button" className="hds-ui-button hds-ui-button--quiet" aria-label="Next" onClick={() => scrollCarousel("right")}>
                                    <RightArrow />
                                </button>
                            </div>
                            <div className="case-study-carousel_container">
                                <div className="case-study-carousel" style={{ "--carousel-card-max-w": "332px", "--carousel-card-fluid": "25.62cqi" } as React.CSSProperties}>
                                    <ul ref={carouselRef} role="list" className="case-study-carousel__scroller">
                                        {caseStudies.map((study, index) => (
                                            <li key={index} className="case-study-carousel__item" style={{ "--carousel-item-index": index } as React.CSSProperties}>
                                                <div className="case-study-carousel__inner">
                                                    <Link className="case-study-card" href="tel:8282541920">
                                                        <div className="case-study-card__media">
                                                            <img loading="lazy" width="864" height="960" alt="" className="case-study-card__image" src={study.image} />
                                                        </div>
                                                        <div className="case-study-card__mediaLogo">
                                                            <span style={{ color: "#fff", fontSize: "18px", fontWeight: 600, textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>{study.logo}</span>
                                                        </div>
                                                        <h4 className="hds-text case-study-card__title hds-text--md">{study.title}</h4>
                                                        <div className="fake-link case-study-card__link">
                                                            Get a free quote
                                                            <span className="hds-nbsp">&nbsp;<ArrowIcon /></span>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Program Cards */}
                        <div className="startups__program-card-grid">
                            <Link className="startups-program-card startups__program-card--startups" href="tel:8282541920">
                                <div className="startups-program-card__border">
                                    <div className="startups-program-card__border-color">
                                        <div className="startups-program-card__border-color-gradient" />
                                    </div>
                                </div>
                                <div className="startups-program-card__inner">
                                    <div className="startups-program-card__content">
                                        <div className="startups-program-card__text">
                                            <h4 className="hds-text hds-text--md hds-text--emphasized hds-text--inline">Maintenance Plans.</h4>
                                            <p className="hds-text hds-text--md hds-text--inline hds-text--soft"> Save money with scheduled service and priority emergency response. Perfect for homeowners and property managers.</p>
                                        </div>
                                        <div className="fake-link startups-program-card-action">
                                            Learn about plans
                                            <span className="hds-nbsp">&nbsp;<ArrowIcon /></span>
                                        </div>
                                    </div>
                                    <div className="startups-program-card__graphic">
                                        <div className="startups__startups-graphic">
                                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                                                <rect width="80" height="80" rx="16" fill="#f6f9fc" />
                                                <path d="M40 20v40M20 40h40" stroke="#16b364" strokeWidth="4" strokeLinecap="round" />
                                                <circle cx="40" cy="40" r="16" stroke="#16b364" strokeWidth="4" fill="none" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link className="startups-program-card startups__program-card--atlas" href="tel:8282541920">
                                <div className="startups-program-card__border">
                                    <div className="startups-program-card__border-color">
                                        <div className="startups-program-card__border-color-gradient" />
                                    </div>
                                </div>
                                <div className="startups-program-card__inner">
                                    <div className="startups-program-card__content">
                                        <div className="startups-program-card__text">
                                            <h4 className="hds-text hds-text--md hds-text--emphasized hds-text--inline">New Construction.</h4>
                                            <p className="hds-text hds-text--md hds-text--inline hds-text--soft"> Work with NC-certified installers for new septic systems. We handle permits, design, and complete installation.</p>
                                        </div>
                                        <div className="fake-link startups-program-card-action">
                                            Start your project
                                            <span className="hds-nbsp">&nbsp;<ArrowIcon /></span>
                                        </div>
                                    </div>
                                    <div className="startups-program-card__graphic">
                                        <div className="startups__atlas-graphic">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                <path d="M20 2l18 14v22H2V16L20 2z" fill="#FFB000" />
                                                <path d="M20 2L2 16v22h18V2z" fill="url(#atlas-a)" />
                                                <path d="M20 2l18 14L20 38V2z" fill="url(#atlas-b)" />
                                                <defs>
                                                    <linearGradient id="atlas-a" x1="11" y1="16" x2="11" y2="38">
                                                        <stop stopColor="#FFD748" />
                                                        <stop offset="1" stopColor="#FFCB48" />
                                                    </linearGradient>
                                                    <linearGradient id="atlas-b" x1="20" y1="30" x2="20" y2="14">
                                                        <stop stopColor="#FFAD00" />
                                                        <stop offset="1" stopColor="#FF7600" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </section>

                    <div className="divider-wrapper" />

                    {/* Platform/Commercial Section */}
                    <section className="section-row section-row-gap" style={{ "--section-row-gap-mb": "var(--hds-space-core-700)", "--section-row-gap-tb": "var(--hds-space-core-800)", "--section-row-gap-dt": "var(--hds-space-core-1200)" } as React.CSSProperties}>
                        <header className="subsection-header-grid">
                            <h3 className="hds-heading subsection-header-grid__title hds-heading--md">Complete solutions for property managers and commercial properties</h3>
                            <p className="hds-text subsection-header-grid__description hds-text--lg hds-text--soft">From HOAs to restaurants to vacation rental companies, we help businesses maintain multiple systems efficiently with volume pricing and priority scheduling.</p>
                            <div className="hds-button-group subsection-header-grid__cta">
                                <Link className="hds-button hds-button--primary" href="tel:8282541920">
                                    Commercial services
                                    <ArrowIcon />
                                </Link>
                            </div>
                        </header>

                        {/* Feature Grid */}
                        <div className="feature-detail-grid platform-value__feature-grid">
                            <div className="feature-detail__item">
                                <div className="homepage__icon">
                                    <svg className="homepage__icon-svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                        <path fill="url(#grad4)" d="M14 2H2v12h12V2zM8 12l-4-4 1.5-1.5L8 9l4.5-4.5L14 6l-6 6z" />
                                        <defs>
                                            <linearGradient id="grad4" x1="0" y1="0" x2="16" y2="16">
                                                <stop stopColor="#11efa4" />
                                                <stop offset="0.5" stopColor="#18b5c1" />
                                                <stop offset="1" stopColor="#6772e5" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="feature-detail__content">
                                    <h4 className="hds-text hds-text--md hds-text--emphasized hds-text--inline">Volume pricing.</h4>
                                    <p className="hds-text hds-text--md hds-text--inline hds-text--soft"> Save up to 15% with multi-property contracts. Perfect for HOAs and property management companies.</p>
                                </div>
                                <div className="feature-detail__footer">
                                    <Link className="hds-link hds-link--callout" href="tel:8282541920">
                                        Get a volume quote
                                        <span className="hds-nbsp">&nbsp;<ArrowIcon /></span>
                                    </Link>
                                </div>
                            </div>
                            <div className="feature-detail__item">
                                <div className="homepage__icon">
                                    <svg className="homepage__icon-svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                        <path fill="url(#grad5)" d="M15 3l-8 8-4-4 1.5-1.5L7 8l6.5-6.5L15 3z" />
                                        <defs>
                                            <linearGradient id="grad5" x1="0" y1="0" x2="16" y2="16">
                                                <stop stopColor="#11efa4" />
                                                <stop offset="0.5" stopColor="#18b5c1" />
                                                <stop offset="1" stopColor="#6772e5" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="feature-detail__content">
                                    <h4 className="hds-text hds-text--md hds-text--emphasized hds-text--inline">Priority scheduling.</h4>
                                    <p className="hds-text hds-text--md hds-text--inline hds-text--soft"> Commercial customers receive 4-hour emergency response and flexible scheduling around business hours.</p>
                                </div>
                                <div className="feature-detail__footer">
                                    <Link className="hds-link hds-link--callout" href="tel:8282541920">
                                        Learn more
                                        <span className="hds-nbsp">&nbsp;<ArrowIcon /></span>
                                    </Link>
                                </div>
                            </div>
                            <div className="feature-detail__item">
                                <div className="homepage__icon">
                                    <svg className="homepage__icon-svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                        <path fill="url(#grad6)" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm1-9H7v4l3.5 2.1.8-1.2-2.3-1.4V5z" />
                                        <defs>
                                            <linearGradient id="grad6" x1="0" y1="0" x2="16" y2="16">
                                                <stop stopColor="#11efa4" />
                                                <stop offset="0.5" stopColor="#18b5c1" />
                                                <stop offset="1" stopColor="#6772e5" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="feature-detail__content">
                                    <h4 className="hds-text hds-text--md hds-text--emphasized hds-text--inline">Single point of contact.</h4>
                                    <p className="hds-text hds-text--md hds-text--inline hds-text--soft"> One dedicated account manager for all your properties. Simplified communication and billing.</p>
                                </div>
                                <div className="feature-detail__footer">
                                    <Link className="hds-link hds-link--callout" href="tel:8282541920">
                                        Contact us
                                        <span className="hds-nbsp">&nbsp;<ArrowIcon /></span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div className="testimonial-carousel-container">
                            <div className="testimonial-carousel__cards">
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="testimonial-card">
                                        <q className="testimonial-card__quote">{testimonial.quote}</q>
                                        <div className="testimonial-card__author">
                                            {testimonial.name}, <span className="testimonial-card__author-role">{testimonial.role}</span>
                                        </div>
                                        <Link className="hds-link hds-link--callout" href="tel:8282541920">
                                            Get a quote
                                            <span className="hds-nbsp">&nbsp;<ArrowIcon /></span>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default BusinessSizesSection;
