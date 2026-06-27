import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
    setIsMobileProductsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Products', path: '/products' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Industries', path: '/industries' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'apple-glass border-b border-black/[0.06] py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src={(() => {
              const depth = location.pathname.split('/').filter(Boolean).length;
              const prefix = depth > 0 ? '../'.repeat(depth) : './';
              return `${prefix}assets/zealarc.png`;
            })()} 
            alt="Zealarc" 
            className="h-12 w-auto rounded-lg object-contain shadow-sm border border-black/[0.04] hover:scale-[1.02] transition-all duration-300"
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link.name === 'Products') {
              return (
                <div 
                  key={link.name}
                  className="relative py-2"
                  onMouseEnter={() => setIsProductsDropdownOpen(true)}
                  onMouseLeave={() => setIsProductsDropdownOpen(false)}
                >
                  <button
                    className={`text-sm font-medium transition-colors duration-300 flex items-center gap-1 focus:outline-none ${
                      location.pathname.startsWith('/products') 
                        ? 'text-apple-accent' 
                        : 'text-apple-dark/60 hover:text-apple-dark'
                    }`}
                  >
                    Products
                    <span className={`text-[8px] transition-transform duration-300 ${isProductsDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
                  </button>

                  {/* Dropdown Menu */}
                  <div 
                    className={`absolute left-1/2 -translate-x-1/2 top-full mt-1 w-56 bg-white/90 backdrop-blur-md rounded-2xl border border-black/[0.04] shadow-[0_15px_40px_rgba(0,0,0,0.06)] py-2 transition-all duration-350 z-50 ${
                      isProductsDropdownOpen 
                        ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
                        : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
                    }`}
                  >
                    {[
                      { name: 'POS Ecosystem', path: '/products/pos' },
                      { name: 'BeezDMS', path: '/products/dms' },
                      { name: 'Bayt-Al-Mal', path: '/products/bayt-al-mal' },
                      { name: 'All Products', path: '/products', isDivider: true }
                    ].map((item) => (
                      <React.Fragment key={item.name}>
                        {item.isDivider && <div className="h-px bg-black/[0.04] my-1 mx-3" />}
                        <Link
                          to={item.path}
                          onClick={() => setIsProductsDropdownOpen(false)}
                          className={`block px-4 py-2 text-[13px] font-medium transition-all duration-200 rounded-xl mx-1.5 text-left ${
                            location.pathname === item.path
                              ? 'bg-apple-accent/5 text-apple-accent font-semibold'
                              : 'text-apple-dark/70 hover:bg-black/[0.02] hover:text-apple-dark'
                          }`}
                        >
                          {item.name}
                        </Link>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              );
            }

            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive 
                    ? 'text-apple-accent' 
                    : 'text-apple-dark/60 hover:text-apple-dark'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link 
            to="/demo" 
            className="text-xs font-semibold px-4.5 py-2.5 bg-apple-accent text-white rounded-full hover:bg-[#0077ED] active:scale-95 transition-all duration-300"
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-apple-dark focus:outline-none p-1"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <div 
        className={`fixed inset-0 top-[52px] z-40 bg-white md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-8 gap-6 h-full justify-between overflow-y-auto">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => {
              if (link.name === 'Products') {
                return (
                  <div key={link.name} className="flex flex-col">
                    <button
                      onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                      className={`text-2xl font-semibold tracking-tight transition-colors duration-300 flex items-center justify-between text-left focus:outline-none ${
                        location.pathname.startsWith('/products') 
                          ? 'text-apple-accent' 
                          : 'text-apple-dark/70 hover:text-apple-dark'
                      }`}
                    >
                      Products
                      <span className={`text-base transition-transform duration-300 ${isMobileProductsOpen ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                    
                    <div 
                      className={`flex flex-col gap-4 pl-4 overflow-hidden transition-all duration-300 ${
                        isMobileProductsOpen ? 'max-h-60 mt-4 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      {[
                        { name: 'POS Ecosystem', path: '/products/pos' },
                        { name: 'BeezDMS', path: '/products/dms' },
                        { name: 'Bayt-Al-Mal', path: '/products/bayt-al-mal' },
                        { name: 'All Products', path: '/products' }
                      ].map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className={`text-lg font-medium transition-colors duration-300 ${
                            location.pathname === subItem.path
                              ? 'text-apple-accent font-semibold'
                              : 'text-apple-dark/60 hover:text-apple-dark'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`text-2xl font-semibold tracking-tight transition-colors duration-300 ${
                    isActive 
                      ? 'text-apple-accent' 
                      : 'text-apple-dark/70 hover:text-apple-dark'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          
          <div className="pb-16 flex flex-col gap-4">
            <Link 
              to="/demo" 
              className="w-full py-4 text-center bg-apple-accent text-white font-medium rounded-24 hover:bg-[#0077ED] transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
