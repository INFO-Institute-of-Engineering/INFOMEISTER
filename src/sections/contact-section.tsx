'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-4 pb-24 pt-8 md:px-8 md:pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_30%_10%,_rgba(34,211,238,0.2),_transparent_45%),radial-gradient(circle_at_70%_20%,_rgba(59,130,246,0.15),_transparent_40%)]" />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.72 }}
        className="relative z-10 mb-14"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-100">
          <Mail size={12} />
          Get in Touch
        </div>

        <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
          Let&apos;s Connect &
          <span className="block text-gradient">Build Together</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Reach out to join INFOMEISTER, collaborate on projects, or partner with us in shaping the future of tech education.
        </p>
      </motion.div>

      <div className="relative z-10 grid gap-8 lg:grid-cols-3 mb-16">
        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.52, delay: 0 }}
          className="glass rounded-2xl border border-white/10 p-6"
        >
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/35 bg-cyan-400/12 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.25)]">
            <Mail size={24} />
          </div>
          <h3 className="mt-4 text-lg font-black text-white">Email</h3>
          <p className="mt-2 text-sm text-slate-300">infomeistercse@gmail.com</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.52, delay: 0.06 }}
          className="glass rounded-2xl border border-white/10 p-6"
        >
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-blue-300/35 bg-blue-400/12 text-blue-200 shadow-[0_0_20px_rgba(59,130,246,0.25)]">
            <MapPin size={24} />
          </div>
          <h3 className="mt-4 text-lg font-black text-white">Location</h3>
          <p className="mt-2 text-sm text-slate-300">CSE Department, Main Campus</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.52, delay: 0.12 }}
          className="glass rounded-2xl border border-white/10 p-6"
        >
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-violet-300/35 bg-violet-400/12 text-violet-200 shadow-[0_0_20px_rgba(139,92,246,0.25)]">
            <Phone size={24} />
          </div>
          <h3 className="mt-4 text-lg font-black text-white">Discord Community</h3>
          <p className="mt-2 text-sm text-slate-300">Join 500+ members</p>
        </motion.div>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.52, delay: 0.18 }}
        className="relative z-10 glass rounded-3xl border border-white/10 p-8 mb-16 neon-border"
      >
        <h3 className="text-2xl font-black text-white mb-6">Send us a Message</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-300/40 transition duration-300"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-300/40 transition duration-300"
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-semibold text-slate-300 mb-2">Message</label>
          <textarea
            placeholder="Tell us about your interest..."
            rows={5}
            className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-300/40 transition duration-300"
          />
        </div>
        <button
          type="submit"
          className="mt-6 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black rounded-xl hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition duration-300 transform hover:scale-105"
        >
          Send Message
        </button>
      </motion.form>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.52, delay: 0.24 }}
        className="relative z-10 border-t border-white/10 pt-8"
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div>
            <h4 className="font-black text-white mb-4">INFOMEISTER</h4>
            <p className="text-sm text-slate-400">United by passion, Driven by Excellence</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-cyan-300 transition">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-300 transition">About</a></li>
              <li><a href="#events" className="hover:text-cyan-300 transition">Events</a></li>
              <li><a href="#domains" className="hover:text-cyan-300 transition">Domains</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-cyan-300 transition">Discord</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition">Twitter</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-cyan-300 transition">Documentation</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition">Community</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-sm text-slate-400">© 2024 INFOMEISTER. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-cyan-300 transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-cyan-300 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-cyan-300 transition">
              <Github size={20} />
            </a>
          </div>
        </div>
      </motion.footer>
    </section>
  );
}
