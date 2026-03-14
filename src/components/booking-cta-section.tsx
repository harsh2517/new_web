import { ArrowRight } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import AttentionButton from "./button _animation/page";

const issuesList = [
  <>Are you <strong> worried </strong> about facing <strong> tax demands & revenue leakages </strong>?</>,
  <>Your team does not have <strong> updated knowledge </strong> on tax & finance?</>,
  <>Do you feel <strong> overwhelmed </strong> by your books at <strong> month-end </strong> or <strong> year-end </strong>?</>,
  <>Are you <strong> stuck </strong> managing the accounts & tax team instead of focusing on <strong> business growth </strong>?</>,
  <>Do you seek a <strong> One-stop solution </strong> for tax, compliance & accounts?</>,
  <>Do you experience frequent <strong> data reconciliation issues </strong>?</>,
  <>Do you feel lost and get <strong> scarce family time </strong> due to workload?</>,
];

export function BookingCtaSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Why Book a Free 1:1 Session?
          </h2>
          <p className="text-muted-foreground mt-3">
            If these problems sound familiar, you're not alone.
          </p>
        </div>

        {/* Issues Card */}
        <div className="rounded-2xl border bg-background shadow-xl p-10 backdrop-blur">

          <ul className="space-y-5">
            {issuesList.map((issue, index) => (
              <li
                key={index}
                className="group flex items-start gap-4 rounded-lg p-3 transition hover:bg-muted/60"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                  <ArrowRight className="h-4 w-4" />
                </div>

                <span className="text-lg leading-relaxed">{issue}</span>
              </li>
            ))}
          </ul>

          {/* Highlight Message */}
          <div className="mt-10 rounded-lg bg-primary/10 p-5 text-center">
            <p className="font-semibold text-lg text-primary">
              If you relate to any of these issues, this session is made for you.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <AttentionButton>

          <Link
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0czVvey0mCJa39b594OhprJIIBTdV2h18U9Q3_xzSugo1qfMzTCrmN3rorBREzUeNYGlxnZ7Gq?gv=true"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants(),
              "h-auto w-full max-w-xl rounded-xl bg-primary px-8 py-6 text-primary-foreground shadow-xl transition hover:scale-105 hover:shadow-2xl"
            )}
          >
            <div className="flex flex-col">
              <span className="text-2xl font-bold">
                Let's Fix This Properly
              </span>
              <span className="text-sm opacity-90">
                Book a Free 30 mins Strategy Session  
                (Only 4 Slots Left)
              </span>
            </div>
          </Link>
          </AttentionButton>

        </div>

      </div>
    </section>
  );
}