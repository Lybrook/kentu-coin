"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, LogOut, Settings, Wallet } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/wallet", label: "Wallet" },
    { href: "/mining", label: "Mining" },
    { href: "/market", label: "Market" },
    { href: "/transactions", label: "Transactions" },
  ];

  return (
    <nav className="bg-white border-b border-evergreen/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-evergreen flex items-center justify-center text-honeydew font-bold">
              KW
            </div>
            <span className="text-xl font-bold text-evergreen hidden sm:inline" style={{ fontFamily: "var(--font-serif)" }}>
              Kenyan Wallet
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-evergreen font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side - Wallet Info & User Dropdown */}
          <div className="flex items-center gap-4">
            {/* Wallet Address (Hidden on mobile) */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-honeydew rounded-lg">
              <Wallet className="h-4 w-4 text-evergreen" />
              <span className="text-xs font-mono text-evergreen">0x1234...5678</span>
            </div>

            {/* User Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-10 h-10 rounded-full bg-evergreen text-honeydew flex items-center justify-center font-bold hover:bg-evergreen-dark transition-colors"
              >
                JD
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-evergreen/10 py-2">
                  <Link
                    href="/profile"
                    className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-honeydew transition-colors"
                  >
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-honeydew transition-colors">
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-honeydew rounded-lg transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-evergreen" />
              ) : (
                <Menu className="h-6 w-6 text-evergreen" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-gray-600 hover:bg-honeydew rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
