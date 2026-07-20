import React from "react";
import { Monitor, CheckCircle, Database, Cpu } from "lucide-react";
import { downloadLinks } from "../config/downloadLinks";

export const Hero: React.FC<{ onDownloadMac: () => void }> = ({ onDownloadMac }) => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden islamic-bg"
    >
      {/* Decorative Gold & Emerald Blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-gold-500/10 dark:bg-gold-500/5 rounded-full blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-right">
            
            {/* Logo Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/5 dark:bg-emerald-500/10 border border-emerald-500/20 mb-6 animate-fade-in-up">
              <span className="w-2.5 h-2.5 rounded-full bg-gold-500 animate-pulse" />
              <span className="text-sm font-semibold text-emerald-800 dark:text-gold-300">
                أرشيف الإجازات للأجهزة المكتبية
              </span>
            </div>

            {/* Tagline & Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.2] sm:leading-[1.2] mb-6 font-sans">
              أرشيف الإجازات
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-l from-emerald-700 to-emerald-600 dark:from-gold-300 dark:to-gold-500 text-3xl sm:text-4xl font-bold">
                نظام متكامل لإدارة وأرشفة الإجازات العلمية والمجازين
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-600 dark:text-slate-350 leading-relaxed mb-8 max-w-xl">
              يساعدك التطبيق على إدارة بيانات المجازين، تنظيم الإجازات، حفظ ملفات PDF، إنشاء التقارير، وإجراء عمليات البحث المتقدمة، مع العمل بالكامل دون الحاجة إلى الاتصال بالإنترنت.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
              <a
                href={downloadLinks.windows.downloadUrl}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-l from-emerald-800 to-emerald-600 hover:from-emerald-700 hover:to-emerald-500 text-white font-bold shadow-lg shadow-emerald-950/20 hover:scale-[1.03] transition-all duration-300 group border border-emerald-500/20"
              >
                <Monitor className="w-5 h-5 text-gold-400 group-hover:rotate-6 transition-transform" />
                <div className="text-right">
                  <div className="text-xs font-normal opacity-80">تحميل لنظام</div>
                  <div className="text-base font-bold">ويندوز Windows</div>
                </div>
              </a>
              
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  onDownloadMac();
                }}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white dark:bg-emerald-950/25 border border-slate-300 dark:border-emerald-800/40 text-slate-800 dark:text-slate-100 font-bold shadow-md hover:scale-[1.03] transition-all duration-300 group hover:bg-slate-50 dark:hover:bg-emerald-950/50 cursor-pointer"
              >
                <Cpu className="w-5 h-5 text-emerald-600 dark:text-gold-400 group-hover:rotate-6 transition-transform" />
                <div className="text-right">
                  <div className="text-xs font-normal text-slate-505 dark:text-slate-400">تحميل لنظام</div>
                  <div className="text-base font-bold">ماك macOS (Apple M1/2/3/4)</div>
                </div>
              </a>
            </div>

            {/* Quick Badges */}
            <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2 text-sm sm:text-base font-medium">
                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-gold-400 shrink-0" />
                <span>يعمل بالكامل دون إنترنت</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base font-medium">
                <Database className="w-5 h-5 text-emerald-600 dark:text-gold-400 shrink-0" />
                <span>قاعدة بيانات محلية</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base font-medium">
                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-gold-400 shrink-0" />
                <span>تصدير احترافي (PDF/Excel)</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base font-medium">
                <Database className="w-5 h-5 text-emerald-600 dark:text-gold-400 shrink-0" />
                <span>نسخ احتياطي وسهل</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Dashboard Mockup */}
          <div className="lg:col-span-6 relative w-full flex justify-center">
            {/* Outer Application Frame Container */}
            <div className="relative w-full max-w-lg aspect-[16/10] rounded-2xl overflow-hidden border border-slate-300/80 dark:border-emerald-800/40 bg-slate-900/90 dark:bg-[#070e0a]/90 shadow-2xl animate-pulse-subtle">
              
              {/* Window Header */}
              <div className="h-10 bg-slate-800 dark:bg-emerald-950/60 border-b border-slate-700/50 dark:border-emerald-900/30 px-4 flex items-center justify-between">
                {/* OS Circles */}
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                {/* Title */}
                <span className="text-xs text-slate-400 dark:text-gold-400/70 font-medium">
                  أرشيف الإجازات - لوحة التحكم
                </span>
                <div className="w-12" />
              </div>

              {/* Application Main Layout */}
              <div className="flex h-[calc(100%-40px)] select-none">
                
                {/* Dashboard Mock Content */}
                <div className="flex-1 p-4 flex flex-col gap-4 overflow-hidden text-right">
                  {/* Search Bar Row */}
                  <div className="flex gap-2 justify-between items-center">
                    <div className="h-8 bg-slate-800/80 dark:bg-emerald-950/35 border border-slate-700 dark:border-emerald-900/40 rounded-lg px-2 flex items-center justify-start text-[10px] text-slate-400 w-1/2">
                      <span>البحث السريع بالاسم، الدولة...</span>
                    </div>
                    <div className="flex gap-1">
                      <span className="text-[10px] bg-emerald-600/30 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">تحديث</span>
                      <span className="text-[10px] bg-gold-600/30 text-gold-400 px-2 py-0.5 rounded border border-gold-500/20">إضافة</span>
                    </div>
                  </div>

                  {/* Summary Cards */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-slate-800/50 dark:bg-emerald-950/20 p-2.5 rounded-lg border border-slate-700/40 dark:border-emerald-900/20 text-center">
                      <div className="text-[9px] text-slate-400">إجمالي المجازين</div>
                      <div className="text-base font-bold text-emerald-400">١٥٤</div>
                    </div>
                    <div className="bg-slate-800/50 dark:bg-emerald-950/20 p-2.5 rounded-lg border border-slate-700/40 dark:border-emerald-900/20 text-center">
                      <div className="text-[9px] text-slate-400">الإجازات المسجلة</div>
                      <div className="text-base font-bold text-gold-400">٣٢١</div>
                    </div>
                    <div className="bg-slate-800/50 dark:bg-emerald-950/20 p-2.5 rounded-lg border border-slate-700/40 dark:border-emerald-900/20 text-center">
                      <div className="text-[9px] text-slate-400">الدول المفهرسة</div>
                      <div className="text-base font-bold text-sky-400 font-sans">١٨</div>
                    </div>
                  </div>

                  {/* Recent Table */}
                  <div className="flex-1 bg-slate-850 dark:bg-emerald-950/10 rounded-lg border border-slate-700/40 dark:border-emerald-900/20 overflow-hidden flex flex-col">
                    <div className="bg-slate-800 dark:bg-emerald-950/40 px-3 py-1.5 text-[9px] font-bold text-slate-300 border-b border-slate-700/50 dark:border-emerald-900/30 flex justify-between">
                      <span className="w-1/3">الاسم</span>
                      <span className="w-1/3 text-center">الإجازات</span>
                      <span className="w-1/3 text-left">الدولة</span>
                    </div>
                    <div className="flex-1 divide-y divide-slate-800/60 dark:divide-emerald-900/10 overflow-y-auto text-[9px] text-slate-400">
                      <div className="px-3 py-2 flex justify-between hover:bg-slate-800/30 dark:hover:bg-emerald-950/20">
                        <span className="w-1/3 text-slate-200 font-semibold">أحمد بن محمد الفاسي</span>
                        <span className="w-1/3 text-center text-gold-450">٣ إجازات</span>
                        <span className="w-1/3 text-left">المغرب</span>
                      </div>
                      <div className="px-3 py-2 flex justify-between hover:bg-slate-800/30 dark:hover:bg-emerald-950/20">
                        <span className="w-1/3 text-slate-200 font-semibold">عبد الله بن صالح اليماني</span>
                        <span className="w-1/3 text-center text-gold-450">١ إجازة</span>
                        <span className="w-1/3 text-left">اليمن</span>
                      </div>
                      <div className="px-3 py-2 flex justify-between hover:bg-slate-800/30 dark:hover:bg-emerald-950/20">
                        <span className="w-1/3 text-slate-200 font-semibold">يوسف بن عبد الرحمن الكردي</span>
                        <span className="w-1/3 text-center text-gold-450">٥ إجازات</span>
                        <span className="w-1/3 text-left">العراق</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar on the Right (RTL Layout) */}
                <div className="w-32 bg-slate-850 dark:bg-emerald-950/40 border-l border-slate-700/50 dark:border-emerald-900/30 p-2.5 flex flex-col gap-1.5 text-right shrink-0">
                  <div className="px-2 py-1.5 rounded bg-emerald-600/20 text-emerald-400 text-[10px] font-bold">
                    لوحة التحكم
                  </div>
                  <div className="px-2 py-1.5 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 dark:hover:bg-emerald-950/25 text-[10px]">
                    المجازون
                  </div>
                  <div className="px-2 py-1.5 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 dark:hover:bg-emerald-950/25 text-[10px]">
                    الإجازات
                  </div>
                  <div className="px-2 py-1.5 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 dark:hover:bg-emerald-950/25 text-[10px]">
                    الدول والمناطق
                  </div>
                  <div className="px-2 py-1.5 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 dark:hover:bg-emerald-950/25 text-[10px]">
                    التقارير
                  </div>
                  <div className="mt-auto px-2 py-1.5 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 dark:hover:bg-emerald-950/25 text-[10px]">
                    الإعدادات العامة
                  </div>
                </div>

              </div>
            </div>
            
            {/* Extra Badge Behind Dashboard Mockup for Premium UI Look */}
            <div className="absolute -bottom-4 -right-4 w-48 bg-gradient-to-l from-gold-500 to-amber-400 text-slate-950 px-4 py-3 rounded-2xl font-bold text-xs shadow-lg flex items-center gap-2 border border-gold-300">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-900 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-800"></span>
              </span>
              <span>تحديثات تلقائية مجانية</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
