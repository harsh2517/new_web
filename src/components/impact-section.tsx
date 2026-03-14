import { 
 FileText, 
 Receipt, 
 Mail, 
 Calculator, 
 UserCheck, 
 Building2 
} from 'lucide-react';

const services = [
 {
  title: 'Accounting & Book Keeping',
  description: 'We manage bills to bank reconciliation in your software and deliver monthly, quarterly, annual reports tailored to your needs.',
  icon: <FileText className="h-10 w-10 text-black" />,
 },
 {
  title: 'Tax Preparation & Planning',
  description: 'Being a Team of CPA and CA, we have expert knowledge of Taxation and would prepare Tax computation on your behalf to help you save your time.',
  icon: <Receipt className="h-10 w-10 text-black" />,
 },
 {
  title: 'AP / AR Mailbox Helpdesk',
  description: 'Hire Full time or part time remote accountants who would be working exclusively for you.',
  icon: <Mail className="h-10 w-10 text-black" />,
 },
 {
  title: 'Payroll Processing',
  description: 'We handle payroll and payables by coding invoices accurately and matching them with purchase orders for seamless accounting.',
  icon: <Calculator className="h-10 w-10 text-black" />,
 },
 {
  title: 'Virtual CFO Services',
  description: 'We ensure accurate, private financials—detecting errors early to prevent fraud and avoid legal issues through expert reconciliation.',
  icon: <UserCheck className="h-10 w-10 text-black" />,
 },
 {
  title: 'Company Incorporation',
  description: 'We can help your client set up their business in India. The expert team will handle the entire process in a very smooth and efficient manner.',
  icon: <Building2 className="h-10 w-10 text-black" />,
 },
];

export function ImpactSection() {
 return (
  <section className="bg-[#FF6600] py-16 md:py-24 px-4">
   <div className="container mx-auto max-w-6xl text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 tracking-tight">
     Our Services
    </h2>

    {/* Services Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
     {services.map((service, index) => (
      <div 
       key={index} 
       className="group relative bg-white rounded-[1.5rem] p-8 h-[250px] flex flex-col items-center justify-center shadow-lg transition-all duration-500 overflow-hidden hover:shadow-2xl"
      >
       {/* --- Front View (Icon + Title) --- */}
       <div className="flex flex-col items-center transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-4">
        <div className="mb-4 p-3 bg-gray-50 rounded-2xl">
         {service.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 leading-tight">
         {service.title}
        </h3>
       </div>

       {/* --- Hover View (Description) --- */}
       <div className="absolute inset-0 p-6 flex flex-col items-center justify-center bg-white opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
        <h3 className="text-lg font-bold text-[#FF6600] mb-2">
         {service.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed font-medium">
         {service.description}
        </p>
       </div>
       
       {/* Bottom Orange Line on Hover */}
       <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-[#FF6600] transition-all duration-500 group-hover:w-full" />
      </div>
     ))}
    </div>
   </div>
  </section>
 );
}