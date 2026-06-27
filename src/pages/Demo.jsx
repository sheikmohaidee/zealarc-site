import React, { useState } from 'react';
import { Calendar, Monitor, Cpu, Sparkles, CheckCircle2, AlertCircle, Send } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export default function Demo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    businessType: 'Restaurant',
    product: 'Nectar'
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, message: '' });

    if (!formData.name || !formData.email || !formData.company) {
      setStatus({
        submitting: false,
        success: false,
        message: 'Please fill in name, email, and company.'
      });
      return;
    }

    try {
      const baseApiUrl = import.meta.env.VITE_API_URL || './api';
      const endpoint = `${baseApiUrl}/contact.php`.replace(/([^:]\/)\/+/g, "$1");

      // Package demo booking data as a standard contact form message
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: `Demo Request: ${formData.product}`,
        message: `Business Type: ${formData.businessType}\nProduct Interest: ${formData.product}\nRequested a live demo consultation.`
      };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          submitting: false,
          success: true,
          message: 'Your demo slot has been requested successfully! A Zealarc solutions expert will reach out to you within 24 hours.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          businessType: 'Restaurant',
          product: 'Nectar'
        });
      } else {
        setStatus({
          submitting: false,
          success: false,
          message: result.message || 'Failed to request demo. Please check configuration.'
        });
      }
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        message: 'Could not connect to the API server. If testing locally, ensure your database connection is active.'
      });
    }
  };

  const benefits = [
    {
      title: 'Personalized Walkthrough',
      desc: 'See exactly how our applications solve operational inefficiencies in your specific business category.',
      icon: Monitor
    },
    {
      title: 'Ecosystem Connectivity Demo',
      desc: 'Observe the immediate, automatic sync pipeline between sales, operations, and general bookkeeping ledgers.',
      icon: Cpu
    },
    {
      title: 'Hardware Diagnostics',
      desc: 'Verify integration parameters with printers, cash drawers, barcode readers, and mobile UPI checkout scans.',
      icon: Sparkles
    }
  ];

  return (
    <div className="pt-24 bg-white">
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Benefits & Intro */}
          <div className="lg:col-span-5">
            <FadeIn>
              <span className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-4 block">Product Showcase</span>
              <h1 className="text-4xl md:text-[56px] font-extrabold tracking-tight text-apple-dark leading-none mb-6 letter-spacing-section">
                See Zealarc in Action.
              </h1>
              <p className="text-base md:text-lg text-apple-dark/60 font-light leading-relaxed mb-12">
                Book a live demo with a product specialist to explore our digital solutions. We will walk you through a customized sandbox setup tailored to your business operations.
              </p>
            </FadeIn>

            <div className="flex flex-col gap-10">
              {benefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <FadeIn key={idx} delay={150 * idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-apple-gray flex items-center justify-center text-apple-accent shadow-sm flex-shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-apple-dark text-[17px] mb-1.5 tracking-tight">{item.title}</h4>
                      <p className="text-sm text-apple-dark/60 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div className="lg:col-span-7 bg-apple-gray rounded-32 p-10 border border-black/[0.01] hover:border-black/[0.03] hover:shadow-[0_15px_30px_rgba(0,0,0,0.01)] transition-all duration-350 ease-out">
            <FadeIn delay={200}>
              <h2 className="text-2xl font-bold text-apple-dark tracking-tight mb-8">Request a Live Demo</h2>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold text-apple-dark/60 uppercase tracking-wider">Full Name *</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Miller"
                      required
                      className="px-4 py-3.5 bg-white border border-black/[0.08] focus:border-apple-accent focus:ring-1 focus:ring-apple-accent outline-none rounded-xl text-sm transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold text-apple-dark/60 uppercase tracking-wider">Work Email *</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      required
                      className="px-4 py-3.5 bg-white border border-black/[0.08] focus:border-apple-accent focus:ring-1 focus:ring-apple-accent outline-none rounded-xl text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-bold text-apple-dark/60 uppercase tracking-wider">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="px-4 py-3.5 bg-white border border-black/[0.08] focus:border-apple-accent focus:ring-1 focus:ring-apple-accent outline-none rounded-xl text-sm transition-all"
                    />
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-xs font-bold text-apple-dark/60 uppercase tracking-wider">Company Name *</label>
                    <input 
                      type="text" 
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corporates"
                      required
                      className="px-4 py-3.5 bg-white border border-black/[0.08] focus:border-apple-accent focus:ring-1 focus:ring-apple-accent outline-none rounded-xl text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Business Type */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="businessType" className="text-xs font-bold text-apple-dark/60 uppercase tracking-wider">Business Type</label>
                    <select 
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className="px-4 py-3.5 bg-white border border-black/[0.08] focus:border-apple-accent focus:ring-1 focus:ring-apple-accent outline-none rounded-xl text-sm transition-all"
                    >
                      <option value="Restaurant">Restaurant / Cafe</option>
                      <option value="Retail">Retail Store</option>
                      <option value="Supermarket">Supermarket</option>
                      <option value="Enterprise">Large Enterprise</option>
                      <option value="Other">Other Business</option>
                    </select>
                  </div>

                  {/* Product Interest */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="product" className="text-xs font-bold text-apple-dark/60 uppercase tracking-wider">Product Sandbox</label>
                    <select 
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="px-4 py-3.5 bg-white border border-black/[0.08] focus:border-apple-accent focus:ring-1 focus:ring-apple-accent outline-none rounded-xl text-sm transition-all"
                    >
                      <option value="Nectar">Nectar (Smart POS)</option>
                      <option value="Hive">Hive (Tenant Provisioning)</option>
                      <option value="Queen">Queen (Super Admin)</option>
                      <option value="BeezDMS">BeezDMS (Distribution)</option>
                      <option value="Full Ecosystem">Full Integrated Suite</option>
                    </select>
                  </div>
                </div>

                {/* Submit button */}
                <button 
                  type="submit"
                  disabled={status.submitting}
                  className="mt-4 px-6 py-4 bg-apple-accent text-white font-medium rounded-xl hover:bg-[#0077ED] transition-colors flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {status.submitting ? 'Booking Slot...' : 'Book Demo'}
                  <Send size={16} />
                </button>

                {/* Status Messages */}
                {status.success === true && (
                  <div className="p-4 bg-green-50 text-green-800 rounded-xl flex gap-3 text-xs items-center border border-green-200">
                    <CheckCircle2 size={16} className="text-green-600 flex-shrink-0" />
                    <span>{status.message}</span>
                  </div>
                )}

                {status.success === false && (
                  <div className="p-4 bg-red-50 text-red-800 rounded-xl flex gap-3 text-xs items-center border border-red-200">
                    <AlertCircle size={16} className="text-red-600 flex-shrink-0" />
                    <span>{status.message}</span>
                  </div>
                )}
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
