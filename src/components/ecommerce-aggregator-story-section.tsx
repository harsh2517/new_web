import { Check } from 'lucide-react';

export function EcommerceAggregatorStorySection() {
 const pricingPlans = [
  {
   name: 'Starter',
   price: '$399 / Month',
   features: [
    'Monthly reporting and updation',
    'Transaction Categorization',
    'Receipt Management',
    'Bank Reconciliations',
   ],
  },
  {
   name: 'Growth',
   price: '$699 / Month',
   features: [
    'Weekly reporting and updation',
    'Month end Adjustment Journal entry',
    'Receipt Management',
    'Bank Reconciliation',
    'Bank Disbursements',
   ],
  },
  {
   name: 'Enterprise',
   price: '$999 / Month',
   features: [
    'Daily reporting and updation',
    'AP Management & Disbursements',
    'Complex Accounting Set up',
    'AP / AR Mailbox',
    'Tax Preparation and Filing',
   ],
  },
 ];

 return (
  <section className="py-20 bg-white font-sans">
   <div className="container mx-auto max-w-6xl px-4">
    
    {/* Title */}
    <div className="text-center mb-16 space-y-4">
     <h2 className="text-4xl font-black text-[#1a1a1a]">
      Our <span className="text-[#FF4500]">Pricing Plans</span>
     </h2>
     <div className="h-1.5 w-20 bg-[#FF4500] mx-auto rounded-full" />
    </div>

    {/* Pricing Cards */}
    <div className="grid md:grid-cols-3 gap-8 mb-16">
     {pricingPlans.map((plan, i) => (
      <div 
       key={i} 
       className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
      >
       <div className="text-center mb-8 space-y-2">
        <h3 className="text-2xl font-black text-[#FF4500] uppercase tracking-wider">
         {plan.name}
        </h3>
        <p className="text-4xl font-black text-[#1a1a1a] tracking-tight">
         {plan.price}
        </p>
        <div className="h-1 w-12 bg-[#FF4500] mx-auto mt-4" />
       </div>

       <ul className="space-y-5 mb-10 flex-grow">
        {plan.features.map((feature, idx) => (
         <li key={idx} className="flex items-start gap-3 text-sm font-bold text-gray-600 leading-tight">
          <Check className="h-5 w-5 text-[#FF4500] shrink-0 mt-0.5" />
          {feature}
         </li>
        ))}
       </ul>

       {/* <button className="w-full py-4 rounded-xl bg-gray-50 text-[#1a1a1a] font-black hover:bg-[#FF4500] hover:text-white transition-colors border border-gray-100">
        Get Started
       </button> */}
      </div>
     ))}
    </div>

    {/* Bottom Banner */}
    <div className="text-center space-y-4">
     <p className="text-[#FF4500] text-xl font-black italic">No upfront Set up Cost.</p>
     <p className="text-2xl font-black text-[#1a1a1a]">Simple. Transparent. No Surprises.</p>
    </div>

   </div>
  </section>
 );
}