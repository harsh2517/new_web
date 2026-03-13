import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, ShoppingCart, AlertCircle, BarChart, Calendar, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { buttonVariants } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function EcommerceAggregatorStorySection() {
  const storyImage = PlaceHolderImages.find(
    (img) => img.id === 'ecommerce-aggregator-story'
  );

  const problemText =
    'Entrepreneur selling Electronics across Amazon, Flipkart, and Meesho with strong sales but complete accounting & tax chaos.';

  const crisisPoints = [
    'Different GST models per platform causing GSTR-2A mismatches',
    '₹4.7L in blocked input tax credit',
    '₹2.3L paid in late filing penalties (6 months)',
    '40+ hours monthly on manual GST reconciliation',
    'Multiple tax notices for incorrect ITC claims',
    'Returns creating untracked reverse GST entries',
    'No TDS reconciliation system',
  ];

  const solutionPoints = [
    'Month 1: Started maintaining Accounts',
    'Month 2: Built GSTR-3B and GSTR-2B reconciliation with ITC tracking',
    'Month 3: Implemented returns management and credit note tracking',
    'Month 4: Automated GST filing, TDS tracking, and compliance alerts',
  ];

  const resultsPoints = [
    '₹4.7L blocked ITC recovered',
    'Zero penalties for 8+ months (saving ₹20K/month)',
    '95% less reconciliation time (40 hours → 2 hours)',
    'Tax notices eliminated — full compliance achieved',
    'Annual audit: 15 days instead of 2 months',
  ];

  const totalImpactText =
    'Total Impact: ₹6.5L recovered, 450+ hours saved annually, zero tax exposure in less';

  return (
    <div className="mx-auto max-w-6xl rounded-[3rem] bg-card p-4 sm:p-10 md:p-16 shadow-2xl border relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />

      {/* Header Section */}
      <div className="mb-14 text-center relative z-10">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-[2rem] bg-primary/10 text-primary border border-primary/20 shadow-inner">
          <ShoppingCart className="h-8 w-8" />
        </div>
        <h3 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1] mb-2 uppercase">
          E-Commerce Aggregator Business
        </h3>
        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
      </div>

      <div className="grid gap-16 lg:grid-cols-12 lg:items-start relative z-10">
        
        {/* Left: Image & Problem (Col-5) */}
        <div className="lg:col-span-5 space-y-10">
          <div className="relative group">
            {storyImage && (
              <Image
                src={storyImage.imageUrl}
                alt={storyImage.description}
                width={600}
                height={400}
                className="rounded-[2.5rem] shadow-2xl border-2 transition-all duration-500 group-hover:scale-[1.01]"
                data-ai-hint={storyImage.imageHint}
              />
            )}
            {/* Recovery Badge */}
            <div className="absolute -bottom-8 -left-4 bg-background border-2 p-6 rounded-3xl shadow-2xl group-hover:border-primary transition-colors">
               <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    <Zap className="h-6 w-6 fill-current" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">ITC Recovered</p>
                    <p className="text-2xl font-black text-foreground tracking-tighter italic">₹4.7 Lakhs</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-muted/30 p-8 rounded-[2rem] border border-border/50">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-4">The Challenge</h4>
            <p className="text-lg font-bold leading-relaxed text-foreground/80">
              {problemText}
            </p>
          </div>
        </div>

        {/* Right: Crisis, Solution & Results (Col-7) */}
        <div className="lg:col-span-7 space-y-12">
          
          {/* Crisis List */}
          <div className="space-y-6">
            <h4 className="flex items-center gap-2 font-black text-sm text-destructive uppercase tracking-widest">
              <AlertCircle className="h-5 w-5" /> The Crisis
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {crisisPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-destructive/[0.03] border border-destructive/10">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                  <p className="text-xs font-semibold text-muted-foreground leading-snug">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Timeline */}
          <div className="space-y-6">
            <h4 className="flex items-center gap-2 font-black text-sm text-primary uppercase tracking-widest">
              <Calendar className="h-5 w-5" /> The Roadmap
            </h4>
            <div className="relative pl-6 space-y-6 before:absolute before:left-0 before:top-2 before:h-[calc(100%-10px)] before:w-1 before:bg-gradient-to-b before:from-primary before:to-transparent">
              {solutionPoints.map((point, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-[30px] top-0 h-4 w-4 rounded-full border-2 border-primary bg-background shadow-sm" />
                  <p className="text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Results Block */}
          <div className="rounded-[2.5rem] bg-foreground p-1 shadow-2xl">
            <div className="bg-foreground rounded-[2.4rem] p-8 md:p-10 text-background relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <BarChart size={120} />
              </div>
              <h4 className="font-black text-2xl mb-8 flex items-center gap-3">
                <ShieldCheck className="text-primary h-7 w-7" /> The Results
              </h4>
              <div className="grid gap-4 mb-8">
                {resultsPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary mt-0.5 shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                      <Check className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-sm md:text-base font-bold tracking-tight leading-snug opacity-90">{point}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="text-lg font-black text-primary italic leading-tight">
                   {totalImpactText}
                </p>
              </div>
            </div>
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
            "group h-auto rounded-[2rem] bg-primary px-10 py-6 text-primary-foreground shadow-[0_20px_50px_-15px_rgba(var(--primary),0.5)] transition-all hover:scale-[1.03]"
          )}
        >
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-3">
              <span className="text-xl font-black tracking-tight italic">Schedule a Call with a Finance Specialist</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}