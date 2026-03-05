"use client";

import { Phone, Mail01, MarkerPin01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";

const footerLinks = {
    services: [
        { label: "Septic Pumping", href: "#" },
        { label: "Septic Inspections", href: "#" },
        { label: "Septic Repair", href: "#" },
        { label: "Grease Traps", href: "#" },
        { label: "Emergency Service", href: "#" },
    ],
    company: [
        { label: "About Us", href: "#" },
        { label: "Our Team", href: "#" },
        { label: "Service Areas", href: "#" },
        { label: "Reviews", href: "#" },
        { label: "Contact", href: "#" },
    ],
    resources: [
        { label: "Septic Tips", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Products", href: "#" },
    ],
};

export function Footer() {
    return (
        <footer className="border-x border-t border-secondary bg-primary">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-4">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-error-solid">
                                <span className="text-lg font-bold text-white">A</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-primary">ABLE</span>
                                <span className="text-xs text-tertiary">SEPTIC TANK SERVICE</span>
                            </div>
                        </div>
                        <p className="mt-4 text-tertiary">
                            Serving Western North Carolina with professional septic services
                            for over 30 years.
                        </p>
                        <div className="mt-6 space-y-3">
                            <div className="flex items-center gap-3 text-tertiary">
                                <Phone className="size-5 text-fg-tertiary" />
                                <span>(828) 254-1920</span>
                            </div>
                            <div className="flex items-center gap-3 text-tertiary">
                                <Mail01 className="size-5 text-fg-tertiary" />
                                <span>info@ableseptic.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-tertiary">
                                <MarkerPin01 className="size-5 text-fg-tertiary" />
                                <span>Asheville, NC 28801</span>
                            </div>
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                            Services
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.label}>
                                    <Button
                                        href={link.href}
                                        color="link-gray"
                                        size="sm"
                                        className="px-0"
                                    >
                                        {link.label}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                            Company
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Button
                                        href={link.href}
                                        color="link-gray"
                                        size="sm"
                                        className="px-0"
                                    >
                                        {link.label}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                            Resources
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <Button
                                        href={link.href}
                                        color="link-gray"
                                        size="sm"
                                        className="px-0"
                                    >
                                        {link.label}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-secondary pt-8 sm:flex-row">
                    <p className="text-sm text-tertiary">
                        © {new Date().getFullYear()} Able Septic Tank Service. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Button href="#" color="link-gray" size="sm">
                            Privacy Policy
                        </Button>
                        <Button href="#" color="link-gray" size="sm">
                            Terms of Service
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
