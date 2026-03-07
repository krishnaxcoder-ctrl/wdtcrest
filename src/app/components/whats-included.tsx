"use client";

const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16">
        <g fill="currentColor" fillRule="evenodd">
            <circle opacity=".15" cx="8" cy="8" r="8" />
            <path d="M11.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z" />
        </g>
    </svg>
);

const features = [
    {
        title: "Pumping Services",
        items: [
            "Complete tank pumping & cleaning",
            "Scheduled maintenance plans",
            "Emergency pumping available 24/7",
        ],
    },
    {
        title: "Inspections",
        items: [
            "NC-certified inspections",
            "Real estate transaction reports",
            "Compliance verification",
        ],
    },
    {
        title: "Repairs & Maintenance",
        items: [
            "Tank & lid repairs",
            "Drain field restoration",
            "Distribution box replacement",
        ],
    },
    {
        title: "Customer Support",
        items: [
            "Dedicated service team",
            "Free estimates & consultations",
            "Flexible scheduling options",
        ],
    },
];

export function WhatsIncluded() {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="px-6 lg:px-10">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-12 lg:mb-16">
                        <p className="text-sm font-medium text-brand-600 mb-3">
                            What&apos;s included
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-primary max-w-2xl">
                            Complete septic services through a single trusted provider
                        </h2>
                        <p className="mt-4 text-lg text-tertiary max-w-2xl">
                            We handle everything for your septic system. From routine maintenance to emergency repairs, you can rely on our experienced team.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col gap-4">
                                <h3 className="text-lg font-semibold text-primary">
                                    {feature.title}
                                </h3>
                                <ul className="flex flex-col gap-3">
                                    {feature.items.map((item, itemIndex) => (
                                        <li
                                            key={itemIndex}
                                            className="flex items-start gap-3"
                                        >
                                            <span className="text-brand-600 mt-0.5 shrink-0">
                                                <CheckIcon />
                                            </span>
                                            <span className="text-sm text-tertiary">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
