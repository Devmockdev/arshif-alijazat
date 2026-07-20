import React, { useState, useEffect } from "react";
import { Scroll, Sun, Moon, Menu, X, Download } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#hero" },
    { name: "المميزات", href: "#features" },
    { name: "التحميل", href: "#download" },
    { name: "لقطات الشاشة", href: "#screenshots" },
    { name: "الأسئلة الشائعة", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#060D09]/80 backdrop-blur-lg shadow-md border-b border-emerald-900/10 dark:border-emerald-500/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-700 to-emerald-500 dark:from-emerald-800 dark:to-emerald-600 flex items-center justify-center shadow-md shadow-emerald-950/20 border border-gold-500/35">
              <Scroll className="w-5 h-5 text-gold-400" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-l from-emerald-800 to-emerald-900 dark:from-gold-100 dark:to-gold-300 bg-clip-text text-transparent font-sans">
              أرشيف الإجازات
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-gold-400 font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-emerald-950/40 border border-slate-200/55 dark:border-emerald-800/40 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-emerald-950/70 transition-all duration-200"
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-gold-400" />
              ) : (
                <Moon className="w-5 h-5 text-emerald-800" />
              )}
            </button>

            {/* Quick Download CTA */}
            <a
              href="#download"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-700 to-emerald-600 hover:from-emerald-650 hover:to-emerald-550 text-white font-semibold text-sm shadow-md shadow-emerald-950/10 border border-emerald-500/20 hover:scale-[1.02] transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              <span>تحميل مجاني</span>
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-emerald-950/40 border border-slate-200/55 dark:border-emerald-800/40 text-slate-600 dark:text-slate-300"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-gold-400" />
              ) : (
                <Moon className="w-5 h-5 text-emerald-800" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-emerald-950/40 border border-slate-200/55 dark:border-emerald-800/40 text-slate-600 dark:text-slate-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#060D09]/95 backdrop-blur-lg border-b border-slate-200 dark:border-emerald-900/40 animate-fade-in-up">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-700 dark:hover:text-gold-400 font-medium transition-all"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-center shadow-md shadow-emerald-950/10"
            >
              <Download className="w-5 h-5" />
              <span>تحميل التطبيق</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
