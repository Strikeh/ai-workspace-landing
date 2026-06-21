"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

const USA_LOCATIONS = [
  "Austin, TX",
  "New York, NY",
  "San Francisco, CA",
  "Denver, CO",
  "Fort Worth, USA",
  "Chicago, IL",
  "Seattle, WA",
  "Miami, FL",
  "Boston, MA",
  "Los Angeles, CA",
  "Houston, TX",
  "Phoenix, AZ",
  "Philadelphia, PA",
  "San Antonio, TX",
  "San Diego, CA",
  "Dallas, TX",
  "San Jose, CA",
  "Atlanta, GA",
  "Portland, OR",
  "Las Vegas, NV",
];

const INT_LOCATIONS = [
  "London, UK",
  "Berlin, Germany",
  "Adelsdorf (Germany)",
  "Toronto, Canada",
  "Paris, France",
  "Amsterdam, Netherlands",
  "Sydney, Australia",
  "Tokyo, Japan",
  "Buenos Aires, Argentina",
  "Singapore",
  "Vancouver, Canada",
  "Munich, Germany",
  "Zurich, Switzerland",
  "Stockholm, Sweden",
  "Dublin, Ireland",
  "Madrid, Spain",
];

const getRandomLocation = () => {
  // 60% chance of USA
  if (Math.random() < 0.6) {
    return USA_LOCATIONS[Math.floor(Math.random() * USA_LOCATIONS.length)];
  }
  return INT_LOCATIONS[Math.floor(Math.random() * INT_LOCATIONS.length)];
};

const getRandomTime = () => {
  const isHours = Math.random() > 0.7; // 30% chance of hours
  if (isHours) {
    const hours = Math.floor(Math.random() * 10) + 1; // 1 to 10 hours
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else {
    const minutes = Math.floor(Math.random() * 59) + 1; // 1 to 59 minutes
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  }
};

// Browser detection function
function getBrowserInstallUrl() {
  if (typeof window === "undefined")
    return "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg";

  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.includes("edg/") || userAgent.includes("edge/")) {
    return "https://microsoftedge.microsoft.com/addons/detail/aiworkspace-pro/kbdckiagphjeldfdfeobdhcajkpidong";
  }
  if (userAgent.includes("firefox")) {
    return "https://addons.mozilla.org/en-GB/firefox/addon/aiworkspace-pro/";
  }
  return "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg";
}

const STORAGE_KEY = "aiws-hide-sales-notifications";

export const RecentSalesNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [info, setInfo] = useState({ location: "", time: "" });
  const [installUrl, setInstallUrl] = useState(
    "https://chromewebstore.google.com/detail/aiworkspace-pro/mngeddjcngpcdakdhfcbaefeonmmeomg"
  );
  const stoppedRef = useRef(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    setInstallUrl(getBrowserInstallUrl());

    // Respect a user who chose to hide these notifications
    if (
      typeof window !== "undefined" &&
      window.localStorage.getItem(STORAGE_KEY) === "true"
    ) {
      return;
    }

    const triggerPopup = () => {
      if (stoppedRef.current) return;

      setInfo({
        location: getRandomLocation(),
        time: getRandomTime(),
      });
      setIsVisible(true);

      // Hide after ~6.5 seconds
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
        if (stoppedRef.current) return;

        // Much less frequent than before (70-140s) so it feels realistic.
        const nextDelay = Math.floor(Math.random() * 70000) + 70000;
        timersRef.current.push(setTimeout(triggerPopup, nextDelay));
      }, 6500);
      timersRef.current.push(hideTimer);
    };

    // Initial delay before the first popup
    timersRef.current.push(setTimeout(triggerPopup, 12000));

    const timers = timersRef.current;
    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  const hideForever = () => {
    stoppedRef.current = true;
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    setIsVisible(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // ignore (storage may be unavailable)
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -400, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 left-6 z-50 max-w-sm w-full md:w-auto"
        >
          <div className="relative">
            <a
              href={installUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-2xl p-4 flex items-center gap-4 border border-slate-100 hover:border-indigo-200 transition-colors cursor-pointer"
            >
              {/* Map Icon or Avatar Placeholder */}
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-2xl">
                🌍
              </div>

              <div className="flex flex-col">
                <p className="text-[15px] leading-tight text-slate-800">
                  Someone in{" "}
                  <span className="font-bold text-indigo-600">
                    {info.location}
                  </span>
                  <br />
                  Subscribed to{" "}
                  <span className="font-semibold text-slate-900">Pro</span>
                </p>

                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-xs text-slate-500 font-medium">
                    {info.time}
                  </span>
                  <span className="text-slate-300 text-[10px]">•</span>
                  <div className="flex items-center gap-1">
                    <div className="bg-indigo-600 rounded-full p-[1px]">
                      <CheckCircle2
                        className="w-2.5 h-2.5 text-white"
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-xs font-bold text-indigo-600">
                      Verified by stripe
                    </span>
                  </div>
                </div>
              </div>
            </a>

            {/* Dismiss — hides these notifications for good */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                hideForever();
              }}
              aria-label="Hide these notifications"
              title="Hide these notifications"
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-800 text-white border border-white/20 shadow-md flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
