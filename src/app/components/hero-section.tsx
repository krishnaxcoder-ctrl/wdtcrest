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
                <div className="flex flex-col justify-end px-6 pb-12 lg:px-12 lg:pb-16">
                    <div className="max-w-xl">
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
                    <div className="absolute inset-x-0 bottom-0 z-20 p-6 xl:p-8">
                        <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-secondary bg-white/90 py-2 pl-2 pr-4 shadow-sm backdrop-blur-sm">
                            <div className="flex size-7 items-center justify-center rounded-full bg-brand-100 ring-1 ring-brand-200">
                                <svg className="size-3.5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                    <path d="m9 12 2 2 4-4"></path>
                                </svg>
                            </div>
                            <span className="text-xs font-medium text-primary">NC-Certified Professionals</span>
                        </div>
                        <div className="overflow-hidden rounded-2xl border border-secondary bg-white/95 shadow-2xl backdrop-blur-md">
                            <div className="p-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-base font-semibold text-primary">What's included</h3>
                                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-200">6 services</span>
                                </div>
                                <div className="mt-5 grid grid-cols-2 gap-x-8">
                                    <div className="flex items-center gap-3 py-3 border-b border-secondary">
                                        <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-brand-50">
                                            <svg className="size-3.5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                <path d="m9 11 3 3L22 4"></path>
                                            </svg>
                                        </div>
                                        <span className="text-sm text-secondary">Septic tank pumping</span>
                                    </div>
                                    <div className="flex items-center gap-3 py-3 border-b border-secondary">
                                        <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-brand-50">
                                            <svg className="size-3.5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                <path d="m9 11 3 3L22 4"></path>
                                            </svg>
                                        </div>
                                        <span className="text-sm text-secondary">System inspections</span>
                                    </div>
                                    <div className="flex items-center gap-3 py-3 border-b border-secondary">
                                        <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-brand-50">
                                            <svg className="size-3.5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                <path d="m9 11 3 3L22 4"></path>
                                            </svg>
                                        </div>
                                        <span className="text-sm text-secondary">Drain field repairs</span>
                                    </div>
                                    <div className="flex items-center gap-3 py-3 border-b border-secondary">
                                        <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-brand-50">
                                            <svg className="size-3.5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                <path d="m9 11 3 3L22 4"></path>
                                            </svg>
                                        </div>
                                        <span className="text-sm text-secondary">Grease trap cleaning</span>
                                    </div>
                                    <div className="flex items-center gap-3 py-3">
                                        <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-brand-50">
                                            <svg className="size-3.5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                <path d="m9 11 3 3L22 4"></path>
                                            </svg>
                                        </div>
                                        <span className="text-sm text-secondary">Emergency service</span>
                                    </div>
                                    <div className="flex items-center gap-3 py-3">
                                        <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-brand-50">
                                            <svg className="size-3.5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                                <path d="m9 11 3 3L22 4"></path>
                                            </svg>
                                        </div>
                                        <span className="text-sm text-secondary">Tank installations</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between border-t border-secondary bg-secondary/30 px-4 py-3">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="size-3 fill-amber-400 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-xs font-medium text-tertiary">4.9 (5K+ reviews)</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="relative flex size-2">
                                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-500 opacity-75"></span>
                                        <span className="relative inline-flex size-2 rounded-full bg-brand-500"></span>
                                    </div>
                                    <span className="text-xs font-medium text-brand-600">Available 24/7</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
