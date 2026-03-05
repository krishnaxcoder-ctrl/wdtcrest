import {
    Header,
    HeroSection,
    ServicesSection,
    TrustSection,
    CertificationsSection,
    ProductsSection,
    WhyChooseUsSection,
    ContactSection,
    Footer,
} from "./components";

export default function Home() {
    return (
        <div className="min-h-screen bg-primary">
            <Header />
            <main className="mx-auto max-w-7xl">
                <HeroSection />
                <ServicesSection />
                <TrustSection />
                <CertificationsSection />
                <ProductsSection />
                <WhyChooseUsSection />
                <ContactSection />
            </main>
            <div className="mx-auto max-w-7xl">
                <Footer />
            </div>
        </div>
    );
}
