import React from 'react';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import InteractiveMixer from './components/InteractiveMixer';
import Community from './components/Community';

function App() {
  return (
    <div className="font-inter text-emerald-900 bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-emerald-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold text-xl tracking-tight text-emerald-800">Trash to Treasure</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#why" className="hover:text-emerald-600">Why</a>
            <a href="#how" className="hover:text-emerald-600">How it works</a>
            <a href="#join" className="hover:text-emerald-600">Join</a>
          </nav>
          <a href="#join" className="hidden sm:inline-block rounded-full bg-emerald-600 text-white text-sm font-semibold px-4 py-2 hover:bg-emerald-700">Get Involved</a>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <ProblemSolution />
        <InteractiveMixer />
        <Community />
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-emerald-100 bg-emerald-50/50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-emerald-800/80">© {new Date().getFullYear()} Trash to Treasure. All rights reserved.</div>
          <div className="text-sm text-emerald-800/80">Built for awareness, education, and action.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
