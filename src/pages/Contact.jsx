import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const industry = params.get('industry');
    if (industry) {
      setFormData(prev => ({
        ...prev,
        message: `I'd like to discuss solutions for the ${industry} industry.`
      }));
    }
  }, [location]);
  
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

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        success: false,
        message: 'Please fill in name, email, and message.'
      });
      return;
    }

    try {
      // Use configured VITE_API_URL or fallback to relative domain paths
      const baseApiUrl = import.meta.env.VITE_API_URL || './api';
      const endpoint = `${baseApiUrl}/contact.php`.replace(/([^:]\/)\/+/g, "$1"); // prevent duplicate slash issues

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          submitting: false,
          success: true,
          message: result.message || 'Your message has been sent successfully!'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus({
          submitting: false,
          success: false,
          message: result.message || 'Failed to submit form. Please check configuration.'
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

  return (
    <div className="pt-24 bg-white">
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5">
            <FadeIn>
              <span className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-4 block">Get in Touch</span>
              <h1 className="text-4xl md:text-[56px] font-extrabold tracking-tight text-apple-dark leading-none mb-6 letter-spacing-section">
                Let's Build Something Great Together.
              </h1>
              <p className="text-base md:text-lg text-apple-dark/60 font-light leading-relaxed mb-12">
                Have questions about Nectar POS configurations, Queen multi-tenant setups, or looking to schedule a database automation audit? Speak directly with our solution architects.
              </p>
            </FadeIn>

            <div className="flex flex-col gap-8">
              {/* Email */}
              <FadeIn delay={150} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-apple-gray flex items-center justify-center text-apple-accent shadow-sm flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-apple-dark text-sm mb-1">Email</h4>
                  <a href="mailto:hello@zealarc.com" className="text-xs text-apple-dark/60 hover:text-apple-accent transition-colors">
                    hello@zealarc.com
                  </a>
                </div>
              </FadeIn>

              {/* Phone */}
              <FadeIn delay={250} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-apple-gray flex items-center justify-center text-apple-accent shadow-sm flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-apple-dark text-sm mb-1">Phone</h4>
                  <a href="tel:+18005550199" className="text-xs text-apple-dark/60 hover:text-apple-accent transition-colors">
                    +1 (800) 555-0199
                  </a>
                </div>
              </FadeIn>

              {/* Address */}
              <FadeIn delay={350} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-apple-gray flex items-center justify-center text-apple-accent shadow-sm flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-apple-dark text-sm mb-1">Address</h4>
                  <p className="text-xs text-apple-dark/60 leading-relaxed">
                    Zealarc Digital Solutions,<br />
                    100 Plaza Suite 32B,<br />
                    San Francisco, CA 94111
                  </p>
                </div>
              </FadeIn>

              {/* Office Information (Hours) */}
              <FadeIn delay={400} className="flex gap-4 items-start border-t border-black/[0.05] pt-6 mt-2">
                <div className="w-10 h-10 rounded-xl bg-apple-gray flex items-center justify-center text-apple-dark/60 shadow-sm flex-shrink-0">
                  <span className="text-xs font-bold uppercase">hrs</span>
                </div>
                <div>
                  <h4 className="font-semibold text-apple-dark text-sm mb-1">Office Hours</h4>
                  <p className="text-xs text-apple-dark/60 leading-relaxed">
                    Monday — Friday: 9:00 AM — 6:00 PM EST<br />
                    Saturday: 10:00 AM — 2:00 PM EST (Support only)
                  </p>
                </div>
              </FadeIn>

              {/* Quick Contact Options */}
              <FadeIn delay={450} className="grid grid-cols-3 gap-3 pt-6 border-t border-black/[0.05]">
                <a href="https://wa.me/18005550199" target="_blank" rel="noopener noreferrer" className="p-3 bg-apple-gray hover:bg-[#E8E8ED] hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(0,0,0,0.01)] rounded-xl text-center flex flex-col items-center gap-1.5 transition-all duration-300">
                  <span className="text-[11px] font-bold text-apple-dark">WhatsApp</span>
                  <span className="text-[9px] text-apple-dark/50 leading-none">Instant chat</span>
                </a>
                <a href="tel:+18005550199" className="p-3 bg-apple-gray hover:bg-[#E8E8ED] hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(0,0,0,0.01)] rounded-xl text-center flex flex-col items-center gap-1.5 transition-all duration-300">
                  <span className="text-[11px] font-bold text-apple-dark">Phone</span>
                  <span className="text-[9px] text-apple-dark/50 leading-none">Direct call</span>
                </a>
                <a href="mailto:hello@zealarc.com" className="p-3 bg-apple-gray hover:bg-[#E8E8ED] hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(0,0,0,0.01)] rounded-xl text-center flex flex-col items-center gap-1.5 transition-all duration-300">
                  <span className="text-[11px] font-bold text-apple-dark">Email</span>
                  <span className="text-[9px] text-apple-dark/50 leading-none">Inquiries</span>
                </a>
              </FadeIn>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7 bg-apple-gray rounded-32 p-10 border border-black/[0.01] hover:border-black/[0.03] hover:shadow-[0_15px_30px_rgba(0,0,0,0.01)] transition-all duration-350 ease-out">
            <FadeIn delay={200}>
              <h2 className="text-2xl font-bold text-apple-dark tracking-tight mb-8">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold text-apple-dark/60 uppercase tracking-wider">Name *</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="px-4 py-3.5 bg-white border border-black/[0.08] focus:border-apple-accent focus:ring-1 focus:ring-apple-accent outline-none rounded-xl text-sm transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold text-apple-dark/60 uppercase tracking-wider">Email Address *</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
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
                    <label htmlFor="company" className="text-xs font-bold text-apple-dark/60 uppercase tracking-wider">Company</label>
                    <input 
                      type="text" 
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      className="px-4 py-3.5 bg-white border border-black/[0.08] focus:border-apple-accent focus:ring-1 focus:ring-apple-accent outline-none rounded-xl text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-bold text-apple-dark/60 uppercase tracking-wider">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Ecosystem consultation inquiry"
                    className="px-4 py-3.5 bg-white border border-black/[0.08] focus:border-apple-accent focus:ring-1 focus:ring-apple-accent outline-none rounded-xl text-sm transition-all"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold text-apple-dark/60 uppercase tracking-wider">Message *</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Detail your operational requirements..."
                    required
                    className="px-4 py-3.5 bg-white border border-black/[0.08] focus:border-apple-accent focus:ring-1 focus:ring-apple-accent outline-none rounded-xl text-sm transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button 
                  type="submit"
                  disabled={status.submitting}
                  className="mt-4 px-6 py-4 bg-apple-accent text-white font-medium rounded-xl hover:bg-[#0077ED] transition-colors flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {status.submitting ? 'Sending...' : 'Send Message'}
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

      {/* FAQ Section */}
      <section className="py-28 md:py-40 bg-apple-gray/20 border-t border-black/[0.04]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="mb-16 text-center">
            <FadeIn>
              <h2 className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-4">Questions</h2>
            </FadeIn>
            <FadeIn delay={200}>
              <h3 className="text-4xl font-extrabold text-apple-dark tracking-tight letter-spacing-section">
                Contact FAQs
              </h3>
            </FadeIn>
          </div>

          <FadeIn delay={300}>
            <div className="flex flex-col divide-y divide-black/[0.08] border-t border-b border-black/[0.08]">
              {[
                { q: "What is your typical response time?", a: "For contact form submissions, our sales and solutions consultants respond within 24 business hours. For emergency support, agents are available 24/7/365." },
                { q: "Do you charge for scoping and setup calls?", a: "No. All initial consultations, sandbox walkthroughs, and technology roadmaps are completely complimentary. We discuss your outcomes first." },
                { q: "Can I request a custom hardware compatibility audit?", a: "Yes. Our team can inspect your existing printers, tablets, and network infrastructure remotely or in-person to ensure compatibility before you buy." }
              ].map((item, idx) => (
                <div key={idx} className="py-6 flex flex-col md:flex-row gap-4 items-start">
                  <h4 className="font-bold text-apple-dark text-lg md:w-1/3 flex-shrink-0">{item.q}</h4>
                  <p className="text-sm text-apple-dark/60 leading-relaxed font-light md:w-2/3">{item.a}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-28 md:py-36 bg-apple-dark text-white border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <h3 className="text-4xl font-extrabold mb-6 letter-spacing-section">Ready to experience the ecosystem?</h3>
            <p className="text-lg text-white/60 font-light leading-relaxed mb-10 max-w-xl mx-auto">
              Schedule an interactive product demo slot and see Zealarc software sync in real-time.
            </p>
            <Link to="/demo" className="px-8 py-4 bg-white text-apple-dark hover:bg-white/90 rounded-full font-medium active:scale-95 transition-all duration-300 inline-block">
              Schedule a Live Demo Call
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
