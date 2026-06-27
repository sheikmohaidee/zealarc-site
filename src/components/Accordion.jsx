import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto divide-y divide-black/[0.08] border-t border-b border-black/[0.08]">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="py-2">
            <button
              onClick={() => toggle(idx)}
              className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
            >
              <span className="text-h4 text-apple-dark/80 group-hover:text-apple-dark transition-colors duration-200">
                {item.question}
              </span>
              <ChevronDown 
                size={20} 
                className={`text-apple-dark/40 group-hover:text-apple-dark transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-apple-accent' : ''
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-80 pb-6 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-body text-apple-dark/60">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
