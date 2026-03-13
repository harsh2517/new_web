import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, AlertCircle, Utensils, TrendingUp, Wallet, ArrowRight } from 'lucide-react';
import { buttonVariants } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function CafeStorySection() {
  const storyImage = PlaceHolderImages.find(
    (img) => img.id === 'cafe-story'
  );

  const problemPoints = [
    '₹12L trapped in unreconciled transactions, books delayed 3-4 months',
    'PetPooja POS disconnected from accounting, inventory waste causing margin leakage',
    'Zomato/Swiggy settlements impossible to track across outlets',
    '₹26.2L idle cash earning minimal returns',
    'Zero visibility on channel profitability or cash flow forecasting',
    'Tax penalties: ₹8.23L in 9 months',
  ];

  const solutionPoints = [
    {
      title: 'Book Cleaning & Integration:',
      items: [
        'Integrated PetPooja POS + Zomato/Swiggy data with accounting',
        'Cleaned 6-month backlog (1,400+ transactions)',
        'Built channel-wise profitability tracking',
      ],
    },
    {
      title: 'Treasury & Cash Flow:',
      items: [
        'Deployed ₹26.2L surplus with generated income of INR 2.34L',
        '90% reduction in manual reconciliation',
      ],
    },
  ];

  const financialImpactPoints = [
    'Inventory waste reduction: ₹8.4L',
    'Direct channel revenue: ₹12L',
    'Time recovered: 8.6L (432+ hours)',
    'Treasury optimization: ₹2.34L',
  ];

  const resultsPoints = [
    'Net margin: 9.5% → 18%',
    '100% GST & Income Tax compliance, zero penalties',
    'Secured ₹50L expansion loan at 8.5% (vs 14%)',
  ];

  return (
    <div className="mx-auto max-w-6xl rounded-[3rem] bg-card p-4 sm:p-8 md:p-12 shadow-2xl border overflow-hidden relative">
      {/* Decorative Branding Element */}
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <Utensils size={120} className="text-primary" />
      </div>

      {/* Header with Location Tag */}
      <div className="mb-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20 mb-4">
          <TrendingUp className="h-3 w-3" /> Growth Case Study
        </div>
        <h3 className="text-2xl md:text-4xl font-black tracking-tight text-foreground">
          Cafe & Restaurant Chain | ₹4.5Cr Turnover
        </h3>
        <p className="text-muted-foreground font-semibold mt-2">3 Outlets | Delhi NCR</p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 relative z-10">
        {/* Left Side: Visuals & Problem */}
        <div className="space-y-8">
          <div className="relative">
            {storyImage && (
              <Image
                src={storyImage.imageUrl}
                alt={storyImage.description}
                width={600}
                height={400}
                className="rounded-[2rem] shadow-2xl border-2 object-cover"
                data-ai-hint={storyImage.imageHint}
              />
            )}
            {/* Value Badge Overlay */}
            <div className="absolute -bottom-6 -right-2 md:right-6 bg-primary p-6 rounded-2xl shadow-xl border-4 border-background group hover:scale-105 transition-transform cursor-default">
              <p className="text-primary-foreground text-xs uppercase font-bold tracking-tighter">Value Created</p>
              <p className="text-2xl font-black text-white">₹31.4L</p>
            </div>
          </div>

          <div className="bg-destructive/5 rounded-3xl p-8 border border-destructive/10">
            <h4 className="flex items-center gap-2 font-bold text-lg text-destructive uppercase tracking-widest mb-6">
              <AlertCircle className="h-5 w-5" /> The Problem
            </h4>
            <ul className="grid gap-4">
              {problemPoints.map((point, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-3 leading-relaxed">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/40" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Solution, Impact & Results */}
        <div className="space-y-10">
          {/* Solution Sections */}
          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest text-primary">The Solution</h4>
            <div className="grid gap-4">
              {solutionPoints.map((solution, index) => (
                <div key={index} className="rounded-2xl border bg-muted/20 p-5 hover:bg-muted/40 transition-colors">
                  <p className="font-bold text-foreground mb-3 flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> {solution.title}
                  </p>
                  <ul className="space-y-2 ml-6">
                    {solution.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-xs text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Impact & Results Row */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-foreground rounded-2xl p-6 text-background shadow-lg">
              <h4 className="font-bold text-sm uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                <Wallet className="h-4 w-4" /> Impact
              </h4>
              <ul className="space-y-2">
                {financialImpactPoints.map((point, index) => (
                  <li key={index} className="text-[11px] font-bold border-b border-background/10 pb-1">
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary/5 rounded-2xl p-6 border-2 border-primary/20">
              <h4 className="font-bold text-sm uppercase tracking-widest text-primary mb-4">Results</h4>
              <ul className="space-y-3">
                {resultsPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-[11px] font-black text-foreground uppercase tracking-tight">
                    <Check className="h-3 w-3 mt-0.5 text-primary shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Conclusion Text */}
          <div className="p-4 rounded-xl bg-primary/10 border-l-4 border-primary italic text-sm text-foreground/80">
             <strong>Conclusion:</strong> {` ₹12L reconciliation chaos → automated 3-outlet system → ₹31.4L annual value unlocked in 6 months.`}
          </div>
        </div>
      </div>

      {/* Modern High-Contrast CTA */}
      <div className="mt-16 text-center">
        <Link
          href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0czVvey0mCJa39b594OhprJIIBTdV2h18U9Q3_xzSugo1qfMzTCrmN3rorBREzUeNYGlxnZ7Gq?gv=true"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants(),
            "group h-auto rounded-2xl bg-primary px-12 py-6 text-primary-foreground shadow-[0_20px_50px_-10px_rgba(var(--primary),0.4)] transition-all hover:scale-[1.02]"
          )}
        >
          <div className="flex items-center gap-6">
            <span className="text-2xl font-black tracking-tight">Book Your Free 1:1 Strategy Call</span>
            <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
          </div>
        </Link>
      </div>
    </div>
  );
}