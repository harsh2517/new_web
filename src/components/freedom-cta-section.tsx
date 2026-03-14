import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import AttentionButton from "./button _animation/page";

export function FreedomCtaSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-primary/5" />
      <div className="absolute top-[-100px] left-[-100px] h-[300px] w-[300px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-[-100px] right-[-100px] h-[300px] w-[300px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="container mx-auto max-w-4xl text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Ready to Reclaim Your Time
          <span className="block text-primary">
            and Focus on Growth?
          </span>
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-lg md:text-xl text-muted-foreground">
          Let us handle the finances, so you can get back to what you do best —
          building your business.
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <AttentionButton>

          <Link
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0czVvey0mCJa39b594OhprJIIBTdV2h18U9Q3_xzSugo1qfMzTCrmN3rorBREzUeNYGlxnZ7Gq?gv=true"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full px-10 py-6 text-lg font-bold shadow-xl transition hover:scale-105 hover:shadow-2xl flex items-center gap-2"
            )}
          >
            Book Your Free Strategy Call
            <ArrowRight className="h-5 w-5" />
          </Link>
          </AttentionButton>

        </div>

        {/* trust text */}
        <p className="mt-6 text-sm text-muted-foreground">
          Limited slots available this week.
        </p>

      </div>
    </section>
  );
}