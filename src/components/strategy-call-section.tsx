import { CheckCircle2, CalendarDays, ArrowRight, Sparkles, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

export function StrategyCallSection() {
 const points = [
  "During the call, we will identify the specific business problems such as Taxation, Compliances, Bookkeeping & Accounting.",
  "Understand your current business model, challenges, and growth roadblocks",
  "We will clarify the process for onboarding, and discuss the potential scope and timelines for engagement."
 ];

 return (
  <section className="container py-16 md:py-24 relative overflow-hidden">
   {/* Background Decorative Elements */}
   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] bg-primary/5 blur-[120px] rounded-full" />
   
   <div className="mx-auto max-w-4xl relative z-10">
    
    {/* Urgent Top Banner */}
    <div className="group mb-6 relative overflow-hidden rounded-2xl bg-primary p-4 shadow-[0_10px_40px_-10px_rgba(var(--primary),0.5)] transition-transform hover:scale-[1.01]">
     <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
     <div className="flex items-center justify-center gap-3 text-center">
      <Clock className="h-5 w-5 text-primary-foreground animate-pulse" />
      <h2 className="text-lg md:text-xl font-black uppercase tracking-tighter text-primary-foreground">
       Hurry Up !! Limited Slots Available
      </h2>
     </div>
    </div>

    {/* Main Content Card */}
    <div className="rounded-[2.5rem] border bg-card shadow-2xl overflow-hidden">
     
     {/* Card Header */}
     <div className="bg-accent/50 border-b p-6 md:p-8 flex items-center gap-4">
      <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
       <CalendarDays className="h-6 w-6" />
      </div>
      <div>
       <h3 className="text-xl md:text-2xl font-black tracking-tight text-accent-foreground">
        What to Expect in Your Strategy Call
       </h3>
       <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Discovery & Roadmap Session</p>
      </div>
     </div>

     <div className="p-8 md:p-12">
      {/* Strategy Points */}
      <div className="grid gap-6">
       {points.map((point, index) => (
        <div key={index} className="flex items-start gap-4 group">
         <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          <CheckCircle2 className="h-4 w-4" />
         </div>
         <p className="text-base md:text-lg font-medium text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
          {point}
         </p>
        </div>
       ))}
      </div>

      {/* Subtle Reassurance */}
      <div className="mt-10 pt-8 border-t border-border/50">
       <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
         <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
          <Sparkles className="h-5 w-5 text-primary" />
         </div>
         <p className="font-bold text-foreground text-center md:text-left leading-tight">
          No pressure. Just a genuine conversation <br className="hidden md:block" />
          <span className="text-muted-foreground font-medium text-sm text-primary">to see if we&apos;re the right fit.</span>
         </p>
        </div>

        {/* Optional Placeholder for a Button/Link if you have one elsewhere, 
          but here we keep the UI focused on information as per your snippet */}
        {/* <div className="hidden md:flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary/50">
         Step 01: Connect <ArrowRight className="h-3 w-3" />
        </div> */}
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}