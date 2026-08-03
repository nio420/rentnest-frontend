import Link from "next/link";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="mt-8 border-t bg-muted/30">
      <Container>
        <div className="grid gap-8 py-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold tracking-tight text-primary">
              RentNest
            </h2>

            <p className="text-sm leading-relaxed text-muted-foreground">
              A modern rental platform connecting tenants and landlords with a
              simple, secure, and convenient renting experience.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <Link
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border bg-background text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-sm"
              >
                <FaFacebook className="h-3.5 w-3.5" />
              </Link>

              <Link
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border bg-background text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-sm"
              >
                <FaInstagram className="h-3.5 w-3.5" />
              </Link>

              <Link
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border bg-background text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-sm"
              >
                <FaTwitter className="h-3.5 w-3.5" />
              </Link>

              <Link
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border bg-background text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-sm"
              >
                <FaGithub className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground">
              Navigation
            </h3>

            <ul className="space-y-2 text-sm text-muted-foreground">
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

          {/* Services */}
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground">
              Services
            </h3>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Find Rental Properties</li>
              <li>Submit Rental Requests</li>
              <li>Secure Online Payment</li>
              <li>Manage Your Rentals</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground">
              Contact Us
            </h3>

            <div className="space-y-2.5 text-sm text-muted-foreground">
              <p className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>support@rentnest.com</span>
              </p>

              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>+880 1234-567890</span>
              </p>

              <p className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span>Dhaka, Bangladesh</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-2 border-t py-4 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} RentNest. All rights reserved.</p>

          <p className="flex items-center gap-1">
            Developed with{" "}
            <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" /> by{" "}
            <span className="font-semibold text-primary">Omit</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
  