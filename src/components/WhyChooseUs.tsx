import React from "react";
import { Zap, ShieldCheck, WifiOff, FileSpreadsheet, BarChart3, Database } from "lucide-react";

interface WhyItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
}

export const WhyChooseUs: React.FC = () => {
  const cards: WhyItem[] = [
    {
      title: "سريع وفائق الاستجابة",
      tag: "⚡ سريع",
      description: "صُمم التطبيق ليعمل بكفاءة وسرعة فائقة مستعيناً بقواعد بيانات محلية خفيفة تضمن استرجاع السجلات فوراً.",
      icon: <Zap className="w-5 h-5 text-amber-500" />,
    },
    {
      title: "أمان كامل وخصوصية تامة",
      tag: "🔒 آمن",
      description: "بياناتك مشفرة ومحفوظة محلياً على قرصك الصلب، دون أي اتصال أو إرسال لخوادم خارجية.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "يعمل دون الحاجة للإنترنت",
      tag: "🌍 يعمل دون إنترنت",
      description: "تصفح وأرشف وراجع معلومات المجازين في الحضر أو السفر دون التفكير في جودة شبكة الاتصال.",
      icon: <WifiOff className="w-5 h-5 text-cyan-500" />,
    },
    {
      title: "خيارات تصدير احترافية",
      tag: "📄 تصدير احترافي",
      description: "اطبع تقاريرك بصيغ جاهزة فوراً مثل ملفات PDF الجمالية أو أوراق عمل Excel القابلة للمشاركة.",
      icon: <FileSpreadsheet className="w-5 h-5 text-purple-500" />,
    },
    {
      title: "إحصائيات وتقارير متقدمة",
      tag: "📊 تقارير متقدمة",
      description: "احصل على رؤية تحليلية شاملة لتوزيع المجازين جغرافياً وأكثر المتون إجازة وأنشط المشايخ.",
      icon: <BarChart3 className="w-5 h-5 text-rose-500" />,
    },
    {
      title: "أدوات النسخ الاحتياطي",
      tag: "💾 نسخ احتياطي",
      description: "احفظ عملك من الفقدان بضغطة زر واحدة لتخزين نسخة احتياطية من القاعدة واستعادتها في أي وقت.",
      icon: <Database className="w-5 h-5 text-amber-600 dark:text-gold-500" />,
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#040805] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-emerald-700 dark:text-gold-400 uppercase mb-3">
            لماذا تختار المنظومة؟
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4">
            لماذا أرشيف الإجازات؟
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-600 to-gold-500 mx-auto rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="glass-card bg-white dark:bg-emerald-950/10 p-8 rounded-2xl border border-slate-200/50 dark:border-emerald-900/30 hover:border-emerald-700/30 dark:hover:border-gold-500/30 transition-all duration-300 shadow-md group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Tag */}
                  <span className="px-3 py-1 text-xs font-bold rounded-lg bg-emerald-50 text-emerald-800 dark:bg-emerald-950/45 dark:text-gold-300 border border-emerald-500/10">
                    {card.tag}
                  </span>
                  
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-emerald-950/30 flex items-center justify-center border border-slate-200/20">
                    {card.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {card.title}
                </h3>
                
                <p className="text-slate-650 dark:text-slate-350 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
              
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-l from-emerald-600 to-gold-500 mt-6 rounded-full transition-all duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
