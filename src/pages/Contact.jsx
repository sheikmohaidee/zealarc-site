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
    message: '',
    b_url: ''
  });
  
  const [errors, setErrors] = useState({});
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

  useEffect(() => {
    if (status.success === true) {
      const timer = setTimeout(() => {
        setStatus(prev => ({ ...prev, success: null }));
      }, 8000); // Auto-hide after 8 seconds
      return () => clearTimeout(timer);
    }
  }, [status.success]);
  
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (formData.phone.trim() && !/^\+?[0-9\s\-()]{7,20}$/.test(formData.phone)) {
      tempErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    return tempErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus({ submitting: true, success: null, message: '' });

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
          message: result.message || 'Message sent successfully.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          b_url: ''
        });
      } else {
        setStatus({
          submitting: false,
          success: false,
          message: result.message || 'Unable to send your message.'
        });
      }
    } catch (err) {
      if (import.meta.env.DEV) {
        setStatus({
          submitting: false,
          success: true,
          message: 'Contact form is running in development mode. The email service will become active after deployment.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          b_url: ''
        });
      } else {
        setStatus({
          submitting: false,
          success: false,
          message: 'Unable to send your message.'
        });
      }
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
                  <a href="mailto:contact.zealarc@gmail.com" className="text-xs text-apple-dark/60 hover:text-apple-accent transition-colors font-medium">
                    contact.zealarc@gmail.com
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
                  <a href="tel:+917639325272" className="text-xs text-apple-dark/60 hover:text-apple-accent transition-colors font-medium">
                    +91 76393 25272
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
                    Chennai, Tamil Nadu, India
                  </p>
                </div>
              </FadeIn>



              {/* Quick Contact Options */}
              <FadeIn delay={450} className="grid grid-cols-3 gap-3 pt-6 border-t border-black/[0.05]">
                <a href="https://wa.me/917639325272" target="_blank" rel="noopener noreferrer" className="p-3 bg-apple-gray hover:bg-[#E8E8ED] hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(0,0,0,0.01)] rounded-xl text-center flex flex-col items-center gap-1.5 transition-all duration-300">
                  <span className="text-[11px] font-bold text-apple-dark">WhatsApp</span>
                  <span className="text-[9px] text-apple-dark/50 leading-none">Instant chat</span>
                </a>
                <a href="tel:+917639325272" className="p-3 bg-apple-gray hover:bg-[#E8E8ED] hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(0,0,0,0.01)] rounded-xl text-center flex flex-col items-center gap-1.5 transition-all duration-300">
                  <span className="text-[11px] font-bold text-apple-dark">Phone</span>
                  <span className="text-[9px] text-apple-dark/50 leading-none">Direct call</span>
                </a>
                <a href="mailto:contact.zealarc@gmail.com" className="p-3 bg-apple-gray hover:bg-[#E8E8ED] hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(0,0,0,0.01)] rounded-xl text-center flex flex-col items-center gap-1.5 transition-all duration-300">
                  <span className="text-[11px] font-bold text-apple-dark">Email</span>
                  <span className="text-[9px] text-apple-dark/50 leading-none">Inquiries</span>
                </a>
              </FadeIn>
            </div>
          </div>

          {/* Right Column: Contact form / Success Message */}
          <div className="lg:col-span-7">
            {status.success === true ? (
              <FadeIn>
                <div className="bg-white rounded-32 p-10 md:p-12 border border-black/[0.04] shadow-[0_20px_50px_rgba(0,0,0,0.05)] text-center flex flex-col items-center justify-center min-h-[530px]">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500 mb-6 shadow-sm border border-green-100">
                    <CheckCircle2 size={32} />
                  </div>
                  <h2 className="text-3xl font-extrabold text-apple-dark mb-4">Thank You!</h2>
                  <p className="text-sm text-apple-dark/60 leading-relaxed max-w-md mb-8">
                    We've received your message successfully. Thank you for contacting Zealarc. Our team will review your enquiry and get back to you within one business day.
                  </p>
                  <div className="flex gap-4">
                    <Link to="/" className="px-5 py-2.5 bg-apple-accent text-white hover:bg-[#0077ED] rounded-full text-xs font-medium transition-all active:scale-95 shadow-sm">
                      Back to Home
                    </Link>
                    <button 
                      onClick={() => setStatus(prev => ({ ...prev, success: null }))}
                      className="px-5 py-2.5 border border-black/10 hover:bg-apple-gray text-apple-dark rounded-full text-xs font-medium transition-all active:scale-95"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              </FadeIn>
            ) : (
              <div className="bg-apple-gray rounded-32 p-10 border border-black/[0.01] hover:border-black/[0.03] hover:shadow-[0_15px_30px_rgba(0,0,0,0.01)] transition-all duration-350 ease-out">
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
                      className={`px-4 py-3.5 bg-white border ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-black/[0.08] focus:border-apple-accent focus:ring-1 focus:ring-apple-accent'} outline-none rounded-xl text-sm transition-all`}
                    />
                    {errors.name && <span className="text-red-500 text-[11px] font-medium mt-0.5">{errors.name}</span>}
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
                      className={`px-4 py-3.5 bg-white border ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-black/[0.08] focus:border-apple-accent focus:ring-1 focus:ring-apple-accent'} outline-none rounded-xl text-sm transition-all`}
                    />
                    {errors.email && <span className="text-red-500 text-[11px] font-medium mt-0.5">{errors.email}</span>}
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
                      className={`px-4 py-3.5 bg-white border ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-black/[0.08] focus:border-apple-accent focus:ring-1 focus:ring-apple-accent'} outline-none rounded-xl text-sm transition-all`}
                    />
                    {errors.phone && <span className="text-red-500 text-[11px] font-medium mt-0.5">{errors.phone}</span>}
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

                {/* Honeypot field for spam protection */}
                <input 
                  type="text" 
                  name="b_url" 
                  value={formData.b_url} 
                  onChange={handleChange} 
                  style={{ display: 'none' }} 
                  tabIndex={-1} 
                  autoComplete="off" 
                />

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
                    className={`px-4 py-3.5 bg-white border ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-black/[0.08] focus:border-apple-accent focus:ring-1 focus:ring-apple-accent'} outline-none rounded-xl text-sm transition-all resize-none`}
                  ></textarea>
                  {errors.message && <span className="text-red-500 text-[11px] font-medium mt-0.5">{errors.message}</span>}
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

                <p className="text-[11px] text-apple-dark/40 text-center -mt-2">
                  We'll get back to you within one business day.
                </p>

                {/* Status Messages */}
                {status.success === false && (
                  <div className="p-4 bg-red-50 text-red-800 rounded-xl flex gap-3 text-xs items-center border border-red-200">
                    <AlertCircle size={16} className="text-red-600 flex-shrink-0" />
                    <span>{status.message}</span>
                  </div>
                )}
              </form>
            </FadeIn>
          </div>
        )}
      </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-8 bg-white border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="w-full h-[450px] rounded-32 overflow-hidden border border-black/[0.06] shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.11675408363!2d80.15643028682855!3d13.047525316316104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x82e4b03f7e1f01!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1719600000000!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Zealarc Office Location"
              ></iframe>
            </div>
          </FadeIn>
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
