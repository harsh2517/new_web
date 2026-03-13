import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, ShieldCheck, Leaf, AlertTriangle, FileCheck, ClipboardList, ArrowRight } from 'lucide-react';

export function OrganicBrandStorySection() {
  const storyImage = PlaceHolderImages.find(
    (img) => img.id === 'organic-brand-story'
  );

  const crisisPoints = [
    'Multiple product categories with different GST rates — filing errors',
    'Interstate sales creating tax complications',
    'Perishable inventory write-offs not properly documented',
    'E-way bill & E-invoice compliance gaps on sales orders',
    'No system for tracking free samples and damaged goods',
    '6 months until mandatory audit – books were incomplete & full of errors.',
  ];

  const solutionPoints = [
    'Step 1: Started with proper accounting & bookkeeping.',
    'Step 2: Categorized all products with correct GST rates and HSN codes',
    'Step 3: Automated e-way bill generation and compliance tracking',
    'Step 4: Filed proper & accurate GST & Tax returns',
    'Step 5: Built complete audit-ready documentation system',
  ];

  const resultsPoints = [
    'Corrected accounts & GST filings – saved ₹3.8L in potential penalties',
    'Proper inventory write-off documentation – reduced taxable income by ₹5.2L',
    'Automated e-way bill compliance — zero penalties',
    'Audit-ready financials delivered 45 days early',
    'Completed Audit in record time of 13 days with no stringent audit observation',
  ];

  return (
    <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-card p-6 sm:p-10 md:p-14 shadow-2xl border relative overflow-hidden">
      {/* Decorative Organic Elements */}
      <div className="absolute top-0 right-0 -z-10 h-64 w-64 bg-primary/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 -z-10 h-40 w-40 bg-primary/10 blur-[80px] rounded-full" />

      {/* Header Section */}
      <div className="mb-14 text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 shadow-sm">
          <Leaf className="h-7 w-7" />
        </div>
        <h3 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.15] max-w-4xl mx-auto">
          The Quiet Victory: Building an <span className="text-primary italic">Audit-Ready Backbone</span> for an Organic Brand
        </h3>
      </div>

      <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
        {/* Left Column: Visuals & Challenges */}
        <div className="space-y-12">
          <div className="relative group">
            {storyImage && (
              <Image
                src={storyImage.imageUrl}
                alt={storyImage.description}
                width={600}
                height={400}
                className="rounded-[2rem] shadow-2xl border-2 transition-all duration-500 group-hover:shadow-primary/20"
                data-ai-hint={storyImage.imageHint}
              />
            )}
            {/* Audit Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-background border p-5 rounded-2xl shadow-xl flex items-center gap-4 group-hover:border-primary transition-colors">
              <div className="bg-primary/10 p-3 rounded-xl">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-muted-foreground tracking-tighter">Audit Completion</p>
                <p className="text-xl font-black text-foreground italic">In 13 Days</p>
              </div>
            </div>
          </div>

          <div className="bg-destructive/5 rounded-3xl p-8 border border-destructive/10 relative overflow-hidden">
            <h4 className="flex items-center gap-2 font-bold text-lg text-destructive uppercase tracking-widest mb-6">
              <AlertTriangle className="h-5 w-5" /> The Crisis
            </h4>
            <ul className="space-y-4">
              {crisisPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-sm font-medium text-muted-foreground leading-relaxed italic">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/50" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Problem, Solution & Results */}
        <div className="space-y-12">
          {/* Problem Header */}
          <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-1.5 before:bg-primary/30 before:rounded-full">
            <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-2">The Problem</h4>
            <p className="text-xl font-semibold leading-relaxed text-foreground/80">
              An organic food brand was scaling through their website and quick commerce but FSSAI compliance and complex tax rules were overwhelming them. <span className="text-primary/70">An audit loomed.</span>
            </p>
          </div>

          {/* Solution Timeline */}
          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-[0.2em] text-primary flex items-center gap-2">
              <ClipboardList className="h-4 w-4" /> The Road to Compliance
            </h4>
            <div className="grid gap-3">
              {solutionPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-4 rounded-xl bg-muted/30 p-4 border border-border/50 hover:border-primary/30 hover:bg-muted/50 transition-all group">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-background font-black text-xs text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    {index + 1}
                  </div>
                  <p className="text-sm font-bold text-muted-foreground group-hover:text-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Results Card */}
          <div className="rounded-[2.5rem] bg-foreground p-1 shadow-2xl transition-transform hover:scale-[1.01]">
            <div className="bg-foreground rounded-[2.4rem] p-8 md:p-10 text-background relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <ShieldCheck size={100} />
               </div>
              <h4 className="font-black text-2xl mb-8 flex items-center gap-3 underline decoration-primary decoration-4 underline-offset-8">
                The Results
              </h4>
              <ul className="grid gap-5">
                {resultsPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary mt-0.5 shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                      <Check className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-sm md:text-base font-bold leading-tight opacity-90 group-hover:opacity-100 transition-opacity italic tracking-tight">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Hint */}
      <div className="mt-16 flex justify-center">
         <div className="flex items-center gap-2 text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em] group cursor-default">
           Building Audit-Ready Legacies <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
         </div>
      </div>
    </div>
  );
}