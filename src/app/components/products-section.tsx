"use client";

import { ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";

const products = [
    {
        name: "Septic Tank Risers",
        description: "Easy access risers for convenient tank maintenance and inspection.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80",
    },
    {
        name: "Effluent Filters",
        description: "High-quality filters to protect your drain field from solid waste.",
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80",
    },
    {
        name: "Distribution Boxes",
        description: "Durable distribution boxes for even effluent distribution.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80",
    },
    {
        name: "Bacteria Additives",
        description: "Biological treatments to maintain healthy septic system bacteria.",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80",
    },
];

export function ProductsSection() {
    return (
        <section className="border-x border-secondary bg-secondary py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-wider text-error-primary">
                            Shop
                        </span>
                        <h2 className="mt-3 text-display-md font-semibold text-primary">
                            Septic System Products
                        </h2>
                        <p className="mt-4 max-w-2xl text-lg text-tertiary">
                            We offer a range of high-quality septic system products and accessories
                            to help maintain and extend the life of your system.
                        </p>
                    </div>
                    <Button
                        size="lg"
                        iconTrailing={ArrowRight}
                        className="shrink-0 bg-error-solid hover:bg-red-700"
                    >
                        View All Products
                    </Button>
                </div>

                {/* Products Grid */}
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <div
                            key={product.name}
                            className="group overflow-hidden rounded-2xl border border-secondary bg-primary transition duration-100 ease-linear hover:shadow-lg"
                        >
                            <div className="aspect-square overflow-hidden bg-tertiary">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover transition duration-100 ease-linear group-hover:scale-105"
                                />
                            </div>
                            <div className="p-5">
                                <h3 className="font-semibold text-primary">
                                    {product.name}
                                </h3>
                                <p className="mt-2 text-sm text-tertiary">
                                    {product.description}
                                </p>
                                <Button
                                    color="link-color"
                                    size="sm"
                                    iconTrailing={ArrowRight}
                                    className="mt-4 text-error-primary"
                                >
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
