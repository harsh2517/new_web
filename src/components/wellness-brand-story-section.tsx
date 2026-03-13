import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button, buttonVariants } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Check, ShieldAlert, Sparkles, Activity, CalendarCheck, ArrowRight } from 'lucide-react';

export function WellnessBrandStorySection() {
  const storyImage = PlaceHolderImages.find(
    (img) => img.id === 'wellness-brand-story'
  );

  const problemPoints = [
    'Accounts: Inaccurate data, no single line of accounting, multi-ledger bookkeeping with weak audit trails.',
    'GST: Misfilings, incorrect ITC categorization, late GST returns',
    'Inventory: No formal write-downs affecting GST/taxability',
    'Investor readiness: Inconsistent financials hindering due diligence',
  ];

  const crisisPoints = [
    'Ledger discrepancies, delayed GST filings, and uncertain ITC claims',
    'Untracked returns impacting GST liability and revenue figures',
    'Income Tax: Late filing of TDS returns, incorrect TDS deductions and demands on account of error in TDS',
    'ROC: Company filings were not done periodically and many returns were missed which resulted in Scrutiny by ROC.',
  ];

  const solutionPoints = [
    'Month 1-2: Implement centralized financial platform integrating accounting, Income Tax and GST compliance calendars',
    'Month 3: Reconcile payables/receivables; establish robust AP/AR workflows',
    'Month 4: Automate COGS/inventory valuation with tax-aware rules; document obsolescence policy',
    'Month 5: Investor-ready tax/GST dashboards and centralized compliance calendar',
  ];

  const resultsPoints = [
    '100% GST compliance with timely filings; ITC reconciliation near-perfect',
    'Investor due diligence streamlined with clear tax positions and cash flow data',
    'Ongoing compliance framework preventing future chaos',
    '110+ hours saved monthly on manual reconciliation and data entry',
    'Timely finalisation of accounts and records.',
  ];

  return (
    <div className="mx-auto max-w-6xl rounded-[3rem] bg-card p-6 sm:p-10 md:p-16 shadow-2xl border relative overflow-hidden">
      {/* Background Aesthetic */}
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 bg-primary/5 blur-[100px] rounded-full" />
      
      {/* Header Section */}
      <div className="mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-6 border border-primary/20">
          <Activity className="h-4 w-4" /> Wellness Case Study
        </div>
        <h3 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1] max-w-4xl mx-auto">
          Turning Accounting Chaos into <span className="text-primary italic">Strong Unit Economics</span> in 7 months
        </h3>
        <p className="mt-4 text-muted-foreground font-semibold text-lg italic tracking-wide">A Wellness Brand</p>
      </div>

      <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
        {/* Left Column: Visuals & Challenges */}
        <div className="space-y-10">
          <div className="relative">
            {storyImage && (
              <Image
                src={storyImage.imageUrl}
                alt={storyImage.description}
                width={600}
                height={400}
                className="rounded-[2.5rem] shadow-2xl border-4 border-background transition-transform duration-500 hover:scale-[1.01]"
                data-ai-hint={storyImage.imageHint}
              />
            )}
            <div className="absolute -bottom-6 -right-6 bg-card border-2 p-6 rounded-3xl shadow-xl hidden md:block group hover:bg-primary transition-colors">
              <CalendarCheck className="h-10 w-10 text-primary group-hover:text-white mb-2" />
              <p className="text-[10px] font-black uppercase text-muted-foreground group-hover:text-white/80 tracking-tighter">Efficiency Gained</p>
              <p className="text-xl font-black group-hover:text-white italic">110+ Hours/Mo</p>
            </div>
          </div>

          {/* Problem & Crisis Cards */}
          <div className="grid gap-6">
            <div className="bg-muted/30 p-8 rounded-3xl border border-border/50">
              <h4 className="font-bold text-lg text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                The Problem
              </h4>
              <ul className="space-y-3">
                {problemPoints.map((point, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex gap-3 leading-relaxed">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-destructive/5 p-8 rounded-3xl border border-destructive/10">
              <h4 className="font-bold text-lg text-destructive uppercase tracking-widest mb-4 flex items-center gap-2">
                <ShieldAlert className="h-5 w-5" /> The Crisis
              </h4>
              <ul className="space-y-3">
                {crisisPoints.map((point, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex gap-3 leading-relaxed italic">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/40" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Solution & Results */}
        <div className="space-y-12">
          {/* Solution Timeline */}
          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-[0.3em] text-primary flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> The 7-Month Transformation
            </h4>
            <div className="relative space-y-4">
              {solutionPoints.map((point, index) => (
                <div key={index} className="relative pl-10 group">
                  <div className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary text-[10px] font-black group-hover:bg-primary group-hover:text-white transition-all">
                    0{index + 1}
                  </div>
                  <p className="text-base font-bold text-foreground/80 group-hover:text-foreground transition-colors leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact/Results Block */}
          <div className="rounded-[2.5rem] bg-foreground p-1 shadow-2xl transition-transform hover:scale-[1.01]">
            <div className="bg-foreground rounded-[2.4rem] p-8 md:p-10 text-background">
              <h4 className="font-black text-2xl mb-8 flex items-center gap-3 underline decoration-primary decoration-4 underline-offset-8">
                The Results
              </h4>
              <ul className="grid gap-5">
                {resultsPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary mt-0.5">
                      <Check className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-sm md:text-base font-bold leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* High-Conversion CTA */}
      <div className="mt-20 text-center relative z-10">
        <Link
          href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0czVvey0mCJa39b594OhprJIIBTdV2h18U9Q3_xzSugo1qfMzTCrmN3rorBREzUeNYGlxnZ7Gq?gv=true"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants(),
            "group h-auto rounded-[2rem] bg-primary px-10 py-6 text-primary-foreground shadow-[0_20px_50px_-10px_rgba(var(--primary),0.5)] transition-all hover:scale-[1.05]"
          )}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-black tracking-tight">Book your 1:1 Strategy Call</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </div>
            <span className="text-xs font-bold opacity-80 uppercase tracking-widest bg-white/20 px-4 py-1 rounded-full">
              Only 4 Slots Left, Book Now
            </span>
          </div>
        </Link>
        <p className="mt-4 text-xs font-bold text-muted-foreground uppercase tracking-tighter">
          Free 30 mins Strategy session
        </p>
      </div>
    </div>
  );
}