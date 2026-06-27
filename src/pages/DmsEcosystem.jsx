import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Box, Truck, UserCheck, Store, Wallet, ShieldCheck, 
  Map, Activity, Receipt, CreditCard, Sparkles, UserCog, Users, Route, Check
} from 'lucide-react';
import FadeIn from '../components/FadeIn';

export default function DmsEcosystem() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const workflowSteps = [
    {
      title: 'Warehouse',
      desc: 'Products are prepared, verified, and loaded for dispatch.',
      icon: Box
    },
    {
      title: 'Dispatch',
      desc: 'Routes, vehicles, challans, and delivery assignments are created.',
      icon: Route
    },
    {
      title: 'Salesman',
      desc: 'Salesmen execute routes, deliver products, collect payments, and update delivery status in real time.',
      icon: Truck
    },
    {
      title: 'Vendor',
      desc: 'Vendors receive deliveries, place future orders, and access invoices.',
      icon: Store
    },
    {
      title: 'Collections',
      desc: 'Cash, credit, UPI, cheque, and payment records are updated instantly.',
      icon: Wallet
    },
    {
      title: 'Reconciliation',
      desc: 'The day concludes with complete reconciliation of stock, deliveries, and collections.',
      icon: ShieldCheck
    }
  ];

  const capabilities = [
    {
      title: 'Live Route Planning',
      desc: 'Create and assign routes. Monitor field operations. Track salesman movement. Optimize delivery execution.',
      icon: Map
    },
    {
      title: 'Inventory Management',
      desc: 'Warehouse stock. Vehicle stock. Batch tracking. Expiry management. Real-time inventory updates.',
      icon: Box
    },
    {
      title: 'Vendor Self-Service',
      desc: 'Allow vendors to: Browse products. Place future orders. Access invoices. Monitor balances. View order history.',
      icon: Store
    },
    {
      title: 'Challans & Invoices',
      desc: 'Automatically generate: Delivery challans. Invoices. Business documents. Every dispatch is documented automatically.',
      icon: Receipt
    },
    {
      title: 'Payments & Collections',
      desc: 'Support: Cash. UPI. Cheque. Credit. Outstanding balances are updated across the platform instantly.',
      icon: CreditCard
    },
    {
      title: 'Beez AI Assistant',
      desc: 'An intelligent business assistant providing route recommendations, sales performance summaries, collection analysis, and inventory observations to support faster decisions.',
      icon: Sparkles
    }
  ];

  const workspaceCards = [
    {
      title: 'Admin Console',
      subtitle: 'Command center for your entire operation',
      designedFor: ['Admin', 'Manager'],
      capabilities: ['Live Fleet Tracking', 'Route & Dispatch Planning', 'Orders, Invoices & Collections'],
      cta: 'Open Admin Console',
      icon: UserCog
    },
    {
      title: 'Warehouse Portal',
      subtitle: 'Inventory loading & dispatch management',
      designedFor: ['Warehouse Staff'],
      capabilities: ['Verify Stock Levels', 'Confirm Truck Loading', 'Manage Purchase Orders'],
      cta: 'Open Warehouse Portal',
      icon: Box
    },
    {
      title: 'Vendor Portal',
      subtitle: 'Self-service for shop owners and retailers',
      designedFor: ['Shop Owners', 'Retailers'],
      capabilities: ['Browse Product Catalog', 'Place Pre-orders', 'Download Invoices', 'Download Challans'],
      cta: 'Open Vendor Portal',
      icon: Store
    },
    {
      title: 'Salesman App',
      subtitle: 'Built for field delivery teams',
      designedFor: ['Field Salesmen'],
      capabilities: ['GPS Route Navigation', 'Truck Stock Verification', 'Deliver Orders', 'Generate Bills', 'Collect Payments'],
      cta: 'Sign In as Salesman',
      icon: Truck
    },
    {
      title: 'Sales Representative Portal',
      subtitle: 'Manage vendors and create orders on their behalf',
      designedFor: ['Sales Representatives'],
      capabilities: ['Visit Vendor Accounts', 'Place Orders for Vendors', 'View Weekly Delivery Schedules'],
      cta: 'Sign In as Sales Rep',
      icon: Users
    }
  ];

  const comparisonPlans = [
    { feature: 'Orders & Inventory Management', plus: true, premium: true, pro: true },
    { feature: 'Route Planning & Live GPS', plus: true, premium: true, pro: true },
    { feature: 'Payments & Collections', plus: true, premium: true, pro: true },
    { feature: 'End-of-Day Reconciliation', plus: true, premium: true, pro: true },
    { feature: 'Dispatch & Challans', plus: true, premium: true, pro: true },
    { feature: 'Invoice Generation (GST/SST)', plus: false, premium: true, pro: true },
    { feature: 'Vendor Self-Service Portal', plus: false, premium: true, pro: true },
    { feature: 'Sales Representative Portal', plus: false, premium: true, pro: true },
    { feature: 'Beez AI Assistant', plus: false, premium: true, pro: true },
    { feature: 'Lead / CRM Pipeline', plus: false, premium: false, pro: true },
    { feature: 'AI Suggested Orders', plus: false, premium: false, pro: true },
    { feature: 'Field Force Incentives', plus: false, premium: false, pro: true },
    { feature: 'Route / Beat Optimization', plus: false, premium: false, pro: true },
    { feature: 'Shelf Recognition', plus: false, premium: false, pro: true },
    { feature: 'Rural Automation', plus: false, premium: false, pro: true }
  ];

  const outcomes = [
    'One connected platform.',
    'Faster route execution.',
    'Better inventory visibility.',
    'Accurate collections.',
    'Complete operational transparency.',
    'Improved productivity.',
    'Simplified business management.'
  ];

  const stats = [
    { label: 'Real-time Route Tracking', value: 'Live' },
    { label: 'Multi-user Platform', value: 'Supported' },
    { label: 'Complete Distribution Workflow', value: 'Integrated' },
    { label: 'Role-Based Access', value: 'Granular' },
    { label: 'Cloud Synchronization', value: 'Real-time' }
  ];

  return (
    <div className="pt-24 bg-white text-apple-dark font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <FadeIn>
            <span className="px-3 py-1 bg-apple-blue/10 text-apple-blue text-[11px] font-bold rounded-full uppercase tracking-widest border border-apple-blue/20 mb-6 inline-block">
              Zealarc Logistics Suite
            </span>
          </FadeIn>
          <FadeIn delay={200}>
            <h1 className="text-h1 text-apple-dark mb-6">
              The Operating System <br className="hidden md:block" />for Modern Distribution
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-body text-apple-dark/60 max-w-2xl mx-auto mb-10">
              One connected platform that manages the complete distribution lifecycle—from warehouse dispatch to vendor delivery and end-of-day reconciliation. <br className="hidden md:block mt-2" />
              This is not just inventory software. It connects every team, every route, every delivery, and every transaction in one ecosystem.
            </p>
          </FadeIn>
          <FadeIn delay={400} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="px-6 py-3.5 bg-apple-dark text-white rounded-full font-medium text-sm hover:bg-black transition-colors w-full sm:w-auto shadow-sm">
              Request a Demo
            </Link>
            <a href="#workflow" className="px-6 py-3.5 bg-apple-gray text-apple-dark rounded-full font-medium text-sm hover:bg-gray-200 transition-colors w-full sm:w-auto shadow-sm">
              Explore the Workflow
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-24 bg-apple-gray border-y border-black/[0.04]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <h2 className="text-xs font-semibold text-apple-blue uppercase tracking-widest mb-4">Unified Ecosystem</h2>
          </FadeIn>
          <FadeIn delay={200}>
            <h3 className="text-h2 text-apple-dark mb-6">
              One Connected Platform.
            </h3>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-body text-apple-dark/60 max-w-3xl mx-auto">
              Businesses no longer need multiple disconnected systems to manage their supply chain. Everything operates from a single ecosystem. From the moment inventory enters the warehouse to the final payment collected in the field, BeezDMS ensures perfect synchronization.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Business Workflow */}
      <section id="workflow" className="py-28 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-xs font-semibold text-apple-blue uppercase tracking-widest mb-4">The Complete Lifecycle</h2>
              <h3 className="text-h2 text-apple-dark mb-6">How a modern distribution business operates.</h3>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflowSteps.map((step, idx) => (
              <FadeIn key={idx} delay={100 * idx} className="relative p-10 bg-apple-gray rounded-32 border border-black/[0.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-300 group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-apple-blue/20 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm border border-black/[0.04]">
                  <step.icon size={24} className="text-apple-blue" />
                </div>
                <div className="text-apple-blue text-[10px] font-bold uppercase tracking-widest mb-2">Stage 0{idx + 1}</div>
                <h4 className="text-h3 text-apple-dark mb-3">{step.title}</h4>
                <p className="text-body-sm text-apple-dark/60">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-28 md:py-40 bg-apple-dark text-white border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-apple-blue/5 rounded-full blur-3xl pointer-events-none opacity-50"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-20 max-w-3xl">
            <FadeIn>
              <h2 className="text-xs font-semibold text-apple-blue uppercase tracking-widest mb-4">Core Capabilities</h2>
              <h3 className="text-h2 text-white mb-6">
                Premium features designed for real-world scenarios.
              </h3>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
              <FadeIn key={idx} delay={100 * idx} className="p-8 rounded-24 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <cap.icon size={28} className="text-apple-blue mb-6" />
                <h4 className="text-h4 text-white mb-4">{cap.title}</h4>
                <p className="text-body-sm text-white/60">
                  {cap.desc.split('. ').map((sentence, i, arr) => (
                    <span key={i} className="block mb-1.5 last:mb-0">
                      {sentence}{i !== arr.length - 1 ? '.' : ''}
                    </span>
                  ))}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Role-Based Portals */}
      <section className="py-28 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-xs font-semibold text-apple-blue uppercase tracking-widest mb-4">Role-Based Portals</h2>
              <h3 className="text-h2 text-apple-dark mb-6">One Platform. Five Dedicated Workspaces.</h3>
              <p className="text-body text-apple-dark/60">
                Every team member gets a dedicated workspace designed specifically for their responsibilities. Each login begins with a company code, ensuring every user operates within the correct business environment while accessing only the tools they need.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {workspaceCards.map((workspace, idx) => (
              <FadeIn key={idx} delay={100 * idx} className="p-8 bg-apple-gray rounded-32 flex flex-col h-full hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-300 border border-black/[0.02]">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm border border-black/[0.04]">
                  <workspace.icon size={24} className="text-apple-dark" />
                </div>
                <h4 className="text-h3 text-apple-dark mb-2">{workspace.title}</h4>
                <p className="text-body-sm text-apple-dark/60 mb-8">{workspace.subtitle}</p>
                
                <div className="mb-6 flex-grow">
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-apple-dark uppercase tracking-wider block mb-2">Designed For</span>
                    <div className="flex flex-wrap gap-2">
                      {workspace.designedFor.map((role, i) => (
                        <span key={i} className="px-3 py-1 bg-white text-apple-dark/80 text-[11px] font-medium rounded-full border border-black/[0.04]">{role}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-xs font-semibold text-apple-dark uppercase tracking-wider block mb-3">Capabilities</span>
                    <ul className="space-y-2">
                      {workspace.capabilities.map((cap, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <Check size={14} className="text-apple-blue mt-0.5 flex-shrink-0" />
                          <span className="text-body-sm text-apple-dark/80 leading-tight">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link to="/contact" className="w-full text-center px-6 py-3.5 bg-white text-apple-dark rounded-full font-medium text-sm hover:bg-black hover:text-white transition-colors border border-black/[0.04] shadow-sm mt-auto">
                  {workspace.cta}
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Comparison */}
      <section className="py-28 md:py-40 bg-apple-gray border-t border-black/[0.04]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-xs font-semibold text-apple-blue uppercase tracking-widest mb-4">Compare Plans</h2>
              <h3 className="text-h2 text-apple-dark">Choose the Right Plan for Your Distribution Business.</h3>
            </FadeIn>
          </div>

          <FadeIn delay={200} className="bg-white rounded-[40px] shadow-sm border border-black/[0.04] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr>
                    <th className="p-6 md:p-8 font-semibold text-apple-dark text-sm md:text-base border-b border-black/[0.04]">Feature</th>
                    <th className="p-6 md:p-8 text-center font-bold text-apple-dark text-sm md:text-base border-b border-black/[0.04] bg-apple-gray/30 w-32">Plus</th>
                    <th className="p-6 md:p-8 text-center font-bold text-apple-blue text-sm md:text-base border-b border-black/[0.04] bg-apple-blue/5 w-32 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-apple-blue"></div>
                      Premium
                    </th>
                    <th className="p-6 md:p-8 text-center font-bold text-apple-dark text-sm md:text-base border-b border-black/[0.04] bg-apple-gray/30 w-32">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonPlans.map((plan, idx) => (
                    <tr key={idx} className="group hover:bg-apple-gray/20 transition-colors">
                      <td className="p-4 md:p-6 text-sm text-apple-dark/80 border-b border-black/[0.02] group-last:border-0 font-medium">{plan.feature}</td>
                      <td className="p-4 md:p-6 text-center border-b border-black/[0.02] group-last:border-0 bg-apple-gray/10">
                        {plan.plus ? <Check size={18} className="text-apple-dark/60 mx-auto" /> : <span className="text-apple-dark/20">—</span>}
                      </td>
                      <td className="p-4 md:p-6 text-center border-b border-black/[0.02] group-last:border-0 bg-apple-blue/5">
                        {plan.premium ? <Check size={18} className="text-apple-blue mx-auto" /> : <span className="text-apple-blue/20">—</span>}
                      </td>
                      <td className="p-4 md:p-6 text-center border-b border-black/[0.02] group-last:border-0 bg-apple-gray/10">
                        {plan.pro ? <Check size={18} className="text-apple-dark/60 mx-auto" /> : <span className="text-apple-dark/20">—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Outcomes & Statistics */}
      <section className="py-28 bg-white border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Why Businesses Choose BeezDMS */}
            <div>
              <FadeIn>
                <h2 className="text-xs font-semibold text-apple-blue uppercase tracking-widest mb-4">Outcomes</h2>
                <h3 className="text-h2 text-apple-dark mb-10">Why businesses choose BeezDMS.</h3>
                
                <div className="space-y-4">
                  {outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5 border border-black/[0.04]">
                        <Check size={14} className="text-apple-blue" />
                      </div>
                      <p className="text-body text-apple-dark/80">{outcome}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Statistics */}
            <div>
              <FadeIn delay={200} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="p-8 bg-white rounded-24 border border-black/[0.03] shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-3xl font-extrabold text-apple-dark tracking-tight mb-2">{stat.value}</p>
                    <p className="text-body-sm text-apple-dark/60">{stat.label}</p>
                  </div>
                ))}
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <FadeIn>
            <h3 className="text-h2 text-apple-dark mb-6">Ready to streamline your operations?</h3>
            <p className="text-body text-apple-dark/60 mb-10">
              Request a demo today to see how BeezDMS manages the entire distribution lifecycle from a single, unified platform.
            </p>
            <Link to="/contact" className="px-6 py-3.5 bg-apple-dark text-white rounded-full font-medium text-sm hover:bg-black transition-colors inline-block shadow-sm">
              Request a Demo
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
