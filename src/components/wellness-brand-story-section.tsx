import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button, buttonVariants } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Check, ShieldAlert, Sparkles, Activity, CalendarCheck, ArrowRight, Target } from 'lucide-react';
import AttentionButton from './button _animation/page';

export function WellnessBrandStorySection() {
  const storyImage = PlaceHolderImages.find(
    (img) => img.id === 'wellness-brand-story'
  );

  const problemPoints = [
    'Accounts: Inaccurate data, no single line of accounting, multi-ledger bookkeeping with weak audit trails.',
    'GST: Misfilings, incorrect ITC categorization, late GST returns',
    'Inventory: No formal write-downs affecting GST/taxability',
    'Investor readiness: Inconsistent financials hindering due diligence',
  ];

  const crisisPoints = [
    'Ledger discrepancies, delayed GST filings, and uncertain ITC claims',
    'Untracked returns impacting GST liability and revenue figures',
    'Income Tax: Late filing of TDS returns, incorrect TDS deductions and demands on account of error in TDS',
    'ROC: Company filings were not done periodically and many returns were missed which resulted in Scrutiny by ROC.',
  ];

  const solutionPoints = [
    'Month 1-2: Implement centralized financial platform integrating accounting, Income Tax and GST compliance calendars',
    'Month 3: Reconcile payables/receivables; establish robust AP/AR workflows',
    'Month 4: Automate COGS/inventory valuation with tax-aware rules; document obsolescence policy',
    'Month 5: Investor-ready tax/GST dashboards and centralized compliance calendar',
  ];

  const resultsPoints = [
    '100% GST compliance with timely filings; ITC reconciliation near-perfect',
    'Investor due diligence streamlined with clear tax positions and cash flow data',
    'Ongoing compliance framework preventing future chaos',
    '110+ hours saved monthly on manual reconciliation and data entry',
    'Timely finalisation of accounts and records.',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Main Card with your requested Border & Shadow Style */}
        <div className="rounded-[2.5rem] bg-[#F8F9FA] p-6 sm:p-10 md:p-16 border border-transparent hover:border-[#FF4500]/20 transition-all duration-300 hover:shadow-2xl relative overflow-hidden group/main">
          
          {/* Header Section */}
          <div className="mb-16 text-center relative z-10">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100 text-[#FF4500]">
              <Activity className="h-7 w-7" />
            </div>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-[#1a1a1a] leading-tight max-w-4xl mx-auto">
              Turning Accounting Chaos into <span className="text-[#FF4500]">Strong Unit Economics</span> in 7 months
            </h3>
            <p className="mt-4 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Wellness Brand Case Study</p>
          </div>

          <div className="grid gap-16 lg:grid-cols-2 relative z-10">
            {/* Left Column: Visuals & Challenges */}
            <div className="space-y-12">
              <div className="relative group/img">
                {storyImage && (
                  <div className="overflow-hidden rounded-[2.5rem] border-4 border-white shadow-xl">
                    <Image
                      src={storyImage.imageUrl}
                      alt={storyImage.description}
                      width={600}
                      height={450}
                      className="object-cover aspect-[4/3] transition-transform duration-500 group-hover/img:scale-105"
                    />
                  </div>
                )}
                
                {/* Float Badge */}
                <div className="absolute -bottom-6 -right-6 flex items-center gap-4 bg-white p-5 rounded-3xl shadow-xl border border-gray-50 transform transition-transform group-hover/img:scale-105">
                  <div className="bg-[#FF4500]/10 p-3 rounded-2xl">
                    <CalendarCheck className="h-8 w-8 text-[#FF4500]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Efficiency Gained</p>
                    <p className="text-xl font-black text-[#1a1a1a]">110+ Hours/Mo</p>
                  </div>
                </div>
              </div>

              {/* Problem & Crisis Cards with Border Style */}
              <div className="grid gap-6">
                <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm transition-all hover:border-[#FF4500]/20">
                  <h4 className="font-black text-sm text-[#FF4500] uppercase tracking-widest mb-5 flex items-center gap-2">
                    The Problem
                  </h4>
                  <ul className="space-y-4">
                    {problemPoints.map((point, index) => (
                      <li key={index} className="text-sm font-semibold text-gray-500 flex gap-3 leading-relaxed">
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF4500]/40" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50/50 p-8 rounded-[2rem] border border-red-100/50 shadow-sm transition-all hover:border-red-200">
                  <h4 className="font-black text-sm text-red-500 uppercase tracking-widest mb-5 flex items-center gap-2">
                    <ShieldAlert className="h-5 w-5" /> The Crisis
                  </h4>
                  <ul className="space-y-4">
                    {crisisPoints.map((point, index) => (
                      <li key={index} className="text-sm font-semibold text-gray-500 flex gap-3 leading-relaxed italic">
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/40" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Solution & Results */}
            <div className="space-y-12">
              {/* Solution Timeline with Bordered Steps */}
              <div className="space-y-8">
                <h4 className="font-black text-xs uppercase tracking-[0.2em] text-[#FF4500] flex items-center gap-3">
                  <div className="p-2 bg-orange-50 rounded-lg"><Sparkles className="h-4 w-4 fill-[#FF4500] text-[#FF4500]" /></div>
                  The 7-Month Transformation
                </h4>
                <div className="relative space-y-6">
                  {solutionPoints.map((point, index) => (
                    <div key={index} className="relative pl-12 group/step">
                      <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-xl border border-gray-200 bg-white text-[10px] font-black text-[#FF4500] shadow-sm group-hover/step:bg-[#FF4500] group-hover/step:text-white group-hover/step:border-[#FF4500] transition-all">
                        0{index + 1}
                      </div>
                      <p className="text-[15px] font-bold text-gray-600 group-hover:text-[#1a1a1a] transition-colors leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact/Results Section - Dark Mode style from screenshots */}
              <div className="rounded-[2.5rem] bg-[#1a1a1a] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden group/res">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover/res:scale-110 transition-transform duration-1000">
                   <Target className="w-24 h-24" />
                </div>
                <h4 className="font-black text-2xl mb-8 flex items-center gap-3">
                  <div className="h-8 w-1 bg-[#FF4500]" />
                  The Results
                </h4>
                <ul className="grid gap-5">
                  {resultsPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF4500] shadow-lg shadow-[#FF4500]/20">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-[15px] font-bold tracking-tight text-gray-200">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* High-Conversion CTA */}
          <div className="mt-20 text-center relative z-10">
            <AttentionButton>
            <Link
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0czVvey0mCJa39b594OhprJIIBTdV2h18U9Q3_xzSugo1qfMzTCrmN3rorBREzUeNYGlxnZ7Gq?gv=true"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants(),
                "group h-auto rounded-full bg-[#FF4500] px-10 py-6 text-white shadow-[0_20px_50px_-10px_rgba(255,69,0,0.4)] transition-all hover:scale-[1.05] hover:bg-[#FF4500]/90 border-0"
              )}
            >
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-3">
                  <span className="text-xl md:text-2xl font-black tracking-tight uppercase">Book Strategy Call</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </div>
                {/* <span className="text-[10px] font-black opacity-90 uppercase tracking-widest bg-black/10 px-4 py-1 rounded-full">
                  Only 4 Slots Left, Book Now
                </span> */}
              </div>
            </Link>
            </AttentionButton>
            <p className="mt-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
              Free 30 mins Strategy session
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}