'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Sword, Crown, Shield } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Heroes', icon: Crown },
    { href: '/builds', label: 'Builds', icon: Sword },
    { href: '/items', label: 'Items', icon: Shield }
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0a0f1c]/95 backdrop-blur-md shadow-2xl border-b border-blue-500/20' 
          : 'bg-gradient-to-r from-[#0b132b] via-[#1a1f3a] to-[#0b132b] shadow-lg border-b border-gray-800/50'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo */}
            <Link 
              href="/" 
              className="group relative flex items-center gap-3 text-xl sm:text-2xl font-black tracking-wider transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative flex items-center gap-2">
                {/* Subtle background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#ffa500] via-[#ffd700] to-[#ffb347] rounded-lg blur-sm opacity-0 group-hover:opacity-25 transition-opacity duration-500 scale-110"></div>
                
                {/* MLBB Logo */}
                <img 
                  src="/mlbb-logo.png" 
                  alt="Mobile Legends Bang Bang" 
                  className="relative h-8 sm:h-10 w-auto filter drop-shadow-lg"
                />
              </div>
              
              <div className="flex flex-col leading-none">
                <span className="text-[#ffa500] font-bold text-xs sm:text-sm tracking-widest opacity-90">
                  GUIDE
                </span>
                <div className="h-0.5 bg-gradient-to-r from-[#ffa500] to-[#ffd700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
              
              {/* Floating particles effect */}
              <div className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-1 h-1 bg-[#1fab89] rounded-full animate-ping"></div>
                <div className="absolute top-2 right-0 w-0.5 h-0.5 bg-[#ffd700] rounded-full animate-pulse delay-300"></div>
                <div className="absolute bottom-0 right-2 w-0.5 h-0.5 bg-[#4fd1c7] rounded-full animate-bounce delay-500"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative px-4 py-2 mx-1 text-[#f0f0f0] hover:text-[#ffa500] font-medium tracking-wide transition-all duration-300 rounded-lg"
                  >
                    {/* Hover background effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ffa500]/20 via-[#ffd700]/20 to-[#ffb347]/20 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ffa500]/10 to-[#ffd700]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative flex items-center gap-2">
                      <Icon className="w-4 h-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 group-hover:text-[#ffd700]" />
                      <span className="relative">
                        {item.label}
                        {/* Animated underline */}
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ffa500] to-[#ffd700] group-hover:w-full transition-all duration-300"></div>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 rounded-lg bg-gradient-to-r from-[#ffa500]/20 to-[#ffd700]/20 hover:from-[#ffa500]/30 hover:to-[#ffd700]/30 flex items-center justify-center transition-all duration-300 border border-[#ffa500]/30 group"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#ffa500]/10 to-[#ffd700]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                {isOpen ? (
                  <X className="w-5 h-5 text-[#ffa500] transform rotate-180 transition-transform duration-300" />
                ) : (
                  <Menu className="w-5 h-5 text-[#ffa500] transform transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-out overflow-hidden ${
          isOpen 
            ? 'max-h-64 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gradient-to-b from-[#0a0f1c] to-[#1a1f3a] border-t border-[#ffa500]/20 shadow-xl">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group relative flex items-center gap-3 px-4 py-3 text-[#f0f0f0] hover:text-[#ffa500] font-medium tracking-wide rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-[#ffa500]/20 hover:to-[#ffd700]/20 border border-transparent hover:border-[#ffa500]/30"
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      <div className="flex items-center gap-3 transform group-hover:translate-x-2 transition-transform duration-300">
                        <div className="relative">
                          <div className="absolute inset-0 bg-[#ffa500] rounded-full blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                          <Icon className="relative w-5 h-5 text-[#ffa500] transform group-hover:scale-110 transition-all duration-300" />
                        </div>
                        <span className="relative">
                          {item.label}
                          <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ffa500] to-[#ffd700] group-hover:w-full transition-all duration-500"></div>
                        </span>
                      </div>
                      
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffa500]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 sm:h-18"></div>
    </>
  );
}