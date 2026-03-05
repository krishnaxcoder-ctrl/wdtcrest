"use client";

import { SearchLg, MarkerPin01, Phone } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";

export function HeroSection() {
    return (
        <section className="relative min-h-screen overflow-hidden border-x border-secondary">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
                <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
                    alt="Septic service truck"
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
                <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Content */}
                    <div className="flex flex-col justify-center">
                        <span className="mb-4 inline-flex w-fit items-center rounded-full bg-error-solid px-4 py-1.5 text-sm font-medium text-white">
                            Serving Asheville & Surrounding Areas
                        </span>
                        <h1 className="text-display-lg font-semibold text-white sm:text-display-xl">
                            Professional Septic Tank Services
                        </h1>
                        <p className="mt-6 text-lg text-gray-300">
                            Trusted septic system maintenance, inspections, and repairs.
                            Over 30 years of experience serving Western North Carolina.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Button
                                size="xl"
                                iconLeading={Phone}
                                className="bg-error-solid hover:bg-red-700"
                            >
                                Call Now: (828) 254-1920
                            </Button>
                            <Button
                                size="xl"
                                color="secondary"
                                className="border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                            >
                                View Services
                            </Button>
                        </div>
                    </div>

                    {/* Service Request Form */}
                    <div className="rounded-2xl border border-white/10 bg-white/95 p-6 shadow-2xl backdrop-blur-md sm:p-8">
                        <div className="mb-6 text-center">
                            <h2 className="text-display-xs font-semibold text-primary">
                                Request Service
                            </h2>
                            <p className="mt-2 text-tertiary">
                                Get a free quote for your septic needs
                            </p>
                        </div>
                        <form className="flex flex-col gap-4">
                            <Input
                                label="Full Name"
                                placeholder="John Smith"
                                size="md"
                            />
                            <Input
                                label="Phone Number"
                                placeholder="(828) 555-0123"
                                type="tel"
                                size="md"
                            />
                            <Input
                                label="Email Address"
                                placeholder="john@example.com"
                                type="email"
                                size="md"
                            />
                            <Input
                                label="Service Address"
                                placeholder="123 Main St, Asheville, NC"
                                icon={MarkerPin01}
                                size="md"
                            />
                            <Button
                                type="submit"
                                size="lg"
                                className="mt-2 w-full bg-error-solid hover:bg-red-700"
                            >
                                Get Free Quote
                            </Button>
                            <p className="text-center text-sm text-tertiary">
                                We typically respond within 2 hours
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
