import { useState, useEffect } from "react";

/**
 * Timeline end date: 26 January 2026, 9:30 AM IST (UTC +5:30)
 * IST is UTC+5:30, so 9:30 AM IST = 04:00 AM UTC
 */
const TIMELINE_END_DATE = new Date("2026-01-26T04:00:00.000Z"); // 26 Jan 2026, 9:30 AM IST in UTC

/**
 * Hook to check if timeline has ended
 * Returns true if current time (IST) is at or after 26 Jan 2026, 9:30 AM IST
 * 
 * Uses client-side time but validates against a fixed UTC timestamp
 * to prevent simple manipulation. For production, consider using server time.
 */
export const useTimelineState = () => {
  const [hasTimelineEnded, setHasTimelineEnded] = useState<boolean>(() => {
    // Check on initial load
    const now = new Date();
    return now >= TIMELINE_END_DATE;
  });

  const [timeRemaining, setTimeRemaining] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    total: number;
  } | null>(null);

  useEffect(() => {
    const checkTimeline = () => {
      const now = new Date();
      const hasEnded = now >= TIMELINE_END_DATE;

      if (hasEnded) {
        setHasTimelineEnded(true);
        setTimeRemaining(null);
      } else {
        setHasTimelineEnded(false);
        const diff = TIMELINE_END_DATE.getTime() - now.getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeRemaining({
          days,
          hours,
          minutes,
          seconds,
          total: diff,
        });
      }
    };

    // Check immediately
    checkTimeline();

    // Update every second
    const interval = setInterval(checkTimeline, 1000);

    return () => clearInterval(interval);
  }, []);

  return { hasTimelineEnded, timeRemaining };
};

