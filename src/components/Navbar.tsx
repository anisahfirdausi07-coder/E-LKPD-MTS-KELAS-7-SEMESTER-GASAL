import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onNavigateSection: (sectionId: string) => void;
}

const NAV_ITEMS = [
  { label: 'Beranda', id: 'beranda' },
  { label: 'Tingkat Belajar', id: 'pilih-tingkat' },
  { label: 'Panduan', id: 'panduan' },
  { label: 'Tentang', id: 'tentang' },
];

export function Navbar({ onNavigateSection }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (id: string) => {
    setMobileOpen(false);
    onNavigateSection(id);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <a
          href="#beranda"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('beranda');
          }}
          dir="rtl"
          lang="ar"
          className="font-arabic-hero text-2xl font-bold text-teal-800 whitespace-nowrap shrink-0 transition-colors hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-md px-1"
        >
          هَيَّا نَتَعَلَّمُ!
        </a>

        <nav
          aria-label="Navigasi utama"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.id);
              }}
              className="whitespace-nowrap shrink-0 py-1 text-slate-600 transition-colors duration-150 hover:text-teal-700 hover:underline hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleLinkClick('pilih-tingkat')}
            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-teal-700 px-4 py-2 text-xs font-semibold tracking-wide text-white whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-teal-800 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 min-h-[40px]"
          >
            MULAI BELAJAR
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={mobileOpen}
            className="inline-flex md:hidden items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 min-h-[44px] min-w-[44px]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Navigasi seluler">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-teal-800"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => handleLinkClick('pilih-tingkat')}
              className="mt-2 w-full rounded-xl bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-800 min-h-[44px]"
            >
              MULAI BELAJAR
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
