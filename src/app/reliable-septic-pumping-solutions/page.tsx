"use client";

import Link from "next/link";
import { Header, Footer } from "@/components/layout";

// Arrow Icon
const ArrowIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 8H8.5V18.5H22.4395L19.1895 15.25L20.25 14.1895L25.3105 19.25L20.25 24.3105L19.1895 23.25L22.4395 20H7V8Z" fill="currentColor" />
    </svg>
);

const pumpingServices = [
    { icon: "💧", title: "Residential Septic Pumping", description: "Complete septic tank pumping for homes of all sizes. We recommend pumping every 3-5 years." },
    { icon: "🚛", title: "Commercial Septic Pumping", description: "High-capacity pumping for businesses, restaurants, and commercial properties." },
    { icon: "⏰", title: "Emergency Pumping", description: "24/7 emergency septic pumping when you need immediate assistance." },
    { icon: "🛡️", title: "Grease Trap Pumping", description: "Professional grease trap cleaning for restaurants and food service." },
];

const benefits = [
    "Prevent costly system failures and repairs",
    "Extend the life of your septic system",
    "Protect your property and groundwater",
    "Maintain proper drainage and flow",
    "Avoid unpleasant odors and backups",
    "Stay compliant with local regulations",
];

const process = [
    { step: "1", title: "Schedule Service", description: "Call us or fill out our online form to schedule your appointment." },
    { step: "2", title: "System Assessment", description: "Our technicians locate and assess your septic tank before pumping." },
    { step: "3", title: "Complete Pumping", description: "We thoroughly pump and clean your tank, removing all solids and liquids." },
    { step: "4", title: "Inspection & Report", description: "We inspect the tank condition and provide recommendations." },
];

export default function PumpingPage() {
    return (
        <div className="w-full min-h-screen">
            <Header />

            <main>
                {/* Hero Section */}
                <section
                    className="py-16 md:py-20 bg-secondary"
                    style={{ backgroundImage: 'url(/bg1.png)', backgroundSize: '150%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                >
                    <div className="px-6 lg:px-10">
                        <div className="relative overflow-hidden max-w-7xl mx-auto border-l border-r border-b border-secondary bg-secondary">
                            {/* Decorative gradient circles */}
                            <div className="absolute -left-[15%] -top-[50%] h-[300px] w-[300px] rounded-full opacity-20 blur-[80px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" style={{ background: 'radial-gradient(circle, #33e3cb 0%, transparent 70%)' }} />
                            <div className="absolute -right-[10%] -bottom-[40%] h-[250px] w-[250px] rounded-full opacity-15 blur-[60px] sm:h-[400px] sm:w-[400px] sm:blur-[100px]" style={{ background: 'radial-gradient(circle, #33e3cb 0%, transparent 70%)' }} />
                            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

                            <div className="relative grid items-center lg:grid-cols-5">
                                {/* Left Column - Main Content */}
                                <div className="p-5 sm:p-10 md:p-14 lg:col-span-3 lg:p-20">
                                    <div className="flex items-center gap-2">
                                        <span className="relative flex size-2">
                                            <span className="absolute inline-flex size-full animate-ping rounded-full opacity-75" style={{ backgroundColor: '#33e3cb' }} />
                                            <span className="relative inline-flex size-2 rounded-full" style={{ backgroundColor: '#33e3cb' }} />
                                        </span>
                                        <span className="text-[10px] font-semibold uppercase sm:text-xs" style={{ color: '#33e3cb' }}>Professional Pumping Services</span>
                                    </div>
                                    <h1 className="mt-4 text-2xl font-semibold text-primary sm:mt-5 sm:text-3xl md:text-4xl">
                                        Reliable Septic Pumping Solutions
                                    </h1>
                                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-tertiary sm:mt-4 sm:text-base">
                                        Keep your septic system running smoothly with our professional pumping services.
                                        Serving Asheville and Western North Carolina for over 30 years.
                                    </p>
                                    <div className="mt-6 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                                        <Link href="tel:8282541920" className="group relative flex items-center justify-center gap-2 rounded-xl px-5 py-3 transition-all duration-300 sm:justify-start sm:gap-3 sm:px-7 sm:py-4">
                                            <span className="absolute inset-0 rounded-xl opacity-40 blur-md transition-all duration-300 group-hover:opacity-60 group-hover:blur-lg" style={{ background: 'linear-gradient(to bottom right, #2dd4bf, #33e3cb, #2dd4bf)' }} />
                                            <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 via-white/10 to-white/20 p-[1px]">
                                                <span className="flex h-full w-full items-center justify-center rounded-xl transition-all duration-300" style={{ background: 'linear-gradient(to bottom right, #2dd4bf, #33e3cb, #14b8a6)' }} />
                                            </span>
                                            <div className="relative z-10">
                                                <p className="text-left text-xs font-medium text-white sm:text-sm">Call (828) 254-1920</p>
                                                <p className="hidden text-left text-[10px] text-white/70 sm:block sm:text-xs">Available 24/7 for emergencies</p>
                                            </div>
                                            <span className="relative z-10 hidden h-8 w-px bg-white/20 sm:block" />
                                            <svg className="relative z-10 size-4 sm:size-5 text-white transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24">
                                                <path d="M6 18L18 6M18 6H10M18 6V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                        <Link href="/contact" className="group flex items-center justify-center gap-2 rounded-xl border border-secondary bg-primary px-5 py-3 shadow-sm transition-all hover:shadow-md sm:justify-start sm:gap-3 sm:px-7 sm:py-4" style={{ ['--hover-border' as string]: '#33e3cb' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#33e3cb'} onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}>
                                            <div>
                                                <p className="text-left text-xs font-medium text-primary sm:text-sm">Get Free Quote</p>
                                                <p className="hidden text-left text-[10px] text-tertiary sm:block sm:text-xs">No obligation estimate</p>
                                            </div>
                                            <span className="hidden h-8 w-px bg-secondary sm:block" />
                                            <svg className="size-4 text-tertiary transition-transform group-hover:translate-x-0.5 sm:size-5" fill="none" viewBox="0 0 24 24">
                                                <path d="M6 18L18 6M18 6H10M18 6V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="mt-6 flex flex-wrap items-center gap-4 sm:mt-10 sm:gap-6">
                                        <div className="flex items-center gap-1.5 sm:gap-2">
                                            <svg className="size-3.5 text-success-primary sm:size-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                            <span className="text-[10px] text-tertiary sm:text-xs">Licensed & Insured</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 sm:gap-2">
                                            <svg className="size-3.5 text-success-primary sm:size-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                            <span className="text-[10px] text-tertiary sm:text-xs">30+ Years Experience</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 sm:gap-2">
                                            <svg className="size-3.5 text-success-primary sm:size-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                            <span className="text-[10px] text-tertiary sm:text-xs">NC Certified</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Features */}
                                <div className="border-t border-secondary p-5 sm:p-10 md:p-14 lg:col-span-2 lg:border-l lg:border-t-0 lg:p-14">
                                    <div className="text-left">
                                        <p className="text-[10px] font-semibold uppercase tracking-wider text-success-primary sm:text-xs">Why Choose Our Pumping Services</p>
                                        <ul className="mt-5 space-y-3 sm:mt-8 sm:space-y-4">
                                            {[
                                                "Complete tank pumping & cleaning",
                                                "Inspection during every service",
                                                "Flexible scheduling options",
                                                "Residential & commercial service",
                                                "Emergency pumping available 24/7",
                                            ].map((item) => (
                                                <li key={item} className="flex items-start gap-2 text-left sm:gap-3">
                                                    <svg className="size-4 sm:size-5 shrink-0 text-success-primary mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                    </svg>
                                                    <span className="text-xs text-secondary sm:text-sm">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-6 h-px w-16 bg-secondary sm:mt-8" />
                                        <div className="mt-6 rounded-xl border border-success-primary/30 bg-success-secondary p-3 sm:mt-8 sm:p-4">
                                            <p className="text-xs font-medium text-success-primary sm:text-sm">Free Estimates</p>
                                            <p className="mt-1 text-[10px] text-tertiary sm:text-xs">Call today for a no-obligation quote on your pumping service</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bottom Header Section */}
                <section className="px-6 lg:px-10 bg-primary-solid">
                    <div className="max-w-7xl mx-auto border-t border-2 border-r border-gray-700/70 px-5 sm:px-10 h-[17.5rem] sm:h-[22rem] flex flex-col justify-center gap-6 text-center items-center">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
                            Everything you need in one tool
                        </h2>
                        <p className="max-w-md text-white/70 text-balance sm:text-pretty">
                            Vite+ unifies your entire web development workflow into a single, powerful command-line interface.
                        </p>
                    </div>
                </section>

                {/* Feature Section */}
                <section className="px-6 lg:px-10 bg-primary-solid">
                    <div className="max-w-7xl mx-auto border-2 border-r border-gray-700/70 grid md:grid-cols-[55%_45%] divide-x divide-gray-700/70">
                        {/* Left Column - Content */}
                        <div className="px-5 py-6 md:p-10 flex flex-col justify-between gap-15">
                            <div className="flex flex-col gap-5">
                                <span className="text-white/60 text-xs font-mono uppercase tracking-wide">Professional Service</span>
                                <h4 className="text-white text-2xl font-semibold">Fast &amp; Reliable Pumping</h4>
                                <p className="text-white/70 text-base max-w-[25rem] text-pretty">
                                    Get your septic system serviced quickly and efficiently. Our experienced team ensures thorough pumping with minimal disruption to your day.
                                </p>
                                <ul className="flex flex-col gap-3 mt-2">
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <svg className="size-5 shrink-0 text-success-primary mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                        <span>Same-day service <code className="mx-1 px-1.5 py-0.5 bg-white/10 rounded text-brand-400 text-xs">Available 24/7</code></span>
                                    </li>
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <svg className="size-5 shrink-0 text-success-primary mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                        <span>Complete tank cleaning in under 2 hours</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <svg className="size-5 shrink-0 text-success-primary mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                        <span>Free inspection with every service</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <svg className="size-5 shrink-0 text-success-primary mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                        <span>Serving all of Western North Carolina</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="px-3 py-1.5 bg-white/5 rounded w-fit flex gap-3 items-center">
                                <span className="text-white text-sm hidden md:inline">Certified by</span>
                                <div className="flex items-center gap-1.5">
                                    <span className="size-6 rounded-full bg-success-solid flex items-center justify-center text-white text-xs font-bold">NC</span>
                                    <span className="text-white text-sm">NC Licensed</span>
                                </div>
                                <span className="text-tertiary text-sm">&amp;</span>
                                <div className="flex items-center gap-1.5">
                                    <span className="size-6 rounded-full bg-brand-600 flex items-center justify-center text-white text-xs font-bold">✓</span>
                                    <span className="text-white text-sm">Fully Insured</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="flex flex-col min-h-[22rem] sm:min-h-[30rem] relative">
                            <div className="bg-cover bg-top h-full" style={{ backgroundImage: 'url(https://curat.modeltheme.com/wp-content/uploads/2026/02/why-choose-us-.jpg)' }} />

                            {/* Floating Card */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-3rem)] overflow-hidden rounded-2xl border border-secondary bg-white/95 shadow-2xl backdrop-blur-md">
                                <div className="p-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-base font-semibold text-primary">What's included</h3>
                                        <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-200">6 services</span>
                                    </div>
                                    <div className="mt-5 grid grid-cols-2 gap-x-8">
                                        <div className="flex items-center gap-3 py-3 border-b border-secondary">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-brand-50">
                                                <svg className="size-3.5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">Septic tank pumping</span>
                                        </div>
                                        <div className="flex items-center gap-3 py-3 border-b border-secondary">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-brand-50">
                                                <svg className="size-3.5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">System inspection</span>
                                        </div>
                                        <div className="flex items-center gap-3 py-3 border-b border-secondary">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-brand-50">
                                                <svg className="size-3.5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">Drainfield locating</span>
                                        </div>
                                        <div className="flex items-center gap-3 py-3 border-b border-secondary">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-brand-50">
                                                <svg className="size-3.5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">Filter cleaning</span>
                                        </div>
                                        <div className="flex items-center gap-3 py-3">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-brand-50">
                                                <svg className="size-3.5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">Grease trap service</span>
                                        </div>
                                        <div className="flex items-center gap-3 py-3">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-brand-50">
                                                <svg className="size-3.5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">Emergency repairs</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between border-t border-secondary bg-secondary/30 px-4 py-3">
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-0.5">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="size-3 fill-amber-400 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-xs font-medium text-tertiary">4.9 (500+ reviews)</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="relative flex size-2">
                                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-500 opacity-75" />
                                            <span className="relative inline-flex size-2 rounded-full bg-brand-500" />
                                        </div>
                                        <span className="text-xs font-medium text-brand-600">Available Now</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Section 2 - Emergency Services */}
                <section className="px-6 lg:px-10 bg-primary-solid">
                    <div className="max-w-7xl mx-auto border-2 border-r border-gray-700/70 grid md:grid-cols-[55%_45%] divide-x divide-gray-700/70">
                        {/* Left Column - Content */}
                        <div className="px-5 py-6 md:p-10 flex flex-col justify-between gap-15">
                            <div className="flex flex-col gap-5">
                                <span className="text-tertiary text-xs font-mono uppercase tracking-wide">Emergency Response</span>
                                <h4 className="text-white text-2xl font-semibold">24/7 Emergency Services</h4>
                                <p className="text-white/70 text-base max-w-[25rem] text-pretty">
                                    Septic emergencies don't wait for business hours. Our team is ready around the clock to handle urgent situations and prevent property damage.
                                </p>
                                <ul className="flex flex-col gap-3 mt-2">
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <svg className="size-5 shrink-0 text-success-primary mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                        <span>Rapid response <code className="mx-1 px-1.5 py-0.5 bg-white/10 rounded text-brand-400 text-xs">Under 60 minutes</code></span>
                                    </li>
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <svg className="size-5 shrink-0 text-success-primary mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                        <span>Overflow and backup resolution</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <svg className="size-5 shrink-0 text-success-primary mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                        <span>Weekend and holiday availability</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <svg className="size-5 shrink-0 text-success-primary mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                        <span>No extra charge for after-hours calls</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="px-3 py-1.5 bg-white/5 rounded w-fit flex gap-3 items-center">
                                <span className="text-white text-sm hidden md:inline">Call Now</span>
                                <a href="tel:8282541920" className="flex items-center gap-1.5 text-success-primary hover:text-success-secondary transition-colors">
                                    <span className="text-sm font-semibold">(828) 254-1920</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="flex flex-col min-h-[22rem] sm:min-h-[30rem]">
                            <div className="bg-cover bg-center h-full" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80)' }} />
                        </div>
                    </div>
                </section>

                {/* Feature Section 3 - Inspections */}
                <section className="px-6 lg:px-10 bg-primary-solid">
                    <div className="max-w-7xl mx-auto border-2 border-r border-gray-700/70 grid md:grid-cols-[55%_45%] divide-x divide-gray-700/70">
                        {/* Left Column - Content */}
                        <div className="px-5 py-6 md:p-10 flex flex-col justify-between gap-15">
                            <div className="flex flex-col gap-5">
                                <span className="text-tertiary text-xs font-mono uppercase tracking-wide">System Health</span>
                                <h4 className="text-white text-2xl font-semibold">Thorough Inspections</h4>
                                <p className="text-white/70 text-base max-w-[25rem] text-pretty">
                                    Protect your investment with comprehensive septic inspections. We identify potential issues before they become costly repairs.
                                </p>
                                <ul className="flex flex-col gap-3 mt-2">
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <svg className="size-5 shrink-0 text-success-primary mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                        <span>Full system evaluation <code className="mx-1 px-1.5 py-0.5 bg-white/10 rounded text-brand-400 text-xs">Tank to Drain Field</code></span>
                                    </li>
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <svg className="size-5 shrink-0 text-success-primary mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                        <span>Real estate transaction inspections</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <svg className="size-5 shrink-0 text-success-primary mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                        <span>Detailed written reports provided</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <svg className="size-5 shrink-0 text-success-primary mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                        <span>Camera inspection available</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="px-3 py-1.5 bg-white/5 rounded w-fit flex gap-3 items-center">
                                <span className="text-white text-sm hidden md:inline">Starting at</span>
                                <span className="text-success-primary text-sm font-semibold">$150</span>
                                <span className="text-white/50 text-sm">for basic inspection</span>
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="flex flex-col min-h-[22rem] sm:min-h-[30rem]">
                            <div className="bg-cover bg-center h-full" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80)' }} />
                        </div>
                    </div>
                </section>

                {/* Feature Section 4 - Maintenance */}
                <section className="px-6 lg:px-10 bg-primary-solid">
                    <div className="max-w-7xl mx-auto border-2 border-r border-gray-700/70 grid md:grid-cols-[55%_45%] divide-x divide-gray-700/70">
                        {/* Left Column - Content */}
                        <div className="px-5 py-6 md:p-10 flex flex-col justify-between gap-15">
                            <div className="flex flex-col gap-5">
                                <span className="text-tertiary text-xs font-mono uppercase tracking-wide">Preventive Care</span>
                                <h4 className="text-white text-2xl font-semibold">Maintenance Programs</h4>
                                <p className="text-white/70 text-base max-w-[25rem] text-pretty">
                                    Keep your septic system running smoothly with our scheduled maintenance plans. Save money and avoid unexpected breakdowns.
                                </p>
                                <ul className="flex flex-col gap-3 mt-2">
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <svg className="size-5 shrink-0 text-success-primary mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                        <span>Scheduled pumping reminders <code className="mx-1 px-1.5 py-0.5 bg-white/10 rounded text-brand-400 text-xs">Every 3-5 Years</code></span>
                                    </li>
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <svg className="size-5 shrink-0 text-success-primary mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                        <span>Priority scheduling for members</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <svg className="size-5 shrink-0 text-success-primary mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                        <span>10% discount on all services</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <svg className="size-5 shrink-0 text-success-primary mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                        <span>Annual system health check included</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="px-3 py-1.5 bg-white/5 rounded w-fit flex gap-3 items-center">
                                <span className="text-white text-sm hidden md:inline">Join</span>
                                <span className="text-success-primary text-sm font-semibold">5,000+ homeowners</span>
                                <span className="text-white/50 text-sm">in our program</span>
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="flex flex-col min-h-[22rem] sm:min-h-[30rem]">
                            <div className="bg-cover bg-center h-full" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80)' }} />
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-16 md:py-20">
                    <div className="px-6 lg:px-10">
                        <div className="max-w-7xl mx-auto border-l border-r border-tertiary">
                            <div className="p-8 lg:p-12">
                                <div className="flex flex-col gap-6 items-center text-center mb-12">
                                    <div className="inline-flex items-center gap-3">
                                        <span className="size-2 rounded-full bg-success-solid" />
                                        <span className="text-sm text-tertiary">Our Services</span>
                                        <span className="size-2 rounded-full bg-success-solid" />
                                    </div>
                                    <h2 className="text-3xl lg:text-4xl font-semibold text-primary tracking-tight">
                                        Comprehensive Septic Pumping Services
                                    </h2>
                                    <p className="text-lg text-tertiary max-w-2xl">
                                        From routine maintenance to emergency situations, we handle all your septic pumping needs.
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {pumpingServices.map((service) => (
                                        <div key={service.title} className="p-6 border border-tertiary rounded-2xl bg-primary hover:border-success-primary transition-colors">
                                            <div className="text-4xl mb-4">{service.icon}</div>
                                            <h3 className="text-lg font-semibold text-primary mb-2">{service.title}</h3>
                                            <p className="text-sm text-tertiary">{service.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16 md:py-20 bg-secondary">
                    <div className="px-6 lg:px-10">
                        <div className="max-w-7xl mx-auto border-l border-r border-tertiary">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-12">
                                <div className="flex flex-col gap-6">
                                    <div className="inline-flex items-center gap-3">
                                        <span className="size-2 rounded-full bg-success-solid" />
                                        <span className="text-sm text-tertiary">Why Pump Your Septic</span>
                                    </div>
                                    <h2 className="text-3xl lg:text-4xl font-semibold text-primary tracking-tight">
                                        Benefits of Regular Septic Pumping
                                    </h2>
                                    <p className="text-lg text-tertiary">
                                        Regular septic tank pumping is essential for maintaining a healthy and efficient system.
                                    </p>
                                    <div className="flex flex-col gap-4 mt-4">
                                        {benefits.map((benefit) => (
                                            <div key={benefit} className="flex items-center gap-4">
                                                <span className="text-success-primary text-xl">✓</span>
                                                <span className="text-primary">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link href="tel:8282541920" className="inline-flex items-center gap-2 px-6 py-4 text-sm font-medium bg-success-solid text-white transition-all hover:bg-success-primary w-fit group mt-4">
                                        <span>Schedule Pumping Today</span>
                                        <div className="size-8 flex items-center justify-center transition-transform group-hover:-rotate-90">
                                            <ArrowIcon />
                                        </div>
                                    </Link>
                                </div>
                                <div className="flex items-center">
                                    <img
                                        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                                        alt="Septic pumping truck"
                                        className="w-full h-auto rounded-2xl object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-16 md:py-20">
                    <div className="px-6 lg:px-10">
                        <div className="max-w-7xl mx-auto border-l border-r border-tertiary">
                            <div className="p-8 lg:p-12">
                                <div className="flex flex-col gap-6 items-center text-center mb-12">
                                    <div className="inline-flex items-center gap-3">
                                        <span className="size-2 rounded-full bg-success-solid" />
                                        <span className="text-sm text-tertiary">How It Works</span>
                                        <span className="size-2 rounded-full bg-success-solid" />
                                    </div>
                                    <h2 className="text-3xl lg:text-4xl font-semibold text-primary tracking-tight">
                                        Our Pumping Process
                                    </h2>
                                    <p className="text-lg text-tertiary max-w-2xl">
                                        We make septic pumping simple and stress-free with our proven process.
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {process.map((item) => (
                                        <div key={item.step} className="p-6 border border-tertiary rounded-2xl bg-primary text-center hover:border-success-primary transition-colors">
                                            <div className="size-12 rounded-full bg-success-solid text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                                {item.step}
                                            </div>
                                            <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                                            <p className="text-sm text-tertiary">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 md:py-20">
                    <div className="px-6 lg:px-10">
                        <div className="max-w-7xl mx-auto border-l border-r border-tertiary">
                            <div className="bg-success-solid min-h-[450px] flex flex-col items-center justify-center relative p-8">
                                <div className="max-w-xl flex flex-col gap-5 items-center relative z-10">
                                    <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-center text-primary">
                                        Ready to Schedule Your Septic Pumping?
                                    </h2>
                                    <p className="text-base text-center font-medium">
                                        Don't wait until it's too late. Regular pumping prevents costly repairs.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mt-4">
                                        <Link href="tel:8282541920" className="inline-flex items-center gap-2 px-6 py-4 text-sm font-medium bg-primary-solid text-white transition-all hover:bg-gray-800 group">
                                            <span>Call (828) 254-1920</span>
                                            <div className="size-8 flex items-center justify-center transition-transform group-hover:-rotate-90 group-hover:bg-success-solid rounded">
                                                <ArrowIcon />
                                            </div>
                                        </Link>
                                        <Link href="/contact" className="inline-flex items-center px-6 py-4 text-sm font-medium border border-primary-solid text-primary-solid transition-colors hover:bg-primary-solid hover:text-white">
                                            Request Quote
                                        </Link>
                                    </div>
                                </div>
                                <div className="absolute inset-0 overflow-hidden">
                                    <img src="https://cdn.prod.website-files.com/69385e16d68663814109c132/695442158ff7e237e5f5e875_CTA-Background.webp" loading="lazy" alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
