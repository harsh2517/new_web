"use client";

import { Logo } from './icons/logo';
import Link from 'next/link';
import Image from 'next/image'; // QR code ke liye
import AnimatedText from './animation/page'; // Path check kar lena apne hisaab se

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container py-12 px-4 md:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Company Info Section */}
          <AnimatedText>
            <div>
              <h2 className="text-2xl font-bold text-[#FF6A28] mb-2">Accountoozee</h2>
              <p className="text-sm text-gray-600 mb-4">
                Accountoozee helps businesses and accounting firms based in USA, Australia, Canada, UK, Singapore scale smarter by providing skilled offshore accounting talent from India.
              </p>
              
              {/* Email */}
              <div className="mb-3">
                <p className="text-sm font-medium">Email:</p>
                <a href="mailto:contact@accountoozee.com" className="text-sm text-[#FF6A28] hover:underline">
                  contact@accountoozee.com
                </a>
              </div>
              
              {/* Phone Numbers */}
              <div className="mb-3">
                <p className="text-sm font-medium">Whatsapp / Call</p>
                <p className="text-sm">INDIA: <a href="tel:+919714444894" className="text-[#FF6A28] hover:underline">+91 97144-44894</a></p>
                <p className="text-sm">USA: <a href="tel:+19372400352" className="text-[#FF6A28] hover:underline">+1(937)240-0352</a></p>
              </div>
              
              {/* QR Code */}
              {/* <div className="mt-4">
                <p className="text-sm font-medium mb-2">Scan this QR to connect on Whatsapp</p>
                <div className="w-24 h-24 bg-gray-200 border rounded-lg flex items-center justify-center">
                  {/* Replace with actual QR code image */}
                  {/* <span className="text-xs text-gray-500">QR Code</span> */}
                  {/* <Image src="/whatsapp-qr.png" alt="WhatsApp QR" width={96} height={96} /> */}
                {/* </div>
              </div>  */}
            </div>
          </AnimatedText>

          {/* Newsletter Section */}
          <AnimatedText>
            <div>
             
              
              {/* Blog Link */}
              {/* <div className="mt-6">
                <Link href="#" className="text-[#FF6A28] hover:underline font-medium">
                  Blog / Knowledge Base →
                </Link>
              </div> */}
            </div>
          </AnimatedText>

          {/* Our Offices Section */}
          <AnimatedText>
            <div>
              <h3 className="font-semibold text-lg mb-4">Our Offices</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-[#FF6A28]">USA:</p>
                  <p className="text-sm text-gray-600">30 N Gould St Ste R Sheridan, WY, USA 82801</p>
                </div>
                <div>
                  <p className="font-medium text-[#FF6A28]">USA:</p>
                  <p className="text-sm text-gray-600">140 Sayre Drive, Princeton, NJ, USA 08540</p>
                </div>
                <div>
                  <p className="font-medium text-[#FF6A28]">INDIA:</p>
                  <p className="text-sm text-gray-600">HG 4&5, SB Center, Ring Road, Surat, GJ, India</p>
                </div>
              </div>
            </div>
          </AnimatedText>

          {/* Quick Links Section */}
          {/* <AnimatedText>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF6A28] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF6A28] transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF6A28] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF6A28] transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </AnimatedText> */}
        </div>

        {/* Bottom Bar */}
        <AnimatedText className="mt-12 border-t pt-8">
          <div className="text-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Accountoozee. All rights reserved.</p>
          </div>
        </AnimatedText>
      </div>
    </footer>
  );
}