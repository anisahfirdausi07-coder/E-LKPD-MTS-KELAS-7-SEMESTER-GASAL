import { ArrowDown, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onStartLearning: () => void;
  onOpenGuide: () => void;
}

export function HeroSection({ onStartLearning, onOpenGuide }: HeroSectionProps) {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-gradient-to-b from-[#E8F6F5] via-[#F4FAFC] to-slate-50 py-12 sm:py-16 lg:py-20"
    >
      {/* Gentle floating educational ornaments safely placed around outer perimeter */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft Cloud - Top Left */}
        <svg
          className="animate-float-slow absolute top-10 left-[4%] h-12 w-24 text-sky-200/90 hidden md:block"
          viewBox="0 0 120 64"
          fill="currentColor"
        >
          <path d="M28 52h66c11 0 20-8.5 20-19 0-9.6-7.2-17.6-16.6-18.8C94 5.8 85.7 0 76 0 64.5 0 54.8 7.8 52 18.4 49 16.9 45.6 16 42 16c-11.6 0-21 9.4-21 21 0 .7 0 1.4.1 2.1C12.5 40.3 6 47.4 6 56h22z" />
        </svg>

        {/* Eight-pointed Islamic Star - Top Right */}
        <svg
          className="animate-float-alt absolute top-14 right-[6%] h-12 w-12 text-amber-400/80 hidden md:block"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="13" y="13" width="22" height="22" rx="2" fill="currentColor" fillOpacity="0.15" />
          <rect
            x="13"
            y="13"
            width="22"
            height="22"
            rx="2"
            transform="rotate(45 24 24)"
            fill="currentColor"
            fillOpacity="0.15"
          />
          <circle cx="24" cy="24" r="3" fill="currentColor" />
        </svg>

        {/* Open Book Ornament - Mid Left */}
        <svg
          className="animate-float-alt absolute top-1/2 left-[3%] h-12 w-12 text-teal-600/45 hidden lg:block"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M24 13c-4-3-10-4-16-2v24c6-2 12-1 16 2 4-3 10-4 16-2V11c-6-2-12-1-16 2z" fill="currentColor" fillOpacity="0.1" />
          <path d="M24 13v24" />
        </svg>

        {/* Pencil Ornament - Mid Right */}
        <svg
          className="animate-float-slow absolute top-[46%] right-[4%] h-11 w-11 text-orange-500/55 hidden lg:block"
          viewBox="0 0 44 44"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 30L29 11l4 4L14 34l-6 2 2-6z" fill="currentColor" fillOpacity="0.15" />
          <path d="M25 15l4 4" />
        </svg>

        {/* Small Twinkling Star - Bottom Left */}
        <svg
          className="animate-soft-glow absolute bottom-14 left-[8%] h-8 w-8 text-amber-400/80 hidden md:block"
          viewBox="0 0 32 32"
          fill="currentColor"
        >
          <path d="M16 2l3.4 9.6L29 15l-9.6 3.4L16 28l-3.4-9.6L3 15l9.6-3.4L16 2z" />
        </svg>

        {/* Soft Cloud - Bottom Right */}
        <svg
          className="animate-float-slow absolute bottom-12 right-[7%] h-10 w-20 text-teal-200/75 hidden md:block"
          viewBox="0 0 120 64"
          fill="currentColor"
        >
          <path d="M28 52h66c11 0 20-8.5 20-19 0-9.6-7.2-17.6-16.6-18.8C94 5.8 85.7 0 76 0 64.5 0 54.8 7.8 52 18.4 49 16.9 45.6 16 42 16c-11.6 0-21 9.4-21 21 0 .7 0 1.4.1 2.1C12.5 40.3 6 47.4 6 56h22z" />
        </svg>
      </div>

      {/* Centered Digital Book Cover Stage */}
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl border border-teal-200/80 bg-white/90 px-6 py-10 shadow-lg shadow-teal-950/5 backdrop-blur-sm sm:px-12 sm:py-14 lg:px-16 lg:py-16"
        >
          {/* Subtle inner cover frame line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-3 rounded-[20px] border border-amber-300/35"
          />

          <div className="relative flex flex-col items-center text-center">
            {/* Top Islamic Book Emblem Ornament */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 flex items-center gap-3 text-amber-500"
              aria-hidden="true"
            >
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-teal-400/60 sm:w-16" />
              <svg className="h-7 w-7 text-teal-700" viewBox="0 0 32 32" fill="none">
                <path
                  d="M16 9c-3-2-7-2.5-11-1v15c4-1.5 8-1 11 1 3-2 7-2.5 11-1V8c-4-1.5-8-1-11 1z"
                  fill="#CCFBF1"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path d="M16 9v15" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="16" cy="4.5" r="1.5" fill="#F59E0B" />
              </svg>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-teal-400/60 sm:w-16" />
            </motion.div>

            {/* 4-Level Centered RTL Arabic Cover Typography (Exact Text & Harakat Preserved) */}
            <div dir="rtl" lang="ar" className="w-full max-w-3xl space-y-4 sm:space-y-5 text-center">
              {/* 1. Main Hero Title */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-arabic-hero py-1 text-[2.65rem] sm:text-[3.75rem] lg:text-[4.5rem] font-bold text-[#0C544E] drop-shadow-[0_2px_10px_rgba(13,148,136,0.12)]"
              >
                هَيَّا نَتَعَلَّمُ!
              </motion.h1>

              {/* 2. Main Book Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="font-arabic-kitab py-0.5 text-[1.55rem] sm:text-[2.15rem] lg:text-[2.5rem] font-bold text-slate-900"
              >
                الْكِتَابُ الإِضَافِيُّ الْإِلِكْتُرُونِيُّ
              </motion.p>

              {/* 3. Supporting Subject Line */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="font-arabic text-[1.2rem] sm:text-[1.55rem] lg:text-[1.75rem] font-semibold text-teal-800"
              >
                لِتَعْلِيمِ اللُّغَةِ الْعَرَبِيَّةِ
              </motion.p>

              {/* 4. Educational Level Line */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="font-arabic text-[1.02rem] sm:text-[1.25rem] lg:text-[1.35rem] font-medium text-slate-700"
              >
                لِلصَّفِّ السَّابِعِ بِالْمَدْرَسَةِ الْمُتَوَسِّطَةِ
              </motion.p>
            </div>

            {/* Delicate Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0.7 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.45, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
              className="my-7 flex w-full max-w-xs items-center justify-center gap-3"
              aria-hidden="true"
            >
              <span className="h-px flex-1 bg-slate-200" />
              <span className="h-2 w-2 rotate-45 bg-amber-400" />
              <span className="h-px flex-1 bg-slate-200" />
            </motion.div>

            {/* Indonesian Translation & Welcome Description */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl space-y-2.5"
            >
              <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                Yuk, Kita Belajar Bahasa Arab!
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                Selamat datang di pembelajaran Bahasa Arab interaktif. Pilih tingkat pembelajaran
                sesuai kemampuanmu dan mulailah petualangan belajar Bahasa Arab yang menyenangkan!
              </p>
            </motion.div>

            {/* Centered Cover Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 flex flex-wrap items-center justify-center gap-3.5"
            >
              <button
                type="button"
                onClick={onStartLearning}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-teal-900/15 whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-teal-800 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 min-h-[44px]"
              >
                <span>MULAI BELAJAR</span>
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onOpenGuide}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 whitespace-nowrap shrink-0 transition-all duration-150 hover:border-teal-600 hover:text-teal-800 hover:bg-teal-50/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 min-h-[44px]"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                <span>PANDUAN PENGGUNAAN</span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
