"use client";

import { Star01, Quote } from "@untitledui/icons";
import { Avatar } from "@/components/base/avatar/avatar";

const testimonials = [
    {
        name: "Sarah Johnson",
        location: "Asheville, NC",
        rating: 5,
        text: "Excellent service! They were prompt, professional, and explained everything clearly. Highly recommend for any septic needs.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
        name: "Mike Thompson",
        location: "Hendersonville, NC",
        rating: 5,
        text: "Been using Able Septic for years. Always reliable and fairly priced. The team really knows their stuff.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
        name: "Jennifer Davis",
        location: "Black Mountain, NC",
        rating: 5,
        text: "They came out same day for an emergency and fixed the problem quickly. Great communication throughout. Very satisfied!",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    },
];

const stats = [
    { value: "30+", label: "Years Experience" },
    { value: "5,000+", label: "Happy Customers" },
    { value: "24/7", label: "Emergency Service" },
    { value: "100%", label: "Satisfaction Rate" },
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <Star01
                    key={i}
                    className={`size-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"}`}
                />
            ))}
        </div>
    );
}

export function WhyChooseUsSection() {
    return (
        <section className="border-x border-secondary bg-gray-900 py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center">
                    <span className="text-sm font-semibold uppercase tracking-wider text-red-400">
                        Testimonials
                    </span>
                    <h2 className="mt-3 text-display-md font-semibold text-white">
                        Why Choose Us as Your Trusted Septic Service?
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
                        Don't just take our word for it. See what our customers have to say
                        about their experience with Able Septic Tank Service.
                    </p>
                </div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-display-sm font-bold text-red-500">
                                {stat.value}
                            </div>
                            <div className="mt-2 text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Testimonials */}
                <div className="mt-16">
                    <h3 className="mb-8 text-center text-xl font-semibold text-white">
                        Praise from Happy Customers
                    </h3>
                    <div className="grid gap-8 md:grid-cols-3">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.name}
                                className="rounded-2xl border border-gray-800 bg-gray-800/50 p-6"
                            >
                                <StarRating rating={testimonial.rating} />
                                <p className="mt-4 text-gray-300">
                                    "{testimonial.text}"
                                </p>
                                <div className="mt-6 flex items-center gap-3">
                                    <Avatar
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        size="md"
                                    />
                                    <div>
                                        <div className="font-semibold text-white">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-sm text-gray-400">
                                            {testimonial.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Truck Image & CTA */}
                <div className="mt-16 grid items-center gap-8 lg:grid-cols-2">
                    <div className="overflow-hidden rounded-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                            alt="Able Septic Service Truck"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center justify-center rounded-2xl bg-red-600 p-8 lg:p-12">
                            <div>
                                <div className="flex items-center justify-center gap-3 lg:justify-start">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white">
                                        <span className="text-xl font-bold text-red-600">A</span>
                                    </div>
                                    <div>
                                        <span className="block text-2xl font-bold text-white">ABLE</span>
                                        <span className="text-sm text-white/80">SEPTIC TANK SERVICE</span>
                                    </div>
                                </div>
                                <div className="mt-6 text-4xl font-bold text-white lg:text-5xl">
                                    (828) 254-1920
                                </div>
                                <p className="mt-4 text-white/80">
                                    Call us today for fast, reliable service
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
