import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, AlertTriangle, History, ShieldCheck, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function StartupFounderStorySection() {
  const storyImage = PlaceHolderImages.find(
    (img) => img.id === 'startup-founder-story'
  );

  const crisisPoints = [
    '3 years of missing books and unfiled returns',
    'Tax notices threatening business operations',
    'No credible financials for authorities',
    'Growth plans on hold',
  ];

  const solutionPoints = [
    {
      title: 'Week 1-2:',
      description: 'Rebuilt accounts, reconciled banks, compiled missing docs',
    },
    {
      title: 'Week 3-4:',
      description: 'Filed all returns and implemented controls',
    }
  ];

  const resultsPoints = [
    'Full compliance restored',
    'Penalties reduced to INR 2.34 lakhs.',
    'Sustainable systems established',
  ];

  return (
    <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border bg-card shadow-2xl">
      <div className="grid lg:grid-cols-12">
        
        {/* Left Column: Visuals & Crisis (Darker Tone) */}
        <div className="lg:col-span-5 bg-muted/30 p-8 md:p-12 border-b lg:border-b-0 lg:border-r">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-destructive border border-destructive/20">
            <AlertTriangle className="h-3.5 w-3.5" /> Urgent Recovery
          </div>
          
          <h3 className="text-3xl font-black tracking-tight text-foreground mb-6 leading-tight">
            Startup Founder – 3-Year Backlog Fixed in <span className="text-primary">25 Days</span>
          </h3>

          <div className="relative mb-10 group">
            {storyImage && (
              <Image
                src={storyImage.imageUrl}
                alt={storyImage.description}
                width={600}
                height={400}
                className="rounded-2xl shadow-xl grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 object-cover aspect-video"
                data-ai-hint={storyImage.imageHint}
              />
            )}
            <div className="absolute -bottom-4 -right-4 bg-background p-4 rounded-xl shadow-lg border">
              <History className="h-8 w-8 text-primary animate-pulse" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground">The Crisis</h4>
            <div className="grid gap-2">
              {crisisPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3 rounded-lg bg-background/50 p-3 border border-border/50 text-sm font-medium text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-destructive" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Problem, Solution & Results */}
        <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 space-y-12 bg-gradient-to-br from-card to-background">
          
          {/* Problem Statement */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm uppercase tracking-widest text-primary">The Problem</h4>
            <p className="text-xl md:text-2xl font-semibold leading-snug text-foreground">
              A startup founder ignored books for three years—until the GST & Income Tax department sent a notice of <span className="text-destructive font-extrabold italic">INR 82.36 Lakhs.</span> In 25 days, they went from "non-compliant" to "audit-ready."
            </p>
          </div>

          {/* Solution Timeline */}
          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest text-primary">The 25-Day Transformation</h4>
            <div className="relative space-y-8 before:absolute before:left-[19px] before:top-2 before:h-[calc(100%-16px)] before:w-0.5 before:bg-primary/20">
              {solutionPoints.map((point, index) => (
                <div key={index} className="relative pl-14">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background text-primary font-bold shadow-sm">
                    {index + 1}
                  </div>
                  <h5 className="font-bold text-foreground text-lg leading-none">{point.title}</h5>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="rounded-3xl bg-primary p-1 text-primary-foreground shadow-2xl shadow-primary/20 transition-transform hover:scale-[1.01]">
            <div className="rounded-[1.4rem] border border-white/20 bg-primary p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="h-8 w-8 text-white" />
                <h4 className="text-2xl font-black uppercase tracking-tight">The Results</h4>
              </div>
              <div className="grid gap-4">
                {resultsPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-primary">
                      {index === 1 ? <TrendingDown className="h-4 w-4" /> : <Check className="h-4 w-4" />}
                    </div>
                    <span className="font-bold md:text-lg tracking-tight leading-none">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}