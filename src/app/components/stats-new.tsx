"use client";

const stats = [
    {
        value: "30+",
        description: "years of trusted septic service experience in Western NC",
    },
    {
        value: "5,000+",
        description: "satisfied customers who trust us with their septic systems",
    },
    {
        value: "24/7",
        description: "emergency response available for urgent septic issues",
    },
    {
        value: "100%",
        description: "licensed, insured, and NC-certified for your peace of mind",
    },
];

export function StatsNew() {
    return (
        <section className="border-b border-secondary bg-white">
            <div className="mx-auto max-w-7xl border-x border-secondary">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`flex flex-col justify-center gap-4 p-8 lg:p-10 ${
                                index < stats.length - 1 ? "border-b sm:border-b-0 sm:border-r border-secondary" : ""
                            } ${index === 1 ? "sm:border-r-0 lg:border-r" : ""} ${index === 2 ? "sm:border-r border-secondary" : ""}`}
                        >
                            <h2 className="text-xl font-semibold tracking-tight text-brand-600 lg:text-2xl">
                                {stat.value}
                            </h2>
                            <p className="text-base leading-relaxed text-tertiary">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
