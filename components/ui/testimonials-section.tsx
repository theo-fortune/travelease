import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah K.",
      role: "Student",
      location: "Canada",
      text: "Travelease saved me hours of planning and $250 on my trip! The AI recommendations were spot-on, and the weather forecasting helped me pack perfectly.",
      rating: 5,
      avatar: "/placeholder.jpg",
    },
    {
      name: "David M.",
      role: "Entrepreneur",
      location: "UK",
      text: "Smooth visa process and excellent customer support. The team went above and beyond to ensure all my documentation was perfect. Highly recommended!",
      rating: 5,
      avatar: "/placeholder.jpg",
    },
    {
      name: "Fatima A.",
      role: "Manager",
      location: "UAE",
      text: "The ticket booking system was so easy to use — I'll never go back. Found better deals than any other platform, and the interface is incredibly intuitive.",
      rating: 5,
      avatar: "/placeholder.jpg",
    },
    {
      name: "Juan L.",
      role: "Traveler",
      location: "Spain",
      text: "My stress-free trip was only possible thanks to Travelease! The budget optimization feature helped me make the most of every dollar spent.",
      rating: 5,
      avatar: "/placeholder.jpg",
    },
    {
      name: "Emily R.",
      role: "Digital Nomad",
      location: "Australia",
      text: "As someone who travels frequently, having all my travel tools in one place is a game-changer. The local expertise feature is particularly valuable.",
      rating: 5,
      avatar: "/placeholder.jpg",
    },
    {
      name: "Michael T.",
      role: "Business Traveler",
      location: "Singapore",
      text: "The ROI is incredible. Saved over $400 on my last business trip while getting better accommodations. The expense tracking is a nice bonus.",
      rating: 5,
      avatar: "/placeholder.jpg",
    },
  ];

  return (
    <section className="relative py-12 md:py-24 bg-muted/40">
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-muted/50 opacity-75" />

      {/* Decorative Elements */}
      <div className="absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-24 bottom-1/3 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our Users Say
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Trusted by travelers worldwide who value time, money, and simplicity
          </p>
        </div>

        <div className="mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border bg-background p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              {/* Rating Stars */}
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[#7034D7] text-[#7034D7]"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="mb-6 text-muted-foreground">"{testimonial.text}"</p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute -right-4 -top-4 h-16 w-16 bg-primary/5 blur-2xl" />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="rounded-xl bg-[#7034D7] text-white hover:bg-[#7034D7]/90 hover:shadow-[0_0_25px_rgba(112,52,215,0.35)] transition-all duration-300"
            asChild
          >
            <Link href="/signup">Join Thousands of Happy Travelers</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
