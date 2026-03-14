import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/40 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        {/* LEFT SIDE (LOGO + BRAND) */}
        <Link href="/" className="flex items-center gap-3">
          {/* Logo Image */}
          <div className="relative h-10 w-10">
            <Image
              src="/Images/logo.svg" // <-- yaha apni image ka path
              alt="Accountooz Logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Brand Name */}
          <span className="text-xl font-bold bg-gradient-to-r bg-clip-text">
            Accountooz
          </span>
        </Link>

        {/* RIGHT SIDE CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0czVvey0mCJa39b594OhprJIIBTdV2h18U9Q3_xzSugo1qfMzTCrmN3rorBREzUeNYGlxnZ7Gq?gv=true"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants(),
              "px-6 py-2 text-sm font-semibold shadow-md hover:shadow-xl transition hover:scale-105",
            )}
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
