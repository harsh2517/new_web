import { HeroSection } from "@/components/hero-section";
import { ReminderSection } from "@/components/reminder-section";
import { ServicesSection } from "@/components/services-section";
import { BookingCtaSection } from "@/components/booking-cta-section";
import { ImpactSection } from "@/components/impact-section";
import { ProcessSection } from "@/components/process-section";
import { RealStoriesSection } from "@/components/real-stories-section";
import { ItAgencyStorySection } from "@/components/it-agency-story-section";
import { StartupFounderStorySection } from "@/components/startup-founder-story-section";
import { CafeStorySection } from "@/components/cafe-story-section";
import { D2cBrandStorySection } from "@/components/d2c-brand-story-section";
import { FreedomCtaSection } from "@/components/freedom-cta-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { WellnessBrandStorySection } from "@/components/wellness-brand-story-section";
import { HomeDecorStorySection } from "@/components/home-decor-story-section";
import { OrganicBrandStorySection } from "@/components/organic-brand-story-section";
import { EcommerceAggregatorStorySection } from "@/components/ecommerce-aggregator-story-section";
import { FounderChatsSection } from "@/components/founder-chats-section";
import { StrategyCallSection } from "@/components/strategy-call-section";
import { FaqSection } from "@/components/faq-section";
import BookingPage from "@/components/googlecalender";
import ScrollReveal from "@/components/scroller/page";
// import CalendarBooking from '@/components/googlecalender';

export default async function Home() {
  return (
    <>
    <ScrollReveal>
      <HeroSection /> 
      </ScrollReveal>
      <ScrollReveal>
        <ReminderSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <ServicesSection />
      </ScrollReveal>
      <ScrollReveal>
      <BookingCtaSection />
      </ScrollReveal>
      <ScrollReveal>
      <ImpactSection />
      </ScrollReveal>
      <ScrollReveal>
      <ProcessSection />
      </ScrollReveal>
      
      {/* <div className="bg-secondary py-16 md:py-24">
        <div className="container"> */}
          {/* <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold tracking-tight">
              Real Founder Stories
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              From chaos to clarity. See how we help businesses like yours.
            </p>
          </div> */}
          {/* <div className="space-y-24"> */}
            <ScrollReveal>
            <RealStoriesSection />
            </ScrollReveal>
            <ScrollReveal>
            <ItAgencyStorySection />
            </ScrollReveal>
            {/* <ScrollReveal>
            {/* <StartupFounderStorySection /> */}
            {/* </ScrollReveal> */}
            {/* <ScrollReveal>
            <CafeStorySection />
            </ScrollReveal> */}
            <ScrollReveal>
            <D2cBrandStorySection />
            </ScrollReveal>
            <ScrollReveal>
            <WellnessBrandStorySection />
            </ScrollReveal>
            <ScrollReveal>
            <HomeDecorStorySection />
            </ScrollReveal>
            {/* <ScrollReveal>
            <OrganicBrandStorySection />
            </ScrollReveal> */}
            <ScrollReveal>
            <EcommerceAggregatorStorySection />
            </ScrollReveal>
          {/* </div>
        </div>
      </div> */}
      {/* <FounderChatsSection /> */}
      <ScrollReveal>
      <StrategyCallSection />
      </ScrollReveal>
      <ScrollReveal>
      <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal>
      <FaqSection />
      </ScrollReveal>
      <ScrollReveal>
        <BookingPage />
      </ScrollReveal>
      <ScrollReveal>
      <FreedomCtaSection />
      </ScrollReveal>
    </>
  );
}
