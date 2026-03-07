"use client";

import { useState } from "react";
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

// Chevron Right Icon
const ChevronRightIcon = () => (
    <svg className="shrink-0 transition-transform duration-150 group-hover:translate-x-0.5" width="6" height="10" viewBox="0 0 6 10" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M1 1l4 4-4 4" />
    </svg>
);


// Customer Story Data
const enterpriseCustomers = [
    {
        id: "residential",
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


export const BusinessSizesSection = () => {
    const [openCustomer, setOpenCustomer] = useState(0);

    return (
        <section className="bg-white py-20 sm:py-24 lg:py-28 border-x border-gray-200 max-w-7xl mx-auto">
            <div className="mx-auto max-w-[1280px] px-2 sm:px-4 flex flex-col gap-5 sm:gap-6 lg:gap-8">
                {/* Main Header */}
                <div className="max-w-[940px]">
                    <h2 className="inline text-[28px] sm:text-[36px] font-medium leading-[1.1] tracking-[-0.02em] text-primary antialiased">
                        Serving properties of all sizes.
                    </h2><hr/>
                    <p className="inline text-[28px] sm:text-[36px] font-medium leading-[1.1] tracking-[-0.02em] text-primary antialiased">
                        {" "}Professional septic services that grow with your needs.
                    </p>
                </div>
                <span className="block w-full h-px bg-gradient-to-r from-gray-300/50 to-transparent" />

                <div className="flex flex-col gap-6 sm:gap-8 lg:gap-16">
                    {/* Enterprise/Residential Section */}
                    <section className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
                        <header className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                            <div className="flex flex-col gap-6">
                                <h3 className="text-xl sm:text-2xl font-medium leading-[1.25] tracking-[-0.02em] text-primary">
                                    Trusted by homeowners and businesses across Western NC
                                </h3>
                                <div>
                                    <Link
                                        className="group inline-flex items-center gap-1.5 px-6 py-3.5 text-[15px] font-medium rounded-sm bg-brand-600 text-white hover:bg-brand-700 transition-all duration-150"
                                        href="/services"
                                    >
                                        WDT Crest for enterprises
                                        <ArrowIcon />
                                    </Link>
                                </div>
                            </div>
                            <p className="text-base sm:text-lg leading-relaxed text-secondary max-w-[520px] text-left lg:justify-self-end">
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
                        <div className="flex flex-col border border-gray-200 rounded-sm overflow-hidden">
                            {enterpriseCustomers.map((customer, index) => (
                                <div key={customer.id} className="border-b border-gray-200 last:border-b-0">
                                    <div
                                        className="group flex items-center gap-4 p-4 sm:px-5 cursor-pointer transition-colors duration-150 bg-white"
                                        onClick={() => setOpenCustomer(openCustomer === index ? -1 : index)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                setOpenCustomer(openCustomer === index ? -1 : index);
                                            }
                                        }}
                                        aria-expanded={openCustomer === index}
                                    >
                                        <div className="flex-1 text-left">
                                            <h3 className="text-[17px] font-medium leading-[1.4] text-primary m-0 transition-colors duration-150 group-hover:text-red-600">
                                                {customer.title}
                                            </h3>
                                        </div>
                                        <div className="shrink-0">
                                            <Link
                                                className="inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium rounded-none border-none bg-brand-100 hover:bg-brand-200 transition-all duration-300 overflow-hidden text-brand-600"
                                                href="tel:8282541920"
                                                onClick={(e) => e.stopPropagation()}
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
                                        className="overflow-hidden transition-[max-height] duration-300 ease-out"
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
                            <span className="text-xl sm:text-2xl font-medium text-primary pt-6 pb-4">
                                Why customers choose WDT Crest
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    {
                                        title: "NC-certified professionals.",
                                        desc: "Our technicians are fully licensed and certified for septic inspections and installations in North Carolina.",
                                        link: { text: "View certifications", href: "/services" },
                                        icon: (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" aria-hidden="true" className="text-brand-600">
                                                <path fill="currentColor" d="M5 9a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm8.5 0a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zM2 10.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm8.5 0a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM12.25 0a.75.75 0 0 1 .75.75V3h2.25a.75.75 0 0 1 0 1.5H13V7a.75.75 0 0 1-1.5 0V4.5H9A.75.75 0 0 1 9 3h2.5V.75a.75.75 0 0 1 .75-.75M5 .5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zM2 2a.5.5 0 0 0-.5.5v3A.5.5 0 0 0 2 6h3a.5.5 0 0 0 .5-.5v-3A.5.5 0 0 0 5 2z" />
                                            </svg>
                                        ),
                                    },
                                    {
                                        title: "24/7 emergency service.",
                                        desc: "Septic emergencies don't wait for business hours. Our team is available around the clock for urgent situations.",
                                        link: { text: "Call emergency line", href: "tel:8282541920" },
                                        icon: (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="text-brand-600">
                                                <path fill="currentColor" fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-1.5 0a6.472 6.472 0 0 1-1.404 4.035l-1.07-1.07a5.032 5.032 0 0 1-1.06 1.061l1.07 1.07A6.472 6.472 0 0 1 8 14.5a6.472 6.472 0 0 1-4.035-1.404l1.07-1.07A4.98 4.98 0 0 0 8 13a5 5 0 0 0 4.026-7.965l1.07-1.07A6.472 6.472 0 0 1 14.5 8m-2.465-5.096A6.472 6.472 0 0 0 8 1.5a6.472 6.472 0 0 0-4.035 1.404l1.07 1.07A4.978 4.978 0 0 1 8 3c1.11 0 2.136.362 2.966.974zm-8.061 8.062A4.977 4.977 0 0 1 3 8c0-1.11.362-2.136.974-2.965l-1.07-1.07A6.472 6.472 0 0 0 1.5 8c0 1.525.525 2.927 1.404 4.035zM11.5 8a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" clipRule="evenodd" />
                                            </svg>
                                        ),
                                    },
                                    {
                                        title: "30+ years experience.",
                                        desc: "Family-owned and operated since 1994. We know Western NC septic systems inside and out.",
                                        link: { text: "Learn about us", href: "/about" },
                                        icon: (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="text-brand-600">
                                                <path fill="currentColor" fillRule="evenodd" d="M8 3.25A2.748 2.748 0 0 1 10.75.5c1.528 0 2.75 1.238 2.75 2.75S12.278 6 10.75 6A2.748 2.748 0 0 1 8 3.25M10.75 2c-.694 0-1.25.561-1.25 1.25 0 .694.561 1.25 1.25 1.25.694 0 1.25-.561 1.25-1.25S11.444 2 10.75 2" clipRule="evenodd" />
                                                <path fill="currentColor" fillRule="evenodd" d="M5 3.5a2.748 2.748 0 0 0-2.75 2.75A2.748 2.748 0 0 0 5 9a2.748 2.748 0 0 0 2.75-2.75A2.742 2.742 0 0 0 5 3.5M3.75 6.25C3.75 5.561 4.306 5 5 5c.697 0 1.25.553 1.25 1.25 0 .689-.556 1.25-1.25 1.25-.689 0-1.25-.556-1.25-1.25" clipRule="evenodd" />
                                                <path fill="currentColor" fillRule="evenodd" d="M3.776 10C1.686 10 0 11.703 0 13.795c0 .937.757 1.705 1.7 1.705h7.09c.933 0 1.71-.758 1.71-1.705C10.5 11.703 8.814 10 6.724 10zM1.5 13.795A2.286 2.286 0 0 1 3.776 11.5h2.948A2.286 2.286 0 0 1 9 13.795a.211.211 0 0 1-.21.205H1.7a.203.203 0 0 1-.2-.205" clipRule="evenodd" />
                                                <path fill="currentColor" d="M9.25 7a.75.75 0 0 0 0 1.5h2.87c.483 0 1.094.227 1.585.662.48.425.795 1.002.795 1.668 0 .303.016.61-.008.912a8.52 8.52 0 0 1-.492.008h-2a.75.75 0 0 0 0 1.5h2.026c.468 0 .983.02 1.39-.251.502-.335.584-.943.584-1.499v-.67c0-1.173-.56-2.136-1.3-2.791C13.97 7.394 13.017 7 12.12 7z" />
                                            </svg>
                                        ),
                                    },
                                ].map((feature, i) => (
                                    <div key={i} className="flex flex-col gap-4">
                                        <div className="w-10 h-10 flex items-center justify-center border border-brand-200 bg-white rounded p-2">
                                            {feature.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="inline text-[15px] font-semibold text-primary">{feature.title}</h4>
                                            <p className="inline text-[15px] text-secondary"> {feature.desc}</p>
                                        </div>
                                        <div>
                                            <Link
                                                className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-red-600 hover:text-red-700 transition-colors duration-150"
                                                href={feature.link.href}
                                            >
                                                {feature.link.text}
                                                <ChevronRightIcon />
                                            </Link>
                                        </div>
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
