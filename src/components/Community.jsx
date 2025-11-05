import React, { useState } from 'react';
import { Mail, Phone, Users, Send } from 'lucide-react';

export default function Community() {
  const [form, setForm] = useState({ name: '', email: '', role: 'Volunteer', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="join" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        {/* Team */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 text-center">The Team</h2>
          <p className="text-center text-emerald-800/80 max-w-2xl mx-auto mt-3">
            A passionate group turning environmental challenges into practical solutions.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <TeamCard name="Abhinav Varma" title="CEO" skills="Problem-solving • Innovation" />
            <TeamCard name="Shaik Rohaan Janu" title="Manager" skills="Analytical • Leadership" />
          </div>
        </div>

        {/* Join & Contact */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="p-6 rounded-3xl border border-emerald-100 bg-emerald-50/50">
            <h3 className="text-2xl font-bold text-emerald-900">Join Us</h3>
            <p className="text-emerald-800/80 mt-2">Collaborate as a volunteer, partner, or investor.</p>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  className="w-full rounded-xl border border-emerald-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
                <input
                  type="email"
                  className="w-full rounded-xl border border-emerald-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <select
                  className="w-full rounded-xl border border-emerald-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                >
                  <option>Volunteer</option>
                  <option>Partner</option>
                  <option>Investor</option>
                </select>
                <div className="w-full" />
              </div>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-emerald-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="Tell us how you'd like to contribute..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-white font-semibold shadow-md shadow-emerald-600/30 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <Send className="w-4 h-4" /> Submit
              </button>
              {submitted && (
                <div className="mt-3 text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
                  Thanks for reaching out! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          <div className="p-6 rounded-3xl border border-emerald-100 bg-white shadow-sm">
            <h3 className="text-2xl font-bold text-emerald-900">Contact</h3>
            <p className="text-emerald-800/80 mt-2">We love collaborating with communities, NGOs, and professionals.</p>

            <div className="mt-6 space-y-3 text-emerald-800">
              <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-emerald-600" /><a href="mailto:hello@trashtotreasure.org" className="hover:underline">hello@trashtotreasure.org</a></div>
              <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-emerald-600" /><span>+1 (555) 245-7788</span></div>
              <div className="flex items-center gap-3"><Users className="w-5 h-5 text-emerald-600" /><span>@trashtotreasure • social</span></div>
            </div>

            <div className="mt-6 h-48 w-full rounded-2xl bg-emerald-50 border border-emerald-100 grid place-items-center text-emerald-700">
              Map preview
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamCard({ name, title, skills }) {
  return (
    <div className="p-6 rounded-3xl border border-emerald-100 bg-white shadow-sm flex items-center gap-5">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-200 to-emerald-400 flex items-center justify-center text-white font-bold text-xl">
        {name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
      </div>
      <div>
        <div className="font-bold text-emerald-900">{name}</div>
        <div className="text-sm text-emerald-700">{title}</div>
        <div className="text-xs mt-1 text-emerald-800/80">{skills}</div>
      </div>
    </div>
  );
}
