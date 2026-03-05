"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./landing-styles.css";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";

// Clandestine Logo Component
const ClandestineLogo = () => (
    <svg fill="none" height="48" viewBox="0 0 203 48" width="203" xmlns="http://www.w3.org/2000/svg" className="brand-logo">
        <path d="m14.25 5c0 7.8701-6.37994 14.25-14.25 14.25v9.5h14.25v14.25h9.5c0-7.8701 6.3799-14.25 14.25-14.25v-9.5h-14.25v-14.25z" fill="#16b364"/>
        <g fill="#0a0d12">
            <path d="m56.2 33.3599c-2.12 0-3.94-.45-5.46-1.35-1.52-.92-2.69-2.19-3.51-3.81-.82-1.64-1.23-3.53-1.23-5.67s.41-4.03 1.23-5.67 1.99-2.92 3.51-3.84 3.34-1.38 5.46-1.38c2.52 0 4.58.63 6.18 1.89 1.62 1.24 2.63 2.99 3.03 5.25h-4.23c-.26-1.14-.82-2.03-1.68-2.67-.84-.66-1.96-.99-3.36-.99-1.94 0-3.46.66-4.56 1.98s-1.65 3.13-1.65 5.43.55 4.11 1.65 5.43c1.1 1.3 2.62 1.95 4.56 1.95 1.4 0 2.52-.3 3.36-.9.86-.62 1.42-1.47 1.68-2.55h4.23c-.4 2.16-1.41 3.85-3.03 5.07-1.6 1.22-3.66 1.83-6.18 1.83z"/>
            <path d="m66.9191 32.9999v-21.6h3.84v21.6z"/>
            <path d="m79.7228 33.3599c-1.4 0-2.65-.34-3.75-1.02s-1.97-1.61-2.61-2.79-.96-2.52-.96-4.02.32-2.83.96-3.99c.64-1.18 1.51-2.1 2.61-2.76 1.1-.68 2.35-1.02 3.75-1.02 1.12 0 2.1.21 2.94.63s1.52 1.01 2.04 1.77l.21-2.04h3.63v14.88h-3.6l-.24-2.13c-.48.66-1.12 1.24-1.92 1.74-.78.5-1.8.75-3.06.75zm.81-3.36c1.24 0 2.25-.41 3.03-1.23.8-.84 1.2-1.91 1.2-3.21s-.4-2.36-1.2-3.18c-.78-.84-1.79-1.26-3.03-1.26-1.22 0-2.23.41-3.03 1.23s-1.2 1.88-1.2 3.18.4 2.37 1.2 3.21 1.81 1.26 3.03 1.26z"/>
            <path d="m90.6531 32.9999v-14.88h3.39l.3 2.52c.46-.88 1.12-1.58 1.98-2.1.88-.52 1.91-.78 3.09-.78 1.8399 0 3.2699.58 4.2899 1.74s1.53 2.86 1.53 5.1v8.4h-3.84v-8.04c0-1.28-.26-2.26-.78-2.94s-1.3299-1.02-2.4299-1.02c-1.08 0-1.97.38-2.67 1.14-.68.76-1.02 1.82-1.02 3.18v7.68z"/>
            <path d="m113.945 33.3599c-1.4 0-2.65-.34-3.75-1.02s-1.97-1.61-2.61-2.79-.96-2.52-.96-4.02.32-2.83.96-3.99c.64-1.18 1.51-2.1 2.61-2.76 1.1-.68 2.35-1.02 3.75-1.02 1.12 0 2.1.21 2.94.63s1.52 1.01 2.04 1.77v-8.76h3.84v21.6h-3.42l-.42-2.13c-.48.66-1.12 1.24-1.92 1.74-.78.5-1.8.75-3.06.75zm.81-3.36c1.24 0 2.25-.41 3.03-1.23.8-.84 1.2-1.91 1.2-3.21s-.4-2.36-1.2-3.18c-.78-.84-1.79-1.26-3.03-1.26-1.22 0-2.23.41-3.03 1.23s-1.2 1.88-1.2 3.18.4 2.37 1.2 3.21 1.81 1.26 3.03 1.26z"/>
            <path d="m132.105 33.3599c-1.5 0-2.83-.32-3.99-.96s-2.07-1.54-2.73-2.7-.99-2.5-.99-4.02c0-1.54.32-2.91.96-4.11.66-1.2 1.56-2.13 2.7-2.79 1.16-.68 2.52-1.02 4.08-1.02 1.46 0 2.75.32 3.87.96s1.99 1.52 2.61 2.64c.64 1.1.96 2.33.96 3.69 0 .22-.01.45-.03.69 0 .24-.01.49-.03.75h-11.31c.08 1.16.48 2.07 1.2 2.73.74.66 1.63.99 2.67.99.78 0 1.43-.17 1.95-.51.54-.36.94-.82 1.2-1.38h3.9c-.28.94-.75 1.8-1.41 2.58-.64.76-1.44 1.36-2.4 1.8-.94.44-2.01.66-3.21.66zm.03-12.48c-.94 0-1.77.27-2.49.81-.72.52-1.18 1.32-1.38 2.4h7.41c-.06-.98-.42-1.76-1.08-2.34s-1.48-.87-2.46-.87z"/>
            <path d="m147.155 33.3599c-1.32 0-2.48-.21-3.48-.63-1-.44-1.8-1.04-2.4-1.8s-.96-1.64-1.08-2.64h3.87c.12.58.44 1.08.96 1.5.54.4 1.23.6 2.07.6s1.45-.17 1.83-.51c.4-.34.6-.73.6-1.17 0-.64-.28-1.07-.84-1.29-.56-.24-1.34-.47-2.34-.69-.64-.14-1.29-.31-1.95-.51s-1.27-.45-1.83-.75c-.54-.32-.98-.72-1.32-1.2-.34-.5-.51-1.11-.51-1.83 0-1.32.52-2.43 1.56-3.33 1.06-.9 2.54-1.35 4.44-1.35 1.76 0 3.16.41 4.2 1.23 1.06.82 1.69 1.95 1.89 3.39h-3.63c-.22-1.1-1.05-1.65-2.49-1.65-.72 0-1.28.14-1.68.42-.38.28-.57.63-.57 1.05 0 .44.29.79.87 1.05s1.35.5 2.31.72c1.04.24 1.99.51 2.85.81.88.28 1.58.71 2.1 1.29.52.56.78 1.37.78 2.43.02.92-.22 1.75-.72 2.49s-1.22 1.32-2.16 1.74-2.05.63-3.33.63z"/>
            <path d="m161.128 32.9999c-1.56 0-2.81-.38-3.75-1.14s-1.41-2.11-1.41-4.05v-6.48h-2.55v-3.21h2.55l.45-3.99h3.39v3.99h4.02v3.21h-3.02c-.552 0-1 .4477-1 1v5.51c0 .72.15 1.22.45 1.5.32.26.86.39 1.62.39h1.86v3.27z"/>
            <path d="m167.395 15.8099c-.7 0-1.28-.21-1.74-.63-.44-.42-.66-.95-.66-1.59s.22-1.16.66-1.56c.46-.42 1.04-.63 1.74-.63s1.27.21 1.71.63c.46.4.69.92.69 1.56s-.23 1.17-.69 1.59c-.44.42-1.01.63-1.71.63zm-1.92 17.19v-14.88h3.84v14.88z"/>
            <path d="m171.523 32.9999v-14.88h3.39l.3 2.52c.46-.88 1.12-1.58 1.98-2.1.88-.52 1.91-.78 3.09-.78 1.84 0 3.27.58 4.29 1.74s1.53 2.86 1.53 5.1v8.4h-3.84v-8.04c0-1.28-.26-2.26-.78-2.94s-1.33-1.02-2.43-1.02c-1.08 0-1.97.38-2.67 1.14-.68.76-1.02 1.82-1.02 3.18v7.68z"/>
            <path d="m195.205 33.3599c-1.5 0-2.83-.32-3.99-.96s-2.07-1.54-2.73-2.7-.99-2.5-.99-4.02c0-1.54.32-2.91.96-4.11.66-1.2 1.56-2.13 2.7-2.79 1.16-.68 2.52-1.02 4.08-1.02 1.46 0 2.75.32 3.87.96s1.99 1.52 2.61 2.64c.64 1.1.96 2.33.96 3.69 0 .22-.01.45-.03.69 0 .24-.01.49-.03.75h-11.31c.08 1.16.48 2.07 1.2 2.73.74.66 1.63.99 2.67.99.78 0 1.43-.17 1.95-.51.54-.36.94-.82 1.2-1.38h3.9c-.28.94-.75 1.8-1.41 2.58-.64.76-1.44 1.36-2.4 1.8-.94.44-2.01.66-3.21.66zm.03-12.48c-.94 0-1.77.27-2.49.81-.72.52-1.18 1.32-1.38 2.4h7.41c-.06-.98-.42-1.76-1.08-2.34s-1.48-.87-2.46-.87z"/>
        </g>
    </svg>
);

// Arrow Icon
const ArrowIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 8H8.5V18.5H22.4395L19.1895 15.25L20.25 14.1895L25.3105 19.25L20.25 24.3105L19.1895 23.25L22.4395 20H7V8Z" fill="currentColor" />
    </svg>
);

// Plus Icon for FAQ
const PlusIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.125 14.875H3.5V13.125H13.125V3.5H14.875V13.125H24.5V14.875H14.875V24.5H13.125V14.875Z" fill="#0D0D0D" />
    </svg>
);

// Rotating Text Component
const RotatingText = () => {
    const words = [
        "residential homes",
        "commercial properties",
        "real estate transactions",
        "new construction",
        "emergency situations",
        "routine maintenance",
        "system inspections",
        "drain field repairs",
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <div className="relative">
            <h1 className="text-4xl lg:text-5xl font-semibold text-primary leading-tight">
                Professional septic tank services for
            </h1>
            <div className="relative mt-2">
                <div className="text-4xl lg:text-5xl font-semibold leading-tight" style={{ color: '#3fe844' }}>{words[currentIndex]}</div>
            </div>
        </div>
    );
};

// Typewriter Component
const TypewriterText = () => {
    const phrases = [
        "Septic tank pumping service",
        "Emergency septic repairs",
        "NC-certified inspections",
        "Drain field installation",
        "Grease trap cleaning",
        "System maintenance plans",
    ];
    const [text, setText] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (text.length < currentPhrase.length) {
                    setText(currentPhrase.slice(0, text.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            } else {
                if (text.length > 0) {
                    setText(text.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setPhraseIndex((prev) => (prev + 1) % phrases.length);
                }
            }
        }, isDeleting ? 30 : 50);
        return () => clearTimeout(timeout);
    }, [text, isDeleting, phraseIndex, phrases]);

    return (
        <div className="type-wrapper">
            <div className="type-text">
                <span className="typed-words">{text}</span>
            </div>
        </div>
    );
};

// FAQ Item Component
const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-item" onClick={() => setIsOpen(!isOpen)}>
            <div className="faq-question">
                <div className="text-size-large is-faq">{question}</div>
                <div className={`faq-icon ${isOpen ? "is-open" : ""}`}>
                    <PlusIcon />
                </div>
            </div>
            <div className={`faq-answer ${isOpen ? "is-open" : ""}`}>
                <div className="text-size-regular text-color-grey space-top">{answer}</div>
            </div>
        </div>
    );
};

// Tab Component
const TabsSection = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        {
            name: "Pumping",
            color: "#16b364",
            title: "Professional septic pumping",
            description: "Regular pumping prevents costly backups and extends system life. We recommend pumping every 3-5 years depending on household size and usage.",
            features: [
                "Complete tank pumping and cleaning",
                "Inspection during every service",
                "Flexible scheduling options",
            ],
        },
        {
            name: "Inspections",
            color: "#3981FF",
            title: "NC-certified inspections",
            description: "Comprehensive inspections for real estate transactions, system assessments, and compliance verification by NC-certified professionals.",
            features: [
                "Real estate transaction inspections",
                "Detailed written reports",
                "Compliance verification",
            ],
        },
        {
            name: "Repairs",
            color: "#FF930F",
            title: "Expert repair services",
            description: "From minor fixes to major repairs, our experienced team handles all septic system components including tanks, drain fields, and distribution boxes.",
            features: [
                "Tank and lid repairs",
                "Drain field restoration",
                "Distribution box replacement",
            ],
        },
        {
            name: "Emergency",
            color: "#dc2626",
            title: "24/7 emergency service",
            description: "Septic emergencies don't wait for business hours. Our team is available around the clock for urgent situations that need immediate attention.",
            features: [
                "Available 24 hours a day",
                "Rapid response times",
                "Weekend and holiday service",
            ],
        },
    ];

    return (
        <div className="tabs-container">
            <div className="tabs-benefits">
                <div className="tabs-benefits-menu">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab.name}
                            className={`tab-menu-item ${activeTab === index ? "is-active" : ""}`}
                            onClick={() => setActiveTab(index)}
                        >
                            <div className="flex-h gap-12px z-index-1">
                                <div className="icon-28px" style={{ color: tab.color }}>●</div>
                                <div>{tab.name}</div>
                            </div>
                            <div className="tab-progress" style={{ backgroundColor: tab.color, width: activeTab === index ? "100%" : "0%" }} />
                        </button>
                    ))}
                </div>
                <div className="tabs-benefits-content">
                    <div className="tab-content-item">
                        <div className="grid-2col">
                            <div className="flex-v gap-full padding-3rem">
                                <div className="flex-v gap-1-25rem">
                                    <div className="sub-headline">
                                        <div className="icon-40px" style={{ color: tabs[activeTab].color }}>●</div>
                                        <div className="text-size-medium">{tabs[activeTab].name}</div>
                                    </div>
                                    <h3 className="heading-style-h3">{tabs[activeTab].title}</h3>
                                    <div className="text-size-large text-color-grey">{tabs[activeTab].description}</div>
                                </div>
                                <div className="flex-v">
                                    {tabs[activeTab].features.map((feature, i) => (
                                        <div key={i} className="horizontal-item">
                                            <div className="icon-32px check-icon">✓</div>
                                            <div className="text-size-medium">{feature}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="image-container left-border background-color-grey">
                                <div className="tab-image-placeholder" style={{ backgroundColor: tabs[activeTab].color + "20" }}>
                                    <div className="tab-icon-large" style={{ color: tabs[activeTab].color }}>
                                        {tabs[activeTab].name}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main Home Page Component
export default function Home() {
    const faqs = [
        { question: "How often should I pump my septic tank?", answer: "We recommend pumping your septic tank every 3-5 years, depending on household size, water usage, and tank capacity. A family of four with a 1,000-gallon tank typically needs pumping every 3 years." },
        { question: "What are signs my septic system needs service?", answer: "Warning signs include slow drains, gurgling sounds in pipes, sewage odors, wet spots in the yard near the drain field, and sewage backup. If you notice any of these, call us immediately." },
        { question: "Do you provide emergency services?", answer: "Yes! We offer 24/7 emergency septic services. Septic emergencies can't wait, so we're available around the clock to handle urgent situations." },
        { question: "What areas do you serve?", answer: "We serve Asheville and all surrounding areas including Buncombe, Henderson, and Madison Counties. If you're unsure if we serve your area, give us a call!" },
        { question: "How much does septic pumping cost?", answer: "Costs vary based on tank size, accessibility, and condition. We provide free estimates and transparent pricing. Call us at (828) 254-1920 for a quote." },
        { question: "Are you licensed and insured?", answer: "Yes, we are fully licensed and insured in North Carolina. Our technicians are NC-certified for septic inspections and all septic system services." },
    ];

    return (
        <div className="page-wrapper">
            {/* Navigation */}
            <nav className="nav_component">
                <div className="nav_container">
                    <Link href="/" className="nav_brand_link">
                        <ClandestineLogo />
                    </Link>
                    <div className="nav_menu">
                        <div className="flex-h is-menu">
                            <Link href="/reliable-septic-services" className="nav-link">Services</Link>
                            <Link href="/reliable-septic-pumping-solutions" className="nav-link">Pumping</Link>
                            <Link href="/septic-inspection-solutions" className="nav-link">Inspections</Link>
                            <Link href="/trustable-septic-products" className="nav-link">Products</Link>
                            <Link href="/our-septic-pumping-legacy" className="nav-link">Our Legacy</Link>
                            <Link href="/reviews-on-septic-services" className="nav-link">Reviews</Link>
                        </div>
                        <div className="button-group">
                            <Link href="tel:8282541920" className="button is-secondary">(828) 254-1920</Link>
                            <Link href="/contact" className="button is-primary-dark">Get Free Quote</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="main-wrapper">
                {/* Hero Section */}
                <section className="py-8">
                    <div className="!w-full !max-w-7xl !mx-auto border-l border-r lg:!pl-10 relative overflow-hidden" style={{ borderColor: '#d9d9d9' }}>
                        <BackgroundPattern pattern="grid-check" size="md" className="absolute inset-0 w-full h-full" />
                        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] overflow-hidden relative z-10">
                            {/* Left Column - Content */}
                            <div className="flex flex-col justify-center px-8 py-16 lg:px-12 lg:py-20">
                                <div className="flex flex-col gap-6">
                                    {/* Badge */}
                                    <div>
                                        <div className="inline-flex flex-wrap items-center gap-3 rounded-full border border-secondary bg-primary px-6 py-3 shadow-sm">
                                            <div className="flex size-5 items-center justify-center rounded-full bg-success-solid">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-3 text-white">
                                                    <path d="m9 12 2 2 4.5-4.5m2.401-4.501a2.03 2.03 0 0 0 1.1 1.1l1.744.723a2.033 2.033 0 0 1 1.1 2.656l-.722 1.744a2.03 2.03 0 0 0 0 1.556l.722 1.744a2.033 2.033 0 0 1-1.1 2.656L19 17.901A2.033 2.033 0 0 0 17.9 19l-.723 1.745a2.032 2.032 0 0 1-2.656 1.1l-1.744-.722a2.032 2.032 0 0 0-1.555 0l-1.745.723a2.033 2.033 0 0 1-2.654-1.1L6.1 19.001A2.033 2.033 0 0 0 5 17.9l-1.744-.723a2.033 2.033 0 0 1-1.1-2.654l.721-1.744a2.033 2.033 0 0 0 0-1.556l-.722-1.746a2.033 2.033 0 0 1 1.1-2.657L5 6.098A2.03 2.03 0 0 0 6.1 5l.723-1.745a2.033 2.033 0 0 1 2.656-1.1l1.744.722a2.033 2.033 0 0 0 1.555-.001l1.746-.72a2.032 2.032 0 0 1 2.655 1.1l.723 1.746v-.003Z"></path>
                                                </svg>
                                            </div>
                                            <span className="text-secondary text-sm font-semibold">Serving Asheville & Surrounding Areas</span>
                                            <span className="bg-success-secondary text-success-primary rounded-full border-l border-success-primary px-3 py-1 text-xs font-medium">30+ Years</span>
                                        </div>
                                    </div>

                                    {/* Heading */}
                                    <RotatingText />

                                    {/* Description */}
                                    <div className="max-w-md">
                                        <p className="text-lg text-tertiary">
                                            Trusted septic system maintenance, inspections, and repairs. Over 30 years of experience serving Western North Carolina.
                                        </p>
                                    </div>

                                    {/* Buttons */}
                                    <div className="button-group">
                                        <Link href="tel:8282541920" className="button is-primary">
                                            <span>Call Now: (828) 254-1920</span>
                                            <div className="icon-32px"><ArrowIcon /></div>
                                        </Link>
                                        <Link href="/services" className="button is-secondary">
                                            View Services
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Image */}
                            <div
                                className="hidden lg:block min-h-[600px] mr-6 lg:mr-10 rounded-2xl"
                                style={{ backgroundImage: 'url(/herobg.jpg)', backgroundSize: '210%', backgroundPosition: 'left 70% center' }}
                            />
                        </div>
                    </div>
                </section>

                {/* Logo Section */}
                <section className="logo-section">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="spacer-small" />
                            <div className="text-wrapper text-align-center">
                                <p className="text-size-regular text-color-grey">
                                    Trusted by homeowners and businesses throughout Western North Carolina
                                </p>
                            </div>
                            <div className="spacer-small" />
                            <div className="logo-grid">
                                {["30+ Years", "5,000+ Customers", "24/7 Service", "Licensed & Insured", "NC Certified", "Family Owned"].map((item) => (
                                    <div key={item} className="logo-item">
                                        <div className="logo-placeholder">{item}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Divider */}
                <div className="divider-section">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="divider-line" />
                        </div>
                    </div>
                </div>

                {/* Home Channel Section */}
                <section className="section_home-channel">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="home-channel-wrapper">
                                <div className="home-channel-content">
                                    <h2 className="heading-style-h2">Every Property. Every System. Serviced.</h2>
                                    <div className="spacer-tiny" />
                                    <p className="text-size-large text-color-grey">
                                        Your entire septic system handled by trusted professionals. From routine pumping to emergency repairs, we keep your property safe and compliant.
                                    </p>
                                    <div className="spacer-small" />
                                    <div className="button-group">
                                        <Link href="/reliable-septic-pumping-solutions" className="button is-secondary">Pumping</Link>
                                        <Link href="/septic-inspection-solutions" className="button is-secondary">Inspections</Link>
                                        <Link href="/reliable-septic-services" className="button is-secondary">All Services</Link>
                                    </div>
                                </div>
                                <div className="ticker-clip">
                                    <div className="ticker-track">
                                        {/* First set of cards */}
                                        <Link href="/reliable-septic-pumping-solutions" className="ticker-card">
                                            <div className="icon-flex">
                                                <div className="ticker-icon">
                                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="64" height="64" rx="8" fill="white"/>
                                                        <path d="M16 36h32v8a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4v-8z" fill="#16b364"/>
                                                        <path d="M20 20h24a4 4 0 0 1 4 4v12H16V24a4 4 0 0 1 4-4z" fill="#0d7a47"/>
                                                        <circle cx="24" cy="40" r="4" fill="#0d0d0d"/>
                                                        <circle cx="40" cy="40" r="4" fill="#0d0d0d"/>
                                                        <path d="M26 28h12v4H26z" fill="white" opacity="0.3"/>
                                                    </svg>
                                                </div>
                                                <div className="ticker-icon">
                                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="64" height="64" rx="8" fill="white"/>
                                                        <ellipse cx="32" cy="32" rx="16" ry="10" fill="#16b364"/>
                                                        <ellipse cx="32" cy="28" rx="16" ry="10" fill="#22c55e"/>
                                                        <path d="M20 28v8c0 5.5 5.4 10 12 10s12-4.5 12-10v-8" stroke="#0d7a47" strokeWidth="2"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ticker-content">
                                                <h4>Septic Pumping</h4>
                                                <p>Professional tank pumping every 3-5 years keeps your system running smoothly</p>
                                            </div>
                                        </Link>
                                        <Link href="/septic-inspection-solutions" className="ticker-card">
                                            <div className="icon-flex">
                                                <div className="ticker-icon">
                                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="64" height="64" rx="8" fill="white"/>
                                                        <circle cx="28" cy="28" r="12" stroke="#3981FF" strokeWidth="4" fill="none"/>
                                                        <path d="M37 37l10 10" stroke="#3981FF" strokeWidth="4" strokeLinecap="round"/>
                                                        <path d="M24 28h8M28 24v8" stroke="#3981FF" strokeWidth="2" strokeLinecap="round"/>
                                                    </svg>
                                                </div>
                                                <div className="ticker-icon">
                                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="64" height="64" rx="8" fill="white"/>
                                                        <rect x="18" y="16" width="28" height="36" rx="2" fill="#3981FF"/>
                                                        <rect x="22" y="20" width="20" height="4" rx="1" fill="white"/>
                                                        <rect x="22" y="28" width="14" height="2" rx="1" fill="white" opacity="0.6"/>
                                                        <rect x="22" y="34" width="18" height="2" rx="1" fill="white" opacity="0.6"/>
                                                        <rect x="22" y="40" width="12" height="2" rx="1" fill="white" opacity="0.6"/>
                                                        <circle cx="40" cy="44" r="6" fill="#22c55e"/>
                                                        <path d="M37 44l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ticker-content">
                                                <h4>System Inspections</h4>
                                                <p>NC-certified inspections for real estate and compliance verification</p>
                                            </div>
                                        </Link>
                                        <Link href="/reliable-septic-services" className="ticker-card">
                                            <div className="icon-flex">
                                                <div className="ticker-icon">
                                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="64" height="64" rx="8" fill="white"/>
                                                        <path d="M32 16l-4 12h8l-4 12" stroke="#FF930F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M24 44h16" stroke="#FF930F" strokeWidth="3" strokeLinecap="round"/>
                                                        <circle cx="32" cy="32" r="14" stroke="#FF930F" strokeWidth="2" fill="none" opacity="0.3"/>
                                                    </svg>
                                                </div>
                                                <div className="ticker-icon">
                                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="64" height="64" rx="8" fill="white"/>
                                                        <path d="M32 18v6M20 30h6M38 30h6M24 22l4 4M40 22l-4 4" stroke="#FF930F" strokeWidth="3" strokeLinecap="round"/>
                                                        <path d="M26 36h12l2 12H24l2-12z" fill="#FF930F"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ticker-content">
                                                <h4>Septic Repairs</h4>
                                                <p>Expert repairs for tanks, drain fields, and all system components</p>
                                            </div>
                                        </Link>
                                        <Link href="/reliable-septic-services" className="ticker-card">
                                            <div className="icon-flex">
                                                <div className="ticker-icon">
                                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="64" height="64" rx="8" fill="white"/>
                                                        <circle cx="32" cy="32" r="16" fill="#dc2626"/>
                                                        <path d="M32 22v12l6 6" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                                                    </svg>
                                                </div>
                                                <div className="ticker-icon">
                                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="64" height="64" rx="8" fill="white"/>
                                                        <path d="M20 44h24M26 44V32M38 44V32M22 32h20l-2-12H24l-2 12z" stroke="#dc2626" strokeWidth="3" fill="none"/>
                                                        <circle cx="44" cy="20" r="6" fill="#dc2626"/>
                                                        <path d="M44 17v6M44 25v1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ticker-content">
                                                <h4>Emergency Service</h4>
                                                <p>24/7 emergency response for urgent septic system problems</p>
                                            </div>
                                        </Link>
                                        <Link href="/reliable-septic-services" className="ticker-card">
                                            <div className="icon-flex">
                                                <div className="ticker-icon">
                                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="64" height="64" rx="8" fill="white"/>
                                                        <rect x="18" y="24" width="28" height="20" rx="2" fill="#7f56d9"/>
                                                        <rect x="22" y="28" width="20" height="12" rx="1" fill="white" opacity="0.3"/>
                                                        <path d="M24 20h16v4H24z" fill="#7f56d9"/>
                                                        <circle cx="32" cy="34" r="3" fill="white"/>
                                                    </svg>
                                                </div>
                                                <div className="ticker-icon">
                                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="64" height="64" rx="8" fill="white"/>
                                                        <path d="M20 44c0-8 6-12 12-12s12 4 12 12" stroke="#7f56d9" strokeWidth="3" fill="none"/>
                                                        <circle cx="32" cy="26" r="6" fill="#7f56d9"/>
                                                        <rect x="38" y="36" width="8" height="12" rx="1" fill="#7f56d9"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ticker-content">
                                                <h4>Grease Traps</h4>
                                                <p>Commercial grease trap cleaning for restaurants and businesses</p>
                                            </div>
                                        </Link>
                                        <Link href="/reliable-septic-services" className="ticker-card">
                                            <div className="icon-flex">
                                                <div className="ticker-icon">
                                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="64" height="64" rx="8" fill="white"/>
                                                        <path d="M16 40h32M20 40v-8l6-8h12l6 8v8" stroke="#16b364" strokeWidth="3" fill="none"/>
                                                        <path d="M24 44v4M32 44v4M40 44v4" stroke="#16b364" strokeWidth="2" strokeLinecap="round"/>
                                                    </svg>
                                                </div>
                                                <div className="ticker-icon">
                                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="64" height="64" rx="8" fill="white"/>
                                                        <path d="M20 24c4-4 8-4 12 0s8 4 12 0" stroke="#16b364" strokeWidth="3"/>
                                                        <path d="M20 32c4-4 8-4 12 0s8 4 12 0" stroke="#16b364" strokeWidth="3"/>
                                                        <path d="M20 40c4-4 8-4 12 0s8 4 12 0" stroke="#16b364" strokeWidth="3"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ticker-content">
                                                <h4>Drain Fields</h4>
                                                <p>Installation, repair, and restoration of drain field systems</p>
                                            </div>
                                        </Link>
                                        {/* Duplicate set for infinite scroll effect */}
                                        <Link href="/reliable-septic-pumping-solutions" className="ticker-card">
                                            <div className="icon-flex">
                                                <div className="ticker-icon">
                                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="64" height="64" rx="8" fill="white"/>
                                                        <path d="M16 36h32v8a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4v-8z" fill="#16b364"/>
                                                        <path d="M20 20h24a4 4 0 0 1 4 4v12H16V24a4 4 0 0 1 4-4z" fill="#0d7a47"/>
                                                        <circle cx="24" cy="40" r="4" fill="#0d0d0d"/>
                                                        <circle cx="40" cy="40" r="4" fill="#0d0d0d"/>
                                                        <path d="M26 28h12v4H26z" fill="white" opacity="0.3"/>
                                                    </svg>
                                                </div>
                                                <div className="ticker-icon">
                                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="64" height="64" rx="8" fill="white"/>
                                                        <ellipse cx="32" cy="32" rx="16" ry="10" fill="#16b364"/>
                                                        <ellipse cx="32" cy="28" rx="16" ry="10" fill="#22c55e"/>
                                                        <path d="M20 28v8c0 5.5 5.4 10 12 10s12-4.5 12-10v-8" stroke="#0d7a47" strokeWidth="2"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ticker-content">
                                                <h4>Septic Pumping</h4>
                                                <p>Professional tank pumping every 3-5 years keeps your system running smoothly</p>
                                            </div>
                                        </Link>
                                        <Link href="/septic-inspection-solutions" className="ticker-card">
                                            <div className="icon-flex">
                                                <div className="ticker-icon">
                                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="64" height="64" rx="8" fill="white"/>
                                                        <circle cx="28" cy="28" r="12" stroke="#3981FF" strokeWidth="4" fill="none"/>
                                                        <path d="M37 37l10 10" stroke="#3981FF" strokeWidth="4" strokeLinecap="round"/>
                                                        <path d="M24 28h8M28 24v8" stroke="#3981FF" strokeWidth="2" strokeLinecap="round"/>
                                                    </svg>
                                                </div>
                                                <div className="ticker-icon">
                                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="64" height="64" rx="8" fill="white"/>
                                                        <rect x="18" y="16" width="28" height="36" rx="2" fill="#3981FF"/>
                                                        <rect x="22" y="20" width="20" height="4" rx="1" fill="white"/>
                                                        <rect x="22" y="28" width="14" height="2" rx="1" fill="white" opacity="0.6"/>
                                                        <rect x="22" y="34" width="18" height="2" rx="1" fill="white" opacity="0.6"/>
                                                        <rect x="22" y="40" width="12" height="2" rx="1" fill="white" opacity="0.6"/>
                                                        <circle cx="40" cy="44" r="6" fill="#22c55e"/>
                                                        <path d="M37 44l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ticker-content">
                                                <h4>System Inspections</h4>
                                                <p>NC-certified inspections for real estate and compliance verification</p>
                                            </div>
                                        </Link>
                                        <Link href="/reliable-septic-services" className="ticker-card">
                                            <div className="icon-flex">
                                                <div className="ticker-icon">
                                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="64" height="64" rx="8" fill="white"/>
                                                        <path d="M32 16l-4 12h8l-4 12" stroke="#FF930F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M24 44h16" stroke="#FF930F" strokeWidth="3" strokeLinecap="round"/>
                                                        <circle cx="32" cy="32" r="14" stroke="#FF930F" strokeWidth="2" fill="none" opacity="0.3"/>
                                                    </svg>
                                                </div>
                                                <div className="ticker-icon">
                                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="64" height="64" rx="8" fill="white"/>
                                                        <path d="M32 18v6M20 30h6M38 30h6M24 22l4 4M40 22l-4 4" stroke="#FF930F" strokeWidth="3" strokeLinecap="round"/>
                                                        <path d="M26 36h12l2 12H24l2-12z" fill="#FF930F"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ticker-content">
                                                <h4>Septic Repairs</h4>
                                                <p>Expert repairs for tanks, drain fields, and all system components</p>
                                            </div>
                                        </Link>
                                        <Link href="/reliable-septic-services" className="ticker-card">
                                            <div className="icon-flex">
                                                <div className="ticker-icon">
                                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="64" height="64" rx="8" fill="white"/>
                                                        <circle cx="32" cy="32" r="16" fill="#dc2626"/>
                                                        <path d="M32 22v12l6 6" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                                                    </svg>
                                                </div>
                                                <div className="ticker-icon">
                                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="64" height="64" rx="8" fill="white"/>
                                                        <path d="M20 44h24M26 44V32M38 44V32M22 32h20l-2-12H24l-2 12z" stroke="#dc2626" strokeWidth="3" fill="none"/>
                                                        <circle cx="44" cy="20" r="6" fill="#dc2626"/>
                                                        <path d="M44 17v6M44 25v1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ticker-content">
                                                <h4>Emergency Service</h4>
                                                <p>24/7 emergency response for urgent septic system problems</p>
                                            </div>
                                        </Link>
                                        <Link href="/reliable-septic-services" className="ticker-card">
                                            <div className="icon-flex">
                                                <div className="ticker-icon">
                                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="64" height="64" rx="8" fill="white"/>
                                                        <rect x="18" y="24" width="28" height="20" rx="2" fill="#7f56d9"/>
                                                        <rect x="22" y="28" width="20" height="12" rx="1" fill="white" opacity="0.3"/>
                                                        <path d="M24 20h16v4H24z" fill="#7f56d9"/>
                                                        <circle cx="32" cy="34" r="3" fill="white"/>
                                                    </svg>
                                                </div>
                                                <div className="ticker-icon">
                                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="64" height="64" rx="8" fill="white"/>
                                                        <path d="M20 44c0-8 6-12 12-12s12 4 12 12" stroke="#7f56d9" strokeWidth="3" fill="none"/>
                                                        <circle cx="32" cy="26" r="6" fill="#7f56d9"/>
                                                        <rect x="38" y="36" width="8" height="12" rx="1" fill="#7f56d9"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ticker-content">
                                                <h4>Grease Traps</h4>
                                                <p>Commercial grease trap cleaning for restaurants and businesses</p>
                                            </div>
                                        </Link>
                                        <Link href="/reliable-septic-services" className="ticker-card">
                                            <div className="icon-flex">
                                                <div className="ticker-icon">
                                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="64" height="64" rx="8" fill="white"/>
                                                        <path d="M16 40h32M20 40v-8l6-8h12l6 8v8" stroke="#16b364" strokeWidth="3" fill="none"/>
                                                        <path d="M24 44v4M32 44v4M40 44v4" stroke="#16b364" strokeWidth="2" strokeLinecap="round"/>
                                                    </svg>
                                                </div>
                                                <div className="ticker-icon">
                                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="64" height="64" rx="8" fill="white"/>
                                                        <path d="M20 24c4-4 8-4 12 0s8 4 12 0" stroke="#16b364" strokeWidth="3"/>
                                                        <path d="M20 32c4-4 8-4 12 0s8 4 12 0" stroke="#16b364" strokeWidth="3"/>
                                                        <path d="M20 40c4-4 8-4 12 0s8 4 12 0" stroke="#16b364" strokeWidth="3"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ticker-content">
                                                <h4>Drain Fields</h4>
                                                <p>Installation, repair, and restoration of drain field systems</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problem Section */}
                <section className="section-regular-padding">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="text-wrapper padding-3rem">
                                <div className="flex-v gap-1-5rem">
                                    <div className="eyebrow">
                                        <span className="eyebrow-dot red" />
                                        <span className="text-size-regular text-color-grey">The Problem</span>
                                        <span className="eyebrow-dot red" />
                                    </div>
                                    <div className="text-wrapper size-600px">
                                        <h2 className="heading-style-h2">Neglected septic systems lead to costly problems</h2>
                                        <div className="spacer-tiny" />
                                        <p className="text-size-large text-color-grey">
                                            Most homeowners don&apos;t think about their septic system until something goes wrong - and by then, it&apos;s often an expensive emergency.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="problem-content">
                                <p className="text-size-large text-color-grey">
                                    Sewage backups, drain field failures, and system replacements can cost thousands of dollars. Regular maintenance and inspections prevent these issues and extend the life of your system by decades.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solution Section */}
                <section className="section-regular-padding">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="text-wrapper padding-3rem">
                                <div className="flex-v gap-1-5rem">
                                    <div className="eyebrow">
                                        <span className="eyebrow-dot green" />
                                        <span className="text-size-regular text-color-grey">The Solution</span>
                                        <span className="eyebrow-dot green" />
                                    </div>
                                    <div className="text-wrapper size-600px">
                                        <h2 className="heading-style-h2">Trust the septic system professionals</h2>
                                        <div className="spacer-tiny" />
                                        <p className="text-size-large">
                                            Our knowledgeable team provides eco-friendly septic solutions to protect your property and extend system life.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="solution-content">
                                <p className="text-size-large text-color-grey">
                                    With over 30 years of experience, we provide comprehensive septic services for residential and commercial properties. From routine pumping to emergency repairs, we&apos;re here when you need us.
                                </p>
                                <Link href="tel:8282541920" className="button is-primary">
                                    <span>Schedule Service Today</span>
                                    <div className="icon-32px"><ArrowIcon /></div>
                                </Link>
                            </div>
                            <div className="spacer-large" />
                            <div className="features-grid">
                                {[
                                    { title: "Licensed & Insured", desc: "Fully licensed and insured for your protection and peace of mind" },
                                    { title: "24/7 Emergency", desc: "Available around the clock for urgent septic emergencies" },
                                    { title: "30+ Years", desc: "Decades of expertise in septic system services" },
                                    { title: "Family Owned", desc: "Local family business serving our community with care" },
                                    { title: "NC Certified", desc: "Certified for septic inspections and compliance verification" },
                                ].map((feature, i) => (
                                    <div key={i} className="feature-item">
                                        <div className="feature-icon">✦</div>
                                        <h4 className="text-size-large text-weight-medium">{feature.title}</h4>
                                        <p className="text-size-medium text-color-grey">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-regular-padding">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="cta-container">
                                <div className="flex-v gap-2rem size-700px align-center">
                                    <h2 className="heading-style-h2 text-align-center">
                                        What septic service do you need today?
                                    </h2>
                                    <TypewriterText />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tabs Section */}
                <section className="section-regular-padding">
                    <div className="padding-global">
                        <div className="container-large">
                            <TabsSection />
                        </div>
                    </div>
                </section>

                {/* Power Your Data Section - Now Services Section */}
                <div className="section-regular-padding">
                    <div className="padding-global">
                        <div className="container-large border-top-no">
                            <div className="text-wrapper padding-3rem">
                                <div className="grid-2col">
                                    <div className="flex-v gap-1-5rem">
                                        <div className="eyebrow">
                                            <img
                                                src="https://cdn.prod.website-files.com/69385e16d68663814109c132/6939491eb3d2b172910b35cc_Eyebrow-Icon.svg"
                                                loading="lazy"
                                                alt=""
                                                className="icon-14px"
                                            />
                                            <div className="text-size-regular text-color-grey">Our Services</div>
                                            <img
                                                src="https://cdn.prod.website-files.com/69385e16d68663814109c132/693949364cde9b1d0482c0ed_Eyebrow-Icon-2.svg"
                                                loading="lazy"
                                                alt=""
                                                className="icon-14px"
                                            />
                                        </div>
                                        <div className="text-wrapper size-550px">
                                            <h2 className="heading-style-h2">Comprehensive septic services for every need</h2>
                                        </div>
                                    </div>
                                    <div className="text-align-left position-bottom">
                                        <div className="text-size-medium text-color-grey">
                                            From routine maintenance to emergency repairs, we provide complete septic system services for residential and commercial properties throughout Western North Carolina.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-3col side-3rem">
                                <div className="grid-3col tablet-2col">
                                    <div className="grid-item is-illustration">
                                        <div className="image-wrapper grid-image">
                                            <img
                                                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80"
                                                loading="lazy"
                                                alt="Septic tank pumping service"
                                                className="image-full"
                                            />
                                        </div>
                                        <div className="flex-v gap-12px padding-1-5rem">
                                            <div className="text-size-large is-24px text-weight-medium">Septic Pumping</div>
                                            <div className="text-size-regular text-color-grey">Professional septic tank pumping to keep your system running efficiently and prevent costly backups.</div>
                                        </div>
                                    </div>
                                    <div className="grid-item is-illustration">
                                        <div className="image-wrapper grid-image">
                                            <img
                                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80"
                                                loading="lazy"
                                                alt="Septic inspection service"
                                                className="image-full"
                                            />
                                        </div>
                                        <div className="flex-v gap-12px padding-1-5rem">
                                            <div className="text-size-large is-24px text-weight-medium">Septic Inspections</div>
                                            <div className="text-size-regular text-color-grey">NC-certified inspections for real estate transactions, system assessments, and compliance verification.</div>
                                        </div>
                                    </div>
                                    <div className="grid-item is-illustration">
                                        <div className="image-wrapper grid-image">
                                            <img
                                                src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80"
                                                loading="lazy"
                                                alt="Septic repair service"
                                                className="image-full"
                                            />
                                        </div>
                                        <div className="flex-v gap-12px padding-1-5rem">
                                            <div className="text-size-large is-24px text-weight-medium">Septic Repair</div>
                                            <div className="text-size-regular text-color-grey">Expert repair services for tanks, drain fields, distribution boxes, and all septic components.</div>
                                        </div>
                                    </div>
                                    <div className="grid-item is-illustration">
                                        <div className="image-wrapper grid-image">
                                            <img
                                                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80"
                                                loading="lazy"
                                                alt="Grease trap cleaning"
                                                className="image-full"
                                            />
                                        </div>
                                        <div className="flex-v gap-12px padding-1-5rem">
                                            <div className="text-size-large is-24px text-weight-medium">Grease Traps</div>
                                            <div className="text-size-regular text-color-grey">Commercial grease trap cleaning and maintenance to keep your business compliant with regulations.</div>
                                        </div>
                                    </div>
                                    <div className="grid-item is-illustration">
                                        <div className="image-wrapper grid-image">
                                            <img
                                                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80"
                                                loading="lazy"
                                                alt="Drain field service"
                                                className="image-full"
                                            />
                                        </div>
                                        <div className="flex-v gap-12px padding-1-5rem">
                                            <div className="text-size-large is-24px text-weight-medium">Drain Field Services</div>
                                            <div className="text-size-regular text-color-grey">Installation, repair, and restoration of drain fields to ensure proper effluent distribution.</div>
                                        </div>
                                    </div>
                                    <div className="grid-item is-illustration">
                                        <div className="image-wrapper grid-image">
                                            <img
                                                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
                                                loading="lazy"
                                                alt="Emergency septic service"
                                                className="image-full"
                                            />
                                        </div>
                                        <div className="flex-v gap-12px padding-1-5rem">
                                            <div className="text-size-large is-24px text-weight-medium">Emergency Service</div>
                                            <div className="text-size-regular text-color-grey">24/7 emergency septic services for urgent situations that can&apos;t wait for business hours.</div>
                                        </div>
                                    </div>
                                    <div className="grid-item is-illustration">
                                        <div className="image-wrapper grid-image">
                                            <img
                                                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80"
                                                loading="lazy"
                                                alt="Septic tank risers"
                                                className="image-full"
                                            />
                                        </div>
                                        <div className="flex-v gap-12px padding-1-5rem">
                                            <div className="text-size-large is-24px text-weight-medium">Tank Risers</div>
                                            <div className="text-size-regular text-color-grey">Easy access risers for convenient tank maintenance and inspection without digging.</div>
                                        </div>
                                    </div>
                                    <div className="grid-item is-illustration">
                                        <div className="image-wrapper grid-image">
                                            <img
                                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80"
                                                loading="lazy"
                                                alt="Effluent filters"
                                                className="image-full"
                                            />
                                        </div>
                                        <div className="flex-v gap-12px padding-1-5rem">
                                            <div className="text-size-large is-24px text-weight-medium">Effluent Filters</div>
                                            <div className="text-size-regular text-color-grey">High-quality filters to protect your drain field from solid waste and extend system life.</div>
                                        </div>
                                    </div>
                                    <div className="grid-item is-illustration">
                                        <div className="image-wrapper grid-image">
                                            <img
                                                src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80"
                                                loading="lazy"
                                                alt="Bacteria additives"
                                                className="image-full"
                                            />
                                        </div>
                                        <div className="flex-v gap-12px padding-1-5rem">
                                            <div className="text-size-large is-24px text-weight-medium">Bacteria Additives</div>
                                            <div className="text-size-regular text-color-grey">Biological treatments to maintain healthy septic system bacteria and improve performance.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="button-wrapper _100">
                                <Link href="tel:8282541920" className="button full-width-btn w-inline-block">
                                    <div>Call Now: (828) 254-1920</div>
                                    <div className="icon-32px w-embed">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 8H8.5V18.5H22.4395L19.1895 15.25L20.25 14.1895L25.3105 19.25L20.25 24.3105L19.1895 23.25L22.4395 20H7V8Z" fill="currentcolor" />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Free Benchmark Trial Section - Now Free Estimate Section */}
                <section className="section-regular-padding">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="container-wrapper background-color-dark-green" style={{ minHeight: '600px', paddingTop: '5rem', paddingBottom: '5rem' }}>
                                <div className="grid-2col gap-5rem z-index-1">
                                    <div className="flex-v gap-full">
                                        <div className="flex-v gap-1-25rem">
                                            <div className="eyebrow">
                                                <span className="eyebrow-dot green" />
                                                <span className="text-size-regular text-color-light-grey">Free Estimate</span>
                                                <span className="eyebrow-dot green" />
                                            </div>
                                            <h2 className="heading-style-h2 text-color-white">
                                                Get your free septic service estimate <span className="text-color-green">— no obligation.</span>
                                            </h2>
                                        </div>
                                        <div className="text-wrapper size-450px">
                                            <div className="flex-v gap-1-25rem">
                                                <p className="text-size-large text-color-white">
                                                    We&apos;ll assess your septic needs and provide transparent, upfront pricing.
                                                </p>
                                                <Link href="tel:8282541920" className="button is-white">
                                                    <span>Call for Free Estimate</span>
                                                    <div className="icon-32px"><ArrowIcon /></div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-v gap-3rem">
                                        <div className="text-wrapper">
                                            <p className="text-size-large is-24px text-color-white">
                                                Honest pricing with no hidden fees. We explain everything before we start.
                                            </p>
                                        </div>
                                        <div className="benchmark-grid">
                                            <div className="benchmark-item">
                                                <div className="benchmark-icon">✓</div>
                                                <p className="text-size-large text-color-white text-weight-medium">
                                                    Free, no-obligation estimates
                                                </p>
                                            </div>
                                            <div className="benchmark-item">
                                                <div className="benchmark-icon">✓</div>
                                                <p className="text-size-large text-color-white text-weight-medium">
                                                    Transparent, upfront pricing
                                                </p>
                                            </div>
                                            <div className="benchmark-item">
                                                <div className="benchmark-icon">✓</div>
                                                <p className="text-size-large text-color-white text-weight-medium">
                                                    Same-day service available
                                                </p>
                                            </div>
                                            <div className="benchmark-item">
                                                <div className="benchmark-icon">✓</div>
                                                <p className="text-size-large text-color-white text-weight-medium">
                                                    Satisfaction guaranteed
                                                </p>
                                            </div>
                                            <div className="benchmark-item">
                                                <div className="benchmark-icon">✓</div>
                                                <p className="text-size-large text-color-white text-weight-medium">
                                                    Licensed & insured professionals
                                                </p>
                                            </div>
                                            <div className="benchmark-item">
                                                <div className="benchmark-icon">✓</div>
                                                <p className="text-size-large text-color-white text-weight-medium">
                                                    30+ years of experience
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="background-pattern">
                                    <img
                                        src="https://cdn.prod.website-files.com/69385e16d68663814109c132/69398bd82470e86fed86a813_Squares-Background-Green.svg"
                                        alt=""
                                        className="image-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="section-regular-padding">
                    <div className="padding-global">
                        <div className="container-large side-border">
                            <div className="grid-2col faq-size">
                                <div className="text-wrapper padding-3rem">
                                    <div className="flex-v gap-1-25rem">
                                        <div className="eyebrow">
                                            <span className="eyebrow-dot green" />
                                            <span className="text-size-regular text-color-grey">FAQs</span>
                                            <span className="eyebrow-dot green" />
                                        </div>
                                        <h2 className="heading-style-h2">Your questions,<br />answered</h2>
                                    </div>
                                </div>
                                <div className="faq-container">
                                    {faqs.map((faq, i) => (
                                        <FaqItem key={i} question={faq.question} answer={faq.answer} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section data-wf--cta-section--variant="base" className="section-regular-padding">
                    <div className="padding-global">
                        <div className="container-large side-border">
                            <div className="cta-container h-550px background-color-green">
                                <div className="text-wrapper size-550px align-center z-index-1 mobile-padding">
                                    <div className="flex-v gap-1-25rem align-center">
                                        <h2 className="heading-style-h2 text-align-center">
                                            Ready to schedule your septic service?
                                        </h2>
                                        <div className="text-size-medium text-align-center text-weight-medium">
                                            Call now for fast, reliable service from the septic experts
                                        </div>
                                        <div className="text-size-medium text-color-grey text-align-center">
                                            Trusted by over 5,000 homeowners in Western North Carolina
                                        </div>
                                        <div className="button-wrapper">
                                            <div className="spacer-small"></div>
                                            <Link href="tel:8282541920" className="button w-inline-block">
                                                <div>Call (828) 254-1920</div>
                                                <div className="icon-32px w-embed">
                                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7 8H8.5V18.5H22.4395L19.1895 15.25L20.25 14.1895L25.3105 19.25L20.25 24.3105L19.1895 23.25L22.4395 20H7V8Z" fill="currentcolor" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="background-image">
                                    <img
                                        src="https://cdn.prod.website-files.com/69385e16d68663814109c132/695442158ff7e237e5f5e875_CTA-Background.webp"
                                        loading="lazy"
                                        alt="Background pattern"
                                        className="image-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="footer-section">
                <div className="padding-global">
                    <div className="container-large side-border">
                        <div className="newsletter-wrapper">
                            <h3 className="text-size-large font-alt">Get septic tips and maintenance reminders</h3>
                            <div className="newsletter-form">
                                <input type="email" placeholder="Enter your email" className="newsletter-input" />
                                <button className="button is-primary">Subscribe</button>
                            </div>
                        </div>
                        <div className="footer-grid">
                            <div className="footer-column">
                                <Link href="/" className="footer-logo">
                                    <ClandestineLogo />
                                </Link>
                                <div className="social-wrapper">
                                    {["Facebook", "Google", "Yelp", "BBB"].map((social) => (
                                        <a key={social} href="#" className="social-icon">{social[0]}</a>
                                    ))}
                                </div>
                                <Link href="tel:8282541920" className="button is-primary full-width">
                                    <span>Call (828) 254-1920</span>
                                    <div className="icon-32px"><ArrowIcon /></div>
                                </Link>
                                <p className="text-size-small">All Rights Reserved © Able Septic Tank Service</p>
                            </div>
                            <div className="footer-links">
                                <div className="footer-links-wrapper">
                                    <h4 className="text-size-medium">Services</h4>
                                    <div className="flex-v gap-1rem">
                                        {["Septic Pumping", "Septic Inspections", "Septic Repair", "Grease Traps", "Drain Fields", "Emergency Service", "Tank Risers", "Effluent Filters"].map((link) => (
                                            <Link key={link} href="#" className="footer-link">{link}</Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="footer-links-wrapper">
                                    <h4 className="text-size-medium">Service Areas</h4>
                                    <div className="flex-v gap-1rem">
                                        {["Asheville", "Hendersonville", "Black Mountain", "Weaverville", "Buncombe County", "Henderson County", "Madison County"].map((link) => (
                                            <Link key={link} href="#" className="footer-link">{link}</Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="footer-links-wrapper">
                                    <h4 className="text-size-medium">Company</h4>
                                    <div className="flex-v gap-1rem">
                                        {["About Us", "Our Team", "Reviews", "Contact"].map((link) => (
                                            <Link key={link} href="#" className="footer-link">{link}</Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="footer-links-wrapper">
                                    <h4 className="text-size-medium">Contact</h4>
                                    <div className="flex-v gap-1rem">
                                        <span className="footer-link">(828) 254-1920</span>
                                        <span className="footer-link">info@ableseptic.com</span>
                                        <span className="footer-link">Asheville, NC</span>
                                        <span className="footer-link">Mon-Fri: 8AM-5PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
