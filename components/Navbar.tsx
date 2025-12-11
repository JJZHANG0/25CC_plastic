import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Droplets } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About & Team', path: '/about' },
  { label: 'Innovation', path: '/innovation' },
  { label: 'Impact', path: '/impact' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2 group">
          <div className="bg-gradient-to-br from-teal-400 to-blue-500 p-2 rounded-lg text-white shadow-lg transition-transform group-hover:scale-105">
            <Droplets size={24} />
          </div>
          <span className="text-xl font-semibold tracking-wide text-slate-700">PureFlow</span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors duration-200 hover:text-teal-600 ${
                  isActive ? 'text-teal-600' : 'text-slate-500'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full glass border-b border-white/50 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block text-base font-medium transition-colors ${
                  isActive ? 'text-teal-600' : 'text-slate-600'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
