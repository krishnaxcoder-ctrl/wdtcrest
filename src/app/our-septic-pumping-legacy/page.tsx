"use client";

import { Phone, Users01, Award01, Heart, Target05, Clock, Shield01, Truck01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { Avatar } from "@/components/base/avatar/avatar";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

const milestones = [
    {
        year: "1965",
        title: "Company Founded",
        description: "Able Septic Tank Service was established in Asheville, NC with a single truck and a commitment to quality service.",
    },
    {
        year: "1980",
        title: "Fleet Expansion",
        description: "Expanded our fleet to serve more customers across Buncombe County and surrounding areas.",
    },
    {
        year: "1995",
        title: "NC Certification",
        description: "Achieved NC DEQ certification for septic inspections, becoming one of the first certified companies in the region.",
    },
    {
        year: "2010",
        title: "Third Generation",
        description: "The third generation of the family joined the business, continuing our tradition of excellence.",
    },
    {
        year: "Today",
        title: "Industry Leaders",
        description: "Over 30 years of experience, serving thousands of satisfied customers throughout Western North Carolina.",
    },
];

const values = [
    {
        icon: Heart,
        title: "Family Values",
        description: "As a family-owned business, we treat every customer like family and take pride in our community.",
    },
    {
        icon: Shield01,
        title: "Integrity",
        description: "We believe in honest, transparent service with fair pricing and no hidden fees.",
    },
    {
        icon: Target05,
        title: "Excellence",
        description: "We strive for excellence in everything we do, from customer service to technical expertise.",
    },
    {
        icon: Users01,
        title: "Community",
        description: "We're proud to serve our local community and give back whenever we can.",
    },
];

const stats = [
    { value: "1965", label: "Year Founded" },
    { value: "30+", label: "Years Experience" },
    { value: "5,000+", label: "Customers Served" },
    { value: "24/7", label: "Emergency Service" },
];

const team = [
    {
        name: "John Smith",
        role: "Owner & Operator",
        bio: "Third-generation owner with over 25 years of hands-on experience in septic services.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
    },
    {
        name: "Mike Johnson",
        role: "Senior Technician",
        bio: "NC-certified inspector with 15 years of experience in residential and commercial systems.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
    },
    {
        name: "Sarah Williams",
        role: "Office Manager",
        bio: "Keeps our operations running smoothly and ensures every customer receives prompt service.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-primary">
            <Header />
            <main className="mx-auto max-w-7xl">
                {/* Hero Section */}
                <section className="relative overflow-hidden border-x border-secondary bg-secondary py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="grid items-center gap-12 lg:grid-cols-2">
                            <div>
                                <span className="mb-4 inline-flex items-center rounded-full bg-error-solid px-4 py-1.5 text-sm font-medium text-white">
                                    Since 1965
                                </span>
                                <h1 className="text-display-lg font-semibold text-primary sm:text-display-xl">
                                    Our Septic Pumping Legacy
                                </h1>
                                <p className="mt-6 text-xl text-tertiary">
                                    For over 30 years, Able Septic Tank Service has been the trusted choice
                                    for septic services in Western North Carolina. Our family-owned business
                                    is built on a foundation of integrity, expertise, and customer care.
                                </p>
                                <div className="mt-8">
                                    <Button
                                        size="xl"
                                        iconLeading={Phone}
                                        className="bg-error-solid hover:bg-red-700"
                                    >
                                        Call (828) 254-1920
                                    </Button>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square overflow-hidden rounded-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                                        alt="Able Septic team"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -left-6 rounded-xl bg-error-solid p-6 text-white shadow-lg">
                                    <p className="text-4xl font-bold">30+</p>
                                    <p className="text-white/80">Years of Service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="border-x border-secondary bg-primary py-16">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-display-sm font-bold text-error-primary">
                                        {stat.value}
                                    </div>
                                    <div className="mt-2 text-tertiary">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Story */}
                <section className="border-x border-secondary bg-secondary py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="text-sm font-semibold uppercase tracking-wider text-error-primary">
                                Our Story
                            </span>
                            <h2 className="mt-3 text-display-md font-semibold text-primary">
                                A Legacy of Excellence
                            </h2>
                            <p className="mt-4 text-lg text-tertiary">
                                What started as a small family operation has grown into one of Western
                                North Carolina's most trusted septic service companies.
                            </p>
                        </div>

                        {/* Timeline */}
                        <div className="relative mt-16">
                            <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-border-secondary lg:block" />
                            <div className="space-y-12">
                                {milestones.map((milestone, index) => (
                                    <div
                                        key={milestone.year}
                                        className={`flex flex-col items-center gap-8 lg:flex-row ${
                                            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                        }`}
                                    >
                                        <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                                            <div className="rounded-xl bg-primary p-6 shadow-sm">
                                                <span className="text-2xl font-bold text-error-primary">
                                                    {milestone.year}
                                                </span>
                                                <h3 className="mt-2 text-lg font-semibold text-primary">
                                                    {milestone.title}
                                                </h3>
                                                <p className="mt-2 text-tertiary">
                                                    {milestone.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-error-solid text-white">
                                            <Clock className="size-6" />
                                        </div>
                                        <div className="hidden flex-1 lg:block" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="border-x border-secondary bg-primary py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="text-sm font-semibold uppercase tracking-wider text-error-primary">
                                Our Values
                            </span>
                            <h2 className="mt-3 text-display-md font-semibold text-primary">
                                What We Stand For
                            </h2>
                        </div>

                        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {values.map((value) => (
                                <div key={value.title} className="text-center">
                                    <div className="flex justify-center">
                                        <FeaturedIcon
                                            icon={value.icon}
                                            size="lg"
                                            color="error"
                                            theme="light"
                                        />
                                    </div>
                                    <h3 className="mt-5 text-lg font-semibold text-primary">
                                        {value.title}
                                    </h3>
                                    <p className="mt-2 text-tertiary">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="border-x border-secondary bg-secondary py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="text-sm font-semibold uppercase tracking-wider text-error-primary">
                                Our Team
                            </span>
                            <h2 className="mt-3 text-display-md font-semibold text-primary">
                                Meet the Experts
                            </h2>
                            <p className="mt-4 text-lg text-tertiary">
                                Our experienced team is dedicated to providing the best septic services in the region.
                            </p>
                        </div>

                        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {team.map((member) => (
                                <div
                                    key={member.name}
                                    className="rounded-2xl bg-primary p-6 text-center shadow-sm"
                                >
                                    <div className="mx-auto h-32 w-32 overflow-hidden rounded-full">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <h3 className="mt-6 text-lg font-semibold text-primary">
                                        {member.name}
                                    </h3>
                                    <p className="text-error-primary">{member.role}</p>
                                    <p className="mt-3 text-sm text-tertiary">{member.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="border-x border-secondary bg-error-solid py-16">
                    <div className="px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="text-display-sm font-semibold text-white">
                            Ready to Experience the Able Difference?
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                            Join thousands of satisfied customers who trust us with their septic needs.
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
                                Contact Us
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
