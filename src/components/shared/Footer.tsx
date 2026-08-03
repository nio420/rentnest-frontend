import Link from "next/link";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import Container from "./Container";
import FadeIn from "./fade-in";

const Footer = () => {
  return (
    <footer className="mt-20 border-t bg-muted/30">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand - Slides in from the left */}
          <FadeIn direction="left" delay={0.1}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-primary">
                RentNest
              </h2>

              <p className="text-sm leading-relaxed text-muted-foreground">
                A modern rental platform connecting tenants and landlords with a
                simple, secure, and convenient renting experience.
              </p>

              <div className="flex items-center gap-2 pt-2">
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border bg-background text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-sm"
                >
                  <FaFacebook className="h-4 w-4" />
                </Link>

                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border bg-background text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-sm"
                >
                  <FaInstagram className="h-4 w-4" />
                </Link>

                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border bg-background text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-sm"
                >
                  <FaTwitter className="h-4 w-4" />
                </Link>

                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border bg-background text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-sm"
                >
                  <FaGithub className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Navigation - Slides up from the bottom */}
          <FadeIn direction="up" delay={0.2}>
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">
                Navigation
              </h3>

              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-200 hover:text-primary"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/properties"
                    className="transition-colors duration-200 hover:text-primary"
                  >
                    Properties
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className="transition-colors duration-200 hover:text-primary"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="transition-colors duration-200 hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* Services - Slides down from the top */}
          <FadeIn direction="down" delay={0.3}>
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">
                Services
              </h3>

              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li>Find Rental Properties</li>
                <li>Submit Rental Requests</li>
                <li>Secure Online Payment</li>
                <li>Manage Your Rentals</li>
              </ul>
            </div>
          </FadeIn>

          {/* Contact - Slides in from the right */}
          <FadeIn direction="right" delay={0.4}>
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">
                Contact Us
              </h3>

              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <span>support@rentnest.com</span>
                </p>

                <p className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <span>+880 1234-567890</span>
                </p>

                <p className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  <span>Dhaka, Bangladesh</span>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom Bar - Fades up gently at the end */}
        <FadeIn direction="up" delay={0.5}>
          <div className="flex flex-col items-center justify-between gap-4 border-t py-6 text-center text-xs text-muted-foreground sm:flex-row">
            <p>© {new Date().getFullYear()} RentNest. All rights reserved.</p>

            <p className="flex items-center gap-1">
              Developed with{" "}
              <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" /> by{" "}
              <span className="font-semibold text-primary">Omit</span>
            </p>
          </div>
        </FadeIn>
      </Container>
    </footer>
  );
};

export default Footer;
