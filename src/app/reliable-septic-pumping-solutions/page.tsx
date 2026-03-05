"use client";

import { CheckCircle, Phone, Droplets03, Clock, Shield01, Truck01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

const pumpingServices = [
    {
        icon: Droplets03,
        title: "Residential Septic Pumping",
        description: "Complete septic tank pumping for homes of all sizes. We recommend pumping every 3-5 years to maintain system health.",
    },
    {
        icon: Truck01,
        title: "Commercial Septic Pumping",
        description: "High-capacity pumping services for businesses, restaurants, and commercial properties with larger septic systems.",
    },
    {
        icon: Clock,
        title: "Emergency Pumping",
        description: "24/7 emergency septic pumping services when you need immediate assistance with overflows or backups.",
    },
    {
        icon: Shield01,
        title: "Grease Trap Pumping",
        description: "Professional grease trap cleaning and pumping for restaurants and food service establishments.",
    },
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
    {
        step: "1",
        title: "Schedule Service",
        description: "Call us or fill out our online form to schedule your septic pumping appointment.",
    },
    {
        step: "2",
        title: "System Assessment",
        description: "Our technicians locate and assess your septic tank before pumping begins.",
    },
    {
        step: "3",
        title: "Complete Pumping",
        description: "We thoroughly pump and clean your tank, removing all solids and liquids.",
    },
    {
        step: "4",
        title: "Inspection & Report",
        description: "We inspect the tank condition and provide recommendations for maintenance.",
    },
];

export default function SepticPumpingPage() {
    return (
        <div className="min-h-screen bg-primary">
            <Header />
            <main className="mx-auto max-w-7xl">
                {/* Hero Section */}
                <section className="relative min-h-[60vh] overflow-hidden border-x border-secondary">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
                        <img
                            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
                            alt="Septic pumping service"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="relative z-10 flex min-h-[60vh] items-center px-4 py-16 sm:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <span className="mb-4 inline-flex items-center rounded-full bg-error-solid px-4 py-1.5 text-sm font-medium text-white">
                                Professional Pumping Services
                            </span>
                            <h1 className="text-display-lg font-semibold text-white sm:text-display-xl">
                                Reliable Septic Pumping Solutions
                            </h1>
                            <p className="mt-6 text-xl text-gray-300">
                                Keep your septic system running smoothly with our professional pumping services.
                                Serving Asheville and Western North Carolina for over 30 years.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <Button
                                    size="xl"
                                    iconLeading={Phone}
                                    className="bg-error-solid hover:bg-red-700"
                                >
                                    Call (828) 254-1920
                                </Button>
                                <Button
                                    size="xl"
                                    color="secondary"
                                    className="border-white/20 bg-white/10 text-white hover:bg-white/20"
                                >
                                    Get Free Quote
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="border-x border-secondary bg-primary py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="text-sm font-semibold uppercase tracking-wider text-error-primary">
                                Our Services
                            </span>
                            <h2 className="mt-3 text-display-md font-semibold text-primary">
                                Comprehensive Septic Pumping Services
                            </h2>
                            <p className="mt-4 text-lg text-tertiary">
                                From routine maintenance to emergency situations, we have the equipment
                                and expertise to handle all your septic pumping needs.
                            </p>
                        </div>

                        <div className="mt-16 grid gap-8 sm:grid-cols-2">
                            {pumpingServices.map((service) => (
                                <div
                                    key={service.title}
                                    className="rounded-2xl border border-secondary bg-secondary p-8"
                                >
                                    <FeaturedIcon
                                        icon={service.icon}
                                        size="lg"
                                        color="error"
                                        theme="light"
                                    />
                                    <h3 className="mt-5 text-xl font-semibold text-primary">
                                        {service.title}
                                    </h3>
                                    <p className="mt-3 text-tertiary">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="border-x border-secondary bg-secondary py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                            <div>
                                <span className="text-sm font-semibold uppercase tracking-wider text-error-primary">
                                    Why Pump Your Septic
                                </span>
                                <h2 className="mt-3 text-display-md font-semibold text-primary">
                                    Benefits of Regular Septic Pumping
                                </h2>
                                <p className="mt-4 text-lg text-tertiary">
                                    Regular septic tank pumping is essential for maintaining a healthy
                                    and efficient septic system. Here's why it matters:
                                </p>
                                <div className="mt-8 space-y-4">
                                    {benefits.map((benefit) => (
                                        <div key={benefit} className="flex items-start gap-3">
                                            <CheckCircle className="mt-0.5 size-5 shrink-0 text-fg-success-primary" />
                                            <span className="text-secondary">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button
                                    size="lg"
                                    className="mt-8 bg-error-solid hover:bg-red-700"
                                    iconLeading={Phone}
                                >
                                    Schedule Pumping Today
                                </Button>
                            </div>
                            <div className="overflow-hidden rounded-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                                    alt="Septic pumping truck"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="border-x border-secondary bg-primary py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="text-sm font-semibold uppercase tracking-wider text-error-primary">
                                How It Works
                            </span>
                            <h2 className="mt-3 text-display-md font-semibold text-primary">
                                Our Pumping Process
                            </h2>
                            <p className="mt-4 text-lg text-tertiary">
                                We make septic pumping simple and stress-free with our proven process.
                            </p>
                        </div>

                        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {process.map((item) => (
                                <div key={item.step} className="text-center">
                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-error-solid text-2xl font-bold text-white">
                                        {item.step}
                                    </div>
                                    <h3 className="mt-5 text-lg font-semibold text-primary">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-tertiary">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="border-x border-secondary bg-error-solid py-16">
                    <div className="px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="text-display-sm font-semibold text-white">
                            Ready to Schedule Your Septic Pumping?
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                            Don't wait until it's too late. Regular pumping prevents costly repairs and keeps your system running efficiently.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <Button
                                size="xl"
                                className="bg-white text-gray-900 hover:bg-gray-100"
                                iconLeading={Phone}
                            >
                                Call (828) 254-1920
                            </Button>
                            <Button
                                size="xl"
                                className="border-white/30 bg-transparent text-white hover:bg-white/10"
                            >
                                Request Quote Online
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <div className="mx-auto max-w-7xl">
                <Footer />
            </div>
        </div>
    );
}
