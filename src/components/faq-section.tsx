import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Button, buttonVariants } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { HelpCircle, MessageCircleQuestion, ArrowRight, Sparkles } from 'lucide-react';

const faqItems = [
    {
      question: "What exactly does Accountooze do for startups?",
      answer: "We act as your virtual accounting department — handling bookkeeping, GST filings, IT returns, compliance, reconciliations, and everything in between. You get experienced accountants managing your finances without the cost of hiring full-time staff. We work as an extension of your team, keeping your books clean and your taxes optimized."
    },
    {
      question: "How is this different from hiring a traditional accountant or CA?",
      answer: "Most CAs work reactively — they file things after they’re due. Accountooze is proactive — we maintain your accounts daily, file returns and alert you before something goes wrong. A product built by a team of CAs for the Startups."
    },
    {
      question: "What if my books are already a mess?",
      answer: "That’s actually the best time to call us. We specialize in cleaning up messy accounts, fixing past GST errors, and rebuilding accurate ledgers fast — so you start with a clean slate."
    },
    {
      question: "How much does a virtual Accountant service cost?",
      answer: "Our pricing is customized based on your company size, number of transactions and the services you need. But here’s the good part — we typically cost less than hiring in-house accountants & consultants."
    },
    {
      question: "What results can I realistically expect?",
      answer: "Most startups we work with: ✅ Save 22+ hours weekly ✅ Cut compliance stress to zero ✅ Recover missed tax credits or deductions worth lakhs ✅ And get real-time financial clarity they never had before"
    },
    {
      question: "How do you gather and consolidate all my financial data?",
      answer: "We pull data directly from all your sources — Meta Ads, Google Ads, payment gateways, net banking, marketplaces (Amazon, Flipkart, etc.) and quick-commerce platforms. We clean, match, and reconcile everything so your books show everything in one place."
    },
    {
      question: "How do we virtually manage accounting, tax and compliances?",
      answer: "We have an experienced team and leverage technology for smooth functioning. We have 400+ Startups in our cohort whom we manage 100% virtually. We have solid checkpoints and SOPs right from onboarding to delivery which is further overseen by an Internal Quality Team. Most founders or their team just have to give us 1 hour every 15 days for review."
    }
]

export function FaqSection() {
    return (
        <section className="container py-20 md:py-32 relative overflow-hidden">
            {/* Background Decorative Blur */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[400px] w-[800px] bg-primary/5 blur-[120px] rounded-full" />
            
            <div className="mx-auto max-w-4xl relative z-10">
                {/* Header Section */}
                <div className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest mb-4 border border-primary/20">
                        <HelpCircle className="h-3 w-3" /> Support Center
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground leading-tight">
                        Frequently Asked <span className="text-primary italic">Questions</span>
                    </h2>
                    <p className="text-muted-foreground mt-4 text-lg font-medium max-w-2xl mx-auto flex items-center justify-center gap-2">
                        Clarifying Your Doubts <Sparkles className="h-4 w-4 text-primary" />
                    </p>
                </div>

                {/* FAQ Accordion */}
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqItems.map((item, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index + 1}`}
                            className="group rounded-3xl border bg-card/50 backdrop-blur-sm px-2 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30"
                        >
                            <AccordionTrigger className="p-6 text-left font-bold text-lg md:text-xl text-card-foreground hover:no-underline transition-colors group-data-[state=open]:text-primary">
                                <span className="flex items-center gap-4">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-xs font-black group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors">
                                        {index + 1}
                                    </span>
                                    {item.question}
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="px-12 md:px-16 pt-0">
                                <div className="pb-6 border-l-2 border-primary/20 pl-6">
                                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line font-medium">
                                        {item.answer}
                                    </p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* Bottom Call to Action */}
                <div className="mt-20 p-8 rounded-[2.5rem] bg-foreground text-background shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 transition-transform group-hover:scale-110">
                        <MessageCircleQuestion size={100} />
                    </div>
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <h4 className="text-2xl font-black mb-6">Still have a question that isn&apos;t covered here?</h4>
                        <Link
                            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0czVvey0mCJa39b594OhprJIIBTdV2h18U9Q3_xzSugo1qfMzTCrmN3rorBREzUeNYGlxnZ7Gq?gv=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                buttonVariants({ size: "lg" }), 
                                "h-auto rounded-2xl bg-primary px-10 py-5 text-primary-foreground shadow-xl transition-all hover:scale-[1.05] group"
                            )}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-lg font-black tracking-tight">Have More Questions? Book a Call!</span>
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}