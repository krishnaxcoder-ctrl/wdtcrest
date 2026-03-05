"use client";

import { CheckCircle, Phone, FileCheck02, Home02, Building07, SearchRefraction, ClipboardCheck, Award01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

const inspectionTypes = [
    {
        icon: Home02,
        title: "Residential Inspections",
        description: "Comprehensive home septic system evaluations for homeowners, buyers, and sellers.",
        features: ["Full system assessment", "Detailed written report", "Maintenance recommendations"],
    },
    {
        icon: Building07,
        title: "Commercial Inspections",
        description: "Thorough inspections for businesses, restaurants, and commercial properties.",
        features: ["Large system capability", "Compliance verification", "Code adherence check"],
    },
    {
        icon: FileCheck02,
        title: "Real Estate Inspections",
        description: "Pre-sale and pre-purchase certified inspections for property transactions.",
        features: ["NC-certified reports", "Quick turnaround", "Lender-accepted documentation"],
    },
    {
        icon: SearchRefraction,
        title: "Diagnostic Inspections",
        description: "In-depth analysis to identify specific issues or system failures.",
        features: ["Problem identification", "Root cause analysis", "Repair recommendations"],
    },
];

const inspectionProcess = [
    "Visual inspection of all accessible components",
    "Tank level and sludge depth measurement",
    "Drain field performance assessment",
    "Distribution box evaluation",
    "Inlet and outlet baffle inspection",
    "Effluent filter check (if applicable)",
    "Groundwater and surface water assessment",
    "Detailed two-page written report",
];

const certifications = [
    {
        title: "NC DEQ Certified",
        description: "Our inspectors are certified by the North Carolina Department of Environmental Quality.",
    },
    {
        title: "Licensed & Insured",
        description: "Fully licensed and insured for your protection and peace of mind.",
    },
    {
        title: "30+ Years Experience",
        description: "Decades of hands-on experience inspecting septic systems in Western NC.",
    },
];

export default function SepticInspectionPage() {
    return (
        <div className="min-h-screen bg-primary">
            <Header />
            <main className="mx-auto max-w-7xl">
                {/* Hero Section */}
                <section className="relative min-h-[60vh] overflow-hidden border-x border-secondary">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
                        <img
                            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80"
                            alt="Septic inspection"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="relative z-10 flex min-h-[60vh] items-center px-4 py-16 sm:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <span className="mb-4 inline-flex items-center rounded-full bg-error-solid px-4 py-1.5 text-sm font-medium text-white">
                                NC-Certified Inspections
                            </span>
                            <h1 className="text-display-lg font-semibold text-white sm:text-display-xl">
                                Septic Inspection Solutions
                            </h1>
                            <p className="mt-6 text-xl text-gray-300">
                                Professional NC-certified septic system inspections for real estate transactions,
                                system assessments, and compliance verification.
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
                                    Schedule Inspection
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Certifications Banner */}
                <section className="border-x border-secondary bg-secondary py-12">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-8 md:grid-cols-3">
                            {certifications.map((cert) => (
                                <div key={cert.title} className="flex items-start gap-4">
                                    <FeaturedIcon
                                        icon={Award01}
                                        size="md"
                                        color="error"
                                        theme="light"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-primary">{cert.title}</h3>
                                        <p className="mt-1 text-sm text-tertiary">{cert.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Inspection Types */}
                <section className="border-x border-secondary bg-primary py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="text-sm font-semibold uppercase tracking-wider text-error-primary">
                                Inspection Services
                            </span>
                            <h2 className="mt-3 text-display-md font-semibold text-primary">
                                Types of Septic Inspections
                            </h2>
                            <p className="mt-4 text-lg text-tertiary">
                                We offer comprehensive inspection services tailored to your specific needs,
                                whether you're buying, selling, or maintaining your property.
                            </p>
                        </div>

                        <div className="mt-16 grid gap-8 sm:grid-cols-2">
                            {inspectionTypes.map((type) => (
                                <div
                                    key={type.title}
                                    className="rounded-2xl border border-secondary bg-secondary p-8"
                                >
                                    <FeaturedIcon
                                        icon={type.icon}
                                        size="lg"
                                        color="error"
                                        theme="light"
                                    />
                                    <h3 className="mt-5 text-xl font-semibold text-primary">
                                        {type.title}
                                    </h3>
                                    <p className="mt-3 text-tertiary">
                                        {type.description}
                                    </p>
                                    <ul className="mt-4 space-y-2">
                                        {type.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-2 text-sm text-secondary">
                                                <CheckCircle className="size-4 text-fg-success-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What's Included */}
                <section className="border-x border-secondary bg-secondary py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                            <div>
                                <span className="text-sm font-semibold uppercase tracking-wider text-error-primary">
                                    Comprehensive Evaluation
                                </span>
                                <h2 className="mt-3 text-display-md font-semibold text-primary">
                                    What's Included in Our Inspections
                                </h2>
                                <p className="mt-4 text-lg text-tertiary">
                                    Our thorough inspection process covers every aspect of your septic system
                                    to give you a complete picture of its condition and performance.
                                </p>
                                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                    {inspectionProcess.map((item) => (
                                        <div key={item} className="flex items-start gap-3">
                                            <CheckCircle className="mt-0.5 size-5 shrink-0 text-fg-success-primary" />
                                            <span className="text-sm text-secondary">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="rounded-2xl border border-secondary bg-primary p-8 text-center shadow-lg">
                                    <FeaturedIcon
                                        icon={ClipboardCheck}
                                        size="xl"
                                        color="error"
                                        theme="light"
                                    />
                                    <h3 className="mt-6 text-display-xs font-semibold text-primary">
                                        Detailed Report Included
                                    </h3>
                                    <p className="mt-4 text-tertiary">
                                        Every inspection includes a comprehensive two-page written report
                                        with findings, recommendations, and next steps.
                                    </p>
                                    <Button
                                        size="lg"
                                        className="mt-6 bg-error-solid hover:bg-red-700"
                                    >
                                        Schedule Your Inspection
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="border-x border-secondary bg-primary py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl">
                            <div className="text-center">
                                <span className="text-sm font-semibold uppercase tracking-wider text-error-primary">
                                    FAQ
                                </span>
                                <h2 className="mt-3 text-display-md font-semibold text-primary">
                                    Common Questions
                                </h2>
                            </div>
                            <div className="mt-12 space-y-8">
                                <div className="rounded-xl border border-secondary bg-secondary p-6">
                                    <h3 className="font-semibold text-primary">When do I need a septic inspection?</h3>
                                    <p className="mt-2 text-tertiary">
                                        Inspections are required for real estate transactions, recommended every 3 years for maintenance,
                                        and necessary when you notice signs of system problems like slow drains or odors.
                                    </p>
                                </div>
                                <div className="rounded-xl border border-secondary bg-secondary p-6">
                                    <h3 className="font-semibold text-primary">How long does an inspection take?</h3>
                                    <p className="mt-2 text-tertiary">
                                        A typical inspection takes 1-2 hours depending on the system size and accessibility.
                                        We'll provide the written report within 24-48 hours.
                                    </p>
                                </div>
                                <div className="rounded-xl border border-secondary bg-secondary p-6">
                                    <h3 className="font-semibold text-primary">Are your inspections accepted by lenders?</h3>
                                    <p className="mt-2 text-tertiary">
                                        Yes, our NC-certified inspections are accepted by banks, mortgage lenders,
                                        and real estate professionals throughout North Carolina.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="border-x border-secondary bg-error-solid py-16">
                    <div className="px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="text-display-sm font-semibold text-white">
                            Need a Septic Inspection?
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                            Whether you're buying, selling, or just want peace of mind, our certified inspectors are ready to help.
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
                                Request Inspection
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
