import { Button, buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import AnimatedText from './animation/page';
import AttentionButton from './button _animation/page';


export function HeroSection() {
 const clientLogos = PlaceHolderImages.filter(img =>
  img.imageHint.includes('logo')
 );

 return (
    <>
    <div className="w-full bg-primary/10 border-b border-primary/80">
  <div className="container mx-auto flex items-center justify-center gap-2 px-4 py-3 text-center">

    {/* pulse indicator */}
    <span className="relative flex h-2.5 w-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
    </span>

    {/* text */}
    <p className="text-sm md:text-base font-semibold text-primary">
      Startups – Stop Drowning in Accounting, Bookkeeping & Tax Compliance Chaos
    </p>

  </div>
</div>

    
  <section className="container mx-auto flex flex-col items-center px-4 py-16 md:py-28 text-center">
    

   {/* Heading */}
   <AnimatedText className="block">
   <h1 className="max-w-5xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-6xl">
    Your Startup is Meant for Greatness,
    <span className="block text-primary">
     Not for Accounting & Bookkeeping
    </span>
   </h1>
   </AnimatedText>

   {/* Sub Text */}
   <p className="mt-6 max-w-2xl px-4 text-base text-muted-foreground sm:text-lg md:text-xl">
    Get your own finance team of CAs, CSs, and accountants to manage your
    boring yet important work — at a fraction of the cost.
   </p>

   {/* CTA Button */}
   <AttentionButton>
   <Link
    href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0czVvey0mCJa39b594OhprJIIBTdV2h18U9Q3_xzSugo1qfMzTCrmN3rorBREzUeNYGlxnZ7Gq?gv=true"
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
     buttonVariants({ size: 'lg' }),
     'mt-10 w-full max-w-md px-8 py-5 text-lg shadow-lg hover:scale-105 transition bg-primary hover:bg-primary/90 text-primary-foreground font-semibold'
    )}
   >
    Book a Free Consultation
   </Link>
   </AttentionButton>

   {/* Trusted Section */}
   

   {/* Decorative background elements using global primary color */}
   {/* <div className="absolute top-0 right-0 -z-10 h-96 w-96 bg-primary/5 rounded-full blur-3xl" />
   <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 bg-primary/5 rounded-full blur-3xl" /> */}
  </section>
  </>
 );
}