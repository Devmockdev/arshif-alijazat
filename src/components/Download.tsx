import React from "react";
import { Monitor, Cpu, Download as DownloadIcon, Info, Calendar } from "lucide-react";
import { downloadLinks } from "../config/downloadLinks";

export const Download: React.FC<{ onDownloadMac: () => void }> = ({ onDownloadMac }) => {
  return (
    <section id="download" className="py-24 bg-white dark:bg-[#060D09] relative islamic-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-emerald-700 dark:text-gold-400 uppercase mb-3">
            مركز التحميل
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4">
            تحميل التطبيق للأجهزة المكتبية
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-600 to-gold-500 mx-auto rounded-full" />
        </div>

        {/* Cards container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Windows Download Card */}
          <div className="glass-card hover:bg-white dark:hover:bg-emerald-950/15 p-8 rounded-3xl border border-slate-200/60 dark:border-emerald-800/35 transition-all duration-300 shadow-xl relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-600/5 rounded-full blur-2xl group-hover:bg-emerald-600/10 transition-all pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center border border-emerald-500/10">
                  <Monitor className="w-6 h-6 text-emerald-600 dark:text-gold-400" />
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-gold-300 border border-emerald-500/10">
                  نظام تشغيل ويندوز
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6">
                تحميل لويندوز (Windows)
              </h3>

              {/* Requirements & Specs */}
              <ul className="space-y-4 text-sm text-slate-650 dark:text-slate-300 mb-8 border-t border-slate-200/50 dark:border-emerald-900/30 pt-6">
                <li className="flex items-center justify-between">
                  <span className="text-slate-400">نظام التشغيل المطلوب:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-100">{downloadLinks.windows.requirements[0]}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-400">معمارية النظام:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-100">{downloadLinks.windows.requirements[1]}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-400">حالة الإصدار:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-100">{downloadLinks.windows.requirements[2]}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-400">حجم الملف:</span>
                  <span className="font-semibold text-emerald-650 dark:text-gold-400 font-mono">{downloadLinks.windows.fileSize}</span>
                </li>
              </ul>
            </div>

            {/* Download Action Button */}
            <a
              href={downloadLinks.windows.downloadUrl}
              className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-l from-emerald-850 to-emerald-650 hover:from-emerald-700 hover:to-emerald-500 text-white font-bold shadow-lg shadow-emerald-950/20 hover:scale-[1.02] transition-all duration-300 group/btn border border-emerald-500/20 text-center"
            >
              <DownloadIcon className="w-5 h-5 text-gold-400 group-hover/btn:translate-y-0.5 transition-transform" />
              <span>تحميل لويندوز</span>
            </a>
          </div>

          {/* macOS Download Card */}
          <div className="glass-card hover:bg-white dark:hover:bg-emerald-950/15 p-8 rounded-3xl border border-slate-200/60 dark:border-emerald-800/35 transition-all duration-300 shadow-xl relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-full blur-2xl group-hover:bg-gold-500/10 transition-all pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center border border-emerald-500/10">
                  <Cpu className="w-6 h-6 text-emerald-600 dark:text-gold-400" />
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-amber-50 text-gold-800 dark:bg-emerald-950/50 dark:text-gold-300 border border-gold-500/10">
                  نظام تشغيل ماك
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6">
                تحميل للماك (macOS)
              </h3>

              {/* Requirements & Specs */}
              <ul className="space-y-4 text-sm text-slate-650 dark:text-slate-300 mb-8 border-t border-slate-200/50 dark:border-emerald-900/30 pt-6">
                <li className="flex items-center justify-between">
                  <span className="text-slate-400">بنية المعالج:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-100">{downloadLinks.macos.requirements[0]}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-400">نظام التشغيل المطلوب:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-100">{downloadLinks.macos.requirements[1]}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-400">حالة الإصدار:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-100">{downloadLinks.macos.requirements[2]}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-400">حجم الملف:</span>
                  <span className="font-semibold text-emerald-650 dark:text-gold-400 font-mono">{downloadLinks.macos.fileSize}</span>
                </li>
              </ul>
            </div>

            {/* Download Action Button */}
            <a
              href="#download"
              onClick={(e) => {
                e.preventDefault();
                onDownloadMac();
              }}
              className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-white dark:bg-emerald-950/30 hover:bg-slate-50 dark:hover:bg-emerald-950/60 border border-slate-300 dark:border-emerald-800/40 text-slate-800 dark:text-slate-100 font-bold shadow-md hover:scale-[1.02] transition-all duration-300 group/btn text-center cursor-pointer"
            >
              <DownloadIcon className="w-5 h-5 text-emerald-600 dark:text-gold-400 group-hover/btn:translate-y-0.5 transition-transform" />
              <span>تحميل للماك</span>
            </a>
          </div>

        </div>

        {/* Current Version Information Badge */}
        <div className="mt-12 flex flex-col items-center gap-2 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-emerald-950/20 border border-slate-200/50 dark:border-emerald-900/35">
            <Info className="w-4 h-4 text-emerald-600 dark:text-gold-400" />
            <span className="text-xs text-slate-550 dark:text-slate-400 font-semibold">
              الإصدار الحالي المستقر: <span className="font-mono text-emerald-600 dark:text-gold-400">{downloadLinks.windows.version}</span>
            </span>
            <span className="text-slate-300 dark:text-emerald-900">|</span>
            <span className="text-[10px] text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>تاريخ الإطلاق: {downloadLinks.windows.releaseDate}</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
