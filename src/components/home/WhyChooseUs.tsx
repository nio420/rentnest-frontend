import Container from "@/components/shared/Container";
import { ShieldCheck, Search, Zap, Star, Sparkles } from "lucide-react";
import FadeIn from "../shared/fade-in";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Properties",
    description: "Explore trusted rental listings with reliable information.",
    direction: "left" as const,
  },
  {
    icon: Search,
    title: "Easy Search",
    description: "Find properties quickly using smart filters.",
    direction: "down" as const,
  },
  {
    icon: Zap,
    title: "Fast Approval",
    description: "Connect with landlords and get rental decisions faster.",
    direction: "up" as const,
  },
  {
    icon: Star,
    title: "Better Experience",
    description: "Enjoy a simple and secure rental journey.",
    direction: "right" as const,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-16 md:py-20">
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 -z-10 h-75 w-100 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />

      <Container>
        {/* Header - Slides down */}
        <FadeIn direction="down" delay={0.1}>
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto mb-3 inline-flex items-center gap-1.5 rounded-full border bg-background/80 px-3 py-1 text-xs font-medium shadow-sm backdrop-blur-sm">
              <Sparkles className="h-3 w-3 text-primary" />
              <span>Why RentNest</span>
            </div>

            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Why Choose{" "}
              <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                RentNest?
              </span>
            </h2>

            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Everything you need for a seamless and transparent rental
              experience.
            </p>
          </div>
        </FadeIn>

        {/* Features Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <FadeIn
                key={feature.title}
                direction={feature.direction}
                delay={0.15 * (index + 1)}
              >
                <div className="group relative flex flex-col rounded-xl border bg-background p-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-md">
                  {/* Compact Icon Badge */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-500 ease-out group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-sm">
                    <Icon className="h-5 w-5 transition-transform duration-500 ease-out group-hover:scale-105" />
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {feature.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {feature.description}
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

export default WhyChooseUs;
