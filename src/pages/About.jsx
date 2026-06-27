import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Target, Heart, Award, Shield, Users, Globe2 } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export default function About() {
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

  const values = [
    {
      title: 'Innovation',
      desc: 'We bypass heavy, archaic tech stacks to build lightweight, fast digital ecosystems that adapt to real-world environments.',
      icon: Target
    },
    {
      title: 'Reliability',
      desc: 'Our point-of-sale terminals and background databases are hardened against network downtime, ensuring continuous business operations.',
      icon: Shield
    },
    {
      title: 'Impact',
      desc: 'We measure success solely on business outcomes. If our software doesn\'t simplify operations or save staff hours, we iterate.',
      icon: Award
    }
  ];

  const timeline = [
    { year: '2021', title: 'The Beginning', desc: 'Started by building custom websites and mobile applications for businesses across various industries while understanding real business needs.' },
    { year: '2022', title: 'Building Alongside Our Clients', desc: 'As we continued delivering digital solutions, we began developing our own POS platform in parallel, driven by the challenges we observed from our clients\' daily operations.' },
    { year: '2023', title: 'Growing the Ecosystem', desc: 'Expanded the POS platform by introducing Hive, Nectar, and Queen, creating a unified suite for modern businesses.' },
    { year: 'Today', title: 'Beyond Software Development', desc: 'Today, Zealarc offers a complete ecosystem of products including Nectar, Hive, Queen, BeezDMS, and Bayt-Al-Mal while continuing to build custom web and mobile applications for businesses.' }
  ];

  return (
    <div className="pt-24 bg-white">
      {/* Intro Hero */}
      <section className="py-16 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <span className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-4 block">Our Identity</span>
          </FadeIn>
          <FadeIn delay={200}>
            <h1 className="text-h1 text-apple-dark mb-6">
               Building Software That Works.
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-body text-apple-dark/60 max-w-3xl mx-auto">
               We build software for growing businesses — POS systems, distribution tools, and custom web applications that simplify your daily operations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-28 md:py-36 bg-white border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <FadeIn>
              <span className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-4 block">Our Origin</span>
              <h2 className="text-h2 text-apple-dark mb-6">
                 How it started.
              </h2>
            </FadeIn>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-6 text-body text-apple-dark/60">
            <FadeIn delay={200}>
              <p>
                Zealarc started because we saw a common problem: businesses stuck with clunky registers, scattered spreadsheets, and admin tools that made simple tasks complicated.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <p>
                We decided to build something better. A connected set of tools — where billing, operations, and reporting work together naturally — so business owners can spend less time on software and more time with their customers.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-apple-gray border-y border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16">
          <div className="flex flex-col justify-between">
            <FadeIn>
              <span className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-4 block">Core Mission</span>
              <p className="text-body text-apple-dark/85">
                 Build practical, reliable software that removes unnecessary complexity from daily business operations.
              </p>
            </FadeIn>
          </div>
          <div className="flex flex-col justify-between border-t md:border-t-0 md:border-l border-black/[0.08] pt-8 md:pt-0 md:pl-16">
            <FadeIn delay={200}>
              <span className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-4 block">Future Vision</span>
              <p className="text-body text-apple-dark/85">
                 Become the go-to partner for businesses that need dependable software — from single-store cafes to multi-branch retail networks.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-28 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-4">Our Core Values</h2>
            </FadeIn>
            <FadeIn delay={200}>
              <h3 className="text-h2 text-apple-dark mb-6">
                 What drives our design philosophy.
              </h3>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <FadeIn key={idx} delay={100 * idx} className="p-10 bg-apple-gray rounded-32 border border-black/[0.01] hover:border-black/[0.03] hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_15px_30px_rgba(0,0,0,0.02)] transition-all duration-350 ease-out">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm">
                    <Icon size={22} className="text-apple-accent" />
                  </div>
                  <h4 className="text-h3 text-apple-dark mb-4">{v.title}</h4>
                  <p className="text-body-sm text-apple-dark/60">{v.desc}</p>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="journey" className="py-28 md:py-40 bg-apple-gray/40 border-y border-black/[0.04]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="mb-20 text-center">
            <FadeIn>
              <h2 className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-4">Our Journey</h2>
            </FadeIn>
            <FadeIn delay={200}>
              <h3 className="text-h2 text-apple-dark">
                 How we evolved.
              </h3>
            </FadeIn>
          </div>

          <div className="relative pl-8 md:pl-12 border-l border-black/[0.08] flex flex-col gap-16 ml-4">
            {timeline.map((item, idx) => (
              <FadeIn key={idx} delay={100 * idx} className="relative">
                {/* Bullet node */}
                <span className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-apple-accent border-4 border-white shadow-sm"></span>
                
                <span className="text-xs font-bold text-apple-accent block mb-1">{item.year}</span>
                <h4 className="text-h4 text-apple-dark mb-2">{item.title}</h4>
                <p className="text-body-sm text-apple-dark/60 max-w-2xl">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-28 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-6">
            <FadeIn>
              <h2 className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-4">Global Reach</h2>
            </FadeIn>
            <FadeIn delay={200}>
              <h3 className="text-h2 text-apple-dark mb-6">
                 Deployed across multiple regions.
              </h3>
            </FadeIn>
            <FadeIn delay={300}>
              <p className="text-body text-apple-dark/60 mb-6">
                 Our team works remotely, so we can deploy and support setups anywhere. Whether you run a single cafe or a chain of retail stores, we handle the technical side so your checkout stays reliable.
              </p>
            </FadeIn>

            <div className="flex gap-8 mt-10">
              <FadeIn delay={400} className="flex flex-col gap-1">
                <span className="text-3xl font-extrabold text-apple-dark">500+</span>
                <span className="text-xs text-apple-dark/50 font-medium uppercase tracking-wider">Active Setups</span>
              </FadeIn>
              <FadeIn delay={500} className="flex flex-col gap-1">
                <span className="text-3xl font-extrabold text-apple-dark">4</span>
                <span className="text-xs text-apple-dark/50 font-medium uppercase tracking-wider">Countries</span>
              </FadeIn>
            </div>
          </div>

          <div className="md:col-span-6 flex justify-center">
            <FadeIn delay={450} className="w-full">
              <div className="p-8 bg-apple-gray rounded-32 border border-black/[0.03] text-center flex flex-col items-center py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-radial-gradient from-apple-accent/5 to-transparent pointer-events-none"></div>
                <Globe2 size={80} className="text-apple-accent/30 mb-8" />
                <h4 className="text-h3 text-apple-dark mb-3">Distributed Architecture</h4>
                <p className="text-body-sm text-apple-dark/60 max-w-sm">
                   We set up local hosting environments tailored to each region, keeping your system fast and responsive regardless of location.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Clients Choose Zealarc (Trust indicators) */}
      <section className="py-28 md:py-40 bg-apple-gray/50 border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-4">Why Clients Choose Zealarc</h2>
            </FadeIn>
            <FadeIn delay={200}>
              <h3 className="text-h2 text-apple-dark mb-6">
                 Built to be dependable.
              </h3>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Strict Uptime Safeguards', desc: 'Our software keeps working even when your internet drops, so you never lose a sale.' },
              { title: 'Secure Data Handling', desc: 'All data transactions use industry-standard security protocols to keep your information safe.' },
              { title: 'Dedicated Setup Support', desc: 'Our team walks you through the entire setup — from menu configuration to connecting your receipt printer.' }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={100 * idx} className="p-10 bg-white rounded-32 border border-black/[0.03] hover:border-black/[0.06] hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_15px_30px_rgba(0,0,0,0.02)] transition-all duration-350 ease-out shadow-sm">
                <h4 className="text-h4 text-apple-dark mb-3">{item.title}</h4>
                <p className="text-body-sm text-apple-dark/60">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-28 md:py-36 bg-apple-dark text-white border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <h3 className="text-h2 mb-6">Let's talk about your business.</h3>
            <p className="text-body text-white/60 mb-10 max-w-xl mx-auto">
               Reach out to our team and we will help you find the right solution.
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
