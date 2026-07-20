import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Workflow } from "./components/Workflow";
import { Screenshots } from "./components/Screenshots";
import { Download } from "./components/Download";
import { DuaCard } from "./components/DuaCard";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Info, X } from "lucide-react";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  const [showToast, setShowToast] = useState<boolean>(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const triggerToast = () => {
    setShowToast(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-slate-800 dark:bg-[#060D09] dark:text-slate-100 transition-colors duration-350 relative overflow-x-hidden">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero onDownloadMac={triggerToast} />
      <Features />
      <WhyChooseUs />
      <Workflow />
      <Screenshots />
      <Download onDownloadMac={triggerToast} />
      <DuaCard />
      <FAQ />
      <Footer />

      {/* Modern Premium Toast Notification */}
      <div
        className={`fixed bottom-6 left-6 z-50 max-w-md w-full sm:w-[400px] transition-all duration-500 ease-out transform ${
          showToast
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-12 opacity-0 scale-90 pointer-events-none"
        }`}
        dir="rtl"
      >
        <div className="glass-card relative overflow-hidden p-5 rounded-2xl border border-slate-200/80 dark:border-emerald-800/40 bg-white/90 dark:bg-[#070f0b]/90 shadow-2xl flex gap-4 items-start">
          {/* Gold Decorative Accent Bar */}
          <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-emerald-600 to-gold-500" />
          
          <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-emerald-950/50 flex items-center justify-center border border-gold-500/20 mt-1 shrink-0">
            <Info className="w-5 h-5 text-emerald-600 dark:text-gold-450" />
          </div>

          <div className="flex-1 space-y-1 text-right">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              نسخة نظام ماك (macOS)
            </h4>
            <p className="text-xs text-slate-650 dark:text-slate-350 leading-relaxed">
              ستكون نسخة نظام الماك متاحة للتحميل قريباً جداً! نعمل حالياً على تجهيز التطبيق وإطلاقه في أقرب وقت.
            </p>
          </div>

          <button
            onClick={() => setShowToast(false)}
            className="text-slate-400 hover:text-slate-650 dark:hover:text-white p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-emerald-950/40 transition-colors shrink-0"
            aria-label="إغلاق"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
