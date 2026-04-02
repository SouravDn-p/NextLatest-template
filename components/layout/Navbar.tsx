"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <section className="bg-background">
      <nav className="fixed top-0 right-0 left-0 z-50 px-4 py-4 sm:px-6">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between rounded-full bg-white/10 px-4 py-3 shadow-sm backdrop-blur-sm sm:px-8 sm:py-4 border ">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
              <Image
                src="/images/cliste-logo.png"
                alt="Sourav"
                width={40}
                height={40}
                className="w-full h-full object-contain text-foreground "
              />
            </div>
            <span className="text-lg font-semibold text-foreground">
              Next.js Template
            </span>
          </Link>

          {/* Navigation Links - Centered */}
          <div className="hidden sm:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center gap-8">
            <Link
              href="/"
              className="text-base font-medium text-foreground  transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-base font-medium text-foreground transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-base font-medium text-foreground transition-colors hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium text-foreground transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Button text="Log in" variant="outline" href="/login" />
              <Button
                text="Get Started"
                icon={<ChevronRight size={16} />}
                href="/register"
              />
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}
