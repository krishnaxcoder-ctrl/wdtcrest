"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./styles.css";

// Logo SVG Component
const DatashakeLogo = () => (
    <div className="nav_brand">
        <div className="green-logo">
            <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6302 0H14.6702V7.81303H18.6302V0Z" fill="#3FE844" />
                <path d="M26.8891 10.4685L25.6011 6.61615L19.3742 8.71152L20.6621 12.5639L26.8891 10.4685Z" fill="#3FE844" />
                <path d="M18.755 17.0969H14.7951V28.0086H18.755V17.0969Z" fill="#3FE844" />
                <path d="M11.3504 14.5378L10.6019 10.5936L9.22558e-05 12.6186L0.748558 16.5627L11.3504 14.5378Z" fill="#3FE844" />
                <path d="M14.3405 17.4597L11.2549 14.9028L2.80142 25.1701L5.88696 27.7271L14.3405 17.4597Z" fill="#3FE844" />
                <path d="M21.2513 13.1566L18.5369 16.0823L24.2857 21.4507L27.0001 18.5251L21.2513 13.1566Z" fill="#3FE844" />
                <path d="M4.68544 1.13842L2.46859 4.43037L11.471 10.5322L13.6879 7.24021L4.68544 1.13842Z" fill="#3FE844" />
            </svg>
        </div>
        <div className="text-logo">
            <svg width="115" height="18" viewBox="0 0 115 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M114.367 12.7908C113.719 15.6225 111.607 17.3504 108.439 17.3504C104.528 17.3504 102.2 14.7586 102.2 10.7511C102.2 6.83947 104.48 4.24774 108.391 4.24774C111.799 4.24774 114.439 6.35952 114.463 11.447H105.2C105.416 13.8467 106.808 15.0466 108.487 15.0466C109.903 15.0466 110.935 14.2547 111.367 12.7908H114.367Z" fill="#0D0D0D" />
                <path d="M89.8404 16.9423V0.0960693H92.8161V9.2871L97.1837 4.75158H100.951L97.3276 8.63916L101.911 16.9183H98.5995L95.2879 10.583L92.8161 13.1747V16.9423H89.8404Z" fill="#0D0D0D" />
                <path d="M80.2239 17.3742C77.7761 17.3742 75.9043 15.8144 75.9043 13.5586C75.9043 7.84724 84.2795 11.0629 84.2795 7.89524C84.2795 6.86335 83.1996 6.52738 82.2157 6.52738C81.2318 6.52738 79.8399 6.91134 79.408 8.54317H76.2643C76.9122 4.91955 80.2719 4.27162 82.2637 4.27162C84.4954 4.27162 87.1832 5.01554 87.1832 7.94323V16.8943H84.3275V15.0225H84.2555C83.4635 16.6543 82.1917 17.3742 80.2239 17.3742Z" fill="#0D0D0D" />
                <path d="M62.7231 16.9183V0.0960693H65.6748V6.88735H65.7468C66.4427 5.03955 67.8825 4.22363 69.6583 4.22363C72.2501 4.22363 74.0019 6.02344 74.0019 8.92714V16.9183H70.9302V9.55107C70.9302 7.82325 69.9703 6.83936 68.5545 6.83936C66.7786 6.83936 65.7947 8.54318 65.7947 10.295V16.9183H62.7231Z" fill="#0D0D0D" />
                <path d="M55.2038 17.2543C52.852 17.2543 49.8284 16.6304 49.3484 12.7908H52.1321C52.5401 14.6866 54.0759 15.0225 55.2758 15.0225C56.7876 15.0225 57.7475 14.4226 57.7475 13.4387C57.7475 12.7908 57.3396 12.2148 55.7797 11.9269L53.9319 11.6149C52.1321 11.2789 49.8284 10.319 49.8284 7.94329C49.8523 5.25557 52.6601 4.27167 54.8678 4.27167C57.3156 4.24768 60.0993 5.08759 60.5792 8.59122H57.6755C57.3396 7.17537 56.4516 6.38345 54.8918 6.38345C53.8359 6.38345 52.804 6.8634 52.804 7.8473C52.804 8.44723 53.164 9.02317 54.7718 9.33514L57.0276 9.74309C59.1874 10.1511 60.6032 11.1589 60.6272 13.3907C60.5552 16.2464 57.9635 17.2543 55.2038 17.2543Z" fill="#0D0D0D" />
                <path d="M40.6414 17.3742C38.1936 17.3742 36.3218 15.8144 36.3218 13.5586C36.3218 7.84724 44.697 11.0629 44.697 7.89524C44.697 6.86335 43.6171 6.52738 42.6332 6.52738C41.6493 6.52738 40.2574 6.91134 39.8255 8.54317H36.6818C37.3297 4.91955 40.6894 4.27162 42.6812 4.27162C44.9129 4.27162 47.6007 5.01554 47.6007 7.94323V16.8943H44.745V15.0225H44.673C43.881 16.6543 42.6092 17.3742 40.6414 17.3742Z" fill="#0D0D0D" />
                <path d="M32.1368 16.9424C30.289 16.9424 29.1611 16.6064 29.1611 14.4946V7.27138H26.9534V4.60766H29.1851V0.840057H32.1848V4.60766H34.6566V7.27138H32.1368V14.1347H34.5606V16.9424H32.1368Z" fill="#0D0D0D" />
                <path d="M18.496 17.3742C16.0483 17.3742 14.1765 15.8144 14.1765 13.5586C14.1765 7.84724 22.5516 11.0629 22.5516 7.89524C22.5516 6.86335 21.4717 6.52738 20.4878 6.52738C19.5039 6.52738 18.1121 6.91134 17.6801 8.54317H14.5364C15.1844 4.91955 18.544 4.27162 20.5358 4.27162C22.7676 4.27162 25.4553 5.01554 25.4553 7.94323V16.8943H22.5996V15.0225H22.5276C21.7357 16.6543 20.4638 17.3742 18.496 17.3742Z" fill="#0D0D0D" />
                <path d="M6.11945 14.8785C8.23122 14.8785 9.19112 13.0067 9.19112 10.775C9.19112 8.51921 8.11124 6.7194 6.07145 6.7194C4.17565 6.7194 3.09577 8.32723 3.09577 10.775C3.09577 13.2227 4.17565 14.8785 6.11945 14.8785ZM12.2148 16.9183H9.26311V15.1905H9.11913C8.35121 16.5824 7.07934 17.3743 5.27953 17.3743C2.03988 17.3743 9.35793e-05 14.5906 9.35793e-05 10.775C9.35793e-05 6.76739 2.06388 4.27166 5.25554 4.27166C7.03135 4.27166 8.4232 5.08757 9.19112 6.45542H9.26311V0.000106812H12.2148V16.9183Z" fill="#0D0D0D" />
            </svg>
        </div>
    </div>
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
                        <DatashakeLogo />
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
                                    <DatashakeLogo />
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
