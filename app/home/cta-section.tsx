import Link from "next/link";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#7034D7] py-12 md:py-24">
      {/* Decorative Gradient Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50"
      />
      <div
        aria-hidden="true"
        className="absolute -top-1/2 left-1/4 h-[200%] w-1/2 -rotate-45 rounded-full bg-gradient-to-r from-white/15 to-transparent blur-3xl"
      />

      <div className="container relative mx-auto px-4 text-center text-primary-foreground md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Ready to Travel Smarter?
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-primary-foreground/80">
          Join thousands of travelers saving money and enjoying stress-free
          journeys with Travelease.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            asChild
            className="transform-gpu rounded-xl bg-white text-[#7034D7] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-gray-100 hover:shadow-2xl"
          >
            <Link href="/signup">Get Started Free</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="transform-gpu rounded-xl border-white/50 bg-transparent text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-white hover:bg-white/10"
          >
            <Link href="/services">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
