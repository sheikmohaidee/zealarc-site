import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Utensils, Coffee, ShoppingBag, Store, Building2, ChevronRight, Check } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export default function Industries() {
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

  const industryData = [
    {
      id: 'restaurants',
      name: 'Restaurants',
      icon: Utensils,
      description: 'Streamline tables, kitchens, and ordering channels.',
      challenges: 'High table-turnover friction, manual order errors between wait staff and the kitchen, and complex checkout bill splits that delay customer departures.',
      solutions: 'Nectar Table Management layout maps reservations instantly, while digital checkout splits bills and prints receipt logs in under 3 seconds.',
      benefits: [
        'Interactive Table Management layouts showing active/reserved status.',
        'Direct Kitchen Order Tickets (KOT) sent to prep screens immediately.',
        'Split-bill options to handle group checkouts smoothly.'
      ],
      recommendation: 'Hive + Nectar (Full table management, KOT system, kitchen displays, and live operations dashboard).',
      image: './assets/order confirmation page.jpeg'
    },
    {
      id: 'cafes',
      name: 'Cafes',
      icon: Coffee,
      description: 'Fast-paced billing engineered for peak rush hours.',
      challenges: 'Peak-hour queue bottlenecks, modifier tracking errors (espresso/milk adjustments), and high labor costs for order taking during rushes.',
      solutions: 'Quick-tap express billing grid combined with custom table-QR codes for self-ordering by customers.',
      benefits: [
        'Express checkout grid with quick-tap item categorization.',
        'Custom QR scans placed on tables for direct client mobile ordering.',
        'Automated modifier options for easy espresso/milk customization.'
      ],
      recommendation: 'Nectar (Speed-focused terminal, custom modifier matrix, and QR code customer ordering).',
      image: './assets/main-page-order.jpeg'
    },
    {
      id: 'retail',
      name: 'Retail Stores',
      icon: ShoppingBag,
      description: 'Sync live stocks, price changes, and promotions.',
      challenges: 'Inability to track stock levels in real time, price structures changing frequently across branches, and manual inventory tracking overhead.',
      solutions: 'Queen central operations console updates barcodes, prices, and stock volumes across all locations automatically.',
      benefits: [
        'Live stock tracker logs and automated low-stock warnings.',
        'Barcode search systems compatible with standard scanners.',
        'Customer purchase databases to drive retention promotions.'
      ],
      recommendation: 'Hive + Nectar + Queen (Barcode checkout terminals coupled with centralized stock, pricing, and multi-store control console).',
      image: './assets/inventory management.jpeg'
    },
    {
      id: 'supermarkets',
      name: 'Supermarkets',
      icon: Store,
      description: 'Power high-volume multi-counter billing terminals.',
      challenges: 'Massive product catalogs causing lookup lag, cash register shortages at shift handovers, and terminal crashes under high checkout volumes.',
      solutions: 'Secure cloud database engine engineered for low latency catalog search and detailed multi-cashier shift auditing.',
      benefits: [
        'Multi-counter cashier sessions with automated shift auditing.',
        'High-density item catalogs showing prices and margins.',
        'Unified payment card scanner and UPI integrations.'
      ],
      recommendation: 'Nectar Enterprise Suite + Queen (High-speed cloud counters, real-time data sync, shift reconciliations, and central management control).',
      image: './assets/category management.jpeg'
    },
    {
      id: 'enterprises',
      name: 'Enterprises',
      icon: Building2,
      description: 'Connected databases and custom system controls.',
      challenges: 'Scattered billing data across legacy systems, lack of unified cashier auditing, and operational sync delays between branches.',
      solutions: 'Queen Enterprise central operations API mapping transaction events directly to custom corporate ERP networks, providing secure logs.',
      benefits: [
        'Custom RESTful APIs mapping sales invoices directly to ERPs.',
        'Multi-user permissions with strict manager audit overrides.',
        'Central catalog distribution and automated branch stock alerts.'
      ],
      recommendation: 'Queen + BeezDMS (Central operations API sync, distribution workflows, and secure catalog deployment controllers).',
      image: './assets/order history.jpeg'
    }
  ];

  return (
    <div className="pt-24 bg-white">
      {/* Intro Header */}
      <section className="py-16 md:py-24 border-b border-black/[0.04]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <span className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-4 block">Targeted Verticals</span>
          </FadeIn>
          <FadeIn delay={200}>
            <h1 className="text-h1 text-apple-dark mb-6">
              Built for Every Business.
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-body text-apple-dark/60 max-w-3xl mx-auto">
              Connected solutions built to solve real-world industry bottlenecks.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Industries Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-24 md:gap-32">
            {industryData.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div 
                  key={ind.id} 
                  id={ind.id} 
                  className="grid lg:grid-cols-12 gap-12 pt-16 border-t border-black/[0.05] first:border-t-0 items-start"
                >
                  {/* Left Column */}
                  <div className="lg:col-span-5 lg:sticky lg:top-28">
                    <FadeIn>
                      <div className="w-12 h-12 rounded-2xl bg-apple-gray flex items-center justify-center mb-6 shadow-sm border border-black/[0.02]">
                        <Icon size={22} className="text-apple-accent" />
                      </div>
                      <h2 className="text-h2 text-apple-dark mb-3">
                        {ind.name}
                      </h2>
                      <p className="text-body text-apple-dark/50 mb-6">
                        {ind.description}
                      </p>
                      <Link 
                        to="/contact" 
                        className="text-xs font-semibold text-apple-accent hover:text-[#0077ED] flex items-center gap-1 group transition-all duration-300"
                      >
                        Request solution deployment 
                        <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                      </Link>
                    </FadeIn>
                  </div>

                  {/* Right Column */}
                  <div className="lg:col-span-7 flex flex-col gap-6">
                    <FadeIn delay={200} className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 bg-red-500/[0.02] border border-red-500/[0.06] hover:border-red-500/[0.12] hover:-translate-y-0.5 transition-all duration-350 ease-out rounded-24">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 block mb-2">Challenge</span>
                        <p className="text-body-sm text-apple-dark/80">{ind.challenges}</p>
                      </div>
                      <div className="p-6 bg-apple-accent/[0.02] border border-apple-accent/[0.06] hover:border-apple-accent/[0.12] hover:-translate-y-0.5 transition-all duration-350 ease-out rounded-24">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-apple-accent block mb-2">How Zealarc Solves It</span>
                        <p className="text-body-sm text-apple-dark/80">{ind.solutions}</p>
                      </div>
                    </FadeIn>

                    <FadeIn delay={250} className="p-8 bg-apple-accent/[0.04] border border-apple-accent/[0.08] hover:border-apple-accent/[0.15] hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_15px_30px_rgba(0,113,227,0.02)] transition-all duration-350 ease-out rounded-24">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-apple-accent block mb-2">Recommended Setup</span>
                      <h4 className="text-h4 text-apple-dark mb-1">
                        {ind.recommendation.split('(')[0].trim()}
                      </h4>
                      <p className="text-body-sm text-apple-dark/70">
                        {ind.recommendation.includes('(') ? ind.recommendation.substring(ind.recommendation.indexOf('(') + 1, ind.recommendation.length - 1) : ''}
                      </p>
                    </FadeIn>

                    <FadeIn delay={300} className="p-8 bg-apple-gray border border-black/[0.01] hover:border-black/[0.03] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.02)] transition-all duration-350 ease-out rounded-24">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-apple-dark/40 block mb-4">Outcomes & Benefits</span>
                      <ul className="flex flex-col gap-4">
                        {ind.benefits.map((bp, bpIdx) => (
                          <li key={bpIdx} className="flex gap-3 text-body-sm text-apple-dark/70">
                            <span className="w-5 h-5 rounded-full bg-apple-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check size={12} className="text-apple-accent" />
                            </span>
                            <span>{bp}</span>
                          </li>
                        ))}
                      </ul>
                    </FadeIn>

                    {ind.image && (
                      <FadeIn delay={400} className="w-full">
                        <div className="p-2 bg-apple-gray rounded-32 border border-black/[0.04] overflow-hidden shadow-sm">
                          <img 
                            src={ind.image} 
                            alt={ind.name} 
                            className="rounded-24 w-full object-cover max-h-[420px] hover:scale-[1.01] transition-transform duration-500"
                          />
                        </div>
                      </FadeIn>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Success Metrics */}
      <section className="py-28 md:py-40 bg-white border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-4">Success Metrics</h2>
            </FadeIn>
            <FadeIn delay={200}>
              <h3 className="text-h2 text-apple-dark mb-6">
                Measurable business outcomes.
              </h3>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: '3s or less', label: 'Average checkout speed', desc: 'Optimized search indexing yields single-digit millisecond client load times.' },
              { value: 'Less waiting', label: 'For customers', desc: 'QR-based ordering sends orders directly to the kitchen, reducing time customers spend waiting for staff.' },
              { value: 'Always on', label: 'Reliability', desc: 'Built-in offline storage means your POS keeps working during internet outages — no lost transactions.' }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={100 * idx} className="p-10 bg-apple-gray rounded-32 text-center border border-black/[0.01] hover:border-black/[0.03] hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_15px_30px_rgba(0,0,0,0.02)] transition-all duration-350 ease-out">
                <span className="text-4xl md:text-5xl font-extrabold text-apple-dark block mb-2">{item.value}</span>
                <span className="text-xs font-bold text-apple-accent block mb-4 uppercase tracking-wider">{item.label}</span>
                <p className="text-body-sm text-apple-dark/60">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Industries CTA */}
      <section className="py-28 md:py-36 bg-apple-dark text-white border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <h3 className="text-h2 text-white mb-6">Want to align your industry workflows?</h3>
            <p className="text-body text-white/60 mb-10 max-w-xl mx-auto">
              Our engineering team imports existing product lists, configures printing hardware, and activates UPI sync.
            </p>
            <Link to="/contact" className="px-6 py-3.5 bg-white text-apple-dark hover:bg-white/90 rounded-full font-medium text-sm active:scale-95 transition-all duration-300 inline-block">
              Talk to an expert
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
