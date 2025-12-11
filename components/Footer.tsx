import React from 'react';
import { Droplets, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
             <div className="text-teal-500">
               <Droplets size={20} />
             </div>
             <span className="text-lg font-semibold text-slate-700">PureFlow</span>
          </div>

          <div className="flex space-x-6 text-slate-400">
            <a href="#" className="hover:text-teal-600 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-teal-600 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-teal-600 transition-colors"><Github size={20} /></a>
          </div>
        </div>
        
        <div className="mt-8 text-center md:text-left text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} PureFlow Innovation Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
