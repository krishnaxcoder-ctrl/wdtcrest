import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { RouteProvider } from "@/providers/router-provider";
import { CookieModal } from "@/components/layout";
import "@/styles/globals.css";
import { cx } from "@/utils/cx";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: {
        default: "Able Septic Tank Service | Asheville NC Septic Pumping & Cleaning Since 1965",
        template: "%s | Able Septic Tank Service",
    },
    description:
        "Family-owned septic tank service in Asheville, NC since 1965. NC-certified inspections, pumping, cleaning, installation & 24/7 emergency repairs. Serving Western North Carolina including Weaverville, Black Mountain & Hendersonville. Call (828) 254-1920.",
    keywords: [
        "septic tank service Asheville NC",
        "septic pumping Asheville",
        "septic tank cleaning Western NC",
        "NC certified septic inspection",
        "septic installation Asheville",
        "emergency septic repair",
        "grease trap pumping",
        "Weaverville septic service",
        "Black Mountain septic",
        "Hendersonville septic tank",
        "Buncombe County septic",
        "septic tank maintenance",
        "drain cleaning Asheville",
        "sewer unclogging",
        "residential septic service",
        "commercial septic service",
    ],
    authors: [{ name: "Able Septic Tank Service" }],
    creator: "Able Septic Tank Service",
    publisher: "Able Septic Tank Service",
    metadataBase: new URL("https://www.ableseptictankservice.com"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.ableseptictankservice.com",
        siteName: "Able Septic Tank Service",
        title: "Able Septic Tank Service | Trusted Septic Experts in Asheville NC Since 1965",
        description:
            "Family-owned & NC-certified septic professionals serving Western North Carolina for over 59 years. Pumping, cleaning, inspections, installations & 24/7 emergency service. Call (828) 254-1920.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Able Septic Tank Service - Professional Septic Services in Asheville NC",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Able Septic Tank Service | Asheville NC Septic Experts",
        description:
            "Trusted septic pumping, cleaning & inspections in Western NC since 1965. NC-certified, family-owned, 24/7 emergency service. Call (828) 254-1920.",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        // Add your verification codes here
        // google: "your-google-verification-code",
        // yandex: "your-yandex-verification-code",
    },
    category: "Home Services",
    other: {
        "geo.region": "US-NC",
        "geo.placename": "Asheville",
        "geo.position": "35.5951;-82.5515",
        ICBM: "35.5951, -82.5515",
    },
};

export const viewport: Viewport = {
    themeColor: "#047857",
    colorScheme: "light dark",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cx(inter.variable, "bg-primary antialiased")}>
                <RouteProvider>{children}</RouteProvider>
                <CookieModal />
            </body>
        </html>
    );
}
