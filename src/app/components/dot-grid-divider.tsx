"use client";

export function DotGridDivider() {
    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-7xl border-x border-secondary">
                <div
                    className="h-24 w-full opacity-60"
                    style={{
                        backgroundImage: "radial-gradient(circle, #9ca3af 1px, transparent 1px)",
                        backgroundSize: "16px 16px",
                    }}
                />
            </div>
        </div>
    );
}
