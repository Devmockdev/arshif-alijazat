import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

export const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      q: "هل يحتاج التطبيق إلى الاتصال بالإنترنت؟",
      a: "لا، يعمل تطبيق أرشيف الإجازات بالكامل دون الحاجة إلى أي اتصال بالإنترنت. قاعدة البيانات وكل الملفات المخزنة تحفظ محلياً على جهازك الشخصي.",
    },
    {
      q: "هل يدعم التطبيق تصدير البيانات وصيغ الملفات؟",
      a: "نعم، يدعم التطبيق التصدير بصيغ متعددة ومرنة تلبي احتياجاتك، بما في ذلك: ملفات PDF منسقة ومعدة للطباعة المباشرة، جداول Excel (XLSX)، ملفات البيانات المجدولة CSV، والمخرجات البرمجية بصيغة JSON.",
    },
    {
      q: "هل يدعم التطبيق واجهات اللغة العربية؟",
      a: "نعم، تم تصميم وبرمجة التطبيق خصيصاً للغة العربية وبدعم كامل ومنهجي لاتجاهات RTL (من اليمين إلى اليسار)، مع تنسيقات خطوط عربية واضحة ومقروءة.",
    },
    {
      q: "هل يمكنني عمل نسخة احتياطية من سجلاتي؟",
      a: "نعم، يوفر التطبيق خيار النسخ الاحتياطي السريع لقاعدة البيانات بضغطة زر وتصديرها إلى مجلد خارجي، كما يمكنك استعادتها بنفس السهولة في حال قمت بنقل البرنامج لجهاز آخر أو أردت حفظ نسخة إضافية آمنة.",
    },
    {
      q: "هل بياناتي ومعلوماتي الخاصة محفوظة محلياً؟",
      a: "نعم، جميع البيانات تُخزَّن بالكامل داخل جهازك الشخصي بشكل آمن ومحلي، ولا يتم إرسال أو مشاركة أي سجل مع أي خادم خارجي أو طرف ثالث، مما يضمن لك أعلى درجات الخصوصية والسرية التامة لبيانات المجازين.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    if (openIndex === idx) {
      setOpenIndex(null);
    } else {
      setOpenIndex(idx);
    }
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 dark:bg-[#040805] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-emerald-700 dark:text-gold-400 uppercase mb-3">
            الأسئلة الشائعة
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4">
            الأسئلة المتكررة حول البرنامج
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-600 to-gold-500 mx-auto rounded-full" />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card bg-white dark:bg-emerald-950/10 rounded-2xl border border-slate-200/60 dark:border-emerald-900/35 overflow-hidden transition-all duration-300"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-right font-bold text-slate-800 dark:text-slate-100 hover:bg-slate-100/50 dark:hover:bg-emerald-950/20 transition-colors"
                >
                  <div className="flex items-center gap-3.5 pl-4">
                    <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-gold-400 shrink-0" />
                    <span className="text-base sm:text-lg">{faq.q}</span>
                  </div>
                  <div>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-gold-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </button>

                {/* Accordion Content Panel */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-slate-200/30 dark:border-emerald-900/10" : "max-h-0"
                  }`}
                >
                  <div className="p-6 text-sm text-slate-650 dark:text-slate-350 leading-relaxed bg-slate-50/50 dark:bg-emerald-950/5">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
