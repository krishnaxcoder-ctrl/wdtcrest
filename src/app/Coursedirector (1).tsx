// Hoisted static SVGs for performance
const ArrowIcon = (
    <svg className="relative z-10 size-4 sm:size-5 text-white transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24">
        <path d="M6 18L18 6M18 6H10M18 6V14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CheckCircleIcon = (
    <svg className="size-4 sm:size-5 shrink-0 text-brand-600 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

// Static data
const trustBadges = [
    { icon: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z", label: "International Certificate" },
    { icon: "M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z", label: "Hands-on Training" },
    { icon: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z", label: "Expert Faculty" },
];

const academicRoles = [
    "Professor in Otorhinolaryngology (ENT)",
    "Postgraduate teacher and academic mentor",
    "Research guide for postgraduate and fellowship candidates",
    "Faculty speaker at national and regional conferences",
    "Trainer for aesthetic medicine workshops",
];

export default function CTA() {
    return (
        <section className="bg-primary">
            <div className="mx-auto max-w-7xl border-x border-secondary">
                <div className="relative overflow-hidden border-b border-secondary bg-secondary">
                    {/* Decorative background */}
                    <div className="absolute -left-[15%] -top-[50%] h-[300px] w-[300px] rounded-full opacity-20 blur-[80px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" style={{ background: "radial-gradient(circle, var(--color-brand-500) 0%, transparent 70%)" }} />
                    <div className="absolute -right-[10%] -bottom-[40%] h-[250px] w-[250px] rounded-full opacity-15 blur-[60px] sm:h-[400px] sm:w-[400px] sm:blur-[100px]" style={{ background: "radial-gradient(circle, var(--color-brand-400) 0%, transparent 70%)" }} />
                    {/* Subtle pattern */}
                    <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

                    <div className="relative grid items-center lg:grid-cols-5">
                        {/* Left content — 3 cols */}
                        <div className="p-5 sm:p-10 md:p-14 lg:col-span-3 lg:p-20">
                            <div className="flex items-center gap-2">
                                <span className="relative flex size-2">
                                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-400 opacity-75" />
                                    <span className="relative inline-flex size-2 rounded-full bg-brand-500" />
                                </span>
                                <span className="text-[10px] font-semibold uppercase text-brand-600 sm:text-xs">Available for Enrollment</span>
                            </div>

                            <h2 className="mt-4 text-2xl font-semibold text-primary sm:mt-5 sm:text-3xl md:text-4xl">
                                Let&apos;s Build Something Great
                            </h2>
                            <p className="mt-3 max-w-lg text-sm leading-relaxed text-tertiary sm:mt-4 sm:text-base">
                                Dr. Supriya Kokane-Patil is a senior ENT Consultant Surgeon, Professor. Based in Navi Mumbai, she is widely recognized for her expertise in facial anatomy-based aesthetic practice, combining functional ENT surgery with advanced cosmetic procedures.
                            </p>

                            {/* Service options */}
                            <div className="mt-6 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                                <a href="/contact" className="group relative flex items-center justify-center gap-2 rounded-xl px-5 py-3 transition-all duration-300 sm:justify-start sm:gap-3 sm:px-7 sm:py-4">
                                    <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600 via-brand-500 to-purple-600 opacity-40 blur-md transition-all duration-300 group-hover:opacity-60 group-hover:blur-lg" />
                                    <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 via-white/10 to-white/20 p-[1px]">
                                        <span className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 via-brand-500 to-purple-500 transition-all duration-300 group-hover:from-purple-500 group-hover:via-brand-400 group-hover:to-purple-400" />
                                    </span>
                                    <div className="relative z-10">
                                        <p className="text-left text-xs font-medium text-white sm:text-sm">Enroll Now</p>
                                        <p className="hidden text-left text-[10px] text-white/70 sm:block sm:text-xs">International Certificate Course</p>
                                    </div>
                                    <span className="relative z-10 hidden h-8 w-px bg-white/20 sm:block" />
                                    {ArrowIcon}
                                </a>
                                <a href="/contact" className="group flex items-center justify-center gap-2 rounded-xl border border-secondary bg-primary px-5 py-3 shadow-sm transition-all hover:border-brand-300 hover:bg-brand-50 sm:justify-start sm:gap-3 sm:px-7 sm:py-4">
                                    <div>
                                        <p className="text-left text-xs font-medium text-primary sm:text-sm">Contact Us</p>
                                        <p className="hidden text-left text-[10px] text-tertiary sm:block sm:text-xs">Get course details</p>
                                    </div>
                                    <span className="hidden h-8 w-px bg-secondary sm:block" />
                                    <svg className="size-4 text-tertiary transition-transform group-hover:translate-x-0.5 sm:size-5" fill="none" viewBox="0 0 24 24">
                                        <path d="M6 18L18 6M18 6H10M18 6V14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>

                            {/* Trust badges */}
                            <div className="mt-6 flex flex-wrap items-center gap-4 sm:mt-10 sm:gap-6">
                                {trustBadges.map((badge) => (
                                    <div key={badge.label} className="flex items-center gap-1.5 sm:gap-2">
                                        <svg className="size-3.5 text-brand-600 sm:size-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d={badge.icon} />
                                        </svg>
                                        <span className="text-[10px] text-tertiary sm:text-xs">{badge.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right — info card — 2 cols */}
                        <div className="border-t border-secondary p-5 sm:p-10 md:p-14 lg:col-span-2 lg:border-l lg:border-t-0 lg:p-14">
                            <div className="text-left">
                                <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-600 sm:text-xs">Academic & Teaching Roles</p>

                                <ul className="mt-5 space-y-3 sm:mt-8 sm:space-y-4">
                                    {academicRoles.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-left sm:gap-3">
                                            {CheckCircleIcon}
                                            <span className="text-xs text-secondary sm:text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6 h-px w-16 bg-secondary sm:mt-8" />

                                <div className="mt-6 rounded-xl border border-brand-200 bg-brand-50 p-3 sm:mt-8 sm:p-4">
                                    <p className="text-xs font-medium text-brand-600 sm:text-sm">Free Consultation</p>
                                    <p className="mt-1 text-[10px] text-tertiary sm:text-xs">Let&apos;s discuss your project - no commitment required</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
