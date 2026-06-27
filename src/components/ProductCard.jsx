import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function ProductCard({ 
  icon: Icon, 
  title, 
  description, 
  link, 
  linkText = 'Learn more', 
  bg = 'bg-apple-gray', 
  textColor = 'text-apple-dark',
  iconBg = 'bg-white'
}) {
  return (
    <div 
      className={`p-10 md:p-12 ${bg} ${textColor} rounded-32 flex flex-col justify-between min-h-[380px] hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_20px_45px_rgba(0,0,0,0.04)] border border-black/[0.01] hover:border-black/[0.04] transition-all duration-350 ease-out group`}
    >
      <div>
        {Icon && (
          <div className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center mb-8 shadow-[0_2px_8px_rgba(0,0,0,0.02)]`}>
            <Icon size={24} className="text-apple-accent" />
          </div>
        )}
        <h3 className="text-h3 mb-4">{title}</h3>
        <p className="text-body opacity-70 mb-8">{description}</p>
      </div>
      <div>
        <Link 
          to={link} 
          className="inline-flex items-center gap-1 text-sm font-semibold text-apple-accent hover:underline group-hover:gap-2 transition-all duration-300"
        >
          {linkText} <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
}
