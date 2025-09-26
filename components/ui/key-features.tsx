import { CalculatorIcon, Cloud, MapPin, PiggyBank } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const KeyFeaturesSection = () => {
  const features = [
    {
      icon: CalculatorIcon,
      title: "AI Budget Optimizer",
      description:
        "Automatically distribute your travel funds across flights, stays, food, and activities for maximum savings.",
    },
    {
      icon: Cloud,
      title: "Weather-Smart Planning",
      description:
        "Plan trips around weather forecasts + historical trends, with activity recommendations tailored to conditions.",
    },
    {
      icon: MapPin,
      title: "Local Expertise Hub",
      description:
        "Insider tips, price-tagged dining, and real-time deal alerts that make you feel like a local.",
    },
    {
      icon: PiggyBank,
      title: "Savings Guarantee",
      description:
        "Every plan guarantees 10%+ cost savings, turning budget limitations into smarter adventures.",
    },
  ];

  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      {/* Gradient Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/50" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Key Features (Deep Dive)
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Why Travelease is more than just another travel tool
          </p>
        </div>

        <div className="mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl border bg-background/50 backdrop-blur-sm p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(112,52,215,0.15)]"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#7034D7] text-white transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="rounded-xl bg-[#7034D7] text-white hover:bg-[#7034D7]/90 hover:shadow-[0_0_25px_rgba(112,52,215,0.35)] transition-all duration-300"
            asChild
          >
            <Link href="/services">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
