import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, AlertCircle, TrendingUp, Landmark, ShieldCheck, ArrowRight, PackageSearch } from 'lucide-react';
import { buttonVariants } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function HomeDecorStorySection() {
  const storyImage = PlaceHolderImages.find(
    (img) => img.id === 'home-decor-story'
  );

  const crisisPoints = [
    '₹18L stuck in unsettled COD from courier partners',
    'Return-to-origin charges eating into margins – no tracking',
    'TDS not deducted on vendor payments – penalty notices received',
    'Marketplace commission calculations wrong – overpaid by ₹2.4L',
    'GST input credit claims rejected due to poor documentation',
    '9 months of unfiled GST returns & inaccurate accounting data.',
  ];

  const solutionPoints = [
    'Month 1: Stared maintaining proper books & accounts',
    'Month 2: Reconciled all COD settlements and marketplace payouts',
    'Month 3: Filed backdated GST returns with proper documentation',
    'Month 4: Implemented automated TDS tracking and payment system',
  ];

  const resultsPoints = [
    'Recovered ₹18L stuck in COD settlements',
    'Claimed ₹2.4L refund from marketplace overcharges',
    'Filed all backdated returns — avoided ₹4.8L in penalties',
    'Automated TDS compliance — no more notices',
    'Proper input credit claims increased by ₹6L annually',
  ];

  return (
    <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-card p-4 sm:p-10 md:p-14 shadow-2xl border relative overflow-hidden">
      {/* Subtle Background Icon */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 opacity-5 rotate-12">
        <Landmark size={300} className="text-primary" />
      </div>

      {/* Header Section */}
      <div className="mb-14 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-primary/20">
          <PackageSearch className="h-3 w-3" /> Logistics & Finance Case Study
        </div>
        <h3 className="text-2xl md:text-5xl font-black tracking-tight text-foreground leading-[1.15] max-w-5xl mx-auto">
          From ₹18L COD to <span className="text-primary">Cash Realization</span>: Automated Reconciliation & Recovery
        </h3>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:items-start relative z-10">
        {/* Left Column: Visuals & Crisis */}
        <div className="space-y-10">
          <div className="relative group">
            {storyImage && (
              <Image
                src={storyImage.imageUrl}
                alt={storyImage.description}
                width={600}
                height={400}
                className="rounded-[2rem] shadow-2xl border-2 transition-transform duration-500 group-hover:scale-[1.01]"
                data-ai-hint={storyImage.imageHint}
              />
            )}
            {/* Impact Overlay Badge */}
            <div className="absolute -bottom-6 -right-4 bg-background border-2 p-5 rounded-2xl shadow-xl flex items-center gap-4 group-hover:border-primary transition-colors">
              <div className="bg-primary/10 p-3 rounded-xl">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-muted-foreground tracking-tighter">Penalty Avoided</p>
                <p className="text-xl font-black text-foreground">₹4.8L SAVED</p>
              </div>
            </div>
          </div>

          <div className="bg-destructive/5 rounded-3xl p-8 border border-destructive/10 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <AlertCircle size={60} />
             </div>
            <h4 className="flex items-center gap-2 font-bold text-lg text-destructive uppercase tracking-widest mb-6">
              The Crisis
            </h4>
            <ul className="space-y-4">
              {crisisPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-sm font-medium text-muted-foreground leading-relaxed">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Problem, Solution & Impact */}
        <div className="space-y-10">
          <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-1.5 before:bg-primary/20 before:rounded-full">
            <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-2">The Problem</h4>
            <p className="text-lg font-semibold leading-relaxed text-foreground/80 italic">
              This home decor brand worked with 15+ artisan vendors but had no system to track COD settlements, returns, accounting and vendor payments. Tax notices piled up.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-black uppercase tracking-widest text-primary">The Solution Roadmap</h4>
            <div className="grid gap-3">
              {solutionPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-4 rounded-xl border bg-muted/20 p-4 hover:bg-muted/40 transition-colors group">
                  <div className="h-8 w-8 rounded-lg bg-background flex items-center justify-center text-xs font-black text-primary border group-hover:bg-primary group-hover:text-white transition-all">
                    0{index + 1}
                  </div>
                  <p className="text-sm font-bold text-muted-foreground group-hover:text-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-foreground rounded-[2rem] p-8 text-background shadow-2xl relative overflow-hidden">
             <div className="absolute bottom-0 right-0 p-6 opacity-10 rotate-12">
                <ShieldCheck size={80} />
             </div>
            <h4 className="font-black text-2xl mb-6 flex items-center gap-2">
              The Results
            </h4>
            <ul className="space-y-4">
              {resultsPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary mt-0.5">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-bold opacity-90 leading-tight tracking-tight">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Modern CTA */}
      <div className="mt-16 text-center">
        <Link
          href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0czVvey0mCJa39b594OhprJIIBTdV2h18U9Q3_xzSugo1qfMzTCrmN3rorBREzUeNYGlxnZ7Gq?gv=true"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants(),
            "group h-auto rounded-2xl bg-primary px-10 py-6 text-primary-foreground shadow-[0_20px_50px_-15px_rgba(var(--primary),0.5)] transition-all hover:scale-[1.03]"
          )}
        >
          <div className="flex items-center gap-6">
            <span className="text-xl font-black tracking-tight">Book your 1:1 Strategy Call</span>
            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-2 transition-transform">
               <ArrowRight className="h-5 w-5" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}