import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Travelease help me save money on travel?",
    answer:
      "Travelease uses AI-powered algorithms to optimize your travel budget across flights, accommodations, and activities. Our platform analyzes historical pricing data, seasonal trends, and local market conditions to help you save $140-$280 per trip on average. We also provide real-time alerts for deals and price drops tailored to your preferences.",
  },
  {
    question: "Can I use Travelease for international trips?",
    answer:
      "Absolutely! Travelease is designed for both domestic and international travel. We provide comprehensive visa guidance, international weather forecasts, currency conversion, and local recommendations for destinations worldwide. Our platform supports multiple languages and currencies to ensure a smooth experience regardless of your destination.",
  },
  {
    question:
      "Does the platform cover weather forecasts and packing suggestions?",
    answer:
      "Yes! We combine 7-day weather forecasts with 14-day historical weather data to provide accurate predictions and smart packing recommendations. Our AI analyzes your destination's climate, planned activities, and local customs to generate personalized packing lists, helping you pack efficiently and appropriately for your trip.",
  },
  {
    question:
      "What makes Travelease different from Google Maps or TripAdvisor?",
    answer:
      "Unlike general travel platforms, Travelease offers an all-in-one solution that combines smart budgeting, weather intelligence, and local expertise. We provide personalized recommendations based on your budget and preferences, real-time price tracking, and integrated visa services. Plus, our 24/7 support team and AI assistance ensure you're never stuck during your journey.",
  },
  {
    question: "Is there a free trial before upgrading to premium?",
    answer:
      "Yes! Our Basic plan is free forever and includes essential features like ticket booking and basic visa information. This allows you to experience our platform before upgrading to Pro or Premium plans, which offer additional features like personalized guidance, priority support, and advanced travel analytics.",
  },
  {
    question: "How do I get started with Travelease?",
    answer:
      "Getting started is easy! Simply sign up for a free account, input your travel preferences, and start exploring. Our intuitive onboarding process will guide you through setting up your profile and discovering key features. You can upgrade to Pro or Premium anytime to unlock additional benefits.",
  },
];

const FaqSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-12 md:py-24">
      {/* Decorative Elements */}
      <div className="absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-24 bottom-1/3 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Everything you need to know before you start your journey
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-[800px]">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="group border-b border-muted-foreground/20 py-2"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary [&[data-state=open]]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
