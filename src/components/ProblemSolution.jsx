import React from 'react';
import { Recycle, Leaf, Shield, Globe, BarChart3 } from 'lucide-react';

const items = [
  {
    title: 'Plastic Pollution',
    desc: 'Tons of plastic enter oceans and rivers every day, harming wildlife and communities.',
    icon: <Globe className="w-6 h-6 text-emerald-600" />,
  },
  {
    title: 'Slow Decomposition',
    desc: 'Plastic can take hundreds of years to break down, accumulating in land and water.',
    icon: <Leaf className="w-6 h-6 text-emerald-600" />,
  },
  {
    title: 'Climate Impact',
    desc: 'Improper waste handling releases greenhouse gases and toxic microplastics.',
    icon: <BarChart3 className="w-6 h-6 text-emerald-600" />,
  },
];

const features = [
  {
    title: 'Eco-friendly',
    desc: 'We upcycle plastic with sand, cement, and iron frames to form durable eco-bricks.',
    icon: <Recycle className="w-6 h-6 text-emerald-600" />,
  },
  {
    title: 'Modular & Strong',
    desc: 'LEGO-like interlocks make fast installation and natural landslide prevention.',
    icon: <Shield className="w-6 h-6 text-emerald-600" />,
  },
  {
    title: 'Cost Effective',
    desc: 'Lower material costs and faster builds save time and money for communities.',
    icon: <BarChart3 className="w-6 h-6 text-emerald-600" />,
  },
];

export default function ProblemSolution() {
  return (
    <section id="why" className="relative py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4">The Problem</h2>
            <p className="text-emerald-800/80 mb-8">
              Plastic pollution is one of the most urgent environmental challenges. It clogs rivers,
              pollutes oceans, and threatens biodiversity and human health.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {items.map((it) => (
                <div key={it.title} className="p-5 rounded-2xl border border-emerald-100 bg-emerald-50/40 hover:bg-emerald-50 transition">
                  <div className="flex items-center gap-3 mb-2">{it.icon}<span className="font-semibold text-emerald-900">{it.title}</span></div>
                  <p className="text-sm text-emerald-800/80">{it.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="how">
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4">Our Solution</h2>
            <p className="text-emerald-800/80 mb-8">
              We convert trash into treasure. Recycled plastic is cleaned, shredded, and blended with sand and cement,
              then reinforced with iron frames to create interlocking bricks that are strong, reusable, and planet-friendly.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {features.map((f) => (
                <div key={f.title} className="p-5 rounded-2xl border border-emerald-100 bg-white shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-3 mb-2">{f.icon}<span className="font-semibold text-emerald-900">{f.title}</span></div>
                  <p className="text-sm text-emerald-800/80">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
