"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import FadeIn from "../shared/fade-in";

const testimonials = [
  {
    name: "Tanvir Hossain",
    role: "Tenant",
    location: "Dhanmondi, Dhaka",
    rating: 5,
    comment:
      "Found an apartment in Dhanmondi within just 2 days! The property photos matched reality exactly, and communicating with the landlord was effortless.",
    direction: "left" as const,
  },
  {
    name: "Mahmudur Rahman",
    role: "Landlord",
    location: "Uttara, Dhaka",
    rating: 5,
    comment:
      "Listing my property was super smooth. I got multiple verified tenant requests within a week and managed to rent out my flat without any broker fees.",
    direction: "up" as const,
  },
  {
    name: "Nusrat Jahan",
    role: "Tenant",
    location: "Banani, Dhaka",
    rating: 5,
    comment:
      "The best part is knowing all listings are verified. No fear of advance booking scams. Highly recommended for anyone searching for a family home!",
    direction: "right" as const,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);

  // Auto-scroll functionality for mobile viewport
  useEffect(() => {
    const interval = setInterval(() => {
      if (isHovered.current) return;

      const nextIndex = (activeIndex + 1) % testimonials.length;
      setActiveIndex(nextIndex);

      if (scrollRef.current && window.innerWidth < 768) {
        const cardWidth = scrollRef.current.clientWidth;
        scrollRef.current.scrollTo({
          left: cardWidth * nextIndex,
          behavior: "smooth",
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  // Track scroll position to update dot indicators on manual swipe
  const handleScroll = () => {
    if (scrollRef.current && window.innerWidth < 768) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.clientWidth;
      const index = Math.round(scrollPosition / cardWidth);
      if (index !== activeIndex && index >= 0 && index < testimonials.length) {
        setActiveIndex(index);
      }
    }
  };

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Animated Header */}
        <FadeIn direction="down" delay={0.1}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              Social Proof
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mt-3 text-foreground">
              Loved by Renters & Property Owners
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              See how our platform simplifies rental experiences across the
              city.
            </p>
          </div>
        </FadeIn>

        {/* Testimonials Container - Mobile Auto Slider / Desktop 3-Col Grid */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseEnter={() => (isHovered.current = true)}
          onMouseLeave={() => (isHovered.current = false)}
          onTouchStart={() => (isHovered.current = true)}
          onTouchEnd={() => (isHovered.current = false)}
          className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-4 md:pb-0"
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="w-full min-w-full md:min-w-0 snap-center shrink-0 box-border px-0.5"
            >
              <FadeIn
                direction={item.direction}
                delay={0.15 * (index + 1)}
                className="h-full"
              >
                <Card className="border shadow-2xs hover:shadow-md transition-shadow relative overflow-hidden bg-card h-full flex flex-col justify-between">
                  <CardContent className="p-5 sm:p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-0.5">
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <Quote className="h-6 w-6 text-muted-foreground/30 shrink-0 ml-2" />
                      </div>
                      <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed mb-6 italic wrap-break-word hyphens-auto">
                        {item.comment}
                      </p>
                    </div>

                    <div className="pt-4 border-t flex items-center justify-between gap-2 mt-auto">
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-bold text-foreground truncate">
                          {item.name}
                        </h4>
                        <p className="text-xs text-muted-foreground truncate">
                          {item.location}
                        </p>
                      </div>
                      <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 shrink-0">
                        {item.role}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-4 md:hidden">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveIndex(idx);
                if (scrollRef.current) {
                  const cardWidth = scrollRef.current.clientWidth;
                  scrollRef.current.scrollTo({
                    left: cardWidth * idx,
                    behavior: "smooth",
                  });
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "w-6 bg-primary"
                  : "w-2 bg-primary/20 hover:bg-primary/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
