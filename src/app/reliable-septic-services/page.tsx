"use client";

import { Phone, Mail01, MarkerPin01, Clock, Send01, MessageSquare02 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

const contactInfo = [
    {
        icon: Phone,
        title: "Phone",
        details: "(828) 254-1920",
        description: "Mon-Fri 8am-5pm, 24/7 Emergency",
        action: "tel:+18285541920",
    },
    {
        icon: Mail01,
        title: "Email",
        details: "info@ableseptic.com",
        description: "We'll respond within 24 hours",
        action: "mailto:info@ableseptic.com",
    },
    {
        icon: MarkerPin01,
        title: "Address",
        details: "20 Brownwood Ave",
        description: "Asheville, NC 28806",
        action: "https://maps.google.com",
    },
    {
        icon: Clock,
        title: "Hours",
        details: "Mon-Fri: 8AM-5PM",
        description: "24/7 Emergency Service",
        action: null,
    },
];

const serviceAreas = [
    "Asheville",
    "Weaverville",
    "Black Mountain",
    "Hendersonville",
    "Fletcher",
    "Candler",
    "Arden",
    "Swannanoa",
    "Fairview",
    "Leicester",
    "Mars Hill",
    "Marshall",
];

const services = [
    "Septic Tank Pumping",
    "Septic Inspections",
    "Grease Trap Cleaning",
    "Septic Repairs",
    "Emergency Services",
    "Septic Products",
];

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-primary">
            <Header />
            <main className="mx-auto max-w-7xl">
                {/* Hero Section */}
                <section className="border-x border-secondary bg-secondary py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="mb-4 inline-flex items-center rounded-full bg-error-solid px-4 py-1.5 text-sm font-medium text-white">
                                Contact Us
                            </span>
                            <h1 className="text-display-lg font-semibold text-primary sm:text-display-xl">
                                Reliable Septic Services
                            </h1>
                            <p className="mt-6 text-xl text-tertiary">
                                Ready to schedule service or have questions? Contact our team and we'll
                                get back to you promptly. We're here to help with all your septic needs.
                            </p>
                            <div className="mt-8">
                                <Button
                                    size="xl"
                                    iconLeading={Phone}
                                    className="bg-error-solid hover:bg-red-700"
                                >
                                    Call Now: (828) 254-1920
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Info Cards */}
                <section className="border-x border-secondary bg-primary py-16">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {contactInfo.map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border border-secondary bg-secondary p-6 text-center transition duration-100 ease-linear hover:shadow-md"
                                >
                                    <div className="flex justify-center">
                                        <FeaturedIcon
                                            icon={item.icon}
                                            size="lg"
                                            color="error"
                                            theme="light"
                                        />
                                    </div>
                                    <h3 className="mt-4 font-semibold text-primary">
                                        {item.title}
                                    </h3>
                                    {item.action ? (
                                        <a
                                            href={item.action}
                                            className="mt-2 block text-lg font-medium text-error-primary hover:underline"
                                        >
                                            {item.details}
                                        </a>
                                    ) : (
                                        <p className="mt-2 text-lg font-medium text-error-primary">
                                            {item.details}
                                        </p>
                                    )}
                                    <p className="mt-1 text-sm text-tertiary">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Form & Map */}
                <section className="border-x border-secondary bg-secondary py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2">
                            {/* Contact Form */}
                            <div className="rounded-2xl bg-primary p-8 shadow-sm lg:p-10">
                                <div className="flex items-center gap-3">
                                    <FeaturedIcon
                                        icon={MessageSquare02}
                                        size="md"
                                        color="error"
                                        theme="light"
                                    />
                                    <div>
                                        <h2 className="text-display-xs font-semibold text-primary">
                                            Send Us a Message
                                        </h2>
                                        <p className="text-tertiary">
                                            Fill out the form and we'll get back to you shortly.
                                        </p>
                                    </div>
                                </div>

                                <form className="mt-8 flex flex-col gap-5">
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <Input
                                            label="First Name"
                                            placeholder="John"
                                            size="md"
                                            isRequired
                                        />
                                        <Input
                                            label="Last Name"
                                            placeholder="Smith"
                                            size="md"
                                            isRequired
                                        />
                                    </div>
                                    <Input
                                        label="Email"
                                        placeholder="john@example.com"
                                        type="email"
                                        size="md"
                                        isRequired
                                    />
                                    <Input
                                        label="Phone"
                                        placeholder="(828) 555-0123"
                                        type="tel"
                                        size="md"
                                        isRequired
                                    />
                                    <Input
                                        label="Service Address"
                                        placeholder="123 Main St, Asheville, NC"
                                        icon={MarkerPin01}
                                        size="md"
                                    />
                                    <div>
                                        <label className="mb-1.5 block text-sm font-medium text-secondary">
                                            Service Needed
                                        </label>
                                        <select className="w-full rounded-lg border border-primary bg-primary px-3.5 py-2.5 text-primary focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand-100">
                                            <option value="">Select a service</option>
                                            {services.map((service) => (
                                                <option key={service} value={service}>
                                                    {service}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="mb-1.5 block text-sm font-medium text-secondary">
                                            Message
                                        </label>
                                        <textarea
                                            rows={4}
                                            placeholder="Tell us about your septic needs..."
                                            className="w-full rounded-lg border border-primary bg-primary px-3.5 py-2.5 text-primary placeholder:text-placeholder focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand-100"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        size="lg"
                                        iconTrailing={Send01}
                                        className="mt-2 w-full bg-error-solid hover:bg-red-700"
                                    >
                                        Send Message
                                    </Button>
                                </form>
                            </div>

                            {/* Map & Info */}
                            <div className="flex flex-col gap-8">
                                {/* Map */}
                                <div className="flex-1 overflow-hidden rounded-2xl border border-secondary">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103989.66152055045!2d-82.62374365!3d35.5950581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8859f33e189a7e5d%3A0x1d67a3d3c19b00cd!2sAsheville%2C%20NC!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, minHeight: "300px" }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Service Area Map"
                                    />
                                </div>

                                {/* Service Areas */}
                                <div className="rounded-2xl bg-primary p-6 shadow-sm">
                                    <h3 className="text-lg font-semibold text-primary">
                                        Service Areas
                                    </h3>
                                    <p className="mt-2 text-tertiary">
                                        We proudly serve these communities in Western North Carolina:
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {serviceAreas.map((area) => (
                                            <span
                                                key={area}
                                                className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary"
                                            >
                                                {area}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Emergency Banner */}
                <section className="border-x border-secondary bg-gray-900 py-12">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                            <div className="text-center md:text-left">
                                <h2 className="text-2xl font-semibold text-white">
                                    24/7 Emergency Septic Service
                                </h2>
                                <p className="mt-2 text-gray-400">
                                    Septic emergency? We're available around the clock for urgent issues.
                                </p>
                            </div>
                            <Button
                                size="xl"
                                iconLeading={Phone}
                                className="shrink-0 bg-error-solid hover:bg-red-700"
                            >
                                Emergency: (828) 254-1920
                            </Button>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="border-x border-secondary bg-error-solid py-16">
                    <div className="px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="text-display-sm font-semibold text-white">
                            Ready to Get Started?
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                            Whether you need routine maintenance or emergency service, we're here to help.
                            Contact us today for reliable septic services you can trust.
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
