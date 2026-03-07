"use client";

import {
    Phone01,
    Calendar,
    Truck01,
    SearchRefraction,
    Tool02,
    FileCheck02,
    CheckCircle,
    Star01,
} from "@untitledui/icons";

const processSteps = [
    {
        step: "01",
        icon: Phone01,
        title: "Contact Us",
        description: "Give us a call or fill out our online form. We'll answer your questions and discuss your needs.",
        color: "#16b364",
    },
    {
        step: "02",
        icon: Calendar,
        title: "Schedule Service",
        description: "We'll find a convenient time that works for your schedule, including emergency appointments.",
        color: "#3981FF",
    },
    {
        step: "03",
        icon: Truck01,
        title: "Team Arrives",
        description: "Our certified technicians arrive on time with professional equipment ready to serve you.",
        color: "#FF930F",
    },
    {
        step: "04",
        icon: SearchRefraction,
        title: "System Assessment",
        description: "We thoroughly inspect your septic system to identify any issues or maintenance needs.",
        color: "#7f56d9",
    },
    {
        step: "05",
        icon: Tool02,
        title: "Expert Service",
        description: "Our team performs the necessary pumping, repairs, or maintenance with precision and care.",
        color: "#dc2626",
    },
    {
        step: "06",
        icon: FileCheck02,
        title: "Documentation",
        description: "Receive detailed reports and recommendations for maintaining your system's health.",
        color: "#0891b2",
    },
    {
        step: "07",
        icon: CheckCircle,
        title: "Quality Check",
        description: "We verify everything is working perfectly before we leave your property.",
        color: "#16b364",
    },
    {
        step: "08",
        icon: Star01,
        title: "Follow-Up Care",
        description: "Get reminders for future service and access to our ongoing support team.",
        color: "#3981FF",
    },
];

export function ProcessSection() {
    return (
        <section className="relative overflow-hidden bg-secondary py-24">

            {/* Decorative Gradient Orbs */}
            <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-success-solid opacity-5 blur-3xl" />
            <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-success-solid opacity-5 blur-3xl" />
            <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-success-solid opacity-[0.03] blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto mb-20 max-w-3xl text-center">
                    {/* Badge */}
                    <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-success-primary/20 bg-primary px-5 py-2.5 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success-solid opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-success-solid" />
                        </span>
                        <span className="text-sm font-semibold text-success-primary">Our Process</span>
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success-solid opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-success-solid" />
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-display-md font-semibold tracking-tight text-primary">
                        How We{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-success-primary">
                                Deliver Excellence
                            </span>
                            <span className="absolute -bottom-1 left-0 h-3 w-full -skew-x-6 bg-success-solid/15" />
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-tertiary">
                        From your first call to ongoing maintenance, our streamlined 8-step process ensures
                        professional, reliable septic services every time.
                    </p>

                    {/* Decorative Line */}
                    <div className="mx-auto mt-8 flex items-center justify-center gap-2">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-success-primary/30" />
                        <div className="h-1.5 w-1.5 rounded-full bg-success-primary/40" />
                        <div className="h-2 w-2 rounded-full bg-success-solid" />
                        <div className="h-1.5 w-1.5 rounded-full bg-success-primary/40" />
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-success-primary/30" />
                    </div>
                </div>

                {/* Process Cards Grid - 2 Rows x 4 Cols */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {processSteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={step.step}
                                className="group relative"
                            >
                                {/* Card with Top Accent Border */}
                                <div className="relative h-full overflow-hidden rounded-2xl bg-primary shadow-xl shadow-gray-900/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-900/10">
                                    {/* Top Gradient Border */}
                                    <div
                                        className="absolute inset-x-0 top-0 h-1 transition-all duration-300 group-hover:h-1.5"
                                        style={{
                                            background: `linear-gradient(90deg, ${step.color}, ${step.color}aa)`,
                                        }}
                                    />

                                    {/* Inner Content */}
                                    <div className="relative p-6 pt-7">
                                        {/* Step Badge - Top Right */}
                                        <div
                                            className="absolute right-4 top-5 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white transition-transform duration-300 group-hover:scale-110"
                                            style={{ backgroundColor: step.color }}
                                        >
                                            {step.step}
                                        </div>

                                        {/* Icon with Glow Effect */}
                                        <div className="relative mb-6">
                                            <div
                                                className="flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-105"
                                                style={{
                                                    background: `linear-gradient(135deg, ${step.color}15, ${step.color}05)`,
                                                    border: `1px solid ${step.color}20`,
                                                }}
                                            >
                                                <Icon
                                                    className="h-7 w-7"
                                                    style={{ color: step.color }}
                                                />
                                            </div>
                                            {/* Glow on hover */}
                                            <div
                                                className="absolute -inset-2 -z-10 rounded-3xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-40"
                                                style={{ backgroundColor: step.color }}
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3 className="mb-3 text-lg font-semibold text-primary">
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm leading-relaxed text-tertiary">
                                            {step.description}
                                        </p>

                                        {/* Bottom Arrow Indicator */}
                                        <div className="mt-5 flex items-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                                            <span className="text-xs font-medium" style={{ color: step.color }}>
                                                Learn more
                                            </span>
                                            <svg
                                                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                                                style={{ color: step.color }}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M5 12h14m-7-7 7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Subtle corner gradient */}
                                    <div
                                        className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full opacity-[0.07] blur-3xl transition-opacity duration-300 group-hover:opacity-[0.15]"
                                        style={{ backgroundColor: step.color }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-secondary bg-primary px-10 py-6 shadow-lg backdrop-blur-xl sm:flex-row">
                        <p className="text-lg font-medium text-primary">
                            Ready to get started?
                        </p>
                        <a
                            href="tel:8282541920"
                            className="group inline-flex items-center gap-3 rounded-xl bg-success-solid px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-success-primary hover:shadow-xl"
                        >
                            <span>Call (828) 254-1920</span>
                            <svg
                                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14m-7-7 7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
