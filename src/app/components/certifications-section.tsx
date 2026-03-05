"use client";

import { CheckCircle, FileCheck02, Home02, Building07 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

const inspectionTypes = [
    {
        icon: Home02,
        title: "Residential Inspections",
        description: "Complete home septic system evaluations for buyers and sellers.",
    },
    {
        icon: Building07,
        title: "Commercial Inspections",
        description: "Business and commercial property septic assessments.",
    },
    {
        icon: FileCheck02,
        title: "Real Estate Inspections",
        description: "Pre-sale and pre-purchase septic certifications.",
    },
];

const checklistItems = [
    "Visual inspection of all accessible components",
    "Tank level and sludge measurement",
    "Drain field performance assessment",
    "Distribution box evaluation",
    "Detailed written report provided",
    "Recommendations for repairs if needed",
];

export function CertificationsSection() {
    return (
        <section className="border-x border-secondary bg-primary py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-wider text-error-primary">
                        NC Certified
                    </span>
                    <h2 className="mt-3 text-display-md font-semibold text-primary">
                        NC-Certified Septic Inspections for Your Property
                    </h2>
                    <p className="mt-4 text-lg text-tertiary">
                        NC DEQ certified septic inspections to accurately identify the state of existing septic
                        systems, for property owners in all septic transactions and evaluations.
                    </p>
                </div>

                {/* Inspection Types */}
                <div className="mt-16 grid gap-8 sm:grid-cols-3">
                    {inspectionTypes.map((type) => (
                        <div
                            key={type.title}
                            className="rounded-2xl border border-secondary bg-secondary p-6 text-center"
                        >
                            <div className="flex justify-center">
                                <FeaturedIcon
                                    icon={type.icon}
                                    size="lg"
                                    color="error"
                                    theme="light"
                                />
                            </div>
                            <h3 className="mt-5 text-lg font-semibold text-primary">
                                {type.title}
                            </h3>
                            <p className="mt-2 text-tertiary">
                                {type.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* What's Included */}
                <div className="mt-16 rounded-2xl border border-secondary bg-secondary p-8 lg:p-12">
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                        <div>
                            <h3 className="text-display-xs font-semibold text-primary">
                                What's Included in Our Inspections
                            </h3>
                            <p className="mt-4 text-tertiary">
                                Our comprehensive septic inspections cover every aspect of your
                                system to ensure you have complete knowledge of its condition.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <Button
                                    size="lg"
                                    className="bg-error-solid hover:bg-red-700"
                                >
                                    Schedule Inspection
                                </Button>
                                <Button size="lg" color="secondary">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                        <div>
                            <ul className="space-y-4">
                                {checklistItems.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <CheckCircle className="mt-0.5 size-5 shrink-0 text-fg-success-primary" />
                                        <span className="text-secondary">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
