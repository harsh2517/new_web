import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button, buttonVariants } from './ui/button';
import { CheckCircle2, ChevronRight, Settings2, BarChart3, LineChart, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const processSteps = [
  {
    title: 'Step 1. Setup & Launch',
    value: 'item-1',
    icon: <Settings2 className="h-5 w-5" />,
    content: [
      {
        title: 'Chart of Accounts Setup',
        description: 'Establish a customized chart of accounts for organized tracking.',
      },
      {
        title: 'Data Handover',
        description: 'Secure all necessary financial data from the client virtually.',
      },
      {
        title: 'Automated Compliance Calendar',
        description: 'Prepare an Automated & Customized Compliance Calendar',
      },
      {
        title: 'Data Flow Setup',
        description: 'Define how financial data will be collected, managed and reported.',
      },
      {
        title: 'Process Analysis',
        description: 'Review and understand existing processes to optimize them.',
      },
      {
        title: 'Bookkeeping Initiation',
        description: 'Begin regular bookkeeping processes.',
      },
    ],
  },
  {
    title: 'Step 2. Fine Tuning',
    value: 'item-2',
    icon: <BarChart3 className="h-5 w-5" />,
    content: [
      {
        title: 'Bookkeeping & Reconciliation',
        description: 'Maintain records and reconcile accounts for accuracy. Record transactions from all sources.',
      },
      {
        title: 'Tax Calculation & Filing',
        description: 'Calculate and file taxes periodically such as GST returns, TDS returns, Income Tax Filings, ROC Filings.',
      },
      {
        title: 'Monthly Accounts',
        description: 'Accounts are closed & prepared monthly to avoid any backlog.',
      },
    ],
  },
  {
    title: 'Step 3. Strategy & Scaling',
    value: 'item-3',
    icon: <LineChart className="h-5 w-5" />,
    content: [
      {
        title: 'Audit Ready',
        description: 'Accounts are audit ready with all documents.',
      },
      {
        title: 'Monthly Review Meeting',
        description: 'Review meeting with Founder & finance team.',
      },
      {
        title: 'Final MIS Report',
        description: 'Present the finalized MIS report providing actionable insights for decision-making.',
      },
    ],
  },
];

export function ProcessSection() {
  return (
    <section className="w-full bg-[#fdfdfd] py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-primary/5 blur-[120px] rounded-full opacity-50" />
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] bg-orange-200/20 blur-[100px] rounded-full opacity-50" />

      <div className="container mx-auto max-w-5xl px-6 relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-primary/20">
            Our Workflow
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 leading-tight">
            Our Process Of <span className="text-primary italic">Work</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            A clear path from financial chaos to strategic clarity.
          </p>
        </div>

        <Accordion type="single" defaultValue="item-1" collapsible className="w-full space-y-6">
          {processSteps.map((step, idx) => (
            <AccordionItem
              key={step.value}
              value={step.value}
              className="group rounded-[2rem] border bg-card/50 backdrop-blur-sm px-2 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-8 text-xl md:text-2xl font-black text-slate-800 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-500 group-data-[state=open]:bg-primary group-data-[state=open]:text-white shadow-inner transition-all duration-500">
                    {step.icon}
                  </div>
                  <span className="text-left tracking-tight">{step.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8 pt-2">
                <div className="grid gap-4 md:grid-cols-2 lg:gap-6 border-l-2 border-primary/10 ml-6 pl-10 relative">
                    {/* Visual Connector Dot */}
                    <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                  
                  {step.content.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-2xl transition-colors hover:bg-slate-50 group/item">
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1 group-hover/item:text-primary transition-colors italic">{item.title}</h4>
                        <p className="text-sm font-medium text-slate-500 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-20 text-center">
          <Link
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0czVvey0mCJa39b594OhprJIIBTdV2h18U9Q3_xzSugo1qfMzTCrmN3rorBREzUeNYGlxnZ7Gq?gv=true"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                buttonVariants({size: "lg"}), 
                "group h-auto rounded-[2rem] bg-slate-900 px-12 py-6 text-white shadow-2xl transition-all hover:scale-[1.05] hover:bg-slate-800"
            )}>
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-start text-left border-r border-white/20 pr-6">
                <span className="text-xl font-black tracking-tight text-primary">Get Free From Chaos</span>
                <span className="text-xs font-bold uppercase tracking-widest text-white/60">Book Your Free Call</span>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center group-hover:translate-x-2 transition-transform shadow-[0_0_20px_rgba(var(--primary),0.5)]">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}