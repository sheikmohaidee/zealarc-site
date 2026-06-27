import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Cpu, Globe, Smartphone, Database, ArrowRight, ShieldCheck, Clock, Settings, Truck } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export default function Solutions() {
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

  const renderSolutionVisual = (id) => {
    const baseClass = "w-10 h-10 text-apple-accent group-hover:scale-105 transition-transform duration-300 ease-out";
    
    switch (id) {
      case 'consulting':
        return (
          <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.5" y1="10.5" x2="15.5" y2="6.5" />
            <line x1="8.5" y1="13.5" x2="15.5" y2="17.5" />
          </svg>
        );
      case 'web-apps':
        return (
          <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="18" rx="2" ry="2" />
            <line x1="2" y1="8" x2="22" y2="8" />
            <circle cx="5" cy="5.5" r="0.5" fill="currentColor" />
            <circle cx="7.5" cy="5.5" r="0.5" fill="currentColor" />
            <circle cx="10" cy="5.5" r="0.5" fill="currentColor" />
            <path d="M8 12l-2 2 2 2" />
            <path d="M16 12l2 2-2 2" />
            <line x1="13" y1="12" x2="11" y2="16" />
          </svg>
        );
      case 'mobile-apps':
        return (
          <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="3" ry="3" />
            <path d="M12 18h.01" strokeWidth="2.5" />
            <path d="M10 4h4" />
            <rect x="8" y="7" width="8" height="8" rx="1" className="stroke-apple-accent/45 fill-apple-accent/5" />
          </svg>
        );
      case 'pos-solutions':
        return (
          <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" />
            <line x1="5" y1="12" x2="19" y2="12" />
            <rect x="8" y="5" width="8" height="4" rx="0.5" className="stroke-apple-accent/40 fill-apple-accent/5" />
            <circle cx="8" cy="15" r="0.75" fill="currentColor" />
            <circle cx="12" cy="15" r="0.75" fill="currentColor" />
            <circle cx="16" cy="15" r="0.75" fill="currentColor" />
            <circle cx="8" cy="18" r="0.75" fill="currentColor" />
            <circle cx="12" cy="18" r="0.75" fill="currentColor" />
            <circle cx="16" cy="18" r="0.75" fill="currentColor" />
          </svg>
        );
      case 'dms-solutions':
        return (
          <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="3" width="15" height="13" />
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
            <circle cx="5.5" cy="18.5" r="2.5" />
            <circle cx="18.5" cy="18.5" r="2.5" />
          </svg>
        );
      default:
        return null;
    }
  };

  const solutions = [
    {
      id: 'consulting',
      title: 'Consulting',
      subtitle: 'Strategy & Architecture',
      outcome: 'Helping businesses identify and implement the right digital solutions.',
      details: 'We analyze your existing workflows to identify critical operational bottlenecks. By mapping a clear technology strategy, we ensure your business invests only in systems that drive immediate margins and long-term security.',
      metrics: ['Operational Cost Analysis', 'Cloud Infrastructure Roadmap', 'Scalable Tech-stack Design'],
      icon: Cpu
    },
    {
      id: 'web-apps',
      title: 'Web Application Development',
      subtitle: 'High-performance Platforms',
      outcome: 'Custom web platforms tailored to business needs.',
      details: 'We build database-driven web applications using modern, lightweight frameworks. Every web app is engineered from day one to handle heavy loads, integrate with third-party systems, and render instantly across mobile and desktop devices.',
      metrics: ['Single Page Architectures', 'Optimized SQL Databases', 'RESTful API Connections'],
      icon: Globe
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Application Development',
      subtitle: 'iOS & Android Native Apps',
      outcome: 'Cross-platform mobile experiences designed for modern users.',
      details: 'From table orders to inventory logistics, we craft native-like mobile applications. We prioritize pixel-perfect typography, smooth transitions, and real-time cloud synchronization to keep your applications fast and responsive.',
      metrics: ['Cross-platform Codebases', 'Cloud Data Synchronization', 'Secure Payments Integration'],
      icon: Smartphone
    },
    {
      id: 'pos-solutions',
      title: 'POS Solutions',
      subtitle: 'Smart Billing Ecosystem',
      outcome: 'Smart billing and business management ecosystems for restaurants, cafes, retail stores, and supermarkets.',
      details: 'Our POS solutions bundle fast billing registers, table management parameters, barcode scanning, and secure payment integrations. Ensure checkout speed remains under 2 seconds while keeping branch data synchronized.',
      metrics: ['Fast Terminal Checkout', 'Table Layout Manager', 'Hardware Configurations'],
      icon: Database
    },
    {
      id: 'dms-solutions',
      title: 'Distribution Management Solutions',
      subtitle: 'Supply Chain & Logistics',
      outcome: 'Helping distributors manage warehouses, sales teams, vendors, and field operations efficiently.',
      details: 'Connect your back-office stock controls to field representatives. We deploy route optimization, live vehicle sync, vendor portals, and cloud-based invoicing apps to keep operations fluid without visual errors.',
      metrics: ['Route Optimization', 'Warehouse Intake Sync', 'Salesman Billing Apps'],
      icon: Truck
    }
  ];

  return (
    <div className="pt-24 bg-white">
      {/* Page Header */}
      <section className="py-16 md:py-24 border-b border-black/[0.04]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <span className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-4 block">Engineered Outcomes</span>
          </FadeIn>
          <FadeIn delay={200}>
            <h1 className="text-h1 text-apple-dark mb-6">
              Digital Solutions Built for Growth.
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-body text-apple-dark/60 max-w-3xl mx-auto">
              We focus on business outcomes, not just code. Explore our digital capabilities designed to streamline workflows and scale operations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-24 md:gap-36">
            {solutions.map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <div 
                  key={sol.id} 
                  id={sol.id} 
                  className="grid lg:grid-cols-12 gap-12 lg:gap-16 pt-16 border-t border-black/[0.05] first:border-t-0 items-start"
                >
                  {/* Left Title Column */}
                  <div className="lg:col-span-5">
                    <FadeIn>
                      <div className="w-12 h-12 rounded-2xl bg-apple-gray flex items-center justify-center mb-6 shadow-sm border border-black/[0.02]">
                        <Icon size={22} className="text-apple-accent" />
                      </div>
                      <span className="text-xs font-bold text-apple-accent uppercase tracking-widest mb-2 block">{sol.subtitle}</span>
                      <h2 className="text-h2 text-apple-dark mb-6">
                        {sol.title}
                      </h2>
                    </FadeIn>
                  </div>

                  {/* Right Content Column */}
                  <div className="lg:col-span-7 flex flex-col gap-6">
                    <FadeIn delay={200}>
                      <h3 className="text-h3 text-apple-dark mb-4">
                        {sol.outcome}
                      </h3>
                      <p className="text-body text-apple-dark/60 mb-2">
                        {sol.details}
                      </p>
                    </FadeIn>

                    <FadeIn delay={300} className="w-full">
                      <div className="grid sm:grid-cols-12 gap-6 items-stretch">
                        {/* Core Deliverables list */}
                        <div className="sm:col-span-8 p-8 bg-apple-gray rounded-24 flex flex-col justify-center">
                          <h4 className="text-xs font-bold text-apple-dark uppercase tracking-widest mb-4">Core Deliverables:</h4>
                          <ul className="grid sm:grid-cols-2 gap-3 text-sm text-apple-dark/70 font-medium">
                            {sol.metrics.map((metric, mIdx) => (
                              <li key={mIdx} className="flex gap-2.5 items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-apple-accent"></span>
                                {metric}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Subtle Apple-style Visual Support Card */}
                        <div className="sm:col-span-4 bg-apple-gray/40 border border-black/[0.03] rounded-24 flex flex-col items-center justify-center p-6 text-center group hover:border-black/[0.08] hover:bg-apple-gray/80 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_12px_24px_rgba(0,0,0,0.02)] transition-all duration-350 ease-out">
                          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm border border-black/[0.01] mb-2.5">
                            {renderSolutionVisual(sol.id)}
                          </div>
                          <span className="text-[10px] font-bold text-apple-dark/45 tracking-wider uppercase">
                            Setup Concept
                          </span>
                        </div>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-28 md:py-40 bg-apple-gray/50 border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-4">Development Process</h2>
            </FadeIn>
            <FadeIn delay={200}>
              <h3 className="text-h2 text-apple-dark mb-6">
                From concept to deployment.
              </h3>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {[
              { step: '01', name: 'Discovery', desc: 'Audit terminals, database connections, and printer systems.' },
              { step: '02', name: 'Planning', desc: 'Draft data models, SQL schemas, and pipeline architectures.' },
              { step: '03', name: 'Design', desc: 'Create clean, distraction-free Apple-inspired interface mockups.' },
              { step: '04', name: 'Development', desc: 'Write lightweight frontend views and secure PDO MySQL API routes.' },
              { step: '05', name: 'Deployment', desc: 'Setup index.html SPA routing and upload directly to public_html.' },
              { step: '06', name: 'Support', desc: 'Configure hardware, onboarding cashiers, and run daily backups.' }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={80 * idx} className="p-8 bg-white rounded-24 border border-black/[0.03] hover:border-black/[0.06] hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_15px_30px_rgba(0,0,0,0.02)] transition-all duration-350 ease-out shadow-sm flex flex-col justify-between min-h-[220px]">
                <div>
                  <span className="text-2xl font-extrabold text-apple-accent/25 block mb-4">{item.step}</span>
                  <h4 className="text-h4 text-apple-dark mb-2">{item.name}</h4>
                </div>
                <p className="text-body-sm text-apple-dark/60">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Zealarc Benefits */}
      <section className="py-28 md:py-40 bg-white border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-4">Why Zealarc</h2>
            </FadeIn>
            <FadeIn delay={200}>
              <h3 className="text-h2 text-apple-dark mb-6">
                Engineered for operational growth.
              </h3>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: 'Zero Overhead Codebases', desc: 'We write clean, efficient code without unnecessary dependencies, keeping your applications fast and lightweight.' },
              { title: 'Cloud Synchronization', desc: 'Your point-of-sale checkout maintains a continuous, secure connection to your central cloud database, ensuring real-time data accuracy across all branches.' },
              { title: 'Secure Data Pipelines', desc: 'We configure strict PDO prepared queries and CORS headers to prevent database vulnerabilities.' },
              { title: 'Onboarding & Hardware Help', desc: 'We provide direct team training and physical configuration of thermal printers and barcode cash drawers.' }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={100 * idx} className="p-10 bg-apple-gray rounded-32 border border-black/[0.01] hover:border-black/[0.03] hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_15px_30px_rgba(0,0,0,0.02)] transition-all duration-350 ease-out">
                <h4 className="text-h3 text-apple-dark mb-3">{item.title}</h4>
                <p className="text-body-sm text-apple-dark/60">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions CTA */}
      <section className="py-28 md:py-36 bg-apple-dark text-white border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <h3 className="text-h2 mb-6">Ready to build your digital solutions?</h3>
            <p className="text-body text-white/60 mb-10 max-w-xl mx-auto">
              Schedule a sandbox product walkthrough and consult directly with our digital architects.
            </p>
            <Link to="/demo" className="px-6 py-3.5 bg-white text-apple-dark hover:bg-white/90 rounded-full font-medium text-sm active:scale-95 transition-all duration-300 inline-block">
              Book a Setup Demo
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
