import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Check, CheckCircle2, ArrowRight, Shield, Settings, Server, Layers, Store, Coffee, ShoppingBag, ShoppingCart } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import DeviceVideo from '../components/DeviceVideo';
import PosHero from '../components/PosHero';

export default function PosEcosystem() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const industries = [
    { name: 'Restaurants', icon: Store, desc: 'Tables, kitchen displays, and customized billing workflows.' },
    { name: 'Cafes', icon: Coffee, desc: 'Quick service, fast checkout, and simplified item variations.' },
    { name: 'Retail Stores', icon: ShoppingBag, desc: 'Barcode scanning, variant tracking, and bulk updates.' },
    { name: 'Supermarkets', icon: ShoppingCart, desc: 'Multi-counter sync, weigh scale integrations, and queue busting.' }
  ];

  const benefits = [
    { title: 'Faster Billing', desc: 'Execute checkouts in milliseconds with optimized caching layers.' },
    { title: 'Inventory Management', desc: 'Real-time stock adjustments, barcode scanning, and alerts.' },
    { title: 'Multi-user Operations', desc: 'Role-based access controls for cashier, manager, and auditor levels.' },
    { title: 'Business Insights', desc: 'Aggregated analytics dashboards updating in real time across branches.' },
    { title: 'Centralized Control', desc: 'Manage tax policies, system templates, and settings globally.' }
  ];

  return (
    <div className="pt-24 bg-white text-apple-dark font-sans overflow-x-hidden">
      {/* Hero Section with Ecosystem Illustration */}
      <PosHero />

      {/* Hive Detail */}
      <section id="hive" className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <FadeIn>
                <div className="text-apple-accent text-xs font-semibold uppercase tracking-wider mb-2">Tenant Setup Platform</div>
                <h2 className="text-h2 mb-6">Hive.</h2>
                <p className="text-body text-apple-dark/60 mb-8">
                  Before anything runs at the counter, Hive sets up the foundation. Enhanced by Beez AI, it provides intelligent configuration recommendations and deployment guidance to create isolated business profiles and tax rules seamlessly.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-3">
                    <Settings size={18} className="text-apple-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-h4">Tenant Allocation</h4>
                      <p className="text-xs text-apple-dark/60 font-light leading-relaxed">Isolate business structures securely with base layouts.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Settings size={18} className="text-apple-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-h4">Base Configurations</h4>
                      <p className="text-xs text-apple-dark/60 font-light leading-relaxed">Deploy standard inventory parameters, system defaults, and global settings.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-6">
              <FadeIn delay={200}>
                <DeviceVideo 
                  videoSrc="/assets/videos/hive-app.mp4" 
                  deviceType="Desktop"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Nectar Detail */}
      <section id="nectar" className="py-24 md:py-32 bg-apple-gray border-t border-b border-black/[0.04]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 lg:order-2">
              <FadeIn>
                <div className="text-apple-accent text-xs font-semibold uppercase tracking-wider mb-2">Smart Point-of-Sale</div>
                <h2 className="text-h2 mb-6">Nectar.</h2>
                <p className="text-body text-apple-dark/60 mb-8">
                  Nectar is what your staff uses every day. Assisted by Beez AI, it surfaces intelligent inventory recommendations and sales trend analysis right at the checkout, while handling orders and payments securely.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Restaurants', 'Cafes', 'Retail', 'Supermarkets'].map((item) => (
                    <span key={item} className="px-3.5 py-1.5 bg-white border border-black/[0.04] rounded-full text-xs font-medium text-apple-dark/70 shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-6 lg:order-1">
              <FadeIn delay={200}>
                <DeviceVideo 
                  videoSrc="/assets/videos/nectar-app.mp4" 
                  deviceType="Tablet"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Queen Detail */}
      <section id="queen" className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <FadeIn>
                <div className="text-apple-accent text-xs font-semibold uppercase tracking-wider mb-2">Super Admin Platform</div>
                <h2 className="text-h2 mb-6">Queen.</h2>
                <p className="text-body text-apple-dark/60 mb-8">
                  Queen is your command center enhanced by Beez AI. It gives managers a bird's-eye view, delivering business performance summaries, actionable recommendations, and intelligent operational analytics from one place.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-3">
                    <Shield size={18} className="text-apple-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-h4">Central Audits</h4>
                      <p className="text-xs text-apple-dark/60 font-light leading-relaxed">Track user actions, cash balances, and modifications globally.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Shield size={18} className="text-apple-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-h4">Aggregated Reporting</h4>
                      <p className="text-xs text-apple-dark/60 font-light leading-relaxed">Generate performance reports comparing sales trends between branches.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <FadeIn delay={200}>
                <DeviceVideo 
                  videoSrc="/assets/videos/queen-app.mp4" 
                  deviceType="Phone"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-apple-gray border-t border-b border-black/[0.04]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-3">POS Suite Outcomes</h2>
              <h3 className="text-h2">Key Benefits.</h3>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item, idx) => (
              <FadeIn key={idx} delay={50 * idx} className="p-8 bg-white rounded-24 border border-black/[0.03] shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-8 h-8 rounded-lg bg-apple-accent/10 text-apple-accent flex items-center justify-center mb-4">
                  <Check size={16} />
                </div>
                <h4 className="text-h4 mb-2 text-apple-dark">{item.title}</h4>
                <p className="text-xs text-apple-dark/60 font-light leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-3">Target Sectors</h2>
              <h3 className="text-h2">Industries Served.</h3>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, idx) => (
              <FadeIn key={idx} delay={100 * idx} className="p-8 bg-apple-gray rounded-24 border border-black/[0.03] hover:-translate-y-1 hover:shadow-md transition-all duration-350 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-black/[0.02] mb-4">
                  <ind.icon size={20} className="text-apple-accent" />
                </div>
                <h4 className="text-h4 mb-2 text-apple-dark">{ind.name}</h4>
                <p className="text-xs text-apple-dark/60 font-light leading-relaxed">{ind.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-apple-dark text-white border-t border-white/10 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-apple-accent/5 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 md:px-12 relative z-10">
          <FadeIn>
            <h3 className="text-h2 mb-6">See it in action.</h3>
            <p className="text-body text-white/60 mb-10 max-w-xl mx-auto">
              Book a walkthrough with our team and we will show you how the POS Ecosystem works for your business.
            </p>
            <Link to="/demo" className="px-6 py-3.5 bg-white text-apple-dark hover:bg-white/90 rounded-full font-medium text-sm active:scale-95 transition-all duration-300 inline-block shadow-sm">
              Talk to Us & Book a Demo
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
