import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, AlertCircle, TrendingUp, Landmark, ShieldCheck, ArrowRight, PackageSearch, Target } from 'lucide-react';
import { buttonVariants } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import AttentionButton from './button _animation/page';

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
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Main Card Container with requested Border & Shadow Style */}
        <div className="rounded-[2.5rem] bg-[#F8F9FA] p-6 sm:p-10 md:p-14 border border-transparent hover:border-[#FF4500]/20 transition-all duration-300 hover:shadow-2xl relative overflow-hidden group/main">
          
          {/* Subtle Background Icon */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 opacity-[0.03] rotate-12 pointer-events-none">
            <Landmark size={400} className="text-[#FF4500]" />
          </div>

          {/* Header Section */}
          <div className="mb-16 text-center relative z-10">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100 text-[#FF4500]">
              <PackageSearch className="h-7 w-7" />
            </div>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-[#1a1a1a] leading-tight max-w-5xl mx-auto">
              From ₹18L COD to <span className="text-[#FF4500]">Cash Realization</span>: Automated Reconciliation & Recovery
            </h3>
            <p className="mt-4 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Logistics & Finance Case Study</p>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 relative z-10">
            {/* Left Column: Visuals & Crisis */}
            <div className="lg:col-span-5 space-y-10">
              <div className="relative group/img">
                {storyImage && (
                  <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-xl">
                    <Image
                      src={storyImage.imageUrl}
                      alt={storyImage.description}
                      width={600}
                      height={450}
                      className="object-cover aspect-[4/3] transition-transform duration-500 group-hover/img:scale-105"
                    />
                  </div>
                )}
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-4 flex items-center gap-4 bg-white p-5 rounded-3xl shadow-xl border border-gray-50 transform transition-transform group-hover/img:scale-105">
                  <div className="bg-[#FF4500]/10 p-3 rounded-2xl">
                    <TrendingUp className="h-6 w-6 text-[#FF4500]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Penalty Avoided</p>
                    <p className="text-xl font-black text-[#1a1a1a]">₹4.8L SAVED</p>
                  </div>
                </div>
              </div>

              {/* Crisis Card with Border Style */}
              <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm transition-all hover:border-red-100">
                <h4 className="flex items-center gap-2 font-black text-sm text-red-500 uppercase tracking-widest mb-6">
                  <AlertCircle className="h-5 w-5" /> The Crisis
                </h4>
                <ul className="space-y-4">
                  {crisisPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm font-semibold text-gray-500 leading-relaxed">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-300" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Problem, Solution & Impact */}
            <div className="lg:col-span-7 space-y-12">
              {/* Problem Statement */}
              <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-1.5 before:bg-[#FF4500] before:rounded-full">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#FF4500] mb-2">The Problem</h4>
                <p className="text-xl font-bold leading-relaxed text-[#1a1a1a]">
                  This home decor brand worked with 15+ vendors but had no system to track COD settlements, returns, or GST. <span className="text-gray-400 italic font-medium">Tax notices piled up.</span>
                </p>
              </div>

              {/* Solution Roadmap with Bordered Items */}
              <div className="space-y-6">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#FF4500]">The Solution Roadmap</h4>
                <div className="grid gap-3">
                  {solutionPoints.map((point, index) => (
                    <div key={index} className="group/item flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 transition-all hover:border-[#FF4500]/30 hover:shadow-md">
                      <div className="h-10 w-10 shrink-0 rounded-xl bg-gray-50 flex items-center justify-center text-[10px] font-black text-[#FF4500] border border-gray-100 group-hover/item:bg-[#FF4500] group-hover/item:text-white group-hover/item:border-[#FF4500] transition-all">
                        0{index + 1}
                      </div>
                      <p className="text-sm font-bold text-gray-600 group-hover/item:text-[#1a1a1a] transition-colors">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results Card - Dark Mode Style */}
              <div className="rounded-[2.5rem] bg-[#1a1a1a] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden group/res">
                <div className="absolute bottom-0 right-0 p-8 opacity-5 group-hover/res:scale-110 transition-transform duration-1000">
                   <ShieldCheck size={120} />
                </div>
                <h4 className="font-black text-2xl mb-8 flex items-center gap-3">
                  <div className="h-8 w-1 bg-[#FF4500]" />
                  The Results
                </h4>
                <ul className="grid gap-5">
                  {resultsPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF4500] mt-0.5 shadow-lg shadow-[#FF4500]/20">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-[15px] font-bold tracking-tight text-gray-200">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Modern CTA */}
          <div className="mt-20 text-center relative z-10">
            <AttentionButton>
            <Link
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0czVvey0mCJa39b594OhprJIIBTdV2h18U9Q3_xzSugo1qfMzTCrmN3rorBREzUeNYGlxnZ7Gq?gv=true"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants(),
                "group h-auto rounded-full bg-[#FF4500] px-10 py-6 text-white shadow-[0_20px_50px_-15px_rgba(255,69,0,0.4)] transition-all hover:scale-[1.05] hover:bg-[#FF4500]/90 border-0"
              )}
            >
              <div className="flex items-center gap-8">
                <span className="text-xl font-black tracking-tight uppercase">Book Strategy Call</span>
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                  <ArrowRight className="h-5 w-5" />
                </div>
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