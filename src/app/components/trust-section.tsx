"use client";

import { Shield01, Clock, Award01, Users01 } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

const features = [
    {
        icon: Shield01,
        title: "Licensed & Insured",
        description: "Fully licensed and insured for your protection and peace of mind.",
    },
    {
        icon: Clock,
        title: "24/7 Emergency Service",
        description: "Available around the clock for urgent septic emergencies.",
    },
    {
        icon: Award01,
        title: "30+ Years Experience",
        description: "Decades of expertise in septic system services.",
    },
    {
        icon: Users01,
        title: "Family Owned",
        description: "Local family business serving our community with care.",
    },
];

export function TrustSection() {
    return (
        <section className="border-x border-secondary bg-secondary py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Image */}
                    <div className="relative">
                        <div className="aspect-square overflow-hidden rounded-full border-8 border-error-solid shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                                alt="Septic service professional"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-4 -right-4 flex h-24 w-24 items-center justify-center rounded-full bg-error-solid text-center shadow-lg">
                            <div>
                                <span className="block text-2xl font-bold text-white">30+</span>
                                <span className="text-xs text-white/80">Years</span>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-wider text-error-primary">
                            Why Trust Us
                        </span>
                        <h2 className="mt-3 text-display-md font-semibold text-primary">
                            Trust the Septic System Professionals
                        </h2>
                        <p className="mt-4 text-lg text-tertiary">
                            Our knowledgeable team is ready to implement eco-friendly septic solutions
                            to either increase your property value and extend the life of your septic
                            system with proper maintenance and care.
                        </p>

                        {/* Features */}
                        <div className="mt-10 grid gap-6 sm:grid-cols-2">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex gap-4">
                                    <FeaturedIcon
                                        icon={feature.icon}
                                        size="md"
                                        color="error"
                                        theme="light"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-primary">
                                            {feature.title}
                                        </h3>
                                        <p className="mt-1 text-sm text-tertiary">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
