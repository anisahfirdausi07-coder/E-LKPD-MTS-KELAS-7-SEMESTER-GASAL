import { motion } from 'motion/react';
import { GUIDE_STEPS } from '../data/portalData';

function StepIllustration({ stepIndex }: { stepIndex: number }) {
  if (stepIndex === 0) {
    // Step 1: Teacher & capability identification (book + checklist + star)
    return (
      <svg
        className="animate-float-slow h-20 w-20 text-teal-700"
        viewBox="0 0 80 80"
        fill="none"
        aria-hidden="true"
      >
        <rect x="12" y="14" width="56" height="52" rx="12" fill="#E6F7F5" />
        <path
          d="M24 26h22a4 4 0 014 4v24H24V26z"
          fill="#FFFFFF"
          stroke="#0F766E"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path d="M30 35h14M30 42h10" stroke="#0D9488" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="53" cy="27" r="9" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
        <path
          d="M49.5 27l2.5 2.5 4.5-4.5"
          stroke="#B45309"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (stepIndex === 1) {
    // Step 2: Choosing Low, Middle, or High group cards
    return (
      <svg
        className="animate-float-alt h-20 w-20 text-violet-700"
        viewBox="0 0 80 80"
        fill="none"
        aria-hidden="true"
      >
        <rect x="12" y="14" width="56" height="52" rx="12" fill="#F3EEFF" />
        <rect x="20" y="25" width="11" height="28" rx="3" fill="#99F6E4" stroke="#0F766E" strokeWidth="1.8" />
        <rect x="34.5" y="21" width="11" height="32" rx="3" fill="#DDD6FE" stroke="#6D28D9" strokeWidth="2" />
        <rect x="49" y="25" width="11" height="28" rx="3" fill="#FED7AA" stroke="#C2410C" strokeWidth="1.8" />
        <path
          d="M40 56l-3 5h6l-3-5z"
          fill="#6D28D9"
        />
      </svg>
    );
  }

  // Step 3: Clicking enter and completing interactive E-LKPD activities with pencil
  return (
    <svg
      className="animate-float-slow h-20 w-20 text-orange-700"
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
    >
      <rect x="12" y="14" width="56" height="52" rx="12" fill="#FFF1E6" />
      <rect x="22" y="24" width="36" height="28" rx="5" fill="#FFFFFF" stroke="#EA580C" strokeWidth="2.2" />
      <path d="M28 34h12M28 41h18" stroke="#FB923C" strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M46 46l11-11 4 4-11 11-5 1 1-5z"
        fill="#FDE68A"
        stroke="#B45309"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GuideSection() {
  return (
    <section id="panduan" className="border-y border-slate-200/80 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center space-y-2.5">
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic text-2xl sm:text-3xl font-bold text-teal-800"
          >
            كَيْفِيَّةُ اسْتِخْدَامِ الْكِتَابِ
          </p>
          <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
            Panduan Penggunaan
          </h2>
          <p className="text-base text-slate-600">
            Ikuti tiga langkah mudah berikut untuk mulai belajar menggunakan E-LKPD Bahasa Arab.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {GUIDE_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start rounded-2xl border border-slate-200 bg-slate-50/70 p-6 transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-sm"
            >
              <div className="flex w-full items-start justify-between gap-4">
                <StepIllustration stepIndex={index} />
                <div className="text-right">
                  <span className="font-display text-2xl font-bold tabular-nums text-slate-300">
                    {step.number}
                  </span>
                  <p dir="rtl" lang="ar" className="font-arabic text-sm font-semibold text-teal-800">
                    {step.arabicStep}
                  </p>
                </div>
              </div>

              <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
