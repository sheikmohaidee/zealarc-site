import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import DeviceVideo from '../components/DeviceVideo';

export default function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 bg-white text-apple-dark font-sans overflow-x-hidden">
      {/* Intro Header */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <span className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-4 block">Connected Software Suite</span>
          </FadeIn>
          <FadeIn delay={200}>
            <h1 className="text-h1 text-apple-dark mb-6">
              The Zealarc Ecosystem.
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-body text-apple-dark/60 max-w-3xl mx-auto">
              Premium, connected software products designed to drive modern operations, logistics, and community care.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* POS Ecosystem Section */}
      <section id="pos" className="py-20 md:py-28 bg-apple-gray border-t border-black/[0.04]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <FadeIn>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-apple-accent text-xs font-semibold uppercase tracking-wider">Billing & Management</span>
                  <span className="px-2.5 py-0.5 bg-apple-accent/10 text-apple-accent text-[9px] font-bold rounded-full uppercase tracking-widest border border-apple-accent/20">
                    Beez AI Inside
                  </span>
                </div>
                <h2 className="text-h2 text-apple-dark mb-6">
                  POS Ecosystem
                </h2>
                <p className="text-body text-apple-dark/60 mb-8">
                  Billing and management tools built for restaurants, cafes, retail stores, and supermarkets. Fast checkout, easy inventory tracking, and clear reporting.
                </p>
                <Link to="/products/pos" className="px-6 py-3.5 bg-apple-accent text-white hover:bg-[#0077ED] rounded-full font-medium active:scale-95 transition-all duration-300 inline-block text-sm shadow-sm">
                  Explore POS Ecosystem
                </Link>
              </FadeIn>
            </div>
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[350px] sm:min-h-[400px]">
              <FadeIn delay={200} className="w-full relative">
                {/* Nectar Tablet Mockup */}
                <DeviceVideo 
                  videoSrc="/assets/videos/nectar-app.mp4" 
                  deviceType="Tablet"
                  className="w-[85%] mr-auto"
                />
                
                {/* Queen Mobile Mockup Overlapping */}
                <div className="absolute right-0 bottom-[-20px] w-[35%] max-w-[160px] p-2 bg-black rounded-[36px] border-[4px] border-[#222] shadow-[0_25px_60px_-10px_rgba(0,0,0,0.3)] overflow-hidden">
                  <img 
                    src="./assets/queen_dashboard.jpg" 
                    alt="Queen Dashboard" 
                    className="rounded-[26px] w-full h-auto object-contain"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* BeezDMS Section */}
      <section id="dms" className="py-20 md:py-28 bg-white border-t border-black/[0.04]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 lg:order-2">
              <FadeIn>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-apple-blue text-xs font-semibold uppercase tracking-wider">Logistics & Distribution</span>
                  <span className="px-2.5 py-0.5 bg-apple-blue/10 text-apple-blue text-[9px] font-bold rounded-full uppercase tracking-widest border border-apple-blue/20">
                    Beez AI Inside
                  </span>
                </div>
                <h2 className="text-h2 text-apple-dark mb-6">
                  BeezDMS
                </h2>
                <p className="text-body text-apple-dark/60 mb-8">
                  A management system that connects your warehouse to your field teams. Built for distributors, warehouse managers, sales teams, and vendors.
                </p>
                <Link to="/products/dms" className="px-6 py-3.5 bg-apple-blue text-white hover:bg-apple-blue/95 rounded-full font-medium active:scale-95 transition-all duration-300 inline-block text-sm shadow-sm">
                  Explore BeezDMS
                </Link>
              </FadeIn>
            </div>
            <div className="lg:col-span-6 lg:order-1">
              <FadeIn delay={200}>
                <div className="p-2 bg-apple-gray rounded-32 border border-black/[0.04] shadow-sm overflow-hidden">
                  <img 
                    src="./assets/enterprise_sync_mockup.png" 
                    alt="BeezDMS Logistics" 
                    className="rounded-[28px] w-full object-cover aspect-[4/3]"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Bayt-Al-Mal Section */}
      <section id="baytalmal" className="py-20 md:py-28 bg-apple-gray border-t border-black/[0.04]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <span className="text-apple-blue text-xs font-semibold uppercase tracking-wider">Community Initiative</span>
              <span className="px-2.5 py-0.5 bg-apple-blue/10 text-apple-blue text-[9px] font-bold rounded-full uppercase tracking-widest border border-apple-blue/20">
                Beez AI Inside
              </span>
              <span className="px-3 py-1 bg-apple-blue/10 text-apple-blue text-[10px] font-bold rounded-full uppercase tracking-widest border border-apple-blue/20">
                100% Free Forever
              </span>
            </div>
            <h2 className="text-h2 text-apple-dark mb-6">
              Bayt-Al-Mal
            </h2>
            <p className="text-body text-apple-dark/60 mb-8 max-w-2xl mx-auto">
              A community charity platform built as Sadaqah Jariyah. Helps organizations manage donations, track funds, and coordinate charitable work with full transparency.
            </p>
            <Link to="/products/bayt-al-mal" className="px-6 py-3.5 bg-apple-dark text-white hover:bg-apple-dark/95 rounded-full font-medium active:scale-95 transition-all duration-300 inline-block text-sm shadow-sm">
              Explore Bayt-Al-Mal
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Product Comparison Grid */}
      <section className="py-24 bg-white border-t border-black/[0.04]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-4">Product Comparison</h2>
              <h3 className="text-h2 text-apple-dark mb-4">
                Ecosystem suitability matrix.
              </h3>
            </FadeIn>
          </div>

          <FadeIn delay={200} className="overflow-x-auto">
            <table className="w-full text-left border-collapse rounded-24 overflow-hidden border border-black/[0.04]">
              <thead>
                <tr className="bg-apple-gray border-b border-black/[0.06] text-xs font-bold text-apple-dark uppercase tracking-wider">
                  <th className="p-6 whitespace-nowrap">Capability</th>
                  <th className="p-6">Hive</th>
                  <th className="p-6">Nectar</th>
                  <th className="p-6">Queen</th>
                  <th className="p-6">BeezDMS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.04] text-sm text-apple-dark/70 font-light">
                {[
                  { metric: 'Target Focus', hive: 'New tenant setup', nectar: 'Restaurants, Retail operations', queen: 'Admins, Chain owners', beezdms: 'Logistics, Field sales' },
                  { metric: 'Ecosystem Role', hive: 'Provisioning layer', nectar: 'Frontend operational POS', queen: 'Master control node', beezdms: 'Supply chain bridge' },
                  { metric: 'Pricing', hive: 'Included with infrastructure', nectar: 'SaaS Subscription model', queen: 'Enterprise licensing', beezdms: 'Volume/Route based' },
                  { metric: 'Platform Access', hive: 'Cloud-only secure access', nectar: 'Cloud-connected terminal apps', queen: 'Cloud admin interface', beezdms: 'Mobile/Cloud Hybrid' },
                  { metric: 'Core Focus', hive: 'Database architecture setups', nectar: 'Checkout speed & inventory', queen: 'Multi-branch analytics', beezdms: 'Van sales & route tracking' }
                ].map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-apple-gray/30 transition-colors">
                    <td className="p-6 font-semibold text-apple-dark whitespace-nowrap">{row.metric}</td>
                    <td className="p-6">{row.hive}</td>
                    <td className="p-6">{row.nectar}</td>
                    <td className="p-6">{row.queen}</td>
                    <td className="p-6">{row.beezdms}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FadeIn>
        </div>
      </section>

      {/* Products CTA */}
      <section className="py-28 bg-apple-dark text-white border-t border-white/10 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-apple-blue/5 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <FadeIn>
            <h3 className="text-h2 mb-6">Experience the Ecosystem Sandbox</h3>
            <p className="text-body text-white/60 mb-10 max-w-xl mx-auto">
              Get in touch and we will walk you through which products fit your business.
            </p>
            <Link to="/demo" className="px-6 py-3.5 bg-white text-apple-dark hover:bg-white/90 rounded-full font-medium text-sm active:scale-95 transition-all duration-300 inline-block shadow-sm">
              Request a live sandbox demo
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
