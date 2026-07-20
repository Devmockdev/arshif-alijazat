import React, { useState } from "react";
import {
  Monitor,
  Search,
  Plus,
  Scroll,
  Home,
  Users,
  Settings as SettingsIcon, Download, Calendar,
  Info,
  BookOpen,
  Trash2,
  Edit,
  Upload,
  Copy,
  Share2,
  RefreshCw,
  Database,
  FileText,
  Eye,
  CheckCircle,
  Sun,
  Moon,
  ChevronDown,
} from "lucide-react";

interface TabItem {
  id: string;
  name: string;
}

export const Screenshots: React.FC = () => {
  const tabs: TabItem[] = [
    { id: "dashboard", name: "الرئيسية (لوحة التحكم)" },
    { id: "licensees", name: "سجل المجازين" },
    { id: "add_licensee", name: "إضافة مجاز جديد" },
    { id: "licensee_details", name: "ملف المجاز (فلاح حسن)" },
    { id: "certificates_list", name: "سجل الإجازات والأسانيد" },
    { id: "add_license", name: "إضافة إجازة جديدة" },
    { id: "settings", name: "الإعدادات العامة" },
  ];

  const [activeTab, setActiveTab] = useState<string>("dashboard");

  // Renders the Sidebar exactly as shown in the application screenshots
  const renderSidebar = () => (
    <div className="w-48 bg-[#060b08] border-l border-emerald-950/30 p-3.5 flex flex-col justify-between shrink-0 select-none">
      <div className="space-y-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2 pb-4 border-b border-emerald-900/10">
          <div className="w-8 h-8 rounded-lg bg-emerald-850 flex items-center justify-center border border-gold-500/25">
            <Scroll className="w-4.5 h-4.5 text-gold-400" />
          </div>
          <span className="text-[11px] font-bold text-white tracking-wide">أرشيف الإجازات</span>
        </div>

        {/* Menu Navigation */}
        <div className="space-y-1">
          {[
            { id: "dashboard", label: "الرئيسية", icon: <Home className="w-4.5 h-4.5" /> },
            { id: "licensees", label: "المجازون", icon: <Users className="w-4.5 h-4.5" /> },
            { id: "certificates_list", label: "الإجازات", icon: <BookOpen className="w-4.5 h-4.5" /> },
            { id: "settings", label: "الإعدادات", icon: <SettingsIcon className="w-4.5 h-4.5" /> },
            { id: "about", label: "حول التطبيق", icon: <Info className="w-4.5 h-4.5" /> },
          ].map((item) => {
            const isSelected =
              activeTab === item.id ||
              (item.id === "licensees" && (activeTab === "add_licensee" || activeTab === "licensee_details" || activeTab === "add_license")) ||
              (item.id === "certificates_list" && activeTab === "certificates_list");
            return (
              <div
                key={item.id}
                onClick={() => {
                  if (item.id === "about") return;
                  setActiveTab(item.id);
                }}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-emerald-900/40 text-gold-400 border-r-2 border-gold-550 shadow-inner"
                    : "text-slate-400 hover:text-slate-200 hover:bg-emerald-950/20"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Info */}
      <div className="text-[8px] text-slate-500 font-medium text-center space-y-0.5 pt-4 border-t border-emerald-900/10">
        <div className="text-gold-500/70 font-bold">أرشيف الإجازات v1.0</div>
        <div>© ١٤٤٧هـ - ٢٠٢٦م</div>
      </div>
    </div>
  );

  // Renders the screen mockups representing the uploaded screenshots
  const renderScreenContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="flex flex-col gap-4 h-full overflow-y-auto text-right p-4">
            
            {/* Top Green Banner */}
            <div className="bg-gradient-to-l from-emerald-900/75 to-[#0b2b1a] p-4 rounded-xl border border-emerald-800/20 flex flex-col gap-1.5 shadow-md">
              <h4 className="text-sm font-bold text-white tracking-wide">أرشيف الإجازات - سجل المجازين والإجازات</h4>
              <p className="text-[9.5px] text-slate-355 leading-relaxed max-w-2xl">
                أهلاً بك في نظام إدارة وتوثيق الإجازات العلمية والأسانيد الشرعية لأرشيف الإجازات. يعمل هذا النظام محلياً بالكامل دون الحاجة للاتصال بالإنترنت لحفظ خصوصية بياناتك وتيسير إدارتها.
              </p>
            </div>

            {/* Middle Section: Quote & Statistics */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              
              {/* Shafi'i Quote Card (Col span 7) */}
              <div className="lg:col-span-7 bg-[#0b120d] border border-emerald-950/40 rounded-xl p-4 flex flex-col justify-between relative shadow">
                <span className="absolute top-3 right-3 text-[9px] font-bold text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded border border-gold-500/10 flex items-center gap-1">
                  <BookOpen className="w-3 h-3" /> حكمة وعبرة
                </span>
                
                <p className="text-xs font-amiri font-bold text-slate-200 leading-loose text-center my-6">
                  « من أراد الدنيا فعليه بالعلم، ومن أراد الآخرة فعليه بالعلم، ومن أرادهما معاً فعليه بالعلم. »
                </p>
                
                <div className="flex justify-between items-center border-t border-slate-800/40 pt-3">
                  <span className="text-[9px] text-gold-500 font-bold">— الإمام الشافعي</span>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 px-2 py-1 rounded bg-slate-850 hover:bg-slate-800 text-[8px] text-slate-300 border border-slate-700/35">
                      <Copy className="w-2.5 h-2.5" /> نسخ
                    </button>
                    <button className="flex items-center gap-1 px-2 py-1 rounded bg-slate-850 hover:bg-slate-800 text-[8px] text-slate-300 border border-slate-700/35">
                      <Share2 className="w-2.5 h-2.5" /> مشاركة
                    </button>
                    <button className="flex items-center gap-1 px-2 py-1 rounded bg-slate-850 hover:bg-slate-800 text-[8px] text-slate-300 border border-slate-700/35">
                      <RefreshCw className="w-2.5 h-2.5" /> رسالة أخرى
                    </button>
                  </div>
                </div>
              </div>

              {/* Statistics Widgets (Col span 5) */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                <div className="bg-[#0b120d] border border-emerald-950/40 p-4 rounded-xl shadow flex items-center justify-between">
                  <div>
                    <div className="text-[9px] text-slate-455 mb-1">إجمالي المجازين</div>
                    <div className="text-sm font-bold text-slate-100">١ طالباً وشيخاً مسجلاً</div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <Users className="w-5 h-5" />
                  </div>
                </div>
                
                <div className="bg-[#0b120d] border border-emerald-950/40 p-4 rounded-xl shadow flex items-center justify-between">
                  <div>
                    <div className="text-[9px] text-slate-455 mb-1">إجمالي الإجازات الممنوحة</div>
                    <div className="text-sm font-bold text-slate-100">١ سنداً وإجازة علمية مسجلة</div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-500">
                    <FileText className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Quick Actions & Recent Lists */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              
              {/* Quick Actions (Col span 4) */}
              <div className="lg:col-span-4 bg-[#0b120d] border border-emerald-950/40 rounded-xl p-4 flex flex-col gap-3 shadow">
                <h5 className="text-[10px] font-bold text-gold-450 border-b border-emerald-900/10 pb-2">إجراءات سريعة</h5>
                <button
                  onClick={() => setActiveTab("add_licensee")}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-[10px] shadow"
                >
                  <Plus className="w-3.5 h-3.5" /> إضافة مجاز جديد
                </button>
                <button
                  onClick={() => setActiveTab("certificates_list")}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-transparent hover:bg-slate-800 border border-gold-555/40 hover:border-gold-500 text-gold-400 hover:text-white font-bold text-[10px]"
                >
                  <Search className="w-3.5 h-3.5" /> البحث في الإجازات
                </button>
                <button
                  onClick={() => setActiveTab("settings")}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-transparent hover:bg-slate-800 border border-slate-700/50 text-slate-355 hover:text-white font-bold text-[10px]"
                >
                  <Database className="w-3.5 h-3.5" /> نسخ احتياطي واستيراد
                </button>
              </div>

              {/* Recent Licensees (Col span 4) */}
              <div className="lg:col-span-4 bg-[#0b120d] border border-emerald-950/40 rounded-xl p-4 flex flex-col justify-between shadow">
                <div>
                  <h5 className="text-[10px] font-bold text-gold-450 border-b border-emerald-900/10 pb-2 mb-3">المجازون المضافون حديثاً</h5>
                  <div
                    onClick={() => setActiveTab("licensee_details")}
                    className="flex justify-between items-center p-2 rounded bg-slate-850/40 border border-slate-800/50 hover:bg-slate-800/40 cursor-pointer transition-all"
                  >
                    <span className="text-[10px] font-bold text-slate-200">فلاح حسن</span>
                    <span className="text-[9px] text-slate-450">العراق</span>
                  </div>
                </div>
                <div className="text-center pt-4">
                  <span onClick={() => setActiveTab("licensees")} className="text-[8px] text-emerald-500 hover:underline cursor-pointer">عرض جميع المجازين ←</span>
                </div>
              </div>

              {/* Recent Certificates (Col span 4) */}
              <div className="lg:col-span-4 bg-[#0b120d] border border-emerald-950/40 rounded-xl p-4 flex flex-col justify-between shadow">
                <div>
                  <h5 className="text-[10px] font-bold text-gold-450 border-b border-emerald-900/10 pb-2 mb-3">الإجازات الصادرة حديثاً</h5>
                  <div
                    onClick={() => setActiveTab("certificates_list")}
                    className="flex justify-between items-center p-2 rounded bg-slate-850/40 border border-slate-800/50 hover:bg-slate-800/40 cursor-pointer transition-all"
                  >
                    <span className="text-[10px] font-bold text-slate-200">حفص عن عاصم</span>
                    <span className="text-[9px] text-slate-450">فلاح حسن</span>
                  </div>
                </div>
                <div className="text-center pt-4">
                  <span onClick={() => setActiveTab("certificates_list")} className="text-[8px] text-emerald-500 hover:underline cursor-pointer font-medium">عرض جميع الإجازات ←</span>
                </div>
              </div>

            </div>

          </div>
        );
      case "licensees":
      case "add_licensee": // Displays the table with modal over it if add_licensee
        return (
          <div className="h-full relative">
            {/* Background List View */}
            <div className="flex flex-col gap-3 h-full text-right p-4 select-none opacity-90">
              <div className="flex justify-between items-center border-b border-slate-800/30 pb-2">
                <div>
                  <h4 className="text-sm font-bold text-gold-450">سجل المجازين</h4>
                  <p className="text-[9px] text-slate-500 mt-0.5">عرض وإدارة قائمة طلاب العلم والمشايخ الحاصلين على إجازات في أرشيف الإجازات.</p>
                </div>
                <button
                  onClick={() => setActiveTab("add_licensee")}
                  className="bg-emerald-700 hover:bg-emerald-600 text-white px-3.5 py-1.5 rounded-lg text-[9.5px] font-bold flex items-center gap-1.5 shadow"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>إضافة مجاز جديد</span>
                </button>
              </div>

              {/* Filters */}
              <div className="flex justify-between items-center gap-4">
                <div className="flex-1 h-8 bg-[#0b120d]/80 border border-emerald-950/50 rounded-lg px-2.5 flex items-center gap-2 text-[9.5px] text-slate-400">
                  <Search className="w-3.5 h-3.5 text-slate-500" />
                  <span>البحث بالاسم، الدولة، التسلسل، القراءة، التحصيل...</span>
                </div>
                <span className="text-[9.5px] text-slate-455 font-bold shrink-0">تم العثور على: ١ مجازين</span>
              </div>

              {/* Data Table */}
              <div className="flex-1 bg-[#0b120d]/40 rounded-xl border border-emerald-950/30 overflow-hidden">
                <table className="w-full text-[10px] text-slate-355">
                  <thead>
                    <tr className="bg-[#0b120d]/80 border-b border-emerald-950/50 text-gold-450">
                      <th className="p-2.5 text-right font-bold">التسلسل</th>
                      <th className="p-2.5 text-right font-bold">الاسم الكامل</th>
                      <th className="p-2.5 text-right font-bold">الدولة</th>
                      <th className="p-2.5 text-right font-bold">التولد</th>
                      <th className="p-2.5 text-center font-bold">عدد الإجازات</th>
                      <th className="p-2.5 text-center font-bold">العمليات</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-emerald-950/10 border-b border-slate-900/40">
                      <td className="p-2.5 font-bold">#1</td>
                      <td className="p-2.5">
                        <div className="font-bold text-slate-200">فلاح حسن</div>
                        <div className="text-[8.5px] text-slate-455 mt-0.5">القراءة: حفص عن عاصم</div>
                      </td>
                      <td className="p-2.5">العراق</td>
                      <td className="p-2.5 font-mono text-[9px]">2001-02-16</td>
                      <td className="p-2.5 text-center">
                        <span className="bg-emerald-500/10 text-emerald-450 px-2 py-0.5 rounded-full text-[9px]">
                          ١ إجازة
                        </span>
                      </td>
                      <td className="p-2.5">
                        <div className="flex gap-1.5 justify-center">
                          <span className="text-[8.5px] bg-rose-500/10 text-rose-400 border border-rose-500/10 px-2 py-0.5 rounded cursor-pointer">حذف</span>
                          <span className="text-[8.5px] bg-gold-500/10 text-gold-400 border border-gold-555/15 px-2 py-0.5 rounded cursor-pointer">تعديل</span>
                          <span onClick={() => setActiveTab("licensee_details")} className="text-[8.5px] bg-slate-800 text-slate-300 border border-slate-700/50 px-2 py-0.5 rounded cursor-pointer">عرض</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Overlaid Add Licensee Modal if active tab is add_licensee */}
            {activeTab === "add_licensee" && (
              <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px] flex items-center justify-center p-4">
                <div className="bg-[#0b120d] border border-gold-500/25 rounded-2xl p-5 w-full max-w-md shadow-2xl flex flex-col gap-4 text-right animate-fade-in-up">
                  <div className="border-b border-slate-850 pb-2">
                    <h5 className="text-xs font-bold text-gold-400">إضافة مجاز جديد</h5>
                    <p className="text-[8px] text-slate-455 mt-0.5">أدخل تفاصيل المجاز لحفظه في السجل المحلي.</p>
                  </div>
                  
                  {/* Grid Fields */}
                  <div className="grid grid-cols-2 gap-3 text-[9px]">
                    <div className="space-y-1">
                      <label className="text-slate-400">التسلسل (رقم فريد)</label>
                      <input type="text" readOnly value="1" className="w-full bg-[#060a08] border border-emerald-950/60 rounded px-2 py-1 text-slate-400 font-mono" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-slate-400">الاسم الكامل *</label>
                      <input type="text" placeholder="الاسم الثلاثي" className="w-full bg-[#060a08] border border-emerald-950/60 rounded px-2 py-1 text-slate-200 placeholder-slate-600 focus:border-gold-500/50 outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-slate-400">الدولة *</label>
                      <select className="w-full bg-[#060a08] border border-emerald-950/60 rounded px-2 py-1 text-slate-200 outline-none">
                        <option>العراق</option>
                        <option>المملكة العربية السعودية</option>
                        <option>جمهورية مصر العربية</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-slate-400">التولد</label>
                      <input type="text" placeholder="dd/mm/yyyy" className="w-full bg-[#060a08] border border-emerald-950/60 rounded px-2 py-1 text-slate-200 placeholder-slate-600 font-mono outline-none" />
                    </div>
                    <div className="col-span-2 space-y-1">
                      <label className="text-slate-400">العنوان</label>
                      <textarea placeholder="أدخل عنوان المجاز... (مثال: بغداد - الكرخ، الموصل - حي الجامعة)" rows={1} className="w-full bg-[#060a08] border border-emerald-950/60 rounded px-2 py-1 text-slate-200 placeholder-slate-600 outline-none resize-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-slate-400">المهنة</label>
                      <input type="text" placeholder="مثال: مدرس، مهندس..." className="w-full bg-[#060a08] border border-emerald-950/60 rounded px-2 py-1 text-slate-200 placeholder-slate-600 outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-slate-400">التحصيل الدراسي</label>
                      <input type="text" placeholder="مثال: بكالوريوس شريعة، ماجستير..." className="w-full bg-[#060a08] border border-emerald-950/60 rounded px-2 py-1 text-slate-200 placeholder-slate-600 outline-none" />
                    </div>
                    <div className="col-span-2 space-y-1">
                      <label className="text-slate-400">الرواية أو القراءة</label>
                      <input type="text" placeholder="مثال: حفص عن عاصم، ورش عن نافع..." className="w-full bg-[#060a08] border border-emerald-950/60 rounded px-2 py-1 text-slate-200 placeholder-slate-600 outline-none" />
                    </div>
                    
                    {/* Picture Picker Mock */}
                    <div className="col-span-2 flex items-center justify-between border border-dashed border-emerald-900/30 rounded p-2 bg-[#060a08]/40">
                      <span className="text-[8.5px] text-slate-455">الصورة الشخصية (اختياري)</span>
                      <button type="button" className="px-2 py-1 bg-slate-800 text-[8px] text-slate-355 rounded border border-slate-700/50 hover:bg-slate-755">اختر صورة</button>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 justify-end mt-2 pt-2 border-t border-slate-850">
                    <button
                      onClick={() => setActiveTab("licensees")}
                      className="px-3 py-1 bg-[#060a08] hover:bg-slate-800 text-[9px] text-slate-400 rounded border border-slate-800"
                    >
                      إلغاء
                    </button>
                    <button
                      onClick={() => setActiveTab("licensees")}
                      className="px-4 py-1 bg-emerald-700 hover:bg-emerald-600 text-[9px] text-white rounded font-bold shadow"
                    >
                      حفظ المجاز
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      case "licensee_details":
      case "add_license": // Detail page showing add_license modal overlay
        return (
          <div className="h-full relative">
            
            {/* Background Detail Page */}
            <div className="flex flex-col gap-4 h-full overflow-y-auto text-right p-4 select-none opacity-90">
              
              {/* Breadcrumbs path */}
              <div className="flex gap-1.5 text-[8.5px] text-slate-500">
                <span onClick={() => setActiveTab("licensees")} className="hover:underline cursor-pointer">المجازون</span>
                <span>/</span>
                <span className="text-gold-500">فلاح حسن</span>
              </div>

              {/* Main Profile Header Card */}
              <div className="bg-[#0b120d] border border-emerald-950/40 rounded-xl p-4 shadow flex flex-col sm:flex-row justify-between items-start gap-4">
                
                {/* Profile Avatar / Medallion */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-slate-800 border border-gold-500/35 flex items-center justify-center text-[10px] text-slate-400 relative overflow-hidden select-none shrink-0 shadow-md">
                    {/* SVG Medallion inside the avatar, mimicking the screenshot's logo */}
                    <div className="absolute inset-0.5 rounded-full border border-dashed border-gold-500/20 flex items-center justify-center p-2 bg-[#060a08]/90">
                      <span className="text-gold-400 font-bold text-[18px]">م</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-black text-slate-100">فلاح حسن</h4>
                      <span className="text-[8px] bg-gold-500/10 text-gold-400 px-2 py-0.5 rounded border border-gold-500/10 font-bold">تسلسل #١</span>
                    </div>
                    <div className="text-[8.5px] text-slate-455 flex items-center gap-2">
                      <span>رواية/قراءة:</span>
                      <span className="text-gold-300 font-bold">حفص عن عاصم</span>
                    </div>
                    <div className="text-[8.5px] text-slate-500">تم التسجيل: ٢٠٢٦/٠٧/٢٠</div>
                  </div>
                </div>

                {/* Grid of Profile specifications */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-1.5 text-[9px] border-r border-slate-800/40 pr-4 flex-1">
                  <div>
                    <span className="text-slate-500 block">الدولة:</span>
                    <span className="text-slate-200 font-bold">العراق</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">التولد:</span>
                    <span className="text-slate-200 font-mono font-bold">2001-02-16</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">العنوان:</span>
                    <span className="text-slate-200 font-bold">موصل</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">المهنة:</span>
                    <span className="text-slate-200 font-bold">مهندس</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">التحصيل الدراسي:</span>
                    <span className="text-slate-200 font-bold">برمجيات</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">الإجازات الصادرة:</span>
                    <span className="text-emerald-500 font-bold">١ إجازة</span>
                  </div>
                </div>

                {/* Profile Controls */}
                <div className="flex flex-col gap-2 shrink-0 w-full sm:w-auto">
                  <button
                    onClick={() => setActiveTab("add_license")}
                    className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-[9px] shadow"
                  >
                    <Plus className="w-3.5 h-3.5" /> إضافة إجازة
                  </button>
                  <button className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded bg-transparent hover:bg-slate-800 border border-gold-550/30 hover:border-gold-500 text-gold-400 text-[9px]">
                    <Edit className="w-3 h-3" /> تعديل بيانات المجاز
                  </button>
                  <button
                    onClick={() => setActiveTab("licensees")}
                    className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded bg-[#5a1b1b]/35 hover:bg-rose-900/40 text-rose-300 text-[9px] border border-rose-900/30"
                  >
                    <Trash2 className="w-3 h-3" /> حذف المجاز
                  </button>
                </div>
              </div>

              {/* Lower Section: Licenses List (with 1 active license matching Image 1) */}
              <div className="bg-[#0b120d]/40 rounded-xl border border-emerald-950/30 p-4 flex flex-col gap-4 flex-1">
                <div className="flex items-center justify-between w-full border-b border-slate-900 pb-3 mb-1">
                  <span className="text-xs font-bold text-slate-200">
                    الإجازات الممنوحة للمجاز <span className="bg-slate-850 px-2 py-0.5 rounded text-[10px] text-slate-400 font-mono">1</span>
                  </span>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-emerald-700/10 text-emerald-450 border border-emerald-500/20 text-[9px] rounded-lg cursor-pointer">الأحدث أولاً</span>
                    <span className="px-3 py-1 bg-slate-850 text-slate-455 text-[9px] rounded-lg cursor-pointer">الأقدم أولاً</span>
                  </div>
                </div>

                {/* License Card Grid Item */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-[#0d1610] p-4 rounded-xl border border-emerald-950/50 flex items-center justify-between shadow">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                        <Scroll className="w-5 h-5" />
                      </div>
                      <div className="text-right">
                        <h5 className="text-[11px] font-bold text-slate-200">حفص عن عاصم</h5>
                        <div className="text-[8.5px] text-slate-455 mt-1 flex items-center gap-1">
                          <Calendar className="w-2.5 h-2.5 text-slate-500" />
                          <span>تاريخ الإصدار: 20-07-2026</span>
                        </div>
                      </div>
                    </div>
                    {/* Operations */}
                    <div className="flex items-center gap-2">
                      <span className="text-[8.5px] text-gold-455 hover:text-gold-300 font-bold cursor-pointer bg-gold-500/10 px-2 py-1 rounded border border-gold-555/15 flex items-center gap-1">
                        <Eye className="w-3 h-3" /> معاينة
                      </span>
                      <span className="text-[8.5px] text-slate-355 hover:text-slate-200 font-bold cursor-pointer bg-slate-800 px-2 py-1 rounded border border-slate-700/50 flex items-center gap-1">
                        <Download className="w-3 h-3" /> تحميل
                      </span>
                      <span className="p-1 rounded bg-slate-800 border border-slate-700/50 text-slate-400 hover:text-slate-200 cursor-pointer">
                        <Edit className="w-3 h-3" />
                      </span>
                      <span className="p-1 rounded bg-slate-800 border border-slate-700/50 text-slate-400 hover:text-slate-200 cursor-pointer">
                        <Trash2 className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Overlaid Add License Modal if active tab is add_license */}
            {activeTab === "add_license" && (
              <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px] flex items-center justify-center p-4">
                <div className="bg-[#0b120d] border border-gold-500/25 rounded-2xl p-5 w-full max-w-md shadow-2xl flex flex-col gap-4 text-right animate-fade-in-up">
                  <div className="border-b border-[#0f1912] pb-2">
                    <h5 className="text-xs font-bold text-gold-400">إضافة إجازة جديدة</h5>
                    <p className="text-[8.5px] text-slate-455 mt-0.5">رفع وتوثيق إجازة لـ: <span className="text-white font-bold">فلاح حسن</span></p>
                  </div>
                  
                  {/* Fields */}
                  <div className="space-y-3.5 text-[9px]">
                    <div className="space-y-1">
                      <label className="text-slate-400">عنوان الإجازة / السند *</label>
                      <input type="text" placeholder="مثال: الإجازة في رواية صحيح البخاري، السند في القراءات العشر..." className="w-full bg-[#060a08] border border-emerald-950/60 rounded px-2.5 py-1.5 text-slate-200 placeholder-slate-650 focus:border-gold-500/50 outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-slate-400">تاريخ الإصدار *</label>
                      <input type="text" placeholder="dd/mm/yyyy" className="w-full bg-[#060a08] border border-emerald-950/60 rounded px-2.5 py-1.5 text-slate-200 placeholder-slate-650 font-mono outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-slate-400">ملف الإجازة (PDF) *</label>
                      
                      {/* Drag & Drop Upload Zone Mock */}
                      <div className="border border-dashed border-emerald-700/30 hover:border-gold-500/30 rounded-xl p-6 bg-[#060a08]/40 flex flex-col items-center justify-center text-center gap-2 cursor-pointer transition-all">
                        <Upload className="w-6 h-6 text-slate-500" />
                        <div className="text-slate-355 text-[9px] font-bold">انقر هنا لاختيار ملف الـ PDF</div>
                        <div className="text-[7.5px] text-slate-500">الصيغة المدعومة PDF فقط</div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 justify-end mt-2 pt-2 border-t border-slate-850">
                    <button
                      onClick={() => setActiveTab("licensee_details")}
                      className="px-3 py-1 bg-[#060a08] hover:bg-slate-800 text-[9px] text-slate-400 rounded border border-slate-800"
                    >
                      إلغاء
                    </button>
                    <button
                      onClick={() => setActiveTab("licensee_details")}
                      className="px-4 py-1 bg-emerald-700 hover:bg-emerald-600 text-[9px] text-white rounded font-bold shadow"
                    >
                      رفع وحفظ الإجازة
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      case "certificates_list":
        return (
          <div className="flex flex-col gap-3 h-full text-right p-4 select-none relative">
            <div className="flex justify-between items-center border-b border-slate-800/30 pb-2">
              <div>
                <h4 className="text-sm font-bold text-gold-450">سجل الإجازات والأسانيد</h4>
                <p className="text-[9px] text-slate-500 mt-0.5">عرض وبحث شامل في كافة الإجازات الممنوحة لطلاب العلم.</p>
              </div>
              <button
                onClick={() => setActiveTab("add_license")}
                className="bg-emerald-700 hover:bg-emerald-600 text-white px-3.5 py-1.5 rounded-lg text-[9.5px] font-bold flex items-center gap-1.5 shadow"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>إضافة إجازة جديدة</span>
              </button>
            </div>

            {/* Search & Filters Row */}
            <div className="grid grid-cols-12 gap-3 items-center">
              <div className="col-span-6 h-8 bg-[#0b120d]/80 border border-emerald-950/50 rounded-lg px-2.5 flex items-center gap-2 text-[9.5px] text-slate-400">
                <Search className="w-3.5 h-3.5 text-slate-500" />
                <span>البحث باسم المجاز، الدولة أو العنوان...</span>
              </div>
              
              <div className="col-span-3 h-8 bg-[#0b120d]/80 border border-emerald-950/50 rounded-lg px-2.5 flex items-center justify-between text-[9px] text-slate-300">
                <span>تصفية بحسب المجاز</span>
                <ChevronDown className="w-3 h-3 text-slate-500" />
              </div>

              <div className="col-span-3 h-8 bg-[#0b120d]/80 border border-emerald-950/50 rounded-lg px-2.5 flex items-center justify-between text-[9px] text-slate-300">
                <span>ترتيب الإجازات</span>
                <ChevronDown className="w-3 h-3 text-slate-500" />
              </div>
            </div>

            <div className="text-[9px] text-slate-455 font-bold mb-1">
              تم العثور على: ١ إجازة
            </div>

            {/* Table */}
            <div className="flex-1 bg-[#0b120d]/40 rounded-xl border border-emerald-950/30 overflow-hidden">
              <table className="w-full text-[10px] text-slate-355">
                <thead>
                  <tr className="bg-[#0b120d]/80 border-b border-emerald-950/50 text-gold-450">
                    <th className="p-2.5 text-right font-bold">عنوان الإجازة</th>
                    <th className="p-2.5 text-right font-bold">المجاز</th>
                    <th className="p-2.5 text-right font-bold">تاريخ الإصدار</th>
                    <th className="p-2.5 text-center font-bold">الملف</th>
                    <th className="p-2.5 text-center font-bold">العمليات</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-emerald-950/10 border-b border-slate-900/40">
                    <td className="p-2.5 font-bold text-slate-200">حفص عن عاصم</td>
                    <td className="p-2.5">
                      <div className="font-bold text-slate-250">فلاح حسن</div>
                      <div className="text-[8.5px] text-slate-500 mt-0.5">العراق</div>
                    </td>
                    <td className="p-2.5 font-mono text-[9px]">2026-07-20</td>
                    <td className="p-2.5 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-[8px] bg-gold-500/10 text-gold-400 border border-gold-555/15 px-2 py-0.5 rounded cursor-pointer flex items-center gap-0.5">
                          <Eye className="w-2.5 h-2.5" /> معاينة
                        </span>
                        <span className="text-[8px] bg-slate-800 text-slate-355 border border-slate-700/50 px-2 py-0.5 rounded cursor-pointer flex items-center gap-0.5">
                          <Download className="w-2.5 h-2.5" /> تحميل
                        </span>
                      </div>
                    </td>
                    <td className="p-2.5">
                      <div className="flex gap-1.5 justify-center">
                        <span className="text-[8.5px] bg-rose-500/10 text-rose-450 border border-rose-500/10 px-2 py-0.5 rounded cursor-pointer">حذف</span>
                        <span className="text-[8.5px] bg-gold-500/10 text-gold-400 border border-gold-555/15 px-2 py-0.5 rounded cursor-pointer">تعديل</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Notification Toast Alert (Green overlay at the bottom left) */}
            <div className="absolute bottom-4 left-4 bg-emerald-950/90 text-emerald-350 border border-emerald-500/30 px-3.5 py-2.5 rounded-lg flex items-center gap-2.5 shadow-2xl animate-fade-in-up text-[9px] font-bold">
              <CheckCircle className="w-4 h-4 text-emerald-450" />
              <span>تم حفظ وإضافة الإجازة بنجاح.</span>
              <span className="text-slate-600 hover:text-slate-450 cursor-pointer pl-1 text-[11px]">×</span>
            </div>
          </div>
        );
      case "settings":
        return (
          <div className="flex flex-col gap-4 h-full overflow-y-auto text-right p-4 select-none">
            
            {/* Header */}
            <div className="border-b border-slate-850 pb-2">
              <h4 className="text-sm font-bold text-gold-450">الإعدادات</h4>
              <p className="text-[9.5px] text-slate-500 mt-0.5">تخصيص مظهر التطبيق وإدارة النسخ الاحتياطية للبيانات محلياً.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
              {/* Left Column: Preferences */}
              <div className="bg-[#0b120d] border border-emerald-950/40 rounded-xl p-4 flex flex-col gap-4 shadow">
                <div>
                  <h5 className="text-[10px] font-bold text-gold-400 flex items-center gap-1.5">
                    <Sun className="w-3.5 h-3.5 text-gold-500" /> تفضيلات ومظهر التطبيق
                  </h5>
                  <p className="text-[8px] text-slate-500 mt-0.5">تخصيص مظهر التصفح وإشعارات السجلات.</p>
                </div>

                {/* Dark/Light Toggles */}
                <div className="grid grid-cols-2 gap-3 text-[9px] pt-1">
                  <div className="border border-slate-800/80 bg-slate-850/20 text-slate-400 rounded-xl p-3 flex flex-col items-center gap-2 hover:bg-slate-800/30 cursor-pointer">
                    <Sun className="w-5 h-5 text-slate-500" />
                    <span>الوضع المضيء (النهاري)</span>
                  </div>
                  <div className="border border-gold-550 bg-emerald-950/25 text-gold-400 rounded-xl p-3 flex flex-col items-center gap-2 shadow shadow-gold-500/5 cursor-pointer">
                    <Moon className="w-5 h-5 text-gold-400" />
                    <span>الوضع الداكن (الليلي)</span>
                  </div>
                </div>

                {/* Checkbox */}
                <label className="flex items-center gap-2 text-[9px] text-slate-350 cursor-pointer pt-2">
                  <input type="checkbox" defaultChecked className="accent-gold-550 w-3.5 h-3.5" />
                  <span>تذكيري بإنشاء نسخة احتياطية دورياً (كل ٣٠ يوماً)</span>
                </label>
              </div>

              {/* Right Column: Database Admin */}
              <div className="bg-[#0b120d] border border-emerald-950/40 rounded-xl p-4 flex flex-col gap-4 shadow">
                <div>
                  <h5 className="text-[10px] font-bold text-gold-450 flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5" /> إدارة قاعدة البيانات والنسخ الاحتياطي
                  </h5>
                  <p className="text-[8px] text-slate-500 mt-0.5">تصدير واستيراد سجلات وبيانات المجازين محلياً.</p>
                </div>

                <div className="space-y-3.5">
                  {/* Export card */}
                  <div className="bg-[#060a08]/50 border border-emerald-950/30 p-3 rounded-lg flex flex-col gap-2">
                    <div className="text-[9px] font-bold text-slate-300">تصدير نسخة احتياطية للبيانات</div>
                    <div className="text-[8px] text-slate-455 leading-normal">
                      قم بتحميل ملف JSON يحتوي على كافة سجلات المجازين، الإجازات، وملفات الـ PDF المخزنة لتتمكن من نقلها أو استعادتها لاحقاً.
                    </div>
                    <button className="self-end px-3 py-1.5 bg-emerald-700 hover:bg-emerald-600 text-white text-[8.5px] font-bold rounded flex items-center gap-1.5 shadow">
                      <Download className="w-3 h-3" /> تصدير البيانات (JSON)
                    </button>
                  </div>

                  {/* Import card */}
                  <div className="bg-[#060a08]/50 border border-emerald-950/30 p-3 rounded-lg flex flex-col gap-2">
                    <div className="text-[9px] font-bold text-slate-300">استيراد نسخة احتياطية</div>
                    <div className="text-[8px] text-slate-455 leading-normal">
                      اختر ملف النسخة الاحتياطية بصيغة JSON لاستعادتها. تنبيه: سيؤدي هذا الإجراء إلى استبدال كافة البيانات الحالية بالبيانات المستوردة.
                    </div>
                    <button className="self-end px-3 py-1.5 bg-transparent hover:bg-slate-800 border border-gold-550/40 text-gold-400 text-[8.5px] font-bold rounded flex items-center gap-1.5">
                      <Upload className="w-3 h-3" /> استيراد البيانات
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Danger Zone */}
            <div className="bg-[#1a0f0f]/30 border border-rose-950/30 rounded-xl p-4 flex flex-col gap-3.5 shadow shrink-0">
              <div>
                <h5 className="text-[10px] font-bold text-rose-400">منطقة الخطر (إجراءات حساسة)</h5>
                <p className="text-[8px] text-rose-450 mt-0.5">إجراءات لا يمكن التراجع عنها تؤدي إلى مسح البيانات بشكل نهائي.</p>
              </div>
              <div className="flex justify-between items-center bg-[#060a08]/20 p-3 rounded-lg border border-rose-950/15">
                <div className="text-right">
                  <div className="text-[9.5px] font-bold text-slate-200">تهيئة وتصفير قاعدة البيانات</div>
                  <div className="text-[8px] text-slate-455 mt-0.5">سيتم مسح كافة سجلات المجازين والإجازات وملفات الـ PDF المخزنة محلياً.</div>
                </div>
                <button className="px-3.5 py-1.5 bg-rose-700 hover:bg-rose-600 text-white text-[9px] font-bold rounded flex items-center gap-1.5 shadow">
                  <Trash2 className="w-3 h-3" /> مسح كافة البيانات
                </button>
              </div>
            </div>

          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="screenshots" className="py-24 bg-white dark:bg-[#060D09] relative islamic-bg">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-bold tracking-widest text-emerald-700 dark:text-gold-400 uppercase mb-3">
            واجهات التطبيق الفعلية
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4">
            تصفح شاشات ولوحات التحكم الحقيقية للتطبيق
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-600 to-gold-500 mx-auto rounded-full" />
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-5xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-emerald-800 text-white dark:bg-gold-500 dark:text-emerald-950 shadow-md shadow-emerald-950/15"
                  : "bg-slate-100 text-slate-650 dark:bg-emerald-950/20 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-emerald-950/45 border border-transparent dark:border-emerald-900/10"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Desktop Application Window Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Gold Decorative Border Highlights */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-700 to-gold-500 rounded-3xl opacity-20 blur-lg -z-10" />
          
          <div className="relative rounded-2xl overflow-hidden border border-slate-355 dark:border-emerald-850/30 bg-[#0a0e0b] shadow-2xl w-full aspect-[16/10] flex flex-col">
            
            {/* Window Topbar */}
            <div className="h-12 bg-[#060b08] border-b border-emerald-950/30 px-4 flex items-center justify-between shrink-0 select-none">
              
              {/* Window Controls */}
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              
              {/* Active Section Info */}
              <span className="text-[10px] text-gold-450 font-bold flex items-center gap-1.5">
                <Monitor className="w-3.5 h-3.5" />
                <span>أرشيف الإجازات العلمية</span>
                <span className="text-slate-650 font-normal">|</span>
                <span className="text-slate-300">
                  {tabs.find((t) => t.id === activeTab)?.name || "الملف الشخصي"}
                </span>
              </span>

              {/* Shortcut Help & Theme Indicator (simulates top bar left side of screenshots) */}
              <div className="flex items-center gap-2">
                <span className="text-[8px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded border border-slate-700/50">
                  اختصارات: Alt + 1/2/3/4/5
                </span>
                <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-gold-400 text-[8px]">☀️</div>
              </div>
            </div>

            {/* Window Content Container with Sidebar & Dynamic Panel */}
            <div className="flex-1 flex overflow-hidden bg-[#0a0e0b] relative">
              {/* Main panel */}
              <div className="flex-1 overflow-hidden bg-[#0d130f]">
                {renderScreenContent()}
              </div>
              
              {/* Sidebar on the right side */}
              {renderSidebar()}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
