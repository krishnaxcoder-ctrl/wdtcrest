import type { ReactNode } from "react";
import { cx } from "@/utils/cx";

type TrustBadgeItem = {
    stat: string;
    label: string;
};

const defaultBadges: TrustBadgeItem[] = [
    { stat: "30+", label: "Years Experience" },
    { stat: "5,000+", label: "Happy Customers" },
    { stat: "24/7", label: "Emergency Service" },
    { stat: "100%", label: "Licensed & Insured" },
    { stat: "NC", label: "State Certified" },
    { stat: "Family", label: "Owned & Operated" },
];

interface TrustBadgeCardProps {
    stat: string;
    label: string;
    className?: string;
}

const TrustBadgeCard = ({ stat, label, className }: TrustBadgeCardProps) => {
    return (
        <div
            className={cx(
                "group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-secondary bg-primary p-8 text-center shadow-xs transition duration-100 ease-linear hover:border-brand hover:shadow-md md:p-10",
                className,
            )}
        >
            {/* Subtle gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-transparent opacity-0 transition duration-100 ease-linear group-hover:opacity-100" />

            <div className="relative flex flex-col items-center gap-2">
                <span className="text-4xl font-bold tracking-tight text-brand-secondary md:text-5xl lg:text-6xl">
                    {stat}
                </span>
                <span className="text-sm font-medium uppercase tracking-wider text-tertiary md:text-base">
                    {label}
                </span>
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
        <section className={cx("w-full py-16 md:py-24", className)}>
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-10 md:gap-12">
                    {title && (
                        <p className="mx-auto max-w-3xl text-center text-lg text-tertiary md:text-xl">{title}</p>
                    )}

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-6">
                        {badges.map((badge) => (
                            <TrustBadgeCard key={badge.stat} stat={badge.stat} label={badge.label} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
