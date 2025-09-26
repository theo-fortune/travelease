import { MapPin, Search, PiggyBank, Cloud, CalendarCheck } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: MapPin,
      number: 1,
      title: "Choose Country",
      description: "Pick your destination to start planning.",
    },
    {
      icon: Search,
      number: 2,
      title: "Select City",
      description: "Zoom in for tailored local insights.",
    },
    {
      icon: PiggyBank,
      number: 3,
      title: "Set Budget",
      description: "Tell us what you can spend, we'll optimize it.",
    },
    {
      icon: Cloud,
      number: 4,
      title: "Check Weather",
      description: "AI combines forecasts & past trends.",
    },
    {
      icon: CalendarCheck,
      number: 5,
      title: "Get Itinerary",
      description: "Receive a curated trip plan with guaranteed savings.",
    },
  ];

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Your Trip, Simplified in 5 Steps
          </p>
        </div>

        <div className="relative mt-16">
          {/* Desktop Connection Lines */}
          <div className="absolute hidden lg:block top-[4.5rem] left-[10%] right-[10%] h-[2px] bg-primary/20" />

          <div className="mx-auto grid gap-8 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="group flex flex-col items-center text-center transition-all duration-300 hover:scale-105"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7034D7] text-white font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground max-w-[200px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
