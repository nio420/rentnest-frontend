"use client";

import Container from "@/components/shared/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  Sparkles,
} from "lucide-react";
import FadeIn from "@/components/shared/fade-in";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "support@rentnest.com",
    description: "Our support team usually responds within 2 hours.",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+880 1234-567890",
    description: "Mon-Fri from 9:00 AM to 6:00 PM.",
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    value: "Dhaka, Bangladesh",
    description: "Come say hello at our main headquarters.",
  },
];

const ContactPage = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background ambient lighting blur */}
      <div className="pointer-events-none absolute -top-40 right-0 -z-10 h-125 w-125 rounded-full bg-primary/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-100 w-100 rounded-full bg-primary/5 blur-[100px]" />

      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-1.5 text-xs font-medium backdrop-blur-sm shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <FadeIn delay={0.5} direction="up">
              <span>We&apos;re Here To Help</span>
            </FadeIn>
          </div>

          <FadeIn delay={0.5} direction="right">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Get In{" "}
              <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>

            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Have questions or need assistance? Our team is always ready to
              support your rental journey.
            </p>
          </FadeIn>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* Contact Information Column */}
          <div className="space-y-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <FadeIn delay={0.5} direction="down">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div className="space-y-1">
                        <h3 className="font-bold text-foreground">
                          {item.title}
                        </h3>

                        <p className="font-semibold text-primary">
                          {item.value}
                        </p>

                        <p className="text-xs text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </FadeIn>
                </Card>
              );
            })}

            {/* Quick response banner */}
            <div className="rounded-2xl border bg-linear-to-br from-card to-muted/50 p-6 shadow-sm">
              <div className="flex items-center gap-3 text-primary">
                <Clock className="h-5 w-5" />
                <span className="text-sm font-semibold">
                  24/7 Portal Support
                </span>
              </div>
              <FadeIn delay={0.5} direction="right">
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  For urgent inquiry regarding existing rental bookings, log in
                  to your dashboard to connect with live support.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Contact Form Column */}
          <Card className="shadow-lg lg:col-span-2">
            <FadeIn delay={0.5} direction="down">
              <CardContent className="space-y-6 p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight">
                      Send Us A Message
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Fill out the form below and we will respond as soon as
                      possible.
                    </p>
                  </div>
                </div>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-5"
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-foreground">
                        Your Name
                      </label>
                      <Input
                        placeholder="John Doe"
                        className="h-11 rounded-lg border-muted bg-background/50 focus:bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-foreground">
                        Your Email
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        className="h-11 rounded-lg border-muted bg-background/50 focus:bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground">
                      Subject
                    </label>
                    <Input
                      placeholder="How can we help you?"
                      className="h-11 rounded-lg border-muted bg-background/50 focus:bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground">
                      Message
                    </label>
                    <Textarea
                      placeholder="Write your message details here..."
                      className="min-h-35 rounded-lg border-muted bg-background/50 p-4 focus:bg-background"
                    />
                  </div>

                  <Button
                    size="lg"
                    className="gap-2 px-8 font-semibold shadow-md cursor-pointer"
                  >
                    <Send className="h-4 w-4 " />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </FadeIn>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default ContactPage;
