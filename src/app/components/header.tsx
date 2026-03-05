"use client";

import { Phone, Menu01, X, Mail01, Clock, ChevronDown, MarkerPin01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
import { useState } from "react";
import Link from "next/link";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Septic Pumping", href: "/reliable-septic-pumping-solutions" },
    { label: "Inspections", href: "/septic-inspection-solutions" },
    { label: "Products", href: "/trustable-septic-products" },
    { label: "About", href: "/our-septic-pumping-legacy" },
    { label: "Reviews", href: "/reviews-on-septic-services" },
    { label: "Contact", href: "/reliable-septic-services" },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-gray-900">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
                    <div className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
                        <div className="flex items-center gap-2">
                            <Clock className="size-4 text-red-400" />
                            <span>Mon-Fri: 8AM-5PM | 24/7 Emergency</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MarkerPin01 className="size-4 text-red-400" />
                            <span>Serving Asheville & WNC</span>
                        </div>
                    </div>
                    <div className="flex w-full items-center justify-between gap-6 md:w-auto md:justify-end">
                        <a
                            href="mailto:info@ableseptic.com"
                            className="flex items-center gap-2 text-sm text-gray-300 transition hover:text-white"
                        >
                            <Mail01 className="size-4 text-red-400" />
                            <span className="hidden sm:inline">info@ableseptic.com</span>
                        </a>
                        <a
                            href="tel:+18285541920"
                            className="flex items-center gap-2 text-sm font-semibold text-white"
                        >
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500">
                                <Phone className="size-3.5 text-white" />
                            </div>
                            <span>(828) 254-1920</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="border-b border-secondary bg-primary/95 backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 transition hover:opacity-90">
                        <div className="relative">
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-700 shadow-lg shadow-red-500/25">
                                <span className="text-2xl font-black text-white">A</span>
                            </div>
                            <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 ring-2 ring-white">
                                <span className="text-[10px] font-bold text-white">✓</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-black tracking-tight text-primary">ABLE</span>
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-tertiary">
                                Septic Tank Service
                            </span>
                            <span className="text-[9px] font-medium text-red-500">Since 1965</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-1 xl:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={cx(
                                    "relative px-4 py-2 text-sm font-medium text-secondary transition duration-100 ease-linear",
                                    "hover:text-primary",
                                    "after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-red-500 after:transition-all after:duration-200",
                                    "hover:after:w-full"
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden items-center gap-3 lg:flex xl:flex">
                        <div className="mr-2 hidden items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 xl:flex">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                            </span>
                            <span className="text-xs font-medium text-green-700">Available Now</span>
                        </div>
                        <Button
                            href="tel:+18285541920"
                            size="lg"
                            iconLeading={Phone}
                            className="bg-gradient-to-r from-red-500 to-red-600 shadow-lg shadow-red-500/25 transition hover:from-red-600 hover:to-red-700 hover:shadow-red-500/40"
                        >
                            Call Now
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-secondary bg-secondary transition hover:bg-tertiary lg:hidden xl:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="size-5 text-fg-primary" />
                        ) : (
                            <Menu01 className="size-5 text-fg-primary" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cx(
                    "fixed inset-x-0 top-[120px] z-50 transform border-b border-secondary bg-primary shadow-xl transition-all duration-300 ease-out lg:hidden",
                    mobileMenuOpen
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-4 opacity-0"
                )}
            >
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
                    <nav className="flex flex-col gap-1">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={cx(
                                    "flex items-center rounded-xl px-4 py-3.5 text-base font-medium text-secondary transition",
                                    "hover:bg-secondary hover:text-primary",
                                    "active:bg-tertiary"
                                )}
                                style={{
                                    animationDelay: `${index * 50}ms`,
                                }}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile CTA */}
                    <div className="mt-6 space-y-3 border-t border-secondary pt-6">
                        <div className="flex items-center justify-center gap-2 rounded-full bg-green-50 px-4 py-2">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                            </span>
                            <span className="text-sm font-medium text-green-700">Available 24/7 for Emergencies</span>
                        </div>
                        <Button
                            href="tel:+18285541920"
                            size="xl"
                            iconLeading={Phone}
                            className="w-full bg-gradient-to-r from-red-500 to-red-600 shadow-lg shadow-red-500/25"
                        >
                            Call (828) 254-1920
                        </Button>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}
        </header>
    );
}
