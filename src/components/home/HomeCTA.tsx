import Link from "next/link";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import FadeIn from "../shared/fade-in";

const HomeCTA = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <Container>
        {/* Main CTA Box with Gradient Background & Ambient Glow */}
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-primary via-primary/90 to-primary/80 px-6 py-12 text-center text-primary-foreground shadow-xl md:px-12 md:py-16">
          {/* Subtle Ambient Light Effect */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

          {/* Badge Accent - Slides down */}
          <FadeIn direction="down" delay={0.1}>
            <div className="mx-auto mb-4 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-medium text-white shadow-inner backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Start Your Journey</span>
            </div>
          </FadeIn>

          {/* Heading - Slides in from left */}
          <FadeIn direction="left" delay={0.2}>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
              Ready to Find Your Next Home?
            </h2>
          </FadeIn>

          {/* Text Paragraph - Slides in from right */}
          <FadeIn direction="right" delay={0.3}>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-primary-foreground/90 sm:text-base">
              Explore thousands of rental properties and find a place that feels
              like home.
            </p>
          </FadeIn>

          {/* Action Button - Slides up */}
          <FadeIn direction="up" delay={0.4}>
            <div className="mt-8 flex justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="group font-semibold shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Link href="/properties" className="flex items-center gap-2">
                  <span>Explore Properties</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

export default HomeCTA;
