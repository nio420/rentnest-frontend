"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, Users, ShieldCheck, Clock } from "lucide-react";
import FadeIn from "../shared/fade-in";

const stats = [
  {
    icon: Building2,
    numericValue: 1500,
    suffix: "+",
    label: "Properties Listed",
    color: "text-blue-600 bg-blue-500/10 border-blue-500/20",
    direction: "left" as const,
  },
  {
    icon: Users,
    numericValue: 800,
    suffix: "+",
    label: "Happy Families",
    color: "text-emerald-600 bg-emerald-500/10 border-emerald-500/20",
    direction: "down" as const,
  },
  {
    icon: ShieldCheck,
    numericValue: 100,
    suffix: "%",
    label: "Verified Listings",
    color: "text-amber-600 bg-amber-500/10 border-amber-500/20",
    direction: "up" as const,
  },
  {
    icon: Clock,
    is247: true,
    label: "Customer Support",
    color: "text-purple-600 bg-purple-500/10 border-purple-500/20",
    direction: "right" as const,
  },
];

// Helper component for single numerical counter
function Counter({
  targetValue,
  suffix = "",
}: {
  targetValue: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 2000; // 2 seconds total duration
          const steps = 60;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeOut * targetValue);

            setCount(currentCount);

            if (currentStep >= steps) {
              setCount(targetValue);
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [targetValue, hasAnimated]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// Special double counter for 24/7 (counts 0->24 and 0->7)
function Counter247() {
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 4000;
          const steps = 60;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setHours(Math.floor(easeOut * 24));
            setDays(Math.floor(easeOut * 7));

            if (currentStep >= steps) {
              setHours(24);
              setDays(7);
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <span ref={ref}>
      {hours}/{days}
    </span>
  );
}

export default function TrustStats() {
  return (
    <section className="py-8 border-y bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <FadeIn
                key={index}
                direction={stat.direction}
                delay={0.1 * (index + 1)}
                className="h-full"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-4 rounded-xl border bg-card/60 backdrop-blur-xs shadow-2xs h-full">
                  <div
                    className={`p-2.5 rounded-lg border ${stat.color} shrink-0`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-center sm:text-left min-w-0">
                    <p className="text-xl sm:text-2xl font-black tracking-tight text-foreground">
                      {stat.is247 ? (
                        <Counter247 />
                      ) : (
                        <Counter
                          targetValue={stat.numericValue!}
                          suffix={stat.suffix}
                        />
                      )}
                    </p>
                    <p className="text-xs font-medium text-muted-foreground mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
