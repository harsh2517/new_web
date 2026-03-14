import Image from 'next/image';
import { 
 Users, 
 Building, 
 Home, 
 Briefcase 
} from 'lucide-react';

const targets = [
 { title: 'Realtors and Brokers', icon: <Users className="h-10 w-10 text-gray-700" /> },
 { title: 'Property Management Firms', icon: <Building className="h-10 w-10 text-gray-700" /> },
 { title: 'Real Estate Investment Firms', icon: <Home className="h-10 w-10 text-gray-700" /> },
 { title: 'Rental Property Owners', icon: <Briefcase className="h-10 w-10 text-gray-700" /> },
];

const features = [
 "Commission tracking and agent payouts",
 "Property income and expense categorization",
 "Invoicing and rent collection summaries",
 "Monthly profit/loss reports per property",
 "Sales Tax / GST filing",
 "Support for annual tax prep or audits",
 "Books cleanup and catch-up services",
];

export function ItAgencyStorySection() {
 return (
  <section className="py-16 bg-white px-4">
   <div className="container mx-auto max-w-6xl">
    
    {/* --- Who We Help Section --- */}
    <div className="text-center mb-16">
     <h2 className="text-3xl md:text-4xl font-bold mb-10">
      Who <span className="text-[#FF4500]">We Help</span>
     </h2>
     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {targets.map((item, idx) => (
       <div key={idx} className="flex flex-col items-center p-6 rounded-2xl bg-[#F8F9FA] transition-transform hover:scale-105">
        <div className="mb-4">{item.icon}</div>
        <p className="text-[#FF4500] font-semibold text-sm md:text-base leading-tight">
         {item.title}
        </p>
       </div>
      ))}
     </div>
    </div>

    {/* --- What We Handle Section (The Banner Card) --- */}
    <div className="relative overflow-hidden rounded-[2rem] shadow-2xl flex flex-col md:flex-row bg-[#37474F] min-h-[400px]">
     {/* Left Side: Text Content */}
     <div className="w-full md:w-1/2 p-10 md:p-14 text-white space-y-6">
      <h3 className="text-3xl font-bold border-b-2 border-white/20 pb-4 inline-block">
       What We Handle
      </h3>
      <ul className="space-y-3">
       {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-3 text-lg font-medium opacity-90">
         <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
         {feature}
        </li>
       ))}
      </ul>
     </div>

     {/* Right Side: Image */}
     <div className="w-full md:w-1/2 relative h-[300px] md:h-auto">
      <Image
       src="/images/realestate.jpg" // તમારી પાસે જે ઘરની ઈમેજ હોય તેનો પાથ અહીં લખો
       alt="Real Estate Properties"
       fill
       className="object-cover"
      />
     </div>
    </div>

    {/* --- Bottom Text Section --- */}
    <div className="mt-20 text-center max-w-4xl mx-auto space-y-6">
     <h2 className="text-3xl md:text-4xl font-bold">
      <span className="text-[#FF4500]">Tailored Bookkeeping Service</span>{" "}
      <span className="text-[#004D40]">for Real Estate</span>
     </h2>
     
     <p className="text-gray-600 text-lg leading-relaxed font-medium">
      Accountooze understands that every business has unique financial needs. 
      That&apos;s why we offer specialized bookkeeping and accountant support 
      designed specifically for the real estate industry. Our team is trained 
      specifically for real estate related bookkeeping and accounting work.
     </p>

     <button className="mt-4 text-2xl font-black text-black hover:text-[#FF4500] transition-colors uppercase tracking-tight">
      Contact us now to know more.
     </button>
    </div>

   </div>
  </section>
 );
}