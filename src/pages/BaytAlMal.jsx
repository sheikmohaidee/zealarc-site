import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Heart, Award, Key, Eye } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export default function BaytAlMal() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreValues = [
    { title: 'Transparency', desc: 'Allow communities to trace exactly how contributions are utilized with auditable registers, intelligent reporting, and analytics.', icon: Eye },
    { title: 'Accountability', desc: 'Role-based permission steps ensure only verified requests are approved and processed.', icon: Award },
    { title: 'Community Support', desc: 'Builds trust and encourages structured collaboration within local charity networks.', icon: Key },
    { title: 'Sadaqah Jariyah', desc: 'Designed purely to serve communities, completely free of software subscriptions.', icon: Heart }
  ];

  return (
    <div className="pt-24 bg-apple-gray text-apple-dark font-sans overflow-x-hidden min-h-screen relative">
      {/* Subtle background glow/gradient - Typography-focused decoration */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-apple-blue/5 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-32 relative z-10 text-center">
        {/* Badges */}
        <FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="text-apple-blue text-xs font-semibold uppercase tracking-wider">Community Initiative</span>
            <span className="px-3 py-1 bg-apple-blue/10 text-apple-blue text-[10px] font-bold rounded-full uppercase tracking-widest border border-apple-blue/20">
              100% Free Forever
            </span>
            <span className="px-3 py-1 bg-apple-dark/5 text-apple-dark/60 text-[10px] font-bold rounded-full uppercase tracking-widest border border-black/[0.05]">
              Sadaqah Jariyah
            </span>
          </div>
        </FadeIn>

        {/* Hero Header */}
        <FadeIn delay={200}>
          <h1 className="text-h1 text-apple-dark mb-6">
            Bayt-Al-Mal.
          </h1>
        </FadeIn>

        <FadeIn delay={300}>
          <span className="text-lg md:text-xl italic text-apple-dark/50 font-medium tracking-wide block mb-12">
            "Charity Does Not Decrease Wealth" — صدقة جارية
          </span>
        </FadeIn>

        <FadeIn delay={400}>
          <p className="text-body text-apple-dark/70 mb-20 max-w-3xl mx-auto">
            A community charity platform built to serve. Manage donations, track how funds are used, and organize charitable activities with complete transparency.
          </p>
        </FadeIn>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent my-16"></div>

        {/* Core Values Section */}
        <div className="text-left mb-24">
          <FadeIn>
            <h3 className="text-xs font-bold text-apple-blue uppercase tracking-widest mb-12 text-center">Core Pillars</h3>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {coreValues.map((val, idx) => (
              <FadeIn key={idx} delay={50 * idx} className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.03] shadow-sm flex items-center justify-center mb-5">
                  <val.icon size={18} className="text-apple-blue" />
                </div>
                <h4 className="text-h3 text-apple-dark mb-2">{val.title}</h4>
                <p className="text-body-sm text-apple-dark/60">{val.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Why is Bayt-Al-Mal Free Section */}
        <FadeIn delay={400}>
          <div className="text-left p-10 md:p-14 bg-white rounded-[40px] border border-black/[0.03] shadow-[0_30px_60px_rgba(0,0,0,0.02)] mb-24">
            <h3 className="text-h3 text-apple-dark mb-6 text-center md:text-left">Why is Bayt-Al-Mal Free?</h3>
            <p className="text-body text-apple-dark/70">
              Bayt-Al-Mal is offered as a <strong className="font-semibold text-apple-dark">Sadaqah Jariyah</strong> initiative. It helps communities support one another through transparency, accountability, and shared responsibility. There are no subscriptions, no fees — it is free to use, always.
            </p>
          </div>
        </FadeIn>

        {/* Final CTA */}
        <FadeIn delay={500}>
          <div className="py-12 border-t border-black/[0.06] text-center">
            <h3 className="text-h3 text-apple-dark mb-6 tracking-tight">Built for your community</h3>
            <p className="text-body-sm text-apple-dark/60 mb-10 max-w-xl mx-auto">
              If your mosque, charity group, or community organization needs to coordinate donations and distributions with accountability, get in touch.
            </p>
            <Link to="/contact" className="px-6 py-3.5 bg-apple-dark text-white hover:bg-apple-dark/95 rounded-full font-medium text-sm active:scale-95 transition-all duration-300 inline-block shadow-sm">
              Contact Us to Get Set Up
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
