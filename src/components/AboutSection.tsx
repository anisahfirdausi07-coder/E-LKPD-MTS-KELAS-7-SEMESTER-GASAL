import { BookOpenCheck, Headphones, MessageCircle, PenTool } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ARABIC_SKILLS, HERO_IMAGE_PATH, type ArabicSkill } from '../data/portalData';

function SkillIcon({ id }: { id: ArabicSkill['id'] }) {
  switch (id) {
    case 'istima':
      return <Headphones className="h-6 w-6" aria-hidden="true" />;
    case 'kalam':
      return <MessageCircle className="h-6 w-6" aria-hidden="true" />;
    case 'qiraah':
      return <BookOpenCheck className="h-6 w-6" aria-hidden="true" />;
    case 'kitabah':
      return <PenTool className="h-6 w-6" aria-hidden="true" />;
  }
}

export function AboutSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="tentang" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* Editorial Description Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            <p
              dir="rtl"
              lang="ar"
              className="font-arabic text-2xl sm:text-3xl font-bold text-teal-800"
            >
              عَنْ هَذَا الْكِتَابِ
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance">
              Tentang E-LKPD Bahasa Arab
            </h2>
            <p className="text-base leading-relaxed text-slate-700">
              <span dir="rtl" lang="ar" className="font-arabic text-lg font-bold text-teal-800">
                هَيَّا نَتَعَلَّمُ
              </span>{' '}
              merupakan bahan ajar tambahan elektronik Bahasa Arab untuk siswa kelas VII Madrasah
              Tsanawiyah yang dikembangkan berdasarkan pendekatan pembelajaran berdiferensiasi.
              Bahan ajar ini menyediakan aktivitas pembelajaran yang disesuaikan dengan tingkat
              kesiapan belajar siswa, yaitu Low, Middle, dan High.
            </p>
            <p className="text-sm text-slate-500">
              Mencakup empat keterampilan inti Bahasa Arab secara terpadu pada setiap tingkatan.
            </p>

            {!imageError && (
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white aspect-video">
                <img
                  src={HERO_IMAGE_PATH}
                  alt="Ilustrasi siswa MTs belajar dan berdiskusi Bahasa Arab bersama"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </motion.div>

          {/* Four Maharah Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {ARABIC_SKILLS.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${skill.accentBg} ${skill.accentText}`}
                  >
                    <SkillIcon id={skill.id} />
                  </div>
                  <span
                    dir="rtl"
                    lang="ar"
                    className={`font-arabic text-2xl font-bold ${skill.accentText}`}
                  >
                    {skill.arabicTitle}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-bold text-slate-900">
                  {skill.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
