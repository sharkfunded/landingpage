"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

// Declare global Intercom property on window
declare global {
    interface Window {
        Intercom: any;
        intercomSettings: any;
        attachEvent: any;
    }
}

const APP_ID = "hb4dqmpg";

export default function IntercomWidget() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    // Use a ref to track if boot has happened to avoid double booting in React 18 strict mode if needed,
    // though Intercom usually handles re-calls gracefully.
    const isBooted = useRef(false);

    useEffect(() => {
        // 1. Load the script (Snippet 1 from request)
        (function () {
            var w = window;
            var ic = w.Intercom;
            if (typeof ic === "function") {
                ic("reattach_activator");
                ic("update", w.intercomSettings);
            } else {
                var d = document;
                var i = function () {
                    i.c(arguments);
                };
                i.q = [];
                i.c = function (args: any) {
                    i.q.push(args);
                };
                w.Intercom = i;
                var l = function () {
                    var s = d.createElement("script");
                    s.type = "text/javascript";
                    s.async = true;
                    s.src = `https://widget.intercom.io/widget/${APP_ID}`;
                    var x = d.getElementsByTagName("script")[0];
                    x.parentNode?.insertBefore(s, x);
                };
                if (document.readyState === "complete") {
                    l();
                } else if (w.attachEvent) {
                    w.attachEvent("onload", l);
                } else {
                    w.addEventListener("load", l, false);
                }
            }
        })();

        // 2. Boot Intercom (Snippet 2)
        // We wrap this timeout to ensure the script logic above has run and window.Intercom is defined.
        // Although the snippet defines window.Intercom immediately as a queue function.
        window.Intercom("boot", {
            api_base: "https://api-iam.intercom.io",
            app_id: APP_ID,
            // Add other user data here if available in the future
        });

        isBooted.current = true;
    }, []); // Run once on mount

    // 3. Update on route change (Snippet 3)
    useEffect(() => {
        if (isBooted.current) {
            // Small delay to ensure the page title/url has updated if needed, though usePathname is usually reactive enough.
            window.Intercom("update");
        }
    }, [pathname, searchParams]);

    return null; // Render nothing visible
}
