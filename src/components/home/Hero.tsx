import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Star,
  MousePointerClick,
} from "lucide-react";
import FadeIn from "../shared/fade-in";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-125 w-150 -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Top Pill Accent - Slides down */}
            <FadeIn direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-1.5 text-xs font-medium shadow-sm backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span>The Smart Way To Rent</span>
              </div>
            </FadeIn>

            {/* Main Heading - Slides in from left */}
            <FadeIn direction="left" delay={0.2}>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.15]">
                Find Your Perfect{" "}
                <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Rental Home
                </span>
              </h1>
            </FadeIn>

            {/* Paragraph - Slides in from right */}
            <FadeIn direction="right" delay={0.3}>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Discover apartments, houses, and family homes from trusted
                landlords. Browse properties, submit rental requests, and
                complete secure online payments with ease.
              </p>
            </FadeIn>

            {/* Call to Action Buttons - Slides up */}
            <FadeIn direction="up" delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="group font-semibold shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <Link href="/properties" className="flex items-center gap-2">
                    <span>Browse Properties</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5"
                >
                  <Link href="/register">Become a Landlord</Link>
                </Button>
              </div>
            </FadeIn>

            {/* Micro Social Proof / Stats - Slides in from left */}
            <FadeIn direction="left" delay={0.5}>
              <div className="flex items-center gap-6 pt-4 text-xs font-medium text-muted-foreground border-t border-border/60">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span>Verified Listings</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span>4.9/5 Rating</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Image Container - Slides in from right */}
          <FadeIn direction="right" delay={0.3}>
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              {/* Subtle glow layer behind the image */}
              <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-primary/30 to-primary/10 blur-xl opacity-70" />

              <div className="relative h-87.5 w-full overflow-hidden rounded-2xl border bg-card shadow-xl sm:h-105 lg:h-120">
                <Image
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop"
                  alt="Modern rental home"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                />

                {/* Floating Glassmorphism Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto rounded-xl border border-white/20 bg-background/80 p-3.5 shadow-lg backdrop-blur-md dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground">
                        100% Verified Homes
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        Direct connection with owners
                      </p>
                    </div>
                  </div>
                </div>

                {/* Interactive Floating Badge */}
                <div className="absolute right-4 top-4 animate-[float_3s_ease-in-out_infinite] sm:right-6 sm:top-6">
                  <div className="group flex cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-background/80 px-3 py-2 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-background dark:border-white/10">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MousePointerClick className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
                    </span>

                    <span className="text-[11px] font-semibold text-foreground">
                      Explore Homes
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
