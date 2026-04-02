import Button from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-hero">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-background/10 backdrop-blur-md border border-white/20 text-foreground text-sm font-medium mb-8 mt-12 animate-fade-in-badge">
          <span className="w-2 h-2 bg-white/60 rounded-full mr-2 animate-pulse"></span>
          AI Automation for Enterprise
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 animate-fade-in-heading">
          <span className="text-foreground">Latest Next.js</span>
          <br />
          <span className="inline-flex items-center justify-center flex-wrap gap-2 mt-4 sm:mt-6 md:mt-8">
            <span className="text-foreground">Template</span>
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-xl md:text-2xl text-foreground text-balance max-w-sm sm:max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0 animate-fade-in-subheading font-light">
          These Next js Templates are built with Next.js 16, React, TypeScript,
          Tailwind CSS, and more. They are designed to be easy to use and
          customize, while still providing a solid foundation for your next
          project.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-16 animate-fade-in-buttons">
          <Button text="Learn More" href="/services" variant="outline" />
          <Button text="Contact Us" variant="common" href="/contact" />
          <Button
            text="Get Started"
            icon={<ChevronRight className="w-6 h-6" />}
          />
        </div>
      </div>
    </section>
  );
}
