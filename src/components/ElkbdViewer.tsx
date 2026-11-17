import { ArrowLeft, ExternalLink, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { LEARNING_LEVELS, type LearningLevel } from '../data/portalData';

interface ElkbdViewerProps {
  activeLevel: LearningLevel;
  onBackHome: () => void;
  onSwitchLevel: (level: LearningLevel) => void;
}

export function ElkbdViewer({ activeLevel, onBackHome, onSwitchLevel }: ElkbdViewerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
  }, [activeLevel.id]);

  return (
    <div className="flex h-screen flex-col bg-slate-100">
      {/* Integrated Portal Top Control Bar */}
      <header className="border-b border-slate-200 bg-white px-4 py-2.5 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              onClick={onBackHome}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-700 whitespace-nowrap shrink-0 transition-colors hover:bg-slate-50 hover:text-teal-800 hover:border-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 min-h-[40px]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Kembali ke Beranda</span>
            </button>

            <div className="hidden md:flex items-center gap-2 text-sm text-slate-600 truncate">
              <span className="font-display font-bold text-slate-900">{activeLevel.name}</span>
              <span aria-hidden="true">·</span>
              <span>{activeLevel.groupLabel}</span>
            </div>
          </div>

          {/* Quick Level Switcher */}
          <div
            role="tablist"
            aria-label="Pindah kelompok E-LKPD"
            className="hidden sm:flex items-center gap-1 rounded-xl bg-slate-100 p-1"
          >
            {LEARNING_LEVELS.map((level) => {
              const isSelected = level.id === activeLevel.id;
              return (
                <button
                  key={level.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => onSwitchLevel(level)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {level.name.replace(' LEVEL', '')}
                </button>
              );
            })}
          </div>

          <a
            href={activeLevel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-700 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 min-h-[40px]"
          >
            <span>Buka di Halaman Penuh</span>
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </header>

      {/* Main Embedded E-LKPD Frame */}
      <main className="relative flex-1 overflow-hidden bg-white">
        {isLoading && !hasError && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-50/95 p-6 text-center">
            <Loader2 className="h-8 w-8 animate-spin text-teal-700" aria-hidden="true" />
            <p className="mt-3 font-display text-base font-semibold text-slate-900">
              Memuat {activeLevel.name} ({activeLevel.groupLabel})...
            </p>
            <p className="mt-1 max-w-md text-sm text-slate-600">
              Menghubungkan ke halaman E-LKPD asli tanpa mengubah materi atau fitur interaktifnya.
            </p>
            <a
              href={activeLevel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 underline underline-offset-4 hover:text-teal-900"
            >
              <span>Atau buka langsung di tab baru</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        )}

        {hasError ? (
          <div className="flex h-full flex-col items-center justify-center p-6 text-center">
            <div className="max-w-md rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-4">
              <h2 className="font-display text-xl font-bold text-slate-900">
                Tampilan Sematan Tidak Tersedia
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Peramban tidak dapat memuat halaman {activeLevel.name} di dalam bingkai sematan.
                Silakan buka website E-LKPD asli secara langsung menggunakan tombol di bawah ini.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-1">
                <a
                  href={activeLevel.url}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-800 min-h-[44px]"
                >
                  <span>Buka Website Asli</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={onBackHome}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 min-h-[44px]"
                >
                  <span>Kembali ke Beranda</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            key={activeLevel.id}
            src={activeLevel.url}
            title={`E-LKPD Bahasa Arab ${activeLevel.name} - ${activeLevel.groupLabel}`}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
            }}
            allow="autoplay; microphone; camera; fullscreen; clipboard-read; clipboard-write"
            className="h-full w-full border-0"
          />
        )}
      </main>
    </div>
  );
}
