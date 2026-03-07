"use client";

import { useState, useRef } from "react";
import Link from "next/link";

// Arrow Icon for links
const ArrowIcon = () => (
    <svg className="size-2.5" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M0.5 5.5h7" />
        <path d="M1.5 1.5l4 4-4 4" />
    </svg>
);

// Plus Icon for accordion
const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12">
        <path fill="currentColor" d="M6.87988 5.125H11.75v1.75H6.87988v4.875h-1.75V6.875H.25v-1.75h4.87988V.25h1.75z" />
    </svg>
);

// Customer Story Card Component (Accordion style)
const CustomerStory = ({
    logo,
    title,
    description,
    stats,
    imageUrl,
    isOpen,
    onToggle,
}: {
    logo: React.ReactNode;
    title: string;
    description: string;
    stats: { label: string; value: string }[];
    imageUrl: string;
    isOpen: boolean;
    onToggle: () => void;
}) => {
    return (
        <div className="border-b border-tertiary last:border-b-0">
            <div
                className={`flex items-center gap-4 p-5 cursor-pointer transition-colors duration-200 hover:bg-secondary ${isOpen ? "bg-secondary" : ""}`}
                onClick={onToggle}
            >
                <div className="size-10 rounded-lg bg-success-solid flex items-center justify-center shrink-0">
                    {logo}
                </div>
                <h3 className="text-base font-medium text-primary flex-1">{title}</h3>
                <div className="flex items-center gap-3">
                    <Link
                        href="tel:8282541920"
                        className={`inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full border border-tertiary transition-all duration-200 ${isOpen ? "opacity-100" : "opacity-0"} hover:border-success-primary hover:text-success-primary`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span>Get a quote</span>
                        <ArrowIcon />
                    </Link>
                    <div className={`shrink-0 transition-transform duration-300 text-tertiary ${isOpen ? "rotate-45" : ""}`}>
                        <PlusIcon />
                    </div>
                </div>
            </div>
            <div className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="p-0">
                    <div
                        className="aspect-[21/9] bg-cover bg-center"
                        style={{ backgroundImage: `url(${imageUrl})` }}
                    />
                    <div className="flex flex-wrap gap-6 p-5 bg-secondary">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col">
                                <span className="text-lg font-semibold text-primary">{stat.value}</span>
                                <span className="text-sm text-tertiary">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                    <p className="p-5 text-base text-tertiary">{description}</p>
                </div>
            </div>
        </div>
    );
};

// Case Study Card for Carousel
const CaseStudyCard = ({
    title,
    description,
    imageUrl,
    logoText,
    linkText,
    href,
}: {
    title: string;
    description: string;
    imageUrl: string;
    logoText: string;
    linkText: string;
    href: string;
}) => (
    <Link href={href} className="group flex flex-col min-w-[300px] max-w-[340px] rounded-xl overflow-hidden bg-primary border border-tertiary transition-all duration-200 hover:border-success-primary hover:shadow-lg">
        <div className="relative aspect-[4/5] overflow-hidden">
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
            />
            <div className="absolute bottom-4 left-4 text-white font-bold text-xl drop-shadow-lg">
                {logoText}
            </div>
        </div>
        <div className="flex flex-col gap-3 p-5">
            <h4 className="text-base font-medium text-primary">{title}</h4>
            <div className="inline-flex items-center gap-1.5 text-sm text-success-primary font-medium">
                <span>{linkText}</span>
                <ArrowIcon />
            </div>
        </div>
    </Link>
);

// Feature Detail Item
const FeatureDetail = ({
    icon,
    title,
    description,
    linkText,
    href,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    linkText: string;
    href: string;
}) => (
    <div className="flex flex-col gap-4 p-6 bg-primary rounded-xl border border-tertiary">
        <div className="size-10 rounded-lg bg-gradient-to-br from-success-secondary to-success-solid flex items-center justify-center text-white">
            {icon}
        </div>
        <div className="flex flex-col gap-2">
            <h4 className="text-base font-semibold text-primary">{title}</h4>
            <p className="text-sm text-tertiary">{description}</p>
        </div>
        <Link href={href} className="inline-flex items-center gap-1.5 text-sm text-success-primary font-medium mt-auto">
            <span>{linkText}</span>
            <ArrowIcon />
        </Link>
    </div>
);

// Divider with animated dots
const SectionDivider = () => (
    <div className="relative py-8">
        <div className="h-px bg-gradient-to-r from-transparent via-tertiary to-transparent" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1">
            <div className="size-1.5 rounded-full bg-success-solid animate-pulse" style={{ animationDelay: "0ms" }} />
            <div className="size-1.5 rounded-full bg-success-solid animate-pulse" style={{ animationDelay: "150ms" }} />
            <div className="size-1.5 rounded-full bg-success-solid animate-pulse" style={{ animationDelay: "300ms" }} />
        </div>
    </div>
);

// Main Component
export const BusinessSizesSection = () => {
    const [openStory, setOpenStory] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const customerStories = [
        {
            logo: <span className="text-white text-lg">🏠</span>,
            title: "Smith Family keeps their home safe with regular maintenance",
            description: "The Smith family discovered a minor issue during routine pumping that could have become a major problem. Our team caught it early and saved them thousands in potential repairs.",
            stats: [
                { value: "5+ Years", label: "Customer relationship" },
                { value: "3 Services", label: "Pumping, inspection, maintenance" },
                { value: "$2,500+", label: "Saved in repairs" },
            ],
            imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
        },
        {
            logo: <span className="text-white text-lg">🏢</span>,
            title: "Mountain View Restaurant relies on our grease trap service",
            description: "This busy Asheville restaurant trusts us for monthly grease trap cleaning, keeping them compliant with health regulations and preventing costly backups during peak hours.",
            stats: [
                { value: "Monthly", label: "Service schedule" },
                { value: "0 Violations", label: "Health code issues" },
                { value: "100%", label: "Uptime during service hours" },
            ],
            imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
        },
        {
            logo: <span className="text-white text-lg">🏗️</span>,
            title: "Henderson County Builders partners on new construction",
            description: "We've installed septic systems for over 50 new homes in the Henderson County development, ensuring each property starts with a properly sized and installed system.",
            stats: [
                { value: "50+", label: "Systems installed" },
                { value: "100%", label: "Passed first inspection" },
                { value: "NC Certified", label: "Installation standards" },
            ],
            imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
        },
        {
            logo: <span className="text-white text-lg">🏘️</span>,
            title: "Blue Ridge HOA manages 200+ units with our maintenance plans",
            description: "This homeowners association trusts us to maintain septic systems across their entire community, with scheduled service and priority emergency response.",
            stats: [
                { value: "200+", label: "Units maintained" },
                { value: "24/7", label: "Emergency response" },
                { value: "Quarterly", label: "Inspections" },
            ],
            imageUrl: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80",
        },
    ];

    const caseStudies = [
        {
            title: "Emergency response saved our vacation rental business",
            logoText: "Vacation Rentals",
            imageUrl: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&q=80",
            linkText: "Read the story",
            href: "tel:8282541920",
        },
        {
            title: "Real estate inspection helped us negotiate the sale",
            logoText: "Home Buyers",
            imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
            linkText: "Read the story",
            href: "tel:8282541920",
        },
        {
            title: "Annual maintenance keeps our bed & breakfast running",
            logoText: "B&B Owners",
            imageUrl: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=600&q=80",
            linkText: "Read the story",
            href: "tel:8282541920",
        },
        {
            title: "Drain field restoration extended our system life",
            logoText: "Property Owners",
            imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
            linkText: "Read the story",
            href: "tel:8282541920",
        },
        {
            title: "New construction septic installation done right",
            logoText: "Builders",
            imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
            linkText: "Read the story",
            href: "tel:8282541920",
        },
    ];

    const scrollCarousel = (direction: "left" | "right") => {
        if (carouselRef.current) {
            const scrollAmount = 340;
            carouselRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="py-20 bg-primary">
            <div className="px-6 lg:px-10">
                <div className="max-w-7xl mx-auto">
                    {/* Main Header */}
                    <div className="flex flex-col gap-4 mb-12">
                        <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-primary">
                            Serving properties of all types.
                        </h2>
                        <p className="text-xl text-tertiary max-w-2xl">
                            From single-family homes to commercial properties, we provide reliable septic services that keep your systems running smoothly.
                        </p>
                    </div>

                    <div className="h-px bg-gradient-to-r from-tertiary to-transparent mb-16" />

                    {/* Residential Section */}
                    <div className="flex flex-col gap-8 mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
                            <div className="flex flex-col gap-5">
                                <h3 className="text-2xl font-semibold tracking-tight text-primary">
                                    Trusted by homeowners across Western NC
                                </h3>
                                <p className="text-base text-tertiary">
                                    Over 5,000 residential customers rely on us for routine maintenance, emergency repairs, and NC-certified inspections.
                                </p>
                                <Link
                                    href="tel:8282541920"
                                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium bg-success-solid text-white rounded-lg transition-all hover:bg-success-primary w-fit"
                                >
                                    <span>Residential services</span>
                                    <ArrowIcon />
                                </Link>
                            </div>
                            <div className="border border-tertiary rounded-xl overflow-hidden bg-primary">
                                {customerStories.map((story, index) => (
                                    <CustomerStory
                                        key={index}
                                        {...story}
                                        isOpen={openStory === index}
                                        onToggle={() => setOpenStory(openStory === index ? -1 : index)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Feature Details */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            <FeatureDetail
                                icon={
                                    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                }
                                title="Routine Maintenance"
                                description="Regular pumping every 3-5 years prevents costly backups and extends system life by decades."
                                linkText="Schedule service"
                                href="tel:8282541920"
                            />
                            <FeatureDetail
                                icon={
                                    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    </svg>
                                }
                                title="NC-Certified Inspections"
                                description="Comprehensive inspections for real estate transactions, system assessments, and compliance verification."
                                linkText="Book inspection"
                                href="tel:8282541920"
                            />
                            <FeatureDetail
                                icon={
                                    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                }
                                title="24/7 Emergency Service"
                                description="Septic emergencies don't wait for business hours. Our team is available around the clock."
                                linkText="Emergency line"
                                href="tel:8282541920"
                            />
                        </div>
                    </div>

                    <SectionDivider />

                    {/* Commercial Section with Carousel */}
                    <div className="flex flex-col gap-8 mb-16">
                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                            <div className="flex flex-col gap-4 max-w-xl">
                                <h3 className="text-2xl font-semibold tracking-tight text-primary">
                                    Commercial & business solutions that scale with you
                                </h3>
                                <p className="text-base text-tertiary">
                                    Restaurants, hotels, property managers, and developers trust us for reliable service that keeps their businesses compliant and operational.
                                </p>
                                <Link
                                    href="tel:8282541920"
                                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium bg-success-solid text-white rounded-lg transition-all hover:bg-success-primary w-fit"
                                >
                                    <span>Commercial services</span>
                                    <ArrowIcon />
                                </Link>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => scrollCarousel("left")}
                                    className="size-10 rounded-full border border-tertiary flex items-center justify-center text-tertiary hover:border-success-primary hover:text-success-primary transition-colors"
                                    aria-label="Previous"
                                >
                                    <svg className="size-4" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M9.613 2.62 5.107 7.124h9.137v1.75H5.107l4.506 4.506-1.238 1.238-6-6L1.756 8l.619-.62 6-6 1.238 1.24Z" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => scrollCarousel("right")}
                                    className="size-10 rounded-full border border-tertiary flex items-center justify-center text-tertiary hover:border-success-primary hover:text-success-primary transition-colors"
                                    aria-label="Next"
                                >
                                    <svg className="size-4" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="m6.387 2.62 4.506 4.505H1.756v1.75h9.137l-4.506 4.506 1.238 1.238 6-6L14.245 8l-.618-.62-6-6-1.239 1.24Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Carousel */}
                        <div
                            ref={carouselRef}
                            className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                            {caseStudies.map((study, index) => (
                                <div key={index} className="snap-start">
                                    <CaseStudyCard {...study} />
                                </div>
                            ))}
                        </div>

                        {/* Program Cards */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <Link
                                href="tel:8282541920"
                                className="group relative overflow-hidden rounded-xl border border-tertiary bg-gradient-to-br from-success-secondary/20 to-primary p-6 transition-all hover:border-success-primary hover:shadow-lg"
                            >
                                <div className="relative z-10 flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <h4 className="text-lg font-semibold text-primary">Maintenance Plans</h4>
                                        <p className="text-sm text-tertiary">
                                            Save money with scheduled service and priority response. Perfect for homeowners and property managers.
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center gap-1.5 text-sm text-success-primary font-medium">
                                        <span>Learn about plans</span>
                                        <ArrowIcon />
                                    </div>
                                </div>
                                <div className="absolute right-0 bottom-0 w-32 h-32 bg-gradient-to-tl from-success-solid/20 to-transparent rounded-tl-full" />
                            </Link>
                            <Link
                                href="tel:8282541920"
                                className="group relative overflow-hidden rounded-xl border border-tertiary bg-gradient-to-br from-brand-secondary/20 to-primary p-6 transition-all hover:border-brand-primary hover:shadow-lg"
                            >
                                <div className="relative z-10 flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <h4 className="text-lg font-semibold text-primary">New Construction</h4>
                                        <p className="text-sm text-tertiary">
                                            Work with NC-certified installers for new septic systems. We handle permits, design, and installation.
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center gap-1.5 text-sm text-brand-primary font-medium">
                                        <span>Start your project</span>
                                        <ArrowIcon />
                                    </div>
                                </div>
                                <div className="absolute right-0 bottom-0 w-32 h-32 bg-gradient-to-tl from-brand-primary/20 to-transparent rounded-tl-full" />
                            </Link>
                        </div>
                    </div>

                    <SectionDivider />

                    {/* Property Managers Section */}
                    <div className="flex flex-col gap-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div className="flex flex-col gap-5">
                                <h3 className="text-2xl font-semibold tracking-tight text-primary">
                                    Complete property management solutions
                                </h3>
                                <p className="text-base text-tertiary">
                                    From HOAs to vacation rental companies, we help property managers maintain multiple systems efficiently with volume pricing and priority scheduling.
                                </p>
                                <Link
                                    href="tel:8282541920"
                                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium bg-success-solid text-white rounded-lg transition-all hover:bg-success-primary w-fit"
                                >
                                    <span>Property management services</span>
                                    <ArrowIcon />
                                </Link>
                            </div>
                            <div className="relative">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-2 p-5 rounded-xl border border-tertiary bg-secondary">
                                        <span className="text-3xl font-bold text-success-primary">200+</span>
                                        <span className="text-sm text-tertiary">Properties under contract</span>
                                    </div>
                                    <div className="flex flex-col gap-2 p-5 rounded-xl border border-tertiary bg-secondary">
                                        <span className="text-3xl font-bold text-success-primary">15%</span>
                                        <span className="text-sm text-tertiary">Volume discount available</span>
                                    </div>
                                    <div className="flex flex-col gap-2 p-5 rounded-xl border border-tertiary bg-secondary">
                                        <span className="text-3xl font-bold text-success-primary">4hr</span>
                                        <span className="text-sm text-tertiary">Priority response time</span>
                                    </div>
                                    <div className="flex flex-col gap-2 p-5 rounded-xl border border-tertiary bg-secondary">
                                        <span className="text-3xl font-bold text-success-primary">1</span>
                                        <span className="text-sm text-tertiary">Point of contact</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSizesSection;
