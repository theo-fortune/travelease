import { Zap, HeadphonesIcon, PiggyBank, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MarketAdvantageSection = () => {
  const advantages = [
    {
      icon: Zap,
      title: "Speed & Simplicity",
      description:
        "Book tickets and manage visas faster than traditional agencies. Our streamlined platform reduces booking time by 60% while maintaining accuracy and reliability.",
    },
    {
      icon: HeadphonesIcon,
      title: "Personalized Support",
      description:
        "24/7 human support plus smart AI travel assistance. Get instant answers to your questions and expert guidance whenever you need it, day or night.",
    },
    {
      icon: PiggyBank,
      title: "Cost Efficiency",
      description:
        "Save $140–$280 per trip with smarter planning. Our AI algorithms optimize your travel spend while maximizing comfort and convenience.",
    },
    {
      icon: Globe2,
      title: "End-to-End Travel Care",
      description:
        "From tickets to visas to on-trip assistance, all in one platform. Experience seamless travel management with everything you need in one place.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/30 to-background py-12 md:py-24">
      {/* Decorative Elements */}
      <div className="absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-24 bottom-1/3 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Choose Travelease?
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Here's how we stand out from the competition
          </p>
        </div>

        <div className="mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                {/* Icon Container */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-xl font-bold tracking-tight">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground">{advantage.description}</p>

                {/* Decorative Corner Accent */}
                <div className="absolute -right-4 -top-4 h-16 w-16 bg-primary/5 blur-2xl" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <h3 className="mb-6 text-2xl font-bold tracking-tight">
            Travel made simpler, smarter, and stress-free
          </h3>
          <Button
            size="lg"
            className="rounded-xl bg-[#7034D7] text-white hover:bg-[#7034D7]/90 hover:shadow-[0_0_25px_rgba(112,52,215,0.35)] transition-all duration-300"
            asChild
          >
            <Link href="/signup">Get Started Today</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketAdvantageSection;
