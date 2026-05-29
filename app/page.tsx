'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu, X, Phone, ArrowRight, Shield, Award, Banknote, Gem,
  CheckCircle, Users, TrendingUp, Star, MapPin, Clock, ChevronDown,
} from 'lucide-react'

// ─────────────────────────────────────────────
//  NAVBAR
// ─────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  const links = ['Home', 'Services', 'How It Works', 'Rates', 'Contact']

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md shadow-black/5'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C8922A] to-[#a07820] flex items-center justify-center shadow-md shadow-[#C8922A]/25 group-hover:shadow-lg group-hover:shadow-[#C8922A]/30 transition-shadow">
              <Gem className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">
              <span className="text-[#1a1a2e]">SWARNA</span>
              <span className="text-[#C8922A]">KARA</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-9">
            {links.map(l => (
              <a
                key={l}
                href={'#' + l.toLowerCase().replace(/ /g, '-')}
                className="text-[#1a1a2e]/70 hover:text-[#C8922A] text-sm font-medium transition-colors"
              >
                {l}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-[#C8922A] to-[#a07820] text-white font-bold px-6 py-2.5 rounded-xl text-sm shadow-md shadow-[#C8922A]/20 hover:shadow-lg hover:shadow-[#C8922A]/25 hover:-translate-y-0.5 transition-all"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#1a1a2e] p-1"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed top-[68px] left-0 right-0 z-40 bg-white border-b border-[#E5E7EB] shadow-lg md:hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {links.map(l => (
                <a
                  key={l}
                  href={'#' + l.toLowerCase().replace(/ /g, '-')}
                  className="text-[#1a1a2e]/80 hover:text-[#C8922A] py-2.5 text-base font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {l}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-3 text-center bg-gradient-to-r from-[#C8922A] to-[#a07820] text-white font-bold px-6 py-3 rounded-xl text-sm shadow-md"
                onClick={() => setMenuOpen(false)}
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// ─────────────────────────────────────────────
//  HERO
// ─────────────────────────────────────────────
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#FAFAF8]">

      {/* Warm radial glow — top right */}
      <div className="absolute -top-32 -right-32 w-[700px] h-[700px] bg-gradient-to-br from-[#FEF7E6] via-[#F5B942]/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Warm radial glow — bottom left */}
      <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-[#FEF7E6] via-[#C8922A]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Floating decorative dots */}
      {[0,1,2,3,4,5].map(i => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#C8922A]/40"
          style={{
            left: `${10 + i * 16}%`,
            top: `${15 + (i % 3) * 28}%`,
          }}
          animate={{ y: [-12, 12, -12], opacity: [0.2, 0.55, 0.2] }}
          transition={{ duration: 4 + i * 0.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">

        {/* Malayalam tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[#C8922A] text-xl md:text-2xl mb-5 opacity-90 malayalam"
        >
          സ്വർണ വിശ്വാസം... സ്വർണകാരാ
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-extrabold text-5xl md:text-6xl lg:text-7xl mb-7 leading-[1.1] text-[#1a1a2e]"
        >
          Your Gold.
          <br />
          <span className="text-[#C8922A]">Your Trust.</span>
          <br />
          Your SWARNAKARA.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-[#6B7280] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Instant gold loans in Kollam with the lowest interest rates,
          transparent process, and 5000+ satisfied families.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="bg-gradient-to-r from-[#C8922A] to-[#a07820] text-white font-bold px-9 py-4 rounded-xl text-base shadow-lg shadow-[#C8922A]/25 flex items-center gap-2.5 hover:shadow-xl hover:shadow-[#C8922A]/30 hover:-translate-y-0.5 transition-all"
          >
            Apply Now <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2.5 px-7 py-3.5 border-2 border-[#E5E7EB] rounded-xl text-[#1a1a2e]/75 font-medium hover:border-[#C8922A] hover:text-[#C8922A] transition-all text-base"
          >
            <Phone className="w-5 h-5" /> Call Us
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 flex flex-col items-center gap-1 text-[#6B7280]"
        >
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </div>

      {/* Floating gem illustration */}
      <motion.div
        className="absolute bottom-10 right-[8%] hidden lg:block"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#C8922A] to-[#a07820] p-1 shadow-2xl shadow-[#C8922A]/30">
          <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
            <Gem className="w-12 h-12 text-[#C8922A]" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

// ─────────────────────────────────────────────
//  TRUST BAR
// ─────────────────────────────────────────────
function TrustBar() {
  const stats = [
    { icon: Users,     value: '5000+',  label: 'Happy Families' },
    { icon: Shield,    value: '10+',    label: 'Years of Trust' },
    { icon: Award,     value: 'RBI',     label: 'Registered' },
    { icon: Banknote,  value: '15 min',  label: 'Quick Disbursal' },
  ]
  return (
    <section className="py-14 bg-white border-y border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FEF7E6] flex items-center justify-center mx-auto mb-3">
                <s.icon className="w-6 h-6 text-[#C8922A]" />
              </div>
              <div className="font-extrabold text-2xl text-[#1a1a2e] mb-0.5">{s.value}</div>
              <div className="text-[#6B7280] text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
//  SERVICES
// ─────────────────────────────────────────────
function Services() {
  const services = [
    {
      icon: Gem,
      title: 'Gold Loan',
      desc: 'Get up to 90% of your gold value. Interest rates starting at just 9% p.a. with zero foreclosure penalties.',
      tag: 'Up to 90% Value',
    },
    {
      icon: Banknote,
      title: 'Loan Against Ornament',
      desc: 'Flexible tenure from 1 month to 36 months. Keep your ornaments safe while getting the cash you need.',
      tag: 'Flexible Tenure',
    },
    {
      icon: TrendingUp,
      title: 'Quick Cash',
      desc: '15-minute approval and instant disbursal. Your gold works for you without the long wait.',
      tag: '15 Min Approval',
    },
  ]
  return (
    <section id="services" className="py-24 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C8922A] text-sm font-bold uppercase tracking-widest mb-3">Our Services</p>
          <h2 className="font-extrabold text-3xl md:text-5xl text-[#1a1a2e]">What We Offer</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-8 relative overflow-hidden group hover:shadow-xl hover:shadow-[#C8922A]/10 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Tag */}
              <div className="absolute top-5 right-5 bg-[#FEF7E6] text-[#C8922A] text-xs font-bold px-3 py-1 rounded-lg">
                {s.tag}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FEF7E6] to-[#F5B942]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <s.icon className="w-7 h-7 text-[#C8922A]" />
              </div>

              <h3 className="font-bold text-xl text-[#1a1a2e] mb-3">{s.title}</h3>
              <p className="text-[#6B7280] leading-relaxed text-sm">{s.desc}</p>

              {/* Bottom arrow */}
              <div className="mt-6 flex items-center gap-1.5 text-[#C8922A] text-sm font-semibold group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
//  GOLD RATE TICKER
// ─────────────────────────────────────────────
function GoldRateTicker() {
  const rates = [
    '22K Gold: ₹7,425/gm',
    '24K Gold: ₹8,150/gm',
    '18K Gold: ₹6,120/gm',
    'Gold Loan Rate: From 9% p.a.',
  ]
  const doubled = [...rates, ...rates, ...rates, ...rates]

  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubled.map((r, i) => (
          <span key={i} className="mx-10 font-semibold text-sm text-white/90 tracking-wide">
            ◆ {r}
          </span>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
//  HOW IT WORKS
// ─────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { num: '01', title: 'Visit Us',         desc: 'Come to our branch or call us — we make it easy.' },
    { num: '02', title: 'Gold Valuation',   desc: 'Our certified appraiser checks purity and weight.' },
    { num: '03', title: 'Loan Approval',     desc: 'Get instant approval with transparent terms.' },
    { num: '04', title: 'Cash Transfer',    desc: 'Receive money instantly to your account or cash.' },
  ]
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C8922A] text-sm font-bold uppercase tracking-widest mb-3">Simple Process</p>
          <h2 className="font-extrabold text-3xl md:text-5xl text-[#1a1a2e]">How It Works</h2>
        </motion.div>

        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[#FEF7E6] via-[#C8922A] to-[#FEF7E6]" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-[#C8922A] to-[#a07820] flex items-center justify-center font-extrabold text-2xl text-white relative z-10 shadow-lg shadow-[#C8922A]/25 animate-pulse-gold">
                  {s.num}
                </div>
                <h3 className="font-bold text-lg text-[#1a1a2e] mb-2">{s.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
//  INTEREST RATES
// ─────────────────────────────────────────────
function InterestRates() {
  const rows = [
    { amount: 'Up to ₹1 Lakh',       rate: '9% p.a.',   note: 'Best for small needs',    best: true  },
    { amount: '₹1 Lakh – ₹5 Lakhs',  rate: '11% p.a.',  note: 'Most popular tier',        best: false },
    { amount: '₹5 Lakhs – ₹10 Lakhs', rate: '13% p.a.',  note: 'For larger amounts',       best: false },
    { amount: 'Above ₹10 Lakhs',      rate: 'Contact Us', note: 'Custom rates available',   best: false },
  ]
  return (
    <section id="rates" className="py-24 bg-[#FAFAF8]">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C8922A] text-sm font-bold uppercase tracking-widest mb-3">Transparent Rates</p>
          <h2 className="font-extrabold text-3xl md:text-5xl text-[#1a1a2e]">Interest Rates</h2>
        </motion.div>

        <div className="space-y-3">
          {rows.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              viewport={{ once: true }}
              className={`flex items-center justify-between p-5 rounded-2xl border transition-all ${
                r.best
                  ? 'bg-gradient-to-r from-[#FEF7E6] to-white border-[#C8922A]/30 shadow-md shadow-[#C8922A]/10'
                  : 'bg-white border-[#E5E7EB] hover:border-[#C8922A]/30 hover:shadow-sm'
              }`}
            >
              <div>
                <span className={`font-bold text-base ${r.best ? 'text-[#C8922A]' : 'text-[#1a1a2e]'}`}>
                  {r.amount}
                </span>
                {r.best && (
                  <span className="ml-3 text-xs bg-[#C8922A] text-white font-bold px-2.5 py-0.5 rounded-full">
                    Best Rate
                  </span>
                )}
                <p className="text-[#6B7280] text-xs mt-0.5">{r.note}</p>
              </div>
              <span className={`font-extrabold text-xl ${r.best ? 'text-[#C8922A]' : 'text-[#1a1a2e]'}`}>
                {r.rate}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="text-[#6B7280] text-xs text-center mt-6">
          * Rates subject to change. Visit our branch for exact rates applicable to your gold.
        </p>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
//  WHY US
// ─────────────────────────────────────────────
function WhyUs() {
  const features = [
    { icon: Shield,     title: 'Secure',        desc: 'Your gold is fully insured and stored safely in our vault.' },
    { icon: CheckCircle, title: 'Transparent',    desc: 'No hidden charges, no surprise fees. What you see is what you get.' },
    { icon: Award,       title: 'Certified',      desc: 'Purity testing done by certified appraisers you can trust.' },
    { icon: Banknote,    title: 'Lowest Rates',  desc: 'Interest rates starting at just 9% p.a. — truly the lowest.' },
  ]
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C8922A] text-sm font-bold uppercase tracking-widest mb-3">Why Choose Us</p>
          <h2 className="font-extrabold text-3xl md:text-5xl text-[#1a1a2e]">Why SWARNAKARA</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#FAFAF8] border border-[#E5E7EB] rounded-2xl p-8 text-center hover:shadow-lg hover:shadow-[#C8922A]/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FEF7E6] flex items-center justify-center mx-auto mb-5">
                <f.icon className="w-7 h-7 text-[#C8922A]" />
              </div>
              <h3 className="font-bold text-lg text-[#1a1a2e] mb-2">{f.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
//  TESTIMONIALS
// ─────────────────────────────────────────────
function Testimonials() {
  const reviews = [
    {
      name: 'Ravi Menon',
      text: 'Got my loan approved in just 20 minutes. Best gold loan experience I\'ve ever had.',
      rating: 5,
      location: 'Kollam',
    },
    {
      name: 'Smt. Lakshmi',
      text: 'Very transparent process. The staff explained every charge clearly. Highly recommend!',
      rating: 5,
      location: 'Kollam',
    },
    {
      name: 'Jose Thomas',
      text: 'My family has been banking with them for 8 years. Trustworthy, reliable, and fast.',
      rating: 5,
      location: 'Kollam',
    },
  ]
  return (
    <section className="py-24 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C8922A] text-sm font-bold uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="font-extrabold text-3xl md:text-5xl text-[#1a1a2e]">What Our Customers Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-8 hover:shadow-lg hover:shadow-[#C8922A]/10 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#C8922A] text-[#C8922A]" />
                ))}
              </div>
              <p className="text-[#1a1a2e] mb-5 italic leading-relaxed text-sm">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-[#FEF7E6] flex items-center justify-center text-[#C8922A] font-bold text-sm">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm text-[#1a1a2e]">{r.name}</p>
                  <p className="text-[#6B7280] text-xs">{r.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
//  CONTACT
// ─────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C8922A] text-sm font-bold uppercase tracking-widest mb-3">Contact Us</p>
          <h2 className="font-extrabold text-3xl md:text-5xl text-[#1a1a2e]">Get In Touch</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info cards */}
          <div className="space-y-5">
            {[
              {
                icon: MapPin,
                title: 'Address',
                lines: ['SWARNAKARA Gold Loans', 'Main Road, Kollam', 'Kerala 691001'],
              },
              {
                icon: Phone,
                title: 'Phone',
                lines: ['+91 98765 43210'],
              },
              {
                icon: Clock,
                title: 'Working Hours',
                lines: ['Mon – Sat: 9:00 AM – 6:00 PM', 'Sunday: Closed'],
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-[#FAFAF8] border border-[#E5E7EB] rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FEF7E6] flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-[#C8922A]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a2e] mb-1">{item.title}</h3>
                  {item.lines.map((line, j) => (
                    <p key={j} className="text-[#6B7280] text-sm">{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#F5F4F0] border border-[#E5E7EB] rounded-2xl overflow-hidden flex items-center justify-center min-h-[300px]"
          >
            <div className="text-center text-[#6B7280]">
              <MapPin className="w-10 h-10 mx-auto mb-3 text-[#C8922A]/50" />
              <p className="font-medium text-sm">Kollam, Kerala</p>
              <p className="text-xs mt-1">Map will be added here</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
//  FOOTER
// ─────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-10 bg-[#1a1a2e] text-white/60 text-center">
      <p className="text-sm">
        © 2025 SWARNAKARA Gold Loans. All rights reserved.
      </p>
      <p className="text-xs mt-2 opacity-60">
        Kollam, Kerala · RBI Registered Gold Loan Company
      </p>
    </footer>
  )
}

// ─────────────────────────────────────────────
//  PAGE ROOT
// ─────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <GoldRateTicker />
      <HowItWorks />
      <InterestRates />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
