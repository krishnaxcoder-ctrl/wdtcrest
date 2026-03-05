import Link from "next/link";
import { cx } from "@/utils/cx";

// Arrow Icon
const ArrowIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 8H8.5V18.5H22.4395L19.1895 15.25L20.25 14.1895L25.3105 19.25L20.25 24.3105L19.1895 23.25L22.4395 20H7V8Z" fill="currentColor" />
    </svg>
);

interface FinalCtaProps {
    title?: string;
    subtitle?: string;
    description?: string;
    phoneNumber?: string;
    phoneDisplay?: string;
    backgroundImage?: string;
    className?: string;
}

export const FinalCta = ({
    title = "Ready to schedule your septic service?",
    subtitle = "Call now for fast, reliable service from the septic experts",
    description = "Trusted by over 5,000 homeowners in Western North Carolina",
    phoneNumber = "8282541920",
    phoneDisplay = "(828) 254-1920",
    backgroundImage = "https://cdn.prod.website-files.com/69385e16d68663814109c132/695442158ff7e237e5f5e875_CTA-Background.webp",
    className,
}: FinalCtaProps) => {
    return (
        <section className={cx("py-16", className)}>
            <div className="px-6 lg:px-10">
                <div className="max-w-7xl mx-auto border-l border-r border-tertiary">
                    <div className="bg-success-solid min-h-[550px] flex flex-col items-center justify-center relative p-8">
                        <div className="max-w-xl flex flex-col gap-5 items-center relative z-10">
                            <h2 className="text-4xl font-semibold tracking-tight text-center text-primary">
                                {title}
                            </h2>
                            <div className="text-base text-center font-medium">
                                {subtitle}
                            </div>
                            <div className="text-base text-tertiary text-center">
                                {description}
                            </div>
                            <div className="mt-6">
                                <Link href={`tel:${phoneNumber}`} className="inline-flex items-center gap-2 px-6 py-4 text-sm font-medium bg-primary-solid text-white transition-all hover:bg-gray-800 group">
                                    <span>Call {phoneDisplay}</span>
                                    <div className="size-8 flex items-center justify-center transition-transform group-hover:-rotate-90 group-hover:bg-success-solid rounded">
                                        <ArrowIcon />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="absolute inset-0 overflow-hidden">
                            <img src={backgroundImage} loading="lazy" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
