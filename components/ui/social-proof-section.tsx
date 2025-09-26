import { Users, Building2, NewspaperIcon, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const SocialProofSection = () => {
  const partners = [
    {
      name: "Travel Weekly",
      logo: "/placeholder.svg",
    },
    {
      name: "Skyscanner",
      logo: "/placeholder.svg",
    },
    {
      name: "Expedia",
      logo: "/placeholder.svg",
    },
    {
      name: "StartupDigest",
      logo: "/placeholder.svg",
    },
    {
      name: "TechCrunch",
      logo: "/placeholder.svg",
    },
    {
      name: "Forbes Travel",
      logo: "/placeholder.svg",
    },
  ];

  const stats = [
    {
      icon: Users,
      number: "1,200+",
      metric: "Beta Users",
      description: "Signed up in first 3 weeks",
    },
    {
      icon: Building2,
      number: "3",
      metric: "Travel Partners",
      description: "Leading consultancies onboard",
    },
    {
      icon: NewspaperIcon,
      number: "4+",
      metric: "Media Features",
      description: "In major travel publications",
    },
    {
      icon: ThumbsUp,
      number: "95%",
      metric: "Satisfaction",
      description: "Among early testers",
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
            Social Proof & Early Traction
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Travelease is already making waves among travelers and partners
          </p>
        </div>

        {/* Partners Logos */}
        <div className="mt-16">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
            As Featured In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="transition-all duration-300 hover:opacity-100 [&_img]:grayscale hover:[&_img]:grayscale-0"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain opacity-60 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Traction Stats */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:shadow-lg"
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
