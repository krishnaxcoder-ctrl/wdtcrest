"use client";

import Link from "next/link";
import "../landing-styles.css";

// Clandestine Logo Component
const ClandestineLogo = () => (
    <svg fill="none" height="48" viewBox="0 0 203 48" width="203" xmlns="http://www.w3.org/2000/svg" className="brand-logo">
        <path d="m14.25 5c0 7.8701-6.37994 14.25-14.25 14.25v9.5h14.25v14.25h9.5c0-7.8701 6.3799-14.25 14.25-14.25v-9.5h-14.25v-14.25z" fill="#16b364"/>
        <g fill="#0a0d12">
            <path d="m56.2 33.3599c-2.12 0-3.94-.45-5.46-1.35-1.52-.92-2.69-2.19-3.51-3.81-.82-1.64-1.23-3.53-1.23-5.67s.41-4.03 1.23-5.67 1.99-2.92 3.51-3.84 3.34-1.38 5.46-1.38c2.52 0 4.58.63 6.18 1.89 1.62 1.24 2.63 2.99 3.03 5.25h-4.23c-.26-1.14-.82-2.03-1.68-2.67-.84-.66-1.96-.99-3.36-.99-1.94 0-3.46.66-4.56 1.98s-1.65 3.13-1.65 5.43.55 4.11 1.65 5.43c1.1 1.3 2.62 1.95 4.56 1.95 1.4 0 2.52-.3 3.36-.9.86-.62 1.42-1.47 1.68-2.55h4.23c-.4 2.16-1.41 3.85-3.03 5.07-1.6 1.22-3.66 1.83-6.18 1.83z"/>
            <path d="m66.9191 32.9999v-21.6h3.84v21.6z"/>
            <path d="m79.7228 33.3599c-1.4 0-2.65-.34-3.75-1.02s-1.97-1.61-2.61-2.79-.96-2.52-.96-4.02.32-2.83.96-3.99c.64-1.18 1.51-2.1 2.61-2.76 1.1-.68 2.35-1.02 3.75-1.02 1.12 0 2.1.21 2.94.63s1.52 1.01 2.04 1.77l.21-2.04h3.63v14.88h-3.6l-.24-2.13c-.48.66-1.12 1.24-1.92 1.74-.78.5-1.8.75-3.06.75zm.81-3.36c1.24 0 2.25-.41 3.03-1.23.8-.84 1.2-1.91 1.2-3.21s-.4-2.36-1.2-3.18c-.78-.84-1.79-1.26-3.03-1.26-1.22 0-2.23.41-3.03 1.23s-1.2 1.88-1.2 3.18.4 2.37 1.2 3.21 1.81 1.26 3.03 1.26z"/>
            <path d="m90.6531 32.9999v-14.88h3.39l.3 2.52c.46-.88 1.12-1.58 1.98-2.1.88-.52 1.91-.78 3.09-.78 1.8399 0 3.2699.58 4.2899 1.74s1.53 2.86 1.53 5.1v8.4h-3.84v-8.04c0-1.28-.26-2.26-.78-2.94s-1.3299-1.02-2.4299-1.02c-1.08 0-1.97.38-2.67 1.14-.68.76-1.02 1.82-1.02 3.18v7.68z"/>
            <path d="m113.945 33.3599c-1.4 0-2.65-.34-3.75-1.02s-1.97-1.61-2.61-2.79-.96-2.52-.96-4.02.32-2.83.96-3.99c.64-1.18 1.51-2.1 2.61-2.76 1.1-.68 2.35-1.02 3.75-1.02 1.12 0 2.1.21 2.94.63s1.52 1.01 2.04 1.77v-8.76h3.84v21.6h-3.42l-.42-2.13c-.48.66-1.12 1.24-1.92 1.74-.78.5-1.8.75-3.06.75zm.81-3.36c1.24 0 2.25-.41 3.03-1.23.8-.84 1.2-1.91 1.2-3.21s-.4-2.36-1.2-3.18c-.78-.84-1.79-1.26-3.03-1.26-1.22 0-2.23.41-3.03 1.23s-1.2 1.88-1.2 3.18.4 2.37 1.2 3.21 1.81 1.26 3.03 1.26z"/>
            <path d="m132.105 33.3599c-1.5 0-2.83-.32-3.99-.96s-2.07-1.54-2.73-2.7-.99-2.5-.99-4.02c0-1.54.32-2.91.96-4.11.66-1.2 1.56-2.13 2.7-2.79 1.16-.68 2.52-1.02 4.08-1.02 1.46 0 2.75.32 3.87.96s1.99 1.52 2.61 2.64c.64 1.1.96 2.33.96 3.69 0 .22-.01.45-.03.69 0 .24-.01.49-.03.75h-11.31c.08 1.16.48 2.07 1.2 2.73.74.66 1.63.99 2.67.99.78 0 1.43-.17 1.95-.51.54-.36.94-.82 1.2-1.38h3.9c-.28.94-.75 1.8-1.41 2.58-.64.76-1.44 1.36-2.4 1.8-.94.44-2.01.66-3.21.66zm.03-12.48c-.94 0-1.77.27-2.49.81-.72.52-1.18 1.32-1.38 2.4h7.41c-.06-.98-.42-1.76-1.08-2.34s-1.48-.87-2.46-.87z"/>
            <path d="m147.155 33.3599c-1.32 0-2.48-.21-3.48-.63-1-.44-1.8-1.04-2.4-1.8s-.96-1.64-1.08-2.64h3.87c.12.58.44 1.08.96 1.5.54.4 1.23.6 2.07.6s1.45-.17 1.83-.51c.4-.34.6-.73.6-1.17 0-.64-.28-1.07-.84-1.29-.56-.24-1.34-.47-2.34-.69-.64-.14-1.29-.31-1.95-.51s-1.27-.45-1.83-.75c-.54-.32-.98-.72-1.32-1.2-.34-.5-.51-1.11-.51-1.83 0-1.32.52-2.43 1.56-3.33 1.06-.9 2.54-1.35 4.44-1.35 1.76 0 3.16.41 4.2 1.23 1.06.82 1.69 1.95 1.89 3.39h-3.63c-.22-1.1-1.05-1.65-2.49-1.65-.72 0-1.28.14-1.68.42-.38.28-.57.63-.57 1.05 0 .44.29.79.87 1.05s1.35.5 2.31.72c1.04.24 1.99.51 2.85.81.88.28 1.58.71 2.1 1.29.52.56.78 1.37.78 2.43.02.92-.22 1.75-.72 2.49s-1.22 1.32-2.16 1.74-2.05.63-3.33.63z"/>
            <path d="m161.128 32.9999c-1.56 0-2.81-.38-3.75-1.14s-1.41-2.11-1.41-4.05v-6.48h-2.55v-3.21h2.55l.45-3.99h3.39v3.99h4.02v3.21h-3.02c-.552 0-1 .4477-1 1v5.51c0 .72.15 1.22.45 1.5.32.26.86.39 1.62.39h1.86v3.27z"/>
            <path d="m167.395 15.8099c-.7 0-1.28-.21-1.74-.63-.44-.42-.66-.95-.66-1.59s.22-1.16.66-1.56c.46-.42 1.04-.63 1.74-.63s1.27.21 1.71.63c.46.4.69.92.69 1.56s-.23 1.17-.69 1.59c-.44.42-1.01.63-1.71.63zm-1.92 17.19v-14.88h3.84v14.88z"/>
            <path d="m171.523 32.9999v-14.88h3.39l.3 2.52c.46-.88 1.12-1.58 1.98-2.1.88-.52 1.91-.78 3.09-.78 1.84 0 3.27.58 4.29 1.74s1.53 2.86 1.53 5.1v8.4h-3.84v-8.04c0-1.28-.26-2.26-.78-2.94s-1.33-1.02-2.43-1.02c-1.08 0-1.97.38-2.67 1.14-.68.76-1.02 1.82-1.02 3.18v7.68z"/>
            <path d="m195.205 33.3599c-1.5 0-2.83-.32-3.99-.96s-2.07-1.54-2.73-2.7-.99-2.5-.99-4.02c0-1.54.32-2.91.96-4.11.66-1.2 1.56-2.13 2.7-2.79 1.16-.68 2.52-1.02 4.08-1.02 1.46 0 2.75.32 3.87.96s1.99 1.52 2.61 2.64c.64 1.1.96 2.33.96 3.69 0 .22-.01.45-.03.69 0 .24-.01.49-.03.75h-11.31c.08 1.16.48 2.07 1.2 2.73.74.66 1.63.99 2.67.99.78 0 1.43-.17 1.95-.51.54-.36.94-.82 1.2-1.38h3.9c-.28.94-.75 1.8-1.41 2.58-.64.76-1.44 1.36-2.4 1.8-.94.44-2.01.66-3.21.66zm.03-12.48c-.94 0-1.77.27-2.49.81-.72.52-1.18 1.32-1.38 2.4h7.41c-.06-.98-.42-1.76-1.08-2.34s-1.48-.87-2.46-.87z"/>
        </g>
    </svg>
);

// Arrow Icon
const ArrowIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 8H8.5V18.5H22.4395L19.1895 15.25L20.25 14.1895L25.3105 19.25L20.25 24.3105L19.1895 23.25L22.4395 20H7V8Z" fill="currentColor" />
    </svg>
);

const contactInfo = [
    { icon: "📞", title: "Phone", details: "(828) 254-1920", description: "Mon-Fri 8am-5pm, 24/7 Emergency" },
    { icon: "✉️", title: "Email", details: "info@ableseptic.com", description: "We'll respond within 24 hours" },
    { icon: "📍", title: "Address", details: "20 Brownwood Ave", description: "Asheville, NC 28806" },
    { icon: "🕐", title: "Hours", details: "Mon-Fri: 8AM-5PM", description: "24/7 Emergency Service" },
];

const services = [
    "Septic Tank Pumping",
    "Septic Inspections",
    "Grease Trap Cleaning",
    "Septic Repairs",
    "Emergency Services",
    "Septic Products",
];

const serviceAreas = [
    "Asheville", "Weaverville", "Black Mountain", "Hendersonville",
    "Fletcher", "Candler", "Arden", "Swannanoa", "Fairview", "Leicester", "Mars Hill", "Marshall",
];

export default function ServicesPage() {
    return (
        <div className="page-wrapper">
            {/* Navigation */}
            <nav className="nav_component">
                <div className="nav_container">
                    <Link href="/" className="nav_brand_link">
                        <ClandestineLogo />
                    </Link>
                    <div className="nav_menu">
                        <div className="flex-h is-menu">
                            <Link href="/reliable-septic-services" className="nav-link">Services</Link>
                            <Link href="/reliable-septic-pumping-solutions" className="nav-link">Pumping</Link>
                            <Link href="/septic-inspection-solutions" className="nav-link">Inspections</Link>
                            <Link href="/trustable-septic-products" className="nav-link">Products</Link>
                            <Link href="/our-septic-pumping-legacy" className="nav-link">Our Legacy</Link>
                            <Link href="/reviews-on-septic-services" className="nav-link">Reviews</Link>
                        </div>
                        <div className="button-group">
                            <Link href="tel:8282541920" className="button is-secondary">(828) 254-1920</Link>
                            <Link href="/contact" className="button is-primary-dark">Get Free Quote</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="main-wrapper">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="padding-global">
                        <div className="container-large side-border">
                            <div className="spacer-medium" />
                            <div className="text-wrapper padding-3rem align-center">
                                <div className="flex-v gap-full align-center">
                                    <div className="eyebrow-main">
                                        <span className="text-size-small text-color-grey">Contact Us</span>
                                    </div>
                                    <h1 className="heading-style-h1 text-align-center">Reliable Septic Services</h1>
                                    <p className="text-size-large text-color-grey text-align-center" style={{ maxWidth: "600px" }}>
                                        Ready to schedule service or have questions? Contact our team and we'll get back to you promptly.
                                    </p>
                                    <Link href="tel:8282541920" className="button is-primary">
                                        <span>Call Now: (828) 254-1920</span>
                                        <div className="icon-32px"><ArrowIcon /></div>
                                    </Link>
                                </div>
                            </div>
                            <div className="spacer-medium" />
                        </div>
                    </div>
                </section>

                {/* Contact Info Cards */}
                <section className="section-regular-padding">
                    <div className="padding-global">
                        <div className="container-large side-border">
                            <div className="services-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
                                {contactInfo.map((item) => (
                                    <div key={item.title} className="service-card">
                                        <div className="service-icon">{item.icon}</div>
                                        <h3 className="text-size-large">{item.title}</h3>
                                        <p className="text-size-medium text-color-green">{item.details}</p>
                                        <p className="text-size-small text-color-grey">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="section-regular-padding background-color-light">
                    <div className="padding-global">
                        <div className="container-large side-border">
                            <div className="grid-2col">
                                <div className="text-wrapper padding-3rem">
                                    <div className="flex-v gap-1-25rem">
                                        <h2 className="heading-style-h2">Send Us a Message</h2>
                                        <p className="text-color-grey">Fill out the form and we'll get back to you shortly.</p>
                                    </div>
                                    <form className="flex-v gap-1rem" style={{ marginTop: "2rem" }}>
                                        <div className="flex-h gap-1rem">
                                            <input type="text" placeholder="First Name" className="newsletter-input" style={{ flex: 1 }} />
                                            <input type="text" placeholder="Last Name" className="newsletter-input" style={{ flex: 1 }} />
                                        </div>
                                        <input type="email" placeholder="Email" className="newsletter-input" />
                                        <input type="tel" placeholder="Phone" className="newsletter-input" />
                                        <input type="text" placeholder="Service Address" className="newsletter-input" />
                                        <select className="newsletter-input">
                                            <option value="">Select a service</option>
                                            {services.map((service) => (
                                                <option key={service} value={service}>{service}</option>
                                            ))}
                                        </select>
                                        <textarea placeholder="Tell us about your septic needs..." className="newsletter-input" rows={4} />
                                        <button type="submit" className="button is-primary full-width">Send Message</button>
                                    </form>
                                </div>
                                <div className="text-wrapper padding-3rem">
                                    <div className="flex-v gap-1-25rem">
                                        <h3 className="heading-style-h3">Service Areas</h3>
                                        <p className="text-color-grey">We proudly serve these communities in Western North Carolina:</p>
                                        <div className="flex-h gap-1rem" style={{ flexWrap: "wrap" }}>
                                            {serviceAreas.map((area) => (
                                                <span key={area} className="service-area-tag">{area}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Emergency Banner */}
                <section className="section-regular-padding background-color-dark">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="flex-h justify-between align-center" style={{ flexWrap: "wrap", gap: "2rem" }}>
                                <div>
                                    <h2 className="heading-style-h3 text-color-white">24/7 Emergency Septic Service</h2>
                                    <p className="text-color-grey">Septic emergency? We're available around the clock for urgent issues.</p>
                                </div>
                                <Link href="tel:8282541920" className="button is-primary">
                                    <span>Emergency: (828) 254-1920</span>
                                    <div className="icon-32px"><ArrowIcon /></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-regular-padding">
                    <div className="padding-global">
                        <div className="container-large side-border">
                            <div className="cta-container h-550px background-color-green">
                                <div className="text-wrapper size-550px align-center z-index-1 mobile-padding">
                                    <div className="flex-v gap-1-25rem align-center">
                                        <h2 className="heading-style-h2 text-align-center">Ready to Get Started?</h2>
                                        <p className="text-size-medium text-align-center">
                                            Whether you need routine maintenance or emergency service, we're here to help.
                                        </p>
                                        <Link href="tel:8282541920" className="button w-inline-block">
                                            <div>Call (828) 254-1920</div>
                                            <div className="icon-32px"><ArrowIcon /></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="footer-section">
                <div className="padding-global">
                    <div className="container-large side-border">
                        <div className="newsletter-wrapper">
                            <h3 className="text-size-large font-alt">Get septic tips and maintenance reminders</h3>
                            <div className="newsletter-form">
                                <input type="email" placeholder="Enter your email" className="newsletter-input" />
                                <button className="button is-primary">Subscribe</button>
                            </div>
                        </div>
                        <div className="footer-grid">
                            <div className="footer-column">
                                <Link href="/" className="footer-logo">
                                    <ClandestineLogo />
                                </Link>
                                <div className="social-wrapper">
                                    {["Facebook", "Google", "Yelp", "BBB"].map((social) => (
                                        <a key={social} href="#" className="social-icon">{social[0]}</a>
                                    ))}
                                </div>
                                <Link href="tel:8282541920" className="button is-primary full-width">
                                    <span>Call (828) 254-1920</span>
                                    <div className="icon-32px"><ArrowIcon /></div>
                                </Link>
                                <p className="text-size-small">All Rights Reserved © Able Septic Tank Service</p>
                            </div>
                            <div className="footer-links">
                                <div className="footer-links-wrapper">
                                    <h4 className="text-size-medium">Services</h4>
                                    <div className="flex-v gap-1rem">
                                        {["Septic Pumping", "Septic Inspections", "Septic Repair", "Grease Traps", "Drain Fields", "Emergency Service"].map((link) => (
                                            <Link key={link} href="#" className="footer-link">{link}</Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="footer-links-wrapper">
                                    <h4 className="text-size-medium">Company</h4>
                                    <div className="flex-v gap-1rem">
                                        {["About Us", "Our Team", "Reviews", "Contact"].map((link) => (
                                            <Link key={link} href="#" className="footer-link">{link}</Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
