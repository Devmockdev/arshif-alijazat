import React from "react";
import { UserPlus, Scroll, FileUp, Sliders, FileSpreadsheet } from "lucide-react";

interface Step {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export const Workflow: React.FC = () => {
  const steps: Step[] = [
    {
      num: "١",
      title: "إضافة مجاز",
      desc: "تسجيل بيانات الطالب أو الشيخ الشخصية والتعليمية والدراسية.",
      icon: <UserPlus className="w-6 h-6 text-emerald-700 dark:text-gold-300" />,
    },
    {
      num: "٢",
      title: "إضافة إجازة",
      desc: "إدخال تفاصيل الإجازة العلمية واسم المتن أو الكتاب المجاز فيه.",
      icon: <Scroll className="w-6 h-6 text-emerald-700 dark:text-gold-300" />,
    },
    {
      num: "٣",
      title: "إرفاق ملف PDF",
      desc: "أرشفة وثيقة الإجازة وصور المخطوطات مباشرة وربطها بملف المجاز.",
      icon: <FileUp className="w-6 h-6 text-emerald-700 dark:text-gold-300" />,
    },
    {
      num: "٤",
      title: "البحث والإدارة",
      desc: "البحث السريع والتنقل بين سجلات الأسانيد والدول بكل مرونة.",
      icon: <Sliders className="w-6 h-6 text-emerald-700 dark:text-gold-300" />,
    },
    {
      num: "٥",
      title: "تصدير البيانات",
      desc: "توليد تقارير PDF منسقة للطباعة أو مشاركتها بصيغ رقمية متعددة.",
      icon: <FileSpreadsheet className="w-6 h-6 text-emerald-700 dark:text-gold-300" />,
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#060D09] relative islamic-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-emerald-700 dark:text-gold-400 uppercase mb-3">
            آلية وخطوات العمل
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4">
            دورة حياة إدارة السجلات
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-600 to-gold-500 mx-auto rounded-full" />
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-[52px] right-[10%] left-[10%] h-[2px] bg-gradient-to-l from-emerald-800/10 via-gold-500/50 to-emerald-800/10 -z-10" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                
                {/* Step Circle Frame */}
                <div className="w-24 h-24 rounded-full bg-slate-50 dark:bg-emerald-950/20 border-2 border-slate-205 dark:border-emerald-900/40 hover:border-gold-500 dark:hover:border-gold-500 flex items-center justify-center shadow-lg relative group-hover:scale-105 transition-all duration-300">
                  {step.icon}
                  {/* Step number badge */}
                  <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-emerald-700 text-white dark:bg-gold-500 dark:text-emerald-950 font-bold text-xs flex items-center justify-center border border-gold-300">
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-6 space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-gold-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-[200px] mx-auto leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Mobile connecting arrow (displays below each step on mobile except the last) */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden my-4 text-gold-500 animate-bounce">
                    ↓
                  </div>
                )}

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
