import { Card, CardContent } from "./ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "As we scaled from 2 to 5 locations, Accountooze kept our accounts centralized and transparent. Real-time P&L visibility across branches helped us make faster, data-driven decisions.",
    name: "Deepak J.",
    title: "Director, Home Decor Startup",
  },
  {
    quote:
      "Month-end used to be chaos—chasing invoices, matching receipts, hunting for missing data. Accountooze's continuous recording means our books are always current.",
    name: "Mohit Jain",
    title: "Co-Founder, Restaurant Owner",
  },
  {
    quote:
      "Spent every month-end matching 600+ bank transactions manually in Excel. Accountooze now does it in 1 day. Our books are accurate and my weekends are back.",
    name: "Priya T",
    title: "Director, D2C Fashion Brand",
  },
  {
    quote:
      "I wanted a professional team who could manage accounts end-to-end. Accountooze delivered beyond expectations and even helped us improve cash flow planning.",
    name: "Shishir P",
    title: "Founder, SaaS Startup",
  },
  {
    quote:
      "From non-compliant to audit-ready in just 25 days. They fixed three years of records and filings. Truly a finance rescue team.",
    name: "Shantnu M",
    title: "CEO, Pharmaceutical Company",
  },
  {
    quote:
      "10 months of unfiled GST and messy accounts? They cleaned everything and got us loan-ready for a ₹150L MSME loan.",
    name: "Neha V",
    title: "Founder, Printing Business",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 md:py-32">

      {/* background glow */}
      {/* <div className="absolute inset-0 -z-10 bg-primary/5"></div> */}

      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            What Founders Say About Us
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Real stories from startups we help every day.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group border bg-background shadow-sm hover:shadow-xl transition duration-300 rounded-xl"
            >
              <CardContent className="p-8 flex flex-col h-full">

                <Quote className="h-8 w-8 text-primary/40 mb-5 group-hover:text-primary transition" />

                <blockquote className="text-muted-foreground leading-relaxed flex-1">
                  "{testimonial.quote}"
                </blockquote>

                <div className="mt-8 border-t pt-6">
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                </div>

              </CardContent>
            </Card>
          ))}

        </div>
      </div>
    </section>
  );
}