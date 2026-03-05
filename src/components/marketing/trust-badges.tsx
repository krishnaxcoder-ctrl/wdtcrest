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
                "group relative flex flex-col items-center gap-5 rounded-2xl border border-secondary bg-primary p-8 text-center shadow-xs transition duration-200 ease-linear hover:border-success-primary hover:shadow-lg md:p-10",
                className,
            )}
        >
            {/* Decorative sparkle icon */}
            <div className="flex size-14 items-center justify-center rounded-xl bg-success-secondary md:size-16">
                <svg
                    className="size-7 text-success-primary md:size-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M12 2L13.09 8.26L18 6L15.74 10.91L22 12L15.74 13.09L18 18L13.09 15.74L12 22L10.91 15.74L6 18L8.26 13.09L2 12L8.26 10.91L6 6L10.91 8.26L12 2Z" />
                </svg>
            </div>

            <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-primary md:text-2xl">{title}</h3>
                <p className="text-sm leading-relaxed text-tertiary md:text-base">{description}</p>
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
        <section className={cx("w-full py-16 md:py-20", className)}>
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="flex flex-col gap-10 md:gap-12">
                    {title && (
                        <p className="mx-auto max-w-2xl text-center text-lg text-tertiary md:text-xl">{title}</p>
                    )}

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-5">
                        {badges.map((badge) => (
                            <TrustBadgeCard key={badge.title} title={badge.title} description={badge.description} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
