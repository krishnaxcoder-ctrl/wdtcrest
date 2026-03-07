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
            <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
                {/* Left Content */}
                <div className="flex flex-col justify-center px-6 py-16 lg:px-12 lg:py-24">
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
                        <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-secondary pt-8">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-primary">30+</span>
                                <span className="text-sm text-tertiary">Years Experience</span>
                            </div>
                            <div className="h-8 w-px bg-secondary"></div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-primary">5,000+</span>
                                <span className="text-sm text-tertiary">Happy Customers</span>
                            </div>
                            <div className="h-8 w-px bg-secondary"></div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-primary">24/7</span>
                                <span className="text-sm text-tertiary">Emergency Service</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative min-h-[400px] lg:min-h-screen">
                    <img
                        src="/heroimage1.avif"
                        alt="Professional septic service truck"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
