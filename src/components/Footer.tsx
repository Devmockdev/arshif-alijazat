import React from "react";
import { Mail, Scroll } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 dark:bg-[#030704] border-t border-slate-800 dark:border-emerald-950/40 pt-16 pb-8 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">

          {/* Brand Info (Col span 4) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-emerald-700 dark:bg-emerald-850 flex items-center justify-center border border-gold-500/20">
                <Scroll className="w-5 h-5 text-gold-400" />
              </div>
              <span className="text-lg font-bold text-white tracking-wide">أرشيف الإجازات</span>
            </div>
            <p className="text-sm text-slate-400 dark:text-slate-450 leading-relaxed max-w-sm">
              نظام متكامل واحترافي مصمم خصيصاً لتنظيم وأرشفة الإجازات العلمية وتسهيل إدارة بيانات المجازين محلياً وبكل أمان وسرية.
            </p>
          </div>

          {/* Site Navigation Links (Col span 4) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wide">خريطة الموقع</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#hero" className="hover:text-gold-400 transition-colors">الرئيسية</a>
              <a href="#features" className="hover:text-gold-400 transition-colors">المميزات</a>
              <a href="#download" className="hover:text-gold-400 transition-colors">التحميل</a>
              <a href="#screenshots" className="hover:text-gold-400 transition-colors">لقطات الشاشة</a>
              <a href="#faq" className="hover:text-gold-400 transition-colors">الأسئلة الشائعة</a>
            </div>
          </div>

          {/* Developer Contact Profile (Col span 4) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wide">للتواصل</h4>
            <div className="space-y-2">
              <div className="text-sm font-bold text-slate-200">Falah Hasan</div>
              <div className="text-xs text-slate-500 dark:text-slate-450">Software Engineer</div>

              {/* Contact Icons */}
              <div className="flex gap-3 pt-2">
                {/* Email */}
                <a
                  href="mailto:devefalah@gmail.com"
                  className="w-8 h-8 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-700/50"
                  title="البريد الإلكتروني"
                >
                  <Mail className="w-4 h-4" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/devfalah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-slate-800 hover:bg-[#0077b5] text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-700/50 group"
                  title="لينكد إن LinkedIn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Border */}
        <div className="pt-8 border-t border-slate-800 dark:border-emerald-950/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 جميع الحقوق محفوظة لـ أرشيف الإجازات.</p>
          <div className="flex gap-4">
            <span className="text-slate-650">تم التطوير بواسطة فلاح حسن جمعه</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
