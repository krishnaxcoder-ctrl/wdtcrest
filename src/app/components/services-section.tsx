"use client";

import { Tool02, SearchRefraction, Truck01, Settings01 } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

const services = [
    {
        icon: Tool02,
        title: "Septic Pumping",
        description: "Professional septic tank pumping services to keep your system running efficiently and prevent costly backups.",
    },
    {
        icon: SearchRefraction,
        title: "Septic Inspections",
        description: "Comprehensive NC-certified inspections for real estate transactions, system assessments, and compliance verification.",
    },
    {
        icon: Settings01,
        title: "Septic Repair",
        description: "Expert repair services for all septic system components including tanks, drain fields, and distribution boxes.",
    },
    {
        icon: Truck01,
        title: "Grease Traps",
        description: "Commercial grease trap cleaning and maintenance to keep your business compliant with local regulations.",
    },
];

export function ServicesSection() {
    return (
        <section className="border-x border-secondary bg-primary py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-wider text-error-primary">
                        Our Services
                    </span>
                    <h2 className="mt-3 text-display-md font-semibold text-primary">
                        Reliable Septic Services in Asheville
                    </h2>
                    <p className="mt-4 text-lg text-tertiary">
                        With over 30 years of experience, we provide comprehensive septic system
                        services for residential and commercial properties throughout Western North Carolina.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="group rounded-2xl border border-secondary bg-primary p-6 transition duration-100 ease-linear hover:border-error-subtle hover:shadow-lg"
                        >
                            <FeaturedIcon
                                icon={service.icon}
                                size="lg"
                                color="error"
                                theme="light"
                            />
                            <h3 className="mt-5 text-lg font-semibold text-primary">
                                {service.title}
                            </h3>
                            <p className="mt-2 text-tertiary">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Contact Info */}
                <div className="mt-16 rounded-2xl bg-secondary p-8 text-center">
                    <p className="text-lg text-secondary">
                        Call <span className="font-semibold text-error-primary">(828) 254-1920</span> to schedule your septic service or request an estimate
                    </p>
                </div>
            </div>
        </section>
    );
}
