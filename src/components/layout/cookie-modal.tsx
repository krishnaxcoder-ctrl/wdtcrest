"use client";

import { useState, useEffect } from "react";

export const CookieModal = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a cookie choice
        const cookieChoice = localStorage.getItem("cookieConsent");
        if (!cookieChoice) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem("cookieConsent", "rejected");
        setIsVisible(false);
    };

    const handleCustomize = () => {
        // Handle customize preferences
        console.log("Customize preferences");
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/20" onClick={handleReject} />

            {/* Modal */}
            <div className="relative flex max-w-lg flex-col overflow-hidden rounded-2xl border border-[#ebddd0] bg-white text-sm shadow-lg">
                {/* Close Button */}
                <button
                    onClick={handleReject}
                    className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
                    aria-label="Close Cookie Popup"
                >
                    <div className="relative size-4">
                        <div className="absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gray-500" />
                        <div className="absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-gray-500" />
                    </div>
                </button>

                {/* Content */}
                <div className="p-6">
                    <h6 className="text-base font-semibold text-gray-900">Cookie preferences</h6>
                    <p className="mt-2 leading-relaxed text-gray-600">
                        By clicking "Accept all", you agree to the storing of cookies on your device to enhance site navigation, analyse site usage and assist in our marketing efforts.{" "}
                        <a href="/privacy-policy" className="font-medium text-brand-600 underline hover:text-brand-700">
                            More info
                        </a>
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3 border-t border-gray-100 bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                    <button
                        onClick={handleCustomize}
                        className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                    >
                        Customize
                    </button>
                    <div className="flex gap-2">
                        <button
                            onClick={handleReject}
                            className="flex-1 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 sm:flex-none"
                        >
                            Reject all
                        </button>
                        <button
                            onClick={handleAccept}
                            className="flex-1 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-700 sm:flex-none"
                        >
                            Accept all
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieModal;
