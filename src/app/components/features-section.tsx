"use client";

import Link from "next/link";

const features = [
    {
        title: "Reliable",
        titleHighlight: "Continuous",
        heading: "Confidently and continuously comply",
        description: "Stay ahead of septic issues with regular maintenance and inspections. With our expert team, septic compliance becomes continuous across your property.",
        marqueeTop: ["Continuous Monitoring", "Expert Inspections", "Preventive Care", "Continuous Monitoring", "Expert Inspections", "Preventive Care"],
        marqueeBottom: ["A dedicated septic expert for your property", "24/7 Emergency support", "A dedicated septic expert for your property", "24/7 Emergency support"],
        testimonial: {
            quote: "There's a lot we don't have to think about now. They keep us on track and catch anything before it becomes a problem.",
            name: "Sarah M.",
            role: "Homeowner, Asheville",
            avatar: "https://www.untitledui.com/images/avatars/olivia-rhye?w=144&h=144&q=75&fm=webp",
        },
        image: "https://cdn.prod.website-files.com/67ffd68333438435025f18b3/68063097ce24264b5ea52d28_image-3.avif",
        imageAlt: "Septic system inspection",
        link: "/reliable-septic-services",
        linkText: "See how it works",
        reverse: false,
    },
    {
        title: "Professional",
        titleHighlight: "Operationalise",
        heading: "Operationalise maintenance at scale",
        description: "You don't need to worry about septic maintenance anymore. We embed care into your property's routine, so it scales seamlessly as your needs grow.",
        marqueeTop: ["Tailored Plans", "Smart Scheduling", "Expert Training", "System Optimization", "Tailored Plans", "Smart Scheduling", "Expert Training", "System Optimization"],
        marqueeBottom: ["Pumping Services", "Repair Management", "System Assessments", "Real-time Monitoring", "Pumping Services", "Repair Management", "System Assessments", "Real-time Monitoring"],
        testimonial: {
            quote: "It's been a massive time-saver. Our dedicated expert leads on the maintenance work, and keeps everything running smoothly.",
            name: "Michael R.",
            role: "Property Manager, Black Mountain",
            avatar: "https://www.untitledui.com/images/avatars/phoenix-baker?w=144&h=144&q=75&fm=webp",
        },
        image: "/heroimage1.avif",
        imageAlt: "Septic maintenance team",
        link: "/reliable-septic-services",
        linkText: "See how it works",
        reverse: true,
    },
    ];

const MarqueeRow = ({ items, direction = "left" }: { items: string[]; direction?: "left" | "right" }) => (
    <div className="relative overflow-hidden">
        <div className={`flex gap-3 ${direction === "left" ? "animate-marquee" : "animate-marquee-reverse"}`}>
            {items.map((item, i) => (
                <div key={i} className="shrink-0 rounded-full border border-brand-200 bg-brand-50 px-4 py-2">
                    <span className="whitespace-nowrap text-sm font-medium text-brand-700">{item}</span>
                </div>
            ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent"></div>
    </div>
);

const FeatureBlock = ({ feature }: { feature: typeof features[0] }) => (
    <div className="border-b border-secondary bg-white">
        <div className="mx-auto max-w-7xl border-x border-secondary pl-6 py-0 lg:pl-12">
            <div className={`grid items-stretch lg:grid-cols-2 ${feature.reverse ? "" : ""}`}>
                {/* Content */}
                <div className={`flex flex-col justify-center py-16 pr-12 ${feature.reverse ? "lg:order-2 lg:pl-12 lg:pr-0" : ""}`}>
                    <h3 className="text-3xl font-semibold tracking-tight text-primary lg:text-4xl">
                        <span className="text-brand-600">{feature.titleHighlight}</span> {feature.heading.replace(feature.titleHighlight, "").trim()}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-tertiary">
                        {feature.description}
                    </p>

                    {/* Marquee */}
                    <div className="mt-8 space-y-3">
                        <MarqueeRow items={feature.marqueeTop} direction="left" />
                        <MarqueeRow items={feature.marqueeBottom} direction="right" />
                    </div>

                    {/* Testimonial */}
                    <div className="mt-8 flex items-start gap-4">
                        <img
                            src={feature.testimonial.avatar}
                            alt={feature.testimonial.name}
                            className="h-12 w-12 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-sm font-medium leading-relaxed text-primary">
                                "{feature.testimonial.quote}"
                            </p>
                            <p className="mt-2 text-sm text-tertiary">
                                {feature.testimonial.name}, {feature.testimonial.role}
                            </p>
                        </div>
                    </div>

                    {/* Link */}
                    <Link
                        href={feature.link}
                        className="mt-8 inline-flex items-center gap-2 text-lg font-medium text-brand-600 transition-colors hover:text-brand-700"
                    >
                        {feature.linkText}
                        <span>→</span>
                    </Link>
                </div>

                {/* Image */}
                <div className={`${feature.reverse ? "lg:order-1" : ""}`}>
                    <img
                        src={feature.image}
                        alt={feature.imageAlt}
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </div>
    </div>
);

const DotGridDivider = () => (
    <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl border-x border-secondary">
            <div
                className="h-24 w-full opacity-60"
                style={{
                    backgroundImage: 'radial-gradient(circle, #9ca3af 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                }}
            ></div>
        </div>
    </div>
);

export function FeaturesSection() {
    return (
        <section>
            {/* Section Header */}
            <div className="border-b border-secondary bg-white">
                <div className="mx-auto max-w-7xl border-x border-secondary px-6 py-16 text-center lg:px-12 lg:py-24">
                    <h2 className="mx-auto max-w-4xl text-3xl font-semibold tracking-tight text-primary lg:text-4xl xl:text-5xl">
                        Professional septic management, <em className="text-brand-600">done properly</em> — without the hassle
                    </h2>
                </div>
            </div>

            {/* Feature Blocks */}
            {features.map((feature, index) => (
                <div key={index}>
                    <FeatureBlock feature={feature} />
                    {index < features.length - 1 && <DotGridDivider />}
                </div>
            ))}
        </section>
    );
}
