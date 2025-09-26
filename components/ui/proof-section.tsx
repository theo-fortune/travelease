import { PiggyBank, TrendingUp, Cloud, DollarSign } from "lucide-react";

const ProofSection = () => {
  const stats = [
    {
      icon: PiggyBank,
      number: "10%+",
      metric: "$140–$280",
      description: "Every user saves this amount per trip",
    },
    {
      icon: TrendingUp,
      number: "76%",
      metric: "Market Share",
      description: "Of travelers prioritize budget efficiency",
    },
    {
      icon: Cloud,
      number: "21",
      metric: "Days Ahead",
      description: "7-day + 14-day weather integration",
    },
    {
      icon: DollarSign,
      number: "$10–$50",
      metric: "Return",
      description: "In savings for every $1 spent using Travelease",
    },
  ];

  return (
    <section className="relative py-12 md:py-24 bg-muted/50">
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-muted opacity-75" />

      <div className="container relative mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Proof & ROI
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Travelease delivers measurable value for travelers
          </p>
        </div>

        <div className="mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border bg-background p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold tracking-tight text-primary">
                    {stat.number}
                  </h3>
                  <p className="text-lg font-semibold">{stat.metric}</p>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>

                {/* Decorative Corner Accent */}
                <div className="absolute -right-4 -top-4 h-16 w-16 bg-primary/5 blur-2xl" />
              </div>
            );
          })}
        </div>

        {/* Testimonial Quote */}
        <div className="relative mx-auto mt-16 max-w-[50rem] rounded-2xl bg-background p-8 text-center shadow-sm">
          <div className="absolute -left-2 -top-2 text-6xl text-primary/20">
            "
          </div>
          <div className="absolute -bottom-2 -right-2 text-6xl text-primary/20">
            "
          </div>
          <blockquote className="relative">
            <p className="text-lg font-medium italic text-muted-foreground">
              Travelease helped me save $200 on my last trip while planning
              smarter. The weather forecasting feature alone made the service
              worth it.
            </p>
            <footer className="mt-4">
              <div className="text-sm font-semibold">Sarah Chen</div>
              <div className="text-xs text-muted-foreground">Beta User</div>
            </footer>
          </blockquote>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-24 bottom-1/3 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </div>
    </section>
  );
};

export default ProofSection;
