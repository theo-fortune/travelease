"use client";

import { BackgroundPaths } from "@/components/ui/background-paths";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Star,
  DollarSign,
  MapPin,
  AppWindow,
  CalculatorIcon,
  Cloud,
  PiggyBank,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HowItWorksSection from "@/components/ui/how-it-works";
import KeyFeaturesSection from "@/components/ui/key-features";
import ProofSection from "@/components/ui/proof-section";
import TestimonialsSection from "@/components/ui/testimonials-section";
import SocialProofSection from "@/components/ui/social-proof-section";
import PricingSection from "@/components/ui/pricing-section";
import MarketAdvantageSection from "@/components/ui/market-advantage-section";
import FaqSection from "@/components/ui/faq-section";
import CtaSection from "@/components/ui/cta-section";

export default function Home() {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 5000); // Adjust this value to change how long the landing page is shown

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showLanding ? (
        <motion.div
          key="landing"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <BackgroundPaths title="TravelEase Your Gateway" />
          <Button
            variant="ghost"
            className="absolute top-4 right-4 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            onClick={() => setShowLanding(false)}
          >
            Skip Intro
          </Button>
        </motion.div>
      ) : (
        <motion.div
          key="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col w-full max-w-full overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative">
              <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col-reverse gap-8 py-12 md:flex-row md:items-center md:py-24 lg:py-32">
                <div className="flex-1 space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Experience Hassle-Free Travel With Our Services
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Our travel agency simplifies the booking process, ensuring
                    you spend less time planning and more time enjoying your
                    journey. With expert visa assistance and personalized
                    customer service, we cater to your unique travel needs.
                  </p>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button size="lg" asChild>
                      <Link href="/services">Learn More</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/signup">Sign Up</Link>
                    </Button>
                  </div>
                </div>
                <div className="flex-1 max-w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/landingpage2.jpg-m2dYtL9cUYIFI4gijbLcG4ogCsM8e2.jpeg"
                    alt="People discussing travel plans"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover w-full h-auto max-w-full"
                    priority
                  />
                </div>
              </div>
            </section>

            {/* The Problem Section */}
            <section className="py-12 md:py-24">
              <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="mx-auto max-w-[58rem] text-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    The Problem
                  </h2>
                  <p className="mt-4 text-xl text-muted-foreground">
                    Why Travel Planning Feels Stressful
                  </p>
                </div>
                <div className="mx-auto mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <DollarSign className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Budget Uncertainty & Overspending</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        73% of travelers exceed their budget by $240–$380 on a
                        week-long trip.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Poor Planning & Generic Advice</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Travelers pack wrong clothes, waste money on tourist
                        traps, and get generic recommendations.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <AppWindow className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Fragmented Tools</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Google Maps, travel apps, and budgeting apps don't talk
                        to each other — leaving travelers stressed and
                        unprepared.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* The Solution Section */}
            <section className="bg-muted py-12 md:py-24">
              <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="mx-auto max-w-[58rem] text-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    The Solution
                  </h2>
                  <p className="mt-4 text-xl text-muted-foreground">
                    AI-Powered Travel Finance Intelligence
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    The only platform combining AI budget optimization, weather
                    intelligence, and local expertise — making travel
                    financially smart, not just fun.
                  </p>
                </div>
                <div className="mx-auto mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <CalculatorIcon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Budget-First Planning</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Smart budget allocation and real-time spending tracking.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Cloud className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Weather-Smart Intelligence</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        7-day trends + 14-day forecasts with activity
                        recommendations.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <PiggyBank className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>10% Savings Guarantee</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Save $140–$280 per trip with AI-driven optimization.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Local Expertise</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Insider tips, price-categorized dining, and real-time
                        local deals.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* How It Works Section */}
            <HowItWorksSection />

            {/* Key Features Section */}
            <KeyFeaturesSection />

            {/* Proof & ROI Section */}
            <ProofSection />

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* Social Proof Section */}
            <SocialProofSection />

            {/* Services Section */}
            <section className="bg-muted py-12 md:py-24">
              <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="mx-auto max-w-[58rem] text-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Simplifying Your Travel: Booking Tickets and Visa
                    Information Made Easy
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    Choose your destination and travel dates to begin your
                    journey
                  </p>
                </div>
                <div className="mx-auto mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Seamless Ticket Booking</CardTitle>
                      <CardDescription>
                        Book flights easily with our user-friendly platform
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link href="/services/ticket-booking">
                        <Button className="w-full">Book Now</Button>
                      </Link>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Student Visa Guidance</CardTitle>
                      <CardDescription>
                        Get the latest information on student visas
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link href="/services/student-visa">
                        <Button className="w-full">Learn More</Button>
                      </Link>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Business Visa Solutions</CardTitle>
                      <CardDescription>
                        Navigate business visa requirements with ease
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link href="/services/business-visa">
                        <Button className="w-full">Get Started</Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Market Advantage Section */}
            <MarketAdvantageSection />

            {/* Pricing Section */}
            <PricingSection />

            {/* FAQ Section */}
            <FaqSection />

            {/* CTA Section */}
            <CtaSection />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
