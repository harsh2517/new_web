import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, AlertCircle, Sparkles, Rocket, CalendarDays } from 'lucide-react';
import { buttonVariants } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function RealStoriesSection() {
  const storyImage = PlaceHolderImages.find(
    (img) => img.id === 'saas-story-handshake'
  );

  const crisisPoints = [
    '15 months of data scattered across Excel and all other payment platforms.',
    '₹8.03 Cr+ unreconciled bank discrepancies & duplicate transactions.',
    '4 weeks until funding deadline & due diligence.',
  ];

  const solutionPoints = [
    { week: 'Week 1', text: 'Integrated all systems into one platform' },
    { week: 'Week 2-3', text: 'Reconciled 5,826 transactions' },
    { week: 'Week 4', text: 'Built Audit ready Financial Statements' },
  ];

  const resultsPoints = [
    '₹55 Cr funding closed successfully',
    'Passed audit with zero material issues',
    'Monthly close: 20+ days → 5 days',
  ];

  return (
    <div className="mx-auto max-w-6xl rounded-[2rem] bg-card p-4 sm:p-8 md:p-12 shadow-2xl border relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      
      {/* Header */}
      <div className="mb-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="h-3 w-3" />
          Success Story
        </div>
        <h3 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
          SaaS Company – From <span className="text-primary">Chaos to Clarity</span> in 28 Days
        </h3>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:items-center relative z-10">
        {/* Left Side: Visuals & Crisis */}
        <div className="space-y-8">
          <div className="relative group">
            {storyImage && (
              <Image
                src={storyImage.imageUrl}
                alt={storyImage.description}
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl border group-hover:scale-[1.01] transition-transform duration-500"
                data-ai-hint={storyImage.imageHint}
              />
            )}
            <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-2xl shadow-xl border hidden md:block">
              <div className="text-3xl font-black text-primary italic">28</div>
              <div className="text-[10px] uppercase font-bold tracking-tighter text-muted-foreground">Days Turnaround</div>
            </div>
          </div>

          <div className="bg-destructive/5 rounded-2xl p-6 border border-destructive/10">
            <div className="flex items-center gap-2 mb-4 text-destructive">
              <AlertCircle className="h-5 w-5" />
              <h4 className="font-bold uppercase tracking-wide">The Crisis</h4>
            </div>
            <ul className="space-y-3">
              {crisisPoints.map((point, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-destructive mt-1.5 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Process & Results */}
        <div className="space-y-10">
          {/* Problem Intro */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary">The Problem</h4>
            <p className="text-xl font-medium leading-relaxed">
              At ₹5 crore ARR, investor demanded audited financials for Series A. <span className="text-muted-foreground italic">Reality? Books were chaos.</span>
            </p>
          </div>

          {/* Solution Timeline */}
          <div className="space-y-4">
             <h4 className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2">
               <Rocket className="h-4 w-4" /> The Solution
             </h4>
             <div className="space-y-0">
               {solutionPoints.map((point, index) => (
                 <div key={index} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="h-8 w-8 rounded-full border-2 border-primary flex items-center justify-center text-[10px] font-bold bg-card">
                        {index + 1}
                      </div>
                      {index !== solutionPoints.length - 1 && <div className="w-0.5 grow bg-primary/20 my-1" />}
                    </div>
                    <div className="pb-6">
                      <span className="text-xs font-bold text-primary/60 uppercase">{point.week}</span>
                      <p className="font-semibold text-foreground leading-none mt-1">{point.text}</p>
                    </div>
                 </div>
               ))}
             </div>
          </div>

          {/* Results Block */}
          <div className="bg-primary p-6 rounded-2xl shadow-lg shadow-primary/20">
            <h4 className="font-bold text-primary-foreground mb-4 flex items-center gap-2">
              <Check className="h-5 w-5" /> The Results
            </h4>
            <ul className="grid gap-3">
              {resultsPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3 text-primary-foreground/90 font-bold text-sm bg-white/10 p-3 rounded-lg border border-white/10">
                  <Check className="h-4 w-4 shrink-0 text-white" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Modernized CTA */}
      <div className="mt-16 flex justify-center relative z-10">
        <Link
          href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0czVvey0mCJa39b594OhprJIIBTdV2h18U9Q3_xzSugo1qfMzTCrmN3rorBREzUeNYGlxnZ7Gq?gv=true"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants(),
            "h-auto rounded-2xl bg-primary px-10 py-6 text-primary-foreground shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1"
          )}
        >
          <div className="flex items-center gap-5">
            <div className="p-3 bg-white/20 rounded-xl">
              <CalendarDays className="h-8 w-8" />
            </div>
            <div className="text-left">
              <span className="block text-2xl font-black leading-none">Book your 1:1 Strategy Call</span>
              <span className="text-sm font-medium opacity-80 mt-1 block">Let's Build Finance System Together</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}