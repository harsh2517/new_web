"use client";

import { Logo } from './icons/logo';
import Link from 'next/link';
import AnimatedText from './animation/page'; // Path check kar lena apne hisaab se

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Logo Section */}
          <AnimatedText>
            <div>
              <Logo />
              <p className="mt-4 text-sm text-muted-foreground">
                Your Startup is Meant for Greatness, Not for Accounting &
                Bookkeeping.
              </p>
            </div>
          </AnimatedText>

          {/* Services Section */}
          <AnimatedText>
            <div>
              <h3 className="font-semibold">Services</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Accounting & Bookkeeping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    CFO Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Company & ROC Compliances
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Taxation & GST Compliances
                  </Link>
                </li>
              </ul>
            </div>
          </AnimatedText>

          {/* Company Section */}
          <AnimatedText>
            <div>
              <h3 className="font-semibold">Company</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </AnimatedText>

          {/* Contact Section */}
          <AnimatedText>
            <div>
              <h3 className="font-semibold">Contact</h3>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <p>Email: contact@accountooze.com</p>
                <p>Phone: +91 12345 67890</p>
              </div>
            </div>
          </AnimatedText>

        </div>

        {/* Bottom Bar Animation */}
        <AnimatedText className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <div>
             © {new Date().getFullYear()} Accountooze. All rights reserved.
          </div>
        </AnimatedText>
      </div>
    </footer>
  );
}