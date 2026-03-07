"use client";

import { useState, useRef } from "react";
import Link from "next/link";

// Arrow Icon
const ArrowIcon = () => (
    <svg className="shrink-0 transition-transform duration-150 group-hover:translate-x-0.5" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M0.5 5.5h7" />
        <path d="M1.5 1.5l4 4-4 4" />
    </svg>
);

// Plus Icon
const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12">
        <path fill="currentColor" d="M6.87988 5.125H11.75v1.75H6.87988v4.875h-1.75V6.875H.25v-1.75h4.87988V.25h1.75z" />
    </svg>
);

// Left Arrow
const LeftArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
        <path d="M9.613 2.62 5.107 7.124h9.137v1.75H5.107l4.506 4.506-1.238 1.238-6-6L1.756 8l.619-.62 6-6 1.238 1.24Z" />
    </svg>
);

// Right Arrow
const RightArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
        <path d="m6.387 2.62 4.506 4.505H1.756v1.75h9.137l-4.506 4.506 1.238 1.238 6-6L14.245 8l-.618-.62-6-6-1.239 1.24Z" />
    </svg>
);

// Customer Story Data
const enterpriseCustomers = [
    {
        id: "residential",
        logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
                <rect width="40" height="40" fill="#16b364" rx="4" />
                <path fill="#fff" d="M20 10l8 6v12H12V16l8-6zm-5 16h10v-8l-5-3.75L15 18v8z" />
            </svg>
        ),
        title: "Smith family protects their home with regular septic maintenance.",
        description: "Regular pumping every 3 years has kept this family's system running perfectly for over a decade.",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
        stats: [
            { value: "10+", label: "years of service" },
            { value: "Zero", label: "emergency calls" },
            { value: "Services", label: "Pumping, Inspection, Maintenance" },
        ],
    },
    {
        id: "commercial",
        logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
                <rect width="40" height="40" fill="#3981FF" rx="4" />
                <path fill="#fff" d="M10 30V14h8v16h-8zm12-20v20h8V10h-8z" />
            </svg>
        ),
        title: "Mountain View Restaurant relies on WDT Crest for grease trap service.",
        description: "Monthly grease trap cleaning keeps this busy Asheville restaurant compliant and operational.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
        stats: [
            { value: "Monthly", label: "service schedule" },
            { value: "0", label: "health violations" },
            { value: "Services", label: "Grease Trap, Pumping, Emergency" },
        ],
    },
    {
        id: "construction",
        logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
                <rect width="40" height="40" fill="#FF930F" rx="4" />
                <path fill="#fff" d="M20 8l10 8v14H10V16l10-8zm0 4l-6 4.8V26h12V16.8L20 12z" />
            </svg>
        ),
        title: "Henderson Builders partners with WDT Crest on new construction.",
        description: "We've installed septic systems for 50+ new homes with 100% first-inspection pass rate.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
        stats: [
            { value: "50+", label: "systems installed" },
            { value: "100%", label: "inspection pass rate" },
            { value: "Services", label: "Installation, Permits, Design" },
        ],
    },
    {
        id: "property-mgmt",
        logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
                <rect width="40" height="40" fill="#7f56d9" rx="4" />
                <path fill="#fff" d="M8 32V12h10v20H8zm14-24v24h10V8H22z" />
            </svg>
        ),
        title: "Blue Ridge HOA manages 200+ units with our maintenance plans.",
        description: "Quarterly inspections and priority emergency response for their entire community.",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80",
        stats: [
            { value: "200+", label: "units maintained" },
            { value: "4hr", label: "priority response" },
            { value: "Services", label: "Maintenance Plan, Emergency, Inspections" },
        ],
    },
];

// Case Study Data
const caseStudies = [
    {
        title: "Emergency service saved our vacation rental during peak season.",
        logo: "Vacation Rentals",
        image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&q=80",
    },
    {
        title: "Real estate inspection helped negotiate $5,000 off the sale price.",
        logo: "Home Buyers",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    },
    {
        title: "Annual maintenance keeps our bed & breakfast running smoothly.",
        logo: "B&B Owners",
        image: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=600&q=80",
    },
    {
        title: "Drain field restoration extended our system life by 15+ years.",
        logo: "Property Owners",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    },
    {
        title: "New construction septic installation completed ahead of schedule.",
        logo: "Home Builders",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
    },
    {
        title: "Commercial grease trap service keeps our kitchen compliant.",
        logo: "Restaurant Owners",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    },
];

// Testimonials
const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "Homeowner, Asheville",
        quote: "WDT Crest has been maintaining our septic system for over 8 years. Their technicians are professional, punctual, and always explain everything clearly. We've never had an emergency because they catch issues early.",
    },
    {
        name: "James Robertson",
        role: "Property Manager, Blue Ridge HOA",
        quote: "Managing 200+ properties means I need a reliable partner. WDT Crest's maintenance plans and priority response have been invaluable. They make my job so much easier.",
    },
    {
        name: "Maria Chen",
        role: "Owner, Mountain Bistro",
        quote: "Our restaurant depends on regular grease trap service. WDT Crest works around our schedule, arriving early before we open. They've helped us maintain a perfect health inspection record.",
    },
    {
        name: "David Thompson",
        role: "General Contractor",
        quote: "We've partnered with WDT Crest on over 50 new construction projects. Their installations pass inspection the first time, every time. That reliability is invaluable in our business.",
    },
];

export const BusinessSizesSection = () => {
    const [openCustomer, setOpenCustomer] = useState(0);
    const carouselRef = useRef<HTMLUListElement>(null);

    const scrollCarousel = (direction: "left" | "right") => {
        if (carouselRef.current) {
            const scrollAmount = 348;
            carouselRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="bg-white py-20 sm:py-24 lg:py-28 border-x-2 border-gray-200">
            <div className="mx-auto max-w-[1280px] px-4 sm:px-8 flex flex-col gap-5 sm:gap-6 lg:gap-8">
                {/* Main Header */}
                <div className="max-w-[800px]">
                    <h2 className="inline text-[28px] sm:text-[40px] font-medium leading-[1.1] tracking-[-0.02em] text-primary antialiased">
                        Serving properties of all sizes.
                    </h2>
                    <p className="inline text-[28px] sm:text-[40px] font-light leading-[1.1] tracking-[-0.02em] text-tertiary antialiased">
                        {" "}Professional septic services that grow with your needs.
                    </p>
                </div>
                <span className="block w-full h-px bg-gradient-to-r from-gray-300/50 to-transparent" />

                <div className="flex flex-col gap-6 sm:gap-8 lg:gap-16">
                    {/* Enterprise/Residential Section */}
                    <section className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
                        <header className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                            <h3 className="text-xl sm:text-2xl font-medium leading-[1.25] tracking-[-0.02em] text-primary lg:col-span-1">
                                Trusted by homeowners and businesses across Western NC
                            </h3>
                            <p className="text-base sm:text-lg leading-relaxed text-secondary max-w-[520px]">
                                Over 5,000 customers rely on WDT Crest for routine maintenance, emergency repairs, and NC-certified inspections. 30+ years of experience serving the community.
                            </p>
                            <div className="flex gap-3 flex-wrap mt-2">
                                <Link
                                    className="group inline-flex items-center gap-1.5 px-4 py-2.5 text-[15px] font-medium rounded-full bg-primary text-white hover:bg-gray-800 transition-all duration-150"
                                    href="tel:8282541920"
                                >
                                    Call (828) 254-1920
                                    <ArrowIcon />
                                </Link>
                            </div>
                        </header>

                        {/* Customer Stories Accordion */}
                        <div className="flex flex-col border border-gray-200 rounded-xl overflow-hidden">
                            {enterpriseCustomers.map((customer, index) => (
                                <div key={customer.id} className="border-b border-gray-200 last:border-b-0">
                                    <div
                                        className={`flex items-center gap-4 p-4 sm:px-5 cursor-pointer transition-colors duration-150 ${
                                            openCustomer === index ? "bg-gray-50" : "hover:bg-gray-50"
                                        }`}
                                    >
                                        <div className="shrink-0">{customer.logo}</div>
                                        <button
                                            type="button"
                                            className="flex-1 bg-transparent border-none text-left cursor-pointer p-0"
                                            aria-expanded={openCustomer === index}
                                            onClick={() => setOpenCustomer(openCustomer === index ? -1 : index)}
                                        >
                                            <h3 className="text-[17px] font-medium leading-[1.4] text-primary m-0">
                                                {customer.title}
                                            </h3>
                                        </button>
                                        <div className="shrink-0">
                                            <Link
                                                className="group inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium rounded-full border border-gray-200 bg-transparent hover:bg-gray-50 transition-all duration-300 overflow-hidden"
                                                href="tel:8282541920"
                                                style={{ width: openCustomer === index ? "140px" : "40px" }}
                                            >
                                                <div
                                                    className="flex items-center justify-center transition-all duration-300"
                                                    style={{ width: openCustomer === index ? "140px" : "40px" }}
                                                >
                                                    <span
                                                        className="flex items-center gap-1 whitespace-nowrap transition-opacity duration-200"
                                                        style={{ opacity: openCustomer === index ? 1 : 0 }}
                                                    >
                                                        Get a quote
                                                        <ArrowIcon />
                                                    </span>
                                                    <span
                                                        className="absolute flex items-center justify-center transition-opacity duration-200"
                                                        style={{ opacity: openCustomer === index ? 0 : 1 }}
                                                    >
                                                        <PlusIcon />
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div
                                        className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]"
                                        style={{ maxHeight: openCustomer === index ? "625px" : "0px" }}
                                    >
                                        <div className="w-full">
                                            <img
                                                loading="lazy"
                                                width="1200"
                                                height="520"
                                                alt=""
                                                src={customer.image}
                                                className="w-full h-auto object-cover aspect-[21/9]"
                                            />
                                        </div>
                                        <div className="flex flex-wrap gap-6 p-5 sm:px-6 bg-gray-50">
                                            {customer.stats.map((stat, i) => (
                                                <div key={i} className="flex-1 min-w-[150px]">
                                                    <p className="text-[15px] leading-relaxed text-secondary">
                                                        <span className="font-semibold text-primary">{stat.value}</span> {stat.label}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="px-6 py-4 pb-6">
                                            <Link
                                                className="group inline-flex items-center gap-1.5 px-4 py-2.5 text-[15px] font-medium rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-all duration-150"
                                                href="tel:8282541920"
                                            >
                                                Schedule service
                                                <ArrowIcon />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Feature Detail Grid */}
                        <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
                            <span className="text-xl sm:text-2xl font-medium text-primary pb-4">
                                Why customers choose WDT Crest
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    {
                                        title: "NC-certified professionals.",
                                        desc: "Our technicians are fully licensed and certified for septic inspections and installations in North Carolina.",
                                        link: { text: "View certifications", href: "/services" },
                                    },
                                    {
                                        title: "24/7 emergency service.",
                                        desc: "Septic emergencies don't wait for business hours. Our team is available around the clock for urgent situations.",
                                        link: { text: "Call emergency line", href: "tel:8282541920" },
                                    },
                                    {
                                        title: "30+ years experience.",
                                        desc: "Family-owned and operated since 1994. We know Western NC septic systems inside and out.",
                                        link: { text: "Learn about us", href: "/about" },
                                    },
                                ].map((feature, i) => (
                                    <div key={i} className="flex flex-col gap-3 p-6 bg-gray-50 rounded-xl transition-colors duration-200 hover:bg-gray-100">
                                        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400/15 via-cyan-500/10 to-indigo-500/15">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                                                <path
                                                    fill="url(#gradFeature)"
                                                    d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.5 5.5l-4 4-2-2 1-1 1 1 3-3 1 1z"
                                                />
                                                <defs>
                                                    <linearGradient id="gradFeature" x1="0" y1="0" x2="16" y2="16">
                                                        <stop stopColor="#11efa4" />
                                                        <stop offset="0.5" stopColor="#18b5c1" />
                                                        <stop offset="1" stopColor="#6772e5" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="inline text-[15px] font-semibold text-primary">{feature.title}</h4>
                                            <p className="inline text-[15px] text-secondary"> {feature.desc}</p>
                                        </div>
                                        <div className="mt-auto">
                                            <Link
                                                className="group inline-flex items-center gap-1 text-[15px] font-medium text-primary hover:text-brand-600 hover:underline underline-offset-2 transition-colors duration-150"
                                                href={feature.link.href}
                                            >
                                                {feature.link.text}
                                                <span className="whitespace-nowrap">&nbsp;<ArrowIcon /></span>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Divider */}
                    <div className="py-8">
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                    </div>

                    {/* Startups/Small Business Section */}
                    <section className="flex flex-col gap-6 sm:gap-4 lg:gap-8">
                        <header className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                            <h3 className="text-xl sm:text-2xl font-medium leading-[1.25] tracking-[-0.02em] text-primary">
                                Flexible solutions for every property type
                            </h3>
                            <p className="text-base sm:text-lg leading-relaxed text-secondary max-w-[520px]">
                                From vacation rentals to restaurants, new construction to established homes — we have the expertise and equipment to handle any septic challenge.
                            </p>
                            <div className="flex gap-3 flex-wrap mt-2">
                                <Link
                                    className="group inline-flex items-center gap-1.5 px-4 py-2.5 text-[15px] font-medium rounded-full bg-primary text-white hover:bg-gray-800 transition-all duration-150"
                                    href="/services"
                                >
                                    View all services
                                    <ArrowIcon />
                                </Link>
                            </div>
                        </header>

                        {/* Case Study Carousel */}
                        <section className="relative" aria-label="Customer stories">
                            <div className="flex gap-2 mb-4 lg:absolute lg:right-0 lg:-top-14">
                                <button
                                    type="button"
                                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 bg-transparent hover:bg-gray-50 hover:border-gray-300 cursor-pointer transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
                                    aria-label="Previous"
                                    onClick={() => scrollCarousel("left")}
                                >
                                    <LeftArrow />
                                </button>
                                <button
                                    type="button"
                                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 bg-transparent hover:bg-gray-50 hover:border-gray-300 cursor-pointer transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
                                    aria-label="Next"
                                    onClick={() => scrollCarousel("right")}
                                >
                                    <RightArrow />
                                </button>
                            </div>
                            <div className="overflow-hidden">
                                <ul
                                    ref={carouselRef}
                                    role="list"
                                    className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-none p-1 list-none m-0"
                                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                                >
                                    {caseStudies.map((study, index) => (
                                        <li key={index} className="shrink-0 w-[280px] sm:w-[332px]">
                                            <Link
                                                className="group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 no-underline"
                                                href="tel:8282541920"
                                            >
                                                <div className="relative aspect-[9/10] overflow-hidden">
                                                    <img
                                                        loading="lazy"
                                                        width="864"
                                                        height="960"
                                                        alt=""
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                        src={study.image}
                                                    />
                                                    <div className="absolute bottom-4 left-4 z-10">
                                                        <span className="text-white text-lg font-semibold drop-shadow-md">
                                                            {study.logo}
                                                        </span>
                                                    </div>
                                                </div>
                                                <h4 className="px-4 pt-4 pb-2 text-[15px] leading-relaxed text-primary">
                                                    {study.title}
                                                </h4>
                                                <div className="px-4 pb-4 text-[15px] font-medium text-primary group-hover:text-brand-600 inline-flex items-center gap-1">
                                                    Get a free quote
                                                    <span className="whitespace-nowrap">&nbsp;<ArrowIcon /></span>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Program Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                {
                                    title: "Maintenance Plans.",
                                    desc: "Save money with scheduled service and priority emergency response. Perfect for homeowners and property managers.",
                                    link: "Learn about plans",
                                    graphic: (
                                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <rect width="80" height="80" rx="16" fill="#f6f9fc" />
                                            <path d="M40 20v40M20 40h40" stroke="#16b364" strokeWidth="4" strokeLinecap="round" />
                                            <circle cx="40" cy="40" r="16" stroke="#16b364" strokeWidth="4" fill="none" />
                                        </svg>
                                    ),
                                },
                                {
                                    title: "New Construction.",
                                    desc: "Work with NC-certified installers for new septic systems. We handle permits, design, and complete installation.",
                                    link: "Start your project",
                                    graphic: (
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <path d="M20 2l18 14v22H2V16L20 2z" fill="#FFB000" />
                                            <path d="M20 2L2 16v22h18V2z" fill="url(#atlas-a)" />
                                            <path d="M20 2l18 14L20 38V2z" fill="url(#atlas-b)" />
                                            <defs>
                                                <linearGradient id="atlas-a" x1="11" y1="16" x2="11" y2="38">
                                                    <stop stopColor="#FFD748" />
                                                    <stop offset="1" stopColor="#FFCB48" />
                                                </linearGradient>
                                                <linearGradient id="atlas-b" x1="20" y1="30" x2="20" y2="14">
                                                    <stop stopColor="#FFAD00" />
                                                    <stop offset="1" stopColor="#FF7600" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    ),
                                },
                            ].map((card, i) => (
                                <Link
                                    key={i}
                                    className="group relative block rounded-xl overflow-hidden no-underline hover:-translate-y-0.5 transition-transform duration-200"
                                    href="tel:8282541920"
                                >
                                    <div className="absolute inset-0 rounded-xl p-px bg-gradient-to-br from-gray-200/50 to-gray-200/20 [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude]" />
                                    <div className="absolute inset-0 rounded-xl p-px opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-indigo-500" />
                                    </div>
                                    <div className="flex flex-col sm:flex-row h-full bg-white rounded-[11px]">
                                        <div className="flex-1 p-6 flex flex-col gap-3">
                                            <div className="flex-1">
                                                <h4 className="inline text-[15px] font-semibold text-primary">{card.title}</h4>
                                                <p className="inline text-[15px] text-secondary"> {card.desc}</p>
                                            </div>
                                            <div className="text-[15px] font-medium text-primary group-hover:text-brand-600 inline-flex items-center gap-1">
                                                {card.link}
                                                <span className="whitespace-nowrap">&nbsp;<ArrowIcon /></span>
                                            </div>
                                        </div>
                                        <div className="shrink-0 p-6 flex items-center justify-center">
                                            {card.graphic}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Divider */}
                    <div className="py-8" />

                    {/* Platform/Commercial Section */}
                    <section className="flex flex-col gap-8 sm:gap-10 lg:gap-16">
                        <header className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                            <h3 className="text-xl sm:text-2xl font-medium leading-[1.25] tracking-[-0.02em] text-primary">
                                Complete solutions for property managers and commercial properties
                            </h3>
                            <p className="text-base sm:text-lg leading-relaxed text-secondary max-w-[520px]">
                                From HOAs to restaurants to vacation rental companies, we help businesses maintain multiple systems efficiently with volume pricing and priority scheduling.
                            </p>
                            <div className="flex gap-3 flex-wrap mt-2">
                                <Link
                                    className="group inline-flex items-center gap-1.5 px-4 py-2.5 text-[15px] font-medium rounded-full bg-primary text-white hover:bg-gray-800 transition-all duration-150"
                                    href="tel:8282541920"
                                >
                                    Commercial services
                                    <ArrowIcon />
                                </Link>
                            </div>
                        </header>

                        {/* Feature Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                            {[
                                {
                                    title: "Volume pricing.",
                                    desc: "Save up to 15% with multi-property contracts. Perfect for HOAs and property management companies.",
                                    link: "Get a volume quote",
                                },
                                {
                                    title: "Priority scheduling.",
                                    desc: "Commercial customers receive 4-hour emergency response and flexible scheduling around business hours.",
                                    link: "Learn more",
                                },
                                {
                                    title: "Single point of contact.",
                                    desc: "One dedicated account manager for all your properties. Simplified communication and billing.",
                                    link: "Contact us",
                                },
                            ].map((feature, i) => (
                                <div key={i} className="flex flex-col gap-3 p-6 bg-gray-50 rounded-xl transition-colors duration-200 hover:bg-gray-100">
                                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400/15 via-cyan-500/10 to-indigo-500/15">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                                            <path
                                                fill="url(#gradCommercial)"
                                                d="M14 2H2v12h12V2zM8 12l-4-4 1.5-1.5L8 9l4.5-4.5L14 6l-6 6z"
                                            />
                                            <defs>
                                                <linearGradient id="gradCommercial" x1="0" y1="0" x2="16" y2="16">
                                                    <stop stopColor="#11efa4" />
                                                    <stop offset="0.5" stopColor="#18b5c1" />
                                                    <stop offset="1" stopColor="#6772e5" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="inline text-[15px] font-semibold text-primary">{feature.title}</h4>
                                        <p className="inline text-[15px] text-secondary"> {feature.desc}</p>
                                    </div>
                                    <div className="mt-auto">
                                        <Link
                                            className="group inline-flex items-center gap-1 text-[15px] font-medium text-primary hover:text-brand-600 hover:underline underline-offset-2 transition-colors duration-150"
                                            href="tel:8282541920"
                                        >
                                            {feature.link}
                                            <span className="whitespace-nowrap">&nbsp;<ArrowIcon /></span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Testimonials */}
                        <div className="mt-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col gap-4 p-6 bg-gray-50 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                                    >
                                        <q className="text-[15px] leading-relaxed text-secondary flex-1 not-italic">
                                            {testimonial.quote}
                                        </q>
                                        <div className="text-sm font-semibold text-primary">
                                            {testimonial.name},{" "}
                                            <span className="font-normal text-secondary">{testimonial.role}</span>
                                        </div>
                                        <Link
                                            className="group inline-flex items-center gap-1 text-[15px] font-medium text-primary hover:text-brand-600 hover:underline underline-offset-2 transition-colors duration-150"
                                            href="tel:8282541920"
                                        >
                                            Get a quote
                                            <span className="whitespace-nowrap">&nbsp;<ArrowIcon /></span>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default BusinessSizesSection;
