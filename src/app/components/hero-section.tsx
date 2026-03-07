"use client";

import Link from "next/link";

const ArrowIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export function HeroSection() {
    return (
        <section className="mx-auto max-w-7xl border-x border-secondary">
            <div className="grid h-[700px] grid-cols-1 lg:grid-cols-2">
                {/* Left Content */}
                <div className="relative flex flex-col justify-end px-6 pb-12 lg:px-12 lg:pb-16">
                    {/* Background image with hue filter */}
                    <div className="absolute inset-0" style={{ backgroundImage: "url('/eligibility-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", filter: "hue-rotate(90deg)" }}></div>
                    {/* Overlay for opacity */}
                    <div className="absolute inset-0 bg-white/70"></div>
                    <div className="relative z-10 max-w-xl">
                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5">
                            <span className="size-2 rounded-full bg-brand-600"></span>
                            <span className="text-sm font-medium text-brand-700">Serving Western NC Since 1990</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl font-semibold tracking-tight text-primary lg:text-5xl xl:text-5xl">
                            Professional Septic Services You Can Trust
                        </h1>

                        {/* Description */}
                        <p className="mt-6 text-lg leading-relaxed text-tertiary">
                            From routine pumping to emergency repairs, our NC-certified team delivers reliable septic solutions for homes and businesses throughout Western North Carolina.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="tel:8282541920"
                                className="inline-flex items-center gap-2 rounded-md bg-brand-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-brand-700"
                            >
                                Call (828) 254-1920
                                <ArrowIcon />
                            </Link>
                            <Link
                                href="/reliable-septic-services"
                                className="inline-flex items-center gap-2 rounded-md border border-secondary bg-white px-6 py-3 text-base font-medium text-primary transition-colors hover:bg-secondary"
                            >
                                View Services
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-12 flex flex-wrap items-center gap-5 border-t border-secondary pt-8">
                            <div className="flex items-center gap-1.5">
                                <span className="text-base font-semibold text-primary">30+</span>
                                <span className="text-xs text-tertiary">Years Experience</span>
                            </div>
                            <div className="h-6 w-px bg-secondary"></div>
                            <div className="flex items-center gap-1.5">
                                <span className="text-base font-semibold text-primary">5,000+</span>
                                <span className="text-xs text-tertiary">Happy Customers</span>
                            </div>
                            <div className="h-6 w-px bg-secondary"></div>
                            <div className="flex items-center gap-1.5">
                                <span className="text-base font-semibold text-primary">24/7</span>
                                <span className="text-xs text-tertiary">Emergency Service</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative min-h-[400px] lg:h-full overflow-hidden">
                    <img
                        src="/heroimage1.avif"
                        alt="Professional septic service truck"
                        className="h-full w-full object-cover"
                    />
                    {/* Bottom Card */}
                    <div className="absolute inset-x-0 bottom-0 z-20 p-4 lg:p-6">
                        <div className="overflow-hidden rounded-xl border border-white/20 bg-gradient-to-br from-white/95 to-white/80 shadow-2xl backdrop-blur-xl">
                            {/* Header */}
                            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 shadow-lg shadow-brand-500/30">
                                        <svg className="size-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                            <path d="m9 12 2 2 4-4"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-900">Our Services</h3>
                                        <p className="text-xs text-gray-500">NC-Certified Professionals</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 ring-1 ring-emerald-200">
                                    <div className="relative flex size-2">
                                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                                        <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
                                    </div>
                                    <span className="text-xs font-semibold text-emerald-700">24/7 Available</span>
                                </div>
                            </div>

                            {/* Services Grid */}
                            <div className="grid grid-cols-2 gap-px bg-gray-100 p-px">
                                {[
                                    { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", label: "Pumping", desc: "Septic & grease trap" },
                                    { icon: "M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11", label: "Inspections", desc: "NC-certified checks" },
                                    { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", label: "Installation", desc: "New septic systems" },
                                    { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Emergency", desc: "24/7 rapid response" },
                                ].map((service, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-white p-4 transition-colors hover:bg-gray-50">
                                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 ring-1 ring-brand-100">
                                            <svg className="size-5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d={service.icon}></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900">{service.label}</h4>
                                            <p className="mt-0.5 text-xs text-gray-500">{service.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100/50 px-5 py-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex -space-x-2">
                                        {[...Array(3)].map((_, i) => (
                                            <div key={i} className="flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-[10px] font-bold text-white ring-2 ring-white">
                                                {['JD', 'MK', 'RS'][i]}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="flex gap-0.5">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="size-3 fill-amber-400" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-xs font-semibold text-gray-900">4.9</span>
                                        <span className="text-xs text-gray-500">(5K+)</span>
                                    </div>
                                </div>
                                <Link href="tel:8282541920" className="flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-700 hover:shadow-xl">
                                    <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                                    </svg>
                                    Call Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
