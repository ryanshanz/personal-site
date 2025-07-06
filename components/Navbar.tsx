'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
    { href: '/', label: 'Home' },
    {href: '/projects', label: 'Projects'},
    { href: '/experience', label: 'Experience' },
    { href: '/research', label: 'Research' },
    { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 border-b border-gray-200">


      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Hamburger Icon */}
        <button
          className="md:hidden block focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="black"
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`md:flex space-x-6 ${menuOpen ? 'block' : 'hidden'} md:block`}>
            <div className="text-lg md:text-left text-black pr-20">
                 Ryan Shanz 
            </div>
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-gray-800 block py-2 md:py-0 ${
                pathname === href ? 'font-bold text-green-600' : ''
              } hover:text-green-600`}
              onClick={() => setMenuOpen(false)} 
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
