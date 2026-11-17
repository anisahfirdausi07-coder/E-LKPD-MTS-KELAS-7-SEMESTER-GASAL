import { LEARNING_LEVELS, type LearningLevel } from '../data/portalData';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onSelectLevel: (level: LearningLevel) => void;
}

const AUTHORS = [
  'Prof. Dr. Muflihah, S. Ag., MA',
  'Dr. H. Taufik, S. Ag., M. Pd. I.',
  'Anisah Firdausi Nuzula',
];

export function Footer({ onNavigateSection, onSelectLevel }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-white pt-14 pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand & Tagline */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-3">
            <p dir="rtl" lang="ar" className="font-arabic-display text-3xl font-bold text-teal-800">
              هَيَّا نَتَعَلَّمُ!
            </p>
            <p className="font-display text-base font-bold text-slate-900">
              E-LKPD Bahasa Arab Kelas VII MTs
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-slate-600">
              &ldquo;Belajar Bahasa Arab dengan Menyenangkan, Interaktif, dan Berdiferensiasi.&rdquo;
            </p>
          </div>

          {/* Navigasi Portal */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-display text-sm font-bold text-slate-900">Navigasi</h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <a
                  href="#beranda"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateSection('beranda');
                  }}
                  className="hover:text-teal-700 transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#pilih-tingkat"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateSection('pilih-tingkat');
                  }}
                  className="hover:text-teal-700 transition-colors"
                >
                  Tingkat Belajar
                </a>
              </li>
              <li>
                <a
                  href="#panduan"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateSection('panduan');
                  }}
                  className="hover:text-teal-700 transition-colors"
                >
                  Panduan
                </a>
              </li>
              <li>
                <a
                  href="#tentang"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateSection('tentang');
                  }}
                  className="hover:text-teal-700 transition-colors"
                >
                  Tentang
                </a>
              </li>
            </ul>
          </div>

          {/* Akses E-LKPD */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display text-sm font-bold text-slate-900">Akses E-LKPD</h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              {LEARNING_LEVELS.map((level) => (
                <li key={level.id}>
                  <button
                    type="button"
                    onClick={() => onSelectLevel(level)}
                    className="text-left hover:text-teal-700 transition-colors"
                  >
                    {level.name} <span className="text-slate-400">·</span> {level.groupLabel}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Author */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display text-sm font-bold text-slate-900">Author</h3>
            <ul className="space-y-2 text-sm font-medium text-slate-700">
              {AUTHORS.map((author) => (
                <li key={author}>{author}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-slate-200/80 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>E-LKPD Bahasa Arab Kelas VII · Madrasah Tsanawiyah</p>
          <p>Pembelajaran Berdiferensiasi (Low · Middle · High)</p>
        </div>
      </div>
    </footer>
  );
}
