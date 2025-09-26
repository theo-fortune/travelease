import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "0",
      tagline: "Perfect for casual travelers",
      features: [
        "Access to ticket booking",
        "Basic visa info",
        "Email support",
        "Community access",
      ],
      cta: "Get Started",
      href: "/signup",
    },
    {
      name: "Pro",
      price: "29",
      tagline: "For frequent travelers who want more",
      popular: true,
      features: [
        "Everything in Basic",
        "Personalized visa guidance",
        "Priority customer support",
        "Smart travel recommendations",
        "24/7 chat support",
      ],
      cta: "Start Pro Plan",
      href: "/signup?plan=pro",
    },
    {
      name: "Premium",
      price: "59",
      tagline: "Best for professionals & families",
      features: [
        "Everything in Pro",
        "Dedicated travel concierge",
        "Multi-trip management tools",
        "Advanced travel analytics",
        "Family sharing (up to 5)",
        "Custom travel reports",
      ],
      cta: "Get Premium",
      href: "/signup?plan=premium",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-12 md:py-24">
      {/* Decorative Elements */}
      <div className="absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-24 bottom-1/3 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Choose the plan that fits your journey
          </p>
        </div>

        <div className="mx-auto mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "relative rounded-2xl border bg-card p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg",
                plan.popular && "border-primary/50 shadow-lg"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#7034D7] px-4 py-1 text-sm font-semibold text-white">
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.tagline}</p>
              </div>

              {/* Pricing */}
              <div className="my-6 flex items-baseline">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground">/mo</span>
              </div>

              {/* Features */}
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={cn(
                  "w-full rounded-xl transition-all duration-300",
                  plan.popular
                    ? "bg-[#7034D7] text-white hover:bg-[#7034D7]/90 hover:shadow-[0_0_25px_rgba(112,52,215,0.35)]"
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                )}
                asChild
              >
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>

              {/* Decorative Corner Accent */}
              <div className="absolute -right-4 -top-4 h-16 w-16 bg-primary/5 blur-2xl" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <h3 className="mb-6 text-2xl font-bold tracking-tight">
            Start your journey with Travelease today
          </h3>
          <Button
            size="lg"
            className="rounded-xl bg-[#7034D7] text-white hover:bg-[#7034D7]/90 hover:shadow-[0_0_25px_rgba(112,52,215,0.35)] transition-all duration-300"
            asChild
          >
            <Link href="/signup">Sign Up Free</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
