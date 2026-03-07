"use client";

import { Phone, Star01, MessageSquare02 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badges";
import { Header } from "@/components/layout";
import { Footer } from "../components/footer";

const reviews = [
    {
        name: "Sarah Johnson",
        location: "Asheville, NC",
        date: "2 weeks ago",
        rating: 5,
        title: "Exceptional Service!",
        text: "Without a doubt, the most prompt, professional, courteous and best service we have experienced in a long time. They arrived on time, explained everything clearly, and left our property clean. Highly recommend!",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
        verified: true,
    },
    {
        name: "Mike Thompson",
        location: "Hendersonville, NC",
        date: "1 month ago",
        rating: 5,
        title: "Been Using Them for Years",
        text: "We've been using Able Septic for over 10 years. Always reliable and fairly priced. The team really knows their stuff. They've helped us maintain our system and even caught a potential problem early.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
        verified: true,
    },
    {
        name: "Jennifer Davis",
        location: "Black Mountain, NC",
        date: "3 weeks ago",
        rating: 5,
        title: "Emergency Service Saved Us",
        text: "They came out same day for an emergency and fixed the problem quickly. Great communication throughout. Very satisfied! Can't thank them enough for their quick response.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
        verified: true,
    },
    {
        name: "Robert Wilson",
        location: "Weaverville, NC",
        date: "1 month ago",
        rating: 5,
        title: "Professional and Honest",
        text: "Super affordable and always prompt! Can always count on them! Great family owned company! They don't try to upsell you on things you don't need. Just honest, quality work.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
        verified: true,
    },
    {
        name: "Lisa Anderson",
        location: "Candler, NC",
        date: "2 months ago",
        rating: 5,
        title: "Excellent Real Estate Inspection",
        text: "Needed a septic inspection for a home purchase. They were thorough, explained everything in detail, and provided the report quickly. The real estate agent was impressed with their professionalism.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
        verified: true,
    },
    {
        name: "David Martinez",
        location: "Fletcher, NC",
        date: "3 months ago",
        rating: 5,
        title: "Great Commercial Service",
        text: "We use Able Septic for our restaurant's grease trap service. They're always on time, professional, and keep us compliant with health codes. Wouldn't trust anyone else.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
        verified: true,
    },
];

const stats = [
    { value: "5.0", label: "Average Rating" },
    { value: "500+", label: "Reviews" },
    { value: "98%", label: "Recommend Us" },
    { value: "30+", label: "Years Trusted" },
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <Star01
                    key={i}
                    className={`size-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                />
            ))}
        </div>
    );
}

export default function ReviewsPage() {
    return (
        <div className="min-h-screen bg-primary">
            <Header />
            <main className="mx-auto max-w-7xl">
                {/* Hero Section */}
                <section className="border-x border-secondary bg-secondary py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="mb-4 inline-flex items-center rounded-full bg-error-solid px-4 py-1.5 text-sm font-medium text-white">
                                Customer Reviews
                            </span>
                            <h1 className="text-display-lg font-semibold text-primary sm:text-display-xl">
                                Reviews on Septic Services
                            </h1>
                            <p className="mt-6 text-xl text-tertiary">
                                Don't just take our word for it. See what our customers have to say
                                about their experience with Able Septic Tank Service.
                            </p>

                            {/* Overall Rating */}
                            <div className="mt-8 inline-flex items-center gap-4 rounded-2xl bg-primary p-6 shadow-sm">
                                <div className="text-center">
                                    <div className="text-display-sm font-bold text-primary">5.0</div>
                                    <StarRating rating={5} />
                                    <p className="mt-1 text-sm text-tertiary">Based on 500+ reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="border-x border-secondary bg-primary py-12">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-display-xs font-bold text-error-primary">
                                        {stat.value}
                                    </div>
                                    <div className="mt-1 text-tertiary">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Reviews Grid */}
                <section className="border-x border-secondary bg-secondary py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="mb-12 flex items-center justify-between">
                            <div>
                                <span className="text-sm font-semibold uppercase tracking-wider text-error-primary">
                                    Testimonials
                                </span>
                                <h2 className="mt-3 text-display-md font-semibold text-primary">
                                    What Our Customers Say
                                </h2>
                            </div>
                            <Button
                                size="lg"
                                color="secondary"
                                iconLeading={MessageSquare02}
                            >
                                Write a Review
                            </Button>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {reviews.map((review) => (
                                <div
                                    key={review.name}
                                    className="rounded-2xl bg-primary p-6 shadow-sm"
                                >
                                    <div className="flex items-start justify-between">
                                        <StarRating rating={review.rating} />
                                        {review.verified && (
                                            <Badge color="success" size="sm">
                                                Verified
                                            </Badge>
                                        )}
                                    </div>
                                    <h3 className="mt-4 font-semibold text-primary">
                                        {review.title}
                                    </h3>
                                    <p className="mt-3 text-tertiary">
                                        "{review.text}"
                                    </p>
                                    <div className="mt-6 flex items-center gap-3 border-t border-secondary pt-4">
                                        <Avatar
                                            src={review.avatar}
                                            alt={review.name}
                                            size="md"
                                        />
                                        <div>
                                            <div className="font-semibold text-primary">
                                                {review.name}
                                            </div>
                                            <div className="text-sm text-tertiary">
                                                {review.location} • {review.date}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <Button size="lg" color="secondary">
                                Load More Reviews
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Review Platforms */}
                <section className="border-x border-secondary bg-primary py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-display-sm font-semibold text-primary">
                                Find Us On
                            </h2>
                            <p className="mt-4 text-tertiary">
                                Read more reviews and leave your feedback on these platforms
                            </p>
                            <div className="mt-8 flex flex-wrap justify-center gap-6">
                                <div className="flex items-center gap-3 rounded-xl border border-secondary bg-secondary px-6 py-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-red-600 text-xl font-bold text-white">
                                        G
                                    </div>
                                    <div className="text-left">
                                        <p className="font-semibold text-primary">Google</p>
                                        <div className="flex items-center gap-1">
                                            <StarRating rating={5} />
                                            <span className="text-sm text-tertiary">(200+)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 rounded-xl border border-secondary bg-secondary px-6 py-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-red-500 text-xl font-bold text-white">
                                        Y
                                    </div>
                                    <div className="text-left">
                                        <p className="font-semibold text-primary">Yelp</p>
                                        <div className="flex items-center gap-1">
                                            <StarRating rating={5} />
                                            <span className="text-sm text-tertiary">(50+)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 rounded-xl border border-secondary bg-secondary px-6 py-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-600 text-xl font-bold text-white">
                                        F
                                    </div>
                                    <div className="text-left">
                                        <p className="font-semibold text-primary">Facebook</p>
                                        <div className="flex items-center gap-1">
                                            <StarRating rating={5} />
                                            <span className="text-sm text-tertiary">(100+)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="border-x border-secondary bg-error-solid py-16">
                    <div className="px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="text-display-sm font-semibold text-white">
                            Ready to Experience 5-Star Service?
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                            Join our family of satisfied customers. Call today and see why we're
                            Western North Carolina's most trusted septic service.
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
                                Get Free Quote
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
