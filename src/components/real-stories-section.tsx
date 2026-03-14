import Image from 'next/image';
import { 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Percent, 
  BadgeIndianRupee, 
  Star 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    title: 'CPAs on Team',
    description: 'We have qualified CPAs on our Team who can help you with your books.',
    icon: <ShieldCheck className="h-8 w-8 transition-all duration-500 group-hover:rotate-[360deg]" />,
  },
  {
    title: 'Hassle Free',
    description: 'We offer super-responsive accounting services for small, medium and large scale businesses.',
    icon: <Zap className="h-8 w-8 transition-all duration-500 group-hover:rotate-[360deg]" />,
    highlight: 'Hassle Free'
  },
  {
    title: 'Better Business Decisions',
    description: 'We will provide you with monthly management reports which will help you take better business decisions.',
    icon: <TrendingUp className="h-8 w-8 transition-all duration-500 group-hover:rotate-[360deg]" />,
  },
  {
    title: 'Save Taxes',
    description: 'We help you take the maximum deductions which will result in lowering your taxes.',
    icon: <Percent className="h-8 w-8 transition-all duration-500 group-hover:rotate-[360deg]" />,
  },
  {
    title: 'Lowest Price Guaranteed',
    description: 'Our Pricing is the lowest without compromising on the quality.',
    icon: <BadgeIndianRupee className="h-8 w-8 transition-all duration-500 group-hover:rotate-[360deg]" />,
  },
  {
    title: 'Top-Rated & Trusted service',
    description: 'We are having many happy clients with us who rated us top and trusted bookkeeping service providers.',
    icon: <Star className="h-8 w-8 transition-all duration-500 group-hover:rotate-[360deg]" />,
  },
];

const softwareLogos = [
  { name: 'Buildium', src: '/images/new1.png' },
  { name: 'Yardi', src: '/images/new2.png' },
  { name: 'Quickbooks', src: '/images/new4.png' },
  { name: 'Wave', src: '/images/new5.png' },
  { name: 'Xero', src: '/images/new6.png' },
  { name: 'MYOB', src: '/images/QuickBooks.png' },
];

export function RealStoriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        
        {/* --- Header --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Why choose <span className="text-[#FF4500]">Accountooze?</span>
          </h2>
          <p className="text-gray-600 font-medium leading-relaxed">
            At Accountooze, we don&apos;t just offer bookkeeping — we offer a smarter way to run your business.
            From day one, you get access to handpicked professionals, transparent pricing, 
            and a system that works as an extension of your own business.
          </p>
        </div>

        {/* --- Features Grid with Spin & Hover Animation --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={cn(
                "group p-8 rounded-[1.5rem] bg-[#F8F9FA] border border-transparent transition-all duration-500 ease-out",
                "hover:bg-[#FF4500] hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(255,69,0,0.3)]"
              )}
            >
              <div className="flex items-start gap-4">
                {/* Icon Container with Spin logic */}
                <div className="shrink-0 p-3 bg-white rounded-xl shadow-sm transition-colors duration-500 group-hover:bg-white/20 group-hover:text-white text-black">
                  {feature.icon}
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-lg flex items-center gap-2 transition-colors duration-500 group-hover:text-white">
                    {feature.title}
                    {feature.highlight && (
                      <span className="text-[#FF4500] uppercase text-[10px] tracking-widest font-black border border-[#FF4500] px-1.5 rounded bg-white group-hover:bg-white group-hover:text-[#FF4500]">
                        {feature.highlight}
                      </span>
                    )}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium transition-colors duration-500 group-hover:text-white/90">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Softwares We Use --- */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-12">
            Softwares <span className="text-[#FF4500]">We Use</span>
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {softwareLogos.map((logo, i) => (
              <div key={i} className="relative transition-all duration-500 grayscale hover:grayscale-0 hover:scale-110">
                <div key={i} className="relative transition-all duration-500 grayscale hover:grayscale-0 hover:scale-110">
  <Image
    src={logo.src}
    alt={logo.name}
    width={140}
    height={60}
    className="object-contain"
  />
</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}