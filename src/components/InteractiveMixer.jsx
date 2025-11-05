import React, { useMemo, useState } from 'react';
import { Shield, Clock, DollarSign, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const MATERIALS = [
  { key: 'plastic', label: 'Plastic', color: '#ef4444' },
  { key: 'sand', label: 'Sand', color: '#f59e0b' },
  { key: 'cement', label: 'Cement', color: '#6b7280' },
  { key: 'iron', label: 'Iron Frame', color: '#0ea5e9' },
];

export default function InteractiveMixer() {
  const [mix, setMix] = useState({ plastic: 30, sand: 40, cement: 20, iron: 10 });

  // Normalize to 100%
  const normalized = useMemo(() => {
    const total = Object.values(mix).reduce((a, b) => a + b, 0) || 1;
    const obj = Object.fromEntries(
      Object.entries(mix).map(([k, v]) => [k, Math.round((v / total) * 100)])
    );
    return obj;
  }, [mix]);

  const setValue = (key, value) => {
    setMix((prev) => ({ ...prev, [key]: Math.max(0, Math.min(100, value)) }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900">Mix the Materials</h2>
            <p className="text-emerald-800/80 mt-3">
              Drag the sliders to see how plastic, sand, cement, and iron frames combine to form a strong eco-brick.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Controls */}
            <div className="space-y-6">
              {MATERIALS.map((m) => (
                <div key={m.key} className="p-5 rounded-2xl border border-emerald-100 bg-white shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: m.color }} />
                      <span className="font-semibold text-emerald-900">{m.label}</span>
                    </div>
                    <span className="text-sm text-emerald-800/80">{normalized[m.key]}%</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={mix[m.key]}
                    onChange={(e) => setValue(m.key, Number(e.target.value))}
                    className="w-full accent-emerald-600"
                    aria-label={`${m.label} percentage`}
                  />
                </div>
              ))}
            </div>

            {/* Visualization */}
            <div className="relative">
              <div className="p-6 rounded-3xl border border-emerald-100 bg-white shadow-sm">
                <motion.div
                  className="grid grid-cols-4 grid-rows-4 gap-1 aspect-[4/3]"
                  initial={{ rotate: -2, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                >
                  {Array.from({ length: 16 }).map((_, i) => {
                    const ratio = i / 16;
                    let color = MATERIALS[0].color;
                    if (ratio > normalized.plastic / 100) color = MATERIALS[1].color;
                    if (ratio > (normalized.plastic + normalized.sand) / 100) color = MATERIALS[2].color;
                    if (ratio > (normalized.plastic + normalized.sand + normalized.cement) / 100) color = MATERIALS[3].color;
                    return (
                      <motion.div
                        key={i}
                        className="rounded-md"
                        style={{ backgroundColor: color }}
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.02 * i }}
                      />
                    );
                  })}
                </motion.div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <Badge icon={<BarChart3 className="w-4 h-4" />} label={`Durability: ${Math.min(100, 60 + Math.round(normalized.cement * 0.4))}%`} />
                  <Badge icon={<Shield className="w-4 h-4" />} label={`Strength: ${Math.min(100, 55 + Math.round(normalized.iron * 0.5))}%`} />
                  <Badge icon={<Clock className="w-4 h-4" />} label={`Cure Time: ${Math.max(20, 100 - Math.round(normalized.sand * 0.3))}%`} />
                  <Badge icon={<DollarSign className="w-4 h-4" />} label={`Cost-efficiency: ${Math.min(100, 50 + Math.round(normalized.plastic * 0.5))}%`} />
                </div>
              </div>
            </div>
          </div>

          {/* Process steps */}
          <div className="mt-6">
            <div className="grid sm:grid-cols-4 gap-4">
              {[
                { title: 'Collect', desc: 'Waste plastic is collected and sorted.' },
                { title: 'Shred & Clean', desc: 'Plastic is shredded and washed.' },
                { title: 'Mix & Mold', desc: 'Blend with sand and cement, add iron frames.' },
                { title: 'Build', desc: 'Interlocking bricks installed quickly.' },
              ].map((s, i) => (
                <motion.div
                  key={s.title}
                  className="p-5 rounded-2xl border border-emerald-100 bg-white/70 backdrop-blur-sm"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="text-sm font-semibold text-emerald-700">Step {i + 1}</div>
                  <div className="text-emerald-900 font-bold">{s.title}</div>
                  <p className="text-sm text-emerald-800/80 mt-1">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
      {icon}
      <span>{label}</span>
    </div>
  );
}
