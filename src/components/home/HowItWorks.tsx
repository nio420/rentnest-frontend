import Container from "@/components/shared/Container";
import { Search, FileText, CreditCard, Home, Sparkles } from "lucide-react";
import FadeIn from "../shared/fade-in";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Find Your Property",
    description:
      "Browse through available rental properties and find the perfect home for you.",
    direction: "left" as const,
  },
  {
    number: "02",
    icon: FileText,
    title: "Send Rental Request",
    description: "Submit your rental request and wait for landlord approval.",
    direction: "down" as const,
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Complete Payment",
    description:
      "Make secure payments after your rental request gets approved.",
    direction: "up" as const,
  },
  {
    number: "04",
    icon: Home,
    title: "Move Into Your Home",
    description: "Start your comfortable living journey with RentNest.",
    direction: "right" as const,
  },
];

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-87.5 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <Container>
        {/* Header - Slides down */}
        <FadeIn direction="down" delay={0.1}>
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto mb-3 inline-flex items-center gap-1.5 rounded-full border bg-background/80 px-3 py-1 text-xs font-medium shadow-sm backdrop-blur-sm">
              <Sparkles className="h-3 w-3 text-primary" />
              <span>Simple Process</span>
            </div>

            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              How It{" "}
              <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Works
              </span>
            </h2>

            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Find and secure your dream rental home in four easy steps.
            </p>
          </div>
        </FadeIn>

        {/* Step Cards Grid */}
        <div className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Subtle Connector Line for Desktop */}
          <div className="pointer-events-none absolute left-0 top-12 hidden h-px w-full bg-border/50 lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <FadeIn
                key={step.title}
                direction={step.direction}
                delay={0.15 * (index + 1)}
              >
                <div className="group relative flex flex-col items-center rounded-xl border bg-card p-5 text-center shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-md">
                  {/* Step Number Badge */}
                  <span className="absolute right-3 top-3 text-[11px] font-bold tracking-wider text-muted-foreground/30 transition-colors duration-500 group-hover:text-primary">
                    {step.number}
                  </span>

                  {/* Compact Icon Container */}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-4 ring-card transition-all duration-500 ease-out group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-sm">
                    <Icon className="h-5 w-5 transition-transform duration-500 ease-out group-hover:scale-105" />
                  </div>

                  {/* Content */}
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {step.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
