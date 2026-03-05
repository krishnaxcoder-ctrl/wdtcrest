"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Header, Footer } from "@/components/layout";

// Shield Check Icon
const ShieldCheck = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M9 11.4999L11 13.4999L15.5 8.99987M20 11.9999C20 16.9083 14.646 20.4783 12.698 21.6147C12.4766 21.7439 12.3659 21.8085 12.2097 21.842C12.0884 21.868 11.9116 21.868 11.7903 21.842C11.6341 21.8085 11.5234 21.7439 11.302 21.6147C9.35396 20.4783 4 16.9083 4 11.9999V7.21747C4 6.41796 4 6.0182 4.13076 5.67457C4.24627 5.37101 4.43398 5.10015 4.67766 4.8854C4.9535 4.64231 5.3278 4.50195 6.0764 4.22122L11.4382 2.21054C11.6461 2.13258 11.75 2.0936 11.857 2.07815C11.9518 2.06444 12.0482 2.06444 12.143 2.07815C12.25 2.0936 12.3539 2.13258 12.5618 2.21054L17.9236 4.22122C18.6722 4.50195 19.0465 4.64231 19.3223 4.8854C19.566 5.10015 19.7537 5.37101 19.8692 5.67457C20 6.0182 20 6.41796 20 7.21747V11.9999Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

// Arrow Icon
const ArrowIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 8H8.5V18.5H22.4395L19.1895 15.25L20.25 14.1895L25.3105 19.25L20.25 24.3105L19.1895 23.25L22.4395 20H7V8Z" fill="currentColor" />
    </svg>
);

// Award Icon
const AwardIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.96667 14.7219L7 22L12 19L17 22L16.0333 14.7125M19 9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// Truck Icon
const TruckIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 7H16.3373C16.5818 7 16.7041 7 16.8192 7.02763C16.9213 7.05213 17.0188 7.09253 17.1083 7.14736C17.2092 7.2092 17.2957 7.29568 17.4686 7.46863L21.5314 11.5314C21.7043 11.7043 21.7908 11.7908 21.8526 11.8917C21.9075 11.9812 21.9479 12.0787 21.9724 12.1808C22 12.2959 22 12.4182 22 12.6627V15.5C22 15.9659 22 16.1989 21.9239 16.3827C21.8224 16.6277 21.6277 16.8224 21.3827 16.9239C21.1989 17 20.9659 17 20.5 17M15.5 17H14M14 17V6.2C14 5.0799 14 4.51984 13.782 4.09202C13.5903 3.71569 13.2843 3.40973 12.908 3.21799C12.4802 3 11.9201 3 10.8 3H5.2C4.0799 3 3.51984 3 3.09202 3.21799C2.71569 3.40973 2.40973 3.71569 2.21799 4.09202C2 4.51984 2 5.0799 2 6.2V15C2 16.1046 2.89543 17 4 17M14 17H10M10 17C10 18.6569 8.65685 20 7 20C5.34315 20 4 18.6569 4 17M10 17C10 15.3431 8.65685 14 7 14C5.34315 14 4 15.3431 4 17M20.5 17.5C20.5 18.8807 19.3807 20 18 20C16.6193 20 15.5 18.8807 15.5 17.5C15.5 16.1193 16.6193 15 18 15C19.3807 15 20.5 16.1193 20.5 17.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

const featureTabs = ["pumping", "emergency", "inspection", "maintenance", "repairs"] as const;

export default function PumpingPage() {
    const [activeTab, setActiveTab] = useState<string>("pumping");

    useEffect(() => {
        const sections = featureTabs.map(tab => document.getElementById(`feature-${tab}`)).filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id.replace("feature-", "");
                        setActiveTab(id);
                    }
                });
            },
            { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
        );

        sections.forEach((section) => section && observer.observe(section));

        return () => observer.disconnect();
    }, []);

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
                    <div className="max-w-7xl mx-auto border-t border-2 border-r border-gray-700/70 relative overflow-hidden">
                        {/* Background Effects */}
                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(51, 230, 209, 0.1)' }} />
                        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(51, 230, 209, 0.1)' }} />

                        <div className="relative z-10 flex flex-col items-start justify-center py-12 sm:py-16 px-6 sm:px-10">
                            <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full border" style={{ backgroundColor: 'rgba(51, 230, 209, 0.1)', borderColor: 'rgba(51, 230, 209, 0.2)' }}>
                                <span className="relative flex size-2">
                                    <span className="absolute inline-flex size-full animate-ping rounded-full opacity-75" style={{ backgroundColor: '#33e6d1' }} />
                                    <span className="relative inline-flex size-2 rounded-full" style={{ backgroundColor: '#33e6d1' }} />
                                </span>
                                <span className="text-xs font-medium" style={{ color: '#33e6d1' }}>Trusted Local Service</span>
                            </div>
                            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                                Everything you need<br /><span style={{ color: '#33e6d1' }}>in one team</span>
                            </h2>
                            <p className="mt-5 max-w-2xl text-white/60 text-base sm:text-lg">
                                Complete septic services from pumping to repairs — all from one trusted local team with 30+ years experience.
                            </p>
                            {/* Available Badge */}
                            <div className="flex items-center gap-2 mt-6">
                                <div className="relative flex size-2">
                                    <span className="absolute inline-flex size-full animate-ping rounded-full opacity-75" style={{ backgroundColor: '#33e6d1' }} />
                                    <span className="relative inline-flex size-2 rounded-full" style={{ backgroundColor: '#33e6d1' }} />
                                </div>
                                <span className="text-sm font-medium" style={{ color: '#33e6d1' }}>Available 24/7 · Under 60 minutes · Tank to Drain Field</span>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-wrap items-center gap-3 mt-6">
                                <Link href="tel:8282541920" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-gray-900 text-sm font-medium transition-all hover:opacity-90" style={{ backgroundColor: '#33e6d1', boxShadow: '0 10px 15px -3px rgba(51, 230, 209, 0.25)' }}>
                                    <span>Call (828) 254-1920</span>
                                    <svg className="size-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </Link>
                                <Link href="/contact" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm">
                                    <span>Get Free Quote</span>
                                    <svg className="size-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Navigation Tabs - Sticky */}
                <section className="sticky top-0 z-50 px-6 lg:px-10 bg-primary-solid/95 backdrop-blur-md">
                    <div className="max-w-7xl mx-auto border-2 border-r border-gray-700/70">
                        <ul className="w-full sm:grid sm:grid-cols-5 flex items-center divide-x divide-gray-700/70 relative overflow-x-auto scrollbar-hide">
                            <li className="flex-shrink-0">
                                <a href="#feature-pumping" className={`h-full text-sm tracking-tight py-4 px-6 sm:px-0 flex justify-center gap-2 transition-colors duration-200 whitespace-nowrap ${activeTab === "pumping" ? "text-white bg-white/5" : "text-white/50 hover:text-white"}`}>
                                    <svg className="w-4" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.26172 12.6653C3.26172 13.0335 3.5602 13.332 3.92839 13.332H4.59505C4.96324 13.332 5.26172 13.0335 5.26172 12.6653V5.9987C5.26172 5.6305 4.96324 5.33203 4.59505 5.33203H3.92839C3.5602 5.33203 3.26172 5.6305 3.26172 5.9987V12.6653Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
                                        <path d="M7.92847 12.592C7.92847 13.0013 8.22693 13.333 8.59513 13.333H9.2618C9.63 13.333 9.92847 13.0013 9.92847 12.592V2.21921C9.92847 1.81001 9.63 1.47827 9.2618 1.47827H8.59513C8.22693 1.47827 7.92847 1.81 7.92847 2.21921V12.592Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
                                        <path d="M12.5952 12.6654C12.5952 13.0336 12.8937 13.332 13.2619 13.332H13.9285C14.2967 13.332 14.5952 13.0336 14.5952 12.6654V7.9987C14.5952 7.63056 14.2967 7.33203 13.9285 7.33203H13.2619C12.8937 7.33203 12.5952 7.63056 12.5952 7.9987V12.6654Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
                                    </svg>
                                    <span style={{ fontFamily: 'Datashake, sans-serif' }}>Pumping</span>
                                </a>
                            </li>
                            <li className="flex-shrink-0">
                                <a href="#feature-emergency" className={`h-full text-sm tracking-tight py-4 px-6 sm:px-0 flex justify-center gap-2 transition-colors duration-200 whitespace-nowrap ${activeTab === "emergency" ? "text-white bg-white/5" : "text-white/50 hover:text-white"}`}>
                                    <svg className="w-4" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.97939 1.33325V2.99073C9.97939 4.15603 9.97939 4.73868 10.1221 5.29802C10.2647 5.85736 10.5443 6.37094 11.1035 7.39812L11.8613 8.79005C13.2863 11.4076 13.9988 12.7164 13.4143 13.6866L13.4052 13.7014C12.8121 14.6666 11.3033 14.6666 8.28572 14.6666C5.2681 14.6666 3.7593 14.6666 3.16626 13.7014L3.15722 13.6866C2.57269 12.7164 3.28518 11.4076 4.71016 8.79005L5.46792 7.39812C6.02712 6.37094 6.30672 5.85736 6.44938 5.29802C6.59204 4.73868 6.59204 4.15603 6.59204 2.99073V1.33325" stroke="currentColor" />
                                        <path d="M5.6189 1.33325H10.9522" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M5.28564 7.70432C5.95231 6.93539 7.01858 7.48965 8.28564 8.21225C9.95231 9.16272 10.9523 8.43345 11.2856 7.74359" stroke="currentColor" strokeLinecap="round" />
                                    </svg>
                                    <span style={{ fontFamily: 'Datashake, sans-serif' }}>Emergency</span>
                                </a>
                            </li>
                            <li className="flex-shrink-0">
                                <a href="#feature-inspection" className={`h-full text-sm tracking-tight py-4 px-6 sm:px-0 flex justify-center gap-2 transition-colors duration-200 whitespace-nowrap ${activeTab === "inspection" ? "text-white bg-white/5" : "text-white/50 hover:text-white"}`}>
                                    <svg className="w-4" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.1427 1.33325L10.5019 2.92763C10.8065 4.28002 11.8626 5.33613 13.215 5.64077L14.8094 5.99992L13.215 6.35907C11.8626 6.66371 10.8065 7.71979 10.5019 9.07219L10.1427 10.6666L9.78361 9.07219C9.47894 7.71979 8.42287 6.66371 7.07047 6.35907L5.47607 5.99992L7.07047 5.64077C8.42281 5.33613 9.47894 4.28002 9.78361 2.92764L10.1427 1.33325Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                                        <path d="M4.80941 8L5.06595 9.13887C5.28355 10.1048 6.03791 10.8592 7.00387 11.0768L8.14274 11.3333L7.00387 11.5899C6.03791 11.8075 5.28355 12.5618 5.06595 13.5278L4.80941 14.6667L4.55287 13.5278C4.33527 12.5618 3.58091 11.8075 2.61492 11.5899L1.47607 11.3333L2.61492 11.0768C3.58091 10.8592 4.33527 10.1049 4.55287 9.13887L4.80941 8Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                                    </svg>
                                    <span style={{ fontFamily: 'Datashake, sans-serif' }}>Inspection</span>
                                </a>
                            </li>
                            <li className="flex-shrink-0">
                                <a href="#feature-maintenance" className={`h-full text-sm tracking-tight py-4 px-6 sm:px-0 flex justify-center gap-2 transition-colors duration-200 whitespace-nowrap ${activeTab === "maintenance" ? "text-white bg-white/5" : "text-white/50 hover:text-white"}`}>
                                    <svg className="w-4" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.16634 2.66659C7.16634 1.93021 7.76327 1.33325 8.49967 1.33325H9.16634C9.90274 1.33325 10.4997 1.93021 10.4997 2.66659V4.36883C10.4997 5.24394 11.0686 6.01743 11.904 6.27807L12.4287 6.44177C13.2641 6.70239 13.833 7.47592 13.833 8.35099V9.33325C13.833 9.70145 13.5345 9.99992 13.1663 9.99992H4.49967C4.13149 9.99992 3.83301 9.70145 3.83301 9.33325V8.35099C3.83301 7.47592 4.40193 6.70239 5.23733 6.44177L5.76202 6.27807C6.59741 6.01743 7.16634 5.24394 7.16634 4.36883V2.66659Z" stroke="currentColor" strokeWidth="1.2" />
                                        <path d="M4.50128 10C4.60515 10.8721 4.16364 13.0088 3.1665 14.5786C3.1665 14.5786 10.0281 15.3729 10.9566 11.9623V13.2475C10.9566 13.875 10.9566 14.1887 11.152 14.3837C11.5279 14.7585 13.2926 14.7687 13.669 14.3681C13.8668 14.1575 13.847 13.8546 13.8072 13.2487C13.7418 12.2497 13.562 10.9705 13.068 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span style={{ fontFamily: 'Datashake, sans-serif' }}>Maintenance</span>
                                </a>
                            </li>
                            <li className="flex-shrink-0">
                                <a href="#feature-repairs" className={`h-full text-sm tracking-tight py-4 px-6 sm:px-0 flex justify-center gap-2 transition-colors duration-200 whitespace-nowrap ${activeTab === "repairs" ? "text-white bg-white/5" : "text-white/50 hover:text-white"}`}>
                                    <svg className="w-4" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.4131 7H5.72946C4.00843 7 3.14792 7 2.75224 7.5684C2.35658 8.1368 2.65065 8.95053 3.2388 10.578L3.96159 12.578C4.26826 13.4265 4.42159 13.8509 4.76389 14.0921C5.10619 14.3333 5.55488 14.3333 6.45224 14.3333H10.6904C11.5877 14.3333 12.0364 14.3333 12.3787 14.0921C12.721 13.8509 12.8743 13.4265 13.181 12.578L13.9038 10.578C14.492 8.95053 14.786 8.1368 14.3904 7.5684C13.9947 7 13.1342 7 11.4131 7Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
                                        <path d="M13.2379 5.33325C13.2379 5.02263 13.2379 4.86731 13.1871 4.7448C13.1195 4.58145 12.9897 4.45166 12.8263 4.384C12.7038 4.33325 12.5485 4.33325 12.2379 4.33325H4.90454C4.59391 4.33325 4.4386 4.33325 4.31609 4.384C4.15273 4.45166 4.02295 4.58145 3.95529 4.7448C3.90454 4.86731 3.90454 5.02263 3.90454 5.33325" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M11.5713 2.66675C11.5713 2.35612 11.5713 2.20081 11.5206 2.07829C11.4529 1.91494 11.3231 1.78515 11.1598 1.71749C11.0372 1.66675 10.8819 1.66675 10.5713 1.66675H6.57129C6.26066 1.66675 6.10535 1.66675 5.98284 1.71749C5.81948 1.78515 5.6897 1.91494 5.62204 2.07829C5.57129 2.20081 5.57129 2.35612 5.57129 2.66675" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span style={{ fontFamily: 'Datashake, sans-serif' }}>Repairs</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Feature Section - Pumping */}
                <section id="feature-pumping" className="px-6 lg:px-10 bg-primary-solid scroll-mt-16">
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
                                        <ShieldCheck className="size-5 shrink-0 mt-0.5" style={{ color: '#33e6d1' }} />
                                        <span>Same-day service <code className="mx-1 px-1.5 py-0.5 bg-white/10 rounded text-xs" style={{ color: '#33e6d1' }}>Available 24/7</code></span>
                                    </li>
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <ShieldCheck className="size-5 shrink-0 mt-0.5" style={{ color: '#33e6d1' }} />
                                        <span>Complete tank cleaning in under 2 hours</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <ShieldCheck className="size-5 shrink-0 mt-0.5" style={{ color: '#33e6d1' }} />
                                        <span>Free inspection with every service</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <ShieldCheck className="size-5 shrink-0 mt-0.5" style={{ color: '#33e6d1' }} />
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
                            <div className="bg-cover bg-top h-full" style={{ backgroundImage: 'url(/feature-dev-background-nostats.jpg)' }} />

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
                <section id="feature-emergency" className="px-6 lg:px-10 bg-primary-solid scroll-mt-16">
                    <div className="max-w-7xl mx-auto border-2 border-r border-gray-700/70 grid md:grid-cols-[55%_45%] divide-x divide-gray-700/70">
                        {/* Left Column - Content */}
                        <div className="px-5 py-6 md:p-10 flex flex-col justify-between gap-15">
                            <div className="flex flex-col gap-5">
                                <span className="text-white/60 text-xs font-mono uppercase tracking-wide">Emergency Response</span>
                                <h4 className="text-white text-2xl font-semibold">24/7 Emergency Services</h4>
                                <p className="text-white/70 text-base max-w-[25rem] text-pretty">
                                    Septic emergencies don't wait for business hours. Our team is ready around the clock to handle urgent situations and prevent property damage.
                                </p>
                                <ul className="flex flex-col gap-3 mt-2">
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <ShieldCheck className="size-5 shrink-0 mt-0.5" style={{ color: '#33e6d1' }} />
                                        <span>Rapid response <code className="mx-1 px-1.5 py-0.5 bg-white/10 rounded text-xs" style={{ color: '#33e6d1' }}>Under 60 minutes</code></span>
                                    </li>
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <ShieldCheck className="size-5 shrink-0 mt-0.5" style={{ color: '#33e6d1' }} />
                                        <span>Overflow and backup resolution</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <ShieldCheck className="size-5 shrink-0 mt-0.5" style={{ color: '#33e6d1' }} />
                                        <span>Weekend and holiday availability</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <ShieldCheck className="size-5 shrink-0 mt-0.5" style={{ color: '#33e6d1' }} />
                                        <span>No extra charge for after-hours calls</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="px-3 py-1.5 bg-white/5 rounded w-fit flex gap-3 items-center">
                                <span className="text-white text-sm hidden md:inline">Call Now</span>
                                <a href="tel:8282541920" className="flex items-center gap-1.5 text-success-primary hover:text-success-secondary transition-colors">
                                    <span className="text-sm font-semibold" style={{ color: '#33e6d1' }}>(828) 254-1920</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="flex flex-col min-h-[22rem] sm:min-h-[30rem] relative">
                            <div className="bg-cover bg-center h-full relative" style={{ backgroundImage: 'url(/orange.png)' }} />

                            {/* Floating Card */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-3rem)] overflow-hidden rounded-2xl border border-secondary bg-white/95 shadow-2xl backdrop-blur-md">
                                <div className="p-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-base font-semibold text-primary">Emergency Response</h3>
                                        <span className="rounded-full bg-error-secondary px-3 py-1 text-xs font-semibold text-error-primary ring-1 ring-error-primary/20">24/7</span>
                                    </div>
                                    <div className="mt-5 grid grid-cols-2 gap-x-8">
                                        <div className="flex items-center gap-3 py-3 border-b border-secondary">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-error-secondary">
                                                <svg className="size-3.5 text-error-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">60 min response</span>
                                        </div>
                                        <div className="flex items-center gap-3 py-3 border-b border-secondary">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-error-secondary">
                                                <svg className="size-3.5 text-error-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">Overflow repair</span>
                                        </div>
                                        <div className="flex items-center gap-3 py-3 border-b border-secondary">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-error-secondary">
                                                <svg className="size-3.5 text-error-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">Backup clearing</span>
                                        </div>
                                        <div className="flex items-center gap-3 py-3 border-b border-secondary">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-error-secondary">
                                                <svg className="size-3.5 text-error-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">Weekend service</span>
                                        </div>
                                        <div className="flex items-center gap-3 py-3">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-error-secondary">
                                                <svg className="size-3.5 text-error-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">Holiday coverage</span>
                                        </div>
                                        <div className="flex items-center gap-3 py-3">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-error-secondary">
                                                <svg className="size-3.5 text-error-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">No extra fees</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between border-t border-secondary bg-secondary/30 px-4 py-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-medium text-tertiary">Call now:</span>
                                        <span className="text-xs font-semibold" style={{ color: '#33e6d1' }}>(828) 254-1920</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="relative flex size-2">
                                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-error-primary opacity-75" />
                                            <span className="relative inline-flex size-2 rounded-full bg-error-primary" />
                                        </div>
                                        <span className="text-xs font-medium text-error-primary">On Call Now</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Section 3 - Inspections */}
                <section id="feature-inspection" className="px-6 lg:px-10 bg-primary-solid scroll-mt-16">
                    <div className="max-w-7xl mx-auto border-2 border-r border-gray-700/70 grid md:grid-cols-[55%_45%] divide-x divide-gray-700/70">
                        {/* Left Column - Content */}
                        <div className="px-5 py-6 md:p-10 flex flex-col justify-between gap-15">
                            <div className="flex flex-col gap-5">
                                <span className="text-white/60 text-xs font-mono uppercase tracking-wide">System Health</span>
                                <h4 className="text-white text-2xl font-semibold">Thorough Inspections</h4>
                                <p className="text-white/70 text-base max-w-[25rem] text-pretty">
                                    Protect your investment with comprehensive septic inspections. We identify potential issues before they become costly repairs.
                                </p>
                                <ul className="flex flex-col gap-3 mt-2">
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <ShieldCheck className="size-5 shrink-0 mt-0.5" style={{ color: '#33e6d1' }} />
                                        <span>Full system evaluation <code className="mx-1 px-1.5 py-0.5 bg-white/10 rounded text-xs" style={{ color: '#33e6d1' }}>Tank to Drain Field</code></span>
                                    </li>
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <ShieldCheck className="size-5 shrink-0 mt-0.5" style={{ color: '#33e6d1' }} />
                                        <span>Real estate transaction inspections</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <ShieldCheck className="size-5 shrink-0 mt-0.5" style={{ color: '#33e6d1' }} />
                                        <span>Detailed written reports provided</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <ShieldCheck className="size-5 shrink-0 mt-0.5" style={{ color: '#33e6d1' }} />
                                        <span>Camera inspection available</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="px-3 py-1.5 bg-white/5 rounded w-fit flex gap-3 items-center">
                                <span className="text-white text-sm hidden md:inline">Starting at</span>
                                <span className="text-sm font-semibold" style={{ color: '#33e6d1' }}>$150</span>
                                <span className="text-white/50 text-sm">for basic inspection</span>
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="flex flex-col min-h-[22rem] sm:min-h-[30rem] relative">
                            <div className="bg-cover bg-center h-full relative" style={{ backgroundImage: 'url(/blue.png)' }} />

                            {/* Floating Card */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-3rem)] overflow-hidden rounded-2xl border border-secondary bg-white/95 shadow-2xl backdrop-blur-md">
                                <div className="p-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-base font-semibold text-primary">Inspection Report</h3>
                                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-200">NC Certified</span>
                                    </div>
                                    <div className="mt-5 grid grid-cols-2 gap-x-8">
                                        <div className="flex items-center gap-3 py-3 border-b border-secondary">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-blue-50">
                                                <svg className="size-3.5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">Tank condition</span>
                                        </div>
                                        <div className="flex items-center gap-3 py-3 border-b border-secondary">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-blue-50">
                                                <svg className="size-3.5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">Drain field check</span>
                                        </div>
                                        <div className="flex items-center gap-3 py-3 border-b border-secondary">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-blue-50">
                                                <svg className="size-3.5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">Sludge levels</span>
                                        </div>
                                        <div className="flex items-center gap-3 py-3 border-b border-secondary">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-blue-50">
                                                <svg className="size-3.5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">Baffle integrity</span>
                                        </div>
                                        <div className="flex items-center gap-3 py-3">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-blue-50">
                                                <svg className="size-3.5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">Camera inspection</span>
                                        </div>
                                        <div className="flex items-center gap-3 py-3">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-blue-50">
                                                <svg className="size-3.5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">Written report</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between border-t border-secondary bg-secondary/30 px-4 py-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-medium text-tertiary">Starting at</span>
                                        <span className="text-sm font-bold text-primary">$150</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="relative flex size-2">
                                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-blue-500 opacity-75" />
                                            <span className="relative inline-flex size-2 rounded-full bg-blue-500" />
                                        </div>
                                        <span className="text-xs font-medium text-blue-600">Book Today</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Section 4 - Maintenance */}
                <section id="feature-maintenance" className="px-6 lg:px-10 bg-primary-solid scroll-mt-16">
                    <div className="max-w-7xl mx-auto border-2 border-r border-gray-700/70 grid md:grid-cols-[55%_45%] divide-x divide-gray-700/70">
                        {/* Left Column - Content */}
                        <div className="px-5 py-6 md:p-10 flex flex-col justify-between gap-15">
                            <div className="flex flex-col gap-5">
                                <span className="text-white/60 text-xs font-mono uppercase tracking-wide">Preventive Care</span>
                                <h4 className="text-white text-2xl font-semibold">Maintenance Programs</h4>
                                <p className="text-white/70 text-base max-w-[25rem] text-pretty">
                                    Keep your septic system running smoothly with our scheduled maintenance plans. Save money and avoid unexpected breakdowns.
                                </p>
                                <ul className="flex flex-col gap-3 mt-2">
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <ShieldCheck className="size-5 shrink-0 mt-0.5" style={{ color: '#33e6d1' }} />
                                        <span>Scheduled pumping reminders <code className="mx-1 px-1.5 py-0.5 bg-white/10 rounded text-xs" style={{ color: '#33e6d1' }}>Every 3-5 Years</code></span>
                                    </li>
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <ShieldCheck className="size-5 shrink-0 mt-0.5" style={{ color: '#33e6d1' }} />
                                        <span>Priority scheduling for members</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <ShieldCheck className="size-5 shrink-0 mt-0.5" style={{ color: '#33e6d1' }} />
                                        <span>10% discount on all services</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <ShieldCheck className="size-5 shrink-0 mt-0.5" style={{ color: '#33e6d1' }} />
                                        <span>Annual system health check included</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="px-3 py-1.5 bg-white/5 rounded w-fit flex gap-3 items-center">
                                <span className="text-white text-sm hidden md:inline">Join</span>
                                <span className="text-sm font-semibold" style={{ color: '#33e6d1' }}>5,000+ homeowners</span>
                                <span className="text-white/50 text-sm">in our program</span>
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="flex flex-col min-h-[22rem] sm:min-h-[30rem] relative">
                            <div className="bg-cover bg-center h-full relative" style={{ backgroundImage: 'url(/green.png)' }} />

                            {/* Floating Card */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-3rem)] overflow-hidden rounded-2xl border border-secondary bg-white/95 shadow-2xl backdrop-blur-md">
                                <div className="p-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-base font-semibold text-primary">Maintenance Plan</h3>
                                        <span className="rounded-full bg-success-secondary px-3 py-1 text-xs font-semibold text-success-primary ring-1 ring-success-primary/20">Save 10%</span>
                                    </div>
                                    <div className="mt-5 grid grid-cols-2 gap-x-8">
                                        <div className="flex items-center gap-3 py-3 border-b border-secondary">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-success-secondary">
                                                <svg className="size-3.5 text-success-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">Auto reminders</span>
                                        </div>
                                        <div className="flex items-center gap-3 py-3 border-b border-secondary">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-success-secondary">
                                                <svg className="size-3.5 text-success-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">Priority booking</span>
                                        </div>
                                        <div className="flex items-center gap-3 py-3 border-b border-secondary">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-success-secondary">
                                                <svg className="size-3.5 text-success-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">Discounted rates</span>
                                        </div>
                                        <div className="flex items-center gap-3 py-3 border-b border-secondary">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-success-secondary">
                                                <svg className="size-3.5 text-success-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">Annual checkup</span>
                                        </div>
                                        <div className="flex items-center gap-3 py-3">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-success-secondary">
                                                <svg className="size-3.5 text-success-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">Service records</span>
                                        </div>
                                        <div className="flex items-center gap-3 py-3">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-success-secondary">
                                                <svg className="size-3.5 text-success-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">Free estimates</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between border-t border-secondary bg-secondary/30 px-4 py-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-medium text-tertiary">Trusted by</span>
                                        <span className="text-sm font-bold text-primary">5,000+ homeowners</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="relative flex size-2">
                                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-success-primary opacity-75" />
                                            <span className="relative inline-flex size-2 rounded-full bg-success-primary" />
                                        </div>
                                        <span className="text-xs font-medium text-success-primary">Join Now</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Section 5 - Repairs */}
                <section id="feature-repairs" className="px-6 lg:px-10 bg-primary-solid scroll-mt-16">
                    <div className="max-w-7xl mx-auto border-2 border-r border-gray-700/70 grid md:grid-cols-[55%_45%] divide-x divide-gray-700/70">
                        {/* Left Column - Content */}
                        <div className="px-5 py-6 md:p-10 flex flex-col justify-between gap-15">
                            <div className="flex flex-col gap-5">
                                <span className="text-white/60 text-xs font-mono uppercase tracking-wide">Expert Repairs</span>
                                <h4 className="text-white text-2xl font-semibold">Septic System Repairs</h4>
                                <p className="text-white/70 text-base max-w-[25rem] text-pretty">
                                    From minor fixes to major repairs, our experienced team can diagnose and resolve any septic system issue quickly and affordably.
                                </p>
                                <ul className="flex flex-col gap-3 mt-2">
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <ShieldCheck className="size-5 shrink-0 mt-0.5" style={{ color: '#33e6d1' }} />
                                        <span>Fast diagnosis <code className="mx-1 px-1.5 py-0.5 bg-white/10 rounded text-xs" style={{ color: '#33e6d1' }}>Same Day</code></span>
                                    </li>
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <ShieldCheck className="size-5 shrink-0 mt-0.5" style={{ color: '#33e6d1' }} />
                                        <span>Tank and lid repairs</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <ShieldCheck className="size-5 shrink-0 mt-0.5" style={{ color: '#33e6d1' }} />
                                        <span>Drain field restoration</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-white/90 text-sm">
                                        <ShieldCheck className="size-5 shrink-0 mt-0.5" style={{ color: '#33e6d1' }} />
                                        <span>Pump and motor replacement</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="px-3 py-1.5 bg-white/5 rounded w-fit flex gap-3 items-center">
                                <span className="text-white text-sm hidden md:inline">Quality repairs</span>
                                <span className="text-sm font-semibold" style={{ color: '#33e6d1' }}>Guaranteed workmanship</span>
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="flex flex-col min-h-[22rem] sm:min-h-[30rem] relative">
                            <div className="bg-cover bg-center h-full relative" style={{ backgroundImage: 'url(/feature-dev-background-nostats.jpg)' }}>
                                <div className="absolute inset-0 bg-orange-900/30 mix-blend-multiply" />
                            </div>

                            {/* Floating Card */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-3rem)] overflow-hidden rounded-2xl border border-secondary bg-white/95 shadow-2xl backdrop-blur-md">
                                <div className="p-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-base font-semibold text-primary">Repair Services</h3>
                                        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700 ring-1 ring-orange-200">Expert</span>
                                    </div>
                                    <div className="mt-5 grid grid-cols-2 gap-x-8">
                                        <div className="flex items-center gap-3 py-3 border-b border-secondary">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-orange-50">
                                                <svg className="size-3.5 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">Tank repairs</span>
                                        </div>
                                        <div className="flex items-center gap-3 py-3 border-b border-secondary">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-orange-50">
                                                <svg className="size-3.5 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">Pipe replacement</span>
                                        </div>
                                        <div className="flex items-center gap-3 py-3 border-b border-secondary">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-orange-50">
                                                <svg className="size-3.5 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">Drain field fix</span>
                                        </div>
                                        <div className="flex items-center gap-3 py-3 border-b border-secondary">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-orange-50">
                                                <svg className="size-3.5 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">Pump service</span>
                                        </div>
                                        <div className="flex items-center gap-3 py-3">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-orange-50">
                                                <svg className="size-3.5 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">Lid replacement</span>
                                        </div>
                                        <div className="flex items-center gap-3 py-3">
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-orange-50">
                                                <svg className="size-3.5 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-secondary">Full restoration</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between border-t border-secondary bg-secondary/30 px-4 py-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-medium text-tertiary">Warranty on</span>
                                        <span className="text-sm font-bold text-primary">All repairs</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="relative flex size-2">
                                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-orange-500 opacity-75" />
                                            <span className="relative inline-flex size-2 rounded-full bg-orange-500" />
                                        </div>
                                        <span className="text-xs font-medium text-orange-600">Get Quote</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-16 md:py-20">
                    <div className="px-6 lg:px-10">
                        <div className="max-w-7xl mx-auto">
                            {/* Header */}
                            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                                <div className="flex flex-col gap-4">
                                    <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full" style={{ backgroundColor: 'rgba(51, 230, 209, 0.1)', border: '1px solid rgba(51, 230, 209, 0.2)' }}>
                                        <span className="size-1.5 rounded-full" style={{ backgroundColor: '#33e6d1' }} />
                                        <span className="text-xs font-medium" style={{ color: '#33e6d1' }}>Our Services</span>
                                    </div>
                                    <h2 className="text-3xl lg:text-4xl font-semibold text-primary tracking-tight max-w-xl">
                                        Comprehensive Septic Pumping Services
                                    </h2>
                                </div>
                                <p className="text-base text-tertiary max-w-md lg:text-right">
                                    From routine maintenance to emergency situations, we handle all your septic pumping needs with expertise.
                                </p>
                            </div>

                            {/* Services Cards */}
                            <div className="group/cards grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Card 1 - Residential */}
                                <div className="relative p-4 rounded-2xl border transition-all duration-300 overflow-hidden hover:scale-[1.02] group-hover/cards:opacity-50 group-hover/cards:grayscale hover:!opacity-100 hover:!grayscale-0" style={{ background: 'linear-gradient(to bottom right, rgba(51, 230, 209, 0.08), rgba(51, 230, 209, 0.15))', borderColor: 'rgba(51, 230, 209, 0.3)' }}>
                                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" style={{ backgroundColor: 'rgba(51, 230, 209, 0.2)' }} />
                                    <div className="relative">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="w-12 h-12 flex items-center justify-center rounded-xl text-white" style={{ backgroundColor: '#33e6d1' }}>
                                                <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                                    <polyline points="9 22 9 12 15 12 15 22" />
                                                </svg>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-3xl font-bold" style={{ color: 'rgba(51, 230, 209, 0.4)' }}>01</span>
                                                <svg className="size-5 -rotate-45" style={{ color: '#33e6d1' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-semibold text-primary mb-2">Residential Septic Pumping</h3>
                                        <p className="text-sm text-tertiary mb-4">Complete septic tank pumping for homes of all sizes. We recommend pumping for optimal performance.</p>
                                        <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(51, 230, 209, 0.3)' }}>
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-1.5 text-xs text-tertiary">
                                                    <ShieldCheck className="size-4" style={{ color: '#33e6d1' }} />
                                                    <span>All tank sizes</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 text-xs text-tertiary">
                                                    <ShieldCheck className="size-4" style={{ color: '#33e6d1' }} />
                                                    <span>Same-day available</span>
                                                </div>
                                            </div>
                                            <span className="px-2.5 py-1 text-xs font-medium rounded-full" style={{ backgroundColor: 'rgba(51, 230, 209, 0.15)', color: '#33e6d1' }}>Most Popular</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2 - Commercial */}
                                <div className="relative p-4 rounded-2xl border transition-all duration-300 overflow-hidden hover:scale-[1.02] group-hover/cards:opacity-50 group-hover/cards:grayscale hover:!opacity-100 hover:!grayscale-0" style={{ background: 'linear-gradient(to bottom right, rgba(51, 230, 209, 0.08), rgba(51, 230, 209, 0.15))', borderColor: 'rgba(51, 230, 209, 0.3)' }}>
                                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" style={{ backgroundColor: 'rgba(51, 230, 209, 0.2)' }} />
                                    <div className="relative">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="w-12 h-12 flex items-center justify-center rounded-xl text-white" style={{ backgroundColor: '#33e6d1' }}>
                                                <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="1" y="3" width="15" height="13" />
                                                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                                                    <circle cx="5.5" cy="18.5" r="2.5" />
                                                    <circle cx="18.5" cy="18.5" r="2.5" />
                                                </svg>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-3xl font-bold" style={{ color: 'rgba(51, 230, 209, 0.4)' }}>02</span>
                                                <svg className="size-5 -rotate-45" style={{ color: '#33e6d1' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-semibold text-primary mb-2">Commercial Septic Pumping</h3>
                                        <p className="text-sm text-tertiary mb-4">High-capacity pumping for businesses, restaurants, and commercial properties with heavy usage demands.</p>
                                        <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(51, 230, 209, 0.3)' }}>
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-1.5 text-xs text-tertiary">
                                                    <ShieldCheck className="size-4" style={{ color: '#33e6d1' }} />
                                                    <span>Large tanks</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 text-xs text-tertiary">
                                                    <ShieldCheck className="size-4" style={{ color: '#33e6d1' }} />
                                                    <span>Flexible scheduling</span>
                                                </div>
                                            </div>
                                            <span className="px-2.5 py-1 text-xs font-medium rounded-full" style={{ backgroundColor: 'rgba(51, 230, 209, 0.15)', color: '#33e6d1' }}>High Capacity</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 3 - Emergency */}
                                <div className="relative p-4 rounded-2xl border transition-all duration-300 overflow-hidden hover:scale-[1.02] group-hover/cards:opacity-50 group-hover/cards:grayscale hover:!opacity-100 hover:!grayscale-0" style={{ background: 'linear-gradient(to bottom right, rgba(51, 230, 209, 0.08), rgba(51, 230, 209, 0.15))', borderColor: 'rgba(51, 230, 209, 0.3)' }}>
                                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" style={{ backgroundColor: 'rgba(51, 230, 209, 0.2)' }} />
                                    <div className="relative">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="w-12 h-12 flex items-center justify-center rounded-xl text-white" style={{ backgroundColor: '#33e6d1' }}>
                                                <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <polyline points="12 6 12 12 16 14" />
                                                </svg>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-3xl font-bold" style={{ color: 'rgba(51, 230, 209, 0.4)' }}>03</span>
                                                <svg className="size-5 -rotate-45" style={{ color: '#33e6d1' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-semibold text-primary mb-2">Emergency Pumping</h3>
                                        <p className="text-sm text-tertiary mb-4">24/7 emergency septic pumping when you need immediate assistance. Fast response, day or night.</p>
                                        <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(51, 230, 209, 0.3)' }}>
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-1.5 text-xs text-tertiary">
                                                    <ShieldCheck className="size-4" style={{ color: '#33e6d1' }} />
                                                    <span>&lt;60 min response</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 text-xs text-tertiary">
                                                    <ShieldCheck className="size-4" style={{ color: '#33e6d1' }} />
                                                    <span>No extra fees</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(51, 230, 209, 0.15)' }}>
                                                <span className="relative flex size-2">
                                                    <span className="absolute inline-flex size-full animate-ping rounded-full opacity-75" style={{ backgroundColor: '#33e6d1' }} />
                                                    <span className="relative inline-flex size-2 rounded-full" style={{ backgroundColor: '#33e6d1' }} />
                                                </span>
                                                <span className="text-xs font-medium" style={{ color: '#33e6d1' }}>24/7 Available</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Grid Section */}
                <section className="px-6 lg:px-10">
                    <div className="max-w-7xl mx-auto border border-tertiary grid lg:grid-cols-2 divide-x divide-y divide-tertiary">
                        {/* Cell 1 - Trusted Service Stats */}
                        <div className="p-5 sm:p-10 flex flex-col gap-3">
                            <h5 className="text-xl sm:text-2xl font-semibold text-primary text-balance sm:text-pretty">
                                A trusted team you can count on
                            </h5>
                            <p className="sm:max-w-[28rem] text-tertiary text-pretty mb-12 sm:mb-16">
                                Able Septic has been serving Asheville and Western NC for decades, building a reputation for reliability and excellence.
                            </p>
                            <div className="flex flex-col divide-y divide-tertiary">
                                {/* Stat Row 1 */}
                                <div className="flex items-center gap-6 py-5 first:pt-0">
                                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-success-secondary">
                                        <AwardIcon className="size-6 text-success-primary" />
                                    </div>
                                    <div className="flex flex-1 items-center gap-6">
                                        <div className="flex flex-col flex-1 pl-6 border-l border-tertiary">
                                            <p className="text-primary font-medium text-lg sm:text-xl">25+</p>
                                            <p className="leading-tight text-sm text-tertiary">Years of experience</p>
                                        </div>
                                        <div className="flex flex-col flex-1 pl-6 border-l border-tertiary">
                                            <p className="text-primary font-medium text-lg sm:text-xl">A+</p>
                                            <p className="leading-tight text-sm text-tertiary">BBB Rating</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Stat Row 2 */}
                                <div className="flex items-center gap-6 py-5">
                                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-success-secondary">
                                        <TruckIcon className="size-6 text-success-primary" />
                                    </div>
                                    <div className="flex flex-1 items-center gap-6">
                                        <div className="flex flex-col flex-1 pl-6 border-l border-tertiary">
                                            <p className="text-primary font-medium text-lg sm:text-xl">50,000+</p>
                                            <p className="leading-tight text-sm text-tertiary">Tanks pumped</p>
                                        </div>
                                        <div className="flex flex-col flex-1 pl-6 border-l border-tertiary">
                                            <p className="text-primary font-medium text-lg sm:text-xl">4.9★</p>
                                            <p className="leading-tight text-sm text-tertiary">Google rating</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cell 2 - Fast Response */}
                        <div className="p-5 sm:p-10 flex flex-col gap-3">
                            <h5 className="text-xl sm:text-2xl font-semibold text-primary">Fast response, every time</h5>
                            <p className="max-w-[26rem] text-tertiary text-pretty">
                                When you need septic service, you need it fast. Our fleet is strategically located across Western NC for <span className="text-primary font-medium">under 60-minute response</span> times and <span className="text-primary font-medium">same-day service</span> availability.
                            </p>
                            {/* Response Time Visual */}
                            <div className="mt-8 space-y-4">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-tertiary">Average response time</span>
                                    <span className="text-primary font-semibold">45 min</span>
                                </div>
                                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                                    <div className="h-full rounded-full" style={{ width: '75%', background: 'linear-gradient(to right, #2bc4b4, #33e6d1)' }} />
                                </div>
                                <div className="grid grid-cols-3 gap-0 mt-6">
                                    <div className="text-center p-4 rounded-xl bg-white/40 backdrop-blur-md border border-tertiary">
                                        <p className="text-2xl font-bold text-primary">98%</p>
                                        <p className="text-xs text-tertiary mt-1">Same-day service</p>
                                    </div>
                                    <div className="text-center p-4 rounded-xl bg-white/40 backdrop-blur-md border border-tertiary">
                                        <p className="text-2xl font-bold text-primary">&lt;1hr</p>
                                        <p className="text-xs text-tertiary mt-1">Emergency arrival</p>
                                    </div>
                                    <div className="text-center p-4 rounded-xl bg-white/40 backdrop-blur-md border border-tertiary">
                                        <p className="text-2xl font-bold text-primary">15+</p>
                                        <p className="text-xs text-tertiary mt-1">Service trucks</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cell 3 - Why Choose Us */}
                        <div className="p-5 sm:p-10 flex flex-col gap-4">
                            <div>
                                <h5 className="text-xl sm:text-2xl font-semibold text-primary">Why homeowners choose us</h5>
                                <p className="text-tertiary text-sm mt-1">Trusted by thousands of families across Western NC</p>
                            </div>

                            {/* Feature List with Icons */}
                            <div className="flex flex-col gap-4 mt-2">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-success-secondary">
                                        <svg className="size-4 text-success-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-primary">Transparent pricing</p>
                                        <p className="text-xs text-tertiary">Upfront quotes with no hidden fees or surprises</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-success-secondary">
                                        <svg className="size-4 text-success-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-primary">Expert technicians</p>
                                        <p className="text-xs text-tertiary">Licensed, certified, and background-checked pros</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-success-secondary">
                                        <svg className="size-4 text-success-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                                            <path d="m9 12 2 2 4-4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-primary">Eco-friendly disposal</p>
                                        <p className="text-xs text-tertiary">EPA-compliant waste handling and recycling</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-success-secondary">
                                        <svg className="size-4 text-success-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                                            <line x1="16" x2="16" y1="2" y2="6" />
                                            <line x1="8" x2="8" y1="2" y2="6" />
                                            <line x1="3" x2="21" y1="10" y2="10" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-primary">Flexible scheduling</p>
                                        <p className="text-xs text-tertiary">Weekends, evenings, and same-day available</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Cell 4 - Certifications */}
                        <div className="p-5 sm:p-10 flex flex-col gap-3">
                            <h5 className="text-xl sm:text-2xl font-semibold text-primary">Certified & compliant</h5>
                            <p className="max-w-[20rem] text-tertiary text-pretty">
                                We maintain all required certifications and follow strict NC DEQ guidelines for septic service and waste disposal.
                            </p>
                            {/* Certification List */}
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="flex items-start gap-3 p-3 border border-tertiary rounded-xl">
                                    <div className="size-10 flex-shrink-0 bg-success-secondary rounded-lg flex items-center justify-center">
                                        <ShieldCheck className="size-5 text-success-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-primary">NC Licensed</p>
                                        <p className="text-xs text-tertiary">Septic Contractor</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 border border-tertiary rounded-xl">
                                    <div className="size-10 flex-shrink-0 bg-success-secondary rounded-lg flex items-center justify-center">
                                        <ShieldCheck className="size-5 text-success-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-primary">EPA Compliant</p>
                                        <p className="text-xs text-tertiary">Waste Disposal</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 border border-tertiary rounded-xl">
                                    <div className="size-10 flex-shrink-0 bg-success-secondary rounded-lg flex items-center justify-center">
                                        <ShieldCheck className="size-5 text-success-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-primary">NAWT Member</p>
                                        <p className="text-xs text-tertiary">Industry Association</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 border border-tertiary rounded-xl">
                                    <div className="size-10 flex-shrink-0 bg-success-secondary rounded-lg flex items-center justify-center">
                                        <ShieldCheck className="size-5 text-success-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-primary">BBB Accredited</p>
                                        <p className="text-xs text-tertiary">A+ Rating</p>
                                    </div>
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
