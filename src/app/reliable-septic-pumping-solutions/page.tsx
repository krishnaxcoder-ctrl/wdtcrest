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
                    className="py-20 md:py-16 bg-secondary"
                    style={{ backgroundImage: 'url(/bg.avif)', backgroundSize: '150%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                >
                    <div className="px-6 lg:px-10">
                        <div className="max-w-7xl mx-auto border-l border-r border-tertiary bg-primary">
                            <div className="p-8 py-16 lg:p-12 lg:py-24">
                                <div className="flex flex-col gap-6 max-w-2xl">
                                    <div className="inline-flex items-center gap-3">
                                        <span className="size-2 rounded-full bg-success-solid" />
                                        <span className="text-sm text-success-primary font-medium">Professional Pumping Services</span>
                                    </div>
                                    <h1 className="text-4xl lg:text-5xl font-semibold text-primary tracking-tight">
                                        Reliable Septic Pumping Solutions
                                    </h1>
                                    <p className="text-lg text-tertiary leading-relaxed">
                                        Keep your septic system running smoothly with our professional pumping services.
                                        Serving Asheville and Western North Carolina for over 30 years.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mt-2">
                                        <Link href="tel:8282541920" className="inline-flex items-center gap-2 px-6 py-4 text-sm font-medium bg-success-solid text-white transition-all hover:bg-success-primary group">
                                            <span>Call (828) 254-1920</span>
                                            <div className="size-8 flex items-center justify-center transition-transform group-hover:-rotate-90">
                                                <ArrowIcon />
                                            </div>
                                        </Link>
                                        <Link href="/contact" className="inline-flex items-center px-6 py-4 text-sm text-tertiary border border-dashed border-tertiary transition-colors hover:text-primary hover:border-primary">
                                            Get Free Quote
                                        </Link>
                                    </div>
                                </div>
                            </div>
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
