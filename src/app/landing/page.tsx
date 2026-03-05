"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./styles.css";

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
        "social platforms",
        "review sites",
        "brand discussions",
        "product feedback",
        "forum threads",
        "public ratings",
        "global conversations",
        "market trends",
        "community posts",
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="rotate-wrapper">
            <h1 className="heading-style-h1">
                Access powerful data through one reliable integration for
            </h1>
            <div className="rotate-absolute">
                <div className="h1-rotate">{words[currentIndex]}</div>
            </div>
        </div>
    );
};

// Typewriter Component
const TypewriterText = () => {
    const phrases = [
        "Real-time crisis detection system",
        "Competitive intelligence dashboard",
        "Customer sentiment tracker",
        "Trend forecasting engine",
        "Brand health monitor",
        "Product feedback aggregator",
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
    }, [text, isDeleting, phraseIndex]);

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
            name: "Speed",
            color: "#FFD521",
            title: "Get answers in seconds",
            description: "Access 5+ years of historical data instantly through archive search, or collect fresh conversations in real-time when you need current information.",
            features: [
                "Archive search returns results in seconds",
                "Real-time collection for emerging topics",
                "5+ years of historical depth available instantly",
            ],
        },
        {
            name: "Depth",
            color: "#3981FF",
            title: "Complete context, not just snippets",
            description: "Get full posts with metadata, engagement signals, and author info. Threads, replies, quotes — complete conversations that reveal real sentiment.",
            features: [
                "Full post content with metadata",
                "Complete engagement metrics",
                "Threaded conversations preserved",
            ],
        },
        {
            name: "Coverage",
            color: "#FF930F",
            title: "150+ sources, one integration",
            description: "Social platforms, review sites, forums, news — collected, normalized, and delivered through a single API. Add sources without re-engineering.",
            features: [
                "150+ social and review sources",
                "Multi-language global coverage",
                "New sources added on request",
            ],
        },
        {
            name: "Relevance",
            color: "#A72BFF",
            title: "Only the data you need",
            description: "Boolean queries with precision filtering. No noise, no irrelevant mentions — just the conversations that matter for your analysis.",
            features: [
                "Advanced boolean query support",
                "Precision filtering options",
                "Spam and bot detection",
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

// Main Landing Page Component
export default function LandingPage() {
    const faqs = [
        { question: "What types of data does Datashake collect?", answer: "Everything publicly available, with the depth your use case needs. Social posts, reviews, forums, news, and e-commerce data from 150+ sources. Complete threads, engagement metrics, 5+ years of history. All normalized and analysis-ready." },
        { question: "How is Datashake different from other social listening tools?", answer: "We're infrastructure, not an end-user platform. You get the raw data layer (150+ sources vs. typical 20-30) with deeper coverage, faster access, and no per-seat fees. We replace multiple vendor relationships with one reliable integration that powers your products and analytics." },
        { question: "Can Datashake access private social media content?", answer: "No, we only collect publicly available data accessible without login." },
        { question: "How quickly can I access historical data?", answer: "Instantly. Our archive search returns 5+ years of historical data in seconds with no advance setup required." },
        { question: "What sources does Datashake cover?", answer: "Major social platforms, 100+ review sites, news outlets, forums, and e-commerce channels. Multi-language with global coverage." },
        { question: "How does pricing work?", answer: "We use a credit-based model where you pay only for data consumed. Your per-mention cost decreases automatically as volume grows, with no per-seat fees." },
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
                            <div className="dropdown">
                                <div className="dropdown-toggle">Product</div>
                            </div>
                            <div className="dropdown">
                                <div className="dropdown-toggle">Solutions</div>
                            </div>
                            <div className="dropdown">
                                <div className="dropdown-toggle">Resources</div>
                            </div>
                            <div className="dropdown">
                                <div className="dropdown-toggle">Company</div>
                            </div>
                        </div>
                        <div className="button-group">
                            <Link href="/login" className="button is-secondary">Login</Link>
                            <Link href="/demo" className="button is-primary-dark">Book a call</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="main-wrapper">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="padding-global">
                        <div className="container-large side-border">
                            <div className="spacer-medium" />
                            <div className="grid-2col">
                                <div className="text-wrapper padding-3rem">
                                    <div className="flex-v gap-full">
                                        <div className="flex-v">
                                            <div className="eyebrow-main">
                                                <span className="text-size-small text-color-grey">We've launched our new homepage 🎉</span>
                                            </div>
                                            <RotatingText />
                                        </div>
                                        <div className="flex-v gap-2rem">
                                            <div className="text-wrapper size-450px">
                                                <p className="text-size-large text-color-grey">
                                                    Replace multiple vendors with one partner you can trust for comprehensive, fast and scalable data from 150+ sources.
                                                </p>
                                            </div>
                                            <div className="button-group">
                                                <Link href="/demo" className="button is-primary">
                                                    <span>Book a demo</span>
                                                    <div className="icon-32px"><ArrowIcon /></div>
                                                </Link>
                                                <Link href="/platform" className="button is-secondary">
                                                    Explore the platform
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="image-wrapper border-left">
                                    <img
                                        src="https://cdn.prod.website-files.com/69385e16d68663814109c132/6938803c45536fc95cbcf5fb_Hero-Image.webp"
                                        alt="Datashake dashboard preview"
                                        className="hero-image"
                                    />
                                </div>
                            </div>
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
                                    Powering data intelligence for leading platforms & global brands
                                </p>
                            </div>
                            <div className="spacer-small" />
                            <div className="logo-grid">
                                {["Qualtrics", "Yext", "Home Depot", "Brightlocal", "Epicor", "Talkwalker"].map((brand) => (
                                    <div key={brand} className="logo-item">
                                        <div className="logo-placeholder">{brand}</div>
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
                                        <h2 className="heading-style-h2">You're making decisions on incomplete data foundations</h2>
                                        <div className="spacer-tiny" />
                                        <p className="text-size-large text-color-grey">
                                            Public data powers modern business decisions, yet most teams rely on fragile, stitched-together systems to collect it.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="problem-content">
                                <p className="text-size-large text-color-grey">
                                    Juggling multiple providers means your team is always fixing something. Different data formats drain engineering hours, coverage gaps mean missing critical data daily. And when a provider's API changes or a platform goes down, your entire pipeline breaks.
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
                                        <h2 className="heading-style-h2">Get the most complete data to power your insights</h2>
                                        <div className="spacer-tiny" />
                                        <p className="text-size-large">
                                            Datashake provides the reliable foundation of public data that your business has always needed.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="solution-content">
                                <p className="text-size-large text-color-grey">
                                    We unify 150+ social media and online review sources into one resilient API, standardizing formats and absorbing platform shifts so your pipelines never fail.
                                </p>
                                <div className="spacer-medium" />
                                <Link href="/demo" className="button is-primary">
                                    <span>See Datashake in action</span>
                                    <div className="icon-32px"><ArrowIcon /></div>
                                </Link>
                            </div>
                            <div className="spacer-large" />
                            <div className="features-grid">
                                {[
                                    { title: "98.3% uptime", desc: "Proven reliability across sources with proactive monitoring" },
                                    { title: "Enterprise security", desc: "Encryption at every step with compliance-ready infrastructure" },
                                    { title: "Massive scale", desc: "Scale your workflow to hundreds of millions of daily fetches" },
                                    { title: "Industry standard", desc: "Proven reliability across sources with proactive monitoring" },
                                    { title: "Earned media coverage", desc: "Detect conversations outside channels you own" },
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
                                        What would you build with unlimited access to public conversation data?
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

                {/* Power Your Data Section */}
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
                                            <div className="text-size-regular text-color-grey">Power Your Data</div>
                                            <img
                                                src="https://cdn.prod.website-files.com/69385e16d68663814109c132/693949364cde9b1d0482c0ed_Eyebrow-Icon-2.svg"
                                                loading="lazy"
                                                alt=""
                                                className="icon-14px"
                                            />
                                        </div>
                                        <div className="text-wrapper size-550px">
                                            <h2 className="heading-style-h2">What global companies use Datashake for</h2>
                                        </div>
                                    </div>
                                    <div className="text-align-left position-bottom">
                                        <div className="text-size-medium text-color-grey">
                                            From trend detection and crisis monitoring to competitive intelligence and risk assessment — we support all your use cases with the most comprehensive data coverage available.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-3col side-3rem">
                                <div className="grid-3col tablet-2col">
                                    <div className="grid-item is-illustration">
                                        <div className="image-wrapper grid-image">
                                            <img
                                                src="https://cdn.prod.website-files.com/69385e16d68663814109c132/693b2752e7826c75201aa9c2_Crisis-Illustration.svg"
                                                loading="lazy"
                                                alt="illustration depicting crises and risk monitoring from social platforms"
                                                className="image-full"
                                            />
                                        </div>
                                        <div className="flex-v gap-12px padding-1-5rem">
                                            <div className="text-size-large is-24px text-weight-medium">Crisis Monitoring &amp; Risk Detection</div>
                                            <div className="text-size-regular text-color-grey">Detect potential crises before they escalate. Monitor reputation threats, product issues, and negative sentiment spikes in real-time across all channels.</div>
                                        </div>
                                    </div>
                                    <div className="grid-item is-illustration">
                                        <div className="image-wrapper grid-image">
                                            <img
                                                src="https://cdn.prod.website-files.com/69385e16d68663814109c132/693aaa22543d41b64af90bdb_Benefit-Illustration.svg"
                                                loading="lazy"
                                                alt="illustration depicting predicted data volumes"
                                                className="image-full"
                                            />
                                        </div>
                                        <div className="flex-v gap-12px padding-1-5rem">
                                            <div className="text-size-large is-24px text-weight-medium">Trend Detection</div>
                                            <div className="text-size-regular text-color-grey">Identify emerging trends before they become mainstream. Track conversation volume and topic evolution across any source you need.</div>
                                        </div>
                                    </div>
                                    <div className="grid-item is-illustration">
                                        <div className="image-wrapper grid-image">
                                            <img
                                                src="https://cdn.prod.website-files.com/69385e16d68663814109c132/696a45da0f1229f20a28f1e4_RPFS-Illustration.webp"
                                                loading="lazy"
                                                alt="Diagram listing review sites and social media platforms with related content types"
                                                className="image-full"
                                            />
                                        </div>
                                        <div className="flex-v gap-12px padding-1-5rem">
                                            <div className="text-size-large is-24px text-weight-medium">Win Competitive RFPs</div>
                                            <div className="text-size-regular text-color-grey">Win enterprise contracts with deep coverage from 150+ sources that becomes the deciding factor in RFP evaluations.</div>
                                        </div>
                                    </div>
                                    <div className="grid-item is-illustration">
                                        <div className="image-wrapper grid-image">
                                            <img
                                                src="https://cdn.prod.website-files.com/69385e16d68663814109c132/693b280abb79699bcdc60aed_Deals-Illustration.svg"
                                                loading="lazy"
                                                alt="illustration showing deal closure increases with Datashake API"
                                                className="image-full"
                                            />
                                        </div>
                                        <div className="flex-v gap-12px padding-1-5rem">
                                            <div className="text-size-large is-24px text-weight-medium">Close More Deals</div>
                                            <div className="text-size-regular text-color-grey">Close more deals when you integrate Datashake data. Get access to coverage that becomes undeniable competitive differentiation</div>
                                        </div>
                                    </div>
                                    <div className="grid-item is-illustration">
                                        <div className="image-wrapper grid-image">
                                            <img
                                                src="https://cdn.prod.website-files.com/69385e16d68663814109c132/693b283e2069033d2ea99e8f_Competitive-Illustration.svg"
                                                loading="lazy"
                                                alt="illustration showing competitive analysis of data streams"
                                                className="image-full"
                                            />
                                        </div>
                                        <div className="flex-v gap-12px padding-1-5rem">
                                            <div className="text-size-large is-24px text-weight-medium">Competitive Analysis</div>
                                            <div className="text-size-regular text-color-grey">Track competitive activity across all channels simultaneously. Monitor pricing, promotions, product launches, and more to compete smarter.</div>
                                        </div>
                                    </div>
                                    <div className="grid-item is-illustration">
                                        <div className="image-wrapper grid-image">
                                            <img
                                                src="https://cdn.prod.website-files.com/69385e16d68663814109c132/695441357de4841a1da03c74_Retain-Illustration.webp"
                                                loading="lazy"
                                                alt="Map of North America with orange rectangular markers indicating locations"
                                                className="image-full"
                                            />
                                        </div>
                                        <div className="flex-v gap-12px padding-1-5rem">
                                            <div className="text-size-large is-24px text-weight-medium">Retain Enterprise Customers</div>
                                            <div className="text-size-regular text-color-grey">Retains your most valuable enterprise customers by delivering the comprehensive data your clients need across global markets.</div>
                                        </div>
                                    </div>
                                    <div className="grid-item is-illustration">
                                        <div className="image-wrapper grid-image">
                                            <img
                                                src="https://cdn.prod.website-files.com/69385e16d68663814109c132/69544152ed6bbdf3beee0095_Due-Illustration.webp"
                                                loading="lazy"
                                                alt="Task labeled Hire 2 software engineers to improve face ID marked as approved"
                                                className="image-full"
                                            />
                                        </div>
                                        <div className="flex-v gap-12px padding-1-5rem">
                                            <div className="text-size-large is-24px text-weight-medium">Due Diligence &amp; KYC</div>
                                            <div className="text-size-regular text-color-grey">Finance teams strengthen KYC processes and risk assessment with comprehensive social and review data.</div>
                                        </div>
                                    </div>
                                    <div className="grid-item is-illustration">
                                        <div className="image-wrapper grid-image">
                                            <img
                                                src="https://cdn.prod.website-files.com/69385e16d68663814109c132/693b2866ae8a9eeb03279bd4_Compliance-Illustration.svg"
                                                loading="lazy"
                                                alt="illustration depicting abstract data streams being scanned"
                                                className="image-full"
                                            />
                                        </div>
                                        <div className="flex-v gap-12px padding-1-5rem">
                                            <div className="text-size-large is-24px text-weight-medium">Regulatory Compliance</div>
                                            <div className="text-size-regular text-color-grey">Pharmaceutical companies monitor adverse events and post-market surveillance through complete coverage that manual monitoring can&apos;t match.</div>
                                        </div>
                                    </div>
                                    <div className="grid-item is-illustration">
                                        <div className="image-wrapper grid-image">
                                            <img
                                                src="https://cdn.prod.website-files.com/69385e16d68663814109c132/695441741c57ad046429eddb_Client-Illustration.webp"
                                                loading="lazy"
                                                alt="Report highlighting great customer response to new features with 11,234 mentions"
                                                className="image-full"
                                            />
                                        </div>
                                        <div className="flex-v gap-12px padding-1-5rem">
                                            <div className="text-size-large is-24px text-weight-medium">Client Reporting</div>
                                            <div className="text-size-regular text-color-grey">Agencies deliver stronger client insights with comprehensive data coverage, flexible access, and predictable pricing.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="button-wrapper _100">
                                <Link href="/demo" className="button full-width-btn w-inline-block">
                                    <div>Book a demo</div>
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

                {/* Free Benchmark Trial Section */}
                <section className="section-regular-padding">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="container-wrapper background-color-dark-green">
                                <div className="grid-2col gap-5rem z-index-1">
                                    <div className="flex-v gap-full">
                                        <div className="flex-v gap-1-25rem">
                                            <div className="eyebrow">
                                                <span className="eyebrow-dot green" />
                                                <span className="text-size-regular text-color-light-grey">Free Benchmark Trial</span>
                                                <span className="eyebrow-dot green" />
                                            </div>
                                            <h2 className="heading-style-h2 text-color-white">
                                                Test your use case with Datashake <span className="text-color-green">— for free.</span>
                                            </h2>
                                        </div>
                                        <div className="text-wrapper size-450px">
                                            <div className="flex-v gap-1-25rem">
                                                <p className="text-size-large text-color-white">
                                                    We'll run your search to show you how Datashake uncovers more data.
                                                </p>
                                                <Link href="/demo" className="button is-white">
                                                    <span>Start your free benchmark check</span>
                                                    <div className="icon-32px"><ArrowIcon /></div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-v gap-3rem">
                                        <div className="text-wrapper">
                                            <p className="text-size-large is-24px text-color-white">
                                                Detect data gaps in your infrastructure and expand your data coverage seamlessly.
                                            </p>
                                        </div>
                                        <div className="benchmark-grid">
                                            <div className="benchmark-item">
                                                <div className="benchmark-icon">✓</div>
                                                <p className="text-size-large text-color-white text-weight-medium">
                                                    Free, no-commitment benchmark test
                                                </p>
                                            </div>
                                            <div className="benchmark-item">
                                                <div className="benchmark-icon">✓</div>
                                                <p className="text-size-large text-color-white text-weight-medium">
                                                    Investigate any search request and topic
                                                </p>
                                            </div>
                                            <div className="benchmark-item">
                                                <div className="benchmark-icon">✓</div>
                                                <p className="text-size-large text-color-white text-weight-medium">
                                                    Compare results side-by-side
                                                </p>
                                            </div>
                                            <div className="benchmark-item">
                                                <div className="benchmark-icon">✓</div>
                                                <p className="text-size-large text-color-white text-weight-medium">
                                                    Expand your current source coverage
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
                                            Book a call with one of our data experts
                                        </h2>
                                        <div className="text-size-medium text-align-center text-weight-medium">
                                            Schedule a quick call to see how Datashake can power your platform&apos;s next leap
                                        </div>
                                        <div className="text-size-medium text-color-grey text-align-center">
                                            Trusted by enterprise brands and data platforms worldwide
                                        </div>
                                        <div className="button-wrapper">
                                            <div className="spacer-small"></div>
                                            <Link href="/demo" className="button w-inline-block">
                                                <div>Book a demo</div>
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
                                        alt="White background with thin dashed green lines connecting small solid green rectangles in a stepped pattern across the image."
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
                            <h3 className="text-size-large font-alt">Get social data insights delivered fresh</h3>
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
                                    {["LinkedIn", "Facebook", "Instagram", "X"].map((social) => (
                                        <a key={social} href="#" className="social-icon">{social[0]}</a>
                                    ))}
                                </div>
                                <Link href="/demo" className="button is-primary full-width">
                                    <span>Book a demo</span>
                                    <div className="icon-32px"><ArrowIcon /></div>
                                </Link>
                                <p className="text-size-small">All Rights Reserved © Datashake</p>
                            </div>
                            <div className="footer-links">
                                <div className="footer-links-wrapper">
                                    <h4 className="text-size-medium">Solutions</h4>
                                    <div className="flex-v gap-1rem">
                                        {["Customer Experience Tools", "Social Listening", "Reputation Management", "Marketing Automation", "Retail", "Pharmaceutical", "Finance", "Agencies"].map((link) => (
                                            <Link key={link} href="#" className="footer-link">{link}</Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="footer-links-wrapper">
                                    <h4 className="text-size-medium">Product</h4>
                                    <div className="flex-v gap-1rem">
                                        {["Platform", "Enterprise", "Why Datashake", "Status"].map((link) => (
                                            <Link key={link} href="#" className="footer-link">{link}</Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="footer-links-wrapper">
                                    <h4 className="text-size-medium">Company</h4>
                                    <div className="flex-v gap-1rem">
                                        {["About", "Blog", "Book a Demo", "Contact"].map((link) => (
                                            <Link key={link} href="#" className="footer-link">{link}</Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="footer-links-wrapper">
                                    <h4 className="text-size-medium">Legal</h4>
                                    <div className="flex-v gap-1rem">
                                        {["Terms of Service", "Privacy Policy"].map((link) => (
                                            <Link key={link} href="#" className="footer-link">{link}</Link>
                                        ))}
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
