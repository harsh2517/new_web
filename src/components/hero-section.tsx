import { Button, buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import AnimatedText from './animation/page';

export function HeroSection() {
 const clientLogos = PlaceHolderImages.filter(img =>
  img.imageHint.includes('logo')
 );

 return (
  <section className="container mx-auto flex flex-col items-center py-20 md:py-28 text-center">

   {/* Heading */}
   <AnimatedText className="block">
   <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
    Your Startup is Meant for Greatness,
    <span className="block text-primary">
     Not for Accounting & Bookkeeping
    </span>
   </h1>
   </AnimatedText>

   {/* Sub Text */}
   <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
    Get your own finance team of CAs, CSs, and accountants to manage your
    boring yet important work — at a fraction of the cost.
   </p>

   {/* CTA Button */}
   <Link
    href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0czVvey0mCJa39b594OhprJIIBTdV2h18U9Q3_xzSugo1qfMzTCrmN3rorBREzUeNYGlxnZ7Gq?gv=true"
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
     buttonVariants({ size: 'lg' }),
     'mt-10 px-8 py-6 text-lg shadow-lg hover:scale-105 transition bg-primary hover:bg-primary/90 text-primary-foreground font-semibold'
    )}
   >
    Book a Free Consultation
   </Link>

   {/* Trusted Section */}
   

   {/* Decorative background elements using global primary color */}
   <div className="absolute top-0 right-0 -z-10 h-96 w-96 bg-primary/5 rounded-full blur-3xl" />
   <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 bg-primary/5 rounded-full blur-3xl" />
  </section>
 );
}