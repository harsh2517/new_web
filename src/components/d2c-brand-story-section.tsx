import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, ShoppingBag, AlertCircle, Zap, ArrowRight, BarChart3, Target, Rocket } from 'lucide-react';
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
    { title: 'Week 1', text: 'Integrated all sales channels with the accounting platform.', icon: <Target className="w-4 h-4" /> },
    { title: 'Week 2', text: 'Reconciled 3,847 transactions across payment gateways, marketplaces, COD and bank accounts', icon: <Zap className="w-4 h-4" /> },
    { title: 'Week 3', text: 'Built SKU-level profitability tracker with real-time margins', icon: <BarChart3 className="w-4 h-4" /> },
    { title: 'Week 4', text: 'Automated GST & Tax compliance and expense categorization', icon: <Rocket className="w-4 h-4" /> },
  ];

  const resultsPoints = [
    'Discovered 3 product lines were loss-making — discontinued them & boosted margins by 18%',
    'Identified ₹6.8L in unclaimed input tax credits',
    'Real-time profitability dashboard — know margins on every order',
    'Monthly close reduced from 3 weeks to 6 days',
    'Clean books enabled ₹35L credit line from Razorpay Capital',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Main Card Container with your requested Border & Shadow Style */}
        <div className="rounded-[2.5rem] bg-[#F8F9FA] p-6 sm:p-10 md:p-14 border border-transparent hover:border-[#FF4500]/20 transition-all duration-300 hover:shadow-2xl relative overflow-hidden group/main">
          
          {/* Header Section */}
          <div className="mb-16 text-center relative z-10">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100 text-[#FF4500]">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-[#1a1a1a] leading-tight">
              From Spreadsheets to <span className="text-[#FF4500]">Real-Time Profitability</span>
            </h3>
            <p className="mt-4 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">D2C Transformation Case Study</p>
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
                
                {/* Float Badge */}
                <div className="absolute -bottom-6 -left-6 flex items-center gap-3 bg-white p-4 rounded-2xl shadow-xl border border-gray-50">
                  <div className="bg-[#FF4500]/10 p-2 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-[#FF4500]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase">Margins</p>
                    <p className="text-xl font-black text-[#1a1a1a]">18% UP</p>
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

            {/* Right Column: Solution & Results */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Problem Statement */}
              <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-1.5 before:bg-[#FF4500] before:rounded-full">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#FF4500] mb-2">The Problem</h4>
                <p className="text-xl font-bold leading-relaxed text-[#1a1a1a]">
                  Scaling fast across Instagram and their website but accounting was stuck in spreadsheets. <span className="text-gray-400 italic font-medium">They had no visibility on actual profit.</span>
                </p>
              </div>

              {/* Timeline Sprint with Bordered Cards */}
              <div className="space-y-6">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#FF4500] flex items-center gap-2">
                  <Zap className="h-4 w-4 fill-[#FF4500]" /> The 4-Week Sprint
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {solutionPoints.map((point, index) => (
                    <div key={index} className="group/item flex flex-col gap-2 rounded-2xl border border-gray-100 bg-white p-5 transition-all hover:border-[#FF4500]/30 hover:shadow-md">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black text-[#FF4500]">{point.title}</span>
                        <div className="text-gray-300 group-hover/item:text-[#FF4500] transition-colors">{point.icon}</div>
                      </div>
                      <p className="text-sm font-bold text-gray-600 leading-snug">{point.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results Section - Dark Mode style from screenshots */}
              <div className="rounded-[2.5rem] bg-[#1a1a1a] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden group/res">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover/res:scale-110 transition-transform duration-700">
                   <Target className="w-24 h-24" />
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

          {/* Footer Link Style */}
          {/* <div className="mt-16 flex justify-center">
             <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest group cursor-default">
               Building the future of D2C Finance <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-[#FF4500]" />
             </div>
          </div> */}

        </div>
      </div>
    </section>
  );
}