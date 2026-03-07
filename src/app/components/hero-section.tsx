"use client";

import Link from "next/link";

const ArrowIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const DiagonalArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
);

export function HeroSection() {
    return (
        <section className="mx-auto max-w-7xl border-x border-secondary">
            <div className="grid h-[700px] grid-cols-1 lg:grid-cols-2">
                {/* Left Content */}
                <div className="relative flex flex-col justify-end px-6 pb-12 lg:px-12 lg:pb-16">
                    {/* Background image with hue filter */}
                    <div className="absolute inset-0" style={{ backgroundImage: "url('/eligibility-bg.jpg')", backgroundSize: "cover", backgroundPosition: "top", filter: "hue-rotate(90deg)" }}></div>
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
                                <DiagonalArrowIcon />
                            </Link>
                            <Link
                                href="/reliable-septic-services"
                                className="inline-flex items-center gap-2 rounded-md border border-secondary bg-white px-6 py-3 text-base font-medium text-primary transition-colors hover:bg-secondary"
                            >
                                View Services
                                <DiagonalArrowIcon />
                            </Link>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-6 grid w-full grid-cols-3 gap-3 border-t border-secondary pt-5 sm:mt-10 sm:flex sm:w-auto sm:flex-wrap sm:gap-6 sm:pt-8">
                            <div className="flex flex-col items-center gap-1 sm:flex-row sm:items-center sm:gap-3">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-fg-brand-primary size-4 sm:size-5">
                                    <path d="M12 6v6l4 2m6-2c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"></path>
                                </svg>
                                <div className="text-center sm:text-left">
                                    <p className="text-primary text-xs font-semibold sm:text-sm">3-4 Hours</p>
                                    <p className="text-tertiary text-[10px] sm:text-xs">Duration</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-1 sm:flex-row sm:items-center sm:gap-3">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-fg-brand-primary size-4 sm:size-5">
                                    <path d="M22 21v-2a4.002 4.002 0 0 0-3-3.874M15.5 3.291a4.001 4.001 0 0 1 0 7.418M17 21c0-1.864 0-2.796-.305-3.53a4 4 0 0 0-2.164-2.165C13.796 15 12.864 15 11 15H8c-1.864 0-2.796 0-3.53.305a4 4 0 0 0-2.166 2.164C2 18.204 2 19.136 2 21M13.5 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"></path>
                                </svg>
                                <div className="text-center sm:text-left">
                                    <p className="text-primary text-xs font-semibold sm:text-sm">1:1 Training</p>
                                    <p className="text-tertiary text-[10px] sm:text-xs">Teaching</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-1 sm:flex-row sm:items-center sm:gap-3">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-fg-brand-primary size-4 sm:size-5">
                                    <path d="M7.967 14.722 7 22l4.588-2.753c.15-.09.225-.135.305-.152a.5.5 0 0 1 .214 0c.08.017.155.062.305.152L17 22l-.966-7.279M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0Z"></path>
                                </svg>
                                <div className="text-center sm:text-left">
                                    <p className="text-primary text-xs font-semibold sm:text-sm">International</p>
                                    <p className="text-tertiary text-[10px] sm:text-xs">Certification</p>
                                </div>
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
                        <div className="rounded-xl border border-white/20 bg-gradient-to-br from-white/95 to-white/80 shadow-2xl backdrop-blur-xl">
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
                            <div className="grid grid-cols-3 gap-px bg-gray-100 p-px">
                                {[
                                    { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", label: "Pumping", desc: "Septic & grease trap" },
                                    { icon: "M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11", label: "Inspections", desc: "NC-certified checks" },
                                    { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", label: "Installation", desc: "New septic systems" },
                                    { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Emergency", desc: "24/7 rapid response" },
                                    { icon: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z", label: "Repairs", desc: "Fast & reliable fixes" },
                                    { icon: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z", label: "Maintenance", desc: "Regular care plans" },
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
                            <div className="relative flex items-center justify-between overflow-visible bg-gradient-to-r from-gray-50 to-gray-100/50 px-5 py-3">
                                <div className="flex items-center gap-3">
                                    <div className="group/avatars relative z-[100] flex items-center">
                                        {[
                                            {
                                                src: 'https://www.untitledui.com/images/avatars/alec-whitten?w=144&h=144&q=75&fm=webp',
                                                name: 'Alec Whitten',
                                                location: 'Asheville, NC',
                                                quote: 'Best septic service in WNC! Fast, professional, and fair pricing.',
                                            },
                                            {
                                                src: 'https://www.untitledui.com/images/avatars/olivia-rhye?w=144&h=144&q=75&fm=webp',
                                                name: 'Olivia Rhye',
                                                location: 'Black Mountain, NC',
                                                quote: 'They came out same day for our emergency. Highly recommend!',
                                            },
                                            {
                                                src: 'https://www.untitledui.com/images/avatars/phoenix-baker?w=144&h=144&q=75&fm=webp',
                                                name: 'Phoenix Baker',
                                                location: 'Hendersonville, NC',
                                                quote: 'Professional team, great communication. 5 stars!',
                                            },
                                        ].map((person, i) => (
                                            <div key={i} className={`group/avatar relative flex-none transition-all duration-300 ease-out ${i > 0 ? '-ml-2 group-hover/avatars:ml-1' : ''}`}>
                                                <img
                                                    src={person.src}
                                                    alt={person.name}
                                                    className="h-7 w-7 rounded-full object-cover ring-2 ring-white"
                                                />
                                                {/* Floating Testimonial Card */}
                                                <div className="pointer-events-none absolute bottom-full left-1/2 z-[200] mb-3 -translate-x-1/2 opacity-0 transition-all duration-300 ease-out group-hover/avatar:pointer-events-auto group-hover/avatar:opacity-100">
                                                    <div className="w-64 rounded-xl border border-gray-100 bg-white p-4 shadow-xl">
                                                        <div className="flex items-center gap-3">
                                                            <img src={person.src} alt={person.name} className="size-10 rounded-full object-cover" />
                                                            <div>
                                                                <p className="text-sm font-semibold text-gray-900">{person.name}</p>
                                                                <p className="text-xs text-gray-500">{person.location}</p>
                                                            </div>
                                                        </div>
                                                        <p className="mt-3 text-sm leading-relaxed text-gray-600">"{person.quote}"</p>
                                                        <div className="mt-3 flex gap-0.5">
                                                            {[...Array(5)].map((_, j) => (
                                                                <svg key={j} className="size-4 fill-amber-400" viewBox="0 0 20 20">
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                                </svg>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    {/* Arrow */}
                                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                                                        <div className="size-4 rotate-45 border-b border-r border-gray-100 bg-white"></div>
                                                    </div>
                                                </div>
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
