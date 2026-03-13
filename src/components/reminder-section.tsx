import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Sparkles, CalendarCheck, ArrowRight, Shield } from 'lucide-react';

export function ReminderSection() {
  const reminderImage = PlaceHolderImages.find(
    (img) => img.id === 'calculator-image'
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/20 py-10 md:py-5">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto">
        <div className="mx-auto max-w-7xl">
          
          {/* Main Grid */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Text Side - Order adjusted for mobile */}
            <div className="order-2 md:order-1 space-y-8">

              {/* Floating Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium animate-pulse">
                <Sparkles className="h-4 w-4" />
                <span>Your Financial Freedom Awaits</span>
              </div>

              {/* Main Quote Card - Redesigned */}
              <div className="relative">
                {/* Quote Mark */}
                <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif">"</div>
                
                {/* Card with gradient border */}
                <div className="relative rounded-2xl bg-gradient-to-br from-card to-card/95 p-8 shadow-2xl border border-primary/10 backdrop-blur-sm">
                  {/* Inner gradient overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50"></div>
                  
                  <div className="relative space-y-6">
                    <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                      <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent font-bold">
                        Remember why you started?
                      </span>{' '}
                      It wasn&apos;t to become a part-time accountant. It was to create impact, 
                      to build something meaningful, to finally be your own boss.
                    </p>

                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                      <p className="pl-6 text-xl md:text-2xl text-muted-foreground font-medium italic">
                        &ldquo;But here you are — drowning in invoices, chasing receipts, 
                        and losing sleep over compliance deadlines.&rdquo;
                      </p>
                    </div>

                    {/* Stats/Features */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarCheck className="h-4 w-4 text-primary" />
                        <span>Save 20+ hours/week</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Shield className="h-4 w-4 text-primary" />
                        <span>100% Compliance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Statement with animation */}
              <div className="space-y-4">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    What if you could press a button
                  </span>
                  <span className="block mt-2">
                    <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent relative inline-block">
                      and make it all disappear?
                      <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                    </span>
                  </span>
                </p>
              </div>

              {/* CTA Button with enhanced styling */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0czVvey0mCJa39b594OhprJIIBTdV2h18U9Q3_xzSugo1qfMzTCrmN3rorBREzUeNYGlxnZ7Gq?gv=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'group relative overflow-hidden px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary border-0'
                  )}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Unlock Financial Freedom
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                
                {/* Secondary CTA (optional) */}
                <Link
                  href="#learn-more"
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'px-8 py-6 text-lg border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300'
                  )}
                >
                  Learn More
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1,2,3].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 border-2 border-background"></div>
                    ))}
                  </div>
                  <span>500+ happy founders</span>
                </div>
                <div className="w-px h-4 bg-border"></div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★★★★★</span>
                  <span>4.9/5</span>
                </div>
              </div>
            </div>

            {/* Image Side - Enhanced */}
            <div className="order-1 md:order-2">
              <div className="relative group">
                {/* Decorative elements around image */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity blur"></div>
                
                {/* Main image container */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  {reminderImage && (
                    <>
                      <Image
                        src={reminderImage.imageUrl}
                        alt={reminderImage.description}
                        width={600}
                        height={420}
                        className="w-full h-auto object-cover transform transition-all duration-700 group-hover:scale-110"
                        data-ai-hint={reminderImage.imageHint}
                      />
                      
                      {/* Image overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      {/* Floating badge on image */}
                      <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-primary/20">
                        ✨ Trusted by 500+ startups
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}