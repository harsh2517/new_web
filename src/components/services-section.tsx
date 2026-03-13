import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Book, Briefcase, FileText, Landmark } from 'lucide-react';

const services = [
  {
    icon: <Book className="h-8 w-8" />,
    title: 'Accounting & Bookkeeping',
    description:
      'We take care of your books, so you can focus on your business.',
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: 'CFO Services',
    description: 'Strategic financial advice to help you grow your startup.',
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: 'Company & ROC Compliances',
    description: 'Stay compliant with all regulations, effortlessly.',
  },
  {
    icon: <Landmark className="h-8 w-8" />,
    title: 'Taxation & GST Compliances',
    description: 'Never miss a deadline or a detail with our tax experts.',
  },
];

export function ServicesSection() {
  return (
    <section className="w-full bg-gradient-to-b from-background to-secondary/30 py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container relative z-10">
        {/* Header section with improved typography */}
        <div className="flex flex-col items-center space-y-4 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Our Services
          </span>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            What we do{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              for you
            </span>
          </h2>
          <p className="max-w-[800px] text-lg text-muted-foreground md:text-xl">
            We offer a complete suite of financial services to keep your startup
            running smoothly and efficiently.
          </p>
        </div>

        {/* Services grid with improved cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group relative overflow-hidden border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              {/* Card gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              
              <CardHeader className="relative items-center text-center p-6">
                {/* Icon container with enhanced styling */}
                <div className="relative mb-4">
                  <div className="absolute inset-0 animate-pulse rounded-full bg-primary/20 blur-xl group-hover:bg-primary/30"></div>
                  <div className="relative rounded-2xl bg-gradient-to-br from-primary to-primary/60 p-4 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {service.icon}
                  </div>
                </div>
                
                {/* Title with improved styling */}
                <CardTitle className="mt-2 text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                
                {/* Description with better readability */}
                <CardDescription className="mt-2 text-base leading-relaxed">
                  {service.description}
                </CardDescription>

                {/* Learn more link (optional) */}
                <div className="mt-4 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {/* <span className="inline-flex items-center text-sm font-medium text-primary">
                    Learn more 
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span> */}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Trusted by 500+ startups across India
          </p>
        </div>
      </div>
    </section>
  );
}