"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { EcommerceAggregatorStorySection } from "./ecommerce-aggregator-story-section";

const slides = [
  {
    id: 1,
    title1: "Bookkeeping Service",
    title2: "For Real Estate Business",
    description:
      "Hire a Team of CPAs who specializes in Bookkeeping and Accounting of Real Estate Industry",
    image: "/Images/bro.avif", // તમારા પ્રોજેક્ટ મુજબ પાથ બદલજો
  },
  {
    id: 2,
    title1: "Commission & Rental Tracking",
    title2: "That Works as Hard as You Do",
    description:
      "From closings to payouts, we manage your financials while you focus on selling more homes and closing more deals.",
    image: "/Images/grow.avif",
  },
  {
    id: 3,
    title1: "Stay on Top of Every",
    title2: "Property's Profitability",
    description:
      "We handle rental income, expenses, and P&L reports for each unit — so you can grow your portfolio with clarity.",
    image: "/Images/Realestate.avif",
  },
];

export function ReminderSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-cycle logic: દર 5 સેકન્ડે સ્લાઇડ બદલાશે
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 min-h-[600px] flex items-center">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side: Animated Content */}
            <div className="space-y-6 text-left transition-all duration-700 ease-in-out">
              <div className="space-y-2">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1a1a1a] animate-in fade-in slide-in-from-left duration-1000">
                  {slides[currentSlide].title1}
                </h2>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FF4500] animate-in fade-in slide-in-from-left duration-1000 delay-150">
                  {slides[currentSlide].title2}
                </h3>
              </div>

              <p className="text-xl md:text-2xl text-gray-700 max-w-xl leading-snug min-h-[80px]">
                {slides[currentSlide].description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link
                  href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0czVvey0mCJa39b594OhprJIIBTdV2h18U9Q3_xzSugo1qfMzTCrmN3rorBREzUeNYGlxnZ7Gq?gv=true"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-[#FF4500] hover:bg-[#E63E00] text-white px-8 py-7 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105 active:scale-95",
                  )}
                >
                  Book a Free Consultation
                </Link>

                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "border-[#4A5568] text-[#4A5568] hover:bg-gray-100 px-10 py-7 text-lg font-semibold rounded-full border-2 transition-all",
                  )}
                >
                  Explore Plans
                </Link>
              </div>

              {/* Slider Dots (Indicators) */}
              <div className="flex gap-2 pt-8">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={cn(
                      "h-2 transition-all duration-300 rounded-full",
                      currentSlide === index
                        ? "w-8 bg-[#FF4500]"
                        : "w-2 bg-gray-300",
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Right Side: Animated Image */}
            <div className="relative flex justify-center items-center h-[400px] md:h-[500px]">
              <div
                key={currentSlide}
                className="relative w-full h-full animate-in fade-in zoom-in duration-1000"
              >
                <Image
                  src={slides[currentSlide].image}
                  alt="Hero Illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
