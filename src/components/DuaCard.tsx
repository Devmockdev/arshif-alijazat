import React from "react";

export const DuaCard: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-[#040805] relative">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Main Card Frame */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 to-emerald-950 dark:from-[#06180e] dark:to-[#021008] border-2 border-gold-500/30 p-8 sm:p-12 text-center shadow-2xl">
          
          {/* Islamic Star Background Watermark via SVG */}
          <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center -z-0">
            <svg
              className="w-[300px] h-[300px] text-gold-500 animate-spin"
              style={{ animationDuration: '40s' }}
              fill="currentColor"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="50,0 60,35 95,35 67,57 77,95 50,75 23,95 33,57 5,35 40,35" />
              <polygon points="50,100 60,65 95,65 67,43 77,5 50,25 23,5 33,43 5,65 40,65" transform="rotate(45 50 50)" />
            </svg>
          </div>

          {/* Golden Corner Accents */}
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-gold-500/50 rounded-tr" />
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-gold-500/50 rounded-tl" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-gold-500/50 rounded-br" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-gold-500/50 rounded-bl" />

          {/* Card Content */}
          <div className="relative z-10 space-y-6">
            
            {/* Title */}
            <div className="inline-block">
              <h3 className="text-xl font-bold font-amiri text-gold-400 tracking-wide border-b border-gold-500/30 pb-2">
                دعاء مبارك
              </h3>
            </div>

            {/* Main Dua */}
            <p className="text-2xl sm:text-3xl font-amiri font-bold text-amber-50 leading-loose max-w-2xl mx-auto italic">
              "اللهم علّمنا ما ينفعنا، وانفعنا بما علّمتنا، وزدنا علمًا، واجعل أعمالنا خالصةً لوجهك الكريم."
            </p>

            {/* Divider */}
            <div className="flex justify-center items-center gap-3">
              <span className="h-[1px] w-12 bg-gold-500/20" />
              <span className="text-gold-500 text-xs">✨</span>
              <span className="h-[1px] w-12 bg-gold-500/20" />
            </div>

            {/* Hadith Section */}
            <div className="space-y-3">
              <span className="block text-xs font-semibold text-emerald-300">
                قال رسول الله ﷺ:
              </span>
              <blockquote className="text-lg sm:text-xl font-amiri font-medium text-gold-300/90 leading-relaxed max-w-xl mx-auto">
                “من سلك طريقًا يلتمس فيه علمًا سهّل الله له به طريقًا إلى الجنة.”
              </blockquote>
              <span className="block text-[10px] text-emerald-400 font-sans">
                رواه مسلم
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
