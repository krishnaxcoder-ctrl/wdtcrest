"use client";

import { Phone, Mail01, MarkerPin01, Clock } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

const contactInfo = [
    {
        icon: Phone,
        title: "Phone",
        details: "(828) 254-1920",
        description: "Mon-Fri 8am-5pm, 24/7 Emergency",
    },
    {
        icon: Mail01,
        title: "Email",
        details: "info@ableseptic.com",
        description: "We'll respond within 24 hours",
    },
    {
        icon: MarkerPin01,
        title: "Service Area",
        details: "Asheville, NC & Surrounding",
        description: "Buncombe, Henderson, Madison Counties",
    },
    {
        icon: Clock,
        title: "Hours",
        details: "Mon-Fri: 8AM-5PM",
        description: "24/7 Emergency Service Available",
    },
];

export function ContactSection() {
    return (
        <section id="contact" className="border-x border-secondary bg-primary py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-wider text-error-primary">
                        Contact Us
                    </span>
                    <h2 className="mt-3 text-display-md font-semibold text-primary">
                        Contact Us Today!
                    </h2>
                    <p className="mt-4 text-lg text-tertiary">
                        Ready to schedule service or have questions? Reach out to our team
                        and we'll get back to you as soon as possible.
                    </p>
                </div>

                {/* Contact Info Cards */}
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {contactInfo.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl border border-secondary bg-secondary p-6 text-center"
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
                            <p className="mt-2 text-lg font-medium text-error-primary">
                                {item.details}
                            </p>
                            <p className="mt-1 text-sm text-tertiary">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Contact Form & Map */}
                <div className="mt-16 grid gap-8 lg:grid-cols-2">
                    {/* Contact Form */}
                    <div className="rounded-2xl border border-secondary bg-secondary p-8">
                        <h3 className="text-display-xs font-semibold text-primary">
                            Send Us a Message
                        </h3>
                        <p className="mt-2 text-tertiary">
                            Fill out the form below and we'll get back to you shortly.
                        </p>
                        <form className="mt-6 flex flex-col gap-4">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <Input
                                    label="First Name"
                                    placeholder="John"
                                    size="md"
                                />
                                <Input
                                    label="Last Name"
                                    placeholder="Smith"
                                    size="md"
                                />
                            </div>
                            <Input
                                label="Email"
                                placeholder="john@example.com"
                                type="email"
                                size="md"
                            />
                            <Input
                                label="Phone"
                                placeholder="(828) 555-0123"
                                type="tel"
                                size="md"
                            />
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-secondary">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="How can we help you?"
                                    className="w-full rounded-lg border border-primary bg-primary px-3.5 py-2.5 text-primary placeholder:text-placeholder focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand-100"
                                />
                            </div>
                            <Button
                                type="submit"
                                size="lg"
                                className="mt-2 w-full bg-error-solid hover:bg-red-700"
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>

                    {/* Map */}
                    <div className="overflow-hidden rounded-2xl border border-secondary">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103989.66152055045!2d-82.62374365!3d35.5950581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8859f33e189a7e5d%3A0x1d67a3d3c19b00cd!2sAsheville%2C%20NC!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: "400px" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Service Area Map"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
