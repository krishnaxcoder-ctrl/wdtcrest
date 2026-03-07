"use client";

import { Phone, ShoppingCart01, Package, CheckCircle, ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { Badge } from "@/components/base/badges/badges";
import { Header } from "@/components/layout";
import { Footer } from "../components/footer";

const products = [
    {
        name: "Septic Tank Risers",
        description: "Easy-access risers bring your septic tank lid to ground level, making maintenance and inspections simple and convenient.",
        features: ["Durable polyethylene construction", "Various sizes available", "Easy installation", "Prevents yard digging"],
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
        popular: true,
    },
    {
        name: "Effluent Filters",
        description: "High-quality outlet filters protect your drain field by preventing solids from leaving the tank.",
        features: ["Easy to clean", "Extends drain field life", "Multiple flow rates", "Alarm compatible"],
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
        popular: false,
    },
    {
        name: "RootX Root Treatment",
        description: "Safe and effective root killer that eliminates tree roots in septic systems without harming your trees.",
        features: ["Kills roots on contact", "Prevents regrowth", "Safe for pipes", "EPA registered"],
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
        popular: true,
    },
    {
        name: "Bioforce Bacteria Treatment",
        description: "Professional-grade bacterial additive that promotes healthy septic system function and breaks down waste.",
        features: ["Monthly treatment", "Natural bacteria", "Odor reduction", "Improves breakdown"],
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
        popular: false,
    },
    {
        name: "Distribution Boxes",
        description: "Durable distribution boxes ensure even effluent distribution to your drain field lines.",
        features: ["Heavy-duty construction", "Multiple outlet options", "Easy to install", "Long-lasting"],
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
        popular: false,
    },
    {
        name: "Tank Lid Replacements",
        description: "Replacement concrete and plastic lids for septic tanks of all sizes and types.",
        features: ["Various sizes", "Concrete or plastic", "Secure fit", "Weather resistant"],
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        popular: false,
    },
];

const benefits = [
    {
        title: "Quality Products",
        description: "We only sell products we use and trust in our own work.",
    },
    {
        title: "Expert Advice",
        description: "Our team can help you choose the right products for your system.",
    },
    {
        title: "Competitive Pricing",
        description: "Fair prices on all septic products and supplies.",
    },
    {
        title: "Installation Available",
        description: "We can install any products we sell for your convenience.",
    },
];

export default function SepticProductsPage() {
    return (
        <div className="min-h-screen bg-primary">
            <Header />
            <main className="mx-auto max-w-7xl">
                {/* Hero Section */}
                <section className="relative overflow-hidden border-x border-secondary bg-secondary py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="mb-4 inline-flex items-center rounded-full bg-error-solid px-4 py-1.5 text-sm font-medium text-white">
                                Quality Products
                            </span>
                            <h1 className="text-display-lg font-semibold text-primary sm:text-display-xl">
                                Trustable Septic Products
                            </h1>
                            <p className="mt-6 text-xl text-tertiary">
                                High-quality septic system products and supplies to help maintain
                                and extend the life of your septic system.
                            </p>
                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <Button
                                    size="xl"
                                    iconLeading={Phone}
                                    className="bg-error-solid hover:bg-red-700"
                                >
                                    Call to Order: (828) 254-1920
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Bar */}
                <section className="border-x border-secondary bg-primary py-12">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {benefits.map((benefit) => (
                                <div key={benefit.title} className="text-center">
                                    <h3 className="font-semibold text-primary">{benefit.title}</h3>
                                    <p className="mt-1 text-sm text-tertiary">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Products Grid */}
                <section className="border-x border-secondary bg-secondary py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="mb-12 text-center">
                            <span className="text-sm font-semibold uppercase tracking-wider text-error-primary">
                                Shop Products
                            </span>
                            <h2 className="mt-3 text-display-md font-semibold text-primary">
                                Our Product Selection
                            </h2>
                        </div>

                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {products.map((product) => (
                                <div
                                    key={product.name}
                                    className="group overflow-hidden rounded-2xl border border-secondary bg-primary transition duration-100 ease-linear hover:shadow-lg"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden bg-tertiary">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-full object-cover transition duration-100 ease-linear group-hover:scale-105"
                                        />
                                        {product.popular && (
                                            <div className="absolute right-3 top-3">
                                                <Badge color="error" size="md">
                                                    Popular
                                                </Badge>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-primary">
                                            {product.name}
                                        </h3>
                                        <p className="mt-2 text-sm text-tertiary">
                                            {product.description}
                                        </p>
                                        <ul className="mt-4 space-y-2">
                                            {product.features.map((feature) => (
                                                <li key={feature} className="flex items-center gap-2 text-sm text-secondary">
                                                    <CheckCircle className="size-4 text-fg-success-primary" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <Button
                                            color="secondary"
                                            size="md"
                                            iconTrailing={ArrowRight}
                                            className="mt-6 w-full"
                                        >
                                            Learn More
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Need Help Section */}
                <section className="border-x border-secondary bg-primary py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="rounded-2xl bg-secondary p-8 lg:p-12">
                            <div className="grid items-center gap-8 lg:grid-cols-2">
                                <div>
                                    <FeaturedIcon
                                        icon={Package}
                                        size="lg"
                                        color="error"
                                        theme="light"
                                    />
                                    <h2 className="mt-6 text-display-sm font-semibold text-primary">
                                        Not Sure What You Need?
                                    </h2>
                                    <p className="mt-4 text-lg text-tertiary">
                                        Our experienced team can help you determine the right products
                                        for your septic system. We'll assess your needs and recommend
                                        the best solutions.
                                    </p>
                                    <div className="mt-8 flex flex-wrap gap-4">
                                        <Button
                                            size="lg"
                                            iconLeading={Phone}
                                            className="bg-error-solid hover:bg-red-700"
                                        >
                                            Call for Expert Advice
                                        </Button>
                                    </div>
                                </div>
                                <div className="text-center lg:text-right">
                                    <div className="inline-block rounded-2xl bg-primary p-8 shadow-lg">
                                        <p className="text-lg text-tertiary">Call us today</p>
                                        <p className="mt-2 text-display-sm font-bold text-error-primary">
                                            (828) 254-1920
                                        </p>
                                        <p className="mt-2 text-tertiary">
                                            Mon-Fri: 8AM-5PM
                                        </p>
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
                            Ready to Order?
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                            Contact us to place an order or schedule product installation. We're here to help keep your septic system running smoothly.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <Button
                                size="xl"
                                className="bg-white text-gray-900 hover:bg-gray-100"
                                iconLeading={Phone}
                            >
                                Call (828) 254-1920
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
