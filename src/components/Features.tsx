import React from "react";
import {
  Users,
  Scroll,
  Search,
  Globe,
  FileSpreadsheet,
  Database,
  BarChart3,
} from "lucide-react";

interface FeatureItem {
  title: string;
  icon: React.ReactNode;
  bullets: string[];
}

export const Features: React.FC = () => {
  const featuresList: FeatureItem[] = [
    {
      title: "إدارة بيانات المجازين",
      icon: <Users className="w-6 h-6 text-emerald-600 dark:text-gold-450" />,
      bullets: [
        "تسجيل الاسم الكامل، وتاريخ التولد، والعنوان",
        "توثيق المهنة والتحصيل الدراسي للمجازين",
        "تحديد الرواية أو القراءة المجاز بها بدقة",
        "إضافة الصورة الشخصية الاختيارية للملف",
      ],
    },
    {
      title: "أرشفة وتوثيق الإجازات",
      icon: <Scroll className="w-6 h-6 text-emerald-600 dark:text-gold-450" />,
      bullets: [
        "ربط عدة إجازات علمية وسلاسل سند بكل مجاز",
        "حفظ وأرشفة ملفات الإجازة الرسمية بصيغة PDF",
        "توثيق تاريخ الإصدار بدقة لكل إجازة",
        "تصفية وفرز السند حسب الأحدث أو الأقدم",
      ],
    },
    {
      title: "البحث الذكي المتقدم",
      icon: <Search className="w-6 h-6 text-emerald-600 dark:text-gold-450" />,
      bullets: [
        "البحث الفوري بالاسم والدولة والتسلسل",
        "البحث بنوع القراءة أو الرواية أو التحصيل الدراسي",
        "تصفية سريعة ومقترنة لعرض نتائج مطابقة فورية",
        "شريط بحث ميسر يسهل التنقل بين السجلات الضخمة",
      ],
    },
    {
      title: "إدارة التوزيع الجغرافي",
      icon: <Globe className="w-6 h-6 text-emerald-600 dark:text-gold-450" />,
      bullets: [
        "فهرسة الطلاب والمشايخ حسب بلدانهم الأصلية",
        "رصد إجمالي المجازين المقيمين في كل دولة",
        "تصفية السجلات بنقرة واحدة بناء على الموقع",
        "خريطة إحصائية لبلدان فهارس المجازين",
      ],
    },
    {
      title: "نسخ احتياطي واستيراد سهل",
      icon: <Database className="w-6 h-6 text-emerald-600 dark:text-gold-450" />,
      bullets: [
        "إنشاء نسخة احتياطية من قاعدة البيانات محلياً",
        "استيراد واستعادة السجلات والملفات المرفقة بيسر",
        "حفظ وتخزين آمن للبيانات دون الحاجة لخوادم",
        "حماية كاملة من الضياع والتلف بفضل الحفظ المحلي",
      ],
    },
    {
      title: "الإحصائيات والتقارير العامة",
      icon: <BarChart3 className="w-6 h-6 text-emerald-600 dark:text-gold-450" />,
      bullets: [
        "متابعة إجمالي أعداد الطلاب والمشايخ المسجلين",
        "مراقبة إجمالي الإجازات الصادرة والموثقة محلياً",
        "رصد جغرافي تلقائي لأعلى الدول نشاطاً",
        "متابعة أحدث الإضافات والتعديلات الجارية",
      ],
    },
    {
      title: "تصدير البيانات المتكامل",
      icon: <FileSpreadsheet className="w-6 h-6 text-emerald-600 dark:text-gold-450" />,
      bullets: [
        "توليد تقارير PDF منسقة ومعدة للطباعة",
        "تصدير البيانات والجداول بصيغة Excel (XLSX)",
        "دعم التصدير بصيغة CSV لتنسيق الأنظمة الأخرى",
        "دعم التصدير بصيغة JSON لأرشفة الأكواد برمجياً",
      ],
    },
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 dark:bg-[#040805] relative">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-emerald-700 dark:text-gold-400 uppercase mb-3">
            المميزات والخصائص
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4">
            نظام متكامل صُمّم خصيصاً لتلبية احتياجاتك
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-600 to-gold-500 mx-auto rounded-full" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresList.map((feat, idx) => (
            <div
              key={idx}
              className="group glass-card hover:bg-white dark:hover:bg-emerald-950/15 p-6 rounded-2xl border border-slate-200/50 dark:border-emerald-900/35 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] flex flex-col justify-between"
            >
              <div>
                {/* Feature Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-emerald-100/55 dark:bg-emerald-950/50 flex items-center justify-center mb-5 group-hover:bg-emerald-700 dark:group-hover:bg-gold-500/80 transition-all duration-300 border border-emerald-500/10">
                  <div className="group-hover:text-white dark:group-hover:text-emerald-950 transition-colors">
                    {feat.icon}
                  </div>
                </div>

                {/* Feature Title */}
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                  {feat.title}
                </h3>

                {/* Bullet List */}
                <ul className="space-y-2 text-sm text-slate-650 dark:text-slate-350">
                  {feat.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-gold-500 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Highlight line */}
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-l from-emerald-700 to-gold-500 mt-6 rounded-full transition-all duration-300" />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
