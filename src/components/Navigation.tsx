'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: '₹1 Revolution', path: '/revolution' },
    { name: 'Our Impact', path: '/impact' },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Handle scroll effect for enhanced glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`
      sticky top-0 z-50 transition-all duration-300 ease-in-out
      ${isScrolled
        ? 'bg-cream/80 backdrop-blur-md shadow-medium border-b border-soft-taupe/30'
        : 'bg-cream/70 backdrop-blur-sm shadow-soft border-b border-soft-taupe/20'
      }
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 lg:h-20">
          {/* Left Section - Logo */}
          <div className="flex items-center flex-shrink-0">
            <div className="bg-white/30 backdrop-blur-sm rounded-full px-4 py-3 shadow-soft border border-white/20">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <img
                    src="/msct_logo.png"
                    alt="MSCT Logo"
                    className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-caramel/20 to-golden-cream/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </div>
                <div className="text-warm-brown">
                  <div className="font-playfair text-lg lg:text-xl font-bold tracking-tight">Manav Seva</div>
                  <div className="text-xs opacity-75 font-medium">Charitable Trust</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Center Section - Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 max-w-2xl mx-8">
            <div className="flex items-center space-x-1 bg-white/30 backdrop-blur-sm rounded-full px-6 py-3 shadow-soft border border-white/20">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`
                    relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out
                    ${pathname === item.path
                      ? 'text-warm-brown bg-white/60 shadow-soft backdrop-blur-sm'
                      : 'text-warm-brown/80 hover:text-warm-brown hover:bg-white/40'
                    }
                  `}
                >
                  {item.name}
                  {pathname === item.path && (
                    <div className="absolute inset-0 bg-gradient-to-r from-caramel/10 to-golden-cream/10 rounded-full"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section - Donate Button */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link href="/donate">
              <Button className="donation-button relative overflow-hidden group">
                <span className="relative z-10">Donate Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-caramel via-golden-cream to-caramel opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-3 rounded-full bg-white/30 backdrop-blur-sm border border-white/20 text-warm-brown hover:bg-white/40 transition-all duration-300 shadow-soft"
            >
              <div className="relative z-10">
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="absolute top-full left-0 right-0 bg-cream/95 backdrop-blur-md border-b border-soft-taupe/30 shadow-medium">
              <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex flex-col space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className={`
                        relative px-4 py-3 rounded-lg text-base font-medium transition-all duration-300
                        ${pathname === item.path
                          ? 'text-warm-brown bg-white/50 shadow-soft'
                          : 'text-warm-brown/80 hover:text-warm-brown hover:bg-white/30'
                        }
                      `}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                      {pathname === item.path && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-caramel to-golden-cream rounded-r-full"></div>
                      )}
                    </Link>
                  ))}
                  <div className="pt-4 mt-4 border-t border-soft-taupe/20">
                    <Link href="/donate" className="block">
                      <Button className="donation-button w-full">
                        Donate Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

