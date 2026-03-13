import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, AlertCircle, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { buttonVariants } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function ItAgencyStorySection() {
  const storyImage = PlaceHolderImages.find(
    (img) => img.id === 'it-agency-story'
  );

  const crisisPoints = [
    'Financials arrived late every month, full of errors',
    'No single source of truth across tax, payroll, and books',
    'Coordinating between three vendors was a nightmare',
    'Cost of chaos was ₹11.85 lakhs in just 6 months.',
    'Mistakes were costing time, money, and credibility',
    'No real-time visibility into financial health',
  ];

  const solutionPoints = [
    {
      title: 'Unified System:',
      description: 'Consolidated all accounting under one virtual accounting platform',
      icon: <Zap className="h-5 w-5" />,
    },
    {
      title: 'Automation:',
      description: 'Automated payroll processing, GST filing, and financial reporting',
      icon: <Zap className="h-5 w-5" />,
    },
    {
      title: 'Integration:',
      description: 'Connected all financial tools into a single dashboard',
      icon: <Zap className="h-5 w-5" />,
    },
    {
      title: 'Process Redesign:',
      description: 'Established standardized workflows and monthly close procedures',
      icon: <Zap className="h-5 w-5" />,
    }
  ];

  const resultsPoints = [
    '10X improvement in financial accuracy',
    '40% reduction in annual accounting costs',
    'On-time, error-free financials every month',
    'Zero penalties or late fees with recovery of additional GST paid',
    'Single point of contact for all accounting needs',
  ];

  return (
    <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-card/50 backdrop-blur-md p-6 sm:p-10 md:p-16 shadow-2xl border relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-[100px]" />
      
      {/* Header Tag & Title */}
      <div className="mb-12 text-center relative z-10">
        <div className="mx-auto mb-4 w-fit rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary border border-primary/20">
          Case Study
        </div>
        <h3 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
          IT Agency - 10X Accuracy + <span className="text-primary">40% Cost Savings</span>
        </h3>
        <p className="mt-4 text-lg text-muted-foreground font-medium">With Unified Accounting</p>
      </div>

      <div className="grid gap-16 lg:grid-cols-12 relative z-10">
        {/* Left Side: Visuals & Crisis (Col-5) */}
        <div className="lg:col-span-5 space-y-10">
          <div className="relative">
            {storyImage && (
              <Image
                src={storyImage.imageUrl}
                alt={storyImage.description}
                width={600}
                height={450}
                className="rounded-3xl shadow-2xl border-4 border-background object-cover aspect-[4/3]"
              />
            )}
            <div className="absolute -bottom-6 -right-6 hidden lg:flex h-28 w-28 items-center justify-center rounded-2xl bg-primary shadow-xl rotate-3">
              <ShieldCheck className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="flex items-center gap-2 font-bold text-xl text-destructive uppercase tracking-wide">
              <AlertCircle className="h-5 w-5" /> The Crisis
            </h4>
            <div className="grid gap-3">
              {crisisPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3 rounded-xl bg-destructive/5 p-3 border border-destructive/10">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                  <p className="text-sm font-medium text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Problem, Solution & Results (Col-7) */}
        <div className="lg:col-span-7 space-y-12">
          {/* Problem */}
          <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-primary/30 before:rounded-full">
            <h4 className="font-bold text-sm uppercase tracking-widest text-primary mb-2">The Problem</h4>
            <p className="text-xl font-semibold leading-relaxed text-foreground/90">
              This fast-growing IT agency was juggling three different accountants for tax, payroll, and bookkeeping. <span className="text-primary italic font-bold">The result? Financial chaos.</span>
            </p>
          </div>

          {/* Solution Grid */}
          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest text-primary">The Solution</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {solutionPoints.map((point, index) => (
                <div key={index} className="group rounded-2xl border bg-background/50 p-5 hover:bg-primary hover:border-primary transition-all duration-300">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-white/20 group-hover:text-white transition-colors">
                    {point.icon}
                  </div>
                  <h5 className="font-bold text-foreground group-hover:text-white mb-1 transition-colors">{point.title}</h5>
                  <p className="text-xs leading-relaxed text-muted-foreground group-hover:text-white/80 transition-colors">{point.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Results Highlight */}
          <div className="rounded-[2rem] bg-foreground p-8 text-background shadow-xl">
            <h4 className="font-bold text-xl mb-6 flex items-center gap-2">
              <Check className="h-6 w-6 text-primary" /> The Results
            </h4>
            <ul className="space-y-4">
              {resultsPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-4 border-b border-background/10 pb-3 last:border-0 last:pb-0">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-bold tracking-tight">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Modern CTA */}
      <div className="mt-20 text-center">
        <Link
          href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0czVvey0mCJa39b594OhprJIIBTdV2h18U9Q3_xzSugo1qfMzTCrmN3rorBREzUeNYGlxnZ7Gq?gv=true"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants(),
            "group h-auto rounded-full bg-primary px-10 py-6 text-primary-foreground shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-2"
          )}
        >
          <div className="flex items-center gap-4">
            <span className="text-2xl font-black">Make Your Startup Investor-Ready</span>
            <div className="rounded-full bg-white/20 p-2 group-hover:translate-x-2 transition-transform">
              <ArrowRight className="h-6 w-6" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}