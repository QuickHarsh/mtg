
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from 'lenis/react';

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const lenis = useLenis();

    useEffect(() => {
        // If lenis is active, use it to scroll to top immediately
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        } else {
            // Fallback to standard window scroll
            window.scrollTo(0, 0);
        }
    }, [pathname, lenis]);

    return null;
}
