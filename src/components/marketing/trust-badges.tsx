import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

type TrustBadgeItem = {
    title: string;
    description: string;
};

const defaultBadges: TrustBadgeItem[] = [
    {
        title: "Licensed & Insured",
        description: "Fully licensed and insured for your protection and peace of mind",
    },
    {
        title: "24/7 Emergency",
        description: "Available around the clock for urgent septic emergencies",
    },
    {
        title: "30+ Years",
        description: "Decades of expertise in septic system services",
    },
    {
        title: "Family Owned",
        description: "Local family business serving our community with care",
    },
    {
        title: "NC Certified",
        description: "Certified for septic inspections and compliance verification",
    },
];

interface TrustBadgeCardProps {
    title: string;
    description: string;
    className?: string;
}

const TrustBadgeCard = ({ title, description, className }: TrustBadgeCardProps) => {
    return (
        <div
            className={cx(
                "group relative flex flex-col items-center gap-6 rounded-3xl border border-secondary bg-primary p-10 text-center shadow-xs transition duration-100 ease-linear hover:border-brand hover:shadow-lg md:p-14 lg:p-16",
                className,
            )}
        >
            {/* Decorative sparkle icon */}
            <div className="flex size-16 items-center justify-center rounded-2xl bg-brand-secondary md:size-20">
                <svg
                    className="size-8 text-fg-brand-primary md:size-10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M12 2L13.09 8.26L18 6L15.74 10.91L22 12L15.74 13.09L18 18L13.09 15.74L12 22L10.91 15.74L6 18L8.26 13.09L2 12L8.26 10.91L6 6L10.91 8.26L12 2Z" />
                </svg>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-primary md:text-3xl">{title}</h3>
                <p className="text-base leading-relaxed text-tertiary md:text-lg">{description}</p>
            </div>
        </div>
    );
};

interface TrustBadgesProps {
    title?: ReactNode;
    badges?: TrustBadgeItem[];
    className?: string;
}

export const TrustBadges = ({
    title = "Trusted by homeowners and businesses throughout Western North Carolina",
    badges = defaultBadges,
    className,
}: TrustBadgesProps) => {
    return (
        <section className={cx("w-full py-20 md:py-28", className)}>
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 md:gap-16">
                    {title && (
                        <p className="mx-auto max-w-3xl text-center text-xl text-tertiary md:text-2xl">{title}</p>
                    )}

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:gap-10">
                        {badges.map((badge) => (
                            <TrustBadgeCard key={badge.title} title={badge.title} description={badge.description} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
