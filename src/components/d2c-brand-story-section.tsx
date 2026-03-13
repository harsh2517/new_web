import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, ShoppingBag, AlertCircle, Zap, ArrowRight, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function D2cBrandStorySection() {
  const storyImage = PlaceHolderImages.find(
    (img) => img.id === 'd2c-brand-story'
  );

  const crisisPoints = [
    'Revenue from 5+ channels (Instagram, Website, Marketplace, WhatsApp orders, Retail pop-ups)',
    '₹42L in unreconciled payment gateway settlements',
    'Mixed personal and business expenses',
    'Zero visibility into product-level profitability',
    'Return (RTO) processing of INR 13.63 lakhs creating accounting nightmares',
    'Tax filing deadlines missed due to incomplete data',
  ];

  const solutionPoints = [
    'Week 1: Integrated all sales channels with the accounting platform.',
    'Week 2: Reconciled 3,847 transactions across payment gateways, marketplaces, COD and bank accounts',
    'Week 3: Built SKU-level profitability tracker with real-time margins',
    'Week 4: Automated GST & Tax compliance and expense categorization',
  ];

  const resultsPoints = [
    'Discovered 3 product lines were loss-making — discontinued them & boosted margins by 18%',
    'Identified ₹6.8L in unclaimed input tax credits',
    'Real-time profitability dashboard — know margins on every order',
    'Monthly close reduced from 3 weeks to 6 days',
    'Clean books enabled ₹35L credit line from Razorpay Capital',
  ];

  return (
    <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-card p-4 sm:p-8 md:p-14 shadow-2xl border relative overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-80 w-80 rounded-full bg-primary/5 blur-[100px]" />
      
      {/* Section Header */}
      <div className="mb-16 text-center relative z-10">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-inner border border-primary/20">
          <ShoppingBag className="h-6 w-6" />
        </div>
        <h3 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1] max-w-4xl mx-auto">
          From Spreadsheets to <span className="text-primary italic">Real-Time Profitability</span>
        </h3>
        <p className="mt-4 text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">A D2C Brand's Finance Transformation</p>
      </div>

      <div className="grid gap-16 lg:grid-cols-12 lg:items-start relative z-10">
        
        {/* Left Side: Image & Crisis (Col-5) */}
        <div className="lg:col-span-5 space-y-10">
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
            <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-background p-4 rounded-2xl shadow-xl border">
              <div className="bg-primary/10 p-2 rounded-lg">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-muted-foreground">Margins Boosted</p>
                <p className="text-xl font-black text-foreground">18% UP</p>
              </div>
            </div>
          </div>

          <div className="bg-destructive/5 rounded-3xl p-8 border border-destructive/10">
            <h4 className="flex items-center gap-2 font-bold text-lg text-destructive uppercase tracking-widest mb-6">
              <AlertCircle className="h-5 w-5" /> The Crisis
            </h4>
            <ul className="space-y-4">
              {crisisPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-sm font-medium text-muted-foreground leading-relaxed">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/50" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Problem, Solution & Results (Col-7) */}
        <div className="lg:col-span-7 space-y-12">
          
          {/* Problem Block */}
          <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-1.5 before:bg-primary before:rounded-full">
            <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-2">The Problem</h4>
            <p className="text-xl font-semibold leading-relaxed text-foreground/90">
              A trendy fashion D2C brand was scaling fast across Instagram and their website but their accounting was stuck in spreadsheets. <span className="text-muted-foreground italic">They had no idea if they were profitable.</span>
            </p>
          </div>

          {/* Solution Timeline */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-primary flex items-center gap-2">
              <Zap className="h-4 w-4 fill-primary/20" /> The 4-Week Sprint
            </h4>
            <div className="grid gap-3">
              {solutionPoints.map((point, index) => (
                <div key={index} className="group flex items-center gap-4 rounded-2xl border bg-muted/20 p-4 transition-all hover:bg-muted/40 hover:border-primary/30">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-background font-black text-primary shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {index + 1}
                  </div>
                  <p className="text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* High-Impact Results Card */}
          <div className="rounded-[2.5rem] bg-foreground p-1 shadow-2xl">
            <div className="bg-foreground rounded-[2.4rem] p-8 md:p-10 text-background">
              <h4 className="font-black text-2xl mb-8 flex items-center gap-3 underline decoration-primary decoration-4 underline-offset-8">
                The Results
              </h4>
              <ul className="grid gap-5">
                {resultsPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary mt-0.5">
                      <Check className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-sm md:text-base font-bold tracking-tight leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Link to next step or similar */}
      <div className="mt-16 flex justify-center">
         <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest group cursor-default">
           Building the future of D2C Finance <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
         </div>
      </div>
    </div>
  );
}