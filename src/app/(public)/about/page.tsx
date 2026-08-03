import Container from "@/components/shared/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  Search,
  CreditCard,
  Home,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import FadeIn from "@/components/shared/fade-in";

const features = [
  {
    icon: Search,
    title: "Easy Property Search",
    description:
      "Find rental properties easily with advanced search and filtering options.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Rentals",
    description:
      "We help tenants and landlords connect through a secure rental experience.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Complete your rental payments safely with our integrated payment system.",
  },
  {
    icon: Home,
    title: "Better Living",
    description:
      "Discover comfortable homes that match your lifestyle and budget.",
  },
];

const highlights = [
  "Transparent Communication",
  "Automated Rent Tracking",
  "Verified Property Listings",
  "24/7 Dedicated Support",
];

const AboutPage = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Ambient background glow accents */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <Container>
        {/* Hero Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-1.5 text-xs font-medium backdrop-blur-sm shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <FadeIn delay={0.5} direction="up">
              <span>Redefining Real Estate</span>
            </FadeIn>
          </div>

          <FadeIn delay={0.5} direction="right">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              About{" "}
              <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                RentNest
              </span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
              RentNest is a modern rental platform designed to make finding and
              managing rental properties simple, secure, and convenient for
              everyone.
            </p>
          </FadeIn>
        </div>

        {/* Mission Section - Modern Split Layout */}
        <div className="mt-20 overflow-hidden rounded-3xl border bg-linear-to-b from-card to-muted/30 p-8 shadow-sm md:p-12 lg:p-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <FadeIn delay={0.5} direction="left">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Our Purpose
                </span>
                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Our Mission & Vision
                </h2>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our mission is to connect tenants with their ideal homes while
                  helping landlords manage their properties efficiently. We aim
                  to create a smooth rental experience with transparent
                  communication, secure payments, and trusted services.
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border bg-background/60 p-4 shadow-sm backdrop-blur-sm"
                >
                  <FadeIn delay={0.5} direction="right">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium">{item}</span>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24">
          <div className="text-center">
            <FadeIn delay={0.5} direction="down">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Why Choose RentNest?
              </h2>
              <p className="mt-3 text-muted-foreground">
                Everything you need to rent and manage properties effortlessly.
              </p>
            </FadeIn>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <FadeIn delay={0.5} direction="down">
                    <CardContent className="space-y-4 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                      </div>

                      <h3 className="text-lg font-bold">{item.title}</h3>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </FadeIn>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="mt-24 rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground shadow-xl sm:px-12 md:py-16">
          <FadeIn delay={0.5} direction="up">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Making Renting Simple
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80 sm:text-lg">
              Whether you are looking for a new home or managing rental
              properties, RentNest provides the tools you need for a smoother
              experience.
            </p>
          </FadeIn>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <FadeIn delay={0.5} direction="right">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="gap-2 font-semibold shadow-md"
              >
                <Link href="/properties">
                  Explore Properties
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutPage;
