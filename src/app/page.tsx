"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";
import { Header, Footer, CookieModal } from "@/components/layout";
import { FinalCta } from "@/components/marketing/final-cta";
import { BusinessSizesSection } from "./components/business-sizes-section";
import { HeroSection } from "./components/hero-section";
import { FeaturesSection } from "./components/features-section";
import { StatsNew } from "./components/stats-new";
import { WhatsIncluded } from "./components/whats-included";
import { DecorativeDivider } from "./components/decorative-divider";

// Arrow Icon
const ArrowIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 8H8.5V18.5H22.4395L19.1895 15.25L20.25 14.1895L25.3105 19.25L20.25 24.3105L19.1895 23.25L22.4395 20H7V8Z" fill="currentColor" />
    </svg>
);

// Plus Icon for FAQ
const PlusIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.125 14.875H3.5V13.125H13.125V3.5H14.875V13.125H24.5V14.875H14.875V24.5H13.125V14.875Z" fill="currentColor" />
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
            <h1 className="text-4xl lg:text-5xl font-semibold text-primary leading-tight tracking-tight">
                Professional septic tank services for
            </h1>
            <div className="relative mt-2">
                <div className="text-4xl lg:text-5xl font-semibold leading-tight tracking-tight animate-fade-in" style={{ color: '#3fe844' }}>{words[currentIndex]}</div>
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
        <div className="flex items-center justify-center p-4">
            <div className="text-xl text-tertiary">
                <span className="after:content-['|'] after:animate-blink">{text}</span>
            </div>
        </div>
    );
};

// FAQ Item Component
const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="border-b border-tertiary px-6 py-5 cursor-pointer transition-colors duration-200 hover:bg-secondary"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex justify-between items-center gap-4">
                <div className="text-lg font-medium text-primary">{question}</div>
                <div className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                    <PlusIcon />
                </div>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pt-4" : "max-h-0"}`}>
                <div className="text-base text-tertiary">{answer}</div>
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
        <div className="border border-tertiary">
            <div className="flex flex-col">
                <div className="flex flex-col lg:flex-row border-b border-tertiary">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab.name}
                            className={`flex-1 p-5 border-b lg:border-b-0 lg:border-r border-tertiary last:border-r-0 cursor-pointer relative text-left transition-colors duration-200 hover:bg-secondary ${activeTab === index ? "bg-secondary" : ""}`}
                            onClick={() => setActiveTab(index)}
                        >
                            <div className="flex items-center gap-3 relative z-10">
                                <div className="text-2xl" style={{ color: tab.color }}>●</div>
                                <div className="text-base text-primary">{tab.name}</div>
                            </div>
                            <div
                                className="absolute bottom-0 left-0 h-[3px] transition-all duration-300"
                                style={{ backgroundColor: tab.color, width: activeTab === index ? "100%" : "0%" }}
                            />
                        </button>
                    ))}
                </div>
                <div className="animate-fade-in">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="flex flex-col gap-16 p-8 lg:p-12">
                            <div className="flex flex-col gap-5">
                                <div className="flex items-center gap-3">
                                    <div className="text-4xl" style={{ color: tabs[activeTab].color }}>●</div>
                                    <div className="text-base text-primary">{tabs[activeTab].name}</div>
                                </div>
                                <h3 className="text-2xl font-semibold tracking-tight text-primary">{tabs[activeTab].title}</h3>
                                <div className="text-lg text-tertiary leading-relaxed">{tabs[activeTab].description}</div>
                            </div>
                            <div className="flex flex-col">
                                {tabs[activeTab].features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-4 py-3 border-b border-tertiary last:border-b-0">
                                        <div className="size-8 flex items-center justify-center text-lg font-semibold" style={{ color: '#16b364' }}>✓</div>
                                        <div className="text-base text-primary">{feature}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center justify-center min-h-[400px] border-t lg:border-t-0 lg:border-l border-tertiary bg-secondary">
                            <div
                                className="w-full h-full min-h-[400px] flex items-center justify-center"
                                style={{ backgroundColor: tabs[activeTab].color + "20" }}
                            >
                                <div className="text-2xl font-semibold" style={{ color: tabs[activeTab].color }}>
                                    {tabs[activeTab].name}
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

    const services = [
        { title: "Septic Pumping", desc: "Professional septic tank pumping to keep your system running efficiently and prevent costly backups.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80" },
        { title: "Septic Inspections", desc: "NC-certified inspections for real estate transactions, system assessments, and compliance verification.", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80" },
        { title: "Septic Repair", desc: "Expert repair services for tanks, drain fields, distribution boxes, and all septic components.", img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80" },
        { title: "Grease Traps", desc: "Commercial grease trap cleaning and maintenance to keep your business compliant with regulations.", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80" },
        { title: "Drain Field Services", desc: "Installation, repair, and restoration of drain fields to ensure proper effluent distribution.", img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80" },
        { title: "Emergency Service", desc: "24/7 emergency septic services for urgent situations that can't wait for business hours.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
        { title: "Tank Risers", desc: "Easy access risers for convenient tank maintenance and inspection without digging.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80" },
        { title: "Effluent Filters", desc: "High-quality filters to protect your drain field from solid waste and extend system life.", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80" },
        { title: "Bacteria Additives", desc: "Biological treatments to maintain healthy septic system bacteria and improve performance.", img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80" },
    ];

    return (
        <div className="w-full min-h-screen">
            {/* Header */}
            <Header />

            <main>
                {/* Hero Section */}
                <HeroSection />

                {/* Stats Section */}
                <StatsNew />

                {/* Features Section */}
                <FeaturesSection />

                {/* Decorative Divider */}
                <DecorativeDivider />

                {/* What's Included Section */}
                <WhatsIncluded />

                {/* Decorative Divider */}
                <DecorativeDivider />

                {/* Business Sizes Section */}
                <BusinessSizesSection />

                {/* CTA Section */}
                <section className="py-16">
                    <div className="px-6 lg:px-10">
                        <div className="max-w-[1440px] mx-auto">
                            <div className="bg-secondary p-12 lg:p-20 flex flex-col items-center justify-center min-h-[430px]">
                                <div className="flex flex-col gap-8 max-w-2xl items-center">
                                    <h2 className="text-4xl font-semibold tracking-tight text-center text-primary">
                                        What septic service do you need today?
                                    </h2>
                                    <TypewriterText />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tabs Section */}
                <section className="py-16">
                    <div className="px-6 lg:px-10">
                        <div className="max-w-[1440px] mx-auto">
                            <TabsSection />
                        </div>
                    </div>
                </section>

                {/* Services Grid Section */}
                <section className="py-16">
                    <div className="px-6 lg:px-10">
                        <div className="max-w-[1440px] mx-auto">
                            <div className="p-8 lg:p-12">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div className="flex flex-col gap-6">
                                        <div className="inline-flex items-center gap-3">
                                            <span className="size-3.5">✦</span>
                                            <span className="text-sm text-tertiary">Our Services</span>
                                            <span className="size-3.5">✦</span>
                                        </div>
                                        <div className="max-w-xl">
                                            <h2 className="text-4xl font-semibold tracking-tight text-primary">Comprehensive septic services for every need</h2>
                                        </div>
                                    </div>
                                    <div className="flex items-end">
                                        <p className="text-base text-tertiary">
                                            From routine maintenance to emergency repairs, we provide complete septic system services for residential and commercial properties throughout Western North Carolina.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-8 lg:px-12">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                                    {services.map((service, i) => (
                                        <div key={i} className="border border-tertiary border-r-0 border-b-0 last:border-r md:[&:nth-child(2n)]:border-r lg:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(3n)]:border-r [&:nth-last-child(-n+3)]:border-b bg-primary transition-colors hover:bg-secondary">
                                            <div className="aspect-video overflow-hidden border-b border-tertiary">
                                                <img src={service.img} loading="lazy" alt={service.title} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex flex-col gap-3 p-6">
                                                <div className="text-xl font-medium text-primary">{service.title}</div>
                                                <div className="text-sm text-tertiary">{service.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full px-8 lg:px-12 mt-0">
                                <Link href="tel:8282541920" className="w-full flex items-center justify-center gap-2 px-8 py-5 text-base bg-success-solid text-primary-solid transition-all hover:bg-success-primary group">
                                    <span>Call Now: (828) 254-1920</span>
                                    <div className="size-8 flex items-center justify-center transition-transform group-hover:-rotate-90 group-hover:bg-success-primary rounded">
                                        <ArrowIcon />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Free Estimate Section */}
                <section className="py-16">
                    <div className="px-6 lg:px-10">
                        <div className="max-w-[1440px] mx-auto">
                            <div className="relative p-10 lg:p-16 bg-primary-solid overflow-hidden min-h-[600px]">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
                                    <div className="flex flex-col gap-16">
                                        <div className="flex flex-col gap-5">
                                            <div className="inline-flex items-center gap-3">
                                                <span className="size-2 rounded-full bg-success-solid" />
                                                <span className="text-sm text-gray-400">Free Estimate</span>
                                                <span className="size-2 rounded-full bg-success-solid" />
                                            </div>
                                            <h2 className="text-4xl font-semibold tracking-tight text-white">
                                                Get your free septic service estimate <span className="text-success-primary">— no obligation.</span>
                                            </h2>
                                        </div>
                                        <div className="max-w-md flex flex-col gap-5">
                                            <p className="text-lg text-white leading-relaxed">
                                                We&apos;ll assess your septic needs and provide transparent, upfront pricing.
                                            </p>
                                            <Link href="tel:8282541920" className="inline-flex items-center gap-2 px-6 py-4 text-sm font-medium bg-white text-primary-solid transition-all hover:bg-gray-100 w-fit group">
                                                <span>Call for Free Estimate</span>
                                                <div className="size-8 flex items-center justify-center transition-transform group-hover:-rotate-90 group-hover:bg-success-primary rounded">
                                                    <ArrowIcon />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-12">
                                        <p className="text-2xl text-white leading-relaxed">
                                            Honest pricing with no hidden fees. We explain everything before we start.
                                        </p>
                                        <div className="grid grid-cols-2 gap-3">
                                            {[
                                                { title: "Free estimates", desc: "No-obligation quotes" },
                                                { title: "Transparent pricing", desc: "No hidden fees" },
                                                { title: "Same-day service", desc: "Fast response times" },
                                                { title: "100% Guaranteed", desc: "Satisfaction promise" },
                                                { title: "Licensed & insured", desc: "Certified professionals" },
                                                { title: "30+ years", desc: "Trusted experience" },
                                            ].map((item, i) => (
                                                <div key={i} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/15 to-white/5 p-[1px] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-white/10">
                                                    <div className="relative flex items-start gap-4 rounded-2xl bg-gradient-to-br from-white/10 to-transparent p-5 backdrop-blur-md">
                                                        <div className="relative flex size-12 shrink-0 items-center justify-center">
                                                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 opacity-90" />
                                                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 to-transparent" />
                                                            <svg className="relative size-6 text-white drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M20 6L9 17l-5-5" />
                                                            </svg>
                                                        </div>
                                                        <div className="flex flex-col gap-1">
                                                            <p className="text-base font-semibold text-white leading-tight">{item.title}</p>
                                                            <p className="text-sm text-white/70">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-0 opacity-30 pointer-events-none">
                                    <img src="https://cdn.prod.website-files.com/69385e16d68663814109c132/69398bd82470e86fed86a813_Squares-Background-Green.svg" alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16">
                    <div className="px-6 lg:px-10">
                        <div className="max-w-[1440px] mx-auto border-l border-r border-tertiary">
                            <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr]">
                                <div className="p-8 lg:p-12">
                                    <div className="flex flex-col gap-5">
                                        <div className="inline-flex items-center gap-3">
                                            <span className="size-2 rounded-full bg-success-solid" />
                                            <span className="text-sm text-tertiary">FAQs</span>
                                            <span className="size-2 rounded-full bg-success-solid" />
                                        </div>
                                        <h2 className="text-4xl font-semibold tracking-tight text-primary">Your questions,<br />answered</h2>
                                    </div>
                                </div>
                                <div className="border-t lg:border-t-0 lg:border-l border-tertiary">
                                    {faqs.map((faq, i) => (
                                        <FaqItem key={i} question={faq.question} answer={faq.answer} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <FinalCta />
            </main>

            {/* Footer */}
            <Footer />

            {/* Cookie Modal */}
            <CookieModal />

            {/* Tailwind Animations - Add to globals.css */}
            <style jsx global>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                @keyframes ticker {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marquee-reverse {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease;
                }
                .after\\:animate-blink::after {
                    animation: blink 1s infinite;
                }
                .animate-ticker {
                    animation: ticker 20s linear infinite;
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
                .animate-marquee-reverse {
                    animation: marquee-reverse 20s linear infinite;
                }
            `}</style>
        </div>
    );
}
