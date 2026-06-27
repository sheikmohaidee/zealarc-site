import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const footerLinks = [
    {
      title: 'Products',
      links: [
        { name: 'Nectar (Smart POS)', path: '/products/pos#nectar' },
        { name: 'Hive (Tenant Setup)', path: '/products/pos#hive' },
        { name: 'Queen (Super Admin)', path: '/products/pos#queen' },
        { name: 'BeezDMS (Distribution)', path: '/products/dms' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Consulting', path: '/solutions#consulting' },
        { name: 'Web Applications', path: '/solutions#web-apps' },
        { name: 'Mobile Applications', path: '/solutions#mobile-apps' },
        { name: 'POS Solutions', path: '/solutions#pos-solutions' },
        { name: 'Distribution Management Solutions', path: '/solutions#dms-solutions' },
      ],
    },
    {
      title: 'Industries',
      links: [
        { name: 'Restaurants & Cafes', path: '/industries#restaurants' },
        { name: 'Retail Stores', path: '/industries#retail' },
        { name: 'Supermarkets', path: '/industries#supermarkets' },
        { name: 'Enterprises', path: '/industries#enterprises' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Values', path: '/about#values' },
        { name: 'Our Journey', path: '/about#journey' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Bayt-Al-Mal (Charity)', path: '/products/bayt-al-mal' },
      ],
    },
  ];

  return (
    <footer className="bg-apple-gray text-apple-dark/60 text-xs py-16 border-t border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Footnote text typical of Apple site footer */}
        <div className="pb-8 border-b border-black/[0.08] mb-12 text-[11px] leading-relaxed">
          <p className="mb-3">
            * Zealarc Solutions are tailored for businesses running on modern infrastructure. Integrations like WhatsApp, UPI, Tally, and printer systems require compatible local environments and third-party API subscriptions.
          </p>
          <p>
            Nectar, Hive, Queen, and BeezDMS are registered service products of Zealarc. All other trademarks belong to their respective owners.
          </p>
        </div>

        {/* Logo Branding */}
        <div className="flex items-center gap-2 mb-10">
          <img 
            src={(() => {
              const depth = location.pathname.split('/').filter(Boolean).length;
              const prefix = depth > 0 ? '../'.repeat(depth) : './';
              return `${prefix}assets/zealarc.png`;
            })()} 
            alt="Zealarc" 
            className="h-14 w-auto rounded-lg object-contain shadow-sm border border-black/[0.04]"
          />
        </div>

        {/* Directory columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {footerLinks.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <h3 className="font-semibold text-apple-dark text-[13px]">{group.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="hover:text-apple-dark hover:underline transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-6 border-t border-black/[0.08] text-[11px]">
          <div>
            Copyright © {currentYear} Zealarc Digital Solutions. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link to="/about" className="hover:text-apple-dark hover:underline">Privacy Policy</Link>
            <span className="text-black/10">|</span>
            <Link to="/about" className="hover:text-apple-dark hover:underline">Terms of Service</Link>
            <span className="text-black/10">|</span>
            <Link to="/contact" className="hover:text-apple-dark hover:underline">Sales Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
