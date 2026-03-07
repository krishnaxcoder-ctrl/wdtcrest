"use client";

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
        <section className="border-b border-secondary bg-white">
            <div className="mx-auto max-w-7xl border-x border-secondary py-16 lg:py-24">
                {/* Header */}
                <div className="mb-12 ml-4 lg:mb-16">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`flex flex-col justify-center gap-4 ${
                                index < features.length - 1
                                    ? "border-b sm:border-b-0 sm:border-r border-secondary"
                                    : ""
                            } ${index === 1 ? "sm:border-r-0 lg:border-r" : ""} ${
                                index === 2 ? "sm:border-r border-secondary" : ""
                            }`}
                        >
                            <h3 className="border-l border-brand pl-4 text-xl mt-4 font-semibold tracking-tight text-brand-600 lg:text-1xl">
                                {feature.title}
                            </h3>
                            <ul className="flex flex-col gap-1 m-4 mt-0">
                                {feature.items.map((item, itemIndex) => (
                                    <li
                                        key={itemIndex}
                                        className="text-base leading-relaxed text-tertiary"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
