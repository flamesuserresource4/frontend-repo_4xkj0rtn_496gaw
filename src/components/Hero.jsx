import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="relative h-[70vh] sm:h-[80vh] w-full overflow-hidden">
        <Spline
          scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay that doesn't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/90 via-white/30 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-emerald-900">
              Turning Trash into Treasure 🌍
            </h1>
            <p className="text-emerald-800/80 text-lg sm:text-xl leading-relaxed">
              Transforming plastic waste into eco-bricks that protect our planet.
              Strong, modular, and designed to prevent landslides while reducing pollution.
            </p>
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-white font-semibold shadow-md shadow-emerald-600/30 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 transition"
              >
                See How It Works
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#join"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-emerald-700 font-semibold border border-emerald-200 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 transition"
              >
                <PlayCircle className="w-5 h-5" />
                Join the Mission
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
